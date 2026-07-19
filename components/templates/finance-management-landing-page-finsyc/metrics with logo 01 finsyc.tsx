"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Layers, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface PlatformCardProps {
  index: string;
  title: string;
  description: string;
  icon: React.ElementType;
  points: string[];
}

function PlatformCard({ index, title, description, icon: Icon, points }: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="rounded-[28px] bg-white border border-[#15122E]/10 shadow-[0_16px_48px_rgba(21,18,46,0.08)] p-6 sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6C63FF]/10 text-[#6C63FF] shrink-0">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-poppins text-[11px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
              {index}
            </span>
            <h3 className="font-onest text-[22px] sm:text-[26px] font-semibold leading-tight tracking-[-0.8px] text-[#15122E]">
              {title}
            </h3>
          </div>

          <p className="mt-3 font-['DM_Sans'] text-[16px] sm:text-[18px] leading-relaxed text-[#15122E]/78">
            {description}
          </p>

          <ul className="mt-5 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-[#15122E] font-['DM_Sans'] text-[15px] sm:text-[16px] leading-relaxed">
                <Check className="h-4 w-4 text-[#6C63FF] shrink-0 mt-1" />
                <span className="opacity-80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

const platformCards = [
  {
    index: "01",
    title: "Give agents the goal.",
    description: "The Nexus Engine reads the outcome, maps the work, and prepares the setup path before anything changes.",
    icon: Layers,
    points: ["Goal-first setup", "Approval-led changes", "Company logic stays visible"],
  },
  {
    index: "02",
    title: "They do the work.",
    description: "Finance agents handle repetitive work, formatting, reconciliations, and handoffs so the team stays on decisions.",
    icon: ShieldCheck,
    points: ["Finance-first execution", "Less manual chase work", "Only exceptions need review"],
  },
  {
    index: "03",
    title: "Consultant-free setup guaranteed.",
    description: "Nexus configures your company with your approval and loads the system in your branded environment.",
    icon: SlidersHorizontal,
    points: ["Branded environment", "Approval before go-live", "Loaded into the platform"],
  },
];

export default function MetricsWithLogo01Finsyc({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <>
      <section className={"w-full bg-[#F4F0FF] py-20 lg:py-28 overflow-hidden " + (className || "")}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] items-start">
            <div className="lg:sticky lg:top-24 self-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/15 bg-white/70 px-4 py-2 backdrop-blur-sm"
              >
                <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
                  The Platform · 02
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                className="mt-6 max-w-[560px] font-onest text-[38px] sm:text-[48px] lg:text-[64px] font-semibold leading-[0.96] tracking-[-2px] text-[#15122E]"
              >
                Agentic Platform.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                className="mt-5 max-w-[600px] font-['DM_Sans'] text-[18px] sm:text-[20px] leading-relaxed text-[#15122E]/80"
              >
                Give agents the goal. They do the work. Consultant-free setup guaranteed. The built-in Nexus Engine consults, configures the company structure with your approval, and loads finance agents into your branded environment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <span className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.2em] text-[#15122E]/70">
                  Goal first
                </span>
                <span className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.2em] text-[#15122E]/70">
                  Approval-led setup
                </span>
                <span className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.2em] text-[#15122E]/70">
                  Finance agents loaded in
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" as const }}
                className="mt-8 rounded-[28px] border border-[#6C63FF]/15 bg-white/70 px-5 py-4 backdrop-blur-sm shadow-[0_12px_34px_rgba(21,18,46,0.06)]"
              >
                <p className="font-['DM_Sans'] text-[15px] sm:text-[17px] leading-relaxed text-[#15122E]/82">
                  Your team is commanding the rollout. Nexus does the consultation and setup, but nothing ships without your approval.
                </p>
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

            <div className="grid gap-4 lg:grid-cols-3">
              {platformCards.map((card) => (
                <PlatformCard
                  key={card.title}
                  index={card.index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  points={card.points}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
