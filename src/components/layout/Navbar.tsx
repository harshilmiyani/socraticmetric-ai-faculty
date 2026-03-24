"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { 
    label: "Solutions", 
    href: "#solutions",
    children: [
      { label: "Education", href: "/education" },
      { label: "Enterprise", href: "/enterprise" },
      { label: "Government", href: "/government" }
    ]
  },
  { label: "Science", href: "#science" },
  { label: "Why it matters", href: "/why-it-matters" },
  { label: "About", href: "#about" },
  { label: "Patents", href: "#patents" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };


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
          className="md:hidden p-2 text-[#85756F] hover:text-[#F58022]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-[#85756F] hover:text-[#F58022] transition-colors py-2"
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
              </Link>
              
              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 min-w-[200px]">
                  <div className="bg-white rounded-xl shadow-xl border border-[#F5F5F5] overflow-hidden p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-[#85756F] hover:text-[#F58022] hover:bg-[#F5F5F5] rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center pl-4">
          <Link href="/request-demo">
            <Button size="sm" className="rounded-full px-6 h-10 bg-[#F58022] text-white hover:bg-[#D16D1A] shadow-md transition-all duration-300 font-medium">
              Request a Demo
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
            className="fixed inset-0 top-[80px] z-40 bg-white md:hidden overflow-y-auto border-t border-[#F5F5F5]"
          >
            <div className="p-6 space-y-6 pb-20">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Link 
                      href={item.href}
                      onClick={() => !item.children && setMobileMenuOpen(false)}
                      className="block font-bold text-[#1F2A44] text-lg hover:text-[#F58022]"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button 
                        onClick={() => toggleMobileExpand(item.label)}
                        className="p-1 text-[#85756F] hover:text-[#F58022]"
                      >
                        <ChevronDown className={cn("w-5 h-5 transition-transform", mobileExpanded === item.label ? "rotate-180" : "")} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Items */}
                  {item.children && mobileExpanded === item.label && (
                    <div className="pl-4 space-y-3 border-l-2 border-[#F5F5F5] ml-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-medium text-[#85756F] text-base hover:text-[#F58022]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/request-demo" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full h-12 text-lg bg-[#F58022] hover:bg-[#D16D1A]">
                    Request a Demo
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
