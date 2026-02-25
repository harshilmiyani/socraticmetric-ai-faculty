"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const industries = [
  { id: "all", label: "All", href: "/" },
  { id: "education", label: "Education", href: "/education" },
  { id: "government", label: "Government", href: "/government" },
  { id: "business", label: "Business", href: "/business" },
];

export function IndustrySelector() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-2 pb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <span className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
        Select your industry:
      </span>
      
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {industries.map((industry) => {
          const isActive = pathname === industry.href;
          
          return (
            <Link key={industry.id} href={industry.href}>
              <div
                className={cn(
                  "relative px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-200 border border-slate-300",
                  isActive 
                    ? "bg-[#0F2C4C] text-white border-[#0F2C4C] shadow-md" 
                    : "bg-white text-slate-600 hover:border-[#FF6B35] hover:text-[#FF6B35]"
                )}
              >
                {industry.label.toUpperCase()}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
