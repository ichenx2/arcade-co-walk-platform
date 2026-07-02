"use client";

import Image from "next/image";
import { useRef } from "react";
import { Camera, Sparkles, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ObstructionType } from "@/types";

export type AiSuggestion = {
  type: ObstructionType;
  confidence: number;
};

type PhotoUploadStepProps = {
  photoPreview: string | null;
  aiLoading: boolean;
  aiSuggestion: AiSuggestion | null;
  onFileSelect: (file: File) => void;
  onClear: () => void;
};

export function PhotoUploadStep({
  photoPreview,
  aiLoading,
  aiSuggestion,
  onFileSelect,
  onClear,
}: PhotoUploadStepProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2 className="text-lg font-bold text-foreground">上傳照片</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        拍攝或上傳騎樓阻礙現況，系統將自動協助判讀阻礙類型。
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="sr-only"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onFileSelect(file);
          event.target.value = "";
        }}
      />

      {!photoPreview ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="mt-5 flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-muted/40 py-16 text-center transition-colors hover:border-primary hover:bg-arcade-green-50"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-arcade-green-50 text-primary">
            <Camera className="size-6" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium text-foreground">
            點擊拍照或上傳照片
          </span>
          <span className="text-xs text-muted-foreground">
            支援 JPG、PNG，檔案大小 10MB 以內
          </span>
        </button>
      ) : (
        <div className="mt-5">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border">
            <Image
              src={photoPreview}
              alt="上傳的騎樓現況照片"
              fill
              unoptimized
              className="object-cover"
            />
            <button
              type="button"
              onClick={onClear}
              aria-label="移除照片"
              className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 rounded-2xl border border-arcade-green-200 bg-arcade-green-50 p-4">
            {aiLoading ? (
              <div className="flex items-center gap-2.5 text-sm text-arcade-green-800">
                <Loader2 className="size-4 shrink-0 animate-spin" aria-hidden="true" />
                AI 正在分析照片內容...
              </div>
            ) : aiSuggestion ? (
              <div className="flex items-start gap-2.5">
                <Sparkles
                  className="mt-0.5 size-4 shrink-0 text-arcade-green-700"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-arcade-green-800">
                    AI 判讀建議：{aiSuggestion.type}（信心度 {aiSuggestion.confidence}%）
                  </p>
                  <p className="mt-0.5 text-xs text-arcade-green-700/80">
                    已自動帶入下一步的阻礙類型，您可以於下一步調整。
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <Button
            variant="outline"
            onClick={() => inputRef.current?.click()}
            className="mt-3"
          >
            重新選擇照片
          </Button>
        </div>
      )}
    </div>
  );
}
