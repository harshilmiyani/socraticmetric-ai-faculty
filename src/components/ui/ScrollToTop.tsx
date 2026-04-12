"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[100px] right-6 z-40 sm:bottom-[104px] sm:right-8"
          >
            <Button
              onClick={scrollToTop}
              className="rounded-full h-12 w-12 p-0 bg-[#3370F7] hover:bg-[#4C8FD6] shadow-lg shadow-[#3370F7]/30 border border-white/20"
              aria-label="Scroll to top"
            >
            <ArrowUp className="h-6 w-6 text-white" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
