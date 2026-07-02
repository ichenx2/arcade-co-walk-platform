"use client";

import { useState } from "react";
import type { VotingPoll } from "@/types";

/** Local-state-only voting (no backend/persistence in this MVP). */
export function usePollVote(poll: VotingPoll) {
  const [options, setOptions] = useState(poll.options);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [votedOptionId, setVotedOptionId] = useState<string | null>(null);

  const total = options.reduce((sum, option) => sum + option.voteCount, 0);

  function getPercentage(optionId: string) {
    if (total === 0) return 0;
    const option = options.find((o) => o.id === optionId);
    return option ? Math.round((option.voteCount / total) * 100) : 0;
  }

  function submitVote() {
    if (!selectedOptionId || votedOptionId) return;
    const votedId = selectedOptionId;
    setOptions((current) =>
      current.map((option) =>
        option.id === votedId
          ? { ...option, voteCount: option.voteCount + 1 }
          : option,
      ),
    );
    setVotedOptionId(votedId);
  }

  return {
    options,
    total,
    selectedOptionId,
    setSelectedOptionId,
    votedOptionId,
    submitVote,
    getPercentage,
  };
}
