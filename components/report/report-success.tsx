import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ObstructionType } from "@/types";

type ReportSuccessProps = {
  caseNumber: string;
  photoPreview: string | null;
  address: string;
  obstructionType: ObstructionType | null;
};

export function ReportSuccess({
  caseNumber,
  photoPreview,
  address,
  obstructionType,
}: ReportSuccessProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-card px-6 py-12 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-arcade-green-50 text-primary">
        <CheckCircle2 className="size-7" aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-xl font-bold text-foreground">回報成功！</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        感謝您協助守護騎樓通行安全，我們將盡快派員現場勘查。
      </p>
      <p className="mt-3 rounded-full bg-muted px-4 py-1.5 font-mono text-sm text-foreground">
        {caseNumber}
      </p>

      <div className="mt-6 flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-muted/40 p-4 text-left">
        {photoPreview ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={photoPreview}
              alt="回報照片"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        ) : null}
        <div className="text-sm">
          <p className="text-muted-foreground">
            阻礙類型：<span className="text-foreground">{obstructionType ?? "—"}</span>
          </p>
          <p className="mt-1 text-muted-foreground">
            地點：<span className="text-foreground">{address || "—"}</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex w-full max-w-sm flex-col gap-2 sm:flex-row">
        <Button render={<Link href="/" />} nativeButton={false} variant="outline" className="flex-1">
          回到首頁
        </Button>
        <Button render={<Link href="/cases/case-1" />} nativeButton={false} className="flex-1">
          查看範例案件
        </Button>
      </div>
    </div>
  );
}
