import { cn } from "@/lib/utils";
import type { CaseStatus } from "@/types";

export const STATUS_STYLES: Record<CaseStatus, { badge: string; dot: string }> = {
  已通報: { badge: "bg-slate-100 text-slate-700", dot: "bg-slate-500" },
  處理中: { badge: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  已完成: {
    badge: "bg-arcade-green-100 text-arcade-green-800",
    dot: "bg-arcade-green-600",
  },
};

export function CaseStatusBadge({
  status,
  className,
}: {
  status: CaseStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        STATUS_STYLES[status].badge,
        className,
      )}
    >
      <span
        className={cn("size-1.5 rounded-full", STATUS_STYLES[status].dot)}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
