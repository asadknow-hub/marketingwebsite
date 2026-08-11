"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Check, Sparkles, X } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";

const aiKeywords = ["ai", "copilot", "predictive", "forecast", "anomaly", "recommendation", "cognitive", "semantic"];

function isAIFeature(name: string, desc: string) {
  const text = (name + " " + desc).toLowerCase();
  return aiKeywords.some((k) => text.includes(k));
}

export default function FeatureExplorer() {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const totalFeatures = useMemo(
    () => featureModules.reduce((sum, m) => sum + m.features.length, 0),
    []
  );

  const aiFeatureCount = useMemo(
    () =>
      featureModules.reduce(
        (sum, m) => sum + m.features.filter((f) => isAIFeature(f.name, f.description)).length,
        0
      ),
    []
  );

  const toggle = (id: string) =>
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const expandAll = () => setExpanded(featureModules.map((m) => m.id));
  const collapseAll = () => setExpanded([]);

  const q = search.toLowerCase();
  const filtered = useMemo(
    () =>
      featureModules.filter((m) => {
        if (activeCategory !== "all" && m.id !== activeCategory) return false;
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
    [q, activeCategory]
  );

  const visibleFeatureCount = filtered.reduce(
    (s, m) => s + (q ? m.features.filter(f => f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)).length : m.features.length),
    0
  );

  return (
    <div className="w-full">
      {/* Section heading */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/15 bg-[#6C63FF]/5 px-4 py-2 mb-5"
        >
          <Sparkles className="w-4 h-4 text-[#6C63FF]" />
          <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
            Feature Explorer
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-onest text-[32px] sm:text-[42px] lg:text-[52px] font-semibold leading-[0.96] tracking-[-1.8px] text-[#15122E]"
        >
          Every module, every feature.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="mt-4 max-w-[620px] mx-auto font-['DM_Sans'] text-[17px] sm:text-[18px] leading-relaxed text-[#15122E]/65"
        >
          {totalFeatures}+ features across {featureModules.length} modules — including {aiFeatureCount} AI-powered capabilities. Search, filter, and explore the full suite.
        </motion.p>
      </div>

      {/* Search bar */}
      <div className="max-w-[640px] mx-auto mb-6">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#15122E]/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search features, modules, or capabilities..."
            className="w-full py-3.5 pl-12 pr-12 rounded-full border border-[#15122E]/10 bg-white font-['DM_Sans'] text-[#15122E] placeholder:text-[#15122E]/40 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 transition-all shadow-[0_8px_24px_rgba(21,18,46,0.05)]"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#15122E]/40 hover:text-[#15122E] transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category filter pills */}
      <div className="max-w-[1100px] mx-auto mb-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full font-poppins text-[12px] font-bold uppercase tracking-[0.12em] transition-all ${
              activeCategory === "all"
                ? "bg-[#6C63FF] text-white"
                : "bg-white border border-[#15122E]/10 text-[#15122E]/55 hover:text-[#15122E] hover:border-[#6C63FF]/30"
            }`}
          >
            All Modules
          </button>
          {featureModules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveCategory(m.id)}
              className={`px-4 py-2 rounded-full font-poppins text-[12px] font-bold uppercase tracking-[0.12em] transition-all ${
                activeCategory === m.id
                  ? "bg-[#6C63FF] text-white"
                  : "bg-white border border-[#15122E]/10 text-[#15122E]/55 hover:text-[#15122E] hover:border-[#6C63FF]/30"
              }`}
            >
              {m.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Result count + expand/collapse */}
      <div className="max-w-[1100px] mx-auto mb-5 flex items-center justify-between gap-4">
        <p className="font-['DM_Sans'] text-sm text-[#15122E]/50">
          {filtered.length} module{filtered.length !== 1 ? "s" : ""} · {visibleFeatureCount} features
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-full font-poppins text-[11px] font-semibold text-[#15122E]/60 hover:text-[#6C63FF] hover:bg-[#6C63FF]/8 transition-all"
          >
            Expand all
          </button>
          <span className="text-[#15122E]/20">·</span>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-full font-poppins text-[11px] font-semibold text-[#15122E]/60 hover:text-[#6C63FF] hover:bg-[#6C63FF]/8 transition-all"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-[1100px] mx-auto space-y-4">
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-[#15122E]/[0.06] flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-[#15122E]/30" />
            </div>
            <p className="font-onest text-lg font-semibold text-[#15122E]/60 mb-1">
              No features found
            </p>
            <p className="font-['DM_Sans'] text-sm text-[#15122E]/40">
              Try a different search term or clear filters.
            </p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all"); }}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#6C63FF] text-white font-poppins text-sm font-semibold hover:bg-[#4F46E5] transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}
        {filtered.map((mod) => {
          const Icon = mod.icon;
          const isOpen = expanded.includes(mod.id) || !!q;
          const visibleFeatures = q
            ? mod.features.filter(
                (f) =>
                  f.name.toLowerCase().includes(q) ||
                  f.description.toLowerCase().includes(q)
              )
            : mod.features;
          const modAICount = mod.features.filter((f) => isAIFeature(f.name, f.description)).length;
          return (
            <div
              key={mod.id}
              className={`rounded-[28px] border bg-white overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-[#6C63FF]/30 shadow-[0_12px_40px_rgba(108,99,255,0.08)]"
                  : "border-[#15122E]/10"
              }`}
            >
              <button
                onClick={() => toggle(mod.id)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#15122E]/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-[#6C63FF] shadow-[0_8px_24px_rgba(108,99,255,0.25)]" : "bg-[#6C63FF]/10"
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors ${isOpen ? "text-white" : "text-[#6C63FF]"}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-onest text-xl font-semibold text-[#15122E] tracking-[-0.4px]">
                        {mod.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#15122E]/[0.06] text-[#15122E]/50 font-poppins text-xs font-semibold">
                        {mod.features.length} features
                      </span>
                      {modAICount > 0 && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] font-poppins text-xs font-semibold">
                          <Sparkles className="w-3 h-3" />
                          {modAICount} AI
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-['DM_Sans'] text-[15px] text-[#15122E]/65">
                      {mod.description}
                    </p>
                  </div>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-[#15122E]/50 shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#6C63FF]/15 to-transparent mb-5" />
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {visibleFeatures.map((f) => {
                          const ai = isAIFeature(f.name, f.description);
                          return (
                            <div
                              key={f.name}
                              className={`p-4 rounded-2xl border transition-all ${
                                ai
                                  ? "border-[#6C63FF]/20 bg-[#6C63FF]/[0.03] hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/[0.06]"
                                  : "border-[#15122E]/8 hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/[0.04]"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  ai ? "bg-[#6C63FF]/15" : "bg-[#6C63FF]/10"
                                }`}>
                                  {ai ? (
                                    <Sparkles className="w-3 h-3 text-[#6C63FF]" />
                                  ) : (
                                    <Check className="w-3.5 h-3.5 text-[#6C63FF]" strokeWidth={3} />
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-onest text-[15px] font-semibold text-[#15122E]">
                                      {f.name}
                                    </span>
                                    {ai && (
                                      <span className="text-[9px] font-poppins font-bold uppercase tracking-[0.16em] text-[#6C63FF]/70">
                                        AI
                                      </span>
                                    )}
                                  </div>
                                  <div className="font-['DM_Sans'] text-[13px] text-[#15122E]/50 leading-relaxed mt-0.5">
                                    {f.description}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
