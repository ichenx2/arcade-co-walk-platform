import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
};

export function EmptyState({ icon: Icon, title, description, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card/50 px-6 py-12 text-center",
        className,
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-bold text-foreground lg:text-base">{title}</p>
        {description ? (
          <p className="mt-1 max-w-sm text-xs text-muted-foreground lg:text-sm">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
