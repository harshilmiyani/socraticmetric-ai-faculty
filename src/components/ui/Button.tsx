import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#F58022] text-white hover:bg-[#D16D1A] shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300",
    secondary: "bg-white text-[#1F2A44] hover:bg-slate-50 border border-slate-200 shadow-sm",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-[#1F2A44]",
    ghost: "hover:bg-orange-50 text-[#1F2A44] hover:text-[#F58022]",
    link: "text-[#F58022] underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
    icon: "h-10 w-10",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
}
