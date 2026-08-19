"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-5 md:p-6 pointer-events-none"
        >
          <div className="mx-auto max-w-5xl pointer-events-auto relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white bg-white/95 shadow-2xl shadow-[#1F2A44]/[0.12] ring-1 ring-black/[0.06] backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] opacity-60"
              aria-hidden
            />

            <button
              type="button"
              onClick={handleDecline}
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full text-[#85756F] transition-colors hover:bg-[#F1F5F9] hover:text-[#1F2A44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3370F7]/30"
              aria-label="Dismiss and use necessary cookies only"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>

            <div className="relative flex flex-col gap-5 p-5 pt-6 sm:p-6 sm:pt-7 md:flex-row md:items-center md:gap-8 md:p-8">
              <div className="flex shrink-0 justify-center md:justify-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF1FE] to-[#F1F5F9] ring-1 ring-[#3370F7]/15 shadow-sm">
                  <Cookie className="h-6 w-6 text-[#3370F7]" strokeWidth={1.75} aria-hidden />
                </div>
              </div>

              <div className="min-w-0 flex-1 space-y-2 text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3370F7]">Cookies</p>
                <h3 className="font-sans text-lg font-bold tracking-tight text-[#1F2A44] sm:text-xl">
                  We value your privacy
                </h3>
                <p className="text-sm leading-relaxed text-[#85756F] sm:text-[0.9375rem]">
                  We use cookies to improve the site, understand traffic, and support a smoother experience. By choosing
                  &quot;Accept all&quot;, you agree to our use of cookies as described in our{" "}
                  <Link
                    href="/cookies"
                    className="font-semibold text-[#3370F7] underline decoration-[#3370F7]/30 underline-offset-2 transition-colors hover:text-[#4C8FD6] hover:decoration-[#4C8FD6]/40"
                  >
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#3370F7] underline decoration-[#3370F7]/30 underline-offset-2 transition-colors hover:text-[#4C8FD6] hover:decoration-[#4C8FD6]/40"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center md:w-auto md:flex-col md:gap-3 md:shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleAccept}
                  className="w-full rounded-full font-bold shadow-lg shadow-[#F58022]/20 sm:w-auto md:min-w-[11rem]"
                >
                  Accept all
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleDecline}
                  className="w-full rounded-full border-slate-200/90 font-semibold text-[#1F2A44] hover:bg-[#EAF1FE]/80 sm:w-auto md:min-w-[11rem]"
                >
                  Necessary only
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
