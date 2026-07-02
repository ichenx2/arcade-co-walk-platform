import { PageHeroTitle, PageHeroDescription } from "@/components/shared/typography";

export function ProjectHero() {
  return (
    <div className="rounded-3xl bg-arcade-green-800 px-6 py-10 text-white sm:px-10 sm:py-14">
      <p className="text-sm font-medium text-arcade-green-100">計畫介紹</p>
      <PageHeroTitle className="mt-2 text-white">
        還路於人——用資料與協作，重新設計騎樓
      </PageHeroTitle>
      <PageHeroDescription className="text-arcade-green-50/90">
        「騎樓共行平台」是一套結合公民回報、資料治理與跨部門協作的城市治理提案，
        目標是讓騎樓重新成為安全、暢通的公共通行空間，而非機車與貨物的臨時停放區。
      </PageHeroDescription>
    </div>
  );
}
