"use client";

import Link from "next/link";
import { Instagram, Youtube, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  useEffect(() => {
    gsap.from("footer", {
      scrollTrigger: {
        trigger:  "footer",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y:  50,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-heading text-2xl font-semibold text-primary group-hover:scale-105 transition-transform inline-block">
                StayFit
              </span>
              <span className="font-heading text-2xl text-foreground">
                {" "}
                with Sangeeta
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Personalized yoga for mind, body, and soul.  Transform your life
              through the ancient practice of yoga.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aboutus"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  About Sangeeta
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Online Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Personal Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@stayfitwithsangeeta.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  hello@stayfitwithsangeeta.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} StayFit with Sangeeta. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}