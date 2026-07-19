"use client";

import Header01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/header 01 finsyc";
import MetricsWithLogo01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/metrics with logo 01 finsyc";
import DepartmentScenarios01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/department scenarios 01 finsyc";
import HowItWorks01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/how it works 01 finsyc";
import WhyChooseUs01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/why choose us 01 finsyc";
import CtaWithFooter01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/cta with footer 01 finsyc";
import { GetInTouchModalProvider } from "@/components/site/GetInTouchModal";

export default function Home() {
  return (
    <GetInTouchModalProvider>
      <main className="min-h-screen">
        <Header01Finsyc />
        <MetricsWithLogo01Finsyc />
        <DepartmentScenarios01Finsyc />
        <HowItWorks01Finsyc />
        <WhyChooseUs01Finsyc />
        <CtaWithFooter01Finsyc />
      </main>
    </GetInTouchModalProvider>
  );
}
