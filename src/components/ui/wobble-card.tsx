"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) rotateX(${mousePosition.y * -0.6}deg) rotateY(${mousePosition.x * 0.6}deg)`
          : "translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)",
        transition: isHovering ? "none" : "all 0.5s ease-out",
      }}
      className={cn(
        "relative rounded-3xl overflow-hidden bg-white border border-slate-100 text-[#1F2A44] shadow-sm w-full",
        containerClassName
      )}
    >
      <div
        style={{
          transform: isHovering
            ? `translate3d(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px, 0)`
            : "translate3d(0px, 0px, 0)",
          transition: isHovering ? "none" : "all 0.5s ease-out",
        }}
        className={cn("h-full px-6 py-8 md:px-10 md:py-12", className)}
      >
        {children}
      </div>
    </motion.div>
  );
};
