"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

interface GallerySlideProps {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  callout: string;
  delay?: number;
}

function GallerySlide({ index, eyebrow, title, description, callout, delay = 0 }: GallerySlideProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="relative shrink-0 snap-center overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_18px_50px_rgba(21,18,46,0.08)] w-[min(88vw,700px)]"
    >
      <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
        <img
          src="/hero-agentic-bg.svg"
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/68 to-[#F4F0FF]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/84" />

        <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full border border-[#6C63FF]/15 bg-white/72 px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#6C63FF] backdrop-blur-sm">
              {eyebrow}
            </span>
            <span className="rounded-full bg-[#15122E] px-3 py-1.5 font-poppins text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
              {index}
            </span>
          </div>

          <div className="max-w-[460px]">
            <h3 className="font-onest text-[34px] sm:text-[42px] lg:text-[54px] font-semibold leading-[0.96] tracking-[-1.6px] text-[#15122E]">
              {title}
            </h3>
            <p className="mt-4 max-w-[420px] font-['DM_Sans'] text-[16px] sm:text-[18px] leading-relaxed text-[#15122E]/74">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15122E]/10 bg-white/78 px-4 py-2 backdrop-blur-sm">
              <span className="font-poppins text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-[#15122E]/70">
                {callout}
              </span>
            </div>

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15122E] text-white shadow-[0_10px_25px_rgba(21,18,46,0.18)]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const gallerySlides = [
  {
    index: "01",
    eyebrow: "Hero",
    title: "A system that self-deploys.",
    description: "Nexus configures your company with your approval and gives every employee an agent trained to handle tedious tasks.",
    callout: "Minimal hero",
  },
  {
    index: "02",
    eyebrow: "Platform",
    title: "Give agents the goal.",
    description: "The platform reads the outcome, maps the work, and routes it through the right agent or person.",
    callout: "Horizontal gallery",
  },
  {
    index: "03",
    eyebrow: "Rollout",
    title: "Consultant-free setup guaranteed.",
    description: "Your team stays in control while Nexus configures the branded company environment with approval.",
    callout: "Approval-led setup",
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
                <Sparkles className="w-4 h-4 text-[#6C63FF]" />
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
                Scroll left to right through the system. The first card stays minimalist; the next slides show how the platform deploys, routes work, and rolls out with approval.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" as const }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <span className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.2em] text-[#15122E]/70">
                  Image-led hero
                </span>
                <span className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.2em] text-[#15122E]/70">
                  Gallery scroll
                </span>
                <span className="rounded-full border border-[#15122E]/10 bg-white px-4 py-2 font-poppins text-[12px] font-bold uppercase tracking-[0.2em] text-[#15122E]/70">
                  Left to right motion
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

            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F4F0FF] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F4F0FF] to-transparent" />

              <div className="flex gap-4 overflow-x-auto pb-4 pr-8 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {gallerySlides.map((slide, index) => (
                  <GallerySlide
                    key={slide.title}
                    index={slide.index}
                    eyebrow={slide.eyebrow}
                    title={slide.title}
                    description={slide.description}
                    callout={slide.callout}
                    delay={0.08 * index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
