"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems: { label: string; href: string }[] = [
  { label: "Modules", href: "/modules" },
  { label: "Industries", href: "/industries" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const docsItems: { label: string; href: string; desc: string }[] = [
  { label: "Process Flows", href: "/docs/process-flows", desc: "All 18 end-to-end business processes" },
  { label: "Technical Reference", href: "/docs/technical", desc: "API specs & developer documentation" },
  { label: "Implementation", href: "/docs/implementation", desc: "Go-live preparation & best practices" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[#15122E]/10 shadow-[0_4px_30px_rgba(21,18,46,0.06)]"
            : "bg-transparent"
        )}
      >
        <nav className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px]">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
          >
            <img
              src="/purplelogowobg.png"
              alt="Nexus AI First logo"
              className="h-8 lg:h-9 w-auto"
            />
            <span className="font-poppins text-lg lg:text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#6C63FF] via-[#7A63FF] to-[#4F46E5] bg-clip-text text-transparent">
              Nexus AI First
            </span>
          </Link>

          <ul className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative font-poppins text-sm font-bold leading-6 tracking-[-0.2px] text-[#15122E] transition-all whitespace-nowrap",
                    isActive(item.href) ? "opacity-100" : "opacity-70 hover:opacity-100"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-[#6C63FF]"
                    />
                  )}
                </Link>
              </li>
            ))}

            {/* Documentation dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDocsOpen(true)}
              onMouseLeave={() => setDocsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 font-poppins text-sm font-bold leading-6 tracking-[-0.2px] text-[#15122E] transition-all whitespace-nowrap",
                  isActive("/docs") ? "opacity-100" : "opacity-70 hover:opacity-100"
                )}
              >
                Documentation
                <ChevronDown
                  className={cn("w-4 h-4 transition-transform duration-300", docsOpen && "rotate-180")}
                />
                {isActive("/docs") && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-[#6C63FF]"
                  />
                )}
              </button>
              <AnimatePresence>
                {docsOpen && (
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
                          <span className="font-poppins text-sm font-bold text-[#15122E]">
                            {d.label}
                          </span>
                          <span className="font-['DM_Sans'] text-xs text-[#15122E]/60">
                            {d.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden sm:flex items-center font-poppins text-sm font-bold leading-6 tracking-[-0.3px] text-[#15122E] hover:opacity-70 transition-opacity"
            >
              Sign In
            </Link>

            <Link href="/contact" className="hidden sm:block">
              <motion.button
                onMouseEnter={() => setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
                layout
                className={cn(
                  "flex items-center gap-2.5 py-1.5 rounded-full border border-white/40 group cursor-pointer relative h-10 transition-colors duration-300",
                  isCtaHovered
                    ? "flex-row-reverse pl-1.5 pr-4 bg-[#4F46E5]"
                    : "flex-row pl-4 pr-1.5 bg-[#6C63FF]"
                )}
              >
                <motion.span
                  layout
                  className="font-poppins text-sm font-bold leading-6 tracking-[-0.3px] text-white whitespace-nowrap"
                >
                  Request a Demo
                </motion.span>
                <motion.div
                  layout
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0"
                >
                  <ArrowUpRight
                    className={cn(
                      "w-4 h-4 transition-colors duration-300",
                      isCtaHovered ? "text-[#4F46E5]" : "text-[#6C63FF]"
                    )}
                  />
                </motion.div>
              </motion.button>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm border border-[#15122E]/10 text-[#15122E]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] xl:hidden bg-white/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 h-16">
              <span className="font-poppins text-lg font-extrabold tracking-tight bg-gradient-to-r from-[#6C63FF] via-[#7A63FF] to-[#4F46E5] bg-clip-text text-transparent">
                Nexus AI First
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#15122E]/5 text-[#15122E]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block font-poppins text-3xl font-bold py-2 tracking-tight transition-colors",
                      isActive(item.href) ? "text-[#6C63FF]" : "text-[#15122E]"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <span className="block font-poppins text-sm font-bold uppercase tracking-wide text-[#15122E]/40 py-2">
                  Documentation
                </span>
                {docsItems.map((d, i) => (
                  <motion.div
                    key={d.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * (navItems.length + i), duration: 0.4 }}
                  >
                    <Link
                      href={d.href}
                      className={cn(
                        "block font-poppins text-xl font-semibold py-1.5 transition-colors",
                        isActive(d.href) ? "text-[#6C63FF]" : "text-[#15122E]"
                      )}
                    >
                      {d.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 h-14 rounded-full bg-[#6C63FF] text-white font-poppins font-bold text-lg"
              >
                Request a Demo
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
