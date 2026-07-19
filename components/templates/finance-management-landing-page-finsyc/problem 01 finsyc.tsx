"use client";

import { type CSSProperties, type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CircleDollarSign, Clock3, Network, Users, Workflow } from "lucide-react";

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
    title: "Consulting and implementation of that system can cost 2x-4x more.",
    icon: Workflow,
    accentClass: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    chips: ["License", "Consulting", "Setup"],
  },
  {
    label: "02 · Silos",
    stat: "Silos",
    microLabel: "split teams",
    title: "No budget left to fully optimize it across departments.",
    icon: Users,
    accentClass: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    chips: ["Finance", "HR", "Ops"],
  },
];

const problemBackgroundStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgba(9,10,18,0.98) 0%, rgba(14,13,28,0.96) 45%, rgba(20,15,40,0.98) 100%), url('/hero-agentic-bg.svg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const siloDepartments = [
  { label: "Finance", note: "separate lane", accentClass: "bg-[#6C63FF]", barClass: "bg-[#6C63FF]" },
  { label: "HR", note: "separate lane", accentClass: "bg-[#4F46E5]", barClass: "bg-[#4F46E5]" },
  { label: "Ops", note: "separate lane", accentClass: "bg-[#E94B6F]", barClass: "bg-[#E94B6F]" },
];

function ProblemStage({ card, delay }: { card: ProblemCardData; delay: number }) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative h-full min-h-[220px] overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.06] p-4 sm:p-5 shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div className={"absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl " + card.accentClass + " opacity-20"} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-80" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_18px_36px_rgba(0,0,0,0.24)] " + card.accentClass}>
            <Icon className="h-5 w-5" />
          </div>

          <div className={"h-10 w-10 rounded-full border border-white/10 bg-white/8 p-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.12)]"}>
            <div className={"h-full w-full rounded-full " + card.accentClass} />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/46">
            {card.label}
          </p>

          <div className="mt-3 flex items-end gap-2">
            <span
              className="font-onest text-[32px] sm:text-[36px] lg:text-[38px] font-semibold leading-none tracking-[-1.8px] text-white"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.08), 0 14px 24px rgba(0,0,0,0.28)" }}
            >
              {card.stat}
            </span>
            <span className="pb-1 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/38">
              {card.microLabel}
            </span>
          </div>

          <h3 className="mt-3 max-w-[260px] font-onest text-[18px] sm:text-[19px] lg:text-[20px] font-medium leading-tight tracking-[-0.8px] text-white/94 drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
            {card.title}
          </h3>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div className={"h-full w-[72%] rounded-full " + card.accentClass} />
          </div>
          <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/38">
            impact
          </span>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {card.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/12 bg-white/8 px-3 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/68 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProblemFlowStrip() {
  const flowSteps = ["License", "Consulting", "Implementation", "Optimization"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative h-full min-h-[220px] overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.06] p-4 sm:p-5 shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-80" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-sm">
            <CircleDollarSign className="h-4 w-4 text-[#C7C3FF]" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
              Budget leak
            </span>
          </div>
          <div className="flex items-center gap-1.5 pr-1">
            <span className="h-2.5 w-2.5 rounded-full bg-white/45 shadow-[0_0_18px_rgba(255,255,255,0.18)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#6C63FF] shadow-[0_0_18px_rgba(108,99,255,0.28)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E94B6F] shadow-[0_0_18px_rgba(233,75,111,0.28)]" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/8 px-3 py-2 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/72 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                {step}
              </span>
              {index < flowSteps.length - 1 ? <ArrowRight className="h-4 w-4 shrink-0 text-white/35" /> : null}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#6C63FF] via-[#4F46E5] to-[#E94B6F]" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-white/42">
            <span>license</span>
            <span>consulting</span>
            <span>setup</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProblemSiloStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.26, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative h-full min-h-[220px] overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.06] p-4 sm:p-5 shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-80" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 backdrop-blur-sm">
            <Network className="h-4 w-4 text-[#E94B6F]" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
              Department silos
            </span>
          </div>
          <div className="flex items-center gap-1.5 pr-1">
            <span className="h-2 w-2 rounded-full bg-white/36" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/36" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {siloDepartments.map((dept) => (
            <div key={dept.label} className="rounded-[22px] border border-white/10 bg-[#FFFFFF]/8 p-3 shadow-[0_12px_28px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-2">
                <div className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] " + dept.accentClass}>
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/72">
                    {dept.label}
                  </p>
                  <p className="font-['DM_Sans'] text-[11px] text-white/48">{dept.note}</p>
                </div>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className={"h-full w-[72%] rounded-full " + dept.barClass} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4">
          <span className="h-px flex-1 bg-white/15" />
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/48">
            no shared budget
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Problem01Finsyc({ className }: { className?: string }) {
  return (
    <>
      <section className={"relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#0B0A12] " + (className || "")}>
        <div className="pointer-events-none absolute inset-0" style={problemBackgroundStyle} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(233,75,111,0.14),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0A12]/12 via-[#0B0A12]/40 to-[#0B0A12]/92" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px] py-8 lg:py-0">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-[560px]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
              >
                <Clock3 className="h-4 w-4 text-[#C7C3FF]" />
                <span className="font-poppins text-[11px] sm:text-[12px] font-medium tracking-[0.12em] text-white/72">
                  Current Enterprise System landscape
                </span>
              </motion.div>

              <div className="relative mt-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[4px] top-[6px] hidden max-w-[520px] font-onest text-[42px] font-semibold leading-[0.93] tracking-[-2.6px] text-[#C7C3FF]/12 blur-[0.2px] sm:block sm:text-[56px] lg:text-[74px]"
                >
                  Enterprise systems in companies
                  <br />
                  cost more than the license.
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                  className="relative max-w-[520px] font-onest text-[42px] font-semibold leading-[0.93] tracking-[-2.6px] text-white drop-shadow-[0_16px_26px_rgba(0,0,0,0.32)] sm:text-[56px] lg:text-[74px]"
                >
                  Enterprise systems in companies
                  <br />
                  cost more than the license.
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-5 max-w-[520px] font-['DM_Sans'] text-[17px] leading-relaxed text-white/72 sm:text-[18px] lg:text-[20px]"
              >
                Companies spend 2x-4x more on consulting and implementation of that system. There is no budget left to optimize it across departments, so teams stay in silos.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.2, 0.65, 0.25, 1] as const }}
              className="relative h-auto overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,#121221_0%,#1B1732_48%,#11111E_100%)] p-4 shadow-[0_34px_90px_rgba(0,0,0,0.34)] sm:p-5 lg:h-[72svh] lg:min-h-[640px] lg:p-7"
            >
              <img
                src="/hero-agentic-bg.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-24 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.14),transparent_30%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-14" />

              <div className="relative z-10 mt-2 grid h-full min-h-0 gap-4 lg:grid-cols-2 lg:grid-rows-2">
                {problemCards.map((card, index) => (
                  <ProblemStage key={card.title} card={card} delay={0.07 * index} />
                ))}
                <ProblemFlowStrip />
                <ProblemSiloStrip />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
