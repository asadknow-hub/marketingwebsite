"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
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

function ProblemCard({ item, delay }: { item: ProblemItem; delay: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.72, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
    >
      <div className={"absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-35 " + item.accent} />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/56">
              {item.label}
            </span>
          </div>
          <div className={"flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.2)] " + item.accent}>
            <Icon className="h-4.5 w-4.5" />
          </div>
        </div>

        <h3 className="mt-5 max-w-[620px] font-onest text-[24px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[28px] lg:text-[30px]">
          {item.title}
        </h3>
        <p className="mt-4 max-w-[620px] font-['DM_Sans'] text-[15px] sm:text-[16px] leading-relaxed text-white/70">
          {item.description}
        </p>

        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {item.bullets.map((bullet) => (
            <div key={bullet} className="rounded-[18px] border border-white/10 bg-white/6 px-3 py-3 text-[13px] leading-relaxed text-white/78 backdrop-blur-xl">
              {bullet}
            </div>
          ))}
        </div>

        <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-[#060711] p-4">
          <ProblemVisual scene={item.scene} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProblemRedesign() {
  return (
    <section id="problem" className="w-full bg-[#090A18] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="max-w-[820px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 backdrop-blur-xl"
          >
            <AlertTriangle className="h-4 w-4 text-[#FF8DA5]" />
            <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/65">
              Why the old model breaks
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
            className="mt-5 font-onest text-[38px] font-semibold leading-[0.98] tracking-[-1.8px] text-white sm:text-[52px] lg:text-[64px]"
          >
            Two problems keep enterprise software stuck.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
            className="mt-5 max-w-[760px] font-['DM_Sans'] text-[17px] leading-[1.75] text-white/70 sm:text-[18px]"
          >
            The business keeps changing, but the old enterprise model asks teams to freeze requirements and work around disconnected systems. Nexus AI First removes that gap.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {problems.map((item, index) => (
            <ProblemCard key={item.label} item={item} delay={0.08 * index} />
          ))}
        </div>
      </div>
    </section>
  );
}
