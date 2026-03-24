"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ModernBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full overflow-hidden bg-white", className)}>
      {/* Animated Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#EAF1FE] blur-[120px] animate-[blob_20s_infinite_alternate]" />
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#EAF1FE]/80 blur-[120px] animate-[blob_25s_infinite_alternate_reverse]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#F58022]/10 blur-[120px] animate-[blob_22s_infinite_alternate]" />
      </div>

      {/* Grid Pattern with Aceternity style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
