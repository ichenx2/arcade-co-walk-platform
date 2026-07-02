import { cn } from "@/lib/utils";
import type { NewsCategory } from "@/types";

export type NewsCategoryFilter = NewsCategory | "全部";

const FILTERS: NewsCategoryFilter[] = ["全部", "計畫公告", "活動資訊", "成果報告"];

type NewsFilterBarProps = {
  value: NewsCategoryFilter;
  onChange: (value: NewsCategoryFilter) => void;
  counts: Record<NewsCategoryFilter, number>;
  className?: string;
};

export function NewsFilterBar({ value, onChange, counts, className }: NewsFilterBarProps) {
  return (
    <div
      className={cn("flex gap-2 overflow-x-auto pb-1", className)}
      role="group"
      aria-label="依分類篩選消息"
    >
      {FILTERS.map((filter) => {
        const active = filter === value;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={active}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {filter}
            <span
              className={cn(
                "ml-1.5",
                active ? "text-primary-foreground/70" : "text-muted-foreground/70",
              )}
            >
              {counts[filter]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
