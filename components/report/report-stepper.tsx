import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = ["上傳照片", "選擇地點", "案件資訊"];

export function ReportStepper({ currentStep }: { currentStep: number }) {
  return (
    <ol className="flex items-center" aria-label="回報流程進度">
      {STEPS.map((label, index) => {
        const stepNumber = index + 1;
        const completed = stepNumber < currentStep;
        const active = stepNumber === currentStep;

        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                aria-current={active ? "step" : undefined}
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors sm:size-9",
                  completed && "bg-primary text-primary-foreground",
                  active && "bg-primary text-primary-foreground",
                  !completed && !active && "bg-muted text-muted-foreground",
                )}
              >
                {completed ? <Check className="size-4" aria-hidden="true" /> : stepNumber}
              </span>
              <span
                className={cn(
                  "text-xs font-medium whitespace-nowrap",
                  active || completed ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </div>
            {stepNumber < STEPS.length ? (
              <div
                className={cn(
                  "mx-2 mb-5 h-px flex-1 sm:mx-4",
                  completed ? "bg-primary" : "bg-border",
                )}
                aria-hidden="true"
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
