"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RequestDemoHero } from "@/components/request-demo/RequestDemoHero";
import { RequestDemoForm } from "@/components/request-demo/RequestDemoForm";

export default function RequestDemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9] font-sans text-[#1F2A44] selection:bg-[#F58022]/20 selection:text-[#1F2A44]">
      <Navbar />
      <main className="flex-1">
        <RequestDemoHero />
        <RequestDemoForm />
      </main>
      <Footer />
    </div>
  );
}
