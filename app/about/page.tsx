import type { Metadata } from "next";
import { MissionSection } from "@/components/about/mission-section";
import { WhyItMattersSection } from "@/components/about/why-it-matters-section";
import { ContactSection } from "@/components/about/contact-section";

export const metadata: Metadata = {
  title: "關於我們",
  description: "認識騎樓共行平台的使命與理念，了解我們為什麼致力於改善騎樓通行環境，並與我們聯繫。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <MissionSection />

      <div className="mt-14 flex flex-col gap-14 sm:mt-16 sm:gap-16">
        <WhyItMattersSection />
        <ContactSection />
      </div>
    </div>
  );
}
