import Link from "next/link";
import { Camera, Search, Vote, HeartHandshake, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: Camera,
    title: "回報問題",
    description: "拍照上傳，快速通報騎樓阻礙或空間問題",
    href: "/report",
  },
  {
    icon: Search,
    title: "追蹤進度",
    description: "即時查看案件處理進度與改善狀況",
    href: "/map",
  },
  {
    icon: Vote,
    title: "參與投票",
    description: "參與改善方案投票，共同決定街道未來",
    href: "/voting",
  },
  {
    icon: HeartHandshake,
    title: "協力夥伴",
    description: "店家、居民、政府三方協力，共創美好生活環境",
    href: "/#partners",
  },
];

export function FeatureCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {FEATURE_CARDS.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-arcade-green-200 hover:shadow-md"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-arcade-green-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
            <card.icon className="size-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold text-foreground">
              {card.title}
            </span>
            <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted-foreground">
              {card.description}
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
