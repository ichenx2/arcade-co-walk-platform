import type { CaseRecord, CaseStatus, CaseTimelineStep } from "@/types";

const TIMELINE_LABELS = [
  "案件已受理",
  "現場勘查完成",
  "研擬改善方案中",
  "改善施工中",
  "改善完成",
];

/** Derives a plausible timeline from status + report date, avoiding 35 hand-written entries. */
function buildTimeline(status: CaseStatus, reportedAt: string): CaseTimelineStep[] {
  const completedCount = status === "已通報" ? 1 : status === "處理中" ? 3 : 5;
  const base = new Date(reportedAt);

  return TIMELINE_LABELS.map((label, index) => {
    if (index >= completedCount) {
      return { label, timestamp: null, completed: false };
    }
    const date = new Date(base);
    date.setDate(date.getDate() + index * 3);
    return {
      label,
      timestamp: date.toISOString().slice(0, 10),
      completed: true,
    };
  });
}

type CaseSeed = Omit<CaseRecord, "timeline">;

const CASE_SEEDS: CaseSeed[] = [
  {
    id: "case-1",
    caseNumber: "#20260615001",
    title: "騎樓柱阻礙通行",
    description:
      "多輛機車長期停放於騎樓下，行人與輪椅使用者需繞行至車道，具高風險。",
    type: "機車停放",
    status: "處理中",
    location: {
      district: "高雄市鼓山區",
      address: "鼓波街 12 號前",
      lat: 22.6415,
      lng: 120.2825,
    },
    reportedAt: "2026-06-15",
    photos: ["/images/cases/scooters-arcade.jpg"],
    followerCount: 34,
  },
  {
    id: "case-2",
    caseNumber: "#20260620002",
    title: "店家貨物堆置佔用騎樓",
    description:
      "店家長期將貨物與紙箱堆放於騎樓，導致行人通道寬度不足 1 公尺。",
    type: "貨物堆置",
    status: "已通報",
    location: {
      district: "高雄市鼓山區",
      address: "臨海二路 45 號前",
      lat: 22.636,
      lng: 120.2795,
    },
    reportedAt: "2026-06-20",
    photos: ["/images/hero-street.jpg"],
    followerCount: 8,
  },
  {
    id: "case-3",
    caseNumber: "#20260510003",
    title: "招牌外推影響淨空高度",
    description: "店家招牌外推超出騎樓紅線，已完成拆除並改善淨空高度。",
    type: "招牌外推",
    status: "已完成",
    location: {
      district: "高雄市鼓山區",
      address: "美術館路 88 號前",
      lat: 22.6455,
      lng: 120.285,
    },
    reportedAt: "2026-05-10",
    photos: ["/images/cases/scooters-alley.jpg"],
    followerCount: 19,
  },
  {
    id: "case-4",
    caseNumber: "#20260603004",
    title: "機車違規停放阻擋輪椅通行",
    description: "騎樓通道遭機車兩側夾停，輪椅與嬰兒車無法通過。",
    type: "機車停放",
    status: "處理中",
    location: {
      district: "高雄市鼓山區",
      address: "內惟路 120 號前",
      lat: 22.639,
      lng: 120.287,
    },
    reportedAt: "2026-06-03",
    photos: ["/images/cases/scooters-arcade.jpg"],
    followerCount: 12,
  },
  {
    id: "case-5",
    caseNumber: "#20260610005",
    title: "施工材料堆置騎樓",
    description: "鄰近工地將鋼筋與建材暫置於騎樓，夜間缺乏警示標誌。",
    type: "施工阻礙",
    status: "處理中",
    location: {
      district: "高雄市鼓山區",
      address: "裕誠路 356 號前",
      lat: 22.633,
      lng: 120.29,
    },
    reportedAt: "2026-06-10",
    photos: ["/images/hero-street.jpg"],
    followerCount: 6,
  },
  {
    id: "case-6",
    caseNumber: "#20260501006",
    title: "攤販長期佔用騎樓空間",
    description: "攤販每日於騎樓下擺攤，收攤後仍留有攤架佔用空間。",
    type: "攤販設置",
    status: "已完成",
    location: {
      district: "高雄市鼓山區",
      address: "明誠三路 20 號前",
      lat: 22.63,
      lng: 120.278,
    },
    reportedAt: "2026-05-01",
    photos: ["/images/cases/scooters-alley.jpg"],
    followerCount: 21,
  },
  {
    id: "case-7",
    caseNumber: "#20260629007",
    title: "機車停放阻礙視障者通行",
    description: "導盲磚遭機車車輪覆蓋，視障者反映難以辨識方向。",
    type: "機車停放",
    status: "已通報",
    location: {
      district: "高雄市鼓山區",
      address: "鼓波街 28 號前",
      lat: 22.642,
      lng: 120.283,
    },
    reportedAt: "2026-06-29",
    photos: ["/images/cases/scooters-arcade.jpg"],
    followerCount: 3,
  },
];

export const CASES: CaseRecord[] = CASE_SEEDS.map((seed) => ({
  ...seed,
  timeline: buildTimeline(seed.status, seed.reportedAt),
}));
