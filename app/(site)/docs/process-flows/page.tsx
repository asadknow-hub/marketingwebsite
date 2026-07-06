"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  ArrowUpRight,
  ShoppingCart,
  Banknote,
  BookOpenCheck,
  Users,
  Factory,
  Boxes,
  Target,
  FileText,
  LifeBuoy,
  TrendingUp,
  Truck,
  PackageCheck,
  Megaphone,
  UserCheck,
  Headphones,
  LineChart,
  Receipt,
  Undo2,
} from "lucide-react";
import PageHero from "@/components/site/PageHero";
import DocsTabs from "@/components/site/DocsTabs";

const processes = [
  { name: "Procure-to-Pay", icon: ShoppingCart, desc: "Requisition, purchase order, receipt, invoice, and payment in one flow." },
  { name: "Order-to-Cash", icon: Banknote, desc: "From sales order and fulfillment through invoicing and collections." },
  { name: "Record-to-Report", icon: BookOpenCheck, desc: "General ledger, close, consolidation, and financial reporting." },
  { name: "Hire-to-Retire", icon: Users, desc: "Recruitment, onboarding, payroll, and the full employee lifecycle." },
  { name: "Plan-to-Produce", icon: Factory, desc: "Production planning, work orders, shop floor, and quality control." },
  { name: "Acquire-to-Retire", icon: Boxes, desc: "Fixed asset acquisition, depreciation, transfers, and disposal." },
  { name: "Lead-to-Opportunity", icon: Target, desc: "Lead capture, scoring, qualification, and opportunity conversion." },
  { name: "Quote-to-Cash", icon: FileText, desc: "Configure, quote, contract, order, and revenue recognition." },
  { name: "Issue-to-Resolution", icon: LifeBuoy, desc: "Case intake, triage, SLA tracking, and resolution workflows." },
  { name: "Demand-to-Supply", icon: TrendingUp, desc: "Demand forecasting, planning, and supply reconciliation." },
  { name: "Inventory-to-Fulfillment", icon: Truck, desc: "Stock management, picking, packing, and shipment." },
  { name: "Design-to-Deliver", icon: PackageCheck, desc: "Product design, BOM, engineering change, and delivery." },
  { name: "Campaign-to-Lead", icon: Megaphone, desc: "Marketing campaigns, engagement, and lead generation." },
  { name: "Onboard-to-Productive", icon: UserCheck, desc: "New hire onboarding, training, and time-to-productivity." },
  { name: "Request-to-Service", icon: Headphones, desc: "Service request, dispatch, field execution, and closure." },
  { name: "Forecast-to-Plan", icon: LineChart, desc: "Budgeting, forecasting, and operational planning cycles." },
  { name: "Invoice-to-Pay", icon: Receipt, desc: "Vendor invoice matching, approval, and disbursement." },
  { name: "Return-to-Refund", icon: Undo2, desc: "Returns authorization, inspection, credit, and refund." },
];

export default function ProcessFlowsPage() {
  return (
    <>
      <PageHero
        badge="Official Documentation"
        badgeIcon={Compass}
        title={
          <>
            Business <span className="text-[#6C63FF]">Process Flows</span>
          </>
        }
        subtitle="Explore all 18 end-to-end business processes that Nexus AI First orchestrates across your enterprise — fully integrated and automated."
      />

      <DocsTabs />

      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processes.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="group p-6 rounded-3xl bg-white border border-[#15122E]/10 hover:border-[#6C63FF]/40 hover:shadow-[0_20px_60px_rgba(108,99,255,0.1)] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#6C63FF]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#6C63FF]" />
                  </div>
                  <span className="font-poppins text-xs font-bold text-[#15122E]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#15122E] mb-2">
                  {p.name}
                </h3>
                <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#15122E]/70">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-[900px] mx-auto mt-16 rounded-[32px] p-10 lg:p-14 text-center bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] text-white">
          <h2 className="font-heading text-[28px] lg:text-[36px] font-semibold tracking-[-1px] mb-4">
            See these processes in action
          </h2>
          <p className="max-w-[520px] mx-auto text-white/85 font-['DM_Sans'] text-lg mb-8">
            Request a personalized demo and we&apos;ll walk you through the flows most relevant to
            your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-white text-[#6C63FF] font-poppins font-semibold hover:scale-[1.02] transition-transform"
          >
            Request a Demo <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
