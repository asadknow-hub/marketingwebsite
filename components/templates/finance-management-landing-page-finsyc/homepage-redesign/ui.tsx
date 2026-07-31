"use client";

import { type ElementType, type ReactNode } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

export const chapters = [
  { id: "problem", index: "01", label: "Problem" },
  { id: "solution", index: "02", label: "Solution" },
  { id: "modules", index: "03", label: "Modules" },
  { id: "roadmap", index: "04", label: "Roadmap" },
  { id: "pricing", index: "05", label: "Pricing" },
] as const;

export const type = {
  h1: "font-onest font-semibold leading-[0.95] tracking-[-2.2px] text-[42px] sm:text-[56px] lg:text-[62px]",
  h2: "font-onest font-semibold leading-[0.98] tracking-[-1.6px] text-[34px] sm:text-[44px] lg:text-[52px]",
  h3: "font-onest font-semibold leading-[1.1] tracking-[-0.7px] text-[22px] sm:text-[25px]",
  lead: "font-['DM_Sans'] leading-[1.72] text-[16px] sm:text-[17px]",
  body: "font-['DM_Sans'] leading-[1.65] text-[14px] sm:text-[15px]",
  eyebrow: "font-poppins font-bold uppercase tracking-[0.24em] text-[11px] sm:text-[12px]",
  micro: "font-poppins font-bold uppercase tracking-[0.2em] text-[10px]",
} as const;

export const section = {
  shell: "relative flex w-full items-center overflow-hidden py-16 sm:py-20 lg:min-h-screen lg:py-20",
  container: "relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]",
  inner: "mx-auto w-full max-w-[1240px]",
} as const;

export const surface = {
  darkCard:
    "rounded-[28px] border border-white/10 bg-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl",
  darkInset: "rounded-[18px] border border-white/10 bg-white/[0.04]",
  lightCard:
    "rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]",
  lightInset: "rounded-[18px] border border-slate-200 bg-slate-50",
} as const;

export const text = {
  darkTitle: "text-white",
  darkBody: "text-white/70",
  darkMuted: "text-white/60",
  lightTitle: "text-slate-950",
  lightBody: "text-slate-600",
  lightMuted: "text-slate-500",
} as const;

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C63FF] focus-visible:ring-offset-2";

export const easeOut = [0.21, 0.47, 0.32, 0.98] as const;

export function useReveal(delay = 0) {
  const reduce = useReducedMotion();

  if (reduce) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.3 } as Transition,
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay, ease: easeOut } as Transition,
  };
}

export function useLoop() {
  const reduce = useReducedMotion();
  return !reduce;
}

export function Eyebrow({
  children,
  icon: Icon,
  tone = "dark",
  accent,
}: {
  children: ReactNode;
  icon?: ElementType;
  tone?: "dark" | "light";
  accent?: string;
}) {
  const isDark = tone === "dark";

  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-xl " +
        (isDark
          ? "border-white/12 bg-white/[0.07] shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
          : "border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]")
      }
    >
      {Icon ? <Icon className={"h-4 w-4 " + (accent || (isDark ? "text-[#9C9BFF]" : "text-[#6C63FF]"))} /> : null}
      <span className={type.eyebrow + " " + (isDark ? "text-white/80" : "text-slate-600")}>{children}</span>
    </span>
  );
}

export function ChapterMark({
  id,
  tone = "dark",
}: {
  id: (typeof chapters)[number]["id"];
  tone?: "dark" | "light";
}) {
  const chapter = chapters.find((item) => item.id === id);
  if (!chapter) return null;

  const isDark = tone === "dark";

  return (
    <div className="flex items-center gap-3">
      <span
        className={
          "font-onest text-[13px] font-semibold tabular-nums " + (isDark ? "text-white/45" : "text-slate-400")
        }
      >
        {chapter.index}
      </span>
      <span className={"h-px w-8 " + (isDark ? "bg-white/15" : "bg-slate-200")} />
      <span className={type.micro + " " + (isDark ? "text-white/45" : "text-slate-400")}>{chapter.label}</span>
    </div>
  );
}

export function TopFade({ from, height = 160 }: { from: string; height?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0"
      style={{ height, background: `linear-gradient(180deg, ${from} 0%, ${from}00 100%)` }}
    />
  );
}

export function GridGlow({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";

  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className={
          "absolute inset-0 " +
          (isDark
            ? "bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.15),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_24%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.07),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_22%)]")
        }
      />
      <div
        className={
          "absolute inset-0 bg-[size:32px_32px] " +
          (isDark
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] opacity-25"
            : "bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] opacity-30")
        }
      />
      <div
        className={
          "absolute -left-24 top-12 h-72 w-72 rounded-full blur-[150px] " +
          (isDark ? "bg-[#6C63FF]/16" : "bg-[#6C63FF]/10")
        }
      />
      <div
        className={
          "absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full blur-[160px] " +
          (isDark ? "bg-[#E94B6F]/12" : "bg-[#E94B6F]/8")
        }
      />
    </div>
  );
}

export const MotionDiv = motion.div;
