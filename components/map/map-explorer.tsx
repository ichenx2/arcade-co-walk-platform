"use client";

import { useMemo, useState } from "react";
import { MapPinOff } from "lucide-react";
import { CaseMapLoader } from "@/components/map/case-map-loader";
import { MapLegend } from "@/components/map/map-legend";
import { MapFilterBar, type StatusFilter } from "@/components/map/map-filter-bar";
import { EmptyState } from "@/components/shared/empty-state";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/lib/constants";
import type { CaseRecord } from "@/types";

export function MapExplorer({ cases }: { cases: CaseRecord[] }) {
  const [filter, setFilter] = useState<StatusFilter>("全部");

  const counts = useMemo(() => {
    return {
      全部: cases.length,
      已通報: cases.filter((c) => c.status === "已通報").length,
      處理中: cases.filter((c) => c.status === "處理中").length,
      已完成: cases.filter((c) => c.status === "已完成").length,
    };
  }, [cases]);

  const filteredCases = useMemo(() => {
    if (filter === "全部") return cases;
    return cases.filter((c) => c.status === filter);
  }, [cases, filter]);

  return (
    <div className="mt-6 lg:mt-8">
      <MapFilterBar value={filter} onChange={setFilter} counts={counts} />

      <div
        className="relative mt-5 h-[60vh] min-h-[420px] overflow-hidden rounded-2xl border border-border sm:h-[70vh]"
        role="region"
        aria-label="騎樓案件分佈地圖"
      >
        <CaseMapLoader
          cases={filteredCases}
          center={DEFAULT_MAP_CENTER}
          zoom={DEFAULT_MAP_ZOOM}
        />
        <MapLegend className="absolute bottom-4 left-4 z-[1000]" />

        {filteredCases.length === 0 ? (
          <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-background/70 backdrop-blur-sm">
            <EmptyState
              icon={MapPinOff}
              title="沒有符合條件的案件"
              description="請嘗試切換其他狀態篩選。"
              className="border-none bg-card shadow-md"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
