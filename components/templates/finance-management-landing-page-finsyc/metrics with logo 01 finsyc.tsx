"use client";

import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { ArrowUpRight, BarChart3, GitBranch, TrendingDown } from "lucide-react";

function Counter({ value, suffix = "%", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      onUpdate: (latest: number) => setDisplayValue(Math.round(latest)),
      ease: "easeOut" as const,
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{displayValue}{suffix}</span>;
}

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  metric: number;
  metricSuffix?: string;
  metricLabel: string;
  delay?: number;
}

function RoleCard({ title, description, icon, metric, metricSuffix = "%", metricLabel, delay = 0 }: RoleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="flex w-full lg:flex-1 p-6 md:p-8 flex-col items-start rounded-[24px] bg-white border-2 border-[#E5E7EB] relative"
    >
      <h3 className="font-heading text-[24px] md:text-[28px] font-bold leading-[32px] md:leading-[36px] tracking-[-0.5px] text-[#15122E] mb-4">
        {title}
      </h3>
      <p className="font-sans text-[15px] md:text-[17px] font-normal leading-[22px] md:leading-[26px] text-[#15122E] opacity-80 flex-1">
        {description}
      </p>
      <div className="mt-8">
        <h2 className="font-heading text-[40px] md:text-[52px] font-semibold leading-[46px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#6C63FF]">
          <Counter value={metric} suffix={metricSuffix} />
        </h2>
        <p className="mt-2 font-sans text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#15122E] opacity-70">
          {metricLabel}
        </p>
      </div>
      <div className="absolute top-6 right-6 opacity-30">
        {icon}
      </div>
    </motion.div>
  );
}

export default function MetricsWithLogo01Finsyc({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        className={"w-full bg-[#F5F3FF] py-20 lg:py-32 flex justify-center " + (className || "")}
      >
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            {/* Header */}
            <div className="mb-10 md:mb-[64px] flex justify-center">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className="max-w-[1100px] text-center text-[36px] md:text-[52px] font-heading font-semibold leading-[42px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#15122E]"
              >
                <span className="text-[#6C63FF]">Break away from Rigid ERPs</span> with our <i className="text-[rgba(0,0,0,0.40)]">Agentic ERP</i> that understands you and your processes.
              </motion.h1>
            </div>

            {/* Role Cards */}
            <div className="flex flex-col lg:flex-row gap-[24px]">
              <RoleCard
                delay={0.1}
                title="Employees"
                description="8-hour tasks reduced to under 1 hour. Less frustration, more time for high-value strategic work."
                icon={<BarChart3 className="w-12 h-12 text-[#15122E]" />}
                metric={87}
                metricSuffix="%"
                metricLabel="Reduction in task completion time"
              />
              <RoleCard
                delay={0.2}
                title="Managers & Directors"
                description="Zero delays waiting on external consultant meetings. Real-time changes and radically faster decision-making."
                icon={<GitBranch className="w-12 h-12 text-[#15122E]" />}
                metric={10}
                metricSuffix="x"
                metricLabel="Faster decision-making speed"
              />
              <RoleCard
                delay={0.3}
                title="Leadership"
                description="Meaningfully lower total cost of ownership, eliminated project risk, and accelerated business optimization."
                icon={<TrendingDown className="w-12 h-12 text-[#15122E]" />}
                metric={60}
                metricSuffix="%"
                metricLabel="Lower total cost of ownership"
              />
            </div>

            {/* Bottom Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
              className="mt-10 md:mt-[48px] w-full py-5 px-6 md:px-10 rounded-2xl bg-[#4F46E5]/10 border border-[#4F46E5]/30 flex justify-center"
            >
              <p className="font-sans text-[15px] md:text-[18px] font-medium leading-[24px] md:leading-[28px] text-[#15122E] text-center italic">
                Stop treating high consultant spend and operational friction as a normal cost of doing business.
              </p>
            </motion.div>

            {/* Button */}
            <div className="flex justify-center mt-10 md:mt-[64px]">
              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  paddingLeft: isHovered ? 8 : 20,
                  paddingRight: isHovered ? 20 : 8,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                  opacity: { duration: 0.8 },
                  y: { duration: 0.8 },
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center h-[56px] min-w-fit w-max bg-[#15122E] rounded-full group cursor-pointer transition-colors duration-300 hover:bg-[#4F46E5] overflow-hidden gap-[12px]"
              >
                <motion.div
                  layout="position"
                  style={{ order: isHovered ? 2 : 1 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="font-sans text-[18px] font-medium leading-[28px] text-white whitespace-nowrap"
                >
                  Try for Free
                </motion.div>
                <motion.div
                  layout="position"
                  style={{ order: isHovered ? 1 : 2 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shrink-0"
                >
                  <ArrowUpRight className="w-[16px] h-[16px] text-[#15122E]" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
