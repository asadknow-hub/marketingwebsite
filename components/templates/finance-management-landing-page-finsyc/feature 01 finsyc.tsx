"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Boxes, Brain, Shield, BarChart3, Sparkles, Check } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  uiSrc: string;
  width: string;
  className?: string;
  delay?: number;
  isMounted?: boolean;
  items?: string[];
}

function FeatureCard({ title, description, icon: Icon, uiSrc, width: _width, className = "", delay = 0, isMounted = false, items }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] as const }}
      className={"flex flex-col items-start shrink-0 border border-[#15122E]/10 overflow-hidden bg-white group w-full rounded-[24px] sm:rounded-[32px] " + (className || "")}
    >
      {!items && uiSrc && (
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden flex items-center justify-center p-6 sm:p-8 bg-[#F9FAFB]">
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            >
              <source
                src="https://cdn.jiro.build/amox/all%20images/p01-header-01-bg.mp4"
                type="video/mp4"
              />
            </video>
          )}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src={uiSrc}
              alt={title}
              className="h-full w-full object-contain pointer-events-none select-none transition-all duration-500 group-hover:translate-y-[-10px]"
            />
          </div>
        </div>
      )}

      <div className="p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-5 self-stretch bg-white">
        <div className="w-10 h-10 p-2 flex items-center justify-center border border-[#6C63FF]/20 bg-[#6C63FF]/5 rounded-lg shrink-0">
          <Icon className="w-6 h-6 text-[#6C63FF] stroke-[3px]" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#15122E] font-onest text-xl sm:text-2xl font-semibold leading-tight sm:leading-[30px] tracking-[-0.8px]">
            {title}
          </h3>
          {items ? (
            <ul className="flex flex-col gap-1.5">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#15122E] font-inter text-sm sm:text-base font-normal leading-relaxed opacity-80">
                  <Check className="w-4 h-4 text-[#6C63FF] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#15122E] font-inter text-base sm:text-lg font-normal leading-relaxed sm:leading-[28px] opacity-80">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function OriginalFinsycFeature({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const cards: Array<{ title: string; description: string; icon: React.ElementType; uiSrc: string; width: string; items?: string[] }> = [
    {
      title: "Unified ERP Suite",
      description: "",
      icon: Boxes,
      uiSrc: "",
      width: "",
      items: [
        "Finance & Accounting",
        "CRM & Sales",
        "HR & Payroll",
        "Supply Chain & Logistics",
        "Manufacturing & Production",
        "Projects & Service",
      ]
    },
    {
      title: "Agentic AI & Copilot",
      description: "AI copilots, predictive analytics, and intelligent automation built into every module — not bolted on.",
      icon: Brain,
      uiSrc: "",
      width: ""
    },
    {
      title: "Enterprise Security",
      description: "RBAC, SSO, encryption, and full audit trails with SOC 2 and GDPR-aligned governance built in.",
      icon: Shield,
      uiSrc: "",
      width: ""
    },
    {
      title: "Real-Time Analytics",
      description: "Live dashboards, KPI tracking, and self-service reporting across your entire business.",
      icon: BarChart3,
      uiSrc: "",
      width: ""
    }
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={"w-full bg-[#FFFFFF] py-20 lg:py-32 overflow-hidden " + (className || "")}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6C63FF]/10 bg-[#6C63FF]/5 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#6C63FF]" />
                <span className="text-[#6C63FF] text-center font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  Our Powerful Features
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 w-full max-w-[686px] text-[#15122E] text-center font-onest text-[32px] sm:text-[40px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] sm:tracking-[-1.8px]"
              >
                Master Your System
                <br className="block sm:hidden" />
                {" with Smart "}
                <span className="text-black/40 font-playfair italic font-semibold">
                  Features
                </span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 w-full max-w-[514px] text-[#15122E] text-center font-inter text-base sm:text-lg font-normal leading-relaxed sm:leading-7 opacity-80"
              >
                Everything your teams need to run the business — 15 modules and 160+ features unified in one AI-first platform.
              </motion.p>
            </div>

            <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
              {cards.map((card, idx) => (
                <FeatureCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  uiSrc={card.uiSrc}
                  width={card.width}
                  isMounted={isMounted}
                  delay={0.2 + idx * 0.1}
                  className="w-full"
                  items={card.items}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
