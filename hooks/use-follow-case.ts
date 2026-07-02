"use client";

import { useState } from "react";

/**
 * Local-state-only follow toggle (no backend/persistence in this MVP).
 * Optimistically adjusts the displayed follower count on toggle.
 */
export function useFollowCase(initialFollowerCount: number) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(initialFollowerCount);

  function toggleFollow() {
    // Calling setFollowerCount from *inside* the setIsFollowing updater
    // would be an impure updater — React's Strict Mode double-invokes
    // updaters in dev to catch exactly that, which doubled the side effect
    // (34 -> 36 instead of 34 -> 35). Compute `next` from the render-time
    // value instead, and call each setter independently at the top level.
    const next = !isFollowing;
    setIsFollowing(next);
    setFollowerCount((count) => (next ? count + 1 : Math.max(0, count - 1)));
  }

  return { isFollowing, followerCount, toggleFollow };
}
