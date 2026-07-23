"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface NextStep {
  label: string;
  title: string;
  description: string;
  icon: typeof Sparkles;
  accent: string;
}

const nextSteps: NextStep[] = [
  {
    label: "01",
    title: "Talk",
    description: "We map the current process and define the first wave.",
    icon: Sparkles,
    accent: "from-[#6C63FF] to-[#4F46E5]",
  },
  {
    label: "02",
    title: "Map",
    description: "We show how modules, approvals, and data flow together.",
    icon: Workflow,
    accent: "from-[#0EA5E9] to-[#6C63FF]",
  },
  {
    label: "03",
    title: "Launch",
    description: "You approve the rollout and the system keeps adapting.",
    icon: ShieldCheck,
    accent: "from-[#E94B6F] to-[#FF8DA5]",
  },
];

const footerLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "Top", href: "#top" },
];

function StepCard({ step }: { step: NextStep }) {
  const Icon = step.icon;

  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_16px_30px_rgba(0,0,0,0.18)] " + step.accent}>
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
              {step.label}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/54">
              {step.title}
            </span>
          </div>
          <p className="mt-2 font-['DM_Sans'] text-[13px] leading-relaxed text-white/72 sm:text-[14px]">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FooterCtaRedesign({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <footer
      id="contact"
      className={"relative w-full overflow-hidden bg-[#070816] " + (className || "")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/16 blur-[150px]" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-[#E94B6F]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-24 lg:px-[96px] lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-[#C7C3FF]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
                Final step
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
              className="mt-6 max-w-[760px] font-onest text-[38px] font-semibold leading-[0.96] tracking-[-2px] text-white sm:text-[54px] lg:text-[68px]"
            >
              Let the platform keep itself current.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
              className="mt-5 max-w-[660px] font-['DM_Sans'] text-[17px] leading-[1.78] text-white/70 sm:text-[18px]"
            >
              We’ll map your first workflow, show the live module flow, and roll out with approval-led control so the
              business never has to wait for another frozen design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" as const }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
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
                Review pricing
              </a>
            </motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "No freeze",
                "No change requests",
                "Human approval",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-3 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/64 backdrop-blur-xl"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="rounded-[36px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                  What happens next
                </p>
                <p className="mt-2 font-onest text-[22px] font-semibold tracking-[-0.6px] text-white sm:text-[26px]">
                  A simple rollout path.
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/58">
                approval-led
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {nextSteps.map((step) => (
                <StepCard key={step.label} step={step} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[460px]">
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#C7C3FF]">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-poppins text-[14px] font-bold tracking-[-0.2px]">Nexus AI First</span>
                  <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                    Agentic enterprise software
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-[420px] font-['DM_Sans'] text-[14px] leading-relaxed text-white/58">
                Built to replace frozen solution design with continuous mapping, orchestration, and approval-led
                rollout.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/62 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-['DM_Sans'] text-[13px] leading-relaxed">
              © 2026 Nexus AI First. All rights reserved.
            </p>
            <p className="font-['DM_Sans'] text-[13px] leading-relaxed">
              Agentic enterprise software built to stay current.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
