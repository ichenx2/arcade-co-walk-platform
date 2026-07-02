import { UserRound, Store, Landmark, Users2, type LucideIcon } from "lucide-react";
import { SectionTitle, SectionDescription } from "@/components/shared/typography";

type FlowNode = {
  icon: LucideIcon;
  label: string;
  description: string;
};

const FLOW: FlowNode[] = [
  { icon: UserRound, label: "民眾", description: "發現問題、拍照回報、參與投票" },
  { icon: Store, label: "店家／建物管理者", description: "配合改善、申請友善騎樓認證" },
  { icon: Landmark, label: "政府單位", description: "案件排程、資源調度、稽查執法" },
  { icon: Users2, label: "社區組織／學校／NGO", description: "在地倡議、教育推廣、協力監督" },
];

function FlowCard({ node }: { node: FlowNode }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center lg:gap-3">
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-arcade-green-50 text-primary transition-transform duration-200 hover:scale-105 sm:size-16">
        <node.icon className="size-6 sm:size-7" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-bold text-foreground lg:text-lg">{node.label}</p>
        <p className="mt-0.5 max-w-[9rem] text-xs leading-snug text-muted-foreground lg:mt-1.5 lg:max-w-[12rem] lg:text-base lg:leading-7">
          {node.description}
        </p>
      </div>
    </div>
  );
}

export function GovernanceFlow() {
  return (
    <div>
      <SectionTitle>治理流程</SectionTitle>
      <SectionDescription>
        平台串聯四類角色，讓問題發現、改善執行與長期監督形成一個完整的協作迴圈。
      </SectionDescription>

      {/* Mobile: balanced 2x2 grid, no connectors */}
      <div className="mt-8 grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:hidden">
        {FLOW.map((node) => (
          <FlowCard key={node.label} node={node} />
        ))}
      </div>

      {/* Tablet+: connected horizontal flow */}
      <div className="mt-8 hidden items-start sm:flex">
        {FLOW.map((node, index) => (
          <div key={node.label} className="flex flex-1 items-start last:flex-none">
            <FlowCard node={node} />
            {index < FLOW.length - 1 ? (
              <div className="mt-8 h-px flex-1 self-start bg-border" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
