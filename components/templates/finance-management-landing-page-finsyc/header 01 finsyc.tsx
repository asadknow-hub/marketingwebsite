"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Brain, Wrench, Menu, X, ChevronDown } from "lucide-react";

export default function FinsycOriginalHeader({ className }: { className?: string }) {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDocsHovered, setIsDocsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

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
    { label: "Modules", href: "/modules" },
    { label: "Industries", href: "/industries" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];
  const ctaText = "Request a Demo";

  const docsItems: { label: string; href: string; desc: string }[] = [
    { label: "Process Flows", href: "/docs/process-flows", desc: "All 18 end-to-end business processes" },
    { label: "Technical Reference", href: "/docs/technical", desc: "API specs & developer documentation" },
    { label: "Implementation", href: "/docs/implementation", desc: "Go-live preparation & best practices" },
  ];

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
        className={"relative w-full overflow-hidden min-h-screen " + (className || "")}
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://cdn.jiro.build/amox/all%20images/p01-header-01-bg.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </div>

        <div className="relative z-10 pt-2 lg:pt-3 pb-2">
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
              <Link href="/contact" className="hidden sm:flex items-center font-poppins text-base font-bold leading-6 tracking-[-0.3px] text-[#15122E] hover:opacity-70 transition-opacity">
                Sign In
              </Link>

              <motion.button
                onClick={() => { window.location.href = "/contact"; }}
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
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 rounded-full bg-[#15122E] text-white font-poppins font-bold text-lg">
                    {ctaText}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-12 lg:mt-[80px]">

            {/* Heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" as const }}
              className="max-w-[750px] w-full text-center font-onest text-[40px] sm:text-[50px] lg:text-[66px] font-semibold leading-tight lg:leading-[72px] tracking-tight lg:tracking-[-3px] text-[#15122E]"
            >
              <span className="text-[#4F46E5]">Enterprise software without the army of consultants</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" as const }}
              className="max-w-[630px] w-full text-center mt-5 font-['DM_Sans'] text-lg lg:text-[20px] font-normal leading-relaxed lg:leading-[30px] tracking-[-0.4px] text-[#15122E]"
            >
              Nexus AI First is world's leading Agentic ERP built with embedded consultants and developers, so you get the software, the expertise, and the execution — in one platform.
            </motion.p>

            {/* AI Helper Banner */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" as const }}
              className="mt-5 px-5 py-4 rounded-2xl bg-[#6C63FF]/10 backdrop-blur-md border border-[#6C63FF]/30 flex flex-col items-center gap-2 max-w-[750px]"
            >
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 shrink-0 text-[#6C63FF]" />
                <span className="font-['DM_Sans'] text-sm sm:text-base lg:text-[18px] font-medium leading-relaxed text-[#6C63FF] text-center">
                  For Employees: Imagine a helper that understands your work
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 shrink-0 text-[#4F46E5]" />
                <span className="font-['DM_Sans'] text-sm sm:text-base lg:text-[18px] font-medium leading-relaxed text-[#4F46E5] text-center">
                  For Leaders: Imagine instant insights for driving smart decisions
                </span>
              </div>
              <span className="font-['DM_Sans'] text-base sm:text-lg lg:text-[20px] font-bold leading-relaxed text-[#15122E] text-center mt-1">
                That is Nexus AI First
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" as const }}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              layout
              className={
                "flex items-center gap-3 py-2 rounded-full mt-8 lg:mt-12 group cursor-pointer relative h-14 border border-white/20 transition-all duration-300 " +
                (isCtaHovered ? "flex-row-reverse pl-2 pr-5 bg-[#4F46E5]" : "flex-row pl-5 pr-2 bg-[#6C63FF]")
              }
            >
              <motion.span
                layout
                className="font-inter text-base lg:text-[18px] font-medium leading-[28px] text-white"
              >
                Request a Demo
              </motion.span>

              <motion.div
                layout
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0"
              >
                <motion.div
                  animate={{
                    x: isCtaHovered ? [-24, 0] : 0,
                    opacity: isCtaHovered ? [0, 1] : 1
                  }}
                  transition={{ duration: 0.3, delay: isCtaHovered ? 0.1 : 0 }}
                >
                  <ArrowUpRight className={"w-4 h-4 transition-colors duration-300 " + (isCtaHovered ? "text-[#4F46E5]" : "text-[#15122E]")} />
                </motion.div>
              </motion.div>
            </motion.button>

          </div>
        </div>
      </motion.section>
    </>
  );
}
