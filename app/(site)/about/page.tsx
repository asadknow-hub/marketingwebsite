"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Rocket,
  Heart,
  Brain,
  Globe,
  Users,
  Shield,
  Zap,
  Check,
  Cloud,
  Gauge,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";

const stats = [
  { value: "812", label: "Built-in Forms" },
  { value: "18", label: "E2E Processes" },
  { value: "40+", label: "Industries" },
  { value: "85+", label: "Modules" },
  { value: "50K+", label: "Users Supported" },
  { value: "99.9%", label: "Uptime SLA" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Empower every enterprise to run smarter with a unified, AI-first platform that replaces dozens of disconnected tools — delivered as a service, ready in days not months.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    desc: "To become the world's most trusted Agentic ERP platform, helping organizations of all sizes operate efficiently across 40+ industries from a single cloud.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Customer obsession, relentless innovation, enterprise-grade reliability, and the belief that powerful software should be effortless to adopt.",
  },
];

const reasons = [
  { icon: Cloud, title: "Cloud-Native SaaS", desc: "Fully hosted and managed for you. No servers to maintain, no upgrades to schedule — always on the latest version." },
  { icon: Brain, title: "AI at the Core", desc: "Real-time insights, predictive analytics, and intelligent automation powered by AI — not bolted on, built in." },
  { icon: Globe, title: "40+ Industries", desc: "Specialized modules and workflows for Automotive, Banking, Healthcare, Retail, Manufacturing, and more." },
  { icon: Gauge, title: "Rapid Time-to-Value", desc: "Go live fast with guided onboarding, prebuilt templates, and a platform that scales as you grow." },
  { icon: Users, title: "Dedicated Support", desc: "Priority support, success managers, and expert professional services to ensure you get the most from the platform." },
  { icon: Shield, title: "Enterprise Security", desc: "RBAC, end-to-end encryption, SSO, audit logging, and SOC 2 / GDPR-aligned compliance built in." },
];

const platformPoints = [
  "Fully managed cloud — we handle hosting, scaling, and updates",
  "99.9% uptime SLA with enterprise-grade infrastructure",
  "Automatic upgrades — always on the latest release",
  "SSO, RBAC, and SOC 2 / GDPR-aligned security",
  "Flexible plans that scale from startup to enterprise",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        badgeIcon={Sparkles}
        title={
          <>
            About <span className="text-[#6C63FF]">Nexus AI First</span>
          </>
        }
        subtitle="An AI-first enterprise platform delivered as a fully managed cloud service — unifying finance, operations, HR, and more across 40+ industries."
      />

      {/* Stats bar */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8 border-y border-[#15122E]/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="text-center"
            >
              <div className="font-heading text-3xl font-bold text-[#6C63FF]">{s.value}</div>
              <div className="mt-1 font-['DM_Sans'] text-sm text-[#15122E]/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[32px] lg:text-[44px] font-semibold text-[#15122E] tracking-[-1.2px] mb-3">
              Built on principles
            </h2>
            <p className="max-w-[560px] mx-auto font-['DM_Sans'] text-[#15122E]/70 text-lg">
              Nexus AI First exists to help enterprises run smarter and faster.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-8 rounded-3xl bg-white border border-[#15122E]/10 hover:border-[#6C63FF]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#6C63FF]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#15122E] mb-3">
                    {v.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform split */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-[#F5F3FF]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] font-poppins text-xs font-semibold mb-4">
              Cloud SaaS Platform
            </span>
            <h2 className="font-heading text-[30px] lg:text-[40px] font-semibold text-[#15122E] tracking-[-1px] mb-5">
              Enterprise-grade, fully managed
            </h2>
            <p className="font-['DM_Sans'] text-lg text-[#15122E]/70 mb-6">
              Nexus AI First is delivered as a secure, cloud-hosted service. We handle the
              infrastructure, scaling, and updates so your team can focus on running the business.
            </p>
            <ul className="space-y-3 mb-8">
              {platformPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 font-['DM_Sans'] text-[#15122E]">
                  <div className="w-5 h-5 rounded-full bg-[#4F46E5]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#4F46E5]" strokeWidth={3} />
                  </div>
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
              >
                Get Started <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#15122E]/15 hover:border-[#6C63FF] transition-colors text-[#15122E] font-poppins font-semibold"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "812", label: "Forms" },
              { value: "18", label: "E2E Processes" },
              { value: "40+", label: "Industries" },
              { value: "85+", label: "Modules" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-8 rounded-3xl bg-white border border-[#15122E]/10 text-center"
              >
                <div className="font-heading text-4xl font-bold text-[#6C63FF] mb-2">
                  {s.value}
                </div>
                <div className="font-['DM_Sans'] text-sm text-[#15122E]/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[32px] lg:text-[44px] font-semibold text-[#15122E] tracking-[-1.2px] mb-3">
              Why Nexus AI First?
            </h2>
            <p className="max-w-[600px] mx-auto font-['DM_Sans'] text-[#15122E]/70 text-lg">
              We built the ERP we always wanted — open, intelligent, and genuinely
              enterprise-ready.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="p-6 rounded-3xl bg-white border border-[#15122E]/10 hover:border-[#6C63FF]/40 hover:shadow-[0_20px_60px_rgba(108,99,255,0.1)] transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#6C63FF]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                    {r.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70">
                    {r.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto rounded-[32px] p-10 lg:p-14 text-center bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] text-white"
        >
          <Users className="w-12 h-12 mx-auto mb-6" />
          <h2 className="font-heading text-[30px] lg:text-[40px] font-semibold tracking-[-1px] mb-4">
            Ready to get started?
          </h2>
          <p className="max-w-[560px] mx-auto text-white/85 font-['DM_Sans'] text-lg mb-8">
            Request a personalized demo or talk to our team about a plan tailored to your
            organization&apos;s needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-[#6C63FF] font-poppins font-semibold hover:scale-[1.02] transition-transform"
            >
              Request a Demo <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/40 text-white font-poppins font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
