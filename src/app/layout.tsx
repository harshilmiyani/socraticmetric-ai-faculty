import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ChatbaseWidget } from "@/components/chatbot/ChatbaseWidget";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { rootMetadata } from "@/lib/site-metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = rootMetadata;

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
        <SiteJsonLd />
        {children}
        <LoadingScreen />
        <ScrollToTop />
        <CookieConsent />
        <ChatbaseWidget />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
