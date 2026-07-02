import { FRIENDLY_STORES } from "@/data/friendly-stores";
import type { FriendlyStore } from "@/types";

export async function getFriendlyStores(): Promise<FriendlyStore[]> {
  return [...FRIENDLY_STORES].sort(
    (a, b) => new Date(b.certifiedDate).getTime() - new Date(a.certifiedDate).getTime(),
  );
}
