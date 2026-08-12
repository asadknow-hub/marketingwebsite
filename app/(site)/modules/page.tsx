"use client";

import Roadmap01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/roadmap 01 finsyc";
import FeatureExplorer from "@/components/site/FeatureExplorer";
import { useGetInTouchModal } from "@/components/site/GetInTouchModal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ModulesPage() {
  const { openGetInTouch } = useGetInTouchModal();

  return (
    <>
      <Roadmap01Finsyc />

      {/* Feature Explorer section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-[#F6F7FB]">
        <FeatureExplorer />
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-24 bg-[#F6F7FB]">
        <div className="max-w-[900px] mx-auto rounded-[24px] sm:rounded-[32px] p-8 sm:p-10 lg:p-14 text-center bg-gradient-to-br from-[#6C63FF] to-[#4F46E5] text-white">
          <h2 className="font-onest text-[24px] sm:text-[26px] lg:text-[34px] font-semibold tracking-[-0.8px] sm:tracking-[-1px] mb-3">
            Ready to see it in action?
          </h2>
          <p className="max-w-[520px] mx-auto text-white/85 font-['DM_Sans'] text-[16px] sm:text-lg mb-8">
            Talk to our team about how the platform maps to your business and which modules fit your needs.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-[420px] sm:max-w-none mx-auto">
            <button
              onClick={openGetInTouch}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-[#6C63FF] font-poppins font-semibold hover:scale-[1.02] transition-transform"
            >
              Talk to an Expert <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/30 text-white font-poppins font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
