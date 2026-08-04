"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock3, Network } from "lucide-react";
import { ChapterMark, type } from "./ui";

interface ProblemItem {
  label: string;
  title: string;
  summary: string;
  icon: ElementType;
  accent: string;
  tags: string[];
}

const problems: ProblemItem[] = [
  {
    label: "Problem 1",
    title: "Rigid systems can't keep up.",
    summary: "Requirements freeze before the business does — teams patch around outdated software for months.",
    icon: Clock3,
    accent: "bg-gradient-to-br from-[#685BFD] to-[#6366F1]",
    tags: ["Frozen scope", "Backlogged changes", "Manual workarounds"],
  },
  {
    label: "Problem 2",
    title: "Fragmented tools drain focus.",
    summary: "Work scatters across ERP, CRM, docs, and chat — people babysit software instead of doing the job.",
    icon: Network,
    accent: "bg-gradient-to-br from-[#EC4899] to-[#F472B6]",
    tags: ["Six disconnected apps", "Lost context", "Copy-paste busywork"],
  },
];

function ProblemPanel({ item }: { item: ProblemItem }) {
  const Icon = item.icon;

  return (
    <article className="flex h-full flex-col items-center rounded-[28px] border border-white/10 bg-white/[0.06] p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:p-7">
      <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] " + item.accent}>
        <Icon className="h-5 w-5" />
      </div>

      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
        <span>{item.label}</span>
      </div>

      <h3 className="mt-3 max-w-[380px] font-inter text-[22px] font-semibold leading-[1.1] tracking-[-0.6px] text-white sm:text-[25px]">
        {item.title}
      </h3>

      <p className="mt-2 max-w-[380px] font-inter text-[14px] leading-[1.6] text-white/65">
        {item.summary}
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-poppins text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ProblemRedesign() {
  return (
    <section id="problem" className="relative flex w-full items-center overflow-hidden bg-[#0B0F1A] py-14 sm:py-16 lg:min-h-screen lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(104,91,253,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,0.10),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#685BFD]/16 blur-[160px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#EC4899]/12 blur-[160px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="mb-5"
            >
              <ChapterMark id="problem" tone="dark" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            >
              <AlertTriangle className="h-4 w-4 text-[#F472B6]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/75">
                Current Enterprise System landscape
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" as const }}
              className={"mt-5 " + type.h2 + " text-white"}
            >
              Enterprise software freezes.
              <span className="block text-white/60">Employees lose time.</span>
            </motion.h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
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
