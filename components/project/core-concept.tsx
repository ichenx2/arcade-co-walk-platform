import {
  Search,
  BarChart3,
  ListChecks,
  BadgeCheck,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { SectionTitle, SectionDescription } from "@/components/shared/typography";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  { icon: Search, title: "發現問題", description: "民眾與巡查系統即時通報騎樓阻礙問題" },
  { icon: BarChart3, title: "資料分析", description: "彙整通報資料，計算 AWI 騎樓可行走性指數" },
  { icon: ListChecks, title: "分級改善", description: "依風險與指數高低排定優先改善順序" },
  { icon: BadgeCheck, title: "友善認證", description: "輔導店家完成改善，授予友善騎樓標章" },
  { icon: RefreshCw, title: "持續優化", description: "追蹤成效並回饋至下一輪資料分析" },
];

export function CoreConcept() {
  return (
    <div>
      <SectionTitle>核心理念</SectionTitle>
      <SectionDescription>
        「還路於人」是本計畫的核心主張——透過一套可持續運作的資料迴圈，
        讓騎樓治理從被動應對，轉為主動、可追蹤、可驗證的城市管理流程。
      </SectionDescription>

      {/* Mobile: stacked vertical timeline */}
      <ol className="mt-8 flex flex-col sm:hidden">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              {index < STEPS.length - 1 ? (
                <span className="my-1 w-px flex-1 bg-border" aria-hidden="true" />
              ) : null}
            </div>
            <div className="pb-8 last:pb-0">
              <p className="pt-2 text-sm font-bold text-foreground">
                {index + 1}. {step.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Tablet+: connected horizontal flow */}
      <div className="mt-8 hidden items-start sm:flex lg:mt-10">
        {STEPS.map((step, index) => (
          <div key={step.title} className="flex flex-1 items-start last:flex-none">
            <div className="flex w-28 shrink-0 flex-col items-center gap-2.5 text-center lg:w-36 lg:gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground lg:size-12">
                <step.icon className="size-5 lg:size-6" aria-hidden="true" />
              </span>
              <p className="text-sm font-bold text-foreground lg:text-lg">
                {index + 1}. {step.title}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground lg:text-base lg:leading-7">
                {step.description}
              </p>
            </div>
            {index < STEPS.length - 1 ? (
              <div className="mt-5 h-px flex-1 self-start bg-border lg:mt-6" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
