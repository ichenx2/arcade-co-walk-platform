import {
  Users,
  Store,
  Landmark,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { getPartnerTypes } from "@/services/partners";
import { SectionTitle } from "@/components/shared/typography";
import type { PartnerType } from "@/types";

const ICONS: Record<PartnerType["icon"], LucideIcon> = {
  users: Users,
  store: Store,
  landmark: Landmark,
};

type Node = {
  key: string;
  icon: LucideIcon;
  label: string;
  highlighted?: boolean;
};

function PartnerNode({ node }: { node: Node }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2.5 text-center">
      <span
        className={
          "flex size-14 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 sm:size-16 " +
          (node.highlighted
            ? "bg-primary text-primary-foreground"
            : "bg-arcade-green-50 text-primary")
        }
      >
        <node.icon className="size-6 sm:size-7" aria-hidden="true" />
      </span>
      <span className="text-sm leading-snug font-medium whitespace-pre-line text-foreground lg:text-lg">
        {node.label}
      </span>
    </div>
  );
}

export async function PartnersSection() {
  const partners = await getPartnerTypes();

  const nodes: Node[] = [
    ...partners.map((partner) => ({
      key: partner.id,
      icon: ICONS[partner.icon],
      label: partner.label,
    })),
    {
      key: "together",
      icon: HeartHandshake,
      label: "攜手共創\n美好街道",
      highlighted: true,
    },
  ];

  return (
    <div id="partners" className="scroll-mt-24">
      <SectionTitle>協力夥伴</SectionTitle>

      {/* Mobile: balanced 2x2 grid, no connectors */}
      <div className="mt-6 grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:hidden">
        {nodes.map((node) => (
          <PartnerNode key={node.key} node={node} />
        ))}
      </div>

      {/* Tablet+: connected horizontal flow */}
      <div className="mt-8 hidden items-start sm:flex">
        {nodes.map((node, index) => (
          <div key={node.key} className="flex flex-1 items-start last:flex-none">
            <PartnerNode node={node} />
            {index < nodes.length - 1 ? (
              <div
                className="mt-8 h-px flex-1 self-start bg-border"
                aria-hidden="true"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
