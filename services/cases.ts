import { CASES } from "@/data/cases";
import type { CaseRecord, CaseStatus } from "@/types";

export async function getCases(): Promise<CaseRecord[]> {
  return [...CASES].sort(
    (a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime(),
  );
}

export async function getCaseById(id: string): Promise<CaseRecord | undefined> {
  return CASES.find((c) => c.id === id);
}

export async function getCasesByStatus(
  status: CaseStatus | "全部",
): Promise<CaseRecord[]> {
  const cases = await getCases();
  if (status === "全部") return cases;
  return cases.filter((c) => c.status === status);
}

export async function getCaseStatusCounts(): Promise<Record<CaseStatus, number>> {
  const cases = await getCases();
  return {
    已通報: cases.filter((c) => c.status === "已通報").length,
    處理中: cases.filter((c) => c.status === "處理中").length,
    已完成: cases.filter((c) => c.status === "已完成").length,
  };
}
