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
    <section className="py-16 md:py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* Background UI Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#F1F5F9] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.2]" />
        {/* Glow behind the form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EAF1FE] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#3370F7] text-xs font-bold tracking-widest uppercase shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3370F7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3370F7]"></span>
            </span>
            Live Scheduling
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1F2A44] leading-[1.2]">
            Book your live <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3370F7] to-[#F58022]">demonstration.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#85756F] font-medium leading-relaxed max-w-2xl mx-auto">
            Pick a time that works for you and we&apos;ll walk you through how
            Socratic Metric fits your high-stakes workflows.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3370F7] to-[#F58022] rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-4 md:p-8 shadow-2xl shadow-black/5 border border-white relative">
            {/* Edge highlights for the form container */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3370F7]/50 to-transparent rounded-t-[2rem]" />
            
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
