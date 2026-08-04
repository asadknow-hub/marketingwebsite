"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Boxes, Building2, Layers, Workflow } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import { industries } from "@/lib/data/industries";
import { type, MeshBg } from "./ui";

const totalModules = featureModules.length;
const totalCapabilities = featureModules.reduce((sum, module) => sum + module.features.length, 0);
const totalIndustries = Object.keys(industries).length;
const totalProcessFlows = 18;

const metrics = [
  { icon: Boxes, value: totalModules, suffix: "", label: "Business modules" },
  { icon: Layers, value: totalCapabilities, suffix: "", label: "Shipped capabilities" },
  { icon: Workflow, value: totalProcessFlows, suffix: "", label: "End-to-end processes" },
  { icon: Building2, value: totalIndustries, suffix: "", label: "Industries mapped" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce || !inView) return;

    let frame = 0;
    const total = 46;

    const tick = window.setInterval(() => {
      frame += 1;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * eased));

      if (frame >= total) window.clearInterval(tick);
    }, 18);

    return () => window.clearInterval(tick);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function ProofBand() {
  return (
    <section aria-label="Platform scale" className="relative w-full overflow-hidden bg-[#0B0F1A] py-12 sm:py-16">
      <MeshBg tone="dark" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#685BFD]/40" />
            <span className={type.micro + " text-white/45"}>One platform, already mapped end to end</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#EC4899]/40" />
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const isLarge = index === 0 || index === 3;

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  className={
                    "group relative flex flex-col gap-4 rounded-[24px] border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] " +
                    (isLarge ? "sm:p-6" : "")
                  }
                >
                  <div className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(104,91,253,0.08), transparent 70%)" }}
                  />

                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-[#A78BFA]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="relative flex flex-col">
                    <span className="font-inter text-[36px] font-bold leading-none tracking-[-1.5px] text-white sm:text-[42px]">
                      <Counter value={metric.value} suffix={metric.suffix} />
                    </span>
                    <span className={type.micro + " mt-2.5 text-white/45"}>{metric.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
