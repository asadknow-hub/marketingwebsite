"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Network, Users, Workflow } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

type ProblemCardData = {
  label: string;
  title: string;
  description: string;
  icon: ElementType;
  accentClass: string;
  chips: string[];
};

const problemCards: ProblemCardData[] = [
  {
    label: "01 · Services project",
    title: "Consultation and implementation eat the runway.",
    description:
      "Enterprise systems are still bought like software but delivered like long consulting engagements. The clock starts ticking long before value shows up.",
    icon: Workflow,
    accentClass: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    chips: ["Plan", "Configure", "Go-live"],
  },
  {
    label: "02 · Employee time",
    title: "Employees become the data-work layer.",
    description:
      "Hard-coded systems force people to enter, re-enter, and reconcile work instead of giving them the most optimized flow at hand. That wastes time every day.",
    icon: Users,
    accentClass: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    chips: ["Re-key", "Chase", "Reconcile"],
  },
  {
    label: "03 · Ecosystem bonus",
    title: "Once it lands, everything starts connecting.",
    description:
      "The bonus is that the system becomes an ecosystem afterwards — one layer that can connect workflows, approvals, and data across the company.",
    icon: Network,
    accentClass: "bg-gradient-to-br from-[#0EA5E9] to-[#6C63FF]",
    chips: ["Connect", "Automate", "Scale"],
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
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/8 p-4 sm:p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_35%)] opacity-80" />
      <div className="relative flex items-start gap-4">
        <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_16px_32px_rgba(0,0,0,0.18)] " + card.accentClass}>
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
              {card.label}
            </p>
            <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/72">
              Problem
            </span>
          </div>

          <h3 className="mt-2 max-w-[420px] font-onest text-[20px] sm:text-[24px] font-semibold leading-tight tracking-[-0.8px] text-white">
            {card.title}
          </h3>

          <p className="mt-2 max-w-[480px] font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-white/72">
            {card.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
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
      </div>
    </motion.article>
  );
}

export default function Problem01Finsyc({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <>
      <section className={"relative w-full overflow-hidden bg-[#F6F1FF] py-20 lg:py-28 " + (className || "")}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#6C63FF]/12 blur-[150px]" />
          <div className="absolute top-[20%] left-[-120px] h-[340px] w-[340px] rounded-full bg-[#4F46E5]/10 blur-[140px]" />
          <div className="absolute bottom-[-150px] right-[8%] h-[320px] w-[320px] rounded-full bg-[#E94B6F]/10 blur-[140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/18 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="max-w-[560px]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/12 bg-white/75 px-4 py-2 backdrop-blur-sm"
              >
                <Clock3 className="h-4 w-4 text-[#6C63FF]" />
                <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
                  The problem · 01
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                className="mt-6 max-w-[560px] font-onest text-[38px] sm:text-[48px] lg:text-[64px] font-semibold leading-[0.94] tracking-[-2.2px] text-[#15122E]"
              >
                Enterprise systems still arrive as services projects.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-5 max-w-[560px] font-['DM_Sans'] text-[17px] sm:text-[18px] leading-relaxed text-[#15122E]/76"
              >
                Companies buy the software, then pay consultants to implement it, while employees end up doing the data work inside hardened systems that waste time instead of saving it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                className="mt-7 flex flex-wrap gap-3"
              >
                {[
                  "Consultation + implementation",
                  "Employees do the data work",
                  "One system becomes an ecosystem",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#15122E]/64 shadow-[0_10px_25px_rgba(21,18,46,0.05)]"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>

              <motion.button
                onClick={openGetInTouch}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#15122E] px-5 py-3 text-white shadow-[0_18px_40px_rgba(21,18,46,0.12)] transition-colors hover:bg-[#4F46E5]"
              >
                <span className="font-poppins text-[16px] sm:text-[18px] font-bold tracking-[-0.2px]">
                  See how our system changes this
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15122E]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.2, 0.65, 0.25, 1] as const }}
              className="relative overflow-hidden rounded-[40px] border border-[#15122E]/8 bg-[linear-gradient(180deg,#17142E_0%,#221D44_44%,#161226_100%)] p-4 sm:p-6 shadow-[0_28px_80px_rgba(21,18,46,0.18)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.12),transparent_32%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
                  <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                    Where the hours go
                  </span>
                </div>
                <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                  Enterprise software today
                </div>
              </div>

              <div className="relative z-10 mt-6 space-y-4">
                {problemCards.map((card, index) => (
                  <div key={card.title} className="relative">
                    {index < problemCards.length - 1 ? (
                      <div className="absolute left-[23px] top-[68px] h-[34px] w-px bg-gradient-to-b from-white/30 to-transparent" />
                    ) : null}
                    <ProblemStage card={card} delay={0.08 * index} />
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Consultants", value: "Months before value" },
                  { label: "Employees", value: "Time spent feeding the system" },
                  { label: "Ecosystem", value: "One layer connects the rest" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[22px] border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm">
                    <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/54">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/76">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
