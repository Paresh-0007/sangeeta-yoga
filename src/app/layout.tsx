import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Lobster,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingButtons } from "@/components/layout/floating-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://stayfitwithsangeeta.com"
  ),

  title: {
    default: "StayFit with Sangeeta | Online & Offline Yoga Classes in Mumbai",
    template: "%s | StayFit with Sangeeta",
  },

  description:
    "StayFit with Sangeeta offers personalized online and offline yoga classes in Mumbai. Programs for women, men, PCOD, weight loss, stress management, and corporate wellness by a certified yoga instructor.",

  keywords: [
    "online yoga classes",
    "offline yoga classes Mumbai",
    "personal yoga sessions",
    "therapeutic yoga",
    "weight loss yoga",
    "stress management yoga",
    "PCOD yoga",
    "diabetes yoga",
    "prenatal yoga",
    "postnatal yoga",
    "corporate wellness yoga",
    "certified yoga instructor India",
    "yoga teacher in Mumbai",
    "yoga with Sangeeta",
  ],

  authors: [
    {
      name: "Sangeeta",
      url: "https://stayfitwithsangeeta.com",
    },
  ],

  creator: "Sangeeta",
  publisher: "StayFit with Sangeeta",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "StayFit with Sangeeta",
    title: "StayFit with Sangeeta | Online & Offline Yoga Classes in Mumbai",
    description:
      "Personalized yoga classes for women, men, and corporate offices. Online and offline sessions in Mumbai by certified yoga instructor Sangeeta.",
    images: [
      {
        url: "//specializations-image.jpg",
        width: 870,
        height: 1280,
        alt: "StayFit with Sangeeta – Online & Offline Yoga Classes in Mumbai",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/web-app-manifest-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/web-app-manifest-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/manifest.json",

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // bing: "BING_CODE",
    // other: { "facebook-domain-verification": "FB_CODE" }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${lobster.variable} ${dancingScript.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="StayFit with Sangeeta"
        />
        <meta name="theme-color" content="#7A5C4A" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <TooltipProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingButtons />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
