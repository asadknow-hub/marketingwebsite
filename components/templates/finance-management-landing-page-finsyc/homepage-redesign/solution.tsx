"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Brain, Layers, ShieldCheck, Workflow } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface SolutionStep {
  label: string;
  title: string;
  description: string;
  icon: ElementType;
  accent: string;
}

interface FlowStage {
  label: string;
  title: string;
  description: string;
  icon: ElementType;
  accent: string;
}

const solutionSteps: SolutionStep[] = [
  {
    label: "Step 01",
    title: "Capture the change early.",
    description:
      "Nexus listens for policy shifts, process gaps, and new exceptions before they turn into stale requirements.",
    icon: Layers,
    accent: "bg-[#EEF2FF] text-[#4F46E5]",
  },
  {
    label: "Step 02",
    title: "Route work through the control plane.",
    description:
      "The orchestration layer sends each task to the right module, domain agent, or approver automatically.",
    icon: Workflow,
    accent: "bg-[#EEF7FF] text-[#0EA5E9]",
  },
  {
    label: "Step 03",
    title: "Keep release decisions human-led.",
    description:
      "People approve the outcome while the system keeps adapting in the background.",
    icon: ShieldCheck,
    accent: "bg-[#FDECF2] text-[#E94B6F]",
  },
];

const flowStages: FlowStage[] = [
  {
    label: "Input",
    title: "Live business change enters Nexus.",
    description: "New policies, exceptions, and operating shifts are captured as they happen.",
    icon: Layers,
    accent: "from-[#6C63FF] to-[#4F46E5]",
  },
  {
    label: "Orchestration",
    title: "The system re-maps work automatically.",
    description: "Modules and agents receive the right tasks without manual handoffs.",
    icon: Workflow,
    accent: "from-[#0EA5E9] to-[#6C63FF]",
  },
  {
    label: "Governance",
    title: "People approve the final release.",
    description: "Owners stay in the loop while Nexus keeps the software current.",
    icon: ShieldCheck,
    accent: "from-[#E94B6F] to-[#FF8DA5]",
  },
];

const outcomes = [
  {
    title: "Always current",
    description: "The platform keeps pace with the business instead of freezing it.",
  },
  {
    title: "No redesign cycles",
    description: "Continuous mapping replaces expensive change request loops.",
  },
  {
    title: "One control plane",
    description: "Finance, HR, and operations follow the same orchestration logic.",
  },
];

function SolutionStepCard({ step, index }: { step: SolutionStep; index: number }) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.06 * index, ease: "easeOut" as const }}
      className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl " + step.accent}>
          <Icon className="h-4.5 w-4.5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
              {step.label}
            </p>
            <div className="h-px flex-1 bg-slate-200" />
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-2 font-onest text-[18px] font-semibold leading-tight tracking-[-0.6px] text-slate-950 sm:text-[20px]">
            {step.title}
          </h3>

          <p className="mt-2 font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            {step.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function SolutionFlowVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white/92 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.06),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.05),transparent_24%)]" />

      <div className="relative z-10 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
              Live solution loop
            </p>
            <p className="mt-2 max-w-[420px] font-onest text-[22px] font-semibold tracking-[-0.6px] text-slate-950 sm:text-[26px]">
              Change enters, the system adapts, people approve.
            </p>
          </div>

          <div className="rounded-full border border-emerald-500/20 bg-emerald-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-700">
            always adapting
          </div>
        </div>

        <div className="mt-6 rounded-[30px] border border-slate-200 bg-slate-950 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.22)] sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5">
              <Brain className="h-4 w-4 text-[#C7C3FF]" />
              <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
                Nexus control plane
              </span>
            </div>
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
              24/7
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {flowStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div key={stage.label} className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                  <div className="flex items-start gap-3">
                    <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_16px_30px_rgba(0,0,0,0.18)] " + stage.accent}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
                          {stage.label}
                        </span>
                        <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-2 font-onest text-[18px] font-semibold leading-tight tracking-[-0.6px] text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {index < flowStages.length - 1 ? (
                    <div className="mt-4 flex items-center gap-3 text-white/30">
                      <div className="h-px flex-1 bg-white/10" />
                      <ArrowRight className="h-4 w-4" />
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {outcomes.map((item) => (
            <div key={item.title} className="rounded-[20px] border border-slate-200 bg-white p-3">
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                {item.title}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
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
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
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
              A living system that follows the business.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
              className="mt-5 max-w-[640px] font-['DM_Sans'] text-[17px] leading-[1.78] text-slate-600 sm:text-[18px]"
            >
              Nexus AI First keeps listening for change, translates that change into the right modules, and keeps
              the approval loop human so the software evolves with the company instead of freezing it.
            </motion.p>

            <div className="mt-8 space-y-4">
              {solutionSteps.map((step, index) => (
                <SolutionStepCard key={step.title} step={step} index={index} />
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

          <SolutionFlowVisual />
        </div>
      </div>
    </section>
  );
}
