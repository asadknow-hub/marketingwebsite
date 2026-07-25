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
    title: "Consulting freezes the solution while the business keeps moving.",
    description:
      "Solution Design takes months to prepare, but the company keeps changing every week. Requirements age, new tools appear, and the business is left paying for change requests.",
    bullets: ["Old requirements stay locked", "Change becomes expensive", "New technology arrives after sign-off"],
    icon: Clock3,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    scene: "freeze",
  },
  {
    label: "Problem 2",
    title: "Employees keep stitching together disconnected apps.",
    description:
      "ERP, CRM, email, spreadsheets, messaging, documents, and specialist tools all hold a fragment of the truth. AI helps write or answer, but it still cannot orchestrate work across the business.",
    bullets: ["Information lives everywhere", "Work stays manual", "AI remains single-purpose"],
    icon: Network,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
    scene: "silos",
  },
];

const carouselItems = [...problems, ...problems];

function ProblemVisual({ scene }: { scene: ProblemItem["scene"] }) {
  if (scene === "freeze") {
    return (
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0D19] p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.20),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.14),transparent_26%)]" />
        <div className="relative z-10 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
            <ShieldAlert className="h-4 w-4 text-[#C7C3FF]" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/65">
              frozen design
            </span>
          </div>
          <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
            5-6 months
          </div>
        </div>

        <div className="relative z-10 mt-4 rounded-[24px] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/45">solution design</p>
              <p className="mt-2 font-onest text-[18px] font-semibold tracking-[-0.6px] text-white">Locked after sign-off</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8">
              <Clock3 className="h-5 w-5 text-white/80" />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-3 rounded-full bg-white/16" />
            <div className="h-3 w-10/12 rounded-full bg-white/10" />
            <div className="h-3 w-7/12 rounded-full bg-white/8" />
          </div>
        </div>

        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Business", tone: "bg-[#6C63FF]" },
            { label: "Consultant", tone: "bg-white/12" },
            { label: "Change request", tone: "bg-[#E94B6F]" },
          ].map((item) => (
            <div key={item.label} className="rounded-[20px] border border-white/10 bg-white/6 p-3 backdrop-blur-xl">
              <div className={"h-2.5 w-2.5 rounded-full " + item.tone} />
              <p className="mt-3 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0D19] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,75,111,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_24%)]" />
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
          <AlertTriangle className="h-4 w-4 text-[#FF8DA5]" />
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/65">
            fragmented work
          </span>
        </div>
        <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
          dozens of apps
        </div>
      </div>

      <div className="relative z-10 mt-4 rounded-[24px] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/45">employee reality</p>
            <p className="mt-2 font-onest text-[18px] font-semibold tracking-[-0.6px] text-white">Operator mode, not value creator mode</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8">
            <Workflow className="h-5 w-5 text-white/80" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {[
            "ERP",
            "CRM",
            "Email",
            "Sheets",
            "Docs",
            "Chat",
          ].map((item, index) => (
            <div
              key={item}
              className={
                "flex h-12 items-center justify-center rounded-[18px] border border-white/10 text-[10px] font-bold uppercase tracking-[0.22em] text-white/72 " +
                (index % 2 === 0 ? "bg-white/8" : "bg-white/12")
              }
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
        {[
          "Data stays fragmented",
          "Manual copy-paste",
          "AI only answers, it cannot orchestrate",
        ].map((item) => (
          <div key={item} className="rounded-[20px] border border-white/10 bg-white/6 px-3 py-3 text-[13px] leading-relaxed text-white/74 backdrop-blur-xl">
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
    <article className="h-full rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-5 backdrop-blur-2xl">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
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

          <h3 className="mt-5 max-w-[420px] font-onest text-[24px] font-semibold leading-tight tracking-[-0.8px] text-slate-950 sm:text-[28px]">
            {item.title}
          </h3>
          <p className="mt-4 max-w-[420px] font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
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
    <section id="problem" className="relative w-full overflow-hidden bg-[#F6F7FB] py-20 sm:py-24 lg:min-h-[100svh] lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/10 blur-[160px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#E94B6F]/8 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:grid lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-10 lg:px-[96px]">
        <div className="max-w-[560px]">
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
            className="mt-5 font-onest text-[38px] font-semibold leading-[0.98] tracking-[-1.8px] text-slate-950 sm:text-[52px] lg:text-[64px]"
          >
            Two problems keep enterprise software stuck.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
            className="mt-5 max-w-[760px] font-['DM_Sans'] text-[17px] leading-[1.75] text-slate-600 sm:text-[18px]"
          >
            The business keeps changing, but the old enterprise model asks teams to freeze requirements and work around disconnected systems. Nexus AI First removes that gap.
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
                Requirements age between sign-off and delivery.
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
                Work stays manual across apps, chats, and spreadsheets.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600">
                Flowing carousel
              </span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-1.5 w-16 rounded-full bg-slate-200" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(255,255,255,0.98),rgba(255,255,255,0))]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(255,255,255,0.98),rgba(255,255,255,0))]" />

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
                  className="w-[min(82vw,720px)] shrink-0"
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
