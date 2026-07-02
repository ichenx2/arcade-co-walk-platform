"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFollowCase } from "@/hooks/use-follow-case";

export function FollowCaseButton({ initialFollowerCount }: { initialFollowerCount: number }) {
  const { isFollowing, followerCount, toggleFollow } = useFollowCase(initialFollowerCount);

  return (
    <div className="flex items-center gap-3">
      <Button
        type="button"
        variant={isFollowing ? "default" : "outline"}
        onClick={toggleFollow}
        aria-pressed={isFollowing}
        className="gap-1.5"
      >
        <Heart
          className={cn("size-4", isFollowing && "fill-current")}
          aria-hidden="true"
        />
        {isFollowing ? "追蹤中" : "追蹤此案件"}
      </Button>
      <span className="text-sm text-muted-foreground">{followerCount} 人關注</span>
    </div>
  );
}
