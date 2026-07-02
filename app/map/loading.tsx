import { Skeleton } from "@/components/ui/skeleton";

export default function MapLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-9 w-40 sm:h-11 lg:h-14 lg:w-72" />
      <Skeleton className="mt-3 h-5 w-full max-w-md lg:h-7 lg:max-w-xl" />

      <div className="mt-6 lg:mt-8 flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-20 shrink-0 rounded-full" />
        ))}
      </div>

      <Skeleton className="relative mt-5 h-[60vh] min-h-[420px] w-full rounded-2xl sm:h-[70vh]" />
    </div>
  );
}
