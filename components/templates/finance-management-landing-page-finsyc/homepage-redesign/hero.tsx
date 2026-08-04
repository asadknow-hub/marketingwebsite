"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  FileBarChart2,
  Loader2,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";
import { focusRing, type, gradientText, glass, glow, MeshBg, AmbientOrbs } from "./ui";

interface Scenario {
  id: string;
  chip: string;
  icon: typeof FileBarChart2;
  accent: string;
  dot: string;
  glow: string;
  prompt: string;
  steps: string[];
  result: {
    title: string;
    meta: string;
    rows: { label: string; value: string }[];
    footer: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: "finance",
    chip: "Finance",
    icon: FileBarChart2,
    accent: "from-[#685BFD] via-[#7C3AED] to-[#6366F1]",
    dot: "#685BFD",
    glow: "#685BFD",
    prompt: "Create last quarter's finance report",
    steps: [
      "Reading ledger from Finance module",
      "Reconciling 4,182 entries",
      "Drafting variance commentary",
      "Routing to CFO for approval",
    ],
    result: {
      title: "Q3 Financial Report",
      meta: "Generated in 38s · live business context",
      rows: [
        { label: "Revenue", value: "$14.2M" },
        { label: "Operating cost", value: "$9.6M" },
        { label: "Margin", value: "32.4%" },
      ],
      footer: "Awaiting CFO approval",
    },
  },
  {
    id: "hr",
    chip: "HR",
    icon: UsersRound,
    accent: "from-[#EC4899] via-[#F472B6] to-[#FB7185]",
    dot: "#EC4899",
    glow: "#EC4899",
    prompt: "Onboard the 20 new hires starting Monday",
    steps: [
      "Reading 20 signed offer records",
      "Generating contracts and IT access",
      "Assigning training paths per role",
      "Routing to HR for approval",
    ],
    result: {
      title: "20 Onboarding Packs",
      meta: "Generated in one pass · no manual steps",
      rows: [
        { label: "Contracts", value: "20 ready" },
        { label: "IT accounts", value: "20 queued" },
        { label: "Training paths", value: "6 roles" },
      ],
      footer: "Awaiting HR approval",
    },
  },
];

function AgentConsole() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const scenario = scenarios[active];

  useEffect(() => {
    if (reduce) {
      setTyped(scenario.prompt.length);
      setRevealed(scenario.steps.length);
      setShowResult(true);
      return;
    }

    setTyped(0);
    setRevealed(0);
    setShowResult(false);

    const timers: number[] = [];
    let count = 0;

    const typing = window.setInterval(() => {
      count += 1;
      setTyped(count);

      if (count >= scenario.prompt.length) {
        window.clearInterval(typing);

        scenario.steps.forEach((_, index) => {
          timers.push(window.setTimeout(() => setRevealed(index + 1), 430 * (index + 1)));
        });

        const settle = 430 * scenario.steps.length;
        timers.push(window.setTimeout(() => setShowResult(true), settle + 280));
        timers.push(
          window.setTimeout(() => setActive((current) => (current + 1) % scenarios.length), settle + 4200)
        );
      }
    }, 34);

    return () => {
      window.clearInterval(typing);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [active, reduce, scenario]);

  const ScenarioIcon = scenario.icon;
  const isTyping = typed < scenario.prompt.length;

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-12 rounded-[48px] bg-[#685BFD]/20 blur-[100px]" style={{ animation: "pulse-glow 4s ease-in-out infinite" }} />
      <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[#EC4899]/15 blur-[80px]" style={{ animation: "pulse-glow 5s ease-in-out infinite" }} />

      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-[#0B0F1A] via-[#0D1120] to-[#080A12] shadow-[0_40px_140px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(104,91,253,0.25),transparent_55%),radial-gradient(ellipse_at_85%_15%,rgba(236,72,153,0.18),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.12),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]/70" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 backdrop-blur-xl">
            <span className="relative flex h-1.5 w-1.5 items-center justify-center">
              <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.24em] text-white/60">
              Nexus Agent · live
            </span>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-2 px-5 pt-4">
          {scenarios.map((item, index) => {
            const ChipIcon = item.icon;
            const isActive = index === active;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className={
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.16em] transition-colors " +
                  focusRing +
                  " " +
                  (isActive
                    ? "border-white/15 bg-white/[0.1] text-white shadow-[0_8px_24px_rgba(104,91,253,0.15)]"
                    : "border-white/[0.06] bg-white/[0.03] text-white/50 hover:text-white/80 hover:bg-white/[0.05]")
                }
              >
                <ChipIcon className="h-3.5 w-3.5" style={{ color: item.dot }} />
                {item.chip}
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[420px] px-5 pb-5 pt-4">
          <div className="rounded-[20px] border border-white/[0.08] bg-gradient-to-r from-white/[0.06] to-white/[0.02] px-4 py-3.5 backdrop-blur-xl">
            <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.24em] text-white/35">
              Employee request
            </p>
            <p className="mt-2 font-inter text-[15px] leading-snug text-white sm:text-[16px]">
              {scenario.prompt.slice(0, typed)}
              {isTyping && <span className="ml-0.5 inline-block h-[15px] w-[2px] animate-pulse bg-gradient-to-b from-[#685BFD] to-[#EC4899] align-middle" />}
            </p>
          </div>

          <div className="mt-3 space-y-1.5" aria-live="polite">
            {scenario.steps.map((step, index) => {
              const isDone = revealed > index;
              const isCurrent = revealed === index + 1 && !showResult;

              return (
                <AnimatePresence key={step} initial={false}>
                  {isDone && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28 }}
                      className="flex items-center gap-2.5 rounded-[14px] border border-white/[0.06] bg-white/[0.025] px-3 py-2"
                    >
                      {isCurrent ? (
                        <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-[#A78BFA]" />
                      ) : (
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-400/90">
                          <Check className="h-2.5 w-2.5 text-[#08132A]" strokeWidth={4} />
                        </span>
                      )}
                      <span className="font-inter text-[12.5px] leading-snug text-white/70">{step}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {showResult && (
              <motion.div
                key={scenario.id + "-result"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-3 overflow-hidden rounded-[22px] border border-white/[0.1] bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-start gap-3 border-b border-white/[0.06] px-4 py-3.5">
                  <span
                    className={
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white " +
                      scenario.accent
                    }
                  >
                    <ScenarioIcon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-inter text-[16px] font-semibold tracking-[-0.3px] text-white">
                      {scenario.result.title}
                    </p>
                    <p className="mt-0.5 font-inter text-[11.5px] text-white/50">{scenario.result.meta}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
                  {scenario.result.rows.map((row) => (
                    <div key={row.label} className="px-3 py-3">
                      <p className="font-poppins text-[8.5px] font-bold uppercase tracking-[0.18em] text-white/40">
                        {row.label}
                      </p>
                      <p className="mt-1 font-inter text-[15px] font-semibold tracking-[-0.3px] text-white">
                        {row.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 border-t border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                    {scenario.result.footer}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroRedesign() {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#0B0F1A] text-white">
      <MeshBg tone="dark" />
      <AmbientOrbs tone="dark" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-4 pb-10 pt-24 sm:px-6 lg:min-h-screen lg:px-[96px] lg:pb-12 lg:pt-28">
        <div className="grid flex-1 items-center gap-12 pb-2 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-[760px]">
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400/60" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                Agentic Business Suite
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className={"mt-6 max-w-[760px] " + type.h1}
            >
              Enterprise software that
              <span className={"block " + gradientText.brand}>runs itself.</span>
            </motion.h1>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-6 max-w-[640px] font-inter text-[17px] leading-[1.7] text-white/60 sm:text-[18px]"
            >
              Consultants no longer freeze your requirements. Nexus AI First maps live business changes into working modules so the company keeps moving without waiting months for a solution design.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <motion.button
                type="button"
                onClick={openGetInTouch}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={"inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#685BFD] to-[#7C3AED] px-6 py-3.5 font-poppins text-[14px] font-bold text-white " + glow.brandGlow + " transition-shadow hover:shadow-[0_22px_60px_rgba(104,91,253,0.45)] " + focusRing}
              >
                Talk to Nexus Agent
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.button>

              <a
                href="#modules"
                className={
                  "inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-3.5 font-poppins text-[14px] font-bold text-white/80 backdrop-blur-xl transition-all hover:bg-white/[0.08] hover:text-white hover:border-white/[0.18] " +
                  focusRing
                }
              >
                See the modules
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {[
                { label: "Approval-led", desc: "by design" },
                { label: "No frozen", desc: "requirements" },
                { label: "Live business", desc: "context" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={"flex items-center gap-3 rounded-[16px] border border-white/[0.06] bg-white/[0.03] px-4 py-3 backdrop-blur-xl " + glass.darkHover}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#685BFD]/20 to-[#EC4899]/15">
                    <Sparkles className="h-3.5 w-3.5 text-[#A78BFA]" />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="font-inter text-[13px] font-semibold text-white">{item.label}</span>
                    <span className="font-inter text-[12px] text-white/50">{item.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <AgentConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
