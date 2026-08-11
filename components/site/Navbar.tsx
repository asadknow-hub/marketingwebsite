"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

const productItems: { label: string; href: string; desc: string }[] = [
  { label: "Modules", href: "/modules", desc: "Explore all 85+ ERP modules" },
  { label: "Features", href: "/features", desc: "Complete feature overview" },
  { label: "Industries", href: "/industries", desc: "40+ industry solutions" },
];

const companyItems: { label: string; href: string; desc: string }[] = [
  { label: "About Us", href: "/about", desc: "Our mission & vision" },
  { label: "Blog", href: "/blog", desc: "Insights & resources" },
  { label: "Contact", href: "/contact", desc: "Get in touch with our team" },
];

const docsItems: { label: string; href: string; desc: string }[] = [
  { label: "Process Flows", href: "/docs/process-flows", desc: "All 18 end-to-end business processes" },
  { label: "Technical Reference", href: "/docs/technical", desc: "API specs & developer documentation" },
  { label: "Implementation", href: "/docs/implementation", desc: "Go-live preparation & best practices" },
];

interface DropdownGroup {
  label: string;
  items: { label: string; href: string; desc: string }[];
  prefix: string;
}

const navItems: (DropdownGroup | { label: string; href: string; isLink: true })[] = [
  { label: "Product", items: productItems, prefix: "product" },
  { label: "Company", items: companyItems, prefix: "company" },
  { label: "Pricing", href: "/pricing", isLink: true },
  { label: "Docs", items: docsItems, prefix: "docs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { openGetInTouch } = useGetInTouchModal();

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
    setMobileExpanded(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isGroupActive = (items: { href: string }[]) =>
    items.some((item) => isActive(item.href));

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className={cn(
          "fixed top-3 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300",
        )}
      >
        <motion.nav
          animate={{ maxWidth: scrolled ? 1080 : 1248 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={cn(
            "mx-auto flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-colors duration-500",
            scrolled
              ? "border-[#15122E]/8 bg-white/85 shadow-[0_8px_30px_rgba(21,18,46,0.08)]"
              : "border-[#15122E]/6 bg-white/70 shadow-[0_4px_20px_rgba(21,18,46,0.05)]"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity shrink-0"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#15122E]/10 bg-white">
              <img
                src="/purplelogowobg.png"
                alt="Nexus AI First logo"
                className="h-7 w-7 object-contain"
              />
            </span>
            <span className="font-poppins text-[16px] font-bold tracking-[-0.2px] text-[#15122E]">
              Nexus AI First
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              if ("isLink" in item) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.16em] transition-colors whitespace-nowrap",
                      isActive(item.href) ? "text-[#15122E]" : "text-[#15122E]/55 hover:text-[#15122E]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
              const group = item;
              const groupActive = isGroupActive(group.items);
              const isOpen = openDropdown === group.prefix;
              return (
                <div
                  key={group.prefix}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(group.prefix)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.16em] transition-colors whitespace-nowrap",
                      groupActive
                        ? "text-[#15122E]"
                        : "text-[#15122E]/55 hover:text-[#15122E]"
                    )}
                  >
                    {group.label}
                    <ChevronDown
                      className={cn("w-3.5 h-3.5 transition-transform duration-300", isOpen && "rotate-180")}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[300px]"
                      >
                        <div className="rounded-2xl border border-[#15122E]/8 bg-white shadow-[0_24px_60px_rgba(21,18,46,0.12)] p-2">
                          <span className="block px-3 pt-2 pb-1 font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-[#15122E]/30">
                            {group.label}
                          </span>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                "flex flex-col gap-0.5 px-3 py-2.5 rounded-xl transition-colors",
                                isActive(item.href)
                                  ? "bg-[#6C63FF]/8"
                                  : "hover:bg-[#15122E]/[0.04]"
                              )}
                            >
                              <span className={cn(
                                "font-poppins text-sm font-bold",
                                isActive(item.href) ? "text-[#6C63FF]" : "text-[#15122E]"
                              )}>
                                {item.label}
                              </span>
                              <span className="font-['DM_Sans'] text-xs text-[#15122E]/50">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <motion.button
              onClick={openGetInTouch}
              onMouseEnter={() => setIsCtaHovered(true)}
              onMouseLeave={() => setIsCtaHovered(false)}
              layout
              className={cn(
                "hidden items-center gap-2.5 rounded-full cursor-pointer relative h-10 transition-colors duration-300 sm:inline-flex",
                isCtaHovered
                  ? "flex-row-reverse pl-1.5 pr-4 bg-[#4F46E5]"
                  : "flex-row pl-4 pr-1.5 bg-[#6C63FF]"
              )}
            >
              <motion.span
                layout
                className="font-poppins text-sm font-bold leading-6 tracking-[-0.3px] text-white whitespace-nowrap"
              >
                Get In Touch
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

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden inline-flex items-center justify-center rounded-full border border-[#15122E]/10 bg-white/60 p-2.5 text-[#15122E]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 30 }}
            className="fixed inset-0 z-[60] xl:hidden bg-white flex flex-col px-5 py-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#15122E]/10 bg-white">
                  <img
                    src="/purplelogowobg.png"
                    alt="Nexus AI First"
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="font-poppins text-[16px] font-bold text-[#15122E]">Nexus AI First</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-full border border-[#15122E]/10 bg-[#15122E]/[0.04] p-2.5 text-[#15122E]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-3 gap-1 overflow-y-auto">
              {navItems.map((item, gi) => {
                if ("isLink" in item) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "font-poppins text-2xl font-bold py-2 tracking-tight transition-colors",
                        isActive(item.href) ? "text-[#6C63FF]" : "text-[#15122E]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }
                const group = item;
                const isExpanded = mobileExpanded === group.prefix;
                const groupActive = isGroupActive(group.items);
                return (
                  <div key={group.prefix}>
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * gi, duration: 0.4 }}
                    >
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : group.prefix)}
                        className={cn(
                          "flex items-center justify-between w-full font-poppins text-2xl font-bold py-2 tracking-tight transition-colors",
                          groupActive ? "text-[#6C63FF]" : "text-[#15122E]"
                        )}
                      >
                        {group.label}
                        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isExpanded && "rotate-180")} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 pl-4 pt-1 pb-3">
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={cn(
                                    "font-poppins text-lg font-semibold py-1.5 transition-colors",
                                    isActive(item.href) ? "text-[#6C63FF]" : "text-[#15122E]/55 hover:text-[#15122E]"
                                  )}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openGetInTouch();
                }}
                className="mt-8 inline-flex items-center justify-center gap-2 h-14 rounded-full bg-[#6C63FF] text-white font-poppins font-bold text-lg"
              >
                Get In Touch
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
