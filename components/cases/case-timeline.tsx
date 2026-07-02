import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseTimelineStep } from "@/types";

function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

export function CaseTimeline({ steps }: { steps: CaseTimelineStep[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, index) => (
        <li key={step.label} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full border-2",
                step.completed
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground",
              )}
            >
              {step.completed ? (
                <Check className="size-4" aria-hidden="true" />
              ) : (
                <span className="size-2 rounded-full bg-current" aria-hidden="true" />
              )}
            </span>
            {index < steps.length - 1 ? (
              <span
                className={cn(
                  "my-1 w-px flex-1",
                  step.completed ? "bg-primary" : "bg-border",
                )}
                aria-hidden="true"
              />
            ) : null}
          </div>
          <div className="pb-8 last:pb-0">
            <p
              className={cn(
                "pt-1 text-sm font-bold",
                step.completed ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {step.label}
            </p>
            {step.timestamp ? (
              <time dateTime={step.timestamp} className="text-xs text-muted-foreground">
                {formatDate(step.timestamp)}
              </time>
            ) : (
              <p className="text-xs text-muted-foreground/70">尚未開始</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
