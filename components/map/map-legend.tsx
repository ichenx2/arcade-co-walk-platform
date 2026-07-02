import { cn } from "@/lib/utils";
import { STATUS_STYLES } from "@/components/shared/case-status-badge";
import type { CaseStatus } from "@/types";

const STATUSES: CaseStatus[] = ["已通報", "處理中", "已完成"];

export function MapLegend({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-3 shadow-sm lg:p-4",
        className,
      )}
    >
      <p className="mb-2 text-xs font-bold text-foreground lg:mb-2.5 lg:text-lg">圖例說明</p>
      <ul className="flex flex-col gap-1.5 lg:gap-2">
        {STATUSES.map((status) => (
          <li key={status} className="flex items-center gap-2 text-sm text-foreground lg:text-base">
            <span
              className={cn("size-2.5 shrink-0 rounded-full", STATUS_STYLES[status].dot)}
              aria-hidden="true"
            />
            {status}
          </li>
        ))}
      </ul>
    </div>
  );
}
