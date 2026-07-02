import {
  Ruler,
  AlertOctagon,
  Waypoints,
  Wrench,
  MessageSquareHeart,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import {
  SectionTitle,
  SectionDescription,
  InfoCardTitle,
  InfoCardDescription,
} from "@/components/shared/typography";

type Indicator = {
  icon: LucideIcon;
  label: string;
  description: string;
};

const INDICATORS: Indicator[] = [
  { icon: Ruler, label: "通道寬度", description: "騎樓實際可通行淨寬" },
  { icon: AlertOctagon, label: "障礙密度", description: "單位長度內的占用物數量" },
  { icon: Waypoints, label: "通行連續性", description: "路段間高低差與斷點情形" },
  { icon: Wrench, label: "改善頻率", description: "案件被重複通報與改善的次數" },
  { icon: MessageSquareHeart, label: "民眾回饋", description: "使用者對通行體驗的評價" },
  { icon: Timer, label: "案件處理效率", description: "從通報到完成改善的平均時間" },
];

export function AwiExplainer() {
  return (
    <div>
      <SectionTitle>AWI 騎樓可行走性指數</SectionTitle>
      <SectionDescription>
        AWI（Arcade Walkability Index）是本計畫用來量化騎樓通行品質的綜合指標，
        由六項子指標加權計算而成，作為分級改善排程與成效追蹤的共同依據。
      </SectionDescription>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {INDICATORS.map((indicator) => (
            <div
              key={indicator.label}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-shadow duration-200 hover:shadow-md lg:gap-4 lg:p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-arcade-green-50 text-primary lg:size-11">
                <indicator.icon className="size-4.5 lg:size-5" aria-hidden="true" />
              </span>
              <div>
                <InfoCardTitle>{indicator.label}</InfoCardTitle>
                <InfoCardDescription className="mt-0.5 lg:mt-1.5">
                  {indicator.description}
                </InfoCardDescription>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md lg:p-6">
          <p className="text-sm font-medium text-muted-foreground lg:text-base">鼓波街示範路段</p>
          <p className="mt-1 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl">
            78
            <span className="ml-1 text-sm font-medium text-muted-foreground lg:text-base">/ 100 分</span>
          </p>
          <Progress value={78} className="mt-4">
            <div className="flex w-full items-center justify-between">
              <ProgressLabel className="lg:text-base">AWI 綜合指數</ProgressLabel>
              <ProgressValue className="lg:text-base" />
            </div>
          </Progress>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground lg:text-base lg:leading-7">
            改善前為 61 分，經第一階段改善後提升至 78 分（示意數值）。
          </p>
        </div>
      </div>
    </div>
  );
}
