import { NEWS } from "@/data/news";
import type { NewsArticle } from "@/types";

export async function getNews(): Promise<NewsArticle[]> {
  return [...NEWS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getLatestNews(limit = 3): Promise<NewsArticle[]> {
  const news = await getNews();
  return news.slice(0, limit);
}

export async function getNewsById(id: string): Promise<NewsArticle | undefined> {
  const news = await getNews();
  return news.find((article) => article.id === id);
}
