import { getPlatformStatistics } from "@/services/statistics";
import { SectionTitle } from "@/components/shared/typography";

function formatNumber(value: number) {
  return new Intl.NumberFormat("zh-TW").format(value);
}

export async function StatsBand() {
  const stats = await getPlatformStatistics();

  const items = [
    {
      label: "已通報",
      display: formatNumber(stats.reportedCount),
      unit: "件",
      accent: false,
    },
    {
      label: "處理中",
      display: formatNumber(stats.inProgressCount),
      unit: "件",
      accent: true,
    },
    {
      label: "已完成",
      display: formatNumber(stats.completedCount),
      unit: "件",
      accent: false,
    },
    {
      // Traditional Chinese conventionally groups large numbers by 萬
      // (ten-thousands) rather than thousands — both more idiomatic and
      // more compact than "500,000人以上" (which wraps on narrow screens).
      label: "受益人口",
      display: formatNumber(stats.benefitedPopulation / 10000),
      unit: "萬人以上",
      accent: false,
    },
  ];

  return (
    <div className="rounded-3xl border border-border bg-card px-6 py-8 sm:px-10">
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle>案件總覽</SectionTitle>
        <p className="text-sm text-muted-foreground">
          即時掌握騎樓通報與改善進度
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-1 border-t border-border pt-4 first:border-t-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4 sm:first:border-l-0 sm:first:pl-0"
          >
            <dt className="text-sm font-medium text-muted-foreground">
              {item.label}
            </dt>
            <dd
              className={`text-3xl font-extrabold tracking-tight tabular-nums sm:text-4xl lg:text-5xl ${
                item.accent ? "text-amber-600" : "text-primary"
              }`}
            >
              {item.display}
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                {item.unit}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
