"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock3, Network, ShieldAlert, Workflow } from "lucide-react";

interface ProblemItem {
  label: string;
  title: string;
  summary: string;
  icon: ElementType;
  accent: string;
  scene: "freeze" | "silos";
  theme: "dark" | "light";
}

const problems: ProblemItem[] = [
  {
    label: "Problem 1",
    title: "Hard designs keep enterprise software stuck.",
    summary: "The brief locks before the business stops changing.",
    icon: Clock3,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    scene: "freeze",
    theme: "light",
  },
  {
    label: "Problem 2",
    title: "Fragmented systems reduce Employees output.",
    summary: "Teams bounce between ERP, CRM, email, docs, sheets, and chat.",
    icon: Network,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    scene: "silos",
    theme: "light",
  },
];

function ProblemVisual({ scene }: { scene: ProblemItem["scene"] }) {
  if (scene === "freeze") {
    return (
      <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
            <ShieldAlert className="h-4 w-4 text-[#6C63FF]" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">
              frozen design
            </span>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        </div>

        <div className="mt-4 rounded-[18px] border border-slate-200 bg-white p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6C63FF]/12">
              <Clock3 className="h-4 w-4 text-[#6C63FF]" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-2 rounded-full bg-slate-200" />
              <div className="h-2 rounded-full bg-slate-100" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["brief", "wait", "rework"].map((label) => (
              <div key={label} className="rounded-[14px] border border-slate-200 bg-slate-50 px-2 py-2 text-center font-poppins text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
          <Workflow className="h-4 w-4 text-[#E94B6F]" />
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-700">
            fragmented work
          </span>
        </div>
        <span className="h-2.5 w-2.5 rounded-full bg-[#E94B6F]" />
      </div>

      <div className="mt-4 rounded-[18px] border border-slate-200 bg-white p-3">
        <div className="grid grid-cols-2 gap-2">
          {["ERP", "CRM", "Docs", "Chat"].map((label, index) => (
            <div
              key={label}
              className={
                "rounded-[14px] border border-slate-200 px-2 py-2 " +
                (index % 2 === 0 ? "bg-slate-50" : "bg-white")
              }
            >
              <div className="flex items-center justify-between">
                <span className="h-2 w-2 rounded-full bg-[#E94B6F]" />
                <span className="h-1 w-7 rounded-full bg-slate-200" />
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-200" />
              <div className="mt-2 h-2 w-10/12 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#E94B6F]" />
          <div className="h-px flex-1 bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
          <div className="h-px flex-1 bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
        </div>
      </div>
    </div>
  );
}

function ProblemPanel({ item }: { item: ProblemItem }) {
  const Icon = item.icon;
  const isDark = item.theme === "dark";

  return (
    <article
      className={
        "h-full rounded-[34px] p-5 sm:p-6 " +
        (isDark
          ? "border border-white/10 bg-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.20)] backdrop-blur-xl"
          : "border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]")
      }
    >
      <div className="flex items-center justify-between gap-3">
        <div
          className={
            "inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] " +
            (isDark ? "border border-white/10 bg-white/8 text-white/72" : "border border-slate-200 bg-slate-50 text-slate-700")
          }
        >
          <span>{item.label}</span>
        </div>
        <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] " + item.accent}>
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <h3 className={"mt-4 max-w-[480px] font-onest text-[24px] font-semibold leading-[1.04] tracking-[-0.9px] sm:text-[28px] " + (isDark ? "text-white" : "text-slate-950")}>
        {item.title}
      </h3>

      <p className={"mt-3 max-w-[480px] font-['DM_Sans'] text-[14px] leading-[1.7] " + (isDark ? "text-white/72" : "text-slate-600")}>
        {item.summary}
      </p>

      <div className="mt-5">
        <ProblemVisual scene={item.scene} />
      </div>
    </article>
  );
}

export default function ProblemRedesign() {
  return (
    <section id="problem" className="relative w-full overflow-hidden bg-[#18172F] py-16 sm:py-20 lg:min-h-[100svh] lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/16 blur-[160px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#E94B6F]/12 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            <AlertTriangle className="h-4 w-4 text-[#FF8DA5]" />
            <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/75">
              Current Enterprise System landscape
            </span>
          </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05, ease: ''easeOut'' as const }}
              className=''mt-5 max-w-[760px] font-onest text-[40px] font-semibold leading-[0.96] tracking-[-1.8px] text-white sm:text-[58px] lg:text-[70px]''
            >
              Problem
            </motion.h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            {problems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" as const }}
              >
                <ProblemPanel item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
