"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhyItMattersHero } from "@/components/why-it-matters/WhyItMattersHero";
import { VerificationGap } from "@/components/why-it-matters/VerificationGap";
import { HowPlatformWorks } from "@/components/why-it-matters/HowPlatformWorks";
import { ProvenResults } from "@/components/why-it-matters/ProvenResults";
import { WhoNeedsIt } from "@/components/why-it-matters/WhoNeedsIt";
import { WhyItMattersCTA } from "@/components/why-it-matters/WhyItMattersCTA";

export default function WhyItMattersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-[#1F2A44]">
      <Navbar />
      <main className="flex-1">
        <WhyItMattersHero />
        <VerificationGap />
        <HowPlatformWorks />
        <ProvenResults />
        <WhoNeedsIt />
        <WhyItMattersCTA />
      </main>
      <Footer />
    </div>
  );
}
