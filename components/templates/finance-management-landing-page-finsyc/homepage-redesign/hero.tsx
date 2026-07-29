"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  FileBarChart2,
  Menu,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
];

const agentNodes = [
  {
    key: "erp",
    label: "ERP",
    icon: Boxes,
    pos: "top-[4%] left-1/2 -translate-x-1/2",
    accent: "text-[#6C63FF]",
    dot: "#6C63FF",
    target: { top: "6%", left: "50%" },
  },
  {
    key: "finance",
    label: "Finance",
    icon: FileBarChart2,
    pos: "top-1/2 right-[2%] -translate-y-1/2",
    accent: "text-[#E94B6F]",
    dot: "#E94B6F",
    target: { top: "50%", left: "94%" },
  },
  {
    key: "hr",
    label: "HR",
    icon: UsersRound,
    pos: "bottom-[4%] left-1/2 -translate-x-1/2",
    accent: "text-[#0EA5E9]",
    dot: "#0EA5E9",
    target: { top: "94%", left: "50%" },
  },
  {
    key: "approvals",
    label: "Approvals",
    icon: ShieldCheck,
    pos: "top-1/2 left-[2%] -translate-y-1/2",
    accent: "text-emerald-500",
    dot: "#34D399",
    target: { top: "50%", left: "6%" },
  },
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
      <section id="top" className="relative w-full overflow-hidden bg-[#F6F7FB] text-slate-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
          <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#6C63FF]/12 blur-[140px]" />
          <div className="absolute right-[-120px] top-36 h-80 w-80 rounded-full bg-[#E94B6F]/10 blur-[160px]" />
          <div className="absolute bottom-[-140px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0EA5E9]/8 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-4 pb-8 pt-3 sm:px-6 lg:min-h-screen lg:px-[96px] lg:pb-10">
          <motion.nav
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="sticky top-3 z-30 flex items-center justify-between gap-4 rounded-full border border-slate-200/80 bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-2xl"
          >
            <a href="#top" className="flex items-center gap-3 text-slate-900 transition-opacity hover:opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                <img src="/purplelogowobg.png" alt="Nexus AI First logo" className="h-7 w-7 object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-poppins text-[14px] font-bold tracking-[-0.2px] text-slate-950 sm:text-[15px]">Nexus AI First</span>
                <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Agentic enterprise software</span>
              </div>
            </a>

            <div className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-poppins text-[13px] font-bold uppercase tracking-[0.22em] text-slate-600 transition-colors hover:text-slate-950"
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
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 transition-colors hover:bg-slate-50 xl:hidden"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </motion.nav>

          <div className="grid flex-1 items-center gap-10 pb-2 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:pt-10">
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
                className="mt-6 max-w-[760px] font-onest text-[42px] font-semibold leading-[0.95] tracking-[-2px] text-slate-950 sm:text-[56px] lg:text-[62px] lg:tracking-[-2.6px]"
              >
                Enterprise software that
                <span className="block text-[#6C63FF]">runs itself.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" as const }}
                className="mt-6 max-w-[640px] font-['DM_Sans'] text-[17px] leading-[1.7] text-slate-600 sm:text-[18px]"
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
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-poppins text-[14px] font-bold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-colors hover:bg-slate-50 hover:text-slate-950"
                >
                  See the modules
                </a>
              </motion.div>

            </div>

            <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
              <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-[#6C63FF]/16 blur-[80px]" />
              <motion.div
                initial={{ y: 28, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] as const }}
                className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white/90 shadow-[0_32px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                      <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400/70" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-600">
                      Nexus Agent · live
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#0E1326] to-[#050710] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_70px_rgba(15,23,42,0.35)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(108,99,255,0.16),transparent_58%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:22px_22px]" />

                    <div className="relative mx-auto flex h-[220px] w-full max-w-[260px] items-center justify-center sm:h-[240px]">
                      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
                        <defs>
                          {agentNodes.map((node) => (
                            <linearGradient key={node.key} id={"grad-" + node.key} x1="100" y1="100" x2={node.target.left} y2={node.target.top} gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor={node.dot} stopOpacity="0.65" />
                              <stop offset="100%" stopColor={node.dot} stopOpacity="0" />
                            </linearGradient>
                          ))}
                        </defs>
                        <line x1="100" y1="100" x2="100" y2="18" stroke="url(#grad-erp)" strokeWidth="1.5" />
                        <line x1="100" y1="100" x2="182" y2="100" stroke="url(#grad-finance)" strokeWidth="1.5" />
                        <line x1="100" y1="100" x2="100" y2="182" stroke="url(#grad-hr)" strokeWidth="1.5" />
                        <line x1="100" y1="100" x2="18" y2="100" stroke="url(#grad-approvals)" strokeWidth="1.5" />
                      </svg>

                      {[0, 1].map((ring) => (
                        <motion.div
                          key={ring}
                          initial={{ scale: 0.4, opacity: 0.5 }}
                          animate={{ scale: [0.4, 1.7], opacity: [0.45, 0] }}
                          transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" as const, delay: ring * 1.6 }}
                          className="absolute h-16 w-16 rounded-full border border-[#6C63FF]/40"
                        />
                      ))}

                      {agentNodes.map((node, index) => (
                        <motion.div
                          key={node.key + "-particle"}
                          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{ backgroundColor: node.dot, boxShadow: "0 0 8px " + node.dot }}
                          animate={{
                            top: ["50%", node.target.top],
                            left: ["50%", node.target.left],
                            opacity: [0, 1, 0],
                          }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" as const, delay: index * 0.32 }}
                        />
                      ))}

                      {agentNodes.map((node, index) => {
                        const NodeIcon = node.icon;
                        return (
                          <motion.div
                            key={node.key}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: index * 0.25 }}
                            className={"absolute flex flex-col items-center gap-1.5 " + node.pos}
                          >
                            <div
                              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.35), 0 0 24px " + node.dot + "26" }}
                            >
                              <NodeIcon className={"h-4 w-4 " + node.accent} />
                            </div>
                            <span className="font-poppins text-[8px] font-bold uppercase tracking-[0.16em] text-slate-400">
                              {node.label}
                            </span>
                          </motion.div>
                        );
                      })}

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: "linear" as const }}
                        className="absolute h-[76px] w-[76px] rounded-full border border-dashed border-white/15"
                      />

                      <motion.div
                        animate={{ scale: [1, 1.07, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" as const }}
                        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] shadow-[0_0_40px_rgba(108,99,255,0.5),0_0_0_10px_rgba(108,99,255,0.12)]"
                      >
                        <BrainCircuit className="h-7 w-7 text-white" />
                      </motion.div>
                    </div>

                    <div className="relative mt-5 flex items-center justify-center gap-2 border-t border-white/8 pt-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300">
                        Sensing · deciding · acting, always on
                      </p>
                    </div>

                    <p className="relative mt-3 text-center font-['DM_Sans'] text-[13px] leading-[1.6] text-slate-400">
                      One agent brain routes every request across ERP, Finance, HR, and Approvals — no waiting on a ticket.
                    </p>
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
              className="fixed inset-0 z-[100] bg-white/98 px-5 py-6 backdrop-blur-2xl xl:hidden"
            >
              <div className="flex items-center justify-between">
                <a href="#top" className="flex items-center gap-3 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
                    <img src="/purplelogowobg.png" alt="Nexus AI First logo" className="h-7 w-7 object-contain" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-poppins text-[14px] font-bold text-slate-950">Nexus AI First</span>
                    <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Agentic enterprise software</span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-700"
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
                    className="font-poppins text-[28px] font-bold tracking-[-0.8px] text-slate-950"
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
