"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";
import { focusRing, type } from "./ui";

const sectionTones: Record<string, "dark" | "light"> = {
  top: "light",
  problem: "dark",
  solution: "light",
  modules: "dark",
  roadmap: "light",
  pricing: "dark",
  contact: "light",
};

const routeLinks = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Docs", href: "/docs/process-flows" },
];

export default function HomeNav() {
  const [activeId, setActiveId] = useState("top");
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openGetInTouch } = useGetInTouchModal();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = Object.keys(sectionTones);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const tone = sectionTones[activeId] || "light";
  const isDark = tone === "dark";

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[90] h-[3px] origin-left bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#E94B6F]"
        style={{ scaleX: progress }}
        aria-hidden
      />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-3 z-[80] px-4 sm:px-6 lg:px-[96px]"
      >
        <motion.nav
          animate={{ maxWidth: isCompact ? 1080 : 1248 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={
            "mx-auto flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-colors duration-500 " +
            (isDark
              ? "border-white/12 bg-[#12132A]/80 shadow-[0_16px_44px_rgba(0,0,0,0.34)]"
              : "border-slate-200/80 bg-white/85 shadow-[0_12px_34px_rgba(15,23,42,0.08)]")
          }
        >
          <a
            href="#top"
            className={"flex items-center gap-3 rounded-full transition-opacity hover:opacity-80 " + focusRing}
          >
            <span
              className={
                "flex h-9 w-9 items-center justify-center rounded-full border " +
                (isDark ? "border-white/12 bg-white/[0.08]" : "border-slate-200 bg-white")
              }
            >
              <Image src="/purplelogowobg.png" alt="Nexus AI First" width={26} height={26} className="h-6 w-6 object-contain" priority />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={
                  "font-poppins text-[14px] font-bold tracking-[-0.2px] " +
                  (isDark ? "text-white" : "text-slate-950")
                }
              >
                Nexus AI First
              </span>
              <AnimatePresence initial={false}>
                {!isCompact && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={
                      "font-poppins text-[9px] font-semibold uppercase tracking-[0.26em] " +
                      (isDark ? "text-white/50" : "text-slate-500")
                    }
                  >
                    Agentic enterprise software
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </a>

          <div className="hidden items-center gap-1 xl:flex">
            {routeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  "rounded-full px-3 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.16em] transition-colors " +
                  focusRing +
                  " " +
                  (isDark ? "text-white/50 hover:text-white/85" : "text-slate-500 hover:text-slate-900")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              onClick={openGetInTouch}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={
                "hidden items-center gap-2 rounded-full bg-[#6C63FF] px-4 py-2.5 font-poppins text-[12px] font-bold text-white shadow-[0_14px_32px_rgba(108,99,255,0.3)] transition-colors hover:bg-[#5B55F6] sm:inline-flex " +
                focusRing
              }
            >
              Talk to Nexus Agent
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className={
                "inline-flex items-center justify-center rounded-full border p-2.5 transition-colors xl:hidden " +
                focusRing +
                " " +
                (isDark
                  ? "border-white/12 bg-white/[0.08] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50")
              }
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="home-mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 30 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#0F1024] px-5 py-6 xl:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.08]">
                  <Image src="/purplelogowobg.png" alt="Nexus AI First" width={26} height={26} className="h-6 w-6 object-contain" />
                </span>
                <span className="font-poppins text-[14px] font-bold text-white">Nexus AI First</span>
              </span>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className={"rounded-full border border-white/12 bg-white/[0.08] p-2.5 text-white " + focusRing}
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {routeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    "rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 " + type.micro + " text-white/70 " + focusRing
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openGetInTouch();
                }}
                className={
                  "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6C63FF] px-5 py-4 font-poppins text-[15px] font-bold text-white " +
                  focusRing
                }
              >
                Talk to Nexus Agent
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
