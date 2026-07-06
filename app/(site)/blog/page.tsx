"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Search, FileText, ArrowRight, Newspaper } from "lucide-react";
import PageHero from "@/components/site/PageHero";

interface Post {
  id: number;
  title: string;
  category: string;
  authorName: string;
  publishedAt: string;
  excerpt: string;
  slug: string;
}

const POSTS: Post[] = [
  { id: 12, title: "2025 ERP Trends: What Every Enterprise Should Know", category: "Industry", authorName: "Sarah Chen", publishedAt: "2025-12-13", excerpt: "As we approach 2026, discover the key ERP trends that will shape enterprise operations including AI-first architectures, real-time analytics, and sustainable business practices.", slug: "12" },
  { id: 11, title: "Building Resilient Supply Chains with Nexus AI First", category: "Analytics", authorName: "Lisa Wang", publishedAt: "2025-12-10", excerpt: "Learn how to build supply chain resilience using predictive modeling, multi-source vendor management, and automated risk assessment features.", slug: "11" },
  { id: 10, title: "Zero-Trust Security Architecture in Modern ERP", category: "Technical", authorName: "David Lee", publishedAt: "2025-12-07", excerpt: "Explore how Nexus AI First implements zero-trust security principles including continuous authentication, micro-segmentation, and encrypted data.", slug: "10" },
  { id: 9, title: "Automating Compliance: SOX, GDPR, and Beyond", category: "Finance", authorName: "Emily Rodriguez", publishedAt: "2025-12-03", excerpt: "A comprehensive guide to automating regulatory compliance workflows, audit trails, and reporting for major regulatory frameworks.", slug: "9" },
  { id: 8, title: "Global Workforce Management: Multi-Region HR Operations", category: "HR", authorName: "James Wilson", publishedAt: "2025-12-02", excerpt: "Master the complexities of managing a global workforce including multi-currency payroll, regional compliance, and localized benefits.", slug: "8" },
  { id: 7, title: "AI-Powered Process Mining: Uncovering Hidden Inefficiencies", category: "AI", authorName: "Mike Johnson", publishedAt: "2025-11-29", excerpt: "Discover how Nexus AI First's process mining capabilities use machine learning to identify bottlenecks and recommend optimization strategies.", slug: "7" },
  { id: 1, title: "10 Ways AI is Transforming Enterprise ERP", category: "AI", authorName: "Sarah Chen", publishedAt: "2025-11-28", excerpt: "Discover how artificial intelligence is revolutionizing enterprise resource planning through intelligent automation and predictive analytics.", slug: "1" },
  { id: 2, title: "Implementing ERP in Retail: Best Practices", category: "Industry", authorName: "Mike Johnson", publishedAt: "2025-11-25", excerpt: "Learn proven strategies for successful ERP implementation in retail, covering inventory optimization and omnichannel integration.", slug: "2" },
  { id: 3, title: "Financial Close Automation: A Complete Guide", category: "Finance", authorName: "Emily Rodriguez", publishedAt: "2025-11-22", excerpt: "Streamline your month-end close process with automated journal entries, real-time reconciliation, and configurable approval workflows.", slug: "3" },
  { id: 4, title: "Multi-Tenant Architecture in SaaS ERP", category: "Technical", authorName: "David Lee", publishedAt: "2025-11-20", excerpt: "Deep dive into how Nexus AI First ensures complete data isolation and enterprise-grade security in a multi-tenant environment.", slug: "4" },
  { id: 5, title: "Supply Chain Optimization with Predictive Analytics", category: "Analytics", authorName: "Lisa Wang", publishedAt: "2025-11-18", excerpt: "Use machine learning to forecast demand patterns, optimize inventory levels, and reduce supply chain costs through intelligent vendor management.", slug: "5" },
  { id: 6, title: "HR Workflows: From Recruitment to Retirement", category: "HR", authorName: "James Wilson", publishedAt: "2025-11-15", excerpt: "Complete HR lifecycle management featuring automated onboarding, performance tracking, and compliance monitoring in one unified platform.", slug: "6" },
];

const CATEGORIES = ["All", "AI", "Industry", "Finance", "Technical", "Analytics", "HR"];

const CAT_COLOR: Record<string, string> = {
  AI: "bg-[#6C63FF]/12 text-[#6C63FF]",
  Finance: "bg-[#4F46E5]/12 text-[#00A88F]",
  HR: "bg-[#3B82F6]/12 text-[#3B82F6]",
  Technical: "bg-[#F59E0B]/12 text-[#D97706]",
  Analytics: "bg-[#06B6D4]/12 text-[#0891B2]",
  Industry: "bg-[#EC4899]/12 text-[#DB2777]",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      POSTS.filter((p) => {
        const catMatch = category === "All" || p.category === category;
        const searchMatch =
          !search ||
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(search.toLowerCase());
        return catMatch && searchMatch;
      }),
    [category, search]
  );

  return (
    <>
      <PageHero
        badge="Insights & Resources"
        badgeIcon={Newspaper}
        title={
          <>
            The Nexus <span className="text-[#6C63FF]">Blog</span>
          </>
        }
        subtitle="Expert insights on AI-powered ERP, enterprise operations, and industry best practices."
      >
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#15122E]/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full h-12 pl-11 pr-4 rounded-full border border-[#15122E]/15 bg-white font-['DM_Sans'] text-[#15122E] placeholder:text-[#15122E]/40 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 transition-all"
          />
        </div>
      </PageHero>

      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={
                  "relative px-5 py-2 rounded-full font-poppins text-sm font-semibold transition-colors " +
                  (category === cat
                    ? "text-white"
                    : "text-[#15122E]/70 hover:text-[#15122E] bg-[#15122E]/5")
                }
              >
                {category === cat && (
                  <motion.span
                    layoutId="blog-filter-pill"
                    className="absolute inset-0 rounded-full bg-[#6C63FF]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#15122E]/50">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="font-['DM_Sans']">
                No posts found{search ? ` for "${search}"` : ""}.
              </p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((post, i) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                    className="group flex flex-col rounded-3xl bg-white border border-[#15122E]/10 overflow-hidden hover:border-[#6C63FF]/40 hover:shadow-[0_20px_60px_rgba(108,99,255,0.12)] transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-44 bg-gradient-to-br from-[#6C63FF]/15 via-[#F5F3FF] to-[#4F46E5]/15 flex items-center justify-center">
                      <FileText className="w-10 h-10 text-[#6C63FF]/40" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                        <span
                          className={
                            "px-3 py-1 rounded-full font-poppins text-xs font-semibold " +
                            (CAT_COLOR[post.category] || "bg-[#15122E]/5 text-[#15122E]/60")
                          }
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-[#15122E]/50 font-['DM_Sans'] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-2 leading-snug tracking-[-0.3px]">
                        {post.title}
                      </h3>
                      <p className="font-['DM_Sans'] text-[15px] text-[#15122E]/70 leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#15122E]/8">
                        <span className="text-xs text-[#15122E]/60 font-['DM_Sans'] flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.authorName}
                        </span>
                        <span className="inline-flex items-center gap-1 font-poppins text-sm font-semibold text-[#6C63FF]">
                          Read
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
