"use client";

import { MapPin } from "lucide-react";
import { PickerMapLoader } from "@/components/map/picker-map-loader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/lib/constants";

type GeocodeStatus = "idle" | "located" | "not-found";

type LocationStepProps = {
  position: [number, number] | null;
  address: string;
  geocodeStatus: GeocodeStatus;
  onPick: (lat: number, lng: number) => void;
  onAddressChange: (address: string) => void;
};

export function LocationStep({
  position,
  address,
  geocodeStatus,
  onPick,
  onAddressChange,
}: LocationStepProps) {
  return (
    <div>
      <h2 className="text-lg font-bold text-foreground">選擇地點</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        點選地圖標示騎樓位置（示意），並填寫詳細地址供現場勘查參考。
      </p>

      <div className="mt-5">
        <Label htmlFor="address">詳細地址</Label>
        <Input
          id="address"
          value={address}
          onChange={(event) => onAddressChange(event.target.value)}
          placeholder="例：高雄市鼓山區鼓波街 12 號前"
          className="mt-1.5"
        />
      </div>

      <div
        className="mt-4 h-[320px] w-full overflow-hidden rounded-2xl border border-border sm:h-[380px]"
        role="region"
        aria-label="選擇案件地點地圖"
      >
        <PickerMapLoader
          center={position ?? DEFAULT_MAP_CENTER}
          zoom={DEFAULT_MAP_ZOOM}
          position={position}
          onPick={onPick}
        />
      </div>

      {geocodeStatus === "located" ? (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-arcade-green-700">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          已根據地址定位，可再點選地圖微調位置。
        </p>
      ) : geocodeStatus === "not-found" ? (
        <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-700">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          目前無法自動定位，請點選地圖選擇位置。
        </p>
      ) : null}

      <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
        {position
          ? `已選擇座標：${position[0].toFixed(5)}, ${position[1].toFixed(5)}`
          : "尚未選擇地點，請點選地圖上的位置"}
      </p>
    </div>
  );
}
