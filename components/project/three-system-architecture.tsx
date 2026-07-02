import { Cpu, Users, HeartHandshake, type LucideIcon } from "lucide-react";
import {
  SectionTitle,
  SectionDescription,
  InfoCardTitle,
  InfoCardDescription,
} from "@/components/shared/typography";

type SystemCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SYSTEMS: SystemCard[] = [
  {
    icon: Cpu,
    title: "智慧治理中台",
    description:
      "整合各區通報案件、AWI 指數與地理資訊，協助政府單位進行分級排程與資源配置，讓改善決策有資料可循。",
  },
  {
    icon: Users,
    title: "公民參與入口",
    description:
      "民眾可拍照回報問題、追蹤案件處理進度、參與街道改善方案投票，讓治理過程公開透明、人人可監督。",
  },
  {
    icon: HeartHandshake,
    title: "友善騎樓合作機制",
    description:
      "結合店家自主改善誘因與友善認證標章，建立政府、店家與居民三方協力、正向循環的合作模式。",
  },
];

export function ThreeSystemArchitecture() {
  return (
    <div>
      <SectionTitle>平台架構</SectionTitle>
      <SectionDescription>
        平台由三個互相支援的子系統組成，分別對應治理、參與與合作三個面向，共同支撐「還路於人」的核心理念。
      </SectionDescription>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SYSTEMS.map((system) => (
          <div
            key={system.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md sm:p-6 lg:gap-4 lg:p-7"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground lg:size-12">
              <system.icon className="size-5 lg:size-6" aria-hidden="true" />
            </span>
            <div>
              <InfoCardTitle>{system.title}</InfoCardTitle>
              <InfoCardDescription className="mt-1.5 lg:mt-2">
                {system.description}
              </InfoCardDescription>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
