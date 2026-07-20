"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Layers, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

type VisualScene = "consult" | "approval" | "agents";

interface PlatformCardProps {
  index: string;
  title: string;
  description: string;
  icon: ElementType;
  points: string[];
  scene: VisualScene;
  tiltClass: string;
  accentClass: string;
}

type PlatformCardData = {
  index: string;
  title: string;
  description: string;
  icon: ElementType;
  points: string[];
  scene: VisualScene;
  tiltClass: string;
  accentClass: string;
};

function PlatformVisual({ scene }: { scene: VisualScene }) {
  if (scene === "consult") {
    return (
      <div className="relative h-[168px] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.42),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.18),transparent_28%),linear-gradient(145deg,#17142e_0%,#201a46_56%,#111827_120%)] p-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />

        <div className="relative z-10 flex h-full items-end gap-4">
          <div className="flex-1 rounded-[22px] border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-white/72">
                Consult
              </div>
              <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.12)]" />
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2 w-5/6 rounded-full bg-white/50" />
              <div className="h-2 w-3/5 rounded-full bg-white/30" />
              <div className="h-2 w-11/12 rounded-full bg-white/20" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-14 rounded-[18px] border border-white/10 bg-white/12 backdrop-blur-sm" />
              <div className="h-14 rounded-[18px] border border-white/10 bg-white/18 backdrop-blur-sm translate-y-2" />
              <div className="h-14 rounded-[18px] border border-white/10 bg-white/10 backdrop-blur-sm -translate-y-1" />
            </div>
          </div>

          <div className="relative h-28 w-28 shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#6C63FF]/30 blur-2xl" />
            <div className="absolute left-4 top-4 h-16 w-16 rounded-[24px] border border-white/14 bg-white/12 backdrop-blur-md shadow-[0_18px_30px_rgba(0,0,0,0.2)] rotate-[-12deg]" />
            <div className="absolute right-0 bottom-0 h-14 w-14 rounded-[18px] border border-white/12 bg-white/18 backdrop-blur-md rotate-[10deg]" />
            <div className="absolute inset-x-6 bottom-4 h-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    );
  }

  if (scene === "approval") {
    return (
      <div className="relative h-[168px] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.5),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(108,99,255,0.18),transparent_28%),linear-gradient(145deg,#12152e_0%,#4f46e5_70%,#15122e_120%)] p-4">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_38%)] opacity-25" />

        <div className="relative z-10 flex h-full items-center gap-4">
          <div className="flex-1 rounded-[22px] border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/12">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/55">
                  Approval
                </div>
                <div className="mt-1 text-[16px] font-semibold text-white">
                  Your sign-off
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-3 py-2">
                <span className="text-sm text-white/78">Setup draft</span>
                <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-200">
                  Ready
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-3 py-2">
                <span className="text-sm text-white/78">Policy review</span>
                <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
                  Hold
                </span>
              </div>
            </div>
          </div>

          <div className="grid h-full w-24 gap-3">
            <div className="rounded-[24px] border border-white/12 bg-white/12 backdrop-blur-md" />
            <div className="flex items-center justify-center rounded-[24px] border border-white/12 bg-white/18 backdrop-blur-md">
              <Check className="h-6 w-6 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[168px] overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(233,75,111,0.34),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(108,99,255,0.28),transparent_30%),linear-gradient(145deg,#111827_0%,#6C63FF_72%,#1b1029_120%)] p-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px] opacity-18" />

      <div className="relative z-10 grid h-full gap-4 sm:grid-cols-2">
        <div className="rounded-[22px] border border-white/12 bg-white/10 p-3 backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-2">
            {['A1', 'A2', 'A3', 'B1', 'B2', 'B3'].map((label, index) => (
              <div
                key={label}
                className={
                  "flex h-12 items-center justify-center rounded-[16px] border border-white/10 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 " +
                  (index % 2 === 0 ? "bg-white/12" : "bg-white/18")
                }
              >
                {label}
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-[20px] border border-white/10 bg-black/10 p-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-white" />
              <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/60">
                Loaded in
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-5/6 rounded-full bg-white/45" />
              <div className="h-2 w-3/4 rounded-full bg-white/25" />
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded-[22px] border border-white/12 bg-white/10 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-full bg-white/12 blur-3xl" />
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/14 bg-white/14 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-md">
              <Layers className="h-8 w-8 text-white" />
            </div>
            <div className="absolute left-1/2 top-4 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-white/45 to-transparent" />
            <div className="absolute left-1/2 bottom-4 h-20 w-px -translate-x-1/2 bg-gradient-to-t from-white/35 to-transparent" />
            <div className="absolute left-8 top-1/2 h-px w-16 -translate-y-1/2 bg-gradient-to-r from-white/35 to-transparent" />
            <div className="absolute right-8 top-1/2 h-px w-16 -translate-y-1/2 bg-gradient-to-l from-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformCard({ index, title, description, icon: Icon, points, scene, tiltClass, accentClass }: PlatformCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={"group relative transform-gpu overflow-hidden rounded-[32px] border border-white/80 bg-white/80 p-3 sm:p-4 shadow-[0_24px_60px_rgba(21,18,46,0.1)] backdrop-blur-sm " + tiltClass}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.74))]" />
      <div className={"absolute -right-24 top-6 h-44 w-44 rounded-full blur-3xl opacity-70 " + accentClass} />
      <div className={"absolute -left-20 bottom-0 h-36 w-36 rounded-full blur-3xl opacity-60 " + accentClass} />

      <div className="relative z-10">
        <PlatformVisual scene={scene} />

        <div className="mt-4 flex items-start gap-3">
          <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_rgba(21,18,46,0.14)] " + accentClass}>
            <Icon className="h-4.5 w-4.5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                {index}
              </span>
              <h3 className="font-onest text-[19px] sm:text-[22px] font-semibold leading-tight tracking-[-0.8px] text-[#15122E]">
                {title}
              </h3>
            </div>

            <p className="mt-2 max-w-[560px] font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-[#15122E]/72">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {points.map((point) => (
            <span
              key={point}
              className="rounded-full border border-[#15122E]/8 bg-white/80 px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.2em] text-[#15122E]/56"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

const platformCards: PlatformCardData[] = [
  {
    index: "01",
    title: "Consult first",
    description: "Maps the setup path before anything moves.",
    icon: Layers,
    scene: "consult",
    tiltClass: "lg:-rotate-4 lg:translate-x-[-8px]",
    accentClass: "bg-gradient-to-br from-[#111827] to-[#6C63FF]",
    points: ["Map first", "Preview"],
  },
  {
    index: "02",
    title: "Approval-led",
    description: "Nothing ships without your sign-off.",
    icon: ShieldCheck,
    scene: "approval",
    tiltClass: "lg:rotate-[2deg] lg:translate-x-[8px]",
    accentClass: "bg-gradient-to-br from-[#4F46E5] to-[#15122E]",
    points: ["Review", "Sign off"],
  },
  {
    index: "03",
    title: "Agents loaded in",
    description: "Native agents appear where your team works.",
    icon: SlidersHorizontal,
    scene: "agents",
    tiltClass: "lg:-rotate-[1deg] lg:translate-x-[4px]",
    accentClass: "bg-gradient-to-br from-[#E94B6F] to-[#6C63FF]",
    points: ["Native", "Built in"],
  },
];

export default function MetricsWithLogo01Finsyc({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <>
      <section className={"relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#F4F0FF] py-12 sm:py-14 lg:py-16 " + (className || "")}> 
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#6C63FF]/12 blur-[150px]" />
          <div className="absolute top-[16%] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#4F46E5]/10 blur-[140px]" />
          <div className="absolute bottom-[-140px] right-[10%] h-[320px] w-[320px] rounded-full bg-[#E94B6F]/10 blur-[140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/18 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="max-w-[560px] lg:sticky lg:top-24 self-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/15 bg-white/70 px-4 py-2 backdrop-blur-sm"
              >
                <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
                  The rollout · 02
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                className="mt-6 max-w-[560px] font-onest text-[38px] sm:text-[48px] lg:text-[64px] font-semibold leading-[0.94] tracking-[-2.2px] text-[#15122E]"
              >
                Consult. Approve.
                <span className="block text-[#6C63FF]">Launch.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-5 max-w-[560px] font-['DM_Sans'] text-[17px] sm:text-[18px] leading-relaxed text-[#15122E]/76"
              >
                A visual rollout of how the platform maps the work, gets your sign-off, and lands inside your system.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                className="mt-7 flex flex-wrap gap-3"
              >
                {[
                  "3D system map",
                  "Illustrative rollout",
                  "Less text, more signal",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#15122E]/64 shadow-[0_10px_25px_rgba(21,18,46,0.05)]"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>

              <motion.button
                onClick={openGetInTouch}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" as const }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#15122E] px-5 py-3 text-white shadow-[0_18px_40px_rgba(21,18,46,0.12)] transition-colors hover:bg-[#4F46E5]"
              >
                <span className="font-poppins text-[16px] sm:text-[18px] font-bold tracking-[-0.2px]">
                  Get In Touch
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15122E]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.button>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.25, 1] as const }}
                className="relative overflow-hidden rounded-[44px] border border-white/80 bg-white/78 p-4 sm:p-6 shadow-[0_28px_80px_rgba(21,18,46,0.12)] backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.1),transparent_34%)]" />
                <div className="relative grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
                  <div
                    className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-[#15122E]/8 bg-[#F7F5FF] shadow-[0_22px_56px_rgba(21,18,46,0.14)]"
                    style={{ transform: "perspective(1800px) rotateY(-14deg) rotateX(8deg)" }}
                  >
                    <img
                      src="/hero-agentic-bg.svg"
                      alt="Stylized system map of the agentic platform"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02)_34%,rgba(21,18,46,0.08)_100%)]" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/72 px-3 py-2 shadow-[0_12px_26px_rgba(21,18,46,0.08)] backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
                      <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-[#15122E]/70">
                        Live rollout map
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 rounded-[18px] bg-[#15122E]/92 px-3 py-2 text-white shadow-[0_18px_34px_rgba(21,18,46,0.16)]">
                      <p className="font-poppins text-[9px] font-bold uppercase tracking-[0.26em] text-white/55">
                        System view
                      </p>
                      <p className="mt-1 font-onest text-[18px] font-semibold tracking-[-0.5px]">
                        Built inside your stack
                      </p>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {[
                        "Consult first",
                        "Approval-led",
                        "Agents loaded in",
                      ].map((label) => (
                        <span
                          key={label}
                          className="rounded-full border border-white/18 bg-white/74 px-3 py-1.5 font-poppins text-[9px] font-bold uppercase tracking-[0.22em] text-[#15122E]/66 backdrop-blur-sm"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-[30px] border border-[#15122E]/8 bg-[#15122E] p-5 text-white shadow-[0_16px_36px_rgba(21,18,46,0.16)]">
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                        01
                      </p>
                      <h3 className="mt-2 font-onest text-[20px] font-semibold tracking-[-0.6px]">
                        Consult first
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                        Maps the setup path before anything moves.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {platformCards[0].points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.18em] text-white/72"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[30px] border border-[#15122E]/8 bg-white p-5 shadow-[0_16px_36px_rgba(21,18,46,0.08)]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4F46E5]/10 text-[#4F46E5]">
                          <ShieldCheck className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                            02
                          </p>
                          <p className="mt-1 font-onest text-[19px] font-semibold tracking-[-0.5px] text-[#15122E]">
                            Approval-led
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-[14px] leading-relaxed text-[#15122E]/70">
                        Nothing ships without your sign-off.
                      </p>
                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {platformCards[1].points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-[#15122E]/8 bg-[#F8F6FF] px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.18em] text-[#15122E]/58"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[30px] border border-[#15122E]/8 bg-[#F5F3FF] p-5 shadow-[0_16px_36px_rgba(21,18,46,0.08)]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E94B6F]/10 text-[#E94B6F]">
                          <SlidersHorizontal className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                            03
                          </p>
                          <p className="mt-1 font-onest text-[19px] font-semibold tracking-[-0.5px] text-[#15122E]">
                            Agents loaded in
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-[14px] leading-relaxed text-[#15122E]/70">
                        Native help appears where the work already happens.
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {platformCards[2].points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-[#15122E]/8 bg-white px-2.5 py-1 font-poppins text-[9px] font-bold uppercase tracking-[0.18em] text-[#15122E]/58"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
