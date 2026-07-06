"use client";

import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { Sparkles, Star, Quote } from "lucide-react";

function MetricCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
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

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  delay?: number;
}

function TestimonialCard({ name, role, avatar, quote, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className="flex flex-col items-start p-6 md:p-8 bg-white rounded-[24px] border border-[#15122E]/10 shadow-[0_4px_24px_rgba(21,18,46,0.04)] w-full"
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i: number) => (
          <Star key={i} className="w-4 h-4 fill-[#6C63FF] text-[#6C63FF]" />
        ))}
      </div>

      <Quote className="w-8 h-8 text-[#6C63FF]/20 mb-4" />

      <p className="text-[#15122E] font-sans text-base md:text-[18px] font-normal leading-[24px] md:leading-[28px] opacity-80 mb-6 flex-1">
        {quote}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <span className="text-[#15122E] font-onest text-base font-semibold leading-[22px]">
            {name}
          </span>
          <span className="text-[#15122E] font-sans text-sm font-normal leading-[20px] opacity-60">
            {role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MetricsWithTestimonialFinsyc({ className }: { className?: string }) {
  const metrics: Array<{ value: number; suffix: string; label: string }> = [
    { value: 100, suffix: "K+", label: "Active Users" },
    { value: 50, suffix: "M+", label: "Transactions Tracked" },
    { value: 99, suffix: "%", label: "Customer Satisfaction" },
    { value: 4, suffix: ".9", label: "Average Rating" },
  ];

  const testimonials: Array<{ name: string; role: string; avatar: string; quote: string; rating: number }> = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      avatar: "https://cdn.jiro.build/amox/all%20images/testimonial-avatar-01.png",
      quote: "Nexus AI First has completely transformed how we run operations. The AI insights surface issues before they become problems.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      avatar: "https://cdn.jiro.build/amox/all%20images/testimonial-avatar-02.png",
      quote: "The expense tracking and budgeting features are incredible. I finally have a clear picture of where my money goes each month.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      avatar: "https://cdn.jiro.build/amox/all%20images/testimonial-avatar-03.png",
      quote: "I love how Nexus AI First predicts demand and cash flow. It's like having an analyst on every team, all the time.",
      rating: 5,
    },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={"w-full bg-[#F5F3FF] py-20 lg:py-32 overflow-hidden " + (className || "")}>
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-12 md:mb-[80px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6C63FF]/10 bg-[#6C63FF]/5 whitespace-nowrap mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#6C63FF]" strokeWidth={2.5} />
                <span className="text-[#6C63FF] text-center font-inter text-base font-normal leading-6 tracking-[-0.3px]">
                  Trusted by Thousands
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[32px] sm:text-[40px] md:text-[52px] font-onest font-semibold text-[#15122E] leading-tight md:leading-[58px] tracking-tight md:tracking-[-1.8px] mb-6 max-w-3xl"
              >
                Numbers That Speak{" "}
                <span className="italic text-[rgba(0,0,0,0.40)] font-playfair font-semibold">
                  Louder
                </span>{" "}
                Than Words
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[15px] md:text-[18px] text-[#15122E] leading-[1.6] md:leading-[28px] max-w-[612px] font-sans font-normal opacity-80"
              >
                Join thousands of teams who run their business smarter with Nexus AI First.
              </motion.p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-[100px]">
              {metrics.map((metric: { value: number; suffix: string; label: string }, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" as const }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-[20px] border border-[#15122E]/[0.06] shadow-[0_4px_24px_rgba(21,18,46,0.02)]"
                >
                  <h3 className="text-[#15122E] font-onest text-[40px] md:text-[52px] font-semibold leading-[46px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px]">
                    <MetricCounter value={metric.value} suffix={metric.suffix} />
                  </h3>
                  <p className="mt-3 text-[#15122E] font-sans text-base md:text-[18px] font-normal leading-[24px] md:leading-[28px] opacity-80">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              {testimonials.map((testimonial, idx: number) => (
                <TestimonialCard
                  key={idx}
                  name={testimonial.name}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  delay={idx * 0.15}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
