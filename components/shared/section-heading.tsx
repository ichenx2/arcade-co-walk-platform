import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export function SectionHeading({
  title,
  href,
  linkLabel = "查看全部",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-end justify-between gap-4", className)}>
      <h2 className="text-xl font-bold text-foreground sm:text-2xl lg:text-4xl">
        {title}
      </h2>
      {href ? (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-0.5 text-sm font-medium text-primary transition-colors hover:text-arcade-green-800"
        >
          {linkLabel}
          <ChevronRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
