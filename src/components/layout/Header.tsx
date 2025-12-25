"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Classes", href: "/classes" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.from("header", {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-earth-brown/10"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-10"
            >
              <div className="relative inline-flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="StayFit with Sangeeta Logo"
                  width={120}
                  height={40}
                  className="group-hover:scale-105 transition-transform duration-300"
                  priority
                />  
                <span className="font-heading text-3xl font-bold text-earth-brown-dark group-hover:text-earth-brown transition-colors">
                  stayfit with sangeeta
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    pathname === item.href
                      ? "text-earth-brown"
                      : "text-foreground/70 hover:text-earth-brown"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Active/Hover Background */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-earth-brown/10"
                        : "bg-transparent group-hover:bg-earth-brown/5"
                    }`}
                  />

                  {/* Active Indicator */}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-earth-brown rounded-full" />
                  )}
                </Link>
              ))}

              {/* CTA Button */}
              <div className="ml-4 flex items-center gap-3">
                <Button
                  asChild
                  size="default"
                  className="bg-earth-brown hover:bg-earth-brown-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Book a Class
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-earth-brown hover:bg-earth-brown/10 rounded-lg transition-all duration-300 relative z-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    mobileMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6 pt-2 space-y-2 bg-white/95 backdrop-blur-lg border-t border-earth-brown/10">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? "text-earth-brown bg-earth-brown/10 shadow-sm"
                    : "text-foreground/70 hover:text-earth-brown hover:bg-earth-brown/5"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-earth-brown hover:bg-earth-brown-dark text-white shadow-lg group"
                size="lg"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  Book a Class
                </Link>
              </Button>
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-earth-brown/10 space-y-2">
              <a
                href="tel:+917977319411"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-earth-brown transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+917977319411</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Spacer to prevent content jump */}
      <div className="h-20" />
    </>
  );
}
