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
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "StayFit with Sangeeta | Personalized Online Yoga Classes",
    template: "%s | StayFit with Sangeeta",
  },
  description:
    "Transform your life through personalized yoga.  Online group classes and personal sessions available worldwide. Specialized programs for weight loss, stress management, back pain relief, and more.",
  keywords: [
    "yoga",
    "online yoga classes",
    "personal yoga sessions",
    "therapeutic yoga",
    "weight loss yoga",
    "stress management",
    "back pain relief",
    "PCOD yoga",
    "diabetes yoga",
    "prenatal yoga",
    "corporate wellness",
    "yoga teacher India",
    "online yoga instructor",
  ],
  authors: [{ name: "Sangeeta", url: "https://stayfitwithsangeeta.com" }],
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
    url: "/",
    siteName: "StayFit with Sangeeta",
    title: "StayFit with Sangeeta | Personalized Online Yoga Classes",
    description:
      "Transform your life through personalized yoga with expert guidance from certified instructor Sangeeta.  Online classes available worldwide.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "StayFit with Sangeeta - Online Yoga Classes",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StayFit with Sangeeta | Personalized Online Yoga Classes",
    description:
      "Transform your life through personalized yoga.  Online classes & personal sessions available worldwide.",
    images: ["/logo.svg"],
    creator: "@sangeetayoga", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // other:  {
    //   "facebook-domain-verification": "your-fb-verification-code",
    // },
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
