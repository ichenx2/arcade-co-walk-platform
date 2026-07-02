import { StreetCrossSection } from "@/components/home/street-cross-section";
import { SectionTitle, SectionDescription } from "@/components/shared/typography";

export function VisionSection() {
  return (
    <div>
      <SectionTitle>計畫願景</SectionTitle>
      <SectionDescription>
        以「騎樓共行平台」串聯民眾、店家與政府，透過數位工具與協作機制，
        讓問題被看見、讓資源被整合、讓街道變得更好。
      </SectionDescription>

      <div className="mt-5 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <StreetCrossSection />
      </div>
    </div>
  );
}
