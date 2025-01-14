import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Danniel Kim's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-slate-900 font-inter text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <div className="mx-auto flex min-h-screen max-w-screen-xl justify-between gap-4 px-12">
          <Sidebar />
          <Content>{children}</Content>
        </div>
      </body>
    </html>
  );
}
