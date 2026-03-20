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
        },
      });
    })();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#EAF6FF] to-[#F2F8FC] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1F2A44] leading-relaxed">
            Pick a time that works for you and we&apos;ll walk you through how
            Socratic Metric fits your high-stakes workflows.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 md:p-8 shadow-xl shadow-blue-100/40 border border-slate-100 overflow-hidden">
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
    </section>
  );
}
