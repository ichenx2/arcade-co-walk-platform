/**
 * Shared domain types. These are written to match what a real backend API
 * would return, so swapping data/*.ts + services/*.ts for real network
 * calls later doesn't require reshaping the types consumed by components.
 */

export type NewsCategory = "計畫公告" | "活動資訊" | "成果報告";

export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  category: NewsCategory;
  publishedAt: string; // ISO date
  content: string[]; // article body, one paragraph per entry
};

export type VoteOption = {
  id: string;
  label: string;
  swatchColor: string;
  voteCount: number;
};

export type VotingPoll = {
  id: string;
  title: string;
  status: "進行中" | "已結束";
  startDate: string; // ISO date
  endDate: string; // ISO date
  options: VoteOption[];
};

export type PartnerType = {
  id: string;
  label: string;
  icon: "users" | "store" | "landmark";
};

export type PlatformStatistics = {
  reportedCount: number;
  inProgressCount: number;
  completedCount: number;
  benefitedPopulation: number;
};

export type FriendlyStore = {
  id: string;
  name: string;
  district: string;
  category: string;
  certifiedDate: string; // ISO date
};

export type CaseStatus = "已通報" | "處理中" | "已完成";

export type ObstructionType =
  | "機車停放"
  | "貨物堆置"
  | "招牌外推"
  | "施工阻礙"
  | "攤販設置"
  | "其他";

export type CaseTimelineStep = {
  label: string;
  timestamp: string | null; // null = not yet reached
  completed: boolean;
  description?: string;
};

export type CaseLocation = {
  district: string;
  address: string;
  lat: number;
  lng: number;
};

export type CaseRecord = {
  id: string;
  caseNumber: string;
  title: string;
  description: string;
  type: ObstructionType;
  status: CaseStatus;
  location: CaseLocation;
  reportedAt: string; // ISO date
  photos: string[];
  timeline: CaseTimelineStep[];
  followerCount: number;
};
