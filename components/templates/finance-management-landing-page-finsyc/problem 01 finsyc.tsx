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
    microLabel: "more than license",
    title: "Consulting costs stack fast.",
    icon: Workflow,
    accentClass: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    chips: ["License", "Consulting", "Implementation"],
  },
  {
    label: "02 · Silos",
    stat: "Siloed",
    microLabel: "teams",
    title: "Teams keep budgets apart.",
    icon: Users,
    accentClass: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    chips: ["Finance", "HR", "Ops"],
  },
];

const problemBackgroundStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgba(9,10,18,0.98) 0%, rgba(14,13,28,0.96) 45%, rgba(20,15,40,0.98) 100%)",
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
      className="relative h-full min-h-[176px] overflow-hidden rounded-[30px] border border-white/55 bg-white/96 p-3.5 shadow-[0_18px_44px_rgba(16,10,28,0.18)] backdrop-blur-xl sm:p-4"
    >
      <div className={"absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl " + card.accentClass + " opacity-18"} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),transparent_42%)] opacity-55" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_18px_36px_rgba(0,0,0,0.24)] " + card.accentClass}>
            <Icon className="h-[18px] w-[18px]" />
          </div>

          <div className={"h-9 w-9 rounded-full border border-[#DED7EA] bg-white/85 p-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.08)]"}>
            <div className={"h-full w-full rounded-full " + card.accentClass} />
          </div>
        </div>

        <div className="mt-3">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#312842]">
            {card.label}
          </p>

          <div className="mt-2.5 space-y-0.5">
            <span
              className="block font-onest text-[24px] font-semibold leading-[1.02] tracking-[-1.8px] text-[#120F1D] sm:text-[28px] lg:text-[30px]"
              style={{ textShadow: "0 1px 0 rgba(255,255,255,0.36), 0 14px 24px rgba(81,71,122,0.08)" }}
            >
              {card.stat}
            </span>
            <span className="block max-w-[180px] font-poppins text-[10px] font-bold uppercase leading-tight tracking-[0.18em] text-[#4D465F]">
              {card.microLabel}
            </span>
          </div>

          <h3 className="mt-2.5 max-w-[240px] font-onest text-[15px] font-medium leading-[1.12] tracking-[-0.8px] text-[#120F1D] drop-shadow-[0_10px_20px_rgba(81,71,122,0.08)] sm:text-[16px] lg:text-[17px]">
            {card.title}
          </h3>
        </div>

        <div className="mt-3.5 flex items-center gap-2">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E4DEEE]">
            <div className={"h-full w-[72%] rounded-full " + card.accentClass} />
          </div>
          <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-[#6B627F]">
            impact
          </span>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {card.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[#D9D1E6] bg-white px-3 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-[#241D36] shadow-[0_10px_20px_rgba(81,71,122,0.08)]"
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
  const flowSteps = ["License", "Consulting", "Implementation"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative h-full min-h-[184px] overflow-hidden rounded-[30px] border border-white/55 bg-white/96 p-3.5 shadow-[0_18px_44px_rgba(16,10,28,0.18)] backdrop-blur-xl sm:p-4"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),transparent_42%)] opacity-55" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DED7EA] bg-white px-3 py-1.5 backdrop-blur-sm">
            <CircleDollarSign className="h-4 w-4 text-[#6C63FF]" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#433A56]">
              Budget leak
            </span>
          </div>
          <div className="flex items-center gap-1.5 pr-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D9D1E6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#6C63FF] shadow-[0_0_18px_rgba(108,99,255,0.28)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E94B6F] shadow-[0_0_18px_rgba(233,75,111,0.28)]" />
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-2.5 rounded-[18px] border border-[#E1DAEE] bg-white p-2 shadow-[0_10px_20px_rgba(81,71,122,0.06)]">
              <span
                className={
                  "flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-lg text-[8px] font-bold text-white shadow-[0_10px_20px_rgba(0,0,0,0.12)] " +
                  (index === 0 ? "bg-[#6C63FF]" : index === 1 ? "bg-[#4F46E5]" : index === 2 ? "bg-[#E94B6F]" : "bg-[#B9AED3]")
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate font-poppins text-[7px] font-bold uppercase tracking-[0.24em] text-[#1E172C]">
                    {step}
                  </span>
                  {index < flowSteps.length - 1 ? <ArrowRight className="h-3 w-3 shrink-0 text-[#847A99]" /> : null}
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E4DEEE]">
                  <div
                    className={
                      "h-full rounded-full " +
                      (index === 0
                        ? "w-[42%] bg-[#6C63FF]"
                        : index === 1
                          ? "w-[56%] bg-[#4F46E5]"
                          : index === 2
                            ? "w-[68%] bg-[#E94B6F]"
                            : "w-[78%] bg-[#B9AED3]")
                    }
                  />
                </div>
              </div>
            </div>
          ))}
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
      className="relative h-full min-h-[176px] overflow-hidden rounded-[30px] border border-white/55 bg-white/96 p-3.5 shadow-[0_18px_44px_rgba(16,10,28,0.18)] backdrop-blur-xl sm:p-4"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),transparent_42%)] opacity-55" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DED7EA] bg-white px-3 py-1.5 backdrop-blur-sm">
            <Network className="h-4 w-4 text-[#E94B6F]" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#433A56]">
              Department silos
            </span>
          </div>
          <div className="flex items-center gap-1.5 pr-1">
            <span className="h-2 w-2 rounded-full bg-[#C7BDD9]" />
            <span className="h-2 w-2 rounded-full bg-[#B9AED3]" />
            <span className="h-2 w-2 rounded-full bg-[#C7BDD9]" />
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {siloDepartments.map((dept) => (
            <div key={dept.label} className="rounded-[22px] border border-[#E1DAEE] bg-white p-2 shadow-[0_12px_28px_rgba(81,71,122,0.08)]">
              <div className="flex items-center gap-2.5">
                <div className={"flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-xl text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] " + dept.accentClass}>
                  <Building2 className="h-[13px] w-[13px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2.5">
                    <div className="min-w-0">
                      <p className="truncate font-poppins text-[8px] font-bold uppercase tracking-[0.22em] text-[#1E172C]">
                        {dept.label}
                      </p>
                      <p className="truncate font-['DM_Sans'] text-[9px] text-[#615A73]">{dept.note}</p>
                    </div>
                    <span className={"h-2 w-2 shrink-0 rounded-full " + dept.barClass} />
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E4DEEE]">
                    <div className={"h-full w-[72%] rounded-full " + dept.barClass} />
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 py-8 sm:px-6 lg:px-[96px] lg:py-0">
          <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <div className="max-w-[560px]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
              >
                <Clock3 className="h-4 w-4 text-[#C7C3FF]" />
                <span className="font-poppins text-[11px] sm:text-[12px] font-medium tracking-[0.12em] text-white">
                  Current Enterprise System landscape
                </span>
              </motion.div>

              <div className="relative mt-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[4px] top-[6px] hidden max-w-[500px] font-onest text-[40px] font-semibold leading-[0.93] tracking-[-2.4px] text-[#C7C3FF]/12 blur-[0.2px] sm:block sm:text-[54px] lg:text-[68px]"
                >
                  Enterprise systems
                  <br />
                  cost more than
                  <br />
                  the license.
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                  className="relative max-w-[500px] font-onest text-[40px] font-semibold leading-[0.93] tracking-[-2.4px] text-white drop-shadow-[0_16px_26px_rgba(0,0,0,0.32)] sm:text-[54px] lg:text-[68px]"
                >
                  Enterprise systems
                  <br />
                  cost more than
                  <br />
                  the license.
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-5 max-w-[500px] font-['DM_Sans'] text-[16px] leading-[1.65] text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.24)] sm:text-[17px] lg:text-[18px]"
              >
                Companies spend 2x-4x the license cost on consulting and implementation. That leaves little budget to optimize across departments, so teams stay in silos.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.2, 0.65, 0.25, 1] as const }}
              className="relative h-auto overflow-hidden rounded-[40px] border border-white/30 bg-[linear-gradient(180deg,#F4F0FB_0%,#ECE5F7_48%,#F7F3FF_100%)] p-3 shadow-[0_34px_90px_rgba(18,14,31,0.26)] sm:p-4 lg:h-[58svh] lg:min-h-[420px] lg:max-h-[530px] lg:p-5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.14),transparent_30%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] bg-[size:28px_28px] opacity-10" />

              <div className="relative z-10 mt-1 grid h-full min-h-0 gap-3 lg:grid-cols-2 lg:grid-rows-[0.84fr_1.16fr]">
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
