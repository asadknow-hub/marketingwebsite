"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, RefreshCw, Settings, Sparkles } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface ProblemCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  delay?: number;
}

function ProblemCard({ title, description, icon: Icon, accent, delay = 0 }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="rounded-[24px] border border-white/70 bg-white/78 p-5 shadow-[0_16px_40px_rgba(21,18,46,0.08)] backdrop-blur-sm"
    >
      <div className="flex items-start gap-4">
        <div className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl " + accent}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-onest text-[20px] sm:text-[22px] font-semibold leading-tight tracking-[-0.7px] text-[#15122E]">
            {title}
          </h3>
          <p className="mt-2 font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-[#15122E]/72">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const problemCards = [
  {
    title: "Implementation",
    description: "6–18 months of configuration before go-live — billed by the hour, not by the outcome.",
    icon: DollarSign,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
  },
  {
    title: "Integration",
    description: "Making it talk to everything else is its own project — with its own integrators and its own bill.",
    icon: Settings,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
  },
  {
    title: "Every change after",
    description: "New field, new workflow, new report — each one a fresh SOW. The meter never stops running.",
    icon: RefreshCw,
    accent: "bg-gradient-to-br from-[#F59E0B] to-[#F97316]",
  },
];

export default function FutureIsBecomingAgenticB2B01Finsyc({ className }: { className?: string }) {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <>
      <section className={"relative w-full overflow-hidden bg-[#FCFBFF] py-20 lg:py-28 " + (className || "")}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-[-120px] h-[380px] w-[380px] rounded-full bg-[#6C63FF]/10 blur-[140px]" />
          <div className="absolute bottom-[-140px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#4F46E5]/10 blur-[140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[96px]">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#6C63FF]/10 bg-[#6C63FF]/5 px-4 py-2"
                >
                  <Sparkles className="h-4 w-4 text-[#6C63FF]" />
                  <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
                    The Problem · 04
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                  className="mt-6 max-w-[640px] font-onest text-[38px] sm:text-[48px] lg:text-[62px] font-semibold leading-[0.96] tracking-[-2px] text-[#15122E]"
                >
                  Future is becoming Agentic B2B.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                  className="mt-5 max-w-[620px] font-['DM_Sans'] text-[18px] sm:text-[20px] leading-relaxed text-[#15122E]/78"
                >
                  Come be a part of this transformational journey. Submit details and get early Pilot access — we’ll give you a free sandbox to try.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                  className="mt-7 flex flex-wrap gap-3"
                >
                  {[
                    "Free sandbox",
                    "Early pilot access",
                    "Design partner slots",
                  ].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em] text-[#15122E]/64 shadow-[0_10px_25px_rgba(21,18,46,0.05)]"
                    >
                      {label}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" as const }}
                  className="mt-8 rounded-[28px] border border-[#6C63FF]/15 bg-white/75 p-5 shadow-[0_16px_40px_rgba(21,18,46,0.07)] backdrop-blur-sm"
                >
                  <p className="font-['DM_Sans'] text-[15px] sm:text-[17px] leading-relaxed text-[#15122E]/82">
                    We’ll show you the hard part before you sign anything — the licence is rarely the expensive part.
                  </p>
                </motion.div>
              </div>

              <motion.button
                onClick={openGetInTouch}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.34, ease: "easeOut" as const }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#15122E] px-5 py-3 text-white shadow-[0_18px_40px_rgba(21,18,46,0.12)] transition-colors hover:bg-[#4F46E5]"
              >
                <span className="font-poppins text-[16px] sm:text-[18px] font-bold tracking-[-0.2px]">
                  Submit details for early Pilot access
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#15122E]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
              className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white shadow-[0_24px_70px_rgba(21,18,46,0.08)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(233,75,111,0.10),transparent_30%)]" />
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="rounded-full border border-[#6C63FF]/15 bg-[#6C63FF]/5 px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                    The licence is the cheap part.
                  </span>
                  <span className="rounded-full bg-[#15122E] px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                    2–4x
                  </span>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                  <div className="flex flex-col gap-5">
                    <div className="rounded-[28px] border border-[#15122E]/8 bg-[#F7F5FF] p-5 shadow-[0_12px_30px_rgba(21,18,46,0.04)]">
                      <div className="flex items-end gap-4">
                        <span className="font-onest text-[58px] sm:text-[72px] leading-none font-semibold tracking-[-3px] text-[#E94B6F]">
                          2–4x
                        </span>
                        <p className="max-w-[190px] pb-2 font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-[#15122E]/72">
                          the licence cost goes to consultants and implementors — the real total cost of ownership
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-[#15122E]/8 bg-white p-4 shadow-[0_12px_30px_rgba(21,18,46,0.04)]">
                      <div className="flex items-center justify-between gap-4 text-[11px] font-poppins font-bold uppercase tracking-[0.28em] text-[#15122E]/42">
                        <span>What you budget</span>
                        <span>What you actually pay on top</span>
                      </div>
                      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#F5F3FF] p-3">
                        <div className="w-[120px] rounded-xl bg-[#6C63FF] px-3 py-3 text-center font-poppins text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_10px_24px_rgba(108,99,255,0.22)]">
                          Licence · $1
                        </div>
                        <div className="flex-1 overflow-hidden rounded-xl bg-[#E94B6F]/10">
                          <div className="grid grid-cols-3 gap-px">
                            <div className="bg-[#E94B6F] px-2 py-4 text-center font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                              Implementation
                            </div>
                            <div className="bg-[#EF6586] px-2 py-4 text-center font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                              Integration
                            </div>
                            <div className="bg-[#FF8DA5] px-2 py-4 text-center font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                              Change SOWs
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-[12px] font-['DM_Sans'] text-[#15122E]/60">
                        <span>$2–4 for every licence dollar</span>
                        <span>•</span>
                        <span>Panorama Consulting · Gartner services-to-licence benchmarks</span>
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-[#6C63FF]/15 bg-[#F5F3FF] px-5 py-4 text-[#15122E] shadow-[0_12px_30px_rgba(21,18,46,0.04)]">
                      <p className="font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed">
                        <span className="font-semibold text-[#6C63FF]">Your address →</span> consultants and configurators built into the product. Agents implement, integrate and make every change after — the services line goes to ~zero.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {problemCards.map((card, index) => (
                      <ProblemCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        accent={card.accent}
                        delay={0.08 * index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
