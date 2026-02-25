import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

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
        "min-h-screen bg-slate-50 font-sans antialiased selection:bg-orange-100 selection:text-[#0F2C4C]",
        inter.variable,
        playfair.variable
      )}>
        {children}
        <LoadingScreen />
        <ScrollToTop />
        <CookieConsent />
        
        {/* ChatBot.com Integration */}
        <Script
          id="chatbot-com-script"
          strategy="lazyOnload"
        >
          {`
            window.__ow = window.__ow || {};
            window.__ow.organizationId = "4b53cf32-450f-46e6-96e7-b34934bede1d";
            window.__ow.template_id = "19d33d92-b441-476b-9cab-b8061d080da6";
            window.__ow.integration_name = "manual_settings";
            window.__ow.product_name = "chatbot";   
            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
          `}
        </Script>
        <noscript>
          You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
        </noscript>
      </body>
    </html>
  );
}
