"use client";

import { Marker } from "react-leaflet";
import { BaseMap } from "@/components/map/base-map";
import { createPinIcon } from "@/components/map/marker-icon";

type PickerMapProps = {
  center: [number, number];
  zoom: number;
  position: [number, number] | null;
  onPick: (lat: number, lng: number) => void;
};

/** Combined for the same reason as case-map.tsx — keeps every leaflet import behind one ssr:false boundary. */
export function PickerMap({ center, zoom, position, onPick }: PickerMapProps) {
  return (
    <BaseMap center={center} zoom={zoom} onMapClick={onPick}>
      {position ? <Marker position={position} icon={createPinIcon()} /> : null}
    </BaseMap>
  );
}
