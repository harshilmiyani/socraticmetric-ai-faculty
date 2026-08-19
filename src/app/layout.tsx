import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
// Temporarily disabled — re-enable to show site-wide loader on first paint
// import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ChatbaseWidget } from "@/components/chatbot/ChatbaseWidget";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { rootMetadata } from "@/lib/site-metadata";

const quicksand = localFont({
  src: [
    {
      path: "./fonts/Quicksand/Quicksand-VariableFont_wght.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-[#F5F5F5] antialiased selection:bg-[#F58022]/20 selection:text-[#1F2A44]",
        quicksand.variable,
        quicksand.className
      )}>
        <SiteJsonLd />
        <MotionProvider>
          {children}
          {/* <LoadingScreen /> */}
          <ScrollToTop />
          <CookieConsent />
          <ChatbaseWidget />
          <GoogleAnalytics />
        </MotionProvider>
      </body>
    </html>
  );
}
