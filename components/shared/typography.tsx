import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Site-wide typography scale (desktop / lg and up):
 *   Hero title 48px -> Hero description 20px
 *   -> Section title 36px -> Section description 18px
 *   -> Card/timeline/flow title 18px -> description 16px
 * Kept as shared components (rather than per-page className strings) so the
 * whole site stays on one scale — future size changes only happen here.
 */

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export function PageHeroTitle({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "animate-in fade-in slide-in-from-bottom-2 text-2xl leading-tight font-bold text-foreground duration-500 sm:text-3xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function PageHeroDescription({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "animate-in fade-in slide-in-from-bottom-2 mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground delay-100 duration-500 sm:text-base lg:mt-4 lg:max-w-[960px] lg:text-xl lg:leading-9",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: TypographyProps & { as?: ElementType }) {
  return (
    <Tag className={cn("text-xl font-bold text-foreground sm:text-2xl lg:text-4xl", className)}>
      {children}
    </Tag>
  );
}

export function SectionDescription({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-5xl lg:text-lg lg:leading-8",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Shared title/description tier for info cards, timeline steps, flow nodes, and small in-block headings. */
export function InfoCardTitle({
  children,
  className,
  as: Tag = "p",
}: TypographyProps & { as?: ElementType }) {
  return (
    <Tag className={cn("text-sm font-bold text-foreground lg:text-lg", className)}>
      {children}
    </Tag>
  );
}

export function InfoCardDescription({
  children,
  className,
  as: Tag = "p",
}: TypographyProps & { as?: ElementType }) {
  return (
    <Tag
      className={cn(
        "mt-1 text-xs leading-relaxed text-muted-foreground lg:mt-2 lg:text-base lg:leading-7",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
