import { SectionHeading } from "@/components/shared/section-heading";
import { VotingCard } from "@/components/voting/voting-card";
import { getActiveVotingPoll } from "@/services/voting";

export async function VotingPreview() {
  const poll = await getActiveVotingPoll();
  if (!poll) return null;

  return (
    <div>
      <SectionHeading title="參與投票" href="/voting" />
      <div className="mt-6">
        <VotingCard poll={poll} />
      </div>
    </div>
  );
}
