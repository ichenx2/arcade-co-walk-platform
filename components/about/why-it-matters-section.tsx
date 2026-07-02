import { HeartPulse, Accessibility, Building2, type LucideIcon } from "lucide-react";
import {
  SectionTitle,
  SectionDescription,
  InfoCardTitle,
  InfoCardDescription,
} from "@/components/shared/typography";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    icon: HeartPulse,
    title: "高齡化社會的通行安全",
    description: "台灣邁向超高齡社會，暢通的騎樓是長者安全外出、維持生活自理能力的基本條件。",
  },
  {
    icon: Accessibility,
    title: "身障與弱勢族群的基本路權",
    description: "輪椅使用者、視障者與嬰幼兒照顧者，最需要一條不被中斷的安全通道。",
  },
  {
    icon: Building2,
    title: "城市宜居與觀光印象",
    description: "暢通、整潔的街道空間，是城市宜居程度與國際觀光印象的重要指標。",
  },
];

export function WhyItMattersSection() {
  return (
    <div>
      <SectionTitle>為什麼這件事重要</SectionTitle>
      <SectionDescription>
        騎樓通行問題看似微小，卻直接影響每天走在街上的每一個人，尤其是最需要被保護的族群。
      </SectionDescription>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {REASONS.map((reason) => (
          <div
            key={reason.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md lg:gap-4 lg:p-6"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-arcade-green-50 text-primary lg:size-12">
              <reason.icon className="size-5 lg:size-6" aria-hidden="true" />
            </span>
            <div>
              <InfoCardTitle>{reason.title}</InfoCardTitle>
              <InfoCardDescription>{reason.description}</InfoCardDescription>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
