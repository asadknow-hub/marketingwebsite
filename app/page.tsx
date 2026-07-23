"use client";

import HeroRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/hero";
import ProblemRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/problem";
import SolutionRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/solution";
import ModulesRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/modules";
import PricingRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/pricing";
import FooterCtaRedesign from "@/components/templates/finance-management-landing-page-finsyc/homepage-redesign/cta";
import { GetInTouchModalProvider } from "@/components/site/GetInTouchModal";

export default function Home() {
  return (
    <GetInTouchModalProvider>
      <main className="min-h-screen">
        <HeroRedesign />
        <ProblemRedesign />
        <SolutionRedesign />
        <ModulesRedesign />
        <PricingRedesign />
        <FooterCtaRedesign />
      </main>
    </GetInTouchModalProvider>
  );
}
