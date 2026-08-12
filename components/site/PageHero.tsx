"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden pt-32 lg:pt-48 pb-14 lg:pb-24 bg-[#F6F7FB]">
      {/* Grid + ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,99,255,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(233,75,111,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.06),transparent_24%)]" />
        <div className="absolute inset-0 bg-[size:32px_32px] bg-[linear-gradient(rgba(21,18,46,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(21,18,46,0.04)_1px,transparent_1px)] opacity-40" />
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full blur-[150px] bg-[#6C63FF]/10" />
        <div className="absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full blur-[160px] bg-[#E94B6F]/8" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {badge && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#15122E]/10 bg-white/80 backdrop-blur-xl shadow-[0_8px_24px_rgba(21,18,46,0.06)] whitespace-nowrap mb-6"
          >
            {BadgeIcon && <BadgeIcon className="w-4 h-4 text-[#6C63FF]" />}
            <span className="text-[#15122E]/70 font-poppins text-[12px] font-bold uppercase tracking-[0.24em]">
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full text-[#15122E] font-onest text-[32px] sm:text-[52px] lg:text-[62px] font-semibold leading-[1.05] sm:leading-[0.95] tracking-[-1.2px] sm:tracking-[-2.2px] lg:tracking-[-2.2px]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 sm:mt-6 w-full max-w-[680px] text-[#15122E]/65 font-['DM_Sans'] text-[16px] sm:text-lg lg:text-xl leading-[1.6] sm:leading-[1.72]"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
