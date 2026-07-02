import { Hero } from "@/components/home/hero";
import { FeatureCards } from "@/components/home/feature-cards";
import { StatsBand } from "@/components/home/stats-band";
import { VisionSection } from "@/components/home/vision-section";
import { NewsPreview } from "@/components/home/news-preview";
import { ProcessSection } from "@/components/home/process-section";
import { VotingPreview } from "@/components/home/voting-preview";
import { PartnersSection } from "@/components/home/partners-section";
import { FriendlyStoresSection } from "@/components/home/friendly-stores-section";
import { NewsletterSignup } from "@/components/home/newsletter-signup";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="pt-6 sm:pt-8">
        <Hero />
      </div>

      <div className="relative z-10 -mt-8 sm:-mt-10">
        <FeatureCards />
      </div>

      <div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-20">
        <StatsBand />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-14 lg:col-span-2">
            <VisionSection />
            <NewsPreview />
          </div>
          <div className="flex flex-col gap-10">
            <ProcessSection />
            <VotingPreview />
          </div>
        </div>

        <PartnersSection />

        <FriendlyStoresSection />

        <NewsletterSignup />
      </div>
    </div>
  );
}
