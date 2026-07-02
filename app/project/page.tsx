import type { Metadata } from "next";
import { ProjectHero } from "@/components/project/project-hero";
import { ProblemBackground } from "@/components/project/problem-background";
import { CoreConcept } from "@/components/project/core-concept";
import { ThreeSystemArchitecture } from "@/components/project/three-system-architecture";
import { AwiExplainer } from "@/components/project/awi-explainer";
import { GovernanceFlow } from "@/components/project/governance-flow";
import { ExpectedImpact } from "@/components/project/expected-impact";

export const metadata: Metadata = {
  title: "計畫介紹",
  description:
    "「騎樓共行平台」結合公民回報、資料治理與跨部門協作，目標是讓騎樓重新成為安全、暢通的公共通行空間。",
};

export default function ProjectPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <ProjectHero />

      <div className="mt-14 flex flex-col gap-14 sm:mt-16 sm:gap-16">
        <ProblemBackground />
        <CoreConcept />
        <ThreeSystemArchitecture />
        <AwiExplainer />
        <GovernanceFlow />
        <ExpectedImpact />
      </div>
    </div>
  );
}
