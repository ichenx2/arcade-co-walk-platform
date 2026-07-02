"use client";

import { ObstructionTypeSelector } from "@/components/shared/obstruction-type-selector";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ObstructionType } from "@/types";

type DetailsStepProps = {
  obstructionType: ObstructionType | null;
  description: string;
  onTypeChange: (type: ObstructionType) => void;
  onDescriptionChange: (description: string) => void;
};

export function DetailsStep({
  obstructionType,
  description,
  onTypeChange,
  onDescriptionChange,
}: DetailsStepProps) {
  return (
    <div>
      <h2 className="text-lg font-bold text-foreground">案件資訊</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        確認阻礙類型，並補充現場說明供處理人員參考。
      </p>

      <div className="mt-5">
        <Label>阻礙類型</Label>
        <ObstructionTypeSelector
          value={obstructionType}
          onChange={onTypeChange}
          className="mt-2"
        />
      </div>

      <div className="mt-5">
        <Label htmlFor="description">現場說明（選填）</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(event) => onDescriptionChange(event.target.value)}
          placeholder="例：騎樓遭 3 輛機車長期佔用，行人需繞行至車道，具跌倒風險。"
          rows={5}
          className="mt-1.5"
        />
      </div>
    </div>
  );
}
