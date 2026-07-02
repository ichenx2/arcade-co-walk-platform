import { cn } from "@/lib/utils";
import type { CaseStatus } from "@/types";

export type StatusFilter = CaseStatus | "全部";

const FILTERS: StatusFilter[] = ["全部", "已通報", "處理中", "已完成"];

type MapFilterBarProps = {
  value: StatusFilter;
  onChange: (value: StatusFilter) => void;
  counts: Record<StatusFilter, number>;
  className?: string;
};

export function MapFilterBar({ value, onChange, counts, className }: MapFilterBarProps) {
  return (
    <div
      className={cn("flex gap-2 overflow-x-auto pb-1", className)}
      role="group"
      aria-label="依案件狀態篩選"
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
            <span className={cn("ml-1.5", active ? "text-primary-foreground/70" : "text-muted-foreground/70")}>
              {counts[filter]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
