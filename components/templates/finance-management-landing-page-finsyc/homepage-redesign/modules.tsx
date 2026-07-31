"use client";

import { motion } from "framer-motion";
import { Sparkles, type LucideIcon } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import { ChapterMark, type } from "./ui";

interface SpotlightModule {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  featureNames: string[];
  featureCount: number;
  accent: string;
  glow: string;
  tag: string;
}

const spotlightSource = featureModules.filter((module) => module.id === "finance" || module.id === "hr");

const spotlightModules: SpotlightModule[] = spotlightSource.map((module, index) => ({
  id: module.id,
  name: module.id === "hr" ? "HRMS" : module.name,
  description: module.description,
  icon: module.icon as LucideIcon,
  featureNames: module.features.slice(0, 4).map((feature) => feature.name),
  featureCount: module.features.length,
  accent: index === 0 ? "from-[#6C63FF] to-[#4F46E5]" : "from-[#E94B6F] to-[#FF8DA5]",
  glow: index === 0 ? "bg-[#6C63FF]" : "bg-[#E94B6F]",
  tag: index === 0 ? "Finance" : "HR",
}));

const nextModuleNames = featureModules
  .filter((module) => module.id !== "finance" && module.id !== "hr")
  .slice(0, 5)
  .map((module) => module.name);
const totalModules = featureModules.length;
const liveCount = spotlightModules.length;
const remainingModules = totalModules - liveCount;
const progressPercent = Math.round((liveCount / totalModules) * 100);

function LiveModuleCard({ module, index }: { module: SpotlightModule; index: number }) {
  const Icon = module.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.68, delay: 0.08 * index, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl"
    >
      <div className={"absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[80px] opacity-25 " + module.glow} />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            0{index + 1} · live now
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
            {module.featureCount} capabilities
          </span>
        </div>

        <div className="mt-6 flex items-start gap-4">
          <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_16px_30px_rgba(0,0,0,0.25)] " + module.accent}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
              {module.tag}
            </div>
            <h3 className="mt-3 font-onest text-[22px] font-semibold leading-tight tracking-[-0.7px] text-white sm:text-[24px]">
              {module.name}
            </h3>
            <p className="mt-3 font-['DM_Sans'] text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
              {module.description}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-2">
          {module.featureNames.map((feature) => (
            <div
              key={feature}
              className="rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-3 font-['DM_Sans'] text-[13px] text-white/75"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-onest text-[30px] font-semibold tracking-[-1px] text-white sm:text-[32px]">{value}</span>
      <span className="max-w-[64px] font-poppins text-[10px] font-bold uppercase leading-[1.2] tracking-[0.14em] text-white/50">
        {label}
      </span>
    </div>
  );
}

export default function ModulesRedesign({ className }: { className?: string }) {
  return (
    <>
      <section
        id="modules"
        className={"relative flex w-full items-center overflow-hidden bg-[#151428] py-14 sm:py-16 lg:min-h-screen lg:py-16 " + (className || "")}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/16 blur-[160px]" />
          <div className="absolute right-[-100px] top-1/3 h-80 w-80 rounded-full bg-[#E94B6F]/10 blur-[160px]" />
          <div className="absolute bottom-[-100px] left-1/3 h-72 w-72 rounded-full bg-[#0EA5E9]/8 blur-[160px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="max-w-[560px]">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut" as const }}
                  className="mb-5"
                >
                  <ChapterMark id="modules" tone="dark" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                >
                  <Sparkles className="h-4 w-4 text-[#6C63FF]" />
                  <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/75">
                    Wave 1 live now
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
                  className={"mt-6 " + type.h2 + " text-white"}
                >
                  Start with Finance and HRMS.
                  <span className="block text-[#6C63FF]">Grow into the rest of the suite.</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
                  className="mt-5 max-w-[520px] font-['DM_Sans'] text-[16px] leading-[1.7] text-white/60"
                >
                  Two live modules anchor the first rollout. The remaining {remainingModules} modules sit behind the same orchestration layer and approval model.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
                  className="mt-8 flex flex-wrap items-center gap-5"
                >
                  <Metric value={String(liveCount)} label="Live modules" />
                  <div className="h-8 w-px bg-white/10" />
                  <Metric value={String(remainingModules)} label="Modules queued" />
                  <div className="h-8 w-px bg-white/10 hidden sm:block" />
                  <Metric value={String(totalModules)} label="Suite total" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" as const }}
                  className="mt-6"
                >
                  <div className="mb-2 flex items-center justify-between gap-4 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                    <span>Wave 1 progress</span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#E94B6F]"
                      style={{ width: `${(liveCount / totalModules) * 100}%` }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {spotlightModules.map((module, index) => (
                  <LiveModuleCard key={module.id} module={module} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        className="relative flex w-full items-center overflow-hidden bg-[#F6F7FB] py-14 sm:py-16 lg:min-h-screen lg:py-16"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(233,75,111,0.06),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
          <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="mb-5"
            >
              <ChapterMark id="roadmap" tone="light" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/15 bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
            >
              <Sparkles className="h-4 w-4 text-[#6C63FF]" />
              <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-[#4F46E5]">
                What comes next
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
              className={"mt-6 " + type.h2 + " text-slate-950"}
            >
              One suite, one control plane.
              <span className="block text-[#6C63FF]">Rolling out in waves.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
              className="mx-auto mt-5 max-w-[620px] font-['DM_Sans'] text-[16px] leading-[1.7] text-slate-600"
            >
              Every module shares the same agentic orchestration and approval model, so expansion stays consistent as the business grows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {nextModuleNames.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.24 + i * 0.04, ease: "easeOut" as const }}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-poppins text-[12px] font-bold uppercase tracking-[0.16em] text-slate-600 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-[#6C63FF]/30 hover:text-slate-900 sm:text-[13px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6C63FF]/60" />
                  {name}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" as const }}
              className="mx-auto mt-10 flex max-w-[680px] flex-col items-center gap-3 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:flex-row sm:justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/15 bg-gradient-to-r from-[#6C63FF]/10 to-[#E94B6F]/10 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
                <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F46E5]">
                  Wave 2 & 3
                </span>
              </span>
              <span className="font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                Same agent brain. New modules unlocked on demand.
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
