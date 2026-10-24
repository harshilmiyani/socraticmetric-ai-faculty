import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "SocraticMetric | Faculty & Educator Portal",
  description: "Administer Socratic oral defenses, verify student comprehension, and manage courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen bg-[#F5F5F5] antialiased ${quicksand.variable} ${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}
