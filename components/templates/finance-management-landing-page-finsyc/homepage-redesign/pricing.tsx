"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import { ChapterMark, type } from "./ui";

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
    priceDetail: `All ${featureModules.length} modules`,
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

const planAccentStyles = [
  {
    badge: "border-[#6C63FF]/20 bg-[#6C63FF]/10 text-[#C7C3FF]",
    dot: "bg-[#6C63FF]",
  },
  {
    badge: "border-[#E94B6F]/20 bg-[#E94B6F]/10 text-[#FFC0D0]",
    dot: "bg-[#E94B6F]",
  },
  {
    badge: "border-[#0EA5E9]/20 bg-[#0EA5E9]/10 text-[#B9E9FF]",
    dot: "bg-[#0EA5E9]",
  },
] as const;

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const accent = planAccentStyles[index % planAccentStyles.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={
        "relative overflow-hidden rounded-[34px] border p-5 sm:p-6 lg:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl " +
        (plan.highlight
          ? "border-white/18 bg-gradient-to-b from-white/[0.08] via-white/[0.06] to-white/[0.04] ring-1 ring-[#6C63FF]/12"
          : "border-white/10 bg-white/[0.05]")
      }
    >
      <div className={"absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-30 bg-gradient-to-br " + plan.accent} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className={"inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] " + accent.badge}>
            <span className={"h-1.5 w-1.5 rounded-full " + accent.dot} />
            {plan.badge}
          </span>
          {plan.highlight && (
            <span className="rounded-full border border-[#6C63FF]/20 bg-[#6C63FF]/10 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-[#C7C3FF]">
              Most chosen
            </span>
          )}
        </div>

        <h3 className="mt-5 font-onest text-[24px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[28px]">
          {plan.name}
        </h3>
        <p className="mt-3 max-w-[420px] font-['DM_Sans'] text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
          {plan.description}
        </p>

        <div className="mt-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-4">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
            Investment
          </p>
          <p className="mt-2 font-onest text-[28px] font-semibold tracking-[-1px] text-white sm:text-[32px]">
            {plan.priceLabel}
          </p>
          <p className="mt-1 font-['DM_Sans'] text-[14px] leading-relaxed text-white/60">
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
              <p className="font-['DM_Sans'] text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
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
  return (
    <section
      id="pricing"
      className={"relative flex w-full items-center overflow-hidden bg-[#121325] py-14 sm:py-16 lg:min-h-screen lg:py-16 " + (className || "")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#6C63FF]/16 blur-[150px]" />
        <div className="absolute right-[-120px] bottom-[-120px] h-80 w-80 rounded-full bg-[#E94B6F]/12 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="mb-5"
          >
            <ChapterMark id="pricing" tone="dark" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.14)] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-[#9C9BFF]" />
            <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-white/75">
              Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" as const }}
            className={"mt-6 max-w-[760px] " + type.h2 + " text-white"}
          >
            Simple plans for every rollout.
            <span className="block text-[#9C9BFF]">Built for governed scale.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
            className="mt-5 max-w-[700px] font-['DM_Sans'] text-[16px] leading-[1.78] text-white/60 sm:text-[17px]"
          >
            Pick the level of scope you need. Every plan stays approval-led, module-aware, and ready to scale from
            pilot to enterprise.
          </motion.p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" as const }}
            className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-6"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[620px]">
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/60">
                  Need a bespoke scope?
                </p>
                <p className="mt-2 font-['DM_Sans'] text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                  We shape the rollout around your current operating model and show exactly how the first wave stays
                  governed.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {[
                  "Pilot-first",
                  "Wave 1 live",
                  "Enterprise scale",
                ].map((label, index) => {
                  const accent = planAccentStyles[index % planAccentStyles.length];

                  return (
                    <span
                      key={label}
                      className={"inline-flex items-center gap-2 rounded-full border px-4 py-2 font-poppins text-[11px] font-bold uppercase tracking-[0.18em] shadow-[0_8px_24px_rgba(0,0,0,0.14)] " + accent.badge}
                    >
                      <span className={"h-1.5 w-1.5 rounded-full " + accent.dot} />
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
