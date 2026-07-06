"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { modules } from "@/lib/data/modules";

export default function ModuleDetailPage() {
  const params = useParams();
  const slug = String(params?.slug || "");
  const mod = modules[slug];

  if (!mod) {
    return (
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 text-center pt-32 pb-24">
        <h1 className="font-heading text-3xl font-semibold text-[#15122E] mb-3">
          Module not found
        </h1>
        <p className="font-['DM_Sans'] text-[#15122E]/70 mb-8">
          The module you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/modules"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Modules
        </Link>
      </section>
    );
  }

  const Icon = mod.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div
          className={`absolute inset-0 -z-10 opacity-[0.08] bg-gradient-to-br ${mod.heroGradient}`}
        />
        <div className="max-w-[1000px] mx-auto">
          <Link
            href="/modules"
            className="inline-flex items-center gap-1.5 font-poppins text-sm font-semibold text-[#15122E]/60 hover:text-[#6C63FF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Modules
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8 text-[#6C63FF]" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] font-poppins text-xs font-semibold">
              {mod.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-[34px] lg:text-[52px] font-semibold text-[#15122E] tracking-[-1.5px] leading-tight mb-5"
          >
            {mod.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[720px] font-['DM_Sans'] text-lg text-[#15122E]/70 leading-relaxed mb-8"
          >
            {mod.description}
          </motion.p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
            >
              Request a Demo <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#15122E]/15 hover:border-[#6C63FF] transition-colors text-[#15122E] font-poppins font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <Sparkles className="w-5 h-5 text-[#6C63FF]" />
            <h2 className="font-heading text-[26px] lg:text-[34px] font-semibold text-[#15122E] tracking-[-1px]">
              Key Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mod.features.map((f, i) => {
              const FIcon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                  className="p-6 rounded-3xl bg-white border border-[#15122E]/10 hover:border-[#6C63FF]/40 hover:shadow-[0_20px_60px_rgba(108,99,255,0.1)] transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center mb-4">
                    <FIcon className="w-5 h-5 text-[#6C63FF]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                    {f.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F5F3FF]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading text-[26px] lg:text-[34px] font-semibold text-[#15122E] tracking-[-1px] mb-10">
            Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {mod.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-[#15122E]/10"
              >
                <div className="w-10 h-10 rounded-full bg-[#6C63FF]/15 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-[#6C63FF]" strokeWidth={3} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                  {b.title}
                </h3>
                <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-[900px] mx-auto rounded-[32px] p-10 lg:p-14 text-center bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] text-white">
          <h2 className="font-heading text-[28px] lg:text-[36px] font-semibold tracking-[-1px] mb-4">
            See {mod.title} in action
          </h2>
          <p className="max-w-[520px] mx-auto text-white/85 font-['DM_Sans'] text-lg mb-8">
            Request a personalized demo and we&apos;ll walk you through how this module fits your
            business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-[#6C63FF] font-poppins font-semibold hover:scale-[1.02] transition-transform"
          >
            Request a Demo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
