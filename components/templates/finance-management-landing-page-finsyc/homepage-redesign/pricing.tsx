"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import { ChapterMark, type, gradientText, glass, glow, MeshBg } from "./ui";

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
    accent: "from-[#685BFD] via-[#7C3AED] to-[#6366F1]",
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
    accent: "from-[#EC4899] via-[#F472B6] to-[#FB7185]",
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
    accent: "from-[#0891B2] via-[#685BFD] to-[#7C3AED]",
  },
];

const planAccentStyles = [
  {
    badge: "border-[#685BFD]/20 bg-[#685BFD]/10 text-[#A78BFA]",
    dot: "bg-[#685BFD]",
  },
  {
    badge: "border-[#EC4899]/20 bg-[#EC4899]/10 text-[#F9A8C4]",
    dot: "bg-[#EC4899]",
  },
  {
    badge: "border-[#0891B2]/20 bg-[#0891B2]/10 text-[#67E8F9]",
    dot: "bg-[#0891B2]",
  },
] as const;

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const accent = planAccentStyles[index % planAccentStyles.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
      className={
        "group relative overflow-hidden rounded-[28px] border p-5 backdrop-blur-2xl transition-all duration-300 hover:border-white/[0.15] sm:p-6 lg:p-7 " +
        (plan.highlight
          ? "border-white/[0.1] bg-gradient-to-b from-white/[0.08] via-white/[0.05] to-white/[0.03] ring-1 ring-[#685BFD]/15 shadow-[0_30px_100px_rgba(0,0,0,0.4)] " + glow.brandGlow
          : "border-white/[0.06] bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.3)] " + glass.darkHover)
      }
    >
      <div className={"pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40 " + plan.accent} />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className={"inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.24em] " + accent.badge}>
            <span className={"h-1.5 w-1.5 rounded-full " + accent.dot} />
            {plan.badge}
          </span>
          {plan.highlight && (
            <span className="rounded-full border border-[#685BFD]/20 bg-[#685BFD]/10 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-[#A78BFA]">
              Most chosen
            </span>
          )}
        </div>

        <h3 className="mt-5 font-inter text-[24px] font-semibold leading-tight tracking-[-0.8px] text-white sm:text-[28px]">
          {plan.name}
        </h3>
        <p className="mt-3 max-w-[420px] font-inter text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
          {plan.description}
        </p>

        <div className="mt-5 rounded-[20px] border border-white/[0.06] bg-white/[0.03] p-4">
          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
            Investment
          </p>
          <p className="mt-2 font-inter text-[28px] font-semibold tracking-[-1px] text-white sm:text-[32px]">
            {plan.priceLabel}
          </p>
          <p className="mt-1 font-inter text-[14px] leading-relaxed text-white/50">
            {plan.priceDetail}
          </p>
        </div>

        <div className="mt-5 space-y-2">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-[14px] border border-white/[0.06] bg-white/[0.025] px-3 py-3 transition-colors hover:bg-white/[0.05]"
            >
              <div className={"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white " + plan.accent}>
                <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
              </div>
              <p className="font-inter text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
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
      className={"relative flex w-full items-center overflow-hidden bg-[#0B0F1A] py-16 sm:py-20 lg:min-h-screen lg:py-20 " + (className || "")}
    >
      <MeshBg tone="dark" />

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
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            <Sparkles className="h-4 w-4 text-[#A78BFA]" />
            <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] text-white/70">
              Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            className={"mt-6 max-w-[760px] " + type.h2 + " text-white"}
          >
            Simple plans for every rollout.
            <span className={"block " + gradientText.brand}>Built for governed scale.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" as const }}
            className="mt-5 max-w-[700px] font-inter text-[16px] leading-[1.78] text-white/60 sm:text-[17px]"
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
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-8 rounded-[24px] border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-2xl sm:p-6"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[620px]">
                <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.26em] text-white/60">
                  Need a bespoke scope?
                </p>
                <p className="mt-2 font-inter text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
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
