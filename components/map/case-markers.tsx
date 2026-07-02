"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Marker, Popup } from "react-leaflet";
import { createStatusMarkerIcon } from "@/components/map/marker-icon";
import { CaseStatusBadge } from "@/components/shared/case-status-badge";
import type { CaseRecord } from "@/types";

export function CaseMarkers({ cases }: { cases: CaseRecord[] }) {
  return (
    <>
      {cases.map((c) => (
        <Marker
          key={c.id}
          position={[c.location.lat, c.location.lng]}
          icon={createStatusMarkerIcon(c.status)}
        >
          <Popup className="case-popup">
            <div className="flex flex-col items-start gap-1.5 py-3 pr-5 pl-3">
              <p className="text-base leading-snug font-semibold text-foreground">{c.title}</p>
              <CaseStatusBadge status={c.status} />
              <p className="flex items-start gap-1 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                {c.location.address}
              </p>
              <Link
                href={`/cases/${c.id}`}
                className="text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                查看案件詳情 →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
