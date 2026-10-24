"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Building,
  Shield,
  ArrowRight,
  Bot,
  Layers,
  Clock,
  ShieldCheck,
  Award,
  Mic,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import { motion, AnimatePresence } from "framer-motion";
import {
  SolutionsNavSideVisual,
  type SolutionsNavSideVariant,
} from "@/components/layout/SolutionsNavSideVisual";
import {
  NAVBAR_EDUCATION_LINKS,
  educationSolutionHref,
} from "@/lib/education-solutions";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const EDUCATION_ICONS_MAP: Record<
  string,
  {
    icon: React.ElementType;
    iconBg: string;
    badge?: string;
  }
> = {
  "ai-oral-exam-software": {
    icon: Bot,
    iconBg: "bg-blue-50 text-blue-600 border border-blue-200/60 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200",
    badge: "AI Moderated",
  },
  "oral-assessment-platform": {
    icon: GraduationCap,
    iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-200/60 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200",
    badge: "Core",
  },
  "scalable-oral-exams": {
    icon: Layers,
    iconBg: "bg-violet-50 text-violet-600 border border-violet-200/60 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-200",
  },
  "asynchronous-oral-assessment": {
    icon: Clock,
    iconBg: "bg-sky-50 text-sky-600 border border-sky-200/60 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200",
    badge: "Anytime",
  },
  "ai-resistant-assessment": {
    icon: ShieldCheck,
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-200/60 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200",
    badge: "Integrity",
  },
  "oral-defense-software": {
    icon: Award,
    iconBg: "bg-amber-50 text-amber-600 border border-amber-200/60 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200",
    badge: "Defenses",
  },
  "viva-voice-platform": {
    icon: Mic,
    iconBg: "bg-rose-50 text-rose-600 border border-rose-200/60 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-200",
  },
  "discussion-board-alternative": {
    icon: MessagesSquare,
    iconBg: "bg-teal-50 text-teal-600 border border-teal-200/60 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200",
    badge: "Engaging",
  },
};

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
        description: "Scale workforce readiness and compliance verification.",
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
];

function SolutionsMenuItem({ item }: { item: NavItem }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const children = item.children || [];
  const activeChild = children[hoveredIndex];
  const sideVariant: SolutionsNavSideVariant = activeChild?.sideKey ?? "education";
  const showEducationSubLinks = sideVariant === "education";

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent px-4 py-2 h-9 rounded-full text-sm font-semibold text-[#3D4A63] hover:text-[#3370F7] hover:bg-[#EAF1FE]/80 data-[state=open]:bg-[#EAF1FE]/80 data-[state=open]:text-[#3370F7] data-[active]:bg-transparent transition-all duration-300">
        {item.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div
          className={cn(
            "flex p-5",
            showEducationSubLinks ? "w-[680px]" : "w-[660px]",
          )}
        >
          {/* Sector Navigation Sidebar */}
          <ul className="w-[215px] shrink-0 space-y-1.5 border-r border-slate-100 pr-4">
            <div className="px-3 pb-1.5 pt-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Sectors
              </span>
            </div>
            {children.map((child, idx) => {
              const Icon = child.icon;
              const isSelected = hoveredIndex === idx;
              return (
                <li key={child.label} onMouseEnter={() => setHoveredIndex(idx)}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={child.href}
                      className={cn(
                        "group relative flex items-center justify-between gap-3 rounded-2xl p-3 leading-none no-underline outline-none transition-all duration-200",
                        isSelected
                          ? "bg-gradient-to-r from-[#EAF1FE] to-[#F1F5F9]/60 text-[#1D4ED8] shadow-xs border border-blue-100/90 font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900 border border-transparent font-medium"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <span className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-xl transition-colors shadow-2xs",
                            isSelected
                              ? "bg-[#2558D8] text-white"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                          )}>
                            <Icon className="h-4 w-4" />
                          </span>
                        )}
                        <span className="text-sm">{child.label}</span>
                      </div>
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-all duration-200",
                        isSelected ? "text-[#2558D8] opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                      )} />
                    </Link>
                  </NavigationMenuLink>
                </li>
              );
            })}
          </ul>

          {showEducationSubLinks ? (
            <div className="flex min-w-0 flex-1 flex-col pl-6">
              {/* Header Bar */}
              <div className="mb-3.5 flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 items-center rounded-md bg-blue-50 px-2.5 text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] border border-blue-100">
                    Higher Education
                  </span>
                  <span className="text-xs text-slate-500 font-medium">3 Solutions</span>
                </div>
                <NavigationMenuLink asChild>
                  <Link
                    href="/education"
                    className="group inline-flex items-center gap-1.5 rounded-full bg-slate-50 hover:bg-blue-50/80 border border-slate-200/80 hover:border-blue-200 px-3.5 py-1 text-xs font-bold text-[#1D4ED8] no-underline transition-all shadow-2xs hover:shadow-xs"
                  >
                    <span>Overview Page</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </NavigationMenuLink>
              </div>

              {/* Vertical list of solution cards */}
              <ul className="grid grid-cols-1 gap-2.5">
                {NAVBAR_EDUCATION_LINKS.map((subItem) => {
                  const meta = EDUCATION_ICONS_MAP[subItem.slug] || {
                    icon: GraduationCap,
                    iconBg: "bg-blue-50 text-blue-600 border border-blue-200/60 group-hover:bg-blue-600 group-hover:text-white",
                  };
                  const ItemIcon = meta.icon;
                  return (
                    <li key={subItem.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={educationSolutionHref(subItem.slug)}
                          className="group relative flex items-start gap-3 rounded-2xl border border-slate-100/80 bg-white/70 p-2.5 no-underline outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-gradient-to-br hover:from-blue-50/50 hover:via-white hover:to-indigo-50/30 hover:shadow-sm"
                        >
                          <div className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-2xs transition-all duration-200 group-hover:scale-105",
                            meta.iconBg
                          )}>
                            <ItemIcon className="h-4.5 w-4.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[13px] font-bold text-[#1F2A44] transition-colors group-hover:text-[#2558D8]">
                                {subItem.label}
                              </span>
                              {meta.badge && (
                                <span className="rounded-full bg-slate-100/80 group-hover:bg-blue-50 px-1.5 py-0.5 text-[9px] font-semibold text-slate-600 group-hover:text-[#1D4ED8] border border-slate-200/60 group-hover:border-blue-100 transition-colors">
                                  {meta.badge}
                                </span>
                              )}
                            </div>
                            <span className="mt-0.5 line-clamp-2 block text-[11px] leading-snug text-slate-500 group-hover:text-slate-600">
                              {subItem.description}
                            </span>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </ul>

              {/* Bottom Trust & Compliance Bar */}
              <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 font-medium text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    Canvas / LMS Integrated
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-slate-600">
                    <Shield className="h-3.5 w-3.5 text-blue-600" />
                    FERPA &amp; SOC-2 Ready
                  </span>
                </div>
                <NavigationMenuLink asChild>
                  <Link
                    href="/science"
                    className="font-bold text-[#1D4ED8] hover:text-[#1e40af] hover:underline inline-flex items-center gap-1"
                  >
                    Scientific Evidence &rarr;
                  </Link>
                </NavigationMenuLink>
              </div>
            </div>
          ) : (
            <div className="flex w-1/2 min-w-0 flex-col justify-center pl-6">
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
                    <p className="text-sm text-slate-600 leading-relaxed">{activeChild.description}</p>
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
          )}
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
      <header
        className={cn(
          "relative z-50 flex items-center justify-between transition-all duration-500",
          useSolidNav
            ? cn(
                "w-full max-w-6xl rounded-full border border-white/70 bg-white px-5 py-2.5 shadow-[0_8px_32px_rgb(15,23,42,0.08)] ring-1 ring-black/[0.06] md:bg-white/85 md:backdrop-blur-xl sm:px-6 sm:py-3",
                blogArticle && "md:bg-white/92 shadow-[0_12px_40px_rgb(15,23,42,0.12)] ring-black/[0.08]",
              )
            : "w-full max-w-full rounded-none border-b border-transparent bg-white/0 px-6 py-6 md:px-12",
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group mr-8" aria-label="SocraticMetric Home">
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
          type="button"
          className="md:hidden p-2 text-[#85756F] hover:text-[#F58022]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
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
                        <NavigationMenuTrigger className="bg-transparent px-4 py-2 h-9 rounded-full text-sm font-semibold text-[#3D4A63] hover:text-[#3370F7] hover:bg-[#EAF1FE]/80 data-[state=open]:bg-[#EAF1FE]/80 data-[state=open]:text-[#3370F7] data-[active]:bg-transparent transition-all duration-300">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[200px] gap-2 p-3">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href}
                                      className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-[#EAF1FE]/50 hover:text-[#3370F7] text-[#3D4A63] text-sm font-medium"
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
                        <Link href={item.href} className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-[#3D4A63] transition-all duration-300 hover:bg-[#EAF1FE]/80 hover:text-[#3370F7] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
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
              className="group inline-flex h-10 w-max items-center justify-center rounded-full bg-[#2558D8] px-6 py-2 text-sm font-bold text-white shadow-md shadow-[#2558D8]/20 transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-[#2558D8]/40 hover:-translate-y-0.5 active:scale-95"
            >
              Book a demo
            </Link>
          </div>
        )}
      </header>

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
              className="fixed inset-x-4 top-[88px] z-50 bg-white md:hidden flex flex-col border border-slate-200 ring-1 ring-white/50 shadow-2xl rounded-3xl max-h-[calc(100vh-110px)] overflow-hidden"
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
                        type="button"
                        onClick={() => toggleMobileExpand(item.label)}
                        className="p-2 text-[#85756F] hover:text-[#3370F7] bg-[#F5F5F5] hover:bg-[#EAF1FE] rounded-full transition-colors"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={mobileExpanded === item.label}
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
                            const isEducation = child.sideKey === "education";
                            return (
                              <div key={child.label} className="space-y-3">
                                <Link
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
                                      {child.description && !isEducation && (
                                        <span className="text-xs text-[#85756F] line-clamp-1 mt-0.5">{child.description}</span>
                                      )}
                                    </div>
                                  </div>
                                </Link>

                                {isEducation && (
                                  <div className="ml-4 mt-2 space-y-1.5 border-l-2 border-blue-100 pl-3">
                                    {NAVBAR_EDUCATION_LINKS.map((subItem) => {
                                      const meta = EDUCATION_ICONS_MAP[subItem.slug] || {
                                        icon: GraduationCap,
                                        iconBg: "bg-blue-50 text-blue-600 border border-blue-200/60",
                                      };
                                      const ItemIcon = meta.icon;
                                      return (
                                        <Link
                                          key={subItem.slug}
                                          href={educationSolutionHref(subItem.slug)}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-[#EAF1FE]/80 bg-slate-50/60 border border-slate-100/80"
                                        >
                                          <div className={cn(
                                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-2xs mt-0.5",
                                            meta.iconBg
                                          )}>
                                            <ItemIcon className="h-3.5 w-3.5" />
                                          </div>
                                          <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-1">
                                              <span className="block text-xs font-bold text-[#1F2A44]">
                                                {subItem.label}
                                              </span>
                                              {meta.badge && (
                                                <span className="rounded-full bg-blue-50 px-1 py-0.2 text-[8px] font-semibold text-[#1D4ED8]">
                                                  {meta.badge}
                                                </span>
                                              )}
                                            </div>
                                            <span className="mt-0.5 block text-[11px] leading-snug text-slate-500 line-clamp-1">
                                              {subItem.description}
                                            </span>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
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
                <div className="p-6 md:p-8 pt-4 bg-white border-t border-slate-100 shrink-0 z-10 w-full">
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
