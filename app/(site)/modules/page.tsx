"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Sparkles, Check } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import PageHero from "@/components/site/PageHero";

const totalFeatures = featureModules.reduce((sum, m) => sum + m.features.length, 0);

export default function ModulesPage() {
  return (
    <>
      <PageHero
        badge="AI-First Platform"
        badgeIcon={Boxes}
        title={
          <>
            Enterprise Modules,{" "}
            <span className="text-[#6C63FF]">Reimagined with AI</span>
          </>
        }
        subtitle="Every module is built with agentic AI at its core — automating decisions, predicting outcomes, and unifying your entire operation on one platform."
      >
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
      </PageHero>

      {/* Filter + grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[1280px] mx-auto">
          {/* Summary */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] font-poppins text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              {featureModules.length} modules · {totalFeatures}+ submodules
            </span>
          </div>

          {/* Modules > Submodules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featureModules.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
                  className="flex flex-col p-7 rounded-3xl bg-white border border-[#15122E]/10 hover:border-[#6C63FF]/40 hover:shadow-[0_20px_60px_rgba(108,99,255,0.1)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#6C63FF]" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#15122E] tracking-[-0.5px]">
                      {m.name}
                    </h3>
                    <span className="ml-auto shrink-0 px-3 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5] font-poppins text-xs font-semibold">
                      {m.features.length} submodules
                    </span>
                  </div>
                  <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70 mb-5">
                    {m.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-auto">
                    {m.features.map((f) => (
                      <div key={f.name} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#6C63FF]/15 flex items-center justify-center shrink-0 mt-1">
                          <Check className="w-2.5 h-2.5 text-[#6C63FF]" strokeWidth={3} />
                        </div>
                        <span className="font-['DM_Sans'] text-[14px] leading-snug text-[#15122E]">
                          {f.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
