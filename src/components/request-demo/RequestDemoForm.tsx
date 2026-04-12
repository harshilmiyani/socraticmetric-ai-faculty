"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CALCOM_LINK = (process.env.NEXT_PUBLIC_CALCOM_BOOKING_URL || "")
  .replace(/^https?:\/\/cal\.com\//, "");

export function RequestDemoForm() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#3370F7",
            "cal-text": "#1F2A44",
            "cal-text-emphasis": "#1F2A44",
            "cal-border-subtle": "#e2e8f0",
          },
          dark: {
            "cal-brand": "#3370F7",
            "cal-text": "#1F2A44",
            "cal-text-emphasis": "#1F2A44",
            "cal-border-subtle": "#e2e8f0",
          },
        },
      });
    })();
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background UI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EAF1FE] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#3370F7]" />
            <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Live Scheduling</span>
            <div className="h-px w-12 bg-[#3370F7]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
            Book your live <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#F58022]">demonstration.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Pick a time that works for you and we'll walk you through how
            Socratic Metric fits your high-stakes workflows.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3370F7] to-[#F58022] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl shadow-[#3370F7]/10 border border-slate-100 relative">
            <Cal
              calLink={CALCOM_LINK}
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              config={{
                layout: "month_view",
                theme: "light",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
