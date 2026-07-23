"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, type LucideIcon } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface SpotlightModule {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  featureNames: string[];
  featureCount: number;
  accent: string;
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
  tag: index === 0 ? "Finance" : "HR",
}));

const nextModuleNames = featureModules
  .filter((module) => module.id !== "finance" && module.id !== "hr")
  .slice(0, 5)
  .map((module) => module.name);
const totalModules = featureModules.length;
const liveCount = spotlightModules.length;
const remainingModules = totalModules - liveCount;

function ModuleCard({ module, index }: { module: SpotlightModule; index: number }) {
  const Icon = module.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.68, delay: 0.08 * index, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
    >
      <div className={"absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-30 bg-gradient-to-br " + module.accent} />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/56">
            {String(index + 1).padStart(2, "0")} · live now
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
            {module.featureCount} capabilities
          </span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_16px_30px_rgba(0,0,0,0.2)] " + module.accent}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/52">
              {module.tag}
            </div>
            <h3 className="mt-3 font-onest text-[22px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[24px]">
              {module.name}
            </h3>
            <p className="mt-3 font-['DM_Sans'] text-[14px] leading-relaxed text-white/68 sm:text-[15px]">
              {module.description}
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-2">
          {module.featureNames.map((feature) => (
            <div
              key={feature}
              className="rounded-[18px] border border-white/10 bg-white/[0.04] px-3 py-3 font-['DM_Sans'] text-[13px] leading-relaxed text-white/78"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
        {label}
      </p>
      <p className="mt-2 font-onest text-[18px] font-semibold leading-tight tracking-[-0.5px] text-white">
        {value}
      </p>
    </div>
  );
}

export default function ModulesRedesign({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <section
      id="modules"
      className={"relative w-full overflow-hidden bg-[#090A18] py-20 sm:py-24 lg:py-32 " + (className || "")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(233,75,111,0.12),transparent_26%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#6C63FF]/12 blur-[150px]" />
        <div className="absolute right-[-120px] top-36 h-80 w-80 rounded-full bg-[#E94B6F]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-[620px] lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-[#C7C3FF]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
                How it expands
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
              className="mt-6 max-w-[720px] font-onest text-[38px] font-semibold leading-[0.96] tracking-[-2px] text-white sm:text-[54px] lg:text-[68px]"
            >
              Start with Finance and HRMS.
              <span className="block text-[#C7C3FF]">Grow into the rest of the suite.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
              className="mt-5 max-w-[620px] font-['DM_Sans'] text-[17px] leading-[1.78] text-white/70 sm:text-[18px]"
            >
              These two live modules anchor the first rollout, while the remaining 13 modules sit behind the same
              orchestration layer and approval model.
            </motion.p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <StatChip label="Live now" value={`${liveCount} modules`} />
              <StatChip label="Queued next" value={`${remainingModules} modules`} />
              <StatChip label="Suite total" value={`${totalModules} modules`} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={openGetInTouch}
                className="inline-flex items-center gap-3 rounded-full bg-[#6C63FF] px-5 py-3 font-poppins text-[14px] font-bold text-white shadow-[0_18px_40px_rgba(108,99,255,0.24)] transition-colors hover:bg-[#5B55F6]"
              >
                Talk to Nexus Agent
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15122E]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-poppins text-[14px] font-bold text-white/78 backdrop-blur-xl transition-colors hover:bg-white/8 hover:text-white"
              >
                See pricing
              </a>
            </motion.div>
          </div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
              className="rounded-[34px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                    Wave 1 live now
                  </p>
                  <h3 className="mt-2 max-w-[560px] font-onest text-[24px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[28px]">
                    Two modules are already mapped to the business.
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
                  Finance + HRMS
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-4 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                  <span>Progress</span>
                  <span>{remainingModules} more modules next</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#E94B6F]"
                    style={{ width: `${(liveCount / totalModules) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {spotlightModules.map((module, index) => (
                  <ModuleCard key={module.id} module={module} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" as const }}
              className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/45">
                    What comes next
                  </p>
                  <p className="mt-2 max-w-[560px] font-['DM_Sans'] text-[14px] leading-relaxed text-white/72 sm:text-[15px]">
                    The remaining modules already sit behind the same control plane, so expansion stays consistent as
                    the business grows.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {nextModuleNames.map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-white/64"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
