import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { IndustrySelectDialog } from "@/components/home/IndustrySelectDialog";
import { createPageMetadata } from "@/lib/site-metadata";
import { HomeJsonLd } from "@/components/seo/HomeJsonLd";

export const metadata = createPageMetadata({
  title: "SocraticMetric AI | Verify Authentic Understanding in the AI Era",
  description:
    "Written output is no longer proof of understanding. Socratic Metric™ verifies live cognition through oral assessment for education, enterprise, and government.",
  path: "/",
  absoluteTitle: true,
});

const Testimonials = dynamic(() =>
  import("@/components/home/sections/Testimonials").then((mod) => mod.Testimonials),
);
const LogoClouds = dynamic(() =>
  import("@/components/home/sections/LogoClouds").then((mod) => mod.LogoClouds),
);
const FaqSection = dynamic(() =>
  import("@/components/home/sections/FaqSection").then((mod) => mod.FaqSection),
);
const ContactSection = dynamic(() =>
  import("@/components/home/sections/ContactSection").then((mod) => mod.ContactSection),
);
const HowItWorks = dynamic(() =>
  import("@/components/home/sections/HowItWorks").then((mod) => mod.HowItWorks),
);
const HomePullQuote = dynamic(() =>
  import("@/components/home/sections/HomePullQuote").then((mod) => mod.HomePullQuote),
);
const HomeMission = dynamic(() =>
  import("@/components/home/sections/HomeMission").then((mod) => mod.HomeMission),
);
const HomePatents = dynamic(() =>
  import("@/components/home/sections/HomePatents").then((mod) => mod.HomePatents),
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F0F6FF] text-[#1F2A44] overflow-x-hidden font-sans">
      <Navbar />

      <main className="flex-1">
        <HomeJsonLd />
        <IndustrySelectDialog />
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
