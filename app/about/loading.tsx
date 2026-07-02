import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-9 w-40 sm:h-11 lg:h-14 lg:w-56" />

      <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="mt-2 h-6 w-3/4" />
        <Skeleton className="mt-4 h-4 w-full" />
        <Skeleton className="mt-1.5 h-4 w-5/6" />
      </div>

      <div className="mt-14 sm:mt-16">
        <Skeleton className="h-8 w-48 lg:h-10 lg:w-64" />
        <Skeleton className="mt-3 h-5 w-full max-w-2xl" />
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
    </div>
  );
}
