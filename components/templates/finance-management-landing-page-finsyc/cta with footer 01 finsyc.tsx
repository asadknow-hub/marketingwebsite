"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Sparkles, ArrowUpRight } from "lucide-react";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";

export default function CtaWithFooter01Finsyc({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const { openGetInTouch } = useGetInTouchModal();

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.45, 0.32, 0.9] as const,
      },
    },
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <footer className={"relative w-full overflow-hidden flex flex-col items-center " + (className || "")}>
        {/* Background Video for the entire footer */}
        <div className="absolute inset-0 z-0">
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://cdn.jiro.build/amox/all%20images/p01-header-01-bg.mp4"
                type="video/mp4"
              />
            </video>
          )}
          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-white/20" />
          {/* Glass effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-white/2 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_40%,transparent)]" />
        </div>

        {/* CTA Section */}
        <section className="w-full relative pt-[120px] pb-0 overflow-hidden flex flex-col items-center">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/40 to-transparent" />

          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-[96px] relative z-10 flex flex-col items-center">
            <div className="max-w-[1248px] w-full flex flex-col items-center">

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEECFF] border border-[#6C63FF]/10 mb-[30px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#6C63FF]" />
                <span className="text-[#6C63FF] text-[13px] font-sans font-medium uppercase tracking-wider">Built for Modern Enterprises</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-[742px] text-center text-[#15122E] font-semibold text-[42px] md:text-[68px] leading-[1.1] md:leading-[80px] tracking-tight md:tracking-[-2.2px] mb-[12px]"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                Let the <span className="italic text-[rgba(0,0,0,0.40)]">system</span> do the work.
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-[660px] text-center text-[#15122E] font-sans text-lg md:text-[20px] leading-[1.5] md:leading-[30px] tracking-tight md:tracking-[-0.4px] opacity-80 mb-[64px]"
              >
                Get in touch about Wave 1: Finance & Accounting and HRMS, powered by orchestration AI and embedded domain experts.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <button
                  type="button"
                  onClick={openGetInTouch}
                  className="relative flex h-[56px] items-center gap-3 rounded-full bg-[#15122E] px-5 text-white shadow-[0_8px_32px_rgba(21,18,46,0.15)] transition-colors hover:bg-[#4F46E5]"
                >
                  <span className="font-sans text-[18px] font-medium leading-[28px]">Get In Touch</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white"><ArrowUpRight className="h-4 w-4 text-[#15122E]" /></span>
                </button>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Footer Links Section */}
        <div className="relative w-full flex flex-col items-center">
          <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-[96px] pt-[64px] pb-[32px] flex flex-col items-start bg-transparent">

            {/* Content Row */}
            <motion.div
              className="w-full lg:w-[1248px] pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[96px] flex flex-col lg:flex-row items-start gap-[60px] lg:gap-[130px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Left Column */}
              <div className="w-full lg:w-[440px] flex flex-col gap-6">
                <motion.h3
                  variants={itemVariants}
                  className="text-[#15122E] text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                  style={{ fontFamily: "'Onest', sans-serif" }}
                >
                  Stay Tuned for More Updates
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-[#15122E] font-sans text-[18px] font-normal leading-[28px] opacity-80"
                >
                  Product updates, AI insights, and best practices — straight to your inbox.
                </motion.p>

                {/* Subscribe Box */}
                <motion.div
                  variants={itemVariants}
                  className="mt-2 relative w-full lg:w-[440px] flex flex-col sm:flex-row items-stretch sm:items-center p-3 sm:p-[6px] gap-3 sm:gap-0 rounded-[28px] sm:rounded-full border border-white/60 bg-white/15 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-none outline-none px-4 py-2 sm:py-0 font-sans text-[18px] text-[#15122E] placeholder:text-[#15122E]/60"
                  />
                  <button className="flex items-center justify-between sm:justify-start gap-3 bg-white pl-6 pr-2 py-2 sm:pl-[24px] sm:pr-[8px] sm:py-[8px] rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
                    <span className="font-sans text-[18px] font-medium text-[#15122E]">Subscribe</span>
                    <div className="w-[36px] h-[36px] bg-[#15122E] rounded-full flex items-center justify-center transition-colors duration-300 shrink-0">
                      <ArrowRight size={18} strokeWidth={2.5} className="text-white" />
                    </div>
                  </button>
                </motion.div>
              </div>

              {/* Right Column (Link Lists) */}
              <div className="lg:ml-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap gap-y-12 gap-x-8 lg:gap-[64px] w-full lg:w-auto">
                {/* Product */}
                <div className="lg:w-[152px] flex flex-col gap-[20px] relative">
                  <motion.h4
                    variants={itemVariants}
                    className="text-[#15122E] text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >Product</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {["Features", "Integrations", "Pricing", "Security"].map((link: string) => (
                      <motion.li key={link} variants={itemVariants}>
                        <a href="#" className="text-[#15122E] font-sans text-[18px] font-normal leading-[28px] opacity-80 hover:opacity-100 hover:font-medium transition-all">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="absolute top-0 -right-[32px] h-full w-[1px] bg-[#15122E]/10 hidden lg:block" />
                </div>

                {/* Company */}
                <div className="lg:w-[152px] flex flex-col gap-[20px] relative">
                  <motion.h4
                    variants={itemVariants}
                    className="text-[#15122E] text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >Company</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {["About Us", "Careers", "Blog", "Contact"].map((link: string) => (
                      <motion.li key={link} variants={itemVariants}>
                        <a href="#" className="text-[#15122E] font-sans text-[18px] font-normal leading-[28px] opacity-80 hover:opacity-100 hover:font-medium transition-all">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="absolute top-0 -right-[32px] h-full w-[1px] bg-[#15122E]/10 hidden lg:block" />
                </div>

                {/* Social */}
                <div className="lg:w-[220px] flex flex-col gap-[20px]">
                  <motion.h4
                    variants={itemVariants}
                    className="text-[#15122E] text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >Social</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {[
                      { name: "Facebook", icon: Facebook },
                      { name: "Twitter", icon: Twitter },
                      { name: "LinkedIn", icon: Linkedin },
                      { name: "Instagram", icon: Instagram }
                    ].map((social: { name: string; icon: React.ElementType }) => (
                      <motion.li key={social.name} variants={itemVariants}>
                        <a href="#" className="flex items-center gap-3 text-[#15122E] font-sans text-[18px] font-normal leading-[28px] opacity-80 hover:opacity-100 hover:font-medium transition-all">
                          <social.icon size={18} fill="currentColor" strokeWidth={0} className="opacity-100" />
                          {social.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Big Text Nexus AI First */}
            <div className="w-full max-w-[1248px] py-6 lg:py-10 flex flex-col justify-center items-center select-none mx-auto lg:mx-0 overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] as const }}
                className="w-full text-center whitespace-nowrap text-[36px] sm:text-[62px] md:text-[100px] lg:text-[134px] font-bold leading-none tracking-[-1px] md:tracking-[-3px] lg:tracking-[-5px] bg-gradient-to-b from-[#6C63FF] to-[#4F46E5] bg-clip-text text-transparent"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                Nexus AI First
              </motion.h1>
            </div>

            {/* Bottom Text Row */}
            <motion.div
              className="w-full lg:w-[1248px] mt-[24px] pt-8 flex flex-col lg:flex-row items-center justify-between gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-8 text-white font-sans text-[18px] font-normal leading-[28px] opacity-80">
                <a href="#" className="hover:opacity-100 hover:font-medium transition-all">Terms & Conditions</a>
                <a href="#" className="hover:opacity-100 hover:font-medium transition-all">Privacy Policy</a>
              </div>

              <div className="text-white font-sans text-[18px] font-normal leading-[28px] opacity-80 text-center lg:text-left">
                &copy; 2026 Nexus AI First. All Rights Reserved.
              </div>

              <div className="text-white font-sans text-[18px] font-normal leading-[28px] opacity-80">
                Design by <a href="https://yscale.studio/" target="_blank" className="underline underline-offset-4 hover:opacity-100 hover:font-medium transition-all">yscale.studio</a>
              </div>
            </motion.div>

          </div>
        </div>
      </footer>
    </>
  );
}
