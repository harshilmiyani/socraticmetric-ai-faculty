"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Science", href: "#science" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "About", href: "#about" },
  { label: "Patents", href: "#patents" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300", scrolled ? "pt-4 px-4" : "pt-0 px-0")}>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative flex items-center justify-between transition-all duration-300",
          scrolled 
            ? "px-6 py-3 rounded-full w-full max-w-6xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/40 ring-1 ring-white/50" 
            : "px-6 md:px-12 py-6 w-full max-w-full rounded-none bg-white/0 border-b border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group mr-8">
          <Image 
            src="/img/logos/sm_nav_logo.svg" 
            alt="SocraticMetric" 
            width={220} 
            height={70} 
            className="w-auto h-10 md:h-12 transition-all duration-300"
            priority
          />
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-[#FF6B35]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-[#FF6B35] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center pl-4">
          <Link href="#contact">
            <Button size="sm" className="rounded-full px-6 h-10 bg-[#3b82f6] text-white hover:bg-blue-600 shadow-md transition-all duration-300 font-medium">
              Request Demo
            </Button>
          </Link>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[80px] z-40 bg-white md:hidden overflow-y-auto border-t border-slate-100"
          >
            <div className="p-6 space-y-6 pb-20">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-bold text-slate-900 text-lg hover:text-[#FF6B35]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full h-12 text-lg bg-[#3b82f6] hover:bg-blue-600">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
