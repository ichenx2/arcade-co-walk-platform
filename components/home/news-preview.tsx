import { SectionHeading } from "@/components/shared/section-heading";
import { NewsCard } from "@/components/news/news-card";
import { getLatestNews } from "@/services/news";

export async function NewsPreview() {
  const news = await getLatestNews(3);

  return (
    <div>
      <SectionHeading title="最新消息" href="/news" />
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
