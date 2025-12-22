import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata:  Metadata = {
  title: "StayFit with Sangeeta | Personalized Online Yoga Classes",
  description: 
    "Transform your life through personalized yoga.  Online group classes and personal sessions available worldwide.  Specialized programs for weight loss, stress management, back pain relief, and more.",
  keywords: [
    "yoga",
    "online yoga classes",
    "personal yoga sessions",
    "therapeutic yoga",
    "weight loss",
    "stress management",
  ],
  authors: [{ name: "Sangeeta" }],
  openGraph: {
    title: "StayFit with Sangeeta | Personalized Online Yoga Classes",
    description:
      "Transform your life through personalized yoga with expert guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <TooltipProvider>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}