"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { industries } from "@/lib/data/industries";

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = String(params?.slug || "");
  const ind = industries[slug];

  if (!ind) {
    return (
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 text-center pt-32 pb-24">
        <h1 className="font-heading text-3xl font-semibold text-[#15122E] mb-3">
          Industry not found
        </h1>
        <p className="font-['DM_Sans'] text-[#15122E]/70 mb-8">
          The industry you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
      </section>
    );
  }

  const Icon = ind.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div
          className={`absolute inset-0 -z-10 opacity-[0.08] bg-gradient-to-br ${ind.hero.gradient}`}
        />
        <div className="max-w-[1000px] mx-auto">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 font-poppins text-sm font-semibold text-[#15122E]/60 hover:text-[#6C63FF] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Industries
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
              {ind.name}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-heading text-[34px] lg:text-[52px] font-semibold text-[#15122E] tracking-[-1.5px] leading-tight mb-5"
          >
            {ind.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[720px] font-['DM_Sans'] text-lg text-[#15122E]/70 leading-relaxed mb-8"
          >
            {ind.hero.subtitle}
          </motion.p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
            >
              Talk to an Expert <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-[#15122E]/15 hover:border-[#6C63FF] transition-colors text-[#15122E] font-poppins font-semibold"
            >
              Explore Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      {ind.stats.length > 0 && (
        <section className="w-full px-4 sm:px-6 lg:px-8 pb-4">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            {ind.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-8 rounded-3xl bg-white border border-[#15122E]/10 text-center"
              >
                <div className="font-heading text-4xl font-bold text-[#6C63FF] mb-1">
                  {s.value}
                </div>
                <div className="font-['DM_Sans'] text-sm text-[#15122E]/60">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-[26px] lg:text-[34px] font-semibold text-[#15122E] tracking-[-1px] mb-10">
            Built for {ind.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ind.features.map((f, i) => {
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
      {ind.benefits.length > 0 && (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F5F3FF]">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-heading text-[26px] lg:text-[34px] font-semibold text-[#15122E] tracking-[-1px] mb-10">
              Why teams choose us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ind.benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="p-8 rounded-3xl bg-white border border-[#15122E]/10 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#6C63FF]/15 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#6C63FF]" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                      {b.title}
                    </h3>
                    <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70">
                      {b.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-[900px] mx-auto rounded-[32px] p-10 lg:p-14 text-center bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] text-white">
          <h2 className="font-heading text-[28px] lg:text-[36px] font-semibold tracking-[-1px] mb-4">
            Ready to transform {ind.name}?
          </h2>
          <p className="max-w-[520px] mx-auto text-white/85 font-['DM_Sans'] text-lg mb-8">
            Talk to our team about a solution tailored to your industry&apos;s needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-[#6C63FF] font-poppins font-semibold hover:scale-[1.02] transition-transform"
          >
            Talk to an Expert <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
