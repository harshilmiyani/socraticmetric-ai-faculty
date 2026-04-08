"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative bg-[#F1F5F9] w-full overflow-hidden border-t border-slate-200/60 pt-24 pb-12">
        {/* Animated Background UI */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Modern Dot Pattern */}
          <div className="absolute inset-0 bg-[#F1F5F9] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]"></div>
          
          {/* Fade mask so the top edge blends perfectly */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F1F5F9] via-[#F1F5F9]/50 to-transparent"></div>

          {/* Ambient Glowing Orbs */}
          <div className="absolute -bottom-[30%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[#3370F7]/10 blur-[120px]"></div>
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#F58022]/10 blur-[120px]"></div>
          <div className="absolute top-[20%] left-[40%] w-[800px] h-[800px] rounded-full bg-[#EAF1FE]/80 blur-[150px]"></div>
        </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-6 pr-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/img/logos/sm_nav_logo.svg" 
                alt="SocraticMetric" 
                width={200} 
                height={66} 
                className="w-auto h-12"
              />
            </Link>
            <p className="text-base text-[#85756F] font-medium leading-relaxed">
              Verifying authentic comprehension beyond AI-written submissions. Prove they know it. Not the document. Them.
            </p>
            <div className="flex gap-4 pt-2">
               {/* Social Icons Placeholder - replace with actual SVGs or lucide icons if you want them later */}
               <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#3370F7] hover:border-[#3370F7]/30 hover:shadow-md transition-all cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </div>
               <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 hover:shadow-md transition-all cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
               </div>
            </div>
          </div>
          
          <div className="lg:ml-auto">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-wider uppercase">Product</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Platform</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Science</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Patents</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Security</Link></li>
            </ul>
          </div>

          <div className="lg:ml-auto">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-wider uppercase">Solutions</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Higher Education</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Government</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Aerospace</Link></li>
            </ul>
          </div>

          <div className="lg:ml-auto">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-wider uppercase">Resources</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Documentation</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">White Papers</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Support</Link></li>
            </ul>
          </div>
          
           <div className="lg:ml-auto">
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">About</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Contact</Link></li>
              <li><Link href="#" className="hover:text-[#3370F7] hover:translate-x-1 inline-block transition-transform">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#85756F] font-medium">
          <p>&copy; {new Date().getFullYear()} Socratic Metric. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#1F2A44] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#1F2A44] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#1F2A44] transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
