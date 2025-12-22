"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Video,
  Users,
  User,
  Play,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const mainServices = [
  {
    icon: Users,
    title: "Online Group Classes",
    description: 
      "Join live group sessions with students from around the world.Perfect for those who thrive in community energy.",
    features: [
      "Live interactive sessions via Zoom",
      "Small batch sizes for personal attention",
      "Multiple time slots available",
      "Replays available for 24 hours",
    ],
    highlight: "Most Popular",
  },
  {
    icon:  User,
    title: "Personal Sessions",
    description:
      "One-on-one attention with customized yoga plans designed specifically for your body, goals, and schedule.",
    features: [
      "Completely personalized program",
      "Flexible scheduling",
      "Progress tracking & adjustments",
      "Direct WhatsApp support",
    ],
    highlight: "Best Results",
  },
];

const additionalServices = [
  {
    icon: Play,
    title: "Pre-recorded Courses",
    description:
      "Learn at your own pace with professionally recorded yoga courses.",
  },
  {
    icon:  Calendar,
    title: "Workshops & Retreats",
    description:
      "Deep-dive sessions on specific topics and immersive yoga experiences.",
  },
];

const yogaStyles = [
  {
    name: "Hatha Yoga",
    description:  "Foundation practice focusing on postures and breathing",
  },
  {
    name:  "Customized Flow",
    description: "Sequences designed for your specific needs",
  },
  {
    name: "Ashtanga",
    description: "Dynamic, physically demanding style for building strength",
  },
  {
    name: "Yin Yoga",
    description:  "Slow-paced practice targeting deep connective tissues",
  },
  {
    name: "Prenatal/Postnatal",
    description: "Safe practices for expecting and new mothers",
  },
  {
    name: "Therapeutic Yoga",
    description: "Healing-focused practice for specific health conditions",
  },
];

const specializations = [
  { name: "Weight Loss", icon: "⚡" },
  { name: "Stress & Anxiety Relief", icon: "🧘" },
  { name: "Back Pain Management", icon: "💪" },
  { name:  "PCOD Care", icon: "🌸" },
  { name: "Diabetes Management", icon: "❤️" },
  { name: "Corporate Wellness", icon: "💼" },
  { name:  "Cancer Rehabilitation", icon: "🌟" },
];

export default function Classes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const stylesRef = useRef<HTMLDivElement>(null);
  const specializationsRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero Section Animation
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      heroTimeline
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "-=0.5"
        );

      // Featured Programs Section ScrollTrigger
      gsap.fromTo(
        ".services-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".main-service-card",
        { opacity:  0, y: 60 },
        {
          opacity: 1,
          y:  0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".additional-service-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x:  0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".additional-services",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Yoga Styles Section ScrollTrigger
      gsap.fromTo(
        ".styles-header",
        { opacity:  0, y: 30 },
        {
          opacity:  1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".styles-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".style-card",
        { opacity:  0, scale: 0.9 },
        {
          opacity: 1,
          scale:  1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger:  {
            trigger: ".styles-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Specializations Section ScrollTrigger
      gsap.fromTo(
        ".spec-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x:  0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specializations-section",
            start:  "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".spec-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".specializations-section",
            start: "top 70%",
            toggleActions:  "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".spec-image",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale:  1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specializations-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Schedule Section ScrollTrigger
      gsap.fromTo(
        ".schedule-info",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y:  0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".schedule-section",
            start:  "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".schedule-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y:  0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".schedule-section",
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

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-beige-light/50 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg: px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Classes & <span className="text-primary">Programs</span>
            </h1>
            <p className="hero-description text-lg text-muted-foreground">
              From live online sessions to personalized one-on-one guidance, find the
              perfect yoga program that fits your lifestyle and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="services-section section-padding py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="services-header text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the learning format that works best for you. Both options
              include my signature personalized approach.
            </p>
          </div>
          <div className="grid lg: grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="main-service-card relative p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {service.highlight}
                  </div>
                )}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="group">
                  <Link href="/contact">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="additional-services grid md:grid-cols-2 gap-6 mt-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="additional-service-card p-6 rounded-xl bg-muted/50 border border-border flex items-start gap-4 hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Styles */}
      <section ref={stylesRef} className="styles-section section-padding bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm: px-6 lg:px-8">
          <div className="styles-header text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Yoga Styles I Teach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With expertise in multiple yoga traditions, I can recommend and teach
              the style that best suits your needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaStyles.map((style, index) => (
              <div
                key={index}
                className="style-card p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {style.name}
                </h3>
                <p className="text-muted-foreground text-sm">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section
        ref={specializationsRef}
        className="specializations-section section-padding py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="spec-content">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Specialized Programs for Your Health Goals
              </h2>
              <p className="text-muted-foreground mb-8">
                I offer targeted yoga programs designed to address specific health
                concerns. Each program combines traditional yoga wisdom with modern
                understanding of the body.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className="spec-item flex items-center gap-3 p-3 rounded-lg bg-lotus-beige-light hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-2xl">{spec.icon}</span>
                    <span className="font-medium text-sm">
                      {spec.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="spec-image aspect-square rounded-2xl bg-gradient-to-br from-earth-brown-light to-lotus-beige-light flex items-center justify-center shadow-2xl">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-primary" />
                </div>
                <p className="text-muted-foreground font-medium">
                  Class Image Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section
        ref={scheduleRef}
        className="schedule-section section-padding bg-lotus-beige-light py-20"
      >
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg: px-8">
          <div className="flex justify-center gap-8 mb-8">
            <div className="schedule-info flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>Flexible Timings</span>
            </div>
            <div className="schedule-info flex items-center gap-2 text-foreground">
              <Video className="h-5 w-5 text-primary" />
              <span>Live via Zoom</span>
            </div>
          </div>
          <div className="schedule-content">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start? 
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Not sure which program is right for you? Book a free consultation call
              and let's discuss your goals together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp for Quick Inquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}