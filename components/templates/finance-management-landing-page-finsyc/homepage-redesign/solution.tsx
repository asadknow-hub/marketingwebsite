"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Layers, ShieldCheck, Workflow } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface SolutionPillar {
  label: string;
  title: string;
  description: string;
  icon: ElementType;
}

interface SignalItem {
  title: string;
  description: string;
  icon: ElementType;
  accent: string;
}

const solutionPillars: SolutionPillar[] = [
  {
    label: "Live change capture",
    title: "Map the moving business.",
    description:
      "Nexus listens for new policies, process gaps, and tool changes before they turn into stale requirements.",
    icon: Layers,
  },
  {
    label: "Orchestration layer",
    title: "Route work through agents.",
    description:
      "The control plane sends each task to the right module, domain agent, or approver automatically.",
    icon: Workflow,
  },
  {
    label: "Human control",
    title: "Release with approval.",
    description:
      "People approve the outcome while the system keeps adapting in the background.",
    icon: ShieldCheck,
  },
];

const incomingSignals: SignalItem[] = [
  {
    title: "Business change",
    description: "New policy, exception, or operating model shift enters the system.",
    icon: Layers,
    accent: "from-[#6C63FF] to-[#4F46E5]",
  },
  {
    title: "Intelligence layer",
    description: "Rules and context are re-mapped into active modules and agents.",
    icon: Brain,
    accent: "from-[#0EA5E9] to-[#6C63FF]",
  },
  {
    title: "Work orchestration",
    description: "Tasks move across apps, people, and approvals without manual handoffs.",
    icon: Workflow,
    accent: "from-[#E94B6F] to-[#FF8DA5]",
  },
];

const orchestrationActions: SignalItem[] = [
  {
    title: "Modules sync",
    description: "The suite updates the affected workflow, screen, and control layer.",
    icon: Workflow,
    accent: "from-[#6C63FF] to-[#0EA5E9]",
  },
  {
    title: "Approvals stay visible",
    description: "Every release still passes through the people who own the process.",
    icon: ShieldCheck,
    accent: "from-[#E94B6F] to-[#6C63FF]",
  },
  {
    title: "Agents keep learning",
    description: "The orchestration layer keeps adapting while the business keeps moving.",
    icon: Brain,
    accent: "from-[#0EA5E9] to-[#E94B6F]",
  },
];

const outcomes = [
  {
    title: "Always current",
    description: "The platform keeps pace with the business instead of freezing it.",
  },
  {
    title: "No change requests",
    description: "Continuous mapping replaces expensive redesign cycles.",
  },
  {
    title: "One control plane",
    description: "Finance, HR, and operations follow the same orchestration logic.",
  },
];

function PillarCard({ pillar, index }: { pillar: SolutionPillar; index: number }) {
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.06 * index, ease: "easeOut" as const }}
      className="rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#4F46E5]">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
            {pillar.label}
          </p>
          <h3 className="mt-2 font-onest text-[18px] font-semibold leading-tight tracking-[-0.6px] text-slate-950 sm:text-[20px]">
            {pillar.title}
          </h3>
          <p className="mt-2 font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            {pillar.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SignalCard({ signal }: { signal: SignalItem }) {
  const Icon = signal.icon;

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_16px_30px_rgba(0,0,0,0.18)] " + signal.accent}>
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
            {signal.title}
          </p>
          <p className="mt-2 font-['DM_Sans'] text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
            {signal.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function OutcomeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 backdrop-blur-xl">
      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
        {title}
      </p>
      <p className="mt-2 font-['DM_Sans'] text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
        {description}
      </p>
    </div>
  );
}

export default function SolutionRedesign({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <section
      id="solution"
      className={"relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32 " + (className || "")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.06),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.05),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/10 blur-[160px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-[#E94B6F]/8 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="max-w-[620px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl"
            >
              <ShieldCheck className="h-4 w-4 text-[#6C63FF]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600">
                The solution
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
              className="mt-6 max-w-[720px] font-onest text-[38px] font-semibold leading-[0.96] tracking-[-2px] text-slate-950 sm:text-[54px] lg:text-[66px]"
            >
              A living system, not a frozen design.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
              className="mt-5 max-w-[640px] font-['DM_Sans'] text-[17px] leading-[1.78] text-slate-600 sm:text-[18px]"
            >
              Nexus AI First continuously maps the business, routes work into the right modules, and keeps approvals
              human-led so the software stays current as the company changes.
            </motion.p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {solutionPillars.map((pillar, index) => (
                <PillarCard key={pillar.title} pillar={pillar} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" as const }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={openGetInTouch}
                className="inline-flex items-center gap-3 rounded-full bg-[#6C63FF] px-5 py-3 font-poppins text-[14px] font-bold text-white shadow-[0_18px_40px_rgba(108,99,255,0.25)] transition-colors hover:bg-[#5B55F6]"
              >
                Talk to Nexus Agent
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15122E]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>

              <a
                href="#modules"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-poppins text-[14px] font-bold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-colors hover:bg-slate-50 hover:text-slate-950"
              >
                See the modules
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white/90 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.06),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.05),transparent_24%)]" />
            <div className="relative z-10 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                    Control plane
                  </p>
                  <p className="mt-2 font-onest text-[22px] font-semibold tracking-[-0.6px] text-slate-950 sm:text-[26px]">
                    Continuous mapping in motion.
                  </p>
                </div>
                <div className="rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700">
                  always adapting
                </div>
              </div>
            </div>

            <div className="relative z-10 p-5 sm:p-6">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
                <div className="space-y-3">
                  {incomingSignals.map((signal) => (
                    <SignalCard key={signal.title} signal={signal} />
                  ))}
                </div>

                <div className="relative flex items-center justify-center py-6 lg:py-0">
                  <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
                    <div className="absolute inset-0 rounded-full bg-[#6C63FF]/12 blur-[60px]" />
                    <div className="absolute inset-4 rounded-full border border-slate-200 bg-white" />
                    <div className="absolute inset-9 rounded-full border border-slate-200 bg-slate-50" />
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-slate-900/10 bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.24)]">
                      <Brain className="h-9 w-9 text-[#C7C3FF]" />
                    </div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-slate-600">
                      Continuous mapper
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {orchestrationActions.map((signal) => (
                    <SignalCard key={signal.title} signal={signal} />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {outcomes.map((item) => (
                  <OutcomeCard key={item.title} title={item.title} description={item.description} />
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500">
                    Why it works
                  </p>
                  <p className="mt-2 max-w-[560px] font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                    Nexus keeps ingesting change, remapping modules, and routing work so the system never drifts from
                    reality.
                  </p>
                </div>

                <a
                  href="#modules"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 font-poppins text-[12px] font-bold uppercase tracking-[0.24em] text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  See module wave
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
