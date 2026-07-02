import { Tag, MapPin, CalendarDays, Hash } from "lucide-react";
import type { CaseRecord } from "@/types";

function formatDate(iso: string) {
  return iso.replaceAll("-", "/");
}

const INFO_ITEMS = (c: CaseRecord) => [
  { icon: Hash, label: "案件編號", value: c.caseNumber },
  { icon: Tag, label: "阻礙類型", value: c.type },
  { icon: MapPin, label: "地點", value: `${c.location.district}．${c.location.address}` },
  { icon: CalendarDays, label: "通報時間", value: formatDate(c.reportedAt) },
];

export function CaseInfoPanel({ caseRecord }: { caseRecord: CaseRecord }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-base font-bold text-foreground">案件資訊</h2>
      <dl className="mt-4 flex flex-col gap-3">
        {INFO_ITEMS(caseRecord).map((item) => (
          <div key={item.label} className="flex items-start gap-2.5 text-sm">
            <item.icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <div>
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <dd className="text-foreground">{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}
