import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre Guillemot - Frontend developer",
  description: "Frontend developer based in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable,GeistMono.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
