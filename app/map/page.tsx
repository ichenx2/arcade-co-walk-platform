import type { Metadata } from "next";
import { MapExplorer } from "@/components/map/map-explorer";
import { getCases } from "@/services/cases";
import { PageHeroTitle, PageHeroDescription } from "@/components/shared/typography";

export const metadata: Metadata = {
  title: "互動地圖",
  description: "查看各街區騎樓通行案件與處理進度，點選地圖上的標記即可查看案件詳情。",
};

export default async function MapPage() {
  const cases = await getCases();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeroTitle>互動地圖</PageHeroTitle>
      <PageHeroDescription>
        查看各街區騎樓通行案件與處理進度，點選地圖上的標記即可查看案件詳情。
      </PageHeroDescription>

      <MapExplorer cases={cases} />
    </div>
  );
}
