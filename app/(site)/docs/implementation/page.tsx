"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  ArrowUpRight,
  Cloud,
  Settings,
  Upload,
  Rocket,
  Check,
  CalendarClock,
  Users,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import DocsTabs from "@/components/site/DocsTabs";

const steps = [
  {
    icon: Cloud,
    title: "Deploy",
    desc: "Get instant access to your secure, fully managed cloud workspace — provisioned and ready in minutes with zero infrastructure to maintain.",
    points: ["Instant cloud provisioning", "Enterprise-grade security by default", "No servers to manage"],
  },
  {
    icon: Settings,
    title: "Configure",
    desc: "Set up your organizational structure, chart of accounts, modules, users, and roles through intuitive guided wizards.",
    points: ["Guided setup wizards", "Role-based access control", "40+ industry templates"],
  },
  {
    icon: Upload,
    title: "Import",
    desc: "Bring your data from legacy systems with built-in migration tools. CSV, Excel, and API-based imports are fully supported.",
    points: ["CSV & Excel imports", "API-based migration", "Validation & field mapping"],
  },
  {
    icon: Rocket,
    title: "Go Live",
    desc: "Start running your business on Nexus AI First with full training resources, documentation, and dedicated support at your side.",
    points: ["Full training resources", "Comprehensive documentation", "Dedicated support team"],
  },
];

const playbook = [
  { icon: CalendarClock, title: "Typical Timeline", desc: "Most organizations go live in 4–12 weeks depending on scope, modules, and data complexity." },
  { icon: Users, title: "Dedicated Team", desc: "A success manager and implementation consultants guide you through every phase." },
  { icon: ShieldCheck, title: "Best Practices", desc: "Proven go-live checklists, data validation gates, and phased rollout strategies." },
];

export default function ImplementationDocsPage() {
  return (
    <>
      <PageHero
        badge="Implementation"
        badgeIcon={ClipboardCheck}
        title={
          <>
            Up and Running in <span className="text-[#6C63FF]">4 Steps</span>
          </>
        }
        subtitle="Go from zero to a fully operational ERP faster than any traditional vendor. Here's how our implementation playbook gets you live with confidence."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
        >
          Talk to an Expert <ArrowUpRight className="w-4 h-4" />
        </Link>
      </PageHero>

      <DocsTabs />

      {/* Steps */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative p-6 rounded-3xl bg-white border border-[#15122E]/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#6C63FF]" />
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#6C63FF] text-white flex items-center justify-center font-poppins text-sm font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#15122E] mb-2">
                  {s.title}
                </h3>
                <p className="font-['DM_Sans'] text-[14px] leading-relaxed text-[#15122E]/70 mb-4">
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 font-['DM_Sans'] text-[13px] text-[#15122E]">
                      <div className="w-4 h-4 rounded-full bg-[#4F46E5]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#4F46E5]" strokeWidth={3} />
                      </div>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Playbook */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-[28px] lg:text-[38px] font-semibold text-[#15122E] tracking-[-1px]">
              Implementation Playbook
            </h2>
            <p className="max-w-[560px] mx-auto mt-2 font-['DM_Sans'] text-[#15122E]/70 text-lg">
              Go-live preparation and best practices, refined across hundreds of deployments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {playbook.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="p-8 rounded-3xl bg-[#6C63FF]/5 border border-[#6C63FF]/15"
                >
                  <Icon className="w-8 h-8 text-[#6C63FF] mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                    {p.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[900px] mx-auto rounded-[32px] p-10 lg:p-14 text-center bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] text-white">
          <Rocket className="w-12 h-12 mx-auto mb-6" />
          <h2 className="font-heading text-[28px] lg:text-[36px] font-semibold tracking-[-1px] mb-4">
            Ready to plan your rollout?
          </h2>
          <p className="max-w-[520px] mx-auto text-white/85 font-['DM_Sans'] text-lg mb-8">
            Talk to our implementation team and we&apos;ll map out a go-live plan tailored to your
            organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-[#6C63FF] font-poppins font-semibold hover:scale-[1.02] transition-transform"
          >
            Talk to Sales <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
