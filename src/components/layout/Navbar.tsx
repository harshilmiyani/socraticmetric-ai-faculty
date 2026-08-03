"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { Menu, X, ChevronDown, GraduationCap, Building, Shield, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { motion, AnimatePresence } from "framer-motion";
import {
  SolutionsNavSideVisual,
  type SolutionsNavSideVariant,
} from "@/components/layout/SolutionsNavSideVisual";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: React.ElementType;
    sideKey?: SolutionsNavSideVariant;
  }[];
};

const navItems: NavItem[] = [
  { 
    label: "Solutions", 
    href: "#solutions",
    children: [
      {
        label: "Education",
        href: "/education",
        description: "Verify authentic comprehension beyond AI-written submissions.",
        icon: GraduationCap,
        sideKey: "education",
      },
      {
        label: "Enterprise",
        href: "/enterprise",
        description: "Ensure your workforce can articulate critical policies and procedures.",
        icon: Building,
        sideKey: "enterprise",
      },
      {
        label: "Government",
        href: "/government",
        description: "Verify operator competency under high-stakes conditions.",
        icon: Shield,
        sideKey: "government",
      },
    ]
  },
  { label: "Science", href: "/science" },
  { label: "Why it matters", href: "/why-it-matters" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Patents", href: "/patents" },
];

function SolutionsMenuItem({ item }: { item: NavItem }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const children = item.children || [];
  const activeChild = children[hoveredIndex];
  const sideVariant: SolutionsNavSideVariant = activeChild?.sideKey ?? "education";

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent px-4 py-2 h-9 rounded-full text-sm font-semibold text-[#85756F] hover:text-[#3370F7] hover:bg-[#EAF1FE]/80 data-[state=open]:bg-[#EAF1FE]/80 data-[state=open]:text-[#3370F7] data-[active]:bg-transparent transition-all duration-300">
        {item.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="flex w-[640px] p-4 bg-white/90 backdrop-blur-xl border border-white/40 ring-1 ring-white/50 rounded-2xl shadow-xl">
          <ul className="w-1/2 space-y-2 border-r border-slate-100 pr-4">
            {children.map((child, idx) => {
              const Icon = child.icon;
              return (
                <li key={child.label} onMouseEnter={() => setHoveredIndex(idx)}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={child.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-300",
                        hoveredIndex === idx ? "bg-[#EAF1FE]/80 text-[#3370F7] shadow-sm" : "text-[#85756F] hover:bg-[#EAF1FE]/50 hover:text-[#3370F7]"
                      )}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      <span className="text-sm font-medium">{child.label}</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              );
            })}
          </ul>
          <div className="w-1/2 pl-5 flex flex-col justify-center min-w-0">
            {activeChild && (
              <motion.div
                key={activeChild.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                <SolutionsNavSideVisual variant={sideVariant} />
                <div>
                  <h4 className="text-base font-bold text-[#1F2A44] mb-2">{activeChild.label}</h4>
                  <p className="text-sm text-[#85756F] leading-relaxed">{activeChild.description}</p>
                </div>
                <NavigationMenuLink asChild>
                  <Link
                    href={activeChild.href}
                    className="text-[#3370F7] font-bold text-sm flex items-center gap-2 group transition-all w-fit bg-[#EAF1FE]/80 hover:bg-[#EAF1FE] hover:shadow-sm px-5 py-2.5 rounded-full border border-transparent hover:border-[#3370F7]/20"
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </NavigationMenuLink>
              </motion.div>
            )}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

/** Blog posts (not /blog index) often use a full-bleed hero — keep nav on a solid bar so links stay readable. */
function isBlogArticlePath(pathname: string | null): boolean {
  if (!pathname) return false;
  return /^\/blog\/[^/]+/.test(pathname);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const blogArticle = isBlogArticlePath(pathname);
  const useSolidNav = scrolled || mobileMenuOpen || blogArticle;
  const hideRequestDemoNavCta = pathname === "/request-demo";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };


  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-[60] flex justify-center transition-all duration-300",
        useSolidNav ? "px-4 pt-4" : "px-0 pt-0",
      )}
    >
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative z-50 flex items-center justify-between transition-all duration-500",
          useSolidNav
            ? cn(
                "w-full max-w-6xl rounded-full border border-white/70 bg-white/85 px-5 py-2.5 shadow-[0_8px_32px_rgb(15,23,42,0.08)] ring-1 ring-black/[0.06] backdrop-blur-xl sm:px-6 sm:py-3",
                blogArticle && "bg-white/92 shadow-[0_12px_40px_rgb(15,23,42,0.12)] ring-black/[0.08]",
              )
            : "w-full max-w-full rounded-none border-b border-transparent bg-white/0 px-6 py-6 md:px-12",
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
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => {
                if (item.label === "Solutions") {
                  return <SolutionsMenuItem key={item.label} item={item} />;
                }
                return (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent px-4 py-2 h-9 rounded-full text-sm font-semibold text-[#85756F] hover:text-[#3370F7] hover:bg-[#EAF1FE]/80 data-[state=open]:bg-[#EAF1FE]/80 data-[state=open]:text-[#3370F7] data-[active]:bg-transparent transition-all duration-300">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-2 p-3 bg-white/90 backdrop-blur-xl border border-white/40 ring-1 ring-white/50 rounded-2xl shadow-xl">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href}
                                      className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-[#EAF1FE]/50 hover:text-[#3370F7] text-[#85756F] text-sm font-medium"
                                    >
                                    {child.label}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link href={item.href} className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-[#85756F] transition-all duration-300 hover:bg-[#EAF1FE]/80 hover:text-[#3370F7] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {!hideRequestDemoNavCta && (
          <div className="hidden md:flex items-center pl-4">
            <Link
              href={REQUEST_DEMO_BOOKING_HREF}
              className="group inline-flex h-10 w-max items-center justify-center rounded-full bg-[#3370F7] px-6 py-2 text-sm font-bold text-white shadow-md shadow-[#3370F7]/20 transition-all duration-300 hover:bg-[#4C8FD6] hover:shadow-lg hover:shadow-[#3370F7]/40 hover:-translate-y-0.5 active:scale-95"
            >
              Book a demo
            </Link>
          </div>
        )}
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-4 top-[88px] z-50 bg-white/90 backdrop-blur-2xl md:hidden flex flex-col border border-white/50 ring-1 ring-white/50 shadow-2xl rounded-3xl max-h-[calc(100vh-110px)] overflow-hidden"
            >
              <div className="p-6 md:p-8 space-y-4 max-w-sm mx-auto w-full overflow-y-auto flex-1 pb-8">
                {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link 
                      href={item.href}
                      onClick={(e) => {
                        if (item.children) {
                          e.preventDefault();
                          toggleMobileExpand(item.label);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="block font-bold text-[#1F2A44] text-xl hover:text-[#3370F7] transition-colors py-2 w-full"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button 
                        onClick={() => toggleMobileExpand(item.label)}
                        className="p-2 text-[#85756F] hover:text-[#3370F7] bg-[#F5F5F5] hover:bg-[#EAF1FE] rounded-full transition-colors"
                      >
                        <ChevronDown className={cn("w-5 h-5 transition-transform", mobileExpanded === item.label ? "rotate-180" : "")} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Items */}
                  <AnimatePresence>
                    {item.children && mobileExpanded === item.label && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-4 border-l-2 border-[#EAF1FE] ml-2 mt-2 py-2">
                          {item.children.map((child) => {
                            const Icon = child.icon;
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block group"
                              >
                                <div className="flex items-center gap-3">
                                  {Icon && (
                                    <div className="flex-shrink-0 h-8 w-8 rounded-md bg-[#F5F5F5] group-hover:bg-[#EAF1FE] text-[#85756F] group-hover:text-[#3370F7] flex items-center justify-center transition-colors">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                  )}
                                  <div className="flex flex-col">
                                    <span className="font-semibold text-[#1F2A44] group-hover:text-[#F58022] transition-colors">{child.label}</span>
                                    {child.description && (
                                      <span className="text-xs text-[#85756F] line-clamp-1 mt-0.5">{child.description}</span>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              </div>
              {!hideRequestDemoNavCta && (
                <div className="p-6 md:p-8 pt-4 bg-white/80 backdrop-blur-lg border-t border-white/50 shrink-0 z-10 w-full">
                  <div className="max-w-sm mx-auto">
                    <Link
                      href={REQUEST_DEMO_BOOKING_HREF}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex w-full h-12 items-center justify-center rounded-full bg-[#3370F7] px-8 text-base font-bold text-white shadow-lg shadow-[#3370F7]/30 transition-all duration-300 hover:bg-[#4C8FD6] hover:shadow-xl hover:shadow-[#3370F7]/50 active:scale-95"
                    >
                      Book a demo
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
