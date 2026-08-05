"use client";

import HeroRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/hero";
import ProblemRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/problem";
import SolutionRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/solution";
import ModulesRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/modules";
import PricingRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/pricing";
import FooterCtaRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/cta";
import HomeNav from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/nav";
import ProofBand from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/proof";
import { GetInTouchModalProvider } from "@/components/site/GetInTouchModal";

export default function Home() {
  return (
    <GetInTouchModalProvider>
      <HomeNav />

      <main className="min-h-screen bg-[#F6F7FB] text-slate-900">
        <HeroRedesign />
        <ProofBand />
        <ProblemRedesign />
        <SolutionRedesign />
        <ModulesRedesign />
        <PricingRedesign />
        <FooterCtaRedesign />
      </main>
    </GetInTouchModalProvider>
  );
}
