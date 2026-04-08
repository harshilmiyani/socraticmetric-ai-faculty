"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a small delay
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#163460]/95  p-6 shadow-2xl border border-slate-700/50 text-slate-50 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-white">We value your privacy</h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                We use cookies to enhance your experience, analyze site traffic, and deliver personalized content. 
                By clicking "Accept All", you consent to our use of cookies. 
                Read our <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Privacy Policy</Link> to learn more.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                onClick={handleDecline}
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white whitespace-nowrap"
              >
                Necessary Only
              </Button>
              <Button 
                onClick={handleAccept}
                className="bg-indigo-600 hover:bg-indigo-700 text-white whitespace-nowrap shadow-lg shadow-indigo-900/20"
              >
                Accept All
              </Button>
            </div>
            
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 md:hidden text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
