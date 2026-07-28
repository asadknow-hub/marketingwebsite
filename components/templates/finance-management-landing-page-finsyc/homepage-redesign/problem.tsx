"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock3, Lock, Network, ShieldAlert, Unplug, Workflow } from "lucide-react";

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
    summary: "The brief locks before the business stops changing. Requirements freeze, but reality keeps moving — leaving teams to patch around rigid systems for months.",
    icon: Clock3,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    scene: "freeze",
    theme: "light",
  },
  {
    label: "Problem 2",
    title: "Fragmented systems reduce Employees output.",
    summary: "Teams bounce between ERP, CRM, email, docs, sheets, and chat. Work lives in silos, context gets lost, and people spend more time stitching tools together than doing the job.",
    icon: Network,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    scene: "silos",
    theme: "light",
  },
];

function ProblemVisual({ scene }: { scene: ProblemItem["scene"] }) {
  if (scene === "freeze") {
    return (
      <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">
            <ShieldAlert className="h-3.5 w-3.5 text-[#6C63FF]" />
            <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
              frozen design
            </span>
          </div>
          <span className="h-2 w-2 rounded-full bg-amber-400" />
        </div>

        <div className="mt-3 flex flex-col items-center">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#6C63FF]/16 to-[#4F46E5]/6">
            <div className="absolute inset-0 rounded-full bg-[#6C63FF]/30 blur-lg" />
            <Lock className="relative h-5 w-5 text-[#6C63FF]" />
          </div>
          <p className="mt-2 font-onest text-[13px] font-semibold text-slate-950">Solution design, locked</p>
          <div className="mt-2 flex w-full items-center gap-1.5">
            <div className="h-1.5 flex-1 rounded-full bg-[#6C63FF]/70" />
            <div className="h-1.5 flex-1 rounded-full bg-[#6C63FF]/40" />
            <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
            <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[
            { label: "Locked brief", desc: "Signed off, then outdated" },
            { label: "Change requests", desc: "Months in queue" },
            { label: "Workarounds", desc: "Sheets & scripts everywhere" },
          ].map((item) => (
            <div key={item.label} className="rounded-[12px] border border-slate-200 bg-white px-2 py-2 text-center">
              <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.12em] text-slate-600">{item.label}</p>
              <p className="mt-1 font-['DM_Sans'] text-[9px] leading-[1.3] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1">
          <Workflow className="h-3.5 w-3.5 text-[#E94B6F]" />
          <span className="font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700">
            fragmented work
          </span>
        </div>
        <span className="h-2 w-2 rounded-full bg-[#E94B6F]" />
      </div>

      <div className="mt-3 flex flex-col items-center">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#E94B6F]/16 to-[#FF7FA2]/6">
          <div className="absolute inset-0 rounded-full bg-[#E94B6F]/30 blur-lg" />
          <Unplug className="relative h-5 w-5 text-[#E94B6F]" />
        </div>
        <p className="mt-2 font-onest text-[13px] font-semibold text-slate-950">Six apps, zero context</p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        {[
          { name: "ERP", pain: "Data locked in" },
          { name: "CRM", pain: "Context missing" },
          { name: "Docs", pain: "Versions drift" },
          { name: "Chat", pain: "Decisions buried" },
        ].map((item, index) => (
          <div
            key={item.name}
            className={
              "rounded-[12px] border border-slate-200 px-2 py-2 text-center " +
              (index % 2 === 0 ? "bg-white" : "bg-slate-50")
            }
          >
            <p className="font-poppins text-[8px] font-bold uppercase tracking-[0.12em] text-slate-600">{item.name}</p>
            <p className="mt-1 font-['DM_Sans'] text-[9px] leading-[1.3] text-slate-500">{item.pain}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-center">
        <span className="font-poppins text-[8px] uppercase tracking-[0.12em] text-slate-500">No shared context</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="font-poppins text-[8px] uppercase tracking-[0.12em] text-slate-500">Manual copy-paste</span>
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <span className="font-poppins text-[8px] uppercase tracking-[0.12em] text-slate-500">AI only answers</span>
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
        "flex h-full flex-col items-center rounded-[30px] p-4 text-center sm:p-5 " +
        (isDark
          ? "border border-white/10 bg-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.20)] backdrop-blur-xl"
          : "border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]")
      }
    >
      <div className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] " + item.accent}>
        <Icon className="h-4 w-4" />
      </div>

      <div
        className={
          "mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] " +
          (isDark ? "border border-white/10 bg-white/8 text-white/72" : "border border-slate-200 bg-slate-50 text-slate-700")
        }
      >
        <span>{item.label}</span>
      </div>

      <h3 className={"mt-3 max-w-[440px] font-onest text-[21px] font-semibold leading-[1.08] tracking-[-0.7px] sm:text-[24px] " + (isDark ? "text-white" : "text-slate-950")}>
        {item.title}
      </h3>

      <p className={"mt-2 max-w-[420px] font-['DM_Sans'] text-[13px] leading-[1.6] " + (isDark ? "text-white/72" : "text-slate-600")}>
        {item.summary}
      </p>

      <div className="mt-4 w-full">
        <ProblemVisual scene={item.scene} />
      </div>
    </article>
  );
}

export default function ProblemRedesign() {
  return (
    <section id="problem" className="relative w-full overflow-hidden bg-[#18172F] py-14 sm:py-16 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/16 blur-[160px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#E94B6F]/12 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
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
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" as const }}
              className="mt-4 font-onest text-[36px] font-semibold leading-[0.98] tracking-[-1.4px] text-white sm:text-[48px] lg:text-[54px]"
            >
              Enterprise software freezes. Employees lose time.
            </motion.h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 lg:items-start">
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
