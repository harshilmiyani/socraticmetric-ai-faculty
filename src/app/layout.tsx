import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "SocraticMetric AI | Authentic Assessment Platform",
  description: "Secure, oral-assessment platform for the AI era. Verify student understanding through real-time verbal discussion and feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-slate-50 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900",
        inter.variable,
        playfair.variable
      )}>
        {children}
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
