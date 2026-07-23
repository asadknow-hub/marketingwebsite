"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface PricingPlan {
  name: string;
  badge: string;
  priceLabel: string;
  priceDetail: string;
  description: string;
  features: string[];
  highlight?: boolean;
  accent: string;
}

const plans: PricingPlan[] = [
  {
    name: "Pilot",
    badge: "Fast proof",
    priceLabel: "Custom pilot",
    priceDetail: "One workflow, one team",
    description:
      "Validate the control plane with a focused pilot before wider rollout.",
    features: [
      "Live mapping workshop",
      "One approval flow",
      "Production-ready handoff",
      "Executive readout",
    ],
    accent: "from-[#6C63FF] to-[#4F46E5]",
  },
  {
    name: "Wave 1",
    badge: "Recommended",
    priceLabel: "Rollout package",
    priceDetail: "Finance + HRMS in production",
    description:
      "Launch the first business wave with the highest-value modules in production.",
    features: [
      "Two live modules",
      "Approval-led rollout",
      "Continuous change mapping",
      "Dedicated orchestration support",
    ],
    highlight: true,
    accent: "from-[#E94B6F] to-[#FF8DA5]",
  },
  {
    name: "Enterprise",
    badge: "Full suite",
    priceLabel: "Enterprise agreement",
    priceDetail: "All 15 modules",
    description:
      "Scale the platform across regions, functions, and governance levels.",
    features: [
      "Suite-wide orchestration",
      "Multi-region controls",
      "Security and approvals",
      "Priority support",
    ],
    accent: "from-[#0EA5E9] to-[#6C63FF]",
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={
        "relative overflow-hidden rounded-[34px] border p-5 sm:p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl " +
        (plan.highlight
          ? "border-white/12 bg-white/[0.08]"
          : "border-white/10 bg-white/[0.04]")
      }
    >
      <div className={"absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-25 bg-gradient-to-br " + plan.accent} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/56">
            {plan.badge}
          </span>
          {plan.highlight && (
            <span className="rounded-full border border-[#C7C3FF]/25 bg-[#C7C3FF]/12 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-[#EDEBFF]">
              Most chosen
            </span>
          )}
        </div>

        <h3 className="mt-5 font-onest text-[24px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[28px]">
          {plan.name}
        </h3>
        <p className="mt-3 max-w-[420px] font-['DM_Sans'] text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
          {plan.description}
        </p>

        <div className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
            Investment
          </p>
          <p className="mt-2 font-onest text-[28px] font-semibold tracking-[-1px] text-white sm:text-[32px]">
            {plan.priceLabel}
          </p>
          <p className="mt-1 font-['DM_Sans'] text-[14px] leading-relaxed text-white/64">
            {plan.priceDetail}
          </p>
        </div>

        <div className="mt-5 space-y-2.5">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-[18px] border border-white/10 bg-white/[0.04] px-3 py-3"
            >
              <div className={"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white " + plan.accent}>
                <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
              </div>
              <p className="font-['DM_Sans'] text-[13px] leading-relaxed text-white/78 sm:text-[14px]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function PricingRedesign({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <section
      id="pricing"
      className={"relative w-full overflow-hidden bg-[#070816] py-20 sm:py-24 lg:py-32 " + (className || "")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#6C63FF]/14 blur-[150px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#E94B6F]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="max-w-[840px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-[#C7C3FF]" />
            <span className="font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
              Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
            className="mt-6 max-w-[760px] font-onest text-[38px] font-semibold leading-[0.96] tracking-[-2px] text-white sm:text-[54px] lg:text-[68px]"
          >
            Simple plans for every rollout.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
            className="mt-5 max-w-[680px] font-['DM_Sans'] text-[17px] leading-[1.78] text-white/70 sm:text-[18px]"
          >
            Pick the level of scope you need. Every plan is approval-led, module-aware, and built to move with the
            business.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" as const }}
          className="mt-8 flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 backdrop-blur-xl"
        >
          <div>
            <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/45">
              Need a bespoke scope?
            </p>
            <p className="mt-2 max-w-[560px] font-['DM_Sans'] text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              We can shape the first wave around your current operating model and show exactly how the rollout stays
              governed.
            </p>
          </div>

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
        </motion.div>
      </div>
    </section>
  );
}
