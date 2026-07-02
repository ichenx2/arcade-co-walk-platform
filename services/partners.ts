import { PARTNER_TYPES } from "@/data/partners";
import type { PartnerType } from "@/types";

export async function getPartnerTypes(): Promise<PartnerType[]> {
  return PARTNER_TYPES;
}
