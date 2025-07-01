import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danniel Kim",
  description: "Danniel Kim's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} overflow-x-hidden bg-slate-900 font-inter text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <Analytics />
        <SpeedInsights />
        <AnimatedBackground />
        <div id="blur"></div>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:flex lg:justify-between lg:gap-4 lg:py-0">
          <Sidebar />
          <Content>{children}</Content>
        </div>
      </body>
    </html>
  );
}
