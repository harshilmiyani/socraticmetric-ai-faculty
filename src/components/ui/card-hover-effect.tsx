"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: React.ElementType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 w-full lg:max-w-none max-w-sm mx-auto md:max-w-3xl",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#EAF1FE] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="h-12 w-12 rounded-lg bg-[#EAF1FE]/80 flex items-center justify-center mb-6 text-[#3370F7] group-hover:scale-110 transition-transform duration-300">
              <item.icon className="h-6 w-6" />
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="mt-6 text-[#3370F7] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <ArrowRight className="h-4 w-4" />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-8 overflow-hidden bg-white/60 backdrop-blur-lg border border-white/60 shadow-lg group-hover:shadow-xl transition-all duration-300 ring-1 ring-white/50 relative z-20 flex flex-col items-start text-left",
        className
      )}
    >
      <div className="relative z-50 flex flex-col flex-grow w-full">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-xl font-bold mb-3 text-[#1F2A44]", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-[#85756F] leading-relaxed flex-grow",
        className
      )}
    >
      {children}
    </p>
  );
};
