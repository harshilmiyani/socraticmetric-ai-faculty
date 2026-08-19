import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { HowItWorks } from "@/components/home/sections/HowItWorks";
import { HomePullQuote } from "@/components/home/sections/HomePullQuote";
import { LogoClouds } from "@/components/home/sections/LogoClouds";
import { HomeMission } from "@/components/home/sections/HomeMission";
import { HomePatents } from "@/components/home/sections/HomePatents";
import { Testimonials } from "@/components/home/sections/Testimonials";
import { FaqSection } from "@/components/home/sections/FaqSection";
import { ContactSection } from "@/components/home/sections/ContactSection";
// Temporarily disabled — re-enable for first-visit industry selector popup
// import { IndustrySelectDialog } from "@/components/home/IndustrySelectDialog";
import { createPageMetadata } from "@/lib/site-metadata";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

export const metadata = createPageMetadata({
  title: "SocraticMetric AI | Verify Authentic Understanding in the AI Era",
  description:
    "Written output is no longer proof of understanding. Socratic Metric™ verifies live cognition through oral assessment for education, enterprise, and government.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F0F6FF] text-[#1F2A44] overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-1">
        <HomeJsonLd />
        {/* <IndustrySelectDialog /> */}
        <HeroSection />
        <HowItWorks />
        <HomePullQuote />
        <LogoClouds />
        <HomeMission />
        <HomePatents />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
