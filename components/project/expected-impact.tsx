import { ShieldCheck, Gauge, Users2, Building2, type LucideIcon } from "lucide-react";
import { SectionTitle, InfoCardTitle, InfoCardDescription } from "@/components/shared/typography";

type Impact = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const IMPACTS: Impact[] = [
  {
    icon: ShieldCheck,
    title: "提升步行安全",
    description: "減少行人被迫繞行車道的情況，降低長者、身障者與孩童的交通事故風險。",
  },
  {
    icon: Gauge,
    title: "改善治理效率",
    description: "以資料驅動排程取代人工巡查，讓有限的稽查與改善資源用在刀口上。",
  },
  {
    icon: Users2,
    title: "促進公民參與",
    description: "讓民眾從被動抱怨轉為主動參與，共同監督與決定街道空間的未來樣貌。",
  },
  {
    icon: Building2,
    title: "建立可複製的城市治理模式",
    description: "以鼓山區示範經驗為基礎，逐步將 AWI 指標與協作機制推廣至其他行政區。",
  },
];

export function ExpectedImpact() {
  return (
    <div>
      <SectionTitle>預期效益</SectionTitle>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {IMPACTS.map((impact) => (
          <div
            key={impact.title}
            className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md lg:gap-4 lg:p-6"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-arcade-green-50 text-primary lg:size-12">
              <impact.icon className="size-5 lg:size-6" aria-hidden="true" />
            </span>
            <div>
              <InfoCardTitle>{impact.title}</InfoCardTitle>
              <InfoCardDescription>{impact.description}</InfoCardDescription>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
