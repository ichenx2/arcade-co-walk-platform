import type { VotingPoll } from "@/types";

export const VOTING_POLLS: VotingPoll[] = [
  {
    id: "voting-1",
    title: "鼓波街彈性多功能帶鋪面顏色偏好調查",
    status: "進行中",
    startDate: "2026-06-15",
    endDate: "2026-07-15",
    options: [
      {
        id: "option-beige",
        label: "溫暖米黃鋪面",
        swatchColor: "#C9AE85",
        voteCount: 342,
      },
      {
        id: "option-gray",
        label: "沉穩灰色鋪面",
        swatchColor: "#6B6B6B",
        voteCount: 293,
      },
      {
        id: "option-green",
        label: "自然綠色鋪面",
        swatchColor: "#6E9459",
        voteCount: 182,
      },
    ],
  },
  {
    id: "voting-2",
    title: "人行道休憩座椅材質偏好調查",
    status: "進行中",
    startDate: "2026-06-20",
    endDate: "2026-07-20",
    options: [
      {
        id: "option-wood",
        label: "原木質感座椅",
        swatchColor: "#A67C52",
        voteCount: 156,
      },
      {
        id: "option-stone",
        label: "石材座椅",
        swatchColor: "#9B9B93",
        voteCount: 98,
      },
      {
        id: "option-metal",
        label: "耐候金屬座椅",
        swatchColor: "#5B7C8D",
        voteCount: 61,
      },
    ],
  },
  {
    id: "voting-3",
    title: "騎樓退縮綠帶植栽方案票選",
    status: "已結束",
    startDate: "2026-04-01",
    endDate: "2026-04-30",
    options: [
      {
        id: "option-low-shrub",
        label: "低矮灌木",
        swatchColor: "#6E9459",
        voteCount: 421,
      },
      {
        id: "option-flower-bed",
        label: "四季花圃",
        swatchColor: "#C97B7B",
        voteCount: 389,
      },
      {
        id: "option-shade-tree",
        label: "喬木遮蔭",
        swatchColor: "#3C6846",
        voteCount: 276,
      },
    ],
  },
  {
    id: "voting-4",
    title: "行人穿越時間延長試辦地點票選",
    status: "已結束",
    startDate: "2026-03-01",
    endDate: "2026-03-31",
    options: [
      {
        id: "option-gubo",
        label: "鼓波街／輕軌鼓山站路口",
        swatchColor: "#3C6846",
        voteCount: 512,
      },
      {
        id: "option-neiwei",
        label: "內惟路／美術館路口",
        swatchColor: "#7DB58A",
        voteCount: 347,
      },
    ],
  },
];
