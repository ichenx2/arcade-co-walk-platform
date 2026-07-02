import { Store, ShieldCheck } from "lucide-react";
import type { FriendlyStore } from "@/types";

function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

export function FriendlyStoreCard({ store }: { store: FriendlyStore }) {
  return (
    <div className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-arcade-green-200 hover:shadow-md">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-arcade-green-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
        <Store className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-foreground lg:text-lg">
          {store.name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {store.district}．{store.category}
        </p>
        <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-arcade-green-700">
          <ShieldCheck className="size-3.5" aria-hidden="true" />
          {formatDate(store.certifiedDate)} 認證
        </p>
      </div>
    </div>
  );
}
