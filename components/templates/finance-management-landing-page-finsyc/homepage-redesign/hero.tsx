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
import { focusRing, type } from "./ui";

interface Scenario {
  id: string;
  chip: string;
  icon: typeof FileBarChart2;
  accent: string;
  dot: string;
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
    accent: "from-[#6C63FF] to-[#4F46E5]",
    dot: "#6C63FF",
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
    accent: "from-[#E94B6F] to-[#FF8DA5]",
    dot: "#E94B6F",
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
      <div className="pointer-events-none absolute -inset-8 rounded-[44px] bg-[#6C63FF]/18 blur-[90px]" />

      <motion.div
        initial={{ y: 26, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#141634] via-[#0E1026] to-[#080A18] shadow-[0_36px_120px_rgba(15,23,42,0.34)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(108,99,255,0.22),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(233,75,111,0.14),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative flex items-center justify-between gap-3 border-b border-white/8 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5 items-center justify-center">
              <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.24em] text-white/65">
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
                    ? "border-white/20 bg-white/[0.12] text-white"
                    : "border-white/10 bg-white/[0.04] text-white/55 hover:text-white/85")
                }
              >
                <ChipIcon className="h-3.5 w-3.5" style={{ color: item.dot }} />
                {item.chip}
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[360px] px-4 pb-4 pt-4 sm:min-h-[420px] sm:px-5 sm:pb-5">
          <div className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3.5">
            <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.24em] text-white/40">
              Employee request
            </p>
            <p className="mt-2 font-['DM_Sans'] text-[15px] leading-snug text-white sm:text-[16px]">
              {scenario.prompt.slice(0, typed)}
              {isTyping && <span className="ml-0.5 inline-block h-[15px] w-[2px] animate-pulse bg-[#9C9BFF] align-middle" />}
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
                      className="flex items-center gap-2.5 rounded-[14px] border border-white/8 bg-white/[0.03] px-3 py-2"
                    >
                      {isCurrent ? (
                        <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-[#9C9BFF]" />
                      ) : (
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-400/90">
                          <Check className="h-2.5 w-2.5 text-[#08132A]" strokeWidth={4} />
                        </span>
                      )}
                      <span className="font-['DM_Sans'] text-[12.5px] leading-snug text-white/70">{step}</span>
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
                className="mt-3 overflow-hidden rounded-[22px] border border-white/12 bg-white/[0.06]"
              >
                <div className="flex items-start gap-3 border-b border-white/8 px-4 py-3.5">
                  <span
                    className={
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white " +
                      scenario.accent
                    }
                  >
                    <ScenarioIcon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-onest text-[16px] font-semibold tracking-[-0.3px] text-white">
                      {scenario.result.title}
                    </p>
                    <p className="mt-0.5 font-['DM_Sans'] text-[11.5px] text-white/50">{scenario.result.meta}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-white/8">
                  {scenario.result.rows.map((row) => (
                    <div key={row.label} className="px-3 py-3">
                      <p className="font-poppins text-[8.5px] font-bold uppercase tracking-[0.18em] text-white/40">
                        {row.label}
                      </p>
                      <p className="mt-1 font-onest text-[15px] font-semibold tracking-[-0.3px] text-white">
                        {row.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 border-t border-white/8 bg-white/[0.03] px-4 py-2.5">
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
    <>
      <section id="top" className="relative w-full overflow-hidden bg-[#F6F7FB] text-slate-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#6C63FF]/12 blur-[140px]" />
          <div className="absolute right-[-120px] top-36 h-80 w-80 rounded-full bg-[#E94B6F]/10 blur-[160px]" />
          <div className="absolute bottom-[-140px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0EA5E9]/8 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-4 pb-10 pt-24 sm:px-6 lg:min-h-screen lg:px-[96px] lg:pb-12 lg:pt-28">
          <div className="grid flex-1 items-center gap-10 pb-2 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-[720px]">
              <motion.div
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0_10px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.12)]" />
                <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600">
                  Agentic Business Suite
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" as const }}
                className="mt-6 max-w-[760px] font-onest text-[36px] font-semibold leading-[0.95] tracking-[-1.5px] text-slate-950 sm:text-[56px] lg:text-[62px] lg:tracking-[-2.6px]"
              >
                Enterprise software that
                <span className="block text-[#6C63FF]">runs itself.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" as const }}
                className="mt-5 max-w-[640px] font-['DM_Sans'] text-[16px] leading-[1.65] text-slate-600 sm:text-[18px] sm:leading-[1.7]"
              >
                Consultants no longer freeze your requirements. Nexus AI First maps live business changes into working modules so the company keeps moving without waiting months for a solution design.
              </motion.p>

              <motion.div
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" as const }}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <motion.button
                  type="button"
                  onClick={openGetInTouch}
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="inline-flex items-center gap-3 rounded-full bg-[#6C63FF] px-5 py-3 font-poppins text-[14px] font-bold text-white shadow-[0_18px_40px_rgba(108,99,255,0.26)] transition-colors hover:bg-[#5B55F6]"
                >
                  Talk to Nexus Agent
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15122E]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.button>

                <a
                  href="#modules"
                  className={
                    "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-poppins text-[14px] font-bold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-colors hover:bg-slate-50 hover:text-slate-950 " +
                    focusRing
                  }
                >
                  See the modules
                </a>
              </motion.div>

              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.36, ease: "easeOut" as const }}
                className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-slate-200 pt-5"
              >
                {[
                  "Approval-led by design",
                  "No frozen requirements",
                  "Live business context",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#6C63FF]" />
                    <span className={type.micro + " text-slate-500"}>{item}</span>
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
              <AgentConsole />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
