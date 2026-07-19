"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Check,
  Cloud,
  Settings,
  Upload,
  Rocket,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface ProcessStep {
  id: number;
  label: string;
  icon: LucideIcon;
  heading: string;
  subheading: string;
  list: string[];
  imgSrc: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    label: "Orchestrate",
    icon: Cloud,
    heading: "The Orchestration AI Layer",
    subheading: "An agnostic intelligence layer understands how your business works, interprets intent, and directs every task to the right agent or person.",
    list: [
      "Understands your business logic",
      "Routes work across departments",
      "Keeps decisions and controls visible"
    ],
    imgSrc: "https://cdn.jiro.build/amox/all%20images/p01-process-img-01.png"
  },
  {
    id: 2,
    label: "Augment",
    icon: Settings,
    heading: "Embedded Domain Experts",
    subheading: "Consultants and developers sit beneath the AI layer, encoding real operational knowledge and helping your agents adapt without a permanent external consulting army.",
    list: [
      "Real finance and operations expertise",
      "Faster configuration and customization",
      "Less reliance on external consultants"
    ],
    imgSrc: "https://cdn.jiro.build/amox/all%20images/p01-process-img-01.png"
  },
  {
    id: 3,
    label: "Finance",
    icon: Upload,
    heading: "Finance & Accounting Agent",
    subheading: "Your finance agent handles the complex work behind close, reconciliations, reporting, controls, approvals, and daily operations.",
    list: [
      "Automates repeatable finance workflows",
      "Works from your policies and controls",
      "Turns 8-hour tasks into focused work"
    ],
    imgSrc: "https://cdn.jiro.build/amox/all%20images/p01-process-img-01.png"
  },
  {
    id: 4,
    label: "HRMS",
    icon: Rocket,
    heading: "HRMS Agent",
    subheading: "A dedicated HRMS agent coordinates workforce workflows across people operations, payroll, approvals, and the employee experience.",
    list: [
      "Handles workforce requests and approvals",
      "Supports payroll and people operations",
      "Creates a faster employee experience"
    ],
    imgSrc: "https://cdn.jiro.build/amox/all%20images/p01-process-img-01.png"
  }
];

const sectionStats = [
  {
    value: "4 layers",
    label: "Orchestration, experts, finance, and HRMS moving in sequence."
  },
  {
    value: "Approval-led",
    label: "Every handoff stays visible and controlled by your team."
  },
  {
    value: "Branded rollout",
    label: "Built to feel native inside your environment and workflows."
  }
];

export default function FinsycOriginal4Step({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const { openGetInTouch } = useGetInTouchModal();

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const activeStep = steps.find((s: ProcessStep) => s.id === activeTab) || steps[0];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={"relative w-full overflow-hidden bg-[#F5F3FF] py-20 lg:py-28 " + (className || "")}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 right-[-120px] h-[380px] w-[380px] rounded-full bg-[#6C63FF]/10 blur-[140px]" />
          <div className="absolute top-[28%] left-[-120px] h-[320px] w-[320px] rounded-full bg-[#4F46E5]/10 blur-[140px]" />
          <div className="absolute bottom-[-140px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#E94B6F]/10 blur-[140px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1248px] mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-12 lg:gap-16">

            {/* Header Area */}
            <div className="flex flex-col items-start max-w-[820px]">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6C63FF]/10 bg-[#6C63FF]/5 whitespace-nowrap mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#6C63FF]" strokeWidth={2.5} />
                <span className="text-[#6C63FF] text-center font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  How the Agentic System Works
                </span>
              </motion.div>

              <motion.h2
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#15122E] font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] lg:tracking-[-1.8px] w-full lg:max-w-[556px] text-left"
              >
                One system.
                <br className="block lg:hidden" />
                {" "}Four agentic{" "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  layers
                </span>
              </motion.h2>

              <motion.p
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-[#15122E]/70 font-inter text-base lg:text-[18px] leading-[28px] max-w-[556px] text-left"
              >
                The orchestration layer directs the work. Domain experts deepen it. Department agents execute it.
              </motion.p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 w-full">
                {sectionStats.map((stat, index) => (
                  <motion.div
                    key={stat.value}
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.36 + index * 0.06, duration: 0.45 }}
                    className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_14px_35px_rgba(21,18,46,0.05)] backdrop-blur-sm"
                  >
                    <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-[#6C63FF]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#15122E]/62">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tabs and Card Container */}
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">

              {/* Tab Selection Row */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative overflow-hidden rounded-[34px] border border-white/80 bg-white/85 p-5 shadow-[0_20px_60px_rgba(21,18,46,0.06)] backdrop-blur-sm sm:p-6"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#6C63FF] via-[#4F46E5] to-[#E94B6F]" />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.32em] text-[#6C63FF]">
                      System path
                    </p>
                    <h3 className="mt-2 font-onest text-[24px] sm:text-[28px] font-semibold leading-tight tracking-[-0.8px] text-[#15122E]">
                      Tap a layer to see how work moves.
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-[#15122E] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live now
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {steps.map((step: ProcessStep) => {
                    const isActive = activeTab === step.id;

                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveTab(step.id)}
                        className={cn(
                          "group relative flex w-full items-start gap-4 overflow-hidden rounded-[26px] border p-4 text-left transition-all duration-300 sm:p-5",
                          isActive
                            ? "border-[#15122E] bg-[#15122E] shadow-[0_20px_45px_rgba(21,18,46,0.14)]"
                            : "border-[#15122E]/8 bg-white hover:border-[#6C63FF]/30 hover:bg-[#F5F3FF]"
                        )}
                      >
                        <div className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300",
                          isActive ? "bg-white/10 text-white" : "bg-[#6C63FF]/10 text-[#6C63FF]"
                        )}>
                          <step.icon className="h-5 w-5" strokeWidth={2.5} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={cn(
                              "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.24em] transition-colors duration-300",
                              isActive ? "bg-white/10 text-white/70" : "bg-[#6C63FF]/10 text-[#6C63FF]"
                            )}>
                              {step.label}
                            </span>
                            <span className={cn(
                              "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.24em] transition-colors duration-300",
                              isActive ? "bg-white/10 text-white/55" : "bg-[#15122E]/5 text-[#15122E]/45"
                            )}>
                              Step 0{step.id}
                            </span>
                          </div>

                          <h4 className={cn(
                            "mt-3 text-[18px] font-semibold leading-tight tracking-[-0.5px] transition-colors duration-300",
                            isActive ? "text-white" : "text-[#15122E]"
                          )}>
                            {step.heading}
                          </h4>

                          <p className={cn(
                            "mt-2 text-[14px] leading-relaxed transition-colors duration-300",
                            isActive ? "text-white/72" : "text-[#15122E]/60"
                          )}>
                            {step.subheading}
                          </p>
                        </div>

                        <ArrowUpRight
                          className={cn(
                            "mt-0.5 h-5 w-5 shrink-0 transition-all duration-300",
                            isActive ? "rotate-45 text-white" : "text-[#15122E]/35 group-hover:text-[#6C63FF]"
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Main Content Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.46 }}
                className="relative overflow-hidden rounded-[36px] border border-[#15122E]/10 bg-[#15122E] shadow-[0_28px_80px_rgba(21,18,46,0.12)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(108,99,255,0.30),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(233,75,111,0.20),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_40%)]" />

                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-poppins text-[10px] uppercase tracking-[0.32em] text-white/45">
                        Live map
                      </p>
                      <h3 className="mt-2 font-onest text-[26px] sm:text-[30px] lg:text-[36px] font-semibold leading-tight tracking-[-1px] text-white">
                        Selected layer in motion.
                      </h3>
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
                      Step 0{activeStep.id}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                    {/* Left Column: Text Info */}
                    <div className="flex flex-col">
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                        {activeStep.label}
                      </p>

                      <motion.h4
                        key={"h4-" + activeTab}
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className="mt-3 max-w-[460px] font-onest text-[30px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight tracking-[-1.2px] text-white"
                      >
                        {activeStep.heading}
                      </motion.h4>

                      <motion.p
                        key={"p-" + activeTab}
                        initial={{ y: 14, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.08, duration: 0.35 }}
                        className="mt-4 max-w-[520px] font-['DM_Sans'] text-[16px] sm:text-[18px] leading-relaxed text-white/72"
                      >
                        {activeStep.subheading}
                      </motion.p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {activeStep.list.map((item: string) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/8 px-4 py-3"
                          >
                            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                              <Check className="h-3 w-3 text-white" strokeWidth={3} />
                            </div>
                            <p className="text-[14px] leading-relaxed text-white/80">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <motion.button
                          onClick={openGetInTouch}
                          whileHover={{ y: -1, scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-poppins text-[15px] font-bold text-[#15122E] shadow-[0_16px_32px_rgba(255,255,255,0.08)] transition-colors hover:bg-[#F5F3FF]"
                        >
                          Get In Touch
                          <ArrowUpRight className="h-4 w-4" />
                        </motion.button>

                        <div className="rounded-full border border-white/10 bg-white/8 px-4 py-3 text-[12px] font-medium text-white/70">
                          Goal first · Approval led · Team in control
                        </div>
                      </div>
                    </div>

                    {/* Right Column: UI Card */}
                    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
                      <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#6C63FF]/20 blur-3xl" />

                      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/8 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),transparent_42%)]" />

                        <div className="relative overflow-hidden rounded-[26px] bg-[#0F1021]">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/16 via-transparent to-[#E94B6F]/16" />

                          {isMounted && (
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute inset-0 h-full w-full object-cover opacity-35"
                            >
                              <source src="https://cdn.jiro.build/amox/all%20images/p01-header-01-bg.mp4" type="video/mp4" />
                            </video>
                          )}

                          <AnimatePresence mode="wait">
                            <motion.div
                              key={"img-" + activeTab}
                              initial={{ scale: 0.92, opacity: 0, y: 16 }}
                              animate={{ scale: 1, opacity: 1, y: 0 }}
                              exit={{ scale: 1.04, opacity: 0, y: -16 }}
                              transition={{ duration: 0.45, ease: "easeOut" as const }}
                              className="relative z-10 flex aspect-[0.9] items-center justify-center p-6 sm:p-8"
                            >
                              <img
                                src={activeStep.imgSrc}
                                alt={activeStep.heading}
                                className="w-full max-w-[320px] drop-shadow-2xl"
                              />
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#15122E] shadow-[0_12px_30px_rgba(21,18,46,0.15)]">
                        One branded system
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
