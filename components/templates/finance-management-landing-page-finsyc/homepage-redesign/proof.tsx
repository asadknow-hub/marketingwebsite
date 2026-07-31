"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Boxes, Building2, Layers, Workflow } from "lucide-react";
import { featureModules } from "@/lib/data/featureModules";
import { industries } from "@/lib/data/industries";
import { type } from "./ui";

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
    <section aria-label="Platform scale" className="relative w-full overflow-hidden bg-[#0F1024]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(108,99,255,0.20),transparent_45%),radial-gradient(circle_at_85%_50%,rgba(233,75,111,0.14),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-[96px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={type.micro + " text-center text-white/45"}
          >
            One platform, already mapped end to end
          </motion.p>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
                  className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:gap-4 lg:text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#9C9BFF]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="mt-3 flex flex-col lg:mt-0">
                    <span className="font-onest text-[32px] font-semibold leading-none tracking-[-1.2px] text-white sm:text-[38px]">
                      <Counter value={metric.value} suffix={metric.suffix} />
                    </span>
                    <span className={type.micro + " mt-2 text-white/50"}>{metric.label}</span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
