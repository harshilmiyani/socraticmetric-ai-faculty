"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterpriseRisk } from "@/components/enterprise/EnterpriseRisk";
import { EnterpriseSolution } from "@/components/enterprise/EnterpriseSolution";
import { EnterpriseCompliance } from "@/components/enterprise/EnterpriseCompliance";
import { EnterpriseOutcomes } from "@/components/enterprise/EnterpriseOutcomes";
import { EnterpriseUseCases } from "@/components/enterprise/EnterpriseUseCases";
import { EnterpriseTestimonial } from "@/components/enterprise/EnterpriseTestimonial";
import { ContactSection } from "@/components/home/sections/ContactSection";

export default function EnterprisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans text-[#1F2A44] selection:bg-[#F58022]/20 selection:text-[#1F2A44] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <EnterpriseHero />
        <EnterpriseRisk />
        <EnterpriseSolution />
        <EnterpriseCompliance />
        <EnterpriseOutcomes />
        <EnterpriseUseCases />
        <EnterpriseTestimonial />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
