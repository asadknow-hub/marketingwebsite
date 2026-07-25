"use client";

import { type ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, Clock3, Network, ShieldAlert, Workflow } from "lucide-react";

interface ProblemItem {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  icon: ElementType;
  accent: string;
  scene: "freeze" | "silos";
}

const problems: ProblemItem[] = [
  {
    label: "Problem 1",
    title: "Solution design freezes before delivery.",
    description: "The brief gets locked while the business keeps changing, so every update turns into a change request.",
    bullets: ["Requirements drift", "Change requests grow"],
    icon: Clock3,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    scene: "freeze",
  },
  {
    label: "Problem 2",
    title: "Work stays split across disconnected apps.",
    description: "ERP, CRM, email, docs, sheets, and chat each hold a piece of the workflow, but nothing orchestrates the whole path.",
    bullets: ["Data stays fragmented", "Work stays manual"],
    icon: Network,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    scene: "silos",
  },
];

const carouselItems = [...problems, ...problems];

function ProblemVisual({ scene }: { scene: ProblemItem["scene"] }) {
  if (scene === "freeze") {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.08),transparent_24%)]" />
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
            <ShieldAlert className="h-4 w-4 text-[#6C63FF]" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-600">
              frozen design
            </span>
          </div>
          <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-amber-700">
            5-6 months
          </div>
        </div>

        <div className="relative z-10 mt-4 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500">solution design</p>
              <p className="mt-2 font-onest text-[18px] font-semibold tracking-[-0.6px] text-slate-950">Locked after sign-off</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_12px_24px_rgba(15,23,42,0.06)]">
              <Clock3 className="h-5 w-5 text-[#6C63FF]" />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-3 rounded-full bg-slate-200" />
            <div className="h-3 w-10/12 rounded-full bg-slate-100" />
            <div className="h-3 w-7/12 rounded-full bg-slate-100" />
          </div>
        </div>

        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Business", tone: "bg-[#6C63FF]" },
            { label: "Consultant", tone: "bg-slate-300" },
            { label: "Change request", tone: "bg-[#E94B6F]" },
          ].map((item) => (
            <div key={item.label} className="rounded-[20px] border border-slate-200 bg-slate-50 p-3">
              <div className={"h-2.5 w-2.5 rounded-full " + item.tone} />
              <p className="mt-3 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,75,111,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.08),transparent_24%)]" />
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
          <AlertTriangle className="h-4 w-4 text-[#E94B6F]" />
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-600">
            fragmented work
          </span>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
          dozens of apps
        </div>
      </div>

      <div className="relative z-10 mt-4 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500">employee reality</p>
            <p className="mt-2 font-onest text-[18px] font-semibold tracking-[-0.6px] text-slate-950">Operator mode, not value creator mode</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_12px_24px_rgba(15,23,42,0.06)]">
            <Workflow className="h-5 w-5 text-[#E94B6F]" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {["ERP", "CRM", "Email", "Sheets", "Docs", "Chat"].map((item, index) => (
            <div
              key={item}
              className={
                "flex h-12 items-center justify-center rounded-[18px] border border-slate-200 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600 " +
                (index % 2 === 0 ? "bg-white" : "bg-slate-50")
              }
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
        {["Data stays fragmented", "Manual copy-paste", "AI cannot orchestrate"].map((item) => (
          <div key={item} className="rounded-[20px] border border-slate-200 bg-slate-50 px-3 py-3 text-[13px] leading-relaxed text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSlide({ item }: { item: ProblemItem }) {
  const Icon = item.icon;

  return (
    <article className="h-full rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
              <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-600">
                {item.label}
              </span>
            </div>
            <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] " + item.accent}>
              <Icon className="h-4.5 w-4.5" />
            </div>
          </div>

          <h3 className="mt-5 max-w-[420px] font-onest text-[22px] font-semibold leading-tight tracking-[-0.8px] text-slate-950 sm:text-[26px]">
            {item.title}
          </h3>
          <p className="mt-3 max-w-[420px] font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600">
            {item.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {item.bullets.map((bullet) => (
              <div key={bullet} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 font-['DM_Sans'] text-[12px] leading-relaxed text-slate-700">
                {bullet}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
          <ProblemVisual scene={item.scene} />
        </div>
      </div>
    </article>
  );
}

export default function ProblemRedesign() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="problem" className="relative w-full overflow-hidden bg-[#F6F7FB] py-16 sm:py-20 lg:min-h-[100svh] lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/10 blur-[160px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#E94B6F]/8 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          >
            <AlertTriangle className="h-4 w-4 text-[#E11D48]" />
            <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600">
              Current Enterprise System landscape
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
            className="mt-5 max-w-[640px] font-onest text-[36px] font-semibold leading-[0.98] tracking-[-1.8px] text-slate-950 sm:text-[48px] lg:text-[58px]"
          >
            Two problems keep enterprise software stuck.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
            className="mt-5 max-w-[640px] font-['DM_Sans'] text-[16px] leading-[1.7] text-slate-600 sm:text-[17px]"
          >
            Scope freezes too early, and the work is split across too many tools. That is what keeps the business stuck.
          </motion.p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-slate-900">
                <Clock3 className="h-4 w-4 text-[#6C63FF]" />
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">
                  Frozen design
                </p>
              </div>
              <p className="mt-3 font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600">
                Scope gets locked before the business stops moving.
              </p>
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-slate-900">
                <Network className="h-4 w-4 text-[#E94B6F]" />
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">
                  Disconnected systems
                </p>
              </div>
              <p className="mt-3 font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600">
                Work moves through apps that never line up on their own.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-[620px]">
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Visual subsection
              </p>
              <h3 className="mt-2 font-onest text-[26px] font-semibold tracking-[-1px] text-slate-950 sm:text-[32px]">
                A calmer storyboard for the problem, one card at a time.
              </h3>
            </div>

            <p className="max-w-[320px] font-['DM_Sans'] text-[14px] leading-relaxed text-slate-500">
              This row keeps the detail in motion so the section feels illustrative instead of overloaded.
            </p>
          </div>

          <div className="relative mt-5 overflow-hidden rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-[linear-gradient(90deg,rgba(255,255,255,0.98),rgba(255,255,255,0))]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-[linear-gradient(270deg,rgba(255,255,255,0.98),rgba(255,255,255,0))]" />

            <motion.div
              className="flex w-max gap-5 py-1"
              animate={prefersReducedMotion ? undefined : { x: [0, "-50%"] }}
              transition={prefersReducedMotion ? undefined : { duration: 24, ease: "linear", repeat: Infinity }}
              style={{ willChange: "transform" }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  aria-hidden={index >= problems.length}
                  className="w-[min(86vw,760px)] shrink-0"
                >
                  <ProblemSlide item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
