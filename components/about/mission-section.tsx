import { PageHeroTitle } from "@/components/shared/typography";

export function MissionSection() {
  return (
    <div>
      <PageHeroTitle>關於我們</PageHeroTitle>

      <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <p className="text-xs font-medium text-primary">我們的使命</p>
        <p className="mt-2 max-w-2xl text-lg leading-relaxed font-medium text-foreground sm:text-xl lg:max-w-3xl">
          讓每一條騎樓，都成為任何人都能安心行走的路。
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-4xl lg:text-lg lg:leading-8">
          「騎樓共行平台」希望透過公民參與、資料治理與跨部門協作，
          讓長期被機車、貨物與招牌占用的騎樓空間，重新回到行人手中——
          不只是通報一個問題，而是建立一套能持續運作、可被驗證成效的城市治理機制。
        </p>
      </div>
    </div>
  );
}
