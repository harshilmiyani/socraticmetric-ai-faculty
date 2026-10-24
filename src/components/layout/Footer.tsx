import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { REQUEST_DEMO_BOOKING_HREF } from "@/lib/urls";
import {
  EDUCATION_SOLUTION_LINKS,
  educationSolutionHref,
} from "@/lib/education-solutions";

export function Footer() {
  return (
    <footer className="relative bg-[#F1F5F9] w-full overflow-hidden pt-16 pb-10 sm:pt-20 sm:pb-12 text-[#85756F]">
      {/* Animated Background UI */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Modern Dot Pattern */}
        <div className="absolute inset-0 bg-[#F1F5F9] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>
        
        {/* Fade mask so the top edge blends perfectly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6 pr-0 lg:pr-6">
            <Link href="/" className="inline-block" aria-label="SocraticMetric Home">
              <Image 
                src="/img/logos/sm_nav_logo.svg" 
                alt="SocraticMetric" 
                width={200} 
                height={66} 
                className="w-auto h-10 sm:h-12"
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-sm">
              Verifying authentic comprehension beyond AI-written submissions. Prove they know it. Not the document. Them.
            </p>
            
            <div className="space-y-3 pt-1 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#3370F7] shrink-0" aria-hidden="true" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3370F7] shrink-0" aria-hidden="true" />
                <a href="mailto:support@socraticmetric.ai" className="hover:text-[#3370F7] transition-colors font-medium">
                  support@socraticmetric.ai
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://www.linkedin.com/company/socratic-metric/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="SocraticMetric on LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#3370F7] hover:text-white hover:border-[#3370F7] transition-all duration-300 shadow-2xs hover:shadow-xs"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Education Solutions Columns (Span 5: Split into 2 sub-columns) */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/80">
              <p className="font-bold text-[#1F2A44] text-xs tracking-widest uppercase">
                Higher Education Solutions
              </p>
              <Link
                href="/education"
                className="text-xs font-bold text-[#3370F7] hover:underline"
              >
                Overview &rarr;
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              {EDUCATION_SOLUTION_LINKS.map((item) => (
                <div key={item.slug}>
                  <Link 
                    href={educationSolutionHref(item.slug)} 
                    className="hover:text-[#3370F7] hover:translate-x-0.5 inline-block transition-all duration-200 leading-snug"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors & Company */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-[#1F2A44] mb-4 text-xs tracking-widest uppercase">Sectors</p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                <li>
                  <Link href="/education" className="hover:text-[#3370F7] transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="hover:text-[#3370F7] transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/government" className="hover:text-[#3370F7] transition-colors">
                    Government
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-[#1F2A44] mb-4 text-xs tracking-widest uppercase">Explore</p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                <li>
                  <Link href="/science" className="hover:text-[#3370F7] transition-colors">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="/why-it-matters" className="hover:text-[#3370F7] transition-colors">
                    Why It Matters
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#3370F7] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#3370F7] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={REQUEST_DEMO_BOOKING_HREF} className="hover:text-[#3370F7] transition-colors">
                    Book a Demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Socratic Metric. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="hover:text-[#1F2A44] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1F2A44] transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-[#1F2A44] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
