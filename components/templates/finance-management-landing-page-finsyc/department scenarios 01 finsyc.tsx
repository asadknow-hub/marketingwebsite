"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Landmark, ShieldCheck, Users } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface ScenarioCardProps {
  department: string;
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}

function ScenarioCard({ department, title, description, icon: Icon, delay = 0 }: ScenarioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="rounded-[28px] border border-white/10 bg-[#15122E] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.22)] sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-white">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-poppins text-[11px] font-bold uppercase tracking-[0.28em] text-[#B7B2FF]">
            {department}
          </p>
          <h3 className="mt-1 font-onest text-[22px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[26px]">
            {title}
          </h3>
          <p className="mt-3 font-['DM_Sans'] text-[16px] leading-relaxed text-white/72 sm:text-[18px]">
            {description}
          </p>
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
  { label: "5 hours back, every day", weight: 5, tone: "border border-dashed border-white/16 bg-white/8 text-white/72" },
];

const scenarios = [
  {
    department: "Finance & Accounting",
    title: "The finance lead",
    description:
      "Month-end means huge exports from every client. Nexus agents map, clean, and reconcile the work — she reviews exceptions, not rows.",
    icon: Landmark,
  },
  {
    department: "HRMS",
    title: "The HR lead",
    description:
      "Onboarding 100 hires becomes one intake. Agents draft the pack, prepare the follow-ups, and she approves the final steps.",
    icon: Users,
  },
  {
    department: "Operations",
    title: "The ops lead",
    description:
      "Requests and approvals keep bouncing around. The engine routes the work, fills the blanks, and keeps only the decisions in view.",
    icon: ShieldCheck,
  },
];

export default function DepartmentScenarios01Finsyc({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <>
      <section className={"relative w-full overflow-hidden bg-[#0B0A12] py-20 lg:py-28 " + (className || "") }>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#6C63FF]/18 blur-[140px]" />
          <div className="absolute bottom-[-140px] left-[-100px] h-[360px] w-[360px] rounded-full bg-[#E94B6F]/12 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] items-start">
            <div className="lg:sticky lg:top-24 self-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-sm"
              >
                <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.35em] text-white/72 sm:text-[12px]">
                  How it works · 03
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                className="mt-6 max-w-[660px] font-onest text-[38px] font-semibold leading-[0.96] tracking-[-2px] text-white sm:text-[48px] lg:text-[64px]"
              >
                The work grows. The output doesn’t.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-5 max-w-[620px] font-['DM_Sans'] text-[18px] leading-relaxed text-white/72 sm:text-[20px]"
              >
                Importing messy files. Re-keying between systems. Reconciling, chasing, formatting. Nexus agents take the tedious work while your people keep the approvals and the judgment.
              </motion.p>

              <div className="mt-10 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" as const }}
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.3em] text-white/52">
                      Today · 8 hours
                    </span>
                    <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.3em] text-white/30">
                      Manual work
                    </span>
                  </div>

                  <div className="flex gap-1.5">
                    {manualBlocks.map((block) => (
                      <div
                        key={block.label}
                        style={{ flexGrow: block.weight, flexBasis: 0 }}
                        className={"relative h-12 overflow-hidden rounded-xl flex items-center justify-center px-2 text-center font-poppins text-[11px] font-bold leading-tight text-white shadow-[0_10px_30px_rgba(21,18,46,0.08)] " + block.tone}
                      >
                        {block.hours}
                      </div>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {manualTasks.map((task, index) => (
                      <li key={task.label} className="flex items-start gap-2.5 font-['DM_Sans'] text-[14px] leading-relaxed text-white/74 sm:text-[15px]">
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
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.3em] text-[#B7B2FF] sm:text-[12px]">
                      With Nexus agents · 3 hours
                    </span>
                    <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.3em] text-white/34 sm:text-[12px]">
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

                  <p className="mt-3 font-['DM_Sans'] text-[12px] leading-relaxed text-white/42 sm:text-[13px]">
                    Illustrative day · internal estimate based on design partners
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4">
              {scenarios.map((scenario, index) => (
                <ScenarioCard
                  key={scenario.title}
                  department={scenario.department}
                  title={scenario.title}
                  description={scenario.description}
                  icon={scenario.icon}
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

