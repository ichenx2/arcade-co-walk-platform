import { Landmark, AlertTriangle, Footprints, type LucideIcon } from "lucide-react";
import { StreetCrossSection } from "@/components/home/street-cross-section";
import {
  SectionTitle,
  SectionDescription,
  InfoCardTitle,
  InfoCardDescription,
} from "@/components/shared/typography";

type Point = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const POINTS: Point[] = [
  {
    icon: Landmark,
    title: "騎樓原本是公共通行空間",
    description: "依法騎樓應保持淨空，供行人、輪椅與嬰兒車安全通行，屬於全民共有的公共動線。",
  },
  {
    icon: AlertTriangle,
    title: "現實中常被占用",
    description: "實務上騎樓經常被機車停放、貨物堆置、招牌外推與臨時施工材料佔用，通行淨寬大幅縮減。",
  },
  {
    icon: Footprints,
    title: "行人被迫繞行車道",
    description: "當騎樓無法通行，行人、長者與身障者往往必須繞行至車道，大幅提高交通事故風險。",
  },
];

export function ProblemBackground() {
  return (
    <div>
      <SectionTitle>問題背景</SectionTitle>
      <SectionDescription>
        騎樓是台灣街道獨有的半戶外公共空間，理應是行人最基本的安全通道，
        但長期缺乏系統性的巡檢與治理機制，使得占用問題日益嚴重。
      </SectionDescription>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {POINTS.map((point) => (
          <div
            key={point.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md lg:gap-4 lg:p-6"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-arcade-green-50 text-primary lg:size-12">
              <point.icon className="size-5 lg:size-6" aria-hidden="true" />
            </span>
            <div>
              <InfoCardTitle>{point.title}</InfoCardTitle>
              <InfoCardDescription>{point.description}</InfoCardDescription>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md sm:p-6 lg:p-7">
        <InfoCardTitle>理想的騎樓與街道空間配置</InfoCardTitle>
        <InfoCardDescription className="mt-1 lg:mt-1.5">
          人行道、車道與彈性多功能帶各司其職，行人不需與車爭道
        </InfoCardDescription>
        <div className="mt-5 lg:mt-6">
          <StreetCrossSection />
        </div>
      </div>
    </div>
  );
}
