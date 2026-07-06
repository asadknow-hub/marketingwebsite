"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";
import { industries } from "@/lib/data/industries";
import PageHero from "@/components/site/PageHero";

export default function IndustriesPage() {
  const list = Object.values(industries);

  return (
    <>
      <PageHero
        badge="Industry Solutions"
        badgeIcon={Building2}
        title={
          <>
            Built for <span className="text-[#6C63FF]">your industry</span>
          </>
        }
        subtitle="Nexus AI First adapts to the workflows, compliance, and metrics that matter most in your sector — with pre-configured intelligence out of the box."
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
        >
          Talk to an Expert <ArrowUpRight className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
              >
                <Link href={`/industries/${ind.slug}`} className="group block h-full">
                  <div className="relative h-full flex flex-col p-7 rounded-3xl bg-white border border-[#15122E]/10 hover:border-[#6C63FF]/40 hover:shadow-[0_20px_60px_rgba(108,99,255,0.12)] transition-all duration-300 overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#6C63FF]/5 group-hover:bg-[#6C63FF]/10 transition-colors" />
                    <div className="relative w-14 h-14 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center mb-5 group-hover:bg-[#6C63FF] transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#6C63FF] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="relative font-heading text-2xl font-semibold text-[#15122E] tracking-[-0.6px] mb-2">
                      {ind.name}
                    </h3>
                    <p className="relative font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70 flex-1">
                      {ind.hero.subtitle}
                    </p>
                    <span className="relative mt-5 inline-flex items-center gap-1 font-poppins text-sm font-semibold text-[#15122E] group-hover:text-[#6C63FF] transition-colors">
                      Explore solution
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
