import { PLATFORM_STATISTICS } from "@/data/statistics";
import type { PlatformStatistics } from "@/types";

export async function getPlatformStatistics(): Promise<PlatformStatistics> {
  return PLATFORM_STATISTICS;
}
