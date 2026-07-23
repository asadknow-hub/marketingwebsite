"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Layers,
  Menu,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  {
    icon: Workflow,
    title: "No frozen design",
    description: "Requirements keep moving with the business.",
  },
  {
    icon: Brain,
    title: "Agentic execution",
    description: "Work is mapped to agents, not manual handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Approval-led",
    description: "You stay in control while the system adapts.",
  },
];

const terminalSteps = [
  "> ingest live business changes",
  "> map requirements to modules",
  "> route work to the right agents",
  "> ship with approval, not friction",
];

const liveSignals = [
  { label: "Wave 1", value: "Finance + HRMS" },
  { label: "Approach", value: "Continuous mapping" },
  { label: "Promise", value: "Always current" },
];

export default function HeroRedesign() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openGetInTouch } = useGetInTouchModal();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Onest:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section id="top" className="relative w-full overflow-hidden bg-[#070816] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.32),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.20),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.16),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#6C63FF]/20 blur-[140px]" />
          <div className="absolute right-[-120px] top-36 h-80 w-80 rounded-full bg-[#E94B6F]/18 blur-[160px]" />
          <div className="absolute bottom-[-140px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0EA5E9]/12 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-4 pb-14 pt-3 sm:px-6 lg:px-[96px] lg:pb-12">
          <motion.nav
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="sticky top-3 z-30 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-2xl"
          >
            <a href="#top" className="flex items-center gap-3 text-white transition-opacity hover:opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
                <Sparkles className="h-4.5 w-4.5 text-[#C7C3FF]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-poppins text-[14px] sm:text-[15px] font-bold tracking-[-0.2px]">Nexus AI First</span>
                <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Agentic enterprise software</span>
              </div>
            </a>

            <div className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-poppins text-[13px] font-bold uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={openGetInTouch}
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#6C63FF] px-5 py-3 font-poppins text-[13px] font-bold text-white shadow-[0_16px_36px_rgba(108,99,255,0.28)] transition-colors hover:bg-[#5B55F6]"
              >
                Talk to Nexus Agent
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/8 p-2.5 text-white transition-colors hover:bg-white/12 xl:hidden"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </motion.nav>

          <div className="grid flex-1 items-center gap-12 pb-2 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:pt-16">
            <div className="max-w-[720px]">
              <motion.div
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-xl"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(52,211,153,0.12)]" />
                <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                  Agentic ERP · live
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" as const }}
                className="mt-6 max-w-[760px] font-onest text-[42px] font-semibold leading-[0.95] tracking-[-2px] text-white sm:text-[60px] lg:text-[76px] lg:tracking-[-3.2px]"
              >
                Enterprise software that
                <span className="block text-[#C7C3FF]">runs itself.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" as const }}
                className="mt-6 max-w-[640px] font-['DM_Sans'] text-[17px] leading-[1.7] text-white/74 sm:text-[18px]"
              >
                Consultants no longer freeze your requirements. Nexus AI First maps live business changes into working modules so the company keeps moving without waiting months for a solution design.
              </motion.p>

              <motion.div
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" as const }}
                className="mt-8 flex flex-wrap items-center gap-3"
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 font-poppins text-[14px] font-bold text-white/80 backdrop-blur-xl transition-colors hover:bg-white/10 hover:text-white"
                >
                  See the modules
                </a>
              </motion.div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.title}
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.55, delay: 0.34 + index * 0.06, ease: "easeOut" as const }}
                      className="rounded-[22px] border border-white/10 bg-white/6 p-4 backdrop-blur-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[#C7C3FF]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-poppins text-[11px] font-bold uppercase tracking-[0.24em] text-white/70">
                            {stat.title}
                          </p>
                          <p className="mt-1 font-['DM_Sans'] text-[13px] leading-relaxed text-white/58">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
              <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-[#6C63FF]/20 blur-[80px]" />
              <motion.div
                initial={{ y: 28, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0B0F1F]/88 shadow-[0_32px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/58">
                    Nexus Agent · live
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="rounded-[28px] border border-white/10 bg-[#060711] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.26)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                          Agentic run loop
                        </p>
                        <p className="mt-2 font-onest text-[24px] font-semibold tracking-[-0.8px] text-white">
                          Keep the system current.
                        </p>
                      </div>
                      <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-200">
                        always on
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 rounded-[24px] border border-white/8 bg-white/4 p-4">
                      {terminalSteps.map((step, index) => (
                        <div key={step} className="flex items-center gap-3 text-[13px] font-medium text-white/78 sm:text-[14px]">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 font-poppins text-[10px] font-bold text-white/78">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-mono">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
                        <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/45">
                          old model
                        </p>
                        <p className="mt-2 text-[14px] leading-relaxed text-white/72">
                          5-6 months of consultant-led solution design, then expensive change requests when the business moves.
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-white/8 bg-white/10 p-4">
                        <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/60">
                          Nexus model
                        </p>
                        <p className="mt-2 text-[14px] leading-relaxed text-white/78">
                          Continuous mapping, approval-led rollout, and agents that evolve with the company.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {liveSignals.map((signal) => (
                      <div key={signal.label} className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-xl">
                        <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/46">
                          {signal.label}
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed text-white/78">
                          {signal.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="hero-mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="fixed inset-0 z-[100] bg-[#060711]/96 px-5 py-6 backdrop-blur-2xl xl:hidden"
            >
              <div className="flex items-center justify-between">
                <a href="#top" className="flex items-center gap-3 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8">
                    <Sparkles className="h-4.5 w-4.5 text-[#C7C3FF]" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-poppins text-[14px] font-bold">Nexus AI First</span>
                    <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Agentic enterprise software</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full border border-white/10 bg-white/8 p-2.5 text-white"
                  aria-label="Close navigation menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mt-12 flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index, duration: 0.35 }}
                    className="font-poppins text-[28px] font-bold tracking-[-0.8px] text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="absolute inset-x-5 bottom-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openGetInTouch();
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6C63FF] px-5 py-4 font-poppins text-[15px] font-bold text-white"
                >
                  Talk to Nexus Agent
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
