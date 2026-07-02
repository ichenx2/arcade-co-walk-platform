import type { Metadata } from "next";
import { Vote } from "lucide-react";
import { VotingPollCard } from "@/components/voting/voting-poll-card";
import { getActiveVotingPolls, getCompletedVotingPolls } from "@/services/voting";
import {
  PageHeroTitle,
  PageHeroDescription,
  SectionTitle,
} from "@/components/shared/typography";
import { EmptyState } from "@/components/shared/empty-state";

export const metadata: Metadata = {
  title: "參與投票",
  description: "參與街道改善方案投票，您的一票將協助決定鼓山區騎樓與人行環境的未來樣貌。",
};

export default async function VotingPage() {
  const [activePolls, completedPolls] = await Promise.all([
    getActiveVotingPolls(),
    getCompletedVotingPolls(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeroTitle>參與投票</PageHeroTitle>
      <PageHeroDescription>
        參與街道改善方案投票，您的一票將協助決定鼓山區騎樓與人行環境的未來樣貌。
      </PageHeroDescription>

      <section className="mt-10">
        <SectionTitle as="h2">進行中的投票</SectionTitle>
        {activePolls.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {activePolls.map((poll) => (
              <VotingPollCard key={poll.id} poll={poll} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Vote}
            title="目前沒有進行中的投票"
            description="新的投票開放時會顯示在這裡，歡迎稍後再回來看看。"
            className="mt-5"
          />
        )}
      </section>

      <section className="mt-12">
        <SectionTitle as="h2">已結束的投票</SectionTitle>
        {completedPolls.length > 0 ? (
          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {completedPolls.map((poll) => (
              <VotingPollCard key={poll.id} poll={poll} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={Vote}
            title="尚無已結束的投票"
            description="投票結束後，結果會保留在這裡供大家查閱。"
            className="mt-5"
          />
        )}
      </section>
    </div>
  );
}
