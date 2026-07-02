import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CaseStatusBadge } from "@/components/shared/case-status-badge";
import { CasePhotos } from "@/components/cases/case-photos";
import { CaseTimeline } from "@/components/cases/case-timeline";
import { CaseInfoPanel } from "@/components/cases/case-info-panel";
import { FollowCaseButton } from "@/components/cases/follow-case-button";
import { getCaseById } from "@/services/cases";

type CaseDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: CaseDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const caseRecord = await getCaseById(id);
  if (!caseRecord) return { title: "案件詳情" };
  return { title: caseRecord.title, description: caseRecord.description };
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { id } = await params;
  const caseRecord = await getCaseById(id);

  if (!caseRecord) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/map"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        返回地圖
      </Link>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <CaseStatusBadge status={caseRecord.status} />
            <span className="font-mono text-xs text-muted-foreground">
              {caseRecord.caseNumber}
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            {caseRecord.title}
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {caseRecord.description}
          </p>
        </div>

        <FollowCaseButton initialFollowerCount={caseRecord.followerCount} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-8 lg:col-span-2">
          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">現況照片</h2>
            <CasePhotos photos={caseRecord.photos} title={caseRecord.title} />
          </section>

          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">處理進度</h2>
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <CaseTimeline steps={caseRecord.timeline} />
            </div>
          </section>
        </div>

        <div>
          <CaseInfoPanel caseRecord={caseRecord} />
        </div>
      </div>
    </div>
  );
}
