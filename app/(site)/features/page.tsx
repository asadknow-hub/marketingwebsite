"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Check, LayoutGrid } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import PageHero from "@/components/site/PageHero";

export default function FeaturesPage() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string[]>(["crm", "finance"]);

  const totalFeatures = useMemo(
    () => featureModules.reduce((sum, m) => sum + m.features.length, 0),
    []
  );

  const toggle = (id: string) =>
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const q = search.toLowerCase();
  const filtered = useMemo(
    () =>
      featureModules.filter((m) => {
        if (!q) return true;
        return (
          m.name.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.features.some(
            (f) =>
              f.name.toLowerCase().includes(q) ||
              f.description.toLowerCase().includes(q)
          )
        );
      }),
    [q]
  );

  const stats = [
    { value: `${featureModules.length}`, label: "Core Modules" },
    { value: `${totalFeatures}+`, label: "Features" },
    { value: "18", label: "Process Flows" },
    { value: "40+", label: "Industry Solutions" },
  ];

  return (
    <>
      <PageHero
        badge="Enterprise Platform"
        badgeIcon={LayoutGrid}
        title={
          <>
            Complete <span className="text-[#6C63FF]">feature overview</span>
          </>
        }
        subtitle={`Explore ${totalFeatures}+ features across ${featureModules.length} modules designed to transform your enterprise operations.`}
      >
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search features, modules, or capabilities..."
            className="w-full h-13 py-3.5 pl-12 pr-4 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl font-['DM_Sans'] text-white placeholder:text-white/40 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 transition-all"
          />
        </div>
      </PageHero>

      {/* Stats */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-12 bg-[#0F1024]">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center p-6 rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl"
            >
              <div className="font-onest text-3xl font-bold text-[#9C9BFF]">{s.value}</div>
              <div className="mt-1 font-['DM_Sans'] text-sm text-white/50">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accordion */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 bg-[#0F1024]">
        <div className="max-w-[1100px] mx-auto space-y-4">
          {filtered.length === 0 && (
            <p className="text-center py-16 font-['DM_Sans'] text-white/40">
              No features found for &quot;{search}&quot;.
            </p>
          )}
          {filtered.map((mod) => {
            const Icon = mod.icon;
            const isOpen = expanded.includes(mod.id);
            const visibleFeatures = q
              ? mod.features.filter(
                  (f) =>
                    f.name.toLowerCase().includes(q) ||
                    f.description.toLowerCase().includes(q)
                )
              : mod.features;
            return (
              <div
                key={mod.id}
                className="rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(mod.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#6C63FF] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-onest text-xl font-semibold text-white tracking-[-0.4px]">
                          {mod.name}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/[0.08] text-white/50 font-poppins text-xs font-semibold">
                          {mod.features.length} features
                        </span>
                      </div>
                      <p className="mt-1 font-['DM_Sans'] text-[15px] text-white/60">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-white/50 shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {(isOpen || q) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {visibleFeatures.map((f) => (
                          <div
                            key={f.name}
                            className="p-4 rounded-2xl border border-white/8 hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/[0.06] transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#6C63FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5 text-[#9C9BFF]" strokeWidth={3} />
                              </div>
                              <div>
                                <div className="font-onest text-[15px] font-semibold text-white">
                                  {f.name}
                                </div>
                                <div className="font-['DM_Sans'] text-[13px] text-white/50 leading-relaxed">
                                  {f.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
