export const SITE_NAME = "騎樓共行平台";
export const SITE_NAME_EN = "Arcade Co-Walk Platform";
export const SITE_DESCRIPTION =
  "打造人本、永續、智慧的街道環境——全民參與、店家協力、政府支持，讓街道變得更好。";

export type NavLink = {
  label: string;
  href: string;
};

/**
 * Primary navigation. "參與協作" and "友善騎樓" from the original design
 * are homepage sections (not routes) in this MVP, so "參與投票" takes
 * their nav slot since Voting is a standalone kept page.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "首頁", href: "/" },
  { label: "計畫介紹", href: "/project" },
  { label: "互動地圖", href: "/map" },
  { label: "參與投票", href: "/voting" },
  { label: "最新消息", href: "/news" },
  { label: "關於我們", href: "/about" },
];

export const REPORT_CTA: NavLink = { label: "我要回報", href: "/report" };

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Line", href: "#", icon: "line" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

/**
 * Pilot area from the competition proposal: 高雄市鼓山區 (Gushan District,
 * Kaohsiung), centered on the dense street grid near 鼓山區公所／美術館
 * rather than the Shoushan park/coastline to its west.
 */
export const DEFAULT_MAP_CENTER: [number, number] = [22.64, 120.283];
export const DEFAULT_MAP_ZOOM = 16;
