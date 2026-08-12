import React from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight highlight wrapper for hero keywords.
 * Pure CSS (no animation loops) so it adds zero main-thread work —
 * important since it renders above the fold on mobile.
 */
export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className="group/cover relative inline-block rounded-lg bg-[#EAF1FE] px-2 py-2 transition-colors duration-200 hover:bg-[#F58022]/10">
      <span
        className={cn(
          "relative z-20 inline-block text-[#3370F7] transition-colors duration-200 group-hover/cover:text-[#F58022]",
          className
        )}
      >
        {children}
      </span>
      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" />
    </span>
  );
};

export const CircleIcon = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "pointer-events-none absolute h-2 w-2 animate-pulse rounded-full bg-[#3370F7]/40 opacity-20 group-hover/cover:bg-[#F58022] group-hover/cover:opacity-100",
        className
      )}
    />
  );
};
