"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock3, Network } from "lucide-react";
import { ChapterMark, type, gradientText, glass, MeshBg } from "./ui";

interface ProblemItem {
  label: string;
  title: string;
  summary: string;
  icon: ElementType;
  accent: string;
  accentText: string;
  tags: string[];
}

const problems: ProblemItem[] = [
  {
    label: "Problem 1",
    title: "Rigid systems can't keep up.",
    summary: "Requirements freeze before the business does — teams patch around outdated software for months.",
    icon: Clock3,
    accent: "bg-gradient-to-br from-[#685BFD] to-[#6366F1]",
    accentText: "text-[#A78BFA]",
    tags: ["Frozen scope", "Backlogged changes", "Manual workarounds"],
  },
  {
    label: "Problem 2",
    title: "Fragmented tools drain focus.",
    summary: "Work scatters across ERP, CRM, docs, and chat — people babysit software instead of doing the job.",
    icon: Network,
    accent: "bg-gradient-to-br from-[#EC4899] to-[#F472B6]",
    accentText: "text-[#F472B6]",
    tags: ["Six disconnected apps", "Lost context", "Copy-paste busywork"],
  },
];

function ProblemPanel({ item, index }: { item: ProblemItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className={"group relative flex h-full flex-col rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] sm:p-8 " + glass.darkHover}
    >
      <div className={"pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-20 blur-[80px] transition-opacity duration-300 group-hover:opacity-40 " + item.accent} />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(0,0,0,0.2)] " + item.accent}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
            {item.label}
          </span>
        </div>

        <div>
          <h3 className="font-inter text-[22px] font-semibold leading-[1.15] tracking-[-0.6px] text-white sm:text-[26px]">
            {item.title}
          </h3>
          <p className="mt-3 font-inter text-[14px] leading-[1.65] text-white/55 sm:text-[15px]">
            {item.summary}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 font-poppins text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProblemRedesign() {
  return (
    <section id="problem" className="relative flex w-full items-center overflow-hidden bg-[#0B0F1A] py-16 sm:py-20 lg:min-h-screen lg:py-20">
      <MeshBg tone="dark" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="mb-6"
            >
              <ChapterMark id="problem" tone="dark" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <AlertTriangle className="h-4 w-4 text-[#F472B6]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                Current Enterprise System landscape
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] as const }}
              className={"mt-6 " + type.h2 + " text-white"}
            >
              Enterprise software freezes.
              <span className={"block " + gradientText.brand}>Employees lose time.</span>
            </motion.h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:items-stretch">
            {problems.map((item, index) => (
              <ProblemPanel key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
