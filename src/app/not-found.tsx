"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { gsap } from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .fromTo(
          ".error-code",
          { opacity: 0, scale: 0.5, rotate: -10 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" }
        )
        .fromTo(
          ".error-title",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".error-description",
          { opacity: 0, y: 20 },
          { opacity:  1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".error-buttons",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".floating-element",
          { opacity: 0, scale: 0 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)" 
          },
          "-=0.4"
        );

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo:  true,
        ease: "power1.inOut",
        stagger: 0.2,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-lotus-beige-light/30 via-background to-earth-brown-light/30"
    >
      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10" />
        <div className="floating-element absolute top-40 right-20 w-16 h-16 rounded-full bg-rose/20" />
        <div className="floating-element absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-sage/15" />
        <div className="floating-element absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-cream-light/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {/* 404 Error Code */}
        <h1 className="error-code text-9xl sm:text-[12rem] lg:text-[14rem] font-bold text-primary/20 leading-none mb-4">
          404
        </h1>

        {/* Error Title */}
        <h2 className="error-title text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Oops!  Page Not Found
        </h2>

        {/* Error Description */}
        <p className="error-description text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for seems to have taken a yoga break. Let's get you back on track! 
        </p>

        {/* Action Buttons */}
        <div className="error-buttons flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="group">
            <Link href="/">
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/classes">
              <Search className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore Classes
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Popular pages you might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link 
              href="/about"
              className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              About Sangeeta
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/classes"
              className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              Classes & Programs
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="/contact"
              className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}