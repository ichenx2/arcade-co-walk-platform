import { Fragment } from "react";
import {
  Accessibility,
  Bike,
  Car,
  Truck,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Lane = {
  title: string;
  width: string;
  detail: string;
  icon: LucideIcon;
  barClassName: string;
  /** Relative proportion used to size the column on the to-scale desktop layout. */
  grow: number;
  /** Renders a double-yellow-line road marking after this lane (desktop only). */
  centerLineAfter?: boolean;
};

const LANES: Lane[] = [
  {
    title: "人行道",
    width: "1.5m",
    detail: "綠色鋪面＋實體車阻",
    icon: Accessibility,
    barClassName: "bg-arcade-green-300",
    grow: 1.5,
  },
  {
    title: "車道",
    width: "3.0–3.2m",
    detail: "去程車道",
    icon: Bike,
    barClassName: "bg-neutral-300",
    grow: 3.2,
    centerLineAfter: true,
  },
  {
    title: "車道",
    width: "3.0–3.2m",
    detail: "回程車道",
    icon: Car,
    barClassName: "bg-neutral-400",
    grow: 3.2,
  },
  {
    title: "彈性多功能帶",
    width: "2.0m",
    detail: "停車彈式臨停／卸貨區",
    icon: Truck,
    barClassName: "bg-amber-200",
    grow: 2,
  },
  {
    title: "分隔設施",
    width: "0.5–1.0m",
    detail: "綠化盆栽／緩衝帶",
    icon: TreePine,
    barClassName: "bg-arcade-green-400",
    grow: 1,
  },
];

/** Mobile equivalent of the centerline marking — a short horizontal double yellow line between the two lane rows. */
function MobileCenterLineDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5 py-1" aria-hidden="true">
      <span className="h-0.5 w-10 rounded-full bg-amber-400" />
      <span className="h-0.5 w-10 rounded-full bg-amber-400" />
    </div>
  );
}

/** Two parallel yellow lines marking the road centerline, sized to align with the lane bars. */
function CenterLineDivider() {
  return (
    <div
      className="flex w-3 shrink-0 flex-col items-center self-start"
      aria-hidden="true"
    >
      <p className="text-sm font-bold text-transparent select-none">.</p>
      <p className="mt-0.5 text-xs font-medium text-transparent select-none">
        .
      </p>
      <div className="mt-3 flex h-20 items-stretch justify-center gap-1">
        <span className="w-0.5 rounded-full bg-amber-400" />
        <span className="w-0.5 rounded-full bg-amber-400" />
      </div>
    </div>
  );
}

export function StreetCrossSection() {
  return (
    <>
      {/* Mobile / narrow layout: stacked rows, no hidden horizontal-scroll content */}
      <div className="flex flex-col gap-3 md:hidden">
        {LANES.map((lane, index) => (
          <Fragment key={`m-${lane.title}-${index}`}>
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex size-14 shrink-0 items-center justify-center rounded-md",
                  lane.barClassName,
                )}
              >
                <lane.icon className="size-6 text-foreground/70" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-foreground">
                  {lane.title}
                  <span className="ml-1.5 font-normal text-muted-foreground">
                    {lane.width}
                  </span>
                </p>
                <p className="text-xs leading-snug text-muted-foreground">
                  {lane.detail}
                </p>
              </div>
            </div>
            {lane.centerLineAfter ? <MobileCenterLineDivider /> : null}
          </Fragment>
        ))}
      </div>

      {/* Desktop layout: to-scale horizontal columns, matching the reference design */}
      <div className="hidden md:flex md:items-stretch md:gap-0.5">
        {LANES.map((lane, index) => (
          <Fragment key={`d-${lane.title}-${index}`}>
            <div
              className="relative flex flex-1 flex-col items-center text-center"
              style={{ flexGrow: lane.grow }}
            >
              <p className="text-sm font-bold text-foreground">{lane.width}</p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                {lane.title}
              </p>
              <div
                className={cn(
                  "mt-3 flex h-20 w-full items-center justify-center rounded-md",
                  lane.barClassName,
                )}
              >
                <lane.icon
                  className="size-6 text-foreground/70"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 px-1 text-[11px] leading-snug text-muted-foreground">
                {lane.detail}
              </p>
            </div>
            {lane.centerLineAfter ? <CenterLineDivider /> : null}
          </Fragment>
        ))}
      </div>
    </>
  );
}
