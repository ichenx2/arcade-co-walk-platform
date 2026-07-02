import { Camera, Users2, Eye, CheckCircle2, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { InfoCardTitle, InfoCardDescription } from "@/components/shared/typography";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  { icon: Camera, title: "回報問題", description: "拍照上傳問題，填寫地點與說明" },
  { icon: Users2, title: "案件處理", description: "政府與店家協力處理，更新進度" },
  { icon: Eye, title: "公開透明", description: "進度公開，民眾可追蹤與監督" },
  { icon: CheckCircle2, title: "改善完成", description: "驗收成果，持續維護與優化" },
];

export function ProcessSection() {
  return (
    <div>
      <SectionHeading
        title="參與協作流程"
        href="/project"
        linkLabel="查看完整流程"
      />
      <ol className="mt-6 flex flex-col">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              {index < STEPS.length - 1 ? (
                <span
                  className="my-1 w-px flex-1 bg-border"
                  aria-hidden="true"
                />
              ) : null}
            </div>
            <div className="pb-8 last:pb-0">
              <InfoCardTitle className="pt-2">
                {index + 1}. {step.title}
              </InfoCardTitle>
              <InfoCardDescription className="mt-1 text-sm lg:mt-2 lg:text-base">
                {step.description}
              </InfoCardDescription>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
