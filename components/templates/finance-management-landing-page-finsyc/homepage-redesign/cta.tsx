"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";
import { focusRing, type, gradientText, glass, glow, MeshBg } from "./ui";

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
    accent: "from-[#685BFD] via-[#7C3AED] to-[#6366F1]",
  },
  {
    label: "02",
    title: "Map",
    description: "We show how modules, approvals, and data flow together.",
    icon: Workflow,
    accent: "from-[#0891B2] via-[#685BFD] to-[#7C3AED]",
  },
  {
    label: "03",
    title: "Launch",
    description: "You approve the rollout and the system keeps adapting.",
    icon: ShieldCheck,
    accent: "from-[#EC4899] via-[#F472B6] to-[#FB7185]",
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
    <div className={"group rounded-[20px] border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] " + glass.darkHover}>
      <div className="flex items-start gap-3">
        <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_16px_30px_rgba(0,0,0,0.2)] " + step.accent}>
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
              {step.label}
            </span>
            <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
              {step.title}
            </span>
          </div>
          <p className="mt-2 font-inter text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
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
      className={"relative w-full overflow-hidden bg-[#0B0F1A] " + (className || "")}
    >
      <MeshBg tone="dark" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-20 sm:px-6 sm:py-24 lg:px-[96px] lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="max-w-[720px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <Sparkles className="h-4 w-4 text-[#685BFD]" />
              <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                Final step
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className={"mt-6 max-w-[760px] " + type.h2 + " text-white"}
            >
              Let the platform
              <span className={"block " + gradientText.brand}>keep itself current.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-5 max-w-[660px] font-inter text-[17px] leading-[1.78] text-white/55 sm:text-[18px]"
            >
              We’ll map your first workflow, show the live module flow, and roll out with approval-led control so the
              business never has to wait for another frozen design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={openGetInTouch}
                className={
                  "inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#685BFD] to-[#7C3AED] px-5 py-3 font-poppins text-[14px] font-bold text-white shadow-[0_18px_50px_rgba(104,91,253,0.35)] transition-shadow hover:shadow-[0_22px_60px_rgba(104,91,253,0.5)] " +
                  focusRing
                }
              >
                Talk to Nexus Agent
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>

              <a
                href="#pricing"
                className={
                  "inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-3 font-poppins text-[14px] font-bold text-white/80 backdrop-blur-xl transition-all hover:bg-white/[0.08] hover:text-white hover:border-white/[0.18] " +
                  focusRing
                }
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
                  className={"rounded-[18px] border border-white/[0.06] bg-white/[0.03] px-4 py-3 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/55 backdrop-blur-xl " + glass.darkHover}
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
                  What happens next
                </p>
                <p className="mt-2 font-inter text-[22px] font-semibold tracking-[-0.6px] text-white sm:text-[26px]">
                  A simple rollout path.
                </p>
              </div>
              <div className="rounded-full border border-[#685BFD]/20 bg-[#685BFD]/10 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-[#A78BFA]">
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

        <div className="mt-16 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[460px]">
              <div className="flex items-center gap-3 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-[#A78BFA]">
                  <Layers className="h-5 w-5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-poppins text-[14px] font-bold tracking-[-0.2px] text-white">Nexus AI First</span>
                  <span className="font-poppins text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                    Agentic enterprise software
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-[420px] font-inter text-[14px] leading-relaxed text-white/50">
                Built to replace frozen solution design with continuous mapping, orchestration, and approval-led
                rollout.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    "rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/55 transition-all hover:bg-white/[0.06] hover:text-white/80 " +
                    focusRing
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-inter text-[13px] leading-relaxed">
              © 2026 Nexus AI First. All rights reserved.
            </p>
            <p className="font-inter text-[13px] leading-relaxed">
              Agentic enterprise software built to stay current.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
