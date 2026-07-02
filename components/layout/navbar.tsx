"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS, REPORT_CTA, SITE_NAME } from "@/lib/constants";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

function isActiveLink(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav
          aria-label="主要導覽"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-[1px] left-0 h-0.5 w-full rounded-full bg-primary transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href={REPORT_CTA.href} />}
            nativeButton={false}
            className="hidden rounded-full lg:inline-flex"
          >
            {REPORT_CTA.label}
          </Button>

          {/* Mobile nav trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="開啟選單"
                />
              }
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full max-w-xs flex-col">
              <SheetHeader>
                <SheetTitle className="sr-only">{SITE_NAME} 選單</SheetTitle>
                <Logo />
              </SheetHeader>

              <Separator />

              <nav
                aria-label="行動版主要導覽"
                className="flex flex-1 flex-col gap-1 px-4"
              >
                {NAV_LINKS.map((link) => {
                  const active = isActiveLink(link.href, pathname);
                  return (
                    <SheetClose
                      key={link.href}
                      render={
                        <Link
                          href={link.href}
                          aria-current={active ? "page" : undefined}
                        />
                      }
                      nativeButton={false}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground",
                        active && "bg-accent text-primary",
                      )}
                    >
                      {link.label}
                    </SheetClose>
                  );
                })}
              </nav>

              <SheetFooter>
                <SheetClose
                  render={<Link href={REPORT_CTA.href} />}
                  nativeButton={false}
                  className="inline-flex h-10 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {REPORT_CTA.label}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
