import type { Metadata } from "next";
import { NewsList } from "@/components/news/news-list";
import { getNews } from "@/services/news";
import { PageHeroTitle, PageHeroDescription } from "@/components/shared/typography";

export const metadata: Metadata = {
  title: "最新消息",
  description: "掌握騎樓共行平台的最新計畫公告、活動資訊與改善成果報告。",
};

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeroTitle>最新消息</PageHeroTitle>
      <PageHeroDescription>
        掌握騎樓共行平台的最新計畫公告、活動資訊與改善成果報告。
      </PageHeroDescription>

      <div className="mt-8">
        <NewsList news={news} />
      </div>
    </div>
  );
}
