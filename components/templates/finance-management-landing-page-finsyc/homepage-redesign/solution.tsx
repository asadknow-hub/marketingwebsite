"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { Clock4, Settings2, Sparkles, UserX, Zap } from "lucide-react";
import { ChapterMark, type, gradientText, glass, MeshBg } from "./ui";

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
    accent: "bg-gradient-to-br from-[#685BFD] to-[#6366F1]",
    glow: "from-[#685BFD]/18 to-[#6366F1]/6",
    chips: ["Auto-configuration", "Data mapping", "Zero consultants"],
  },
  {
    step: "Phase 02",
    title: "Every employee, assisted.",
    description: "Agentic AI runs the reports, packs, and approvals — people focus on judgment, not busywork.",
    icon: Sparkles,
    accent: "bg-gradient-to-br from-[#EC4899] to-[#F472B6]",
    glow: "from-[#EC4899]/18 to-[#F472B6]/6",
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
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className={"group relative flex flex-col rounded-[28px] border border-slate-200/80 bg-white/80 p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-8 " + glass.lightHover}
    >
      <div className={"pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-15 blur-[80px] transition-opacity duration-300 group-hover:opacity-30 " + item.glow} />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.15)] " + item.accent}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
            {item.step}
          </span>
        </div>

        <div>
          <h3 className="font-inter text-[22px] font-semibold leading-[1.15] tracking-[-0.6px] text-slate-950 sm:text-[26px]">
            {item.title}
          </h3>
          <p className="mt-3 font-inter text-[14px] leading-[1.65] text-slate-600 sm:text-[15px]">
            {item.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {item.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function SolutionRedesign({ className }: { className?: string }) {
  return (
    <section
      id="solution"
      className={"relative flex w-full items-center overflow-hidden bg-[#FAF5FF] py-16 sm:py-20 lg:min-h-screen lg:py-20 " + (className || "")}
    >
      <MeshBg tone="light" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-[64px]">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="mb-6"
          >
            <ChapterMark id="solution" tone="light" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-[#685BFD]" />
            <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600">
              The Agentic Shift
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            className={"mt-6 " + type.h2 + " text-slate-950"}
          >
            From rollout to daily work,
            <span className={"block " + gradientText.brand}>the agent does it.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-4 max-w-[520px] font-inter text-[15px] leading-[1.7] text-slate-600 sm:text-[16px]"
          >
            No consultants for setup. No manual grind for employees. Just outcomes.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {phases.map((item, index) => (
            <PhaseCard key={item.step} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-2">
                <StatIcon className="h-3.5 w-3.5 text-[#685BFD]" />
                <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </span>
                {i < stats.length - 1 && <span className="ml-6 h-1 w-1 rounded-full bg-slate-300 sm:hidden" />}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
