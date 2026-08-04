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

export const palette = {
  brand: "#685BFD",
  brandAlt: "#7C3AED",
  indigo: "#6366F1",
  pink: "#EC4899",
  pinkLight: "#F472B6",
  cyan: "#0891B2",
  violet: "#A78BFA",
  darkBg: "#0B0F1A",
  darkBgAlt: "#0F1424",
  lightBg: "#FAF5FF",
  muted: "#94A3B8",
} as const;

export const gradientText = {
  brand: "bg-gradient-to-r from-[#685BFD] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent",
  brandSoft: "bg-gradient-to-r from-[#685BFD] to-[#A78BFA] bg-clip-text text-transparent",
  pink: "bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent",
} as const;

export const type = {
  h1: "font-inter font-bold leading-[0.92] tracking-[-2.4px] text-[44px] sm:text-[60px] lg:text-[72px] lg:tracking-[-3px]",
  h2: "font-inter font-bold leading-[0.95] tracking-[-1.8px] text-[36px] sm:text-[48px] lg:text-[56px]",
  h3: "font-inter font-semibold leading-[1.1] tracking-[-0.7px] text-[22px] sm:text-[26px]",
  lead: "font-inter leading-[1.72] text-[16px] sm:text-[18px]",
  body: "font-inter leading-[1.65] text-[14px] sm:text-[15px]",
  eyebrow: "font-poppins font-bold uppercase tracking-[0.24em] text-[11px] sm:text-[12px]",
  micro: "font-poppins font-bold uppercase tracking-[0.2em] text-[10px]",
} as const;

export const section = {
  shell: "relative flex w-full items-center overflow-hidden py-16 sm:py-20 lg:min-h-screen lg:py-20",
  container: "relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]",
  inner: "mx-auto w-full max-w-[1240px]",
} as const;

export const glass = {
  dark: "rounded-[28px] border border-white/[0.08] bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl",
  darkHover: "hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300",
  darkInset: "rounded-[18px] border border-white/[0.06] bg-white/[0.03]",
  darkGlow: "rounded-[28px] border border-white/[0.1] bg-gradient-to-b from-white/[0.08] to-white/[0.02] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl",
  light: "rounded-[28px] border border-slate-200/80 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl",
  lightHover: "hover:bg-white hover:border-slate-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-all duration-300",
  lightInset: "rounded-[18px] border border-slate-200 bg-slate-50",
} as const;

export const surface = {
  darkCard: glass.dark,
  darkInset: glass.darkInset,
  lightCard: glass.light,
  lightInset: glass.lightInset,
} as const;

export const glow = {
  brand: "shadow-[0_0_60px_rgba(104,91,253,0.3)]",
  brandLg: "shadow-[0_0_120px_rgba(104,91,253,0.25)]",
  pink: "shadow-[0_0_60px_rgba(236,72,153,0.25)]",
  pinkLg: "shadow-[0_0_120px_rgba(236,72,153,0.2)]",
  brandGlow: "shadow-[0_18px_50px_rgba(104,91,253,0.35)]",
} as const;

export const text = {
  darkTitle: "text-white",
  darkBody: "text-white/70",
  darkMuted: "text-white/50",
  lightTitle: "text-slate-950",
  lightBody: "text-slate-600",
  lightMuted: "text-slate-500",
} as const;

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#685BFD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F1A]";

export const easeOut = [0.21, 0.47, 0.32, 0.98] as const;
export const easeExpo = [0.16, 1, 0.3, 1] as const;

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
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, delay, ease: easeOut } as Transition,
  };
}

export function useStagger(count: number, baseDelay = 0.08, staggerDelay = 0.06) {
  const reduce = useReducedMotion();

  if (reduce) {
    return Array.from({ length: count }, () => ({
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.1 },
      transition: { duration: 0.3 } as Transition,
    }));
  }

  return Array.from({ length: count }, (_, i) => ({
    initial: { opacity: 0, y: 28, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.7, delay: baseDelay + i * staggerDelay, ease: easeOut } as Transition,
  }));
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
          ? "border-white/[0.1] bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          : "border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.05)]")
      }
    >
      {Icon ? <Icon className={"h-4 w-4 " + (accent || (isDark ? "text-[#A78BFA]" : "text-[#685BFD]"))} /> : null}
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
          "font-inter text-[13px] font-semibold tabular-nums " + (isDark ? "text-white/40" : "text-slate-400")
        }
      >
        {chapter.index}
      </span>
      <span className={"h-px w-8 " + (isDark ? "bg-white/15" : "bg-slate-200")} />
      <span className={type.micro + " " + (isDark ? "text-white/40" : "text-slate-400")}>{chapter.label}</span>
    </div>
  );
}

export function AmbientOrbs({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={
          "absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full blur-[120px] " +
          (isDark ? "bg-[#685BFD]/20" : "bg-[#685BFD]/12")
        }
        style={
          reduce ? undefined : { animation: "float-orb-1 18s ease-in-out infinite" }
        }
      />
      <div
        className={
          "absolute right-[-10%] top-1/4 h-[32rem] w-[32rem] rounded-full blur-[140px] " +
          (isDark ? "bg-[#EC4899]/15" : "bg-[#EC4899]/8")
        }
        style={
          reduce ? undefined : { animation: "float-orb-2 22s ease-in-out infinite" }
        }
      />
      <div
        className={
          "absolute bottom-[-15%] left-1/3 h-[26rem] w-[26rem] rounded-full blur-[130px] " +
          (isDark ? "bg-[#7C3AED]/12" : "bg-[#7C3AED]/6")
        }
        style={
          reduce ? undefined : { animation: "float-orb-3 20s ease-in-out infinite" }
        }
      />
    </div>
  );
}

export function MeshBg({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";

  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className={
          "absolute inset-0 " +
          (isDark
            ? "bg-[radial-gradient(ellipse_at_20%_0%,rgba(104,91,253,0.18),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.12),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.10),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_20%_0%,rgba(104,91,253,0.08),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(236,72,153,0.05),transparent_50%),radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.05),transparent_50%)]")
        }
      />
      <div
        className={
          "absolute inset-0 bg-[size:40px_40px] " +
          (isDark
            ? "bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] opacity-20"
            : "bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] opacity-25")
        }
      />
    </div>
  );
}

export function GridGlow({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isDark = tone === "dark";

  return (
    <div className="pointer-events-none absolute inset-0">
      <AmbientOrbs tone={tone} />
      <div
        className={
          "absolute inset-0 " +
          (isDark
            ? "bg-[radial-gradient(circle_at_top_left,rgba(104,91,253,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.15),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(8,145,178,0.10),transparent_24%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(104,91,253,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.07),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(8,145,178,0.06),transparent_22%)]")
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
    </div>
  );
}

export function Seam({
  from,
  to,
  className = "",
}: {
  from: string;
  to: string;
  className?: string;
}) {
  return (
    <div
      className={"pointer-events-none absolute inset-x-0 h-32 " + className}
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}

export const MotionDiv = motion.div;
