"use client";

import nextDynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

export const CaseMapLoader = nextDynamic(
  () => import("@/components/map/case-map").then((mod) => mod.CaseMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-muted">
        <Loader2 className="size-6 animate-spin text-muted-foreground" aria-hidden="true" />
      </div>
    ),
  },
);
