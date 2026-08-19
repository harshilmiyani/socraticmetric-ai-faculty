"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { GraduationCap, Building2, Shield, ArrowRight, X } from "lucide-react";

const industries = [
  {
    id: "education",
    label: "Education",
    href: "/education",
    icon: GraduationCap,
    tagline: "Universities, Schools & Training",
    description: "Verify that students truly understand their subject matter—not just generate AI essays.",
    gradient: "from-[#3370F7]/10 to-[#3370F7]/5",
    border: "border-[#3370F7]/20 hover:border-[#3370F7]/50",
    iconBg: "bg-[#3370F7]/10",
    iconColor: "text-[#3370F7]",
    hoverShadow: "hover:shadow-[#3370F7]/10",
    arrowColor: "text-[#3370F7]",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    href: "/enterprise",
    icon: Building2,
    tagline: "Corporate & Business Teams",
    description: "Ensure your team can defend compliance decisions and demonstrate genuine expertise.",
    gradient: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-400/20 hover:border-emerald-400/50",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    hoverShadow: "hover:shadow-emerald-500/10",
    arrowColor: "text-emerald-600",
  },
  {
    id: "government",
    label: "Government",
    href: "/government",
    icon: Shield,
    tagline: "Public Sector & Agencies",
    description: "Mission-critical readiness assurance. Verify operators can perform under real pressure.",
    gradient: "from-rose-500/10 to-rose-500/5",
    border: "border-rose-400/20 hover:border-rose-400/50",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
    hoverShadow: "hover:shadow-rose-500/10",
    arrowColor: "text-rose-600",
  },
];

const STORAGE_KEY = "sm-industry-dialog-seen";

export function IndustrySelectDialog() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage unavailable — skip dialog
      return;
    }

    const timer = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(timer);
  }, []);

  function markSeen() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore write failures
    }
  }

  function handleSelect(href: string) {
    markSeen();
    setOpen(false);
    setTimeout(() => router.push(href), 200);
  }

  function handleDismiss() {
    markSeen();
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0a0f1e]/70"
            onClick={handleDismiss}
          />

          {/* Dialog — bottom sheet on mobile, centered modal on sm+ */}
          <div className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center pointer-events-none">
            <motion.div
              key="dialog"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 110, damping: 18 }}
              className="pointer-events-auto w-full sm:max-w-xl md:max-w-2xl bg-[#F0F6FF] sm:rounded-3xl rounded-t-3xl shadow-2xl shadow-black/25 border border-[#3370F7]/10 overflow-hidden"
            >
              {/* Header */}
              <div className="relative px-5 sm:px-8 pt-5 sm:pt-8 pb-4 sm:pb-6 text-center">
                {/* Mobile drag handle */}
                <div className="sm:hidden w-10 h-1 rounded-full bg-slate-200 mx-auto mb-4" />

                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  aria-label="Close industry selector"
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all duration-200 active:scale-95"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                </button>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3370F7]/8 border border-[#3370F7]/15 text-[#3370F7] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F58022] animate-pulse" />
                  Welcome to Socratic Metric
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2A44] leading-tight">
                  Who are you verifying for?
                </h2>
                <p className="mt-1.5 sm:mt-2 text-slate-500 text-xs sm:text-sm max-w-sm mx-auto">
                  Select your industry to explore your tailored solution.
                </p>
              </div>

              {/* Industry options — vertical stack on ALL screen sizes */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 flex flex-col gap-3">
                {industries.map((ind, idx) => (
                  <motion.button
                    key={ind.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.07 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(ind.href)}
                    className={`group w-full text-left rounded-2xl border bg-gradient-to-br ${ind.gradient} ${ind.border} transition-all duration-250 shadow-sm hover:shadow-lg ${ind.hoverShadow} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#3370F7] active:scale-[0.99]`}
                  >
                    <div className="flex items-center gap-4 px-4 py-3.5 sm:px-5 sm:py-4">
                      {/* Icon */}
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${ind.iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                        <ind.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${ind.iconColor}`} />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">{ind.tagline}</p>
                        <h3 className="font-bold text-[#1F2A44] text-base sm:text-lg leading-tight">{ind.label}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-0.5 hidden sm:block">{ind.description}</p>
                      </div>

                      {/* Arrow */}
                      <div className={`shrink-0 w-8 h-8 rounded-full ${ind.iconBg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                        <ArrowRight className={`w-4 h-4 ${ind.arrowColor} transition-transform duration-300 group-hover:translate-x-0.5`} strokeWidth={2.5} />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer dismiss */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-7 pt-1 flex justify-center border-t border-slate-100">
                <button
                  onClick={handleDismiss}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors duration-200 group py-2.5 px-5 rounded-full hover:bg-slate-50 active:scale-95 mt-3"
                >
                  <span className="w-4 h-4 rounded-full border border-slate-300 group-hover:border-slate-400 flex items-center justify-center transition-colors duration-200 shrink-0">
                    <X className="w-2.5 h-2.5" strokeWidth={2.5} />
                  </span>
                  I'm in a different industry
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
