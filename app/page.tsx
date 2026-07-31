"use client";

import HeroRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/hero";
import ProblemRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/problem";
import SolutionRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/solution";
import ModulesRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/modules";
import PricingRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/pricing";
import FooterCtaRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/cta";
import HomeNav from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/nav";
import ProofBand from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/proof";
import { Seam } from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/ui";
import { GetInTouchModalProvider } from "@/components/site/GetInTouchModal";

export default function Home() {
  return (
    <GetInTouchModalProvider>
      <HomeNav />

      <main className="min-h-screen bg-[#F6F7FB] text-slate-900">
        <HeroRedesign />
        <Seam from="#F6F7FB" to="#0F1024" />
        <ProofBand />
        <Seam from="#0F1024" to="#18172F" />
        <ProblemRedesign />
        <Seam from="#18172F" to="#FFFFFF" />
        <SolutionRedesign />
        <Seam from="#FFFFFF" to="#151428" />
        <ModulesRedesign />
        <Seam from="#F6F7FB" to="#121325" />
        <PricingRedesign />
        <Seam from="#121325" to="#F6F7FB" />
        <FooterCtaRedesign />
      </main>
    </GetInTouchModalProvider>
  );
}
