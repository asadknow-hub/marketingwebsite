"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

export default function FinsycOriginalHeader({ className }: { className?: string }) {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDocsHovered, setIsDocsHovered] = useState(false);
  const { openGetInTouch } = useGetInTouchModal();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems: { label: string; href: string }[] = [
    { label: "Wave One", href: "/modules" },
    { label: "Industries", href: "/industries" },
    { label: "Agentic System", href: "#architecture" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];
  const ctaText = "Get In Touch";

  const docsItems: { label: string; href: string; desc: string }[] = [
    { label: "Process Flows", href: "/docs/process-flows", desc: "All 18 end-to-end business processes" },
    { label: "Technical Reference", href: "/docs/technical", desc: "API specs & developer documentation" },
    { label: "Implementation", href: "/docs/implementation", desc: "Go-live preparation & best practices" },
  ];

  const heroBackgroundStyle: React.CSSProperties = {
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.46) 52%, rgba(247,245,239,0.95) 100%), url('/hero-agentic-bg.svg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" crossOrigin="anonymous" />
      <link rel="icon" href="/Nexuslogoblackbg.png" type="image/png" />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        className={"relative w-full overflow-hidden min-h-[100svh] bg-[#F7F5EF] " + (className || "")}
      >
        <div aria-hidden="true" className="absolute inset-0" style={heroBackgroundStyle} />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-[#F7F5EF]/80" />

        <div className="relative z-10 min-h-[100svh] flex flex-col">
          <div className="pt-2 lg:pt-3">
            {/* Navigation - full width, edge to edge */}
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" as const }}
              className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8"
            >
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
                <img
                  src="/purplelogowobg.png"
                  alt="Nexus AI First logo"
                  className="h-8 lg:h-10 w-auto"
                />
                <span className="font-poppins text-lg lg:text-xl font-bold text-[#15122E] tracking-tight">Nexus AI First</span>
              </a>

              {/* Desktop Menu */}
              <ul className="hidden xl:flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-poppins text-sm leading-6 tracking-[-0.2px] text-[#15122E] transition-all whitespace-nowrap font-bold opacity-70 hover:opacity-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {/* Documentation dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => setIsDocsHovered(true)}
                  onMouseLeave={() => setIsDocsHovered(false)}
                >
                  <button className="flex items-center gap-1 font-poppins text-sm leading-6 tracking-[-0.2px] text-[#15122E] transition-all whitespace-nowrap font-bold opacity-70 hover:opacity-100">
                    Documentation
                    <ChevronDown className={"w-4 h-4 transition-transform duration-300 " + (isDocsHovered ? "rotate-180" : "")} />
                  </button>
                  <AnimatePresence>
                    {isDocsHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full right-0 pt-3 w-[320px]"
                      >
                        <div className="rounded-2xl bg-white border border-[#15122E]/10 shadow-[0_20px_60px_rgba(21,18,46,0.14)] p-2">
                          <span className="block px-3 pt-2 pb-1 font-poppins text-[11px] font-bold uppercase tracking-wide text-[#15122E]/40">
                            Documentation
                          </span>
                          {docsItems.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl hover:bg-[#6C63FF]/5 transition-colors"
                            >
                              <span className="font-poppins text-sm font-bold text-[#15122E]">{d.label}</span>
                              <span className="font-['DM_Sans'] text-xs text-[#15122E]/60">{d.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              </ul>

              <div className="flex items-center gap-4 shrink-0">
                <motion.button
                  onClick={openGetInTouch}
                  onMouseEnter={() => setIsNavHovered(true)}
                  onMouseLeave={() => setIsNavHovered(false)}
                  layout
                  className={
                    "hidden sm:flex items-center gap-3 py-1.5 rounded-full backdrop-blur-sm border border-white/40 group cursor-pointer relative h-11 transition-all duration-300 " +
                    (isNavHovered ? "flex-row-reverse pl-1.5 pr-[18px] bg-[#4F46E5]" : "flex-row pl-[18px] pr-1.5 bg-[#6C63FF]")
                  }
                >
                  <motion.span
                    layout
                    className="font-poppins text-base font-bold leading-6 tracking-[-0.3px] text-white"
                  >
                    {ctaText}
                  </motion.span>

                  <motion.div
                    layout
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0"
                  >
                    <motion.div
                      animate={{
                        x: isNavHovered ? [-20, 0] : 0,
                        opacity: isNavHovered ? [0, 1] : 1
                      }}
                      transition={{ duration: 0.3, delay: isNavHovered ? 0.1 : 0 }}
                    >
                      <ArrowUpRight className={"w-3 h-3 transition-colors duration-300 " + (isNavHovered ? "text-[#4F46E5]" : "text-[#15122E]")} />
                    </motion.div>
                  </motion.div>
                </motion.button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="xl:hidden p-2 text-[#15122E] bg-white/20 backdrop-blur-md rounded-full"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </motion.nav>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring" as const, damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[100] xl:hidden bg-white px-6 py-8 flex flex-col gap-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="/purplelogowobg.png"
                      alt="Nexus AI First logo"
                      className="h-8 w-auto"
                    />
                    <span className="font-poppins text-lg font-bold text-[#15122E]">Nexus AI First</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#15122E] bg-[#15122E]/5 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <ul className="flex flex-col gap-6">
                  {navItems.map((item, idx: number) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, ease: "easeOut" as const }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-poppins text-2xl font-bold text-[#15122E]"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  <li className="pt-2">
                    <span className="block font-poppins text-sm font-bold uppercase tracking-wide text-[#15122E]/40 mb-2">
                      Documentation
                    </span>
                    {docsItems.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-poppins text-xl font-semibold text-[#15122E] py-1.5"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </li>
                </ul>

                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openGetInTouch();
                    }}
                    className="block w-full rounded-full bg-[#15122E] py-4 text-center font-poppins text-lg font-bold text-white"
                  >
                    {ctaText}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <div className="flex-1 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
                <div className="max-w-[780px]">
                  <p className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.45em] text-[#6C63FF] mb-4">
                    Self-deploying agentic system
                  </p>

                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.75, ease: "easeOut" as const }}
                    className="max-w-[700px] w-full text-left font-onest text-[42px] sm:text-[56px] lg:text-[74px] font-semibold leading-[0.96] tracking-[-2.2px] lg:tracking-[-3.4px] text-[#15122E]"
                  >
                    A system that self-deploys.
                  </motion.h1>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.75, ease: "easeOut" as const }}
                    className="mt-5 max-w-[640px] text-left font-['DM_Sans'] text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-relaxed lg:leading-[1.55] tracking-[-0.3px] text-[#15122E]/82"
                  >
                    Nexus AI First configures your company with your approval and gives every employee an agent trained to handle tedious tasks.
                  </motion.p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#15122E]/10 bg-white/65 px-4 py-2 backdrop-blur-sm shadow-[0_12px_30px_rgba(21,18,46,0.06)]">
                    <span className="font-poppins text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#15122E]/60">
                      Finance & Accounting wave one
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#6C63FF]" />
                    <span className="font-poppins text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#15122E]/60">
                      HCM next
                    </span>
                  </div>
                </div>

                <motion.button
                  onClick={openGetInTouch}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" as const }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full border border-[#15122E]/10 bg-white/80 px-5 py-3 text-left text-[#15122E] shadow-[0_18px_45px_rgba(21,18,46,0.08)] backdrop-blur-md transition-colors hover:bg-white w-fit"
                >
                  <span className="font-poppins text-[16px] sm:text-[18px] font-bold tracking-[-0.2px]">
                    {ctaText}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#15122E] text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
