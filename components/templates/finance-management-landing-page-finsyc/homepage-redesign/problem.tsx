"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock3, Network, ShieldAlert, Workflow } from "lucide-react";

interface ProblemItem {
  label: string;
  icon: ElementType;
  accent: string;
  scene: "freeze" | "silos";
}

const problems: ProblemItem[] = [
  {
    label: "Problem 1",
    icon: Clock3,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    scene: "freeze",
  },
  {
    label: "Problem 2",
    icon: Network,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    scene: "silos",
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
              <div key={label} className="rounded-[14px] border border-slate-200 bg-slate-50 px-2 py-2 text-center font-poppins text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
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
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">
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

function ProblemSlide({ item }: { item: ProblemItem }) {
  const Icon = item.icon;

  return (
    <article className="h-full rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">
            {item.label}
          </span>
        </div>
        <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] " + item.accent}>
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-4">
        <ProblemVisual scene={item.scene} />
      </div>
    </article>
  );
}

export default function ProblemRedesign() {
  return (
    <section id="problem" className="relative w-full overflow-hidden bg-[#121225] py-16 sm:py-20 lg:min-h-[100svh] lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.20),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/16 blur-[160px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#E94B6F]/12 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto grid gap-10 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-10">
          <div className="max-w-[560px]">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
              className="mt-5 max-w-[640px] font-onest text-[36px] font-semibold leading-[0.98] tracking-[-1.8px] text-white sm:text-[48px] lg:text-[56px]"
            >
              Two problems keep enterprise software stuck.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
              className="mt-5 max-w-[620px] font-['DM_Sans'] text-[16px] leading-[1.7] text-white/68 sm:text-[17px]"
            >
              Scope freezes too early, and work is split across too many tools. That is what keeps the business stuck.
            </motion.p>
          </div>

          <div className="lg:justify-self-end">
            <div className="w-full rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-5 lg:max-w-[740px]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                  Simple visual signals
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
                  <span className="h-2 w-2 rounded-full bg-[#E94B6F]" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {problems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" as const }}
                  >
                    <ProblemSlide item={item} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
