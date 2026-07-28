"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock4, Settings2, Sparkles, UserX, Zap } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface SolutionPhase {
  step: string;
  title: string;
  description: string;
  icon: ElementType;
  accent: string;
  glow: string;
  chips: string[];
}

const phases: SolutionPhase[] = [
  {
    step: "Phase 01",
    title: "Systems implement themselves.",
    description: "Agentic AI configures modules and maps your data — no consultants, no lock-in.",
    icon: Settings2,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    glow: "from-[#6C63FF]/18 to-[#4F46E5]/6",
    chips: ["Auto-configuration", "Data mapping", "Zero consultants"],
  },
  {
    step: "Phase 02",
    title: "Every employee, assisted.",
    description: "Agentic AI runs the reports, packs, and approvals — people focus on judgment, not busywork.",
    icon: Sparkles,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    glow: "from-[#E94B6F]/18 to-[#FF7FA2]/6",
    chips: ["Reports", "Onboarding", "Approvals"],
  },
];

const stats = [
  { icon: UserX, label: "0 consultants needed" },
  { icon: Zap, label: "24/7 agent execution" },
  { icon: Clock4, label: "Hours saved every week" },
];

function PhaseCard({ item, index }: { item: SolutionPhase; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.08 * index, ease: "easeOut" as const }}
      className="relative flex flex-col items-center rounded-[30px] border border-slate-200 bg-white p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7"
    >
      <div className={"absolute inset-x-8 top-0 h-24 rounded-b-full bg-gradient-to-b blur-2xl opacity-70 " + item.glow} />

      <p className="relative z-10 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
        {item.step}
      </p>

      <div className={"relative z-10 mt-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] " + item.accent}>
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="relative z-10 mt-4 max-w-[320px] font-onest text-[23px] font-semibold leading-[1.1] tracking-[-0.7px] text-slate-950 sm:text-[26px]">
        {item.title}
      </h3>

      <p className="relative z-10 mt-3 max-w-[320px] font-['DM_Sans'] text-[14px] leading-[1.65] text-slate-600">
        {item.description}
      </p>

      <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-2">
        {item.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600"
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function SolutionRedesign({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <section
      id="solution"
      className={"relative flex w-full items-center overflow-hidden bg-white py-14 sm:py-16 lg:py-16 " + (className || "")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.06),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.05),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/10 blur-[160px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-[#E94B6F]/8 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-[64px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
          >
            <Sparkles className="h-4 w-4 text-[#6C63FF]" />
            <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600">
              The Agentic Shift
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
            className="mt-4 font-onest text-[34px] font-semibold leading-[1.02] tracking-[-1.4px] text-slate-950 sm:text-[46px] lg:text-[52px]"
          >
            From rollout to daily work, the agent does it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
            className="mt-3 max-w-[520px] font-['DM_Sans'] text-[15px] leading-[1.7] text-slate-600 sm:text-[16px]"
          >
            No consultants for setup. No manual grind for employees. Just outcomes.
          </motion.p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {phases.map((item, index) => (
            <PhaseCard key={item.step} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" as const }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2">
                <StatIcon className="h-3.5 w-3.5 text-[#6C63FF]" />
                <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </span>
                {i < stats.length - 1 && <span className="ml-6 h-1 w-1 rounded-full bg-slate-300 sm:hidden" />}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" as const }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            type="button"
            onClick={openGetInTouch}
            className="inline-flex items-center gap-3 rounded-full bg-[#6C63FF] px-5 py-3 font-poppins text-[14px] font-bold text-white shadow-[0_18px_40px_rgba(108,99,255,0.25)] transition-colors hover:bg-[#5B55F6]"
          >
            Talk to Nexus Agent
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15122E]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </button>

          <a
            href="#modules"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-poppins text-[14px] font-bold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-colors hover:bg-slate-50 hover:text-slate-950"
          >
            See the modules
          </a>
        </motion.div>
      </div>
    </section>
  );
}
