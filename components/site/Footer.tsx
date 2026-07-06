"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const productLinks = [
  { label: "Modules", href: "/modules" },
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] as const },
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#15122E]">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[96px] pt-16 lg:pt-24 pb-8">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-start gap-[60px] lg:gap-[130px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left: Newsletter */}
          <div className="w-full lg:w-[440px] flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <img
                src="/purplelogowobg.png"
                alt="Nexus AI First"
                className="h-9 w-auto"
              />
              <span className="font-poppins text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#A79FFF] to-[#6C63FF] bg-clip-text text-transparent">
                Nexus AI First
              </span>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-white/70 font-sans text-lg leading-[28px]"
            >
              The world&apos;s leading Agentic ERP — built with embedded consultants and
              developers, so you get the software, the expertise, and the execution in one
              platform.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-2 relative w-full flex flex-col sm:flex-row items-stretch sm:items-center p-3 sm:p-[6px] gap-3 sm:gap-0 rounded-[28px] sm:rounded-full border border-white/20 bg-white/5 backdrop-blur-xl"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none outline-none px-4 py-2 sm:py-0 font-sans text-lg text-white placeholder:text-white/50"
              />
              <button className="flex items-center justify-between sm:justify-start gap-3 bg-[#6C63FF] pl-6 pr-2 py-2 rounded-full hover:bg-[#4F46E5] transition-colors duration-300 group">
                <span className="font-sans text-base font-medium text-white">
                  Subscribe
                </span>
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={18} strokeWidth={2.5} className="text-[#15122E]" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right: Link columns */}
          <div className="lg:ml-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 lg:gap-[64px] w-full lg:w-auto">
            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <div className="flex flex-col gap-5">
              <motion.h4
                variants={itemVariants}
                className="text-white font-heading text-[22px] font-semibold tracking-[-0.6px]"
              >
                Social
              </motion.h4>
              <ul className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <motion.li key={social.name} variants={itemVariants}>
                    <a
                      href={social.href}
                      className="flex items-center gap-3 text-white/70 font-sans text-lg hover:text-white transition-colors"
                    >
                      <social.icon size={18} fill="currentColor" strokeWidth={0} />
                      {social.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Big brand text */}
        <div className="w-full flex justify-center items-center select-none mt-10 lg:mt-16 overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] as const }}
            className="w-full text-center text-white/10 font-heading font-bold leading-none text-[64px] sm:text-[120px] lg:text-[200px] tracking-tighter"
          >
            Nexus AI
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          className="w-full mt-8 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-8 text-white/70 font-sans text-base">
            <Link href="/legal" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="text-white/70 font-sans text-base text-center">
            &copy; {new Date().getFullYear()} Nexus AI First. All Rights Reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <motion.h4
        variants={itemVariants}
        className="text-white font-heading text-[22px] font-semibold tracking-[-0.6px]"
      >
        {title}
      </motion.h4>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <motion.li key={link.label} variants={itemVariants}>
            <Link
              href={link.href}
              className="text-white/70 font-sans text-lg hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
