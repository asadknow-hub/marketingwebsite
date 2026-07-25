"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Brain, FileBarChart2, Sparkles, UsersRound } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface SolutionCaseStep {
  label: string;
  text: string;
}

interface SolutionCase {
  label: string;
  role: string;
  title: string;
  description: string;
  icon: ElementType;
  accent: string;
  outcome: string;
  steps: SolutionCaseStep[];
}

const solutionPrinciples = [
  {
    title: "Ask once",
    description: "Employees describe the outcome in plain language.",
  },
  {
    title: "Use live context",
    description: "Nexus reaches into connected systems and business rules.",
  },
  {
    title: "Deliver the work",
    description: "The request becomes a finished, review-ready deliverable.",
  },
];

const solutionCases: SolutionCase[] = [
  {
    label: "Solution 1",
    role: "Finance",
    title: "Create last quarter's report.",
    description:
      "Hard designs keep reporting stuck. Nexus uses live company context so a finance lead does not start from scratch.",
    icon: FileBarChart2,
    accent: "bg-[#EEF2FF] text-[#4F46E5]",
    outcome: "Report pack ready",
    steps: [
      {
        label: "Ask",
        text: "Create last quarter's report.",
      },
      {
        label: "Context",
        text: "Pull ERP, finance, and prior-report context from connected systems.",
      },
      {
        label: "Output",
        text: "Return a review-ready report pack instead of a blank prompt answer.",
      },
    ],
  },
  {
    label: "Solution 2",
    role: "HR",
    title: "Onboard 20 people in one go.",
    description:
      "Fragmented systems reduce employee output. Nexus coordinates the moving pieces so HR can launch all the onboarding packs together.",
    icon: UsersRound,
    accent: "bg-[#FDECF2] text-[#E94B6F]",
    outcome: "20 packs ready",
    steps: [
      {
        label: "Ask",
        text: "Onboard 20 people in one go.",
      },
      {
        label: "Context",
        text: "Pull policies, tasks, access steps, and document templates at once.",
      },
      {
        label: "Output",
        text: "Generate all 20 onboarding packs in one pass.",
      },
    ],
  },
];

function SolutionPrincipleCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">{title}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

function SolutionCaseCard({ item, index }: { item: SolutionCase; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.06 * index, ease: "easeOut" as const }}
      className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
            {item.label}
          </p>

          <div className="mt-2 flex items-center gap-3">
            <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl " + item.accent}>
              <Icon className="h-4.5 w-4.5" />
            </div>

            <div className="min-w-0">
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                {item.role}
              </p>
              <h3 className="mt-1 font-onest text-[22px] font-semibold leading-tight tracking-[-0.7px] text-slate-950 sm:text-[24px]">
                {item.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600">
          <BadgeCheck className="h-4 w-4 text-[#6C63FF]" />
          {item.outcome}
        </div>
      </div>

      <p className="mt-4 max-w-[760px] font-['DM_Sans'] text-[14px] leading-relaxed text-slate-600">
        {item.description}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {item.steps.map((step, stepIndex) => (
          <div
            key={step.label}
            className="rounded-[20px] border border-slate-200 bg-slate-50 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.03)]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                {step.label}
              </p>
              <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300">
                {String(stepIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>
    </motion.article>
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
              <Sparkles className="h-4 w-4 text-[#6C63FF]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-slate-600">
                Agentic for Employees
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
              className="mt-6 max-w-[720px] font-onest text-[38px] font-semibold leading-[0.96] tracking-[-2px] text-slate-950 sm:text-[54px] lg:text-[66px]"
            >
              Ask once.
              <span className="block text-[#6C63FF]">Nexus turns the request into finished work.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
              className="mt-5 max-w-[640px] font-['DM_Sans'] text-[17px] leading-[1.78] text-slate-600 sm:text-[18px]"
            >
              Generic AI can answer a question. Nexus uses live business context so finance and HR teams get real
              deliverables, not just a blank prompt response.
            </motion.p>

            <div className="mt-8">
              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                How it works
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {solutionPrinciples.map((item) => (
                  <SolutionPrincipleCard key={item.title} title={item.title} description={item.description} />
                ))}
              </div>
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
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="relative overflow-hidden rounded-[38px] border border-slate-200 bg-white/95 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.06),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.05),transparent_24%)]" />

            <div className="relative z-10 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                    2 core employee solutions
                  </p>
                  <p className="mt-2 font-onest text-[22px] font-semibold tracking-[-0.6px] text-slate-950 sm:text-[26px]">
                    Two requests, two finished workflows.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-slate-600">
                  <Brain className="h-4 w-4 text-[#6C63FF]" />
                  Agentic
                </div>
              </div>
            </div>

            <div className="relative z-10 p-5 sm:p-6">
              <div className="space-y-4">
                {solutionCases.map((item, index) => (
                  <SolutionCaseCard key={item.title} item={item} index={index} />
                ))}
              </div>

              <div className="mt-5 rounded-[28px] border border-slate-200 bg-slate-50 p-4">
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-slate-500">
                  Shared pattern
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  Ask once. Nexus finds the live context, does the stitching, and hands back a finished deliverable.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
