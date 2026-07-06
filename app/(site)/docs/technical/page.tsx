"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  ArrowUpRight,
  Server,
  Database,
  Cloud,
  Lock,
  Cpu,
  GitBranch,
  Layers,
  Terminal,
  Webhook,
  KeyRound,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import DocsTabs from "@/components/site/DocsTabs";

const architecture = [
  { icon: Layers, title: "Presentation Layer", desc: "React + Next.js front end with server components and a responsive design system." },
  { icon: Cpu, title: "Application Layer", desc: "Modular service architecture powering 85+ business modules and the Agentic AI engine." },
  { icon: Database, title: "Data Layer", desc: "Multi-tenant relational store with row-level security and full audit trails." },
  { icon: Cloud, title: "Infrastructure Layer", desc: "Cloud-native, containerized, and horizontally scalable with autoscaling." },
];

const apis = [
  { method: "GET", path: "/api/v1/records", desc: "List records with filtering, pagination, and sorting." },
  { method: "POST", path: "/api/v1/records", desc: "Create a new record within a module." },
  { method: "PATCH", path: "/api/v1/records/:id", desc: "Update fields on an existing record." },
  { method: "DELETE", path: "/api/v1/records/:id", desc: "Soft-delete a record with audit retention." },
  { method: "POST", path: "/api/v1/workflows/run", desc: "Trigger an automation workflow programmatically." },
  { method: "GET", path: "/api/v1/reports/:id", desc: "Retrieve computed report data as JSON or CSV." },
];

const capabilities = [
  { icon: KeyRound, title: "Authentication", desc: "OAuth 2.0, API keys, SSO (SAML / OIDC), and SCIM provisioning." },
  { icon: Webhook, title: "Webhooks", desc: "Subscribe to real-time events and push updates to your systems." },
  { icon: Lock, title: "Security", desc: "TLS everywhere, encryption at rest, RBAC, and SOC 2 / GDPR alignment." },
  { icon: GitBranch, title: "Versioning", desc: "Backwards-compatible, versioned APIs with deprecation policies." },
];

const methodColor: Record<string, string> = {
  GET: "bg-[#4F46E5]/15 text-[#00A38E]",
  POST: "bg-[#6C63FF]/15 text-[#6C63FF]",
  PATCH: "bg-amber-100 text-amber-700",
  DELETE: "bg-red-100 text-red-600",
};

export default function TechnicalDocsPage() {
  return (
    <>
      <PageHero
        badge="Technical Documentation"
        badgeIcon={Code2}
        title={
          <>
            Technical <span className="text-[#6C63FF]">Reference</span>
          </>
        }
        subtitle="Comprehensive technical reference for developers building on Nexus AI First. Explore our architecture, APIs, and integration capabilities."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
        >
          <Terminal className="w-4 h-4" /> Request API Access
        </Link>
      </PageHero>

      <DocsTabs />

      {/* Architecture */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <Server className="w-10 h-10 mx-auto mb-3 text-[#6C63FF]" />
            <h2 className="font-heading text-[28px] lg:text-[38px] font-semibold text-[#15122E] tracking-[-1px]">
              System Architecture
            </h2>
            <p className="max-w-[560px] mx-auto mt-2 font-['DM_Sans'] text-[#15122E]/70 text-lg">
              Built on a modern, scalable architecture designed for enterprise workloads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {architecture.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="p-6 rounded-3xl bg-white border border-[#15122E]/10"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#6C63FF]" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-[#15122E] mb-1">
                    {a.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[14px] leading-relaxed text-[#15122E]/70">
                    {a.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-[28px] lg:text-[38px] font-semibold text-[#15122E] tracking-[-1px]">
              REST API Reference
            </h2>
            <p className="max-w-[560px] mx-auto mt-2 font-['DM_Sans'] text-[#15122E]/70 text-lg">
              A consistent, resource-oriented API across every module.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-[#15122E]/10 overflow-hidden divide-y divide-[#15122E]/8">
            {apis.map((a, i) => (
              <motion.div
                key={a.path + a.method}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 sm:px-6 hover:bg-[#6C63FF]/5 transition-colors"
              >
                <span
                  className={
                    "inline-flex items-center justify-center w-16 shrink-0 px-2 py-1 rounded-lg font-poppins text-xs font-bold " +
                    (methodColor[a.method] || "bg-[#15122E]/10 text-[#15122E]")
                  }
                >
                  {a.method}
                </span>
                <code className="font-mono text-[14px] text-[#15122E] shrink-0">{a.path}</code>
                <span className="font-['DM_Sans'] text-[14px] text-[#15122E]/60 sm:ml-auto sm:text-right">
                  {a.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-[28px] lg:text-[38px] font-semibold text-[#15122E] tracking-[-1px]">
              Platform Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="p-6 rounded-3xl bg-[#6C63FF]/5 border border-[#6C63FF]/15"
                >
                  <Icon className="w-6 h-6 text-[#6C63FF] mb-3" />
                  <h3 className="font-heading text-base font-semibold text-[#15122E] mb-1">
                    {c.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[14px] leading-relaxed text-[#15122E]/70">
                    {c.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
