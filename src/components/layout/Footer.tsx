"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#F1F5F9] w-full overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 text-[#85756F]">
      {/* Animated Background UI */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Modern Dot Pattern */}
        <div className="absolute inset-0 bg-[#F1F5F9] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>
        
        {/* Fade mask so the top edge blends perfectly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent"></div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute -bottom-[30%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[#3370F7]/10 blur-[120px]"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#F58022]/10 blur-[120px]"></div>
        <div className="absolute top-[20%] left-[40%] w-[800px] h-[800px] rounded-full bg-[#EAF1FE]/80 blur-[150px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8 pr-0 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/img/logos/sm_nav_logo.svg" 
                alt="SocraticMetric" 
                width={200} 
                height={66} 
                className="w-auto h-10 sm:h-12"
              />
            </Link>
            <p className="text-base text-[#85756F] leading-relaxed font-medium max-w-sm">
              Verifying authentic comprehension beyond AI-written submissions. Prove they know it. Not the document. Them.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#85756F]">
                <MapPin className="w-4 h-4 text-[#3370F7]" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#85756F]">
                <Mail className="w-4 h-4 text-[#3370F7]" />
                <a href="mailto:support@socraticmetric.ai" className="hover:text-[#3370F7] transition-colors">support@socraticmetric.ai</a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a href="https://www.linkedin.com/company/socratic-metric/" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#3370F7] hover:text-white hover:border-[#3370F7] transition-all duration-300 shadow-sm hover:shadow-md">
                  <Linkedin className="w-4 h-4" />
               </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-widest uppercase">Product</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="/#how-it-works" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Platform</Link></li>
              <li><Link href="/why-it-matters" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Science</Link></li>
              <li><Link href="/patents" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Patents</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-widest uppercase">Solutions</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="/education" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Higher Education</Link></li>
              <li><Link href="/enterprise" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Enterprise</Link></li>
              <li><Link href="/government" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Government</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-widest uppercase">Resources</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="/blog" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Blog & Insights</Link></li>
              <li><Link href="#contact" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Support</Link></li>
            </ul>
          </div>
          
           <div className="lg:col-span-2">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="/about" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
              <li><Link href="/about" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Careers</Link></li>
              <li><Link href="/request-demo" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#85756F] font-medium">
          <p>&copy; {new Date().getFullYear()} Socratic Metric. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/privacy" className="hover:text-[#1F2A44] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1F2A44] transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-[#1F2A44] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
