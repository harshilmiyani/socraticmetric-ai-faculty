"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { 
  ChevronDown, 
  Activity, 
  Shield, 
  BarChart, 
  Users, 
  BookOpen, 
  FileText, 
  Globe, 
  Building,
  GraduationCap,
  Sparkles,
  Lock,
  Layout,
  Mic,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Navigation Data
const navItems = [
  {
    label: "Product",
    columns: [
      {
        title: "Platform",
        items: [
          { title: "Oral Assessment", desc: "Verify understanding with voice", icon: Mic, href: "#features" },
          { title: "AI Feedback", desc: "Instant, actionable critiques", icon: Sparkles, href: "#features" },
          { title: "Integrity Shield", desc: "Prevent AI plagiarism", icon: Shield, href: "#features" },
        ]
      },
      {
        title: "Features",
        items: [
          { title: "Analytics", desc: "Track student mastery", icon: BarChart, href: "#features" },
          { title: "LMS Integration", desc: "Canvas, Blackboard, etc.", icon: Layout, href: "#contact" },
          { title: "Security", desc: "SOC2 & FERPA Compliant", icon: Lock, href: "#contact" },
        ]
      }
    ]
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By Use Case",
        items: [
          { title: "Education", desc: "Universities & Colleges", icon: GraduationCap, href: "/education" },
          { title: "Government", desc: "Public Sector & Defense", icon: Building, href: "/government" },
          { title: "Businesses", desc: "Corporate Training & Hiring", icon: Users, href: "/business" },
        ]
      }
    ]
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        items: [
          { title: "Blog", desc: "Latest insights & news", icon: FileText, href: "/blog" },
          { title: "Resource Library", desc: "Tutorials, guides & docs", icon: BookOpen, href: "/resources" },
        ]
      }
    ]
  },
  {
    label: "Company",
    href: "/about" // Direct link, no dropdown
  },
  {
    label: "Pricing",
    href: "/pricing" // Direct link
  }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300", scrolled ? "pt-6 px-4" : "pt-0 px-0")}>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative flex items-center justify-between transition-all duration-300",
          scrolled 
            ? "px-6 py-3 rounded-full w-full max-w-5xl bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/50" 
            : "px-6 md:px-12 py-5 w-full max-w-full rounded-none bg-transparent border-transparent"
        )}
        onMouseLeave={() => setHoveredNav(null)}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group mr-8">
          <Image 
            src="/img/logo.png" 
            alt="SocraticMetric" 
            width={scrolled ? 180 : 220} 
            height={scrolled ? 60 : 75} 
            className={cn(
              "w-auto transition-all duration-300 group-hover:scale-105",
              scrolled ? "h-12" : "h-16"
            )}
            priority
          />
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-indigo-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.columns ? (
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    hoveredNav === item.label 
                      ? "text-indigo-600 bg-indigo-50" 
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  )}
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onClick={() => setHoveredNav(hoveredNav === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", hoveredNav === item.label ? "rotate-180" : "")} />
                </button>
              ) : (
                <Link 
                  href={item.href || "#"}
                  className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-full transition-colors"
                  onMouseEnter={() => setHoveredNav(null)}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {hoveredNav === item.label && item.columns && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-max min-w-[300px]"
                    onMouseEnter={() => setHoveredNav(item.label)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 overflow-hidden">
                      <div className="flex gap-8">
                        {item.columns.map((col, idx) => (
                          <div key={idx} className="flex-1 min-w-[200px]">
                            {col.title && (
                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                {col.title}
                              </h4>
                            )}
                            <ul className="space-y-3">
                              {col.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link 
                                    href={subItem.href}
                                    className="flex items-start gap-3 group/item p-2 rounded-lg hover:bg-slate-50 transition-colors"
                                  >
                                    <div className="mt-0.5 p-1.5 rounded-md bg-indigo-50 text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                                      <subItem.icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-slate-900 group-hover/item:text-indigo-700">
                                        {subItem.title}
                                      </p>
                                      <p className="text-xs text-slate-500 line-clamp-1">
                                        {subItem.desc}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center pl-8">
          <Link href="#contact">
            <Button size="sm" className="group relative overflow-hidden rounded-full px-6 h-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 border border-indigo-500/20">
              <span className="relative z-10 flex items-center gap-2">
                Book Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
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
            className="fixed inset-0 top-[80px] z-40 bg-white md:hidden overflow-y-auto"
          >
            <div className="p-6 space-y-6 pb-20">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-3">
                  {item.columns ? (
                    <div className="space-y-3">
                      <h3 className="font-bold text-slate-900 text-lg">{item.label}</h3>
                      <div className="pl-4 space-y-4">
                        {item.columns.map((col, idx) => (
                          <div key={idx} className="space-y-2">
                            {col.title && (
                              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                {col.title}
                              </h4>
                            )}
                            <ul className="space-y-3">
                              {col.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link 
                                    href={subItem.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 text-slate-600 hover:text-indigo-600"
                                  >
                                    <subItem.icon className="h-4 w-4" />
                                    <span>{subItem.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.href || "#"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-bold text-slate-900 text-lg hover:text-indigo-600"
                    >
                      {item.label}
                    </Link>
                  )}
                  <div className="h-px bg-slate-100 w-full" />
                </div>
              ))}
              <div className="pt-4">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full h-12 text-lg">
                    Book a Demo
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
