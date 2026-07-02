import { cn } from "@/lib/utils";
import type { ObstructionType } from "@/types";

export const OBSTRUCTION_TYPES: ObstructionType[] = [
  "機車停放",
  "貨物堆置",
  "招牌外推",
  "施工阻礙",
  "攤販設置",
  "其他",
];

type ObstructionTypeSelectorProps = {
  value: ObstructionType | null;
  onChange: (value: ObstructionType) => void;
  className?: string;
};

export function ObstructionTypeSelector({
  value,
  onChange,
  className,
}: ObstructionTypeSelectorProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="radiogroup"
      aria-label="騎樓阻礙類型"
    >
      {OBSTRUCTION_TYPES.map((type) => {
        const active = value === type;
        return (
          <button
            key={type}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(type)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:bg-muted",
            )}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}
