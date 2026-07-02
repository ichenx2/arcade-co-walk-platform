import { Skeleton } from "@/components/ui/skeleton";

function PollCardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-5 w-14 shrink-0 rounded-full" />
      </div>
      <Skeleton className="mt-2 h-4 w-1/2" />
      <div className="mt-5 flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-9 shrink-0 rounded-md" />
            <div className="flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-1.5 h-1.5 w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
      <Skeleton className="mt-5 h-10 w-full rounded-full" />
    </div>
  );
}

export default function VotingLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-9 w-40 sm:h-11 lg:h-14 lg:w-72" />
      <Skeleton className="mt-3 h-5 w-full max-w-md lg:h-7 lg:max-w-xl" />

      <div className="mt-10">
        <Skeleton className="h-7 w-32 lg:h-10 lg:w-48" />
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <PollCardSkeleton />
          <PollCardSkeleton />
        </div>
      </div>
    </div>
  );
}
