"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePollVote } from "@/hooks/use-poll-vote";
import type { VotingPoll } from "@/types";

function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

export function VotingPollCard({ poll }: { poll: VotingPoll }) {
  const isEnded = poll.status === "已結束";
  const {
    options,
    total,
    selectedOptionId,
    setSelectedOptionId,
    votedOptionId,
    submitVote,
    getPercentage,
  } = usePollVote(poll);

  const canVote = !isEnded && !votedOptionId;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-bold text-foreground lg:text-lg">{poll.title}</h3>
        <Badge
          className={cn(
            "shrink-0",
            isEnded
              ? "bg-slate-100 text-slate-600"
              : "bg-arcade-green-100 text-arcade-green-800",
          )}
        >
          {poll.status}
        </Badge>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        投票期間：{formatDate(poll.startDate)} - {formatDate(poll.endDate)}
      </p>

      <div
        className="mt-5 flex flex-col gap-2"
        role={canVote ? "radiogroup" : undefined}
        aria-label={canVote ? "投票選項" : undefined}
      >
        {options.map((option) => {
          const percentage = getPercentage(option.id);
          const isSelected = selectedOptionId === option.id;
          const isVotedChoice = votedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              role={canVote ? "radio" : undefined}
              aria-checked={canVote ? isSelected : undefined}
              disabled={!canVote}
              onClick={() => setSelectedOptionId(option.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border p-2 text-left outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                canVote
                  ? "cursor-pointer hover:bg-muted/60"
                  : "cursor-default",
                isSelected ? "border-primary bg-accent" : "border-transparent",
              )}
            >
              <span
                className="size-9 shrink-0 rounded-md"
                style={{ backgroundColor: option.swatchColor }}
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="flex items-center gap-1 truncate text-sm font-medium text-foreground">
                    {option.label}
                    {isVotedChoice ? (
                      <Check className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    ) : null}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {percentage}%（{option.voteCount}票）
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              {canVote ? (
                <span
                  className={cn(
                    "size-4 shrink-0 rounded-full border-2",
                    isSelected ? "border-primary bg-primary" : "border-border",
                  )}
                  aria-hidden="true"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">共 {total} 票</p>

      {isEnded ? (
        <p className="mt-5 text-sm font-medium text-muted-foreground">投票已結束</p>
      ) : votedOptionId ? (
        <p className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary">
          <Check className="size-4" aria-hidden="true" />
          感謝您的投票
        </p>
      ) : (
        <Button
          type="button"
          onClick={submitVote}
          disabled={!selectedOptionId}
          className="mt-5 w-full rounded-full"
        >
          送出投票
        </Button>
      )}
    </div>
  );
}
