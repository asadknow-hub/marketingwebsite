"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Building2,
  Server,
  Users,
  Headphones,
  Shield,
  Cog,
  Search,
  ClipboardCheck,
  ArrowUpRight,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";

interface Tier {
  name: string;
  icon: any;
  tagline: string;
  monthly: number | null;
  annual: number | null;
  highlight: boolean;
  cta: string;
  features: string[];
}

const tiers: Tier[] = [
  {
    name: "Starter",
    icon: Zap,
    tagline: "For small teams getting started with Agentic ERP.",
    monthly: 49,
    annual: 39,
    highlight: false,
    cta: "Get Started",
    features: [
      "Core Finance & CRM modules",
      "Up to 25 users",
      "Standard AI automation",
      "Email support",
      "99.9% uptime SLA",
      "REST API access",
    ],
  },
  {
    name: "Professional",
    icon: Rocket,
    tagline: "For scaling businesses that need the full platform.",
    monthly: 99,
    annual: 79,
    highlight: true,
    cta: "Get Started",
    features: [
      "All 85+ modules included",
      "Up to 250 users",
      "Advanced Agentic AI & Copilot",
      "Priority support",
      "Unlimited integrations & API",
      "Custom dashboards & reports",
      "Guided onboarding",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    tagline: "For large organizations with advanced needs.",
    monthly: null,
    annual: null,
    highlight: false,
    cta: "Talk to Sales",
    features: [
      "Everything in Professional",
      "Unlimited users",
      "Dedicated success manager",
      "Custom SLAs & security review",
      "Private cloud or on-premise",
      "Bespoke development",
      "SSO, SCIM & advanced governance",
    ],
  },
];

const services = [
  { icon: Server, title: "Managed Hosting", desc: "Fully managed cloud or private deployment." },
  { icon: Users, title: "Implementation", desc: "Custom configuration and data migration." },
  { icon: Headphones, title: "Premium Support", desc: "Dedicated technical support and SLAs." },
  { icon: Shield, title: "Training", desc: "User enablement and documentation." },
  { icon: Cog, title: "Process Optimization", desc: "Streamline your business workflows." },
  { icon: Search, title: "Solution Design", desc: "Blueprint the right setup for your business." },
  { icon: ClipboardCheck, title: "Success Reviews", desc: "Ongoing optimization of your ERP usage." },
];

const faqs = [
  {
    q: "Can I try the platform before committing?",
    a: "Yes — request a personalized demo and our team will set up a guided walkthrough and proof-of-concept tailored to your business.",
  },
  {
    q: "How is pricing calculated?",
    a: "Plans are priced per active user, per month. Choose annual billing to save around 20% compared to monthly.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time and changes are prorated automatically.",
  },
  {
    q: "How secure is my data?",
    a: "Nexus AI First is built with enterprise-grade encryption, SSO, role-based access control, and SOC 2 / GDPR-aligned practices.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  return (
    <>
      <PageHero
        badge="Flexible Plans"
        badgeIcon={Sparkles}
        title={
          <>
            Pricing that <span className="text-[#6C63FF]">scales with you</span>
          </>
        }
        subtitle="Choose the plan that fits your team today and upgrade as you grow — no long-term lock-in. Talk to us for a tailored quote."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
        >
          Get Started <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#15122E]/15 hover:border-[#6C63FF] transition-colors text-[#15122E] font-poppins font-semibold"
        >
          Talk to Sales
        </Link>
      </PageHero>

      {/* Pricing tiers */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={"font-poppins text-sm font-semibold " + (!annual ? "text-[#15122E]" : "text-[#15122E]/50")}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual((v) => !v)}
              className="relative w-14 h-8 rounded-full bg-[#6C63FF]/15 transition-colors"
              aria-label="Toggle billing period"
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
                className={"absolute top-1 w-6 h-6 rounded-full bg-[#6C63FF] " + (annual ? "left-7" : "left-1")}
              />
            </button>
            <span className={"font-poppins text-sm font-semibold " + (annual ? "text-[#15122E]" : "text-[#15122E]/50")}>
              Annual <span className="text-[#4F46E5]">(save 20%)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              const price = annual ? tier.annual : tier.monthly;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={
                    "relative flex flex-col p-8 rounded-[28px] " +
                    (tier.highlight
                      ? "bg-[#15122E] text-white shadow-[0_30px_80px_rgba(21,18,46,0.25)] lg:-mt-4 lg:mb-4"
                      : "bg-white border border-[#15122E]/10")
                  }
                >
                  {tier.highlight && (
                    <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#6C63FF] text-white font-poppins text-xs font-semibold">
                      Most Popular
                    </span>
                  )}
                  <div className={"w-12 h-12 rounded-2xl flex items-center justify-center mb-5 " + (tier.highlight ? "bg-[#6C63FF]" : "bg-[#6C63FF]/10")}>
                    <Icon className={"w-6 h-6 " + (tier.highlight ? "text-white" : "text-[#6C63FF]")} />
                  </div>
                  <h3 className={"font-heading text-2xl font-bold mb-1 " + (tier.highlight ? "text-white" : "text-[#15122E]")}>
                    {tier.name}
                  </h3>
                  <p className={"font-['DM_Sans'] text-[14px] mb-6 " + (tier.highlight ? "text-white/70" : "text-[#15122E]/60")}>
                    {tier.tagline}
                  </p>
                  <div className="mb-6">
                    {price === null ? (
                      <div className={"font-heading text-4xl font-bold " + (tier.highlight ? "text-white" : "text-[#15122E]")}>
                        Custom
                      </div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className={"font-heading text-5xl font-bold " + (tier.highlight ? "text-white" : "text-[#6C63FF]")}>
                          ${price}
                        </span>
                        <span className={"font-['DM_Sans'] text-sm mb-2 " + (tier.highlight ? "text-white/60" : "text-[#15122E]/50")}>
                          /user / mo
                        </span>
                      </div>
                    )}
                    {price !== null && (
                      <div className={"font-['DM_Sans'] text-xs mt-1 " + (tier.highlight ? "text-white/50" : "text-[#15122E]/50")}>
                        billed {annual ? "annually" : "monthly"}
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className={"flex items-start gap-2.5 font-['DM_Sans'] text-[15px] " + (tier.highlight ? "text-white/90" : "text-[#15122E]")}>
                        <div className={"w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 " + (tier.highlight ? "bg-[#4F46E5]" : "bg-[#4F46E5]/15")}>
                          <Check className={"w-3.5 h-3.5 " + (tier.highlight ? "text-white" : "text-[#4F46E5]")} strokeWidth={3} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={
                      "w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-poppins font-semibold transition-colors " +
                      (tier.highlight
                        ? "bg-[#6C63FF] hover:bg-[#4F46E5] text-white"
                        : "bg-[#15122E] hover:bg-[#4F46E5] text-white")
                    }
                  >
                    {tier.cta} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-[#F5F3FF]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-[#6C63FF]" />
            <h2 className="font-heading text-[32px] lg:text-[44px] font-semibold text-[#15122E] tracking-[-1.2px] mb-3">
              Professional Services
            </h2>
            <p className="max-w-[620px] mx-auto font-['DM_Sans'] text-[#15122E]/70 text-lg">
              Accelerate your rollout with our embedded consultants — from implementation and
              migration to training and ongoing optimization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                  className="p-6 rounded-3xl bg-white border border-[#15122E]/10 text-center hover:border-[#6C63FF]/40 transition-colors"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-[#6C63FF]" />
                  <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-1">
                    {s.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[14px] text-[#15122E]/70">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
            >
              Request Professional Services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto rounded-[32px] p-10 lg:p-14 text-center bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] text-white"
        >
          <Rocket className="w-14 h-14 mx-auto mb-6" />
          <h2 className="font-heading text-[30px] lg:text-[40px] font-semibold tracking-[-1px] mb-4">
            Need a plan tailored to your enterprise?
          </h2>
          <p className="max-w-[560px] mx-auto text-white/85 font-['DM_Sans'] text-lg mb-8">
            Our team will design a package around your user count, modules, security, and
            deployment requirements — with volume pricing and dedicated support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-[#6C63FF] font-poppins font-semibold hover:scale-[1.02] transition-transform"
          >
            Talk to Sales <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[760px] mx-auto">
          <h2 className="text-center font-heading text-[32px] lg:text-[44px] font-semibold text-[#15122E] tracking-[-1.2px] mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="p-6 rounded-3xl bg-white border border-[#15122E]/10"
              >
                <h4 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                  {f.q}
                </h4>
                <p className="font-['DM_Sans'] text-[15px] text-[#15122E]/70 leading-relaxed">
                  {f.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
