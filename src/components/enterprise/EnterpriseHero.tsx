"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function EnterpriseHero() {
  const [iframeHeightPx, setIframeHeightPx] = useState<number | null>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== window.location.origin) return;
      const data = e.data as { type?: string; height?: number } | null;
      if (data?.type === "sm-ent-hero" && typeof data.height === "number" && data.height > 0) {
        setIframeHeightPx(Math.min(Math.max(Math.round(data.height), 240), 2400));
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#F0F4F8] to-[#F8FAFC]">
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-[#3370F7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#F58022]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-6 max-w-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-[#3370F7]" />
              <span className="text-[#3370F7] font-bold text-sm tracking-widest uppercase">Enterprise</span>
              <div className="h-px w-8 bg-[#3370F7]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1F2A44] leading-[1.15]">
              When AI can draft the policy, <br />
              <span className="text-[#3370F7]">can your team reason through it?</span>
            </h1>

            <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-lg">
              AI-generated documents, policies, and reports can look polished without reflecting real understanding.
              Oral verification helps you confirm that employees and leaders can reason through what they&apos;re approving and acting on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact">
                <button className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-[#3370F7] px-8 text-base font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all hover:bg-[#4C8FD6] hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                  Talk to our team
                </button>
              </Link>
              <Link href="#how-it-works">
                <button className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-white border border-slate-200 px-8 text-base font-bold text-[#1F2A44] shadow-sm transition-all hover:border-[#3370F7]/30 hover:bg-[#EAF1FE]/50 hover:text-[#3370F7] hover:-translate-y-0.5 active:scale-95">
                  See how it works
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-[#3370F7] text-xs font-bold tracking-wide uppercase z-20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3370F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3370F7]" />
              </span>
              Policy oral check preview
            </motion.div>

            <div className="w-full max-w-full mx-auto">
              <iframe
                src="/animation/hero-enterprise-voice.html"
                className="w-full block border-0 bg-transparent"
                style={{
                  height: iframeHeightPx != null ? `${iframeHeightPx}px` : undefined,
                  minHeight: iframeHeightPx == null ? "min(52vh, 480px)" : undefined,
                }}
                title="SocraticMetric enterprise policy oral check — live preview"
                scrolling="no"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
