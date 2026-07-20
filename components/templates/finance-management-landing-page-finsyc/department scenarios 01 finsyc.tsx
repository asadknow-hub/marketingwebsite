"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Landmark, ShieldCheck, Users } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

type ScenarioVariant = "finance" | "hrms" | "operations";

const scenarioVariantMeta = {
  finance: {
    label: "Month-end flow",
    labelText: "text-[#B7B2FF]",
    accent: "bg-[#6C63FF]",
    accentSoft: "bg-[#6C63FF]/10",
    accentGlow: "bg-[#6C63FF]/20",
  },
  hrms: {
    label: "Onboarding flow",
    labelText: "text-[#FF8DA5]",
    accent: "bg-[#E94B6F]",
    accentSoft: "bg-[#E94B6F]/10",
    accentGlow: "bg-[#E94B6F]/20",
  },
  operations: {
    label: "Routing flow",
    labelText: "text-[#9A92FF]",
    accent: "bg-[#4F46E5]",
    accentSoft: "bg-[#4F46E5]/10",
    accentGlow: "bg-[#4F46E5]/20",
  },
} as const;

interface ScenarioCardProps {
  department: string;
  title: string;
  description: string;
  icon: React.ElementType;
  chips: string[];
  metric: string;
  variant: ScenarioVariant;
  delay?: number;
  className?: string;
}

interface ScenarioIllustrationProps {
  icon: React.ElementType;
  chips: string[];
  metric: string;
  variant: ScenarioVariant;
}

function ScenarioIllustration({ icon: Icon, chips, metric, variant }: ScenarioIllustrationProps) {
  const theme = scenarioVariantMeta[variant];

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0F1021] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)]">
      <div className={"absolute -right-6 -top-8 h-24 w-24 rounded-full " + theme.accentGlow + " blur-3xl"} />
      <div className={"absolute -bottom-10 left-2 h-20 w-20 rounded-full " + theme.accentGlow + " blur-3xl"} />

      <div className="relative flex min-h-[152px] flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.24em] text-white/80">
            <span className={"h-2 w-2 rounded-full " + theme.accent} />
            Illustration-led
          </span>

          <span className={"rounded-full border border-white/10 px-3 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/80 " + theme.accentSoft}>
            {theme.label}
          </span>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-center">
            <div className={"relative flex h-20 w-20 items-center justify-center rounded-[28px] border border-white/10 bg-white/10 shadow-[0_16px_30px_rgba(0,0,0,0.18)] " + theme.accentSoft}>
              <Icon className="h-8 w-8 text-white" />
              <div className={"absolute inset-3 rounded-[22px] border border-white/10 " + theme.accentGlow} />
            </div>
          </div>

          <div className="space-y-2">
            {chips.map((chip, idx) => (
              <div key={chip} className="flex items-center gap-2 rounded-[16px] border border-white/10 bg-white/10 px-3 py-2.5">
                <span className={"h-2.5 w-2.5 rounded-full " + (idx === 0 ? theme.accent : idx === 1 ? "bg-white/70" : "bg-white/50")} />
                <span className="text-[11px] leading-tight text-white/80">{chip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className={"h-full w-[72%] rounded-full " + theme.accent} />
          </div>

          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.24em] text-white/80">
            {metric}
          </span>
        </div>
      </div>
    </div>
  );
}

function ScenarioCard({ department, title, description, icon: Icon, chips, metric, variant, delay = 0, className }: ScenarioCardProps) {
  const theme = scenarioVariantMeta[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={"rounded-[28px] border border-white/10 bg-[#15122E] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.22)] sm:p-5 " + (className || "")}
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(233,75,111,0.12),transparent_34%)]" />

        <div className="relative grid gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-white " + theme.accentSoft}>
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className={"font-poppins text-[11px] font-bold uppercase tracking-[0.28em] " + theme.labelText}>
                  {department}
                </p>
                <h3 className="mt-1 font-onest text-[20px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[22px]">
                  {title}
                </h3>
              </div>
            </div>

            <p className="max-w-[34ch] font-['DM_Sans'] text-[14px] leading-relaxed text-white/80">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <ScenarioIllustration icon={Icon} chips={chips} metric={metric} variant={variant} />
        </div>
      </div>
    </motion.div>
  );
}

const manualBlocks = [
  { label: "Importing & cleaning messy files", hours: "1.5h", weight: 1.5, tone: "bg-[#E94B6F]" },
  { label: "Re-keying data between systems", hours: "1.5h", weight: 1.5, tone: "bg-[#EF6586]" },
  { label: "Reconciling & double-checking", hours: "1h", weight: 1, tone: "bg-[#F37A97]" },
  { label: "Chasing approvals & formatting", hours: "1h", weight: 1, tone: "bg-[#FF8DA5]" },
  { label: "The actual job — judgment & decisions", hours: "3h", weight: 3, tone: "bg-[#6C63FF]" },
];

const manualTasks = [
  { label: "Importing & cleaning messy files", tone: "bg-[#E94B6F]" },
  { label: "Re-keying data between systems", tone: "bg-[#EF6586]" },
  { label: "Reconciling & double-checking", tone: "bg-[#F37A97]" },
  { label: "Chasing approvals & formatting", tone: "bg-[#FF8DA5]" },
  { label: "The actual job — judgment & decisions", tone: "bg-[#6C63FF]" },
];

const agentBlocks = [
  { label: "3h — the actual job", weight: 3, tone: "bg-[#6C63FF] text-white" },
  { label: "5 hours back, every day", weight: 5, tone: "border border-dashed border-white/20 bg-white/10 text-white/80" },
];

const scenarios = [
  {
    department: "Finance & Accounting",
    title: "The finance lead",
    description:
      "Rows get cleaned before the lead sees exceptions.",
    icon: Landmark,
    chips: ["Map rows", "Flag exceptions", "Close books"],
    metric: "Month-end simplified",
    variant: "finance" as const,
  },
  {
    department: "HRMS",
    title: "The HR lead",
    description:
      "One intake covers the pack, follow-ups, and sign-off.",
    icon: Users,
    chips: ["One intake", "Draft packs", "Approve steps"],
    metric: "100 hires, one flow",
    variant: "hrms" as const,
  },
  {
    department: "Operations",
    title: "The ops lead",
    description:
      "Work gets routed, filled in, and kept to decisions.",
    icon: ShieldCheck,
    chips: ["Route work", "Fill gaps", "Surface decisions"],
    metric: "Decision-only view",
    variant: "operations" as const,
  },
];

export default function DepartmentScenarios01Finsyc({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <>
      <section className={"relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#0B0A12] py-8 sm:py-10 lg:py-8 " + (className || "") }>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#6C63FF]/18 blur-[140px]" />
          <div className="absolute bottom-[-140px] left-[-100px] h-[360px] w-[360px] rounded-full bg-[#E94B6F]/12 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
          <div className="grid gap-5 lg:grid-cols-[0.94fr_1.06fr] items-start">
            <div className="lg:sticky lg:top-24 self-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.35em] text-white/80 sm:text-[12px]">
                  How it works · 03
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                className="mt-4 max-w-[660px] font-onest text-[34px] font-semibold leading-[0.96] tracking-[-2px] text-white sm:text-[42px] lg:text-[54px]"
              >
                The work grows. The output doesn’t.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-4 max-w-[620px] font-['DM_Sans'] text-[16px] leading-relaxed text-white/80 sm:text-[18px]"
              >
                Nexus agents clear the admin work so your team keeps the judgment.
              </motion.p>

              <div className="mt-7 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" as const }}
                >
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.3em] text-white/70">
                      Today · 8 hours
                    </span>
                    <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.3em] text-white/50">
                      Manual work
                    </span>
                  </div>

                  <div className="flex gap-1">
                    {manualBlocks.map((block) => (
                      <div
                        key={block.label}
                        style={{ flexGrow: block.weight, flexBasis: 0 }}
                        className={"relative h-11 overflow-hidden rounded-xl flex items-center justify-center px-2 text-center font-poppins text-[11px] font-bold leading-tight text-white shadow-[0_10px_30px_rgba(21,18,46,0.08)] " + block.tone}
                      >
                        {block.hours}
                      </div>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {manualTasks.map((task, index) => (
                      <li key={task.label} className="flex items-start gap-2.5 font-['DM_Sans'] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
                        <span className={"mt-1.5 h-2 w-2 rounded-sm shrink-0 " + task.tone} />
                        <span className={index === manualTasks.length - 1 ? "font-semibold text-white" : ""}>
                          {task.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" as const }}
                >
                  <div className="flex items-center justify-between gap-4 mb-2.5">
                    <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.3em] text-[#D7D3FF] sm:text-[12px]">
                      With Nexus agents · 3 hours
                    </span>
                    <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-[12px]">
                      Approved work
                    </span>
                  </div>

                  <div className="flex gap-2">
                    {agentBlocks.map((block) => (
                      <div
                        key={block.label}
                        style={{ flexGrow: block.weight, flexBasis: 0 }}
                        className={"relative h-12 overflow-hidden rounded-xl flex items-center justify-center px-3 text-center font-poppins text-[11px] sm:text-[12px] font-bold leading-tight shadow-[0_10px_30px_rgba(21,18,46,0.08)] " + block.tone}
                      >
                        {block.label}
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 font-['DM_Sans'] text-[12px] leading-relaxed text-white/60 sm:text-[13px]">
                    Illustrative day · internal estimate
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-1 xl:grid-cols-2 xl:gap-5">
              {scenarios.map((scenario, index) => (
                <ScenarioCard
                  key={scenario.title}
                  department={scenario.department}
                  title={scenario.title}
                  description={scenario.description}
                  icon={scenario.icon}
                  chips={scenario.chips}
                  metric={scenario.metric}
                  variant={scenario.variant}
                  className={index === scenarios.length - 1 ? "xl:col-span-2" : ""}
                  delay={0.08 * index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}





