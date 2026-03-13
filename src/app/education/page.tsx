"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EducationHero } from "@/components/education/EducationHero";
import { EducationRisk } from "@/components/education/EducationRisk";
import { EducationSolution } from "@/components/education/EducationSolution";
import { EducationCompliance } from "@/components/education/EducationCompliance";
import { EducationOutcomes } from "@/components/education/EducationOutcomes";
import { EducationUseCases } from "@/components/education/EducationUseCases";
import { EducationTestimonial } from "@/components/education/EducationTestimonial";
import { EducationCTA } from "@/components/education/EducationCTA";

export default function EducationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-[#1F2A44]">
      <Navbar />
      <main className="flex-1">
        <EducationHero />
        <EducationRisk />
        <EducationSolution />
        <EducationCompliance />
        <EducationOutcomes />
        <EducationUseCases />
        <EducationTestimonial />
        <EducationCTA />
      </main>
      <Footer />
    </div>
  );
}
