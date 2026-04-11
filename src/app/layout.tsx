import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ChatBotWidget } from "@/components/chatbot/ChatBotWidget";

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
        "min-h-screen bg-[#F5F5F5] font-sans antialiased selection:bg-[#F58022]/20 selection:text-[#1F2A44]",
        inter.variable,
        playfair.variable
      )}>
        {children}
        <LoadingScreen />
        <ScrollToTop />
        <CookieConsent />
        <ChatBotWidget />
      </body>
    </html>
  );
}
