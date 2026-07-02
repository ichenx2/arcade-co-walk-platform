import Link from "next/link";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_NAME, SITE_NAME_EN } from "@/lib/constants";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  /** "inverted" is for use on dark backgrounds, e.g. the footer. */
  variant?: "default" | "inverted";
};

export function Logo({
  className,
  showWordmark = true,
  variant = "default",
}: LogoProps) {
  const inverted = variant === "inverted";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 shrink-0", className)}
      aria-label={`${SITE_NAME} — 回到首頁`}
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full shrink-0",
          inverted
            ? "bg-white/15 text-white ring-1 ring-inset ring-white/30"
            : "bg-primary text-primary-foreground",
        )}
      >
        <Building2 className="size-5" strokeWidth={2} aria-hidden="true" />
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              "text-base font-bold",
              inverted ? "text-white" : "text-foreground",
            )}
          >
            {SITE_NAME}
          </span>
          <span
            className={cn(
              "text-[11px] tracking-wide",
              inverted ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {SITE_NAME_EN}
          </span>
        </span>
      ) : null}
    </Link>
  );
}
