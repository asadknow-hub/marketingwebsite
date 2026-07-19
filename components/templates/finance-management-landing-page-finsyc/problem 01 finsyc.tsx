"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { Network, Users, Workflow } from "lucide-react";

type ProblemCardData = {
  label: string;
  stat: string;
  microLabel: string;
  title: string;
  icon: ElementType;
  accentClass: string;
  chips: string[];
};

const problemCards: ProblemCardData[] = [
  {
    label: "01 · Cost",
    stat: "2x-4x",
    microLabel: "more",
    title: "Companies pay 2x-4x more just to get it running.",
    icon: Workflow,
    accentClass: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    chips: ["License", "Consulting", "Setup"],
  },
  {
    label: "02 · Silos",
    stat: "Silos",
    microLabel: "split teams",
    title: "Each department works in hard silos.",
    icon: Users,
    accentClass: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    chips: ["Finance", "HR", "Ops"],
  },
];

function ProblemStage({ card, delay }: { card: ProblemCardData; delay: number }) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative h-full overflow-hidden rounded-[24px] border border-white/12 bg-white/8 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-md"
    >
      <div className={"absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl " + card.accentClass + " opacity-25"} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)] opacity-80" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_16px_32px_rgba(0,0,0,0.18)] " + card.accentClass}>
            <Icon className="h-5 w-5" />
          </div>

          <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/72">
            Problem
          </span>
        </div>

        <div className="mt-4">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">
            {card.label}
          </p>

          <div className="mt-3 flex items-end gap-2">
            <span className="font-onest text-[30px] sm:text-[34px] font-semibold leading-none tracking-[-1.8px] text-white">
              {card.stat}
            </span>
            <span className="pb-1 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
              {card.microLabel}
            </span>
          </div>

          <h3 className="mt-3 max-w-[240px] font-onest text-[18px] sm:text-[19px] font-semibold leading-tight tracking-[-0.8px] text-white">
            {card.title}
          </h3>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className={"h-full w-[72%] rounded-full " + card.accentClass} />
          </div>
          <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
            impact
          </span>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {card.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/12 bg-white/8 px-3 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/68"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Problem01Finsyc({ className }: { className?: string }) {
  return (
    <>
      <section className={"relative w-full overflow-hidden bg-[#F6F1FF] py-14 lg:py-16 " + (className || "")}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-[#6C63FF]/12 blur-[150px]" />
          <div className="absolute top-[18%] left-[-120px] h-[280px] w-[280px] rounded-full bg-[#4F46E5]/10 blur-[140px]" />
          <div className="absolute bottom-[-130px] right-[8%] h-[260px] w-[260px] rounded-full bg-[#E94B6F]/10 blur-[140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/18 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-[540px]">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                className="mt-0 max-w-[520px] font-onest text-[36px] sm:text-[44px] lg:text-[56px] font-semibold leading-[0.95] tracking-[-2px] text-[#15122E]"
              >
                Enterprise systems in companies cost more than the license.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-4 max-w-[480px] font-['DM_Sans'] text-[16px] sm:text-[17px] leading-relaxed text-[#15122E]/72"
              >
                Companies spend 2x-4x more on consulting and implementation of that system. There is no budget left to fully optimize it across departments, so teams stay in silos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {[
                  "2x-4x more",
                  "Hard silos",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#15122E]/64 shadow-[0_10px_25px_rgba(21,18,46,0.05)]"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.2, 0.65, 0.25, 1] as const }}
              className="relative overflow-hidden rounded-[36px] border border-[#15122E]/8 bg-[linear-gradient(180deg,#17142E_0%,#221D44_48%,#161226_100%)] p-4 sm:p-5 shadow-[0_28px_80px_rgba(21,18,46,0.18)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.12),transparent_32%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-sm">
                  <Network className="h-4 w-4 text-[#6C63FF]" />
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                    Two problems
                  </span>
                </div>
                <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                  Old way
                </div>
              </div>

              <div className="relative z-10 mt-4 grid gap-3 md:grid-cols-2">
                {problemCards.map((card, index) => (
                  <ProblemStage key={card.title} card={card} delay={0.07 * index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
