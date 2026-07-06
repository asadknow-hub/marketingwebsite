"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles, Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { featureModules } from "@/lib/data/featureModules";

const totalFeatures = featureModules.reduce((sum, m) => sum + m.features.length, 0);

export default function WhyChooseUs01Finsyc({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const tags = ["Finance", "CRM & Sales", "HR & Payroll", "Supply Chain", "AI & Automation"];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={cn("w-full bg-white py-16 md:py-24 lg:py-[120px] flex justify-center", className)}>
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div
            ref={containerRef}
            className="w-full max-w-[1248px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[80px]"
          >
            {/* Left Column - Sticky Header */}
            <div className="w-full lg:w-[420px] lg:sticky lg:top-24 lg:self-start flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6C63FF]/10 bg-[#6C63FF]/5 whitespace-nowrap w-fit"
              >
                <Sparkles className="w-4 h-4 text-[#6C63FF]" strokeWidth={2.5} />
                <span className="text-[#6C63FF] text-center font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  Complete Platform
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className="text-[#15122E] font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] lg:tracking-[-1.8px]"
              >
                One Platform.{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  Every Module
                </span>{" "}
                You Need.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#15122E] font-sans text-base md:text-[18px] font-normal leading-[24px] md:leading-[28px] opacity-80 max-w-[400px]"
              >
                Nexus AI First unifies {featureModules.length} modules and {totalFeatures}+ features
                in a single AI-first system — so every team works from the same source of truth.
              </motion.p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {tags.map((tag: string, i: number) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="px-4 py-2 rounded-full bg-[#F5F3FF] border border-[#15122E]/10 text-[#15122E] font-sans text-sm font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Scroll Progress Bar */}
              <div className="hidden lg:block w-full h-1 bg-[#15122E]/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: progress, originX: 0 }}
                  className="w-full h-full bg-[#6C63FF] rounded-full"
                />
              </div>

              <Link
                href="/features"
                className="inline-flex items-center gap-2 h-12 px-6 w-fit rounded-full bg-[#15122E] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
              >
                Explore all features <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column - Modules > Submodules List */}
            <div className="w-full lg:flex-1 flex flex-col gap-12">
              {featureModules.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
                    className="border-t border-[#15122E]/10 pt-8"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-11 h-11 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#4F46E5]" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[#15122E] font-onest text-[22px] md:text-[24px] font-semibold tracking-[-0.6px]">
                        {m.name}
                      </h3>
                      <span className="ml-auto shrink-0 text-xs font-semibold text-[#4F46E5] bg-[#4F46E5]/10 px-2.5 py-1 rounded-full">
                        {m.features.length} features
                      </span>
                    </div>
                    <p className="text-[#15122E]/70 font-sans text-[15px] md:text-base leading-relaxed mb-5">
                      {m.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {m.features.map((f) => (
                        <div key={f.name} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#6C63FF]/15 flex items-center justify-center shrink-0 mt-1">
                            <Check className="w-2.5 h-2.5 text-[#6C63FF]" strokeWidth={3} />
                          </div>
                          <p className="text-[14px] leading-snug">
                            <span className="text-[#15122E] font-medium">{f.name}</span>
                            <span className="text-[#15122E]/50"> — {f.description}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
