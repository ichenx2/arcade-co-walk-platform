import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { NEWS_CATEGORY_STYLES } from "@/components/news/news-card";
import { getNewsById } from "@/services/news";

type NewsDetailPageProps = {
  params: Promise<{ id: string }>;
};

function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getNewsById(id);
  if (!article) return { title: "最新消息" };
  return { title: article.title, description: article.summary };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const article = await getNewsById(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/news"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        返回最新消息
      </Link>

      <div className="mt-4 flex items-center gap-2.5">
        <time dateTime={article.publishedAt} className="text-sm text-muted-foreground">
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

      <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
        {article.title}
      </h1>

      <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6">
        {article.content.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-foreground/90 sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
