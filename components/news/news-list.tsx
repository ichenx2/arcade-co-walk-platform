"use client";

import { useMemo, useState } from "react";
import { Newspaper } from "lucide-react";
import { NewsCard } from "@/components/news/news-card";
import { NewsFilterBar, type NewsCategoryFilter } from "@/components/news/news-filter-bar";
import { EmptyState } from "@/components/shared/empty-state";
import type { NewsArticle } from "@/types";

export function NewsList({ news }: { news: NewsArticle[] }) {
  const [filter, setFilter] = useState<NewsCategoryFilter>("全部");

  const counts = useMemo(() => {
    return {
      全部: news.length,
      計畫公告: news.filter((n) => n.category === "計畫公告").length,
      活動資訊: news.filter((n) => n.category === "活動資訊").length,
      成果報告: news.filter((n) => n.category === "成果報告").length,
    };
  }, [news]);

  const filteredNews = useMemo(() => {
    if (filter === "全部") return news;
    return news.filter((n) => n.category === filter);
  }, [news, filter]);

  return (
    <div>
      <NewsFilterBar value={filter} onChange={setFilter} counts={counts} />

      {filteredNews.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Newspaper}
          title="目前沒有符合條件的消息"
          description="請嘗試切換其他分類，或稍後再回來查看。"
          className="mt-8"
        />
      )}
    </div>
  );
}
