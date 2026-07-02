import { VOTING_POLLS } from "@/data/voting";
import type { VotingPoll } from "@/types";

export async function getVotingPolls(): Promise<VotingPoll[]> {
  return VOTING_POLLS;
}

export async function getActiveVotingPoll(): Promise<VotingPoll | undefined> {
  const polls = await getVotingPolls();
  return polls.find((poll) => poll.status === "進行中") ?? polls[0];
}

export async function getActiveVotingPolls(): Promise<VotingPoll[]> {
  const polls = await getVotingPolls();
  return polls.filter((poll) => poll.status === "進行中");
}

export async function getCompletedVotingPolls(): Promise<VotingPoll[]> {
  const polls = await getVotingPolls();
  return polls.filter((poll) => poll.status === "已結束");
}

export function getVoteTotal(poll: VotingPoll): number {
  return poll.options.reduce((sum, option) => sum + option.voteCount, 0);
}

export function getVotePercentage(poll: VotingPoll, optionId: string): number {
  const total = getVoteTotal(poll);
  if (total === 0) return 0;
  const option = poll.options.find((o) => o.id === optionId);
  if (!option) return 0;
  return Math.round((option.voteCount / total) * 100);
}
