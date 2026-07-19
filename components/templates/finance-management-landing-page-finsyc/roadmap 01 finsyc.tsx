"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Boxes,
  Building2,
  DollarSign,
  Layers,
  Lock,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";

interface RoadmapCardProps {
  wave: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: ReadonlyArray<string>;
  moreCount: number;
  accent: string;
  reverse?: boolean;
  note: string;
}

interface UnlockCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  delay?: number;
}

const moduleIndex = Object.fromEntries(featureModules.map((module) => [module.id, module]));

const waveOne = [
  {
    wave: "Wave 1 · Live now",
    title: "Orchestration AI Layer",
    description: "The agnostic intelligence layer that understands your business logic, interprets intent, and directs every task to the right agent or person.",
    icon: Layers,
    features: ["Business context", "Task routing", "Controls stay visible"],
    moreCount: 0,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
    note: "System layer",
  },
  {
    wave: "Wave 1 · Live now",
    title: "Finance & Accounting",
    description: moduleIndex.finance?.description || "End-to-end financial management from general ledger to advanced reporting and compliance.",
    icon: DollarSign,
    features: (moduleIndex.finance?.features ?? []).slice(0, 4).map((f) => f.name),
    moreCount: Math.max((moduleIndex.finance?.features.length ?? 0) - 4, 0),
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF8DA5]",
    note: "Wave 1 launch",
  },
  {
    wave: "Wave 1 · Live now",
    title: "HRMS",
    description: moduleIndex.hr?.description || "Complete workforce management from recruitment to retirement with integrated payroll.",
    icon: Briefcase,
    features: (moduleIndex.hr?.features ?? []).slice(0, 4).map((f) => f.name),
    moreCount: Math.max((moduleIndex.hr?.features.length ?? 0) - 4, 0),
    accent: "bg-gradient-to-br from-[#0EA5E9] to-[#6366F1]",
    note: "Wave 1 launch",
  },
] as const;

const waveTwo = [
  {
    wave: "Wave 2 · Target Q3 2027",
    title: moduleIndex.crm?.name || "CRM & Sales",
    description: moduleIndex.crm?.description || "Complete customer relationship management with lead tracking, opportunity management, and sales automation.",
    icon: (moduleIndex.crm?.icon as LucideIcon) ?? Boxes,
    features: (moduleIndex.crm?.features ?? []).slice(0, 4).map((f) => f.name),
    moreCount: Math.max((moduleIndex.crm?.features.length ?? 0) - 4, 0),
    accent: "bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9]",
    note: "Q3 2027",
  },
  {
    wave: "Wave 2 · Target Q3 2027",
    title: moduleIndex["supply-chain"]?.name || "Supply Chain & Logistics",
    description: moduleIndex["supply-chain"]?.description || "Complete supply chain visibility from procurement to delivery.",
    icon: (moduleIndex["supply-chain"]?.icon as LucideIcon) ?? Building2,
    features: (moduleIndex["supply-chain"]?.features ?? []).slice(0, 4).map((f) => f.name),
    moreCount: Math.max((moduleIndex["supply-chain"]?.features.length ?? 0) - 4, 0),
    accent: "bg-gradient-to-br from-[#F59E0B] to-[#FB7185]",
    note: "Q3 2027",
  },
  {
    wave: "Wave 2 · Target Q3 2027",
    title: moduleIndex.analytics?.name || "Analytics & BI",
    description: moduleIndex.analytics?.description || "Business intelligence with dashboards, reports, and predictive analytics.",
    icon: (moduleIndex.analytics?.icon as LucideIcon) ?? Sparkles,
    features: (moduleIndex.analytics?.features ?? []).slice(0, 4).map((f) => f.name),
    moreCount: Math.max((moduleIndex.analytics?.features.length ?? 0) - 4, 0),
    accent: "bg-gradient-to-br from-[#14B8A6] to-[#4F46E5]",
    note: "Q3 2027",
  },
] as const;

const waveThreeModules = [
  "manufacturing",
  "projects",
  "service",
  "ai",
  "workflow",
  "integration",
  "admin",
  "marketing",
  "ecommerce",
  "compliance",
].map((id, index) => {
  const module = moduleIndex[id];
  return {
    id,
    name: module?.name || id,
    description: module?.description || "",
    icon: (module?.icon as LucideIcon) ?? Lock,
    features: (module?.features ?? []).slice(0, 3).map((f) => f.name),
    moreCount: Math.max((module?.features.length ?? 0) - 3, 0),
    accent: index % 2 === 0 ? "bg-gradient-to-br from-[#111827] to-[#4F46E5]" : "bg-gradient-to-br from-[#6C63FF] to-[#E94B6F]",
  };
});

const heroBullets = [
  { label: "Wave 1 live now", value: "Orchestration · Finance · HRMS" },
  { label: "Wave 2", value: "Q3 2027" },
  { label: "Wave 3", value: "Fully unlocked" },
];

function RoadmapCard({ wave, title, description, icon: Icon, features, moreCount, accent, reverse = false, note }: RoadmapCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative grid gap-5 lg:grid-cols-[1.06fr_0.94fr]"
    >
      <div className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
        <div className="rounded-[34px] border border-white/80 bg-white/84 p-5 sm:p-6 lg:p-7 shadow-[0_20px_60px_rgba(21,18,46,0.08)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/15 bg-[#6C63FF]/5 px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
              {wave}
            </span>
            <span className="rounded-full bg-[#15122E] px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white/78">
              {note}
            </span>
          </div>

          <div className="mt-5 flex items-start gap-4">
            <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_12px_30px_rgba(21,18,46,0.14)] " + accent}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-onest text-[24px] sm:text-[30px] font-semibold leading-[0.96] tracking-[-1px] text-[#15122E]">
                {title}
              </h3>
              <p className="mt-3 max-w-[560px] font-['DM_Sans'] text-[15px] sm:text-[17px] leading-relaxed text-[#15122E]/74">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-[#15122E]/10 bg-[#F5F3FF] px-3 py-2 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#15122E]/70"
              >
                {feature}
              </span>
            ))}
            {moreCount > 0 && (
              <span className="rounded-full border border-[#15122E]/10 bg-white px-3 py-2 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#15122E]/45">
                +{moreCount} more submodules
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
        <div className="relative h-full min-h-[300px] overflow-hidden rounded-[34px] border border-white/70 bg-white shadow-[0_20px_60px_rgba(21,18,46,0.08)]">
          <div className={"absolute inset-0 bg-gradient-to-br " + accent} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.46),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.28),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/8" />

          <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 lg:p-7 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/72">
                  Snake map
                </p>
                <p className="mt-2 max-w-[260px] font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-white/80">
                  A compact view of the module and the submodules it unlocks.
                </p>
              </div>
              <div className="rounded-full bg-white/14 p-3 backdrop-blur-sm">
                <Icon className="h-7 w-7 text-white" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/16 bg-white/10 p-4 backdrop-blur-md">
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">
                  Feature rail
                </p>
                <div className="mt-3 space-y-2">
                  {features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[13px] font-['DM_Sans'] text-white/86">
                      <span className="h-2 w-2 rounded-full bg-white/90" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/16 bg-white/10 p-4 backdrop-blur-md">
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">
                  Wave marker
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                    {note}
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-white/78">
                  Alternating colors keep the roadmap easy to scan while the snake-like line guides the eye down the suite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-6 hidden h-[calc(100%+3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#6C63FF]/18 to-transparent lg:block" />
      <div className="pointer-events-none absolute left-1/2 top-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border border-white/80 bg-[#6C63FF] shadow-[0_0_0_8px_rgba(108,99,255,0.08)] lg:block" />
    </motion.div>
  );
}

function UnlockCard({ name, description, icon: Icon, accent, delay = 0 }: UnlockCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="rounded-[28px] border border-white/70 bg-white/82 p-5 shadow-[0_18px_50px_rgba(21,18,46,0.06)] backdrop-blur-sm"
    >
      <div className={"flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-[0_12px_28px_rgba(21,18,46,0.12)] " + accent}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-onest text-[21px] sm:text-[24px] font-semibold leading-tight tracking-[-0.8px] text-[#15122E]">
        {name}
      </h3>
      <p className="mt-3 font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-[#15122E]/70">
        {description}
      </p>
    </motion.div>
  );
}

export default function Roadmap01Finsyc({ className }: { className?: string }) {
  const unlockedModules = waveThreeModules;

  return (
    <>
      <section className={"w-full overflow-hidden bg-[#F6F4FF] " + (className || "") }>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#6C63FF]/10 blur-[140px]" />
            <div className="absolute top-[28%] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#4F46E5]/10 blur-[140px]" />
            <div className="absolute bottom-[-140px] right-[8%] h-[320px] w-[320px] rounded-full bg-[#E94B6F]/10 blur-[140px]" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px] py-20 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/10 bg-white/70 px-4 py-2 backdrop-blur-sm"
                >
                  <Boxes className="h-4 w-4 text-[#6C63FF]" />
                  <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
                    Roadmap
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                  className="mt-6 max-w-[720px] font-onest text-[42px] sm:text-[56px] lg:text-[72px] font-semibold leading-[0.94] tracking-[-2.5px] text-[#15122E]"
                >
                  The suite unfolds in waves.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                  className="mt-5 max-w-[650px] font-['DM_Sans'] text-[18px] sm:text-[20px] leading-relaxed text-[#15122E]/78"
                >
                  Top orchestration, Finance & Accounting, and HRMS land first. CRM, supply chain, and analytics follow in Q3 2027. Then the rest of the suite unlocks in wave 3.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  {heroBullets.map((bullet) => (
                    <div key={bullet.label} className="rounded-[24px] border border-white/70 bg-white/78 px-4 py-3 shadow-[0_14px_35px_rgba(21,18,46,0.06)] backdrop-blur-sm">
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-[#6C63FF]">
                        {bullet.label}
                      </p>
                      <p className="mt-1 font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-[#15122E]/78">
                        {bullet.value}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#15122E] px-5 py-3 font-poppins text-[16px] sm:text-[18px] font-bold text-white transition-colors hover:bg-[#4F46E5]"
                  >
                    Talk to us <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#roadmap-timeline"
                    className="inline-flex items-center gap-2 rounded-full border border-[#15122E]/12 bg-white/78 px-5 py-3 font-poppins text-[14px] sm:text-[15px] font-bold text-[#15122E] transition-colors hover:border-[#6C63FF]/40"
                  >
                    See the snake map
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white shadow-[0_24px_70px_rgba(21,18,46,0.08)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.10),transparent_28%)]" />
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#15122E]/40">
                        Vertical map
                      </p>
                      <h2 className="mt-2 font-onest text-[24px] sm:text-[28px] font-semibold tracking-[-0.8px] text-[#15122E]">
                        A simple path from live now to fully unlocked.
                      </h2>
                    </div>
                    <div className="rounded-full bg-[#15122E] p-3 text-white shadow-[0_12px_30px_rgba(21,18,46,0.14)]">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {heroBullets.map((bullet, index) => (
                      <div key={bullet.label} className="rounded-[28px] border border-[#15122E]/8 bg-white/86 p-4 shadow-[0_12px_28px_rgba(21,18,46,0.05)]">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                            0{index + 1}
                          </span>
                          <span className="rounded-full bg-[#6C63FF]/10 px-3 py-1 font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-[#6C63FF]">
                            {bullet.label}
                          </span>
                        </div>
                        <p className="mt-3 font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-[#15122E]/74">
                          {bullet.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div id="roadmap-timeline" className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px] pb-24 lg:pb-32">
          <div className="mx-auto max-w-[1248px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="mb-8 flex items-center gap-2"
            >
              <span className="rounded-full border border-[#6C63FF]/10 bg-white/70 px-3 py-1 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                Wave 1
              </span>
              <span className="font-['DM_Sans'] text-[14px] sm:text-[15px] text-[#15122E]/60">
                Live now · foundation layers
              </span>
            </motion.div>

            <div className="relative flex flex-col gap-10 lg:gap-14">
              {waveOne.map((item, index) => (
                <RoadmapCard
                  key={item.title}
                  wave={item.wave}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  features={item.features}
                  moreCount={item.moreCount}
                  accent={item.accent}
                  reverse={index % 2 === 1}
                  note={item.note}
                />
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="mt-4 flex items-center gap-2"
              >
                <span className="rounded-full border border-[#6C63FF]/10 bg-white/70 px-3 py-1 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                  Wave 2
                </span>
                <span className="font-['DM_Sans'] text-[14px] sm:text-[15px] text-[#15122E]/60">
                  Target Q3 2027 · three modules next
                </span>
              </motion.div>

              {waveTwo.map((item, index) => (
                <RoadmapCard
                  key={item.title}
                  wave={item.wave}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  features={item.features}
                  moreCount={item.moreCount}
                  accent={item.accent}
                  reverse={index % 2 === 0}
                  note={item.note}
                />
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="mt-4 flex items-center gap-2"
              >
                <span className="rounded-full border border-[#15122E]/10 bg-white/70 px-3 py-1 font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#15122E]/55">
                  Wave 3
                </span>
                <span className="font-['DM_Sans'] text-[14px] sm:text-[15px] text-[#15122E]/60">
                  Fully unlocked suite
                </span>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {unlockedModules.map((module, index) => (
                  <UnlockCard
                    key={module.id}
                    name={module.name}
                    description={module.description}
                    icon={module.icon as LucideIcon}
                    accent={index % 2 === 0 ? "bg-gradient-to-br from-[#111827] to-[#4F46E5]" : "bg-gradient-to-br from-[#6C63FF] to-[#E94B6F]"}
                    delay={0.03 * index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
