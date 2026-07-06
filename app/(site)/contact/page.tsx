"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Building2,
  MessageSquare,
  Check,
  Headphones,
  Loader2,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";

const faqs = [
  { q: "How do I request a demo?", a: "Fill in the form and select \"Demo\" as your subject — we'll schedule a personalized walkthrough of Nexus AI First." },
  { q: "What industries do you support?", a: "Nexus AI First supports 40+ industries including manufacturing, retail, healthcare, banking, and more." },
  { q: "Can I see the platform before buying?", a: "Absolutely — request a personalized demo and we'll set up a guided walkthrough and proof-of-concept tailored to your business." },
  { q: "How long does implementation take?", a: "Implementation typically takes 4–12 weeks depending on your organization's size and requirements." },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submit; wire to a real endpoint / mailto as needed.
    setTimeout(() => setStatus("sent"), 900);
  };

  const inputCls =
    "w-full h-12 px-4 rounded-xl border border-[#15122E]/15 bg-white font-['DM_Sans'] text-[#15122E] placeholder:text-[#15122E]/40 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 transition-all";

  return (
    <>
      <PageHero
        badge="Get in Touch"
        badgeIcon={Mail}
        title={
          <>
            Let&apos;s talk about <span className="text-[#6C63FF]">your ERP</span>
          </>
        }
        subtitle="Have questions about Nexus AI First? We're here to help. Send us a message and we'll respond within 24–48 hours."
      />

      <section className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 p-8 rounded-3xl bg-white border border-[#15122E]/10"
          >
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#4F46E5]/15 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-[#4F46E5]" strokeWidth={3} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#15122E] mb-2">
                  Message sent successfully
                </h2>
                <p className="font-['DM_Sans'] text-[#15122E]/70 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", company: "", subject: "", message: "" });
                    setStatus("idle");
                  }}
                  className="inline-flex items-center h-11 px-6 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-6 h-6 text-[#6C63FF]" />
                  <h2 className="font-heading text-2xl font-bold text-[#15122E]">
                    Send us a message
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins text-sm font-semibold text-[#15122E] mb-1.5">
                      Full Name *
                    </label>
                    <input required value={form.name} onChange={update("name")} placeholder="John Doe" className={inputCls} />
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-semibold text-[#15122E] mb-1.5">
                      Email Address *
                    </label>
                    <input required type="email" value={form.email} onChange={update("email")} placeholder="john@company.com" className={inputCls} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins text-sm font-semibold text-[#15122E] mb-1.5">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#15122E]/40" />
                      <input value={form.company} onChange={update("company")} placeholder="Acme Inc." className={inputCls + " pl-10"} />
                    </div>
                  </div>
                  <div>
                    <label className="block font-poppins text-sm font-semibold text-[#15122E] mb-1.5">
                      Subject *
                    </label>
                    <input required value={form.subject} onChange={update("subject")} placeholder="How can we help?" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block font-poppins text-sm font-semibold text-[#15122E] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-[#15122E]/15 bg-white font-['DM_Sans'] text-[#15122E] placeholder:text-[#15122E]/40 outline-none focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 h-13 py-3.5 rounded-full bg-[#6C63FF] hover:bg-[#4F46E5] transition-colors text-white font-poppins font-semibold disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="p-6 rounded-3xl bg-[#6C63FF]/5 border border-[#6C63FF]/15">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-[#6C63FF]" />
                <h3 className="font-heading text-lg font-semibold text-[#15122E]">
                  Get in touch
                </h3>
              </div>
              <p className="font-['DM_Sans'] text-[15px] text-[#15122E]/70">
                Our team is available to answer your questions and help you find the right ERP
                solution for your business.
              </p>
            </div>
            <div className="block p-6 rounded-3xl bg-white border border-[#15122E]/10">
              <div className="flex items-center gap-3 mb-2">
                <Headphones className="w-6 h-6 text-[#15122E]" />
                <h3 className="font-heading text-lg font-semibold text-[#15122E]">Sales & Support</h3>
              </div>
              <p className="font-['DM_Sans'] text-[15px] text-[#15122E]/70">
                Talk to our team about plans, demos, onboarding, and dedicated support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 bg-[#F5F3FF] pt-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-center font-heading text-[32px] lg:text-[44px] font-semibold text-[#15122E] tracking-[-1.2px] mb-10">
            Frequently asked questions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.06 }}
                className="p-6 rounded-3xl bg-white border border-[#15122E]/10"
              >
                <h4 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                  {f.q}
                </h4>
                <p className="font-['DM_Sans'] text-[15px] text-[#15122E]/70 leading-relaxed">
                  {f.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
