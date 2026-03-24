"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative bg-white w-full overflow-hidden border-t border-[#F5F5F5] pt-20 pb-10">
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/img/logos/sm_nav_logo.svg" 
                alt="SocraticMetric" 
                width={180} 
                height={60} 
                className="w-auto h-10"
              />
            </Link>
            <p className="text-sm text-[#85756F] font-medium">
              AI-Era Cognitive Verification
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm">Product</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Platform</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Science</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Patents</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm">Solutions</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Higher Education</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Government</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Aerospace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">White Papers</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Support</Link></li>
            </ul>
          </div>
          
           <div>
            <h4 className="font-bold text-[#1F2A44] mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-[#85756F] font-medium">
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-[#F58022] transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#EAF1FE]/60 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-[#85756F] font-medium">
          <p>&copy; {new Date().getFullYear()} Socratic Metric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
