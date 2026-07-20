"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, Network, Sparkles } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface EcosystemCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  accent: string;
  delay?: number;
}

function EcosystemCard({ title, description, icon: Icon, accent, delay = 0 }: EcosystemCardProps) {
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

interface SystemNodeProps {
  label: string;
  description: string;
  accent: string;
}

function SystemNode({ label, description, accent }: SystemNodeProps) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/10 px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.12)] backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className={"h-2.5 w-2.5 rounded-full " + accent} />
        <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/72">
          {label}
        </p>
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-white/62">
        {description}
      </p>
    </div>
  );
}

const ecosystemCards = [
  {
    title: "One layer",
    description: "The orchestration layer sits above finance, HRMS, and operations so everyone works from the same context.",
    icon: Layers,
    accent: "bg-gradient-to-br from-[#6C63FF] to-[#4F46E5]",
  },
  {
    title: "Connected workflows",
    description: "Approvals, tasks, and records stop living in isolated tools and start passing context automatically.",
    icon: Network,
    accent: "bg-gradient-to-br from-[#E94B6F] to-[#FF7FA2]",
  },
  {
    title: "Compounding value",
    description: "Every new workflow makes the platform more useful because the ecosystem keeps learning as it expands.",
    icon: Sparkles,
    accent: "bg-gradient-to-br from-[#0EA5E9] to-[#6C63FF]",
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
                    The ecosystem bonus · 05
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" as const }}
                  className="mt-6 max-w-[640px] font-onest text-[38px] sm:text-[48px] lg:text-[62px] font-semibold leading-[0.96] tracking-[-2px] text-[#15122E]"
                >
                  Add it once, and the company starts acting like one ecosystem.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" as const }}
                  className="mt-5 max-w-[620px] font-['DM_Sans'] text-[18px] sm:text-[20px] leading-relaxed text-[#15122E]/78"
                >
                  Approvals, workflows, and data stop living in separate silos. The whole company starts moving with shared context and less waste.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                  className="mt-7 flex flex-wrap gap-3"
                >
                {[
                    "Connected workflows",
                    "Shared context",
                    "Compounding value",
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
                    Once the ecosystem is in place, every new workflow feels native instead of custom.
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
                  See the ecosystem effect
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_30%)]" />
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="rounded-full border border-[#6C63FF]/15 bg-[#6C63FF]/5 px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                    The ecosystem effect
                  </span>
                  <span className="rounded-full bg-[#15122E] px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
                    One operating layer
                  </span>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
                  <div className="rounded-[30px] border border-[#15122E]/8 bg-[#15122E] p-5 text-white shadow-[0_18px_44px_rgba(21,18,46,0.18)]">
                    <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                      Orchestration AI
                    </p>
                    <h3 className="mt-2 max-w-[360px] font-onest text-[22px] sm:text-[26px] font-semibold leading-tight tracking-[-0.6px] text-white">
                      Turns separate tools into one working system.
                    </h3>

                    <div className="relative mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/6 p-4">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_42%)]" />

                      <div className="relative grid gap-3">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <SystemNode
                            label="Finance"
                            description="Shared controls and reconciliations stay in the same context."
                            accent="bg-[#6C63FF]"
                          />
                          <SystemNode
                            label="HRMS"
                            description="People workflows keep approvals, tasks, and records aligned."
                            accent="bg-[#E94B6F]"
                          />
                        </div>

                        <div className="rounded-[22px] border border-white/10 bg-white/10 px-4 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                              <Network className="h-6 w-6 text-[#6C63FF]" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.24em] text-white/72">
                                Orchestration AI
                              </p>
                              <p className="mt-1 text-[13px] leading-relaxed text-white/68">
                                One layer keeps context shared across every workflow.
                              </p>
                            </div>

                            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[0.22em] text-white/72">
                              Always on
                            </span>
                          </div>
                        </div>

                        <SystemNode
                          label="Operations"
                          description="No handoff loses context or control."
                          accent="bg-[#0EA5E9]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="rounded-[28px] border border-[#15122E]/8 bg-[#F7F5FF] p-5 shadow-[0_12px_30px_rgba(21,18,46,0.04)]">
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                        What the ecosystem unlocks
                      </p>

                      <div className="mt-4 space-y-3">
                        {ecosystemCards.map((card, index) => (
                          <EcosystemCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            accent={card.accent}
                            delay={0.06 * index}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[28px] border border-[#6C63FF]/15 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(21,18,46,0.04)]">
                      <p className="font-['DM_Sans'] text-[14px] sm:text-[15px] leading-relaxed text-[#15122E]/82">
                        Once the ecosystem is in place, every new workflow feels native instead of custom.
                      </p>
                    </div>
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
