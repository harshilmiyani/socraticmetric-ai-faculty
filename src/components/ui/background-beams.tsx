"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Skip entirely on mobile
    if (window.innerWidth < 768) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) render();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const isTablet = window.innerWidth < 1024;
    const particleCount = isTablet ? 20 : 50;
    const particles: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 1 + Math.random() * 3,
        length: 20 + Math.random() * 80,
        opacity: Math.random() * 0.5,
      });
    }

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(51, 112, 247, 0.05)");
      gradient.addColorStop(1, "rgba(245, 128, 34, 0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 1;
      
      particles.forEach((p) => {
        p.y -= p.speed;
        
        if (p.y < -100) {
          p.y = height + 100;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        const lineGradient = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.length);
        lineGradient.addColorStop(0, `rgba(51, 112, 247, 0)`);
        lineGradient.addColorStop(0.5, `rgba(51, 112, 247, ${p.opacity})`);
        lineGradient.addColorStop(1, `rgba(51, 112, 247, 0)`);
        
        ctx.strokeStyle = lineGradient;
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.length);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 z-0 opacity-50 pointer-events-none", className)}
    />
  );
};
