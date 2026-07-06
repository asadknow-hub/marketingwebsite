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
    <section className="relative w-full overflow-hidden pt-32 lg:pt-44 pb-16 lg:pb-24">
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#6C63FF]/10 blur-[140px]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/10 blur-[120px]" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {badge && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6C63FF]/20 bg-[#6C63FF]/10 whitespace-nowrap mb-6"
          >
            {BadgeIcon && <BadgeIcon className="w-4 h-4 text-[#6C63FF]" />}
            <span className="text-[#6C63FF] font-poppins text-sm font-semibold tracking-[-0.2px]">
              {badge}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full text-[#15122E] font-heading text-[38px] sm:text-[52px] lg:text-[68px] font-semibold leading-[1.05] tracking-[-1.5px] lg:tracking-[-2.5px]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 w-full max-w-[680px] text-[#15122E]/70 font-['DM_Sans'] text-lg lg:text-xl leading-relaxed"
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
