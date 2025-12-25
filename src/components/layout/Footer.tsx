"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  Facebook,
  Twitter,
  MapPin,
} from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  useEffect(() => {
    gsap.from("footer", {
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <footer className="bg-earth-brown-dark text-white">
      {/* Top Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3">
              {/* add logo */}
              <Image
                src="/logo-white.svg"
                alt="StayFit with Sangeeta Logo"
                width={150}
                height={50}
                className=""
              />
              <span className="font-heading text-3xl font-bold text-white group-hover:text-lotus-beige transition-colors">
                StayFit with Sangeeta
              </span>
            </Link>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1GCNxpcp2K"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:text-earth-brown flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:text-earth-brown flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:text-earth-brown flex items-center justify-center transition-all duration-300 hover: scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.instagram.com/stayfitwithsangeeta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:text-earth-brown flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: StayFit with Sangeeta */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold text-white">
              stayfit with sangeeta
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold text-white">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/classes"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Online Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors text-sm inline-block hover:translate-x-1 duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold text-white">
              CONTACT US
            </h3>
            <div className="space-y-4">
              <p className="text-white/70 text-sm leading-relaxed">
                StayFit Yoga Studio - Online Classes
                <br />
                Available Worldwide via Zoom
                <br />
                Mumbai, India
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+917977319411"
                  className="text-white text-lg font-semibold hover:text-lotus-beige transition-colors block"
                >
                  +917977319411
                </a>
                <a
                  href="mailto:stayfitwithsangeeta25@gmail.com"
                  className="text-lotus-beige hover:text-white transition-colors text-sm block"
                >
                  stayfitwithsangeeta25@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Location Section (Optional - if you have physical location) */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="font-heading text-lg font-semibold text-white">
              Our Locations
            </h3>
            <button
              className="px-6 py-2 rounded-full bg-white/10 hover:bg-white hover:text-earth-brown transition-all duration-300 text-sm font-medium flex items-center gap-2"
              aria-label="View locations"
            >
              <MapPin className="h-5 w-5" />
              View Map
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              Copyright © {new Date().getFullYear()} StayFit with Sangeeta. All
              rights reserved.
            </p>
            <p>
              Powered by{" "}
              <Link
                href="/"
                className="text-lotus-beige hover:text-white transition-colors font-medium"
              >
                StayFit with Sangeeta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
