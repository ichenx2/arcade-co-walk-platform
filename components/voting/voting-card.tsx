import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getVotePercentage, getVoteTotal } from "@/services/voting";
import type { VotingPoll } from "@/types";

function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

export function VotingCard({ poll }: { poll: VotingPoll }) {
  const total = getVoteTotal(poll);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-bold text-foreground lg:text-lg">{poll.title}</h3>
        <Badge className="bg-arcade-green-100 text-arcade-green-800 shrink-0">
          {poll.status}
        </Badge>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        投票期間：{formatDate(poll.startDate)} - {formatDate(poll.endDate)}
      </p>

      <div className="mt-5 flex flex-col gap-4">
        {poll.options.map((option) => {
          const percentage = getVotePercentage(poll, option.id);
          return (
            <div
              key={option.id}
              className="group flex items-center gap-3 rounded-lg p-1.5 -m-1.5 transition-colors hover:bg-muted/60"
            >
              <span
                className="size-9 shrink-0 rounded-md transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: option.swatchColor }}
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-sm font-medium text-foreground">
                    {option.label}
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
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">共 {total} 票</p>

      <Button
        render={<Link href="/voting" />}
        nativeButton={false}
        className="mt-5 w-full rounded-full"
      >
        立即投票
      </Button>
    </div>
  );
}
