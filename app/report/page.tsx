import type { Metadata } from "next";
import { ReportFlow } from "@/components/report/report-flow";
import { PageHeroTitle, PageHeroDescription } from "@/components/shared/typography";

export const metadata: Metadata = {
  title: "回報問題",
  description: "拍照上傳，快速通報騎樓阻礙或空間問題，三個步驟即可完成。",
};

export default function ReportPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeroTitle>回報問題</PageHeroTitle>
      <PageHeroDescription>
        拍照上傳，快速通報騎樓阻礙或空間問題，三個步驟即可完成。
      </PageHeroDescription>

      <div className="mt-8">
        <ReportFlow />
      </div>
    </div>
  );
}
