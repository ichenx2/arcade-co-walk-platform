"use client";

import { BaseMap } from "@/components/map/base-map";
import { CaseMarkers } from "@/components/map/case-markers";
import type { CaseRecord } from "@/types";

type CaseMapProps = {
  cases: CaseRecord[];
  center: [number, number];
  zoom: number;
};

/**
 * Combines BaseMap + CaseMarkers in one module so every leaflet-touching
 * import lives behind a single ssr:false dynamic boundary (see
 * case-map-loader.tsx) — splitting them caused "window is not defined"
 * during SSR because CaseMarkers was still statically imported.
 */
export function CaseMap({ cases, center, zoom }: CaseMapProps) {
  return (
    <BaseMap center={center} zoom={zoom}>
      <CaseMarkers cases={cases} />
    </BaseMap>
  );
}
