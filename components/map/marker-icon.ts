import L from "leaflet";
import { STATUS_STYLES } from "@/components/shared/case-status-badge";
import type { CaseStatus } from "@/types";

/**
 * Custom divIcon instead of Leaflet's default marker images — the default
 * marker PNGs resolve relative to leaflet's own package path, which breaks
 * under bundlers (the classic "broken marker icon" issue) unless patched.
 */
export function createStatusMarkerIcon(status: CaseStatus, highlighted = false) {
  const dotClass = STATUS_STYLES[status].dot;
  const size = highlighted ? "size-6" : "size-5";
  const half = highlighted ? 12 : 10;
  return L.divIcon({
    className: "",
    html: `<span class="block ${size} cursor-pointer rounded-full border-[3px] border-white shadow-lg transition-transform duration-150 ease-out hover:scale-125 active:scale-95 ${dotClass}"></span>`,
    iconSize: highlighted ? [24, 24] : [20, 20],
    iconAnchor: [half, half],
  });
}

export function createPinIcon() {
  return L.divIcon({
    className: "",
    html: `<span class="block size-5 rounded-full border-2 border-white bg-primary shadow-md"></span>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
}
