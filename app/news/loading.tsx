import { Skeleton } from "@/components/ui/skeleton";

export default function NewsLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-9 w-40 sm:h-11 lg:h-14 lg:w-72" />
      <Skeleton className="mt-3 h-5 w-full max-w-md lg:h-7 lg:max-w-xl" />

      <div className="mt-8 flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-20 shrink-0 rounded-full" />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2.5">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-5 w-14 rounded-full" />
            </div>
            <Skeleton className="mt-3 h-5 w-4/5" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-1.5 h-4 w-3/5" />
            <Skeleton className="mt-4 h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}
