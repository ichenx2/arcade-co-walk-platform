import { Skeleton } from "@/components/ui/skeleton";

function SectionSkeleton() {
  return (
    <div>
      <Skeleton className="h-8 w-40 lg:h-10 lg:w-56" />
      <Skeleton className="mt-3 h-5 w-full max-w-2xl lg:h-6" />
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-5">
            <Skeleton className="size-10 rounded-full" />
            <Skeleton className="mt-3 h-4 w-3/4" />
            <Skeleton className="mt-2 h-3 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-56 w-full rounded-3xl" />

      <div className="mt-14 flex flex-col gap-14 sm:mt-16 sm:gap-16">
        <SectionSkeleton />
        <SectionSkeleton />
      </div>
    </div>
  );
}
