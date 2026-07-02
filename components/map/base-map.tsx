"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import { cn } from "@/lib/utils";

type BaseMapProps = {
  center: LatLngExpression;
  zoom: number;
  className?: string;
  onMapClick?: (lat: number, lng: number) => void;
  children?: React.ReactNode;
};

function ClickHandler({
  onMapClick,
}: {
  onMapClick?: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(event) {
      onMapClick?.(event.latlng.lat, event.latlng.lng);
    },
  });
  return null;
}

export function BaseMap({ center, zoom, className, onMapClick, children }: BaseMapProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      className={cn("z-0 h-full w-full", className)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler onMapClick={onMapClick} />
      {children}
    </MapContainer>
  );
}
