"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  Heart,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const certifications = [
  "Certified Yoga Teacher - The Yoga Institute, Santacruz",
  "RYT 200/500 Yoga Alliance Certified",
  "Specialized Training in Therapeutic Yoga",
  "Cancer Rehabilitation Yoga Certification",
  "Prenatal & Postnatal Yoga Specialist",
  "Corporate Wellness Program Certified",
];

const certificateImages = [
  {
    id: 1,
    title: "Yoga Institute Certificate",
    image: "/certificates/cert1.jpg",
  },
  {
    id: 2,
    title: "RYT 200 Certification",
    image: "/certificates/cert2.jpg",
  },
  {
    id: 3,
    title: "Therapeutic Yoga Training",
    image: "/certificates/cert3.jpg",
  },
  {
    id: 4,
    title: "Cancer Rehabilitation Certificate",
    image: "/certificates/cert4.jpg",
  },
  {
    id: 5,
    title: "Prenatal Yoga Specialist",
    image: "/certificates/cert5.jpg",
  },
  {
    id: 6,
    title: "Corporate Wellness Certification",
    image: "/certificates/cert6.jpg",
  },
];

const whyChoose = [
  {
    icon: Target,
    title: "Personalized Approach",
    description:
      "Every session is tailored to your body, lifestyle, age, and profession—no one-size-fits-all here.",
  },
  {
    icon: Award,
    title: "Expert Alignment Focus",
    description:
      "Precise corrections ensure you get maximum benefits while preventing injuries.",
  },
  {
    icon: Heart,
    title: "Healing Experience",
    description:
      "Having healed myself through yoga, I understand the journey and guide you with empathy.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Carousel State (for both mobile and desktop)
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveCertificate((prev) => (prev + 1) % certificateImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero Section - Margin Animation (Center to Top)
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".hero-section", {
          marginTop: "30vh",
          duration: 1.5,
          ease: "power2.inOut",
        })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=1"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );

      // Story Section ScrollTrigger
      gsap.fromTo(
        ".story-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".story-image",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".story-paragraph",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Certification Items Animation
      gsap.fromTo(
        ".cert-item",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".certifications-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Philosophy Section ScrollTrigger
      gsap.fromTo(
        ".philosophy-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".philosophy-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // CTA Section ScrollTrigger
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveCertificate(
      (prev) => (prev - 1 + certificateImages.length) % certificateImages.length
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveCertificate((prev) => (prev + 1) % certificateImages.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveCertificate(index);
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section with Margin Animation */}
      <section
        ref={heroRef}
        className="hero-section relative py-60   sm:py-20 lg:py-60 bg-gradient-to-b from-lotus-beige-light/50 to-background overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-earth-brown/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Background Image Overlay - RESPONSIVE */}
        <div className="absolute inset-0">
          {/* Gradient Overlay for Text Readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-lotus-beige-light/80 via-background/70 to-background/90 sm:from-lotus-beige-light/70 sm:via-background/60 sm:to-background/80 z-10" /> */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--background),0.7)_50%,rgba(var(--background),0.9)_100%)] z-10" /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
          {/* Mobile Image (Portrait) */}
          <Image
            src="/about-hero-mobile.jpg"
            alt="Sangeeta Yoga Teacher Mobile"
            fill
            className="object-cover object-center opacity-70 block sm:hidden"
            priority
            sizes="100vw"
            quality={75}
          />

          {/* Desktop/Tablet Image (Landscape) */}
          <Image
            src="/about-hero-desktop.jpg"
            alt="Sangeeta Yoga Teacher Desktop"
            fill
            className="object-cover object-center opacity-70 hidden sm:block"
            priority
            sizes="100vw"
            quality={75}
            unoptimized={true}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 drop-shadow-sm">
              Meet <span className="text-earth-brown">Sangeeta</span>
            </h1>
            <p className="hero-description text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 drop-shadow-sm">
              A certified yoga teacher with{" "}
              <span className="font-semibold text-earth-brown">
                5+ years of experience
              </span>
              , dedicated to helping you discover the transformative power of
              yoga.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section-padding py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="story-content order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                My Journey
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p className="story-paragraph">
                  After the birth of my second child, I developed a severe slip
                  disc. I tried every treatment available, but nothing seemed to
                  work. Then, a friend suggested I try yoga.
                </p>
                <p className="story-paragraph">
                  That suggestion changed my life. Within two years of
                  consistent practice, I experienced remarkable physical and
                  emotional healing. My back pain vanished, and I discovered a
                  peace I had never known.
                </p>
                <p className="story-paragraph">
                  My thirst for knowledge grew, leading me to The Yoga Institute
                  in Santacruz—one of India's oldest and most respected yoga
                  centers. I completed my teacher training courses and
                  discovered my calling.
                </p>
                <div className="story-paragraph mt-4 sm:mt-6 p-4 sm:p-6 bg-earth-brown/5 rounded-xl sm:rounded-2xl border-l-4 border-earth-brown">
                  <p className="font-medium text-earth-brown italic text-base sm:text-lg">
                    "I started teaching yoga because I realized the more I would
                    teach, the more I would learn. This way, I can help others
                    too with the help of yoga."
                  </p>
                </div>
              </div>
            </div>
            <div className="story-image order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-earth-brown/10">
                <Image
                  src="/sangeeta-profile.jpg"
                  alt="Sangeeta practicing yoga"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
              {/* Decorative accents */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 border-t-3 border-l-3 sm:border-t-4 sm:border-l-4 border-earth-brown/30 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 border-b-3 border-r-3 sm:border-b-4 sm:border-r-4 border-earth-brown/30 rounded-br-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section with Carousel (Both Mobile & Desktop) */}
      <section className="certifications-section section-padding bg-card py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2 sm:px-4">
              Certifications & Training
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-2 px-4">
              Years of formal training to ensure safe, effective, and
              transformative yoga instruction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 items-start">
            {/* Certificate Carousel - FOR ALL DEVICES (FULLY RESPONSIVE) */}
            <div className="relative w-full max-w-[300px] mx-auto sm:max-w-md md:max-w-lg lg:max-w-none">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${activeCertificate * 100}%)`,
                  }}
                >
                  {certificateImages.map((cert) => (
                    <div
                      key={cert.id}
                      className="min-w-full px-0.5 sm:px-2 lg:px-3"
                    >
                      {/* Certificate Image Card */}
                      <div className="aspect-[4/3] sm:aspect-[4/3] max-h-[380px] sm:max-h-none rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-earth-brown/10 bg-white">
                        <div className="relative w-full h-full">
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-cover"
                            quality={85}
                            sizes="(max-width: 640px) 280px, (max-width: 768px) 448px, (max-width: 1024px) 512px, 600px"
                            priority={
                              activeCertificate ===
                              certificateImages.findIndex(
                                (c) => c.id === cert.id
                              )
                            }
                          />
                        </div>
                      </div>

                      {/* Certificate Title - Below Image */}
                      <div className="mt-2.5 sm:mt-4 lg:mt-6 mb-1.5 sm:mb-0 text-center px-1">
                        <h3 className="text-xs sm:text-base lg:text-lg xl:text-xl font-semibold text-foreground line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                          Certificate{" "}
                          {certificateImages.findIndex(
                            (c) => c.id === cert.id
                          ) + 1}{" "}
                          of {certificateImages.length}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-3 sm:mt-6 lg:mt-8">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-earth-brown/20 flex items-center justify-center hover:bg-earth-brown hover:border-earth-brown hover:text-white transition-all duration-300 shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-earth-brown focus:ring-offset-2"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-1.5 sm:gap-2">
                  {certificateImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-earth-brown focus:ring-offset-1 ${
                        index === activeCertificate
                          ? "w-6 sm:w-8 h-2 sm:h-2.5 lg:h-3 bg-earth-brown"
                          : "w-2 sm:w-3 h-2 sm:h-2.5 lg:h-3 bg-earth-brown/30 hover:bg-earth-brown/50"
                      }`}
                      aria-label={`Go to certificate ${index + 1}`}
                      aria-current={
                        index === activeCertificate ? "true" : "false"
                      }
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-earth-brown/20 flex items-center justify-center hover:bg-earth-brown hover:border-earth-brown hover:text-white transition-all duration-300 shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-earth-brown focus:ring-offset-2"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Auto-play Indicator (Hidden on Mobile) */}
              <div className="mt-3 sm:mt-4 text-center hidden sm:block">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {isAutoPlaying ? "Auto-playing..." : "Auto-play paused"}
                </p>
              </div>
            </div>

            {/* Certification List - Right Side (RESPONSIVE) */}
            <div className="cert-content mt-6 lg:mt-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-6">
                My Credentials
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-8 leading-relaxed">
                I've invested years in formal training to ensure I can provide
                you with safe, effective, and transformative yoga instruction.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="cert-item flex items-start gap-2 sm:gap-3 p-2.5 sm:p-4 bg-background rounded-lg cursor-default"
                  >
                    <CheckCircle className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-earth-brown flex-shrink-0 mt-0.5 sm:mt-1" />
                    <span className="text-xs sm:text-sm lg:text-base text-foreground font-medium leading-relaxed">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="philosophy-section section-padding py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-lotus-beige-light to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="philosophy-header text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              My Teaching Philosophy
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              I believe yoga should adapt to you—not the other way around. My
              approach focuses on personalization, proper alignment, and
              holistic healing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="philosophy-card group p-6 sm:p-8 rounded-2xl bg-white border-2 border-earth-brown/20 hover:border-earth-brown text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-earth-brown" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section relative section-padding py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-background.jpg"
            alt="Yoga Background"
            fill
            className="object-cover object-center"
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/80 via-earth-brown-dark/70 to-earth-brown/80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="cta-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Let's Begin Your Yoga Journey Together
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto drop-shadow-md">
              Whether you're dealing with pain, stress, or simply want to
              improve your overall wellness, I'm here to guide you every step of
              the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-white text-earth-brown hover:bg-lotus-beige shadow-2xl w-full sm:w-auto"
              >
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-earth-brown shadow-2xl backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                asChild
              >
                <Link href="/classes">View All Classes</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    5+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    500+ Happy Students
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Certified Professional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}