import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NewsArticle, NewsCategory } from "@/types";

export const NEWS_CATEGORY_STYLES: Record<NewsCategory, string> = {
  計畫公告: "bg-arcade-green-100 text-arcade-green-800",
  活動資訊: "bg-amber-100 text-amber-800",
  成果報告: "bg-sky-100 text-sky-800",
};

function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-arcade-green-200 hover:shadow-md">
      <div className="flex items-center gap-2.5">
        <time
          dateTime={article.publishedAt}
          className="text-xs text-muted-foreground"
        >
          {formatDate(article.publishedAt)}
        </time>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-xs font-medium",
            NEWS_CATEGORY_STYLES[article.category],
          )}
        >
          {article.category}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold text-foreground lg:text-lg">
        {article.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted-foreground lg:text-base lg:leading-7">
        {article.summary}
      </p>

      <Link
        href={`/news/${article.id}`}
        className="mt-4 inline-flex w-fit items-center gap-0.5 text-sm font-medium text-primary transition-colors hover:text-arcade-green-800"
      >
        閱讀更多
        <ChevronRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
