"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Video,
  Users,
  Heart,
  Star,
  CheckCircle,
  Sparkles,
  PhoneCall as Call,
  Leaf,
  Flower2,
  Icon,
  HouseHeart,
  Presentation,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { peace } from '@lucide/lab';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PeaceIcon = (props: LucideProps) => <Icon {...props} iconNode={peace} />;

const features = [
  {
    icon: Video,
    title: "Online Live Classes",
    description:
      "Join group sessions from anywhere in the world with real-time guidance and corrections.",
  },
  {
    icon: Users,
    title: "Personal Sessions",
    description:
      "One-on-one attention with customized yoga plans tailored to your body and goals.",
  },
  {
    icon: Heart,
    title: "Therapeutic Yoga",
    description:
      "Specialized programs for back pain, PCOD, diabetes, stress, and cancer rehabilitation.",
  },
  {
    icon: PeaceIcon,
    title: "Pranayama & meditation",
    description: "Learn breathing techniques and meditation practices to enhance mental clarity and emotional balance."
  },
  {
    icon: HouseHeart,
    title: "Offline Classes",
    description:"Experience the benefits of yoga in a serene studio environment with expert guidance."
  },
  {
    icon: Presentation,
    title: "Corporate Workshops",
    description:"Boost employee well-being and productivity with tailored yoga and mindfulness sessions."
  }
];

const specializations = [
  "Weight Loss",
  "Stress & Anxiety",
  "Back Pain Relief",
  "PCOD Management",
  "Diabetes Care",
  "Corporate Wellness",
  "Prenatal & Postnatal",
  "Cancer Rehabilitation",
];

const testimonials = [
  {
    quote:
      "Sangeeta's personalized approach helped me overcome chronic back pain that I had for years. Her understanding of body alignment is exceptional.",
    author: "Priya M.",
    role: "Working Professional",
  },
  {
    quote:
      "The online classes fit perfectly into my busy schedule. I've lost 8kg and feel more energetic than ever before.",
    author: "Rahul K.",
    role: "IT Professional",
  },
  {
    quote:
      "As someone who was skeptical about online yoga, Sangeeta changed my perspective completely. Her corrections are so precise!  ",
    author: "Anjali S.",
    role: "Homemaker",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const specializationsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero Timeline Animation
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
          "-=0.6"
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "-=0.6"
        );

      // Floating decorative elements
      gsap.to(".floating-leaf", {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5,
      });

      // Features Section ScrollTrigger
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Specializations ScrollTrigger
      gsap.fromTo(
        ".spec-content",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specializations-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".spec-tag",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".specializations-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".spec-image",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specializations-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Testimonials ScrollTrigger
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // CTA ScrollTrigger
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

      // Parallax Background Effect
      gsap.to(".hero-bg", {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-lotus-beige-light via-background to-lotus-beige">
          {/* Decorative Circles */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-earth-brown/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-lotus-beige/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-earth-brown-light/10 rounded-full blur-2xl" />

          {/* Floating Leaves */}
          <div className="floating-leaf absolute top-20 left-[10%] opacity-10">
            <Leaf className="w-12 h-12 text-earth-brown" />
          </div>
          <div className="floating-leaf absolute top-40 right-[15%] opacity-10">
            <Flower2 className="w-16 h-16 text-earth-brown-light" />
          </div>
          <div className="floating-leaf absolute bottom-32 left-[20%] opacity-10">
            <Sparkles className="w-10 h-10 text-earth-brown" />
          </div>
        </div>

        {/* Background Image Overlay */}
        <div className="hero-bg absolute inset-0">
          <div className="absolute inset-0 z-10" />
          <Image
            src="/hero-image.jpg"
            alt="Hero Background"
            fill
            className="object-cover object-right md:object-center opacity-90"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              YOGA FIRST,
              <br />
              FITNESS ALWAYS !
            </h1>
            <p className="hero-description text-lg text-muted-foreground mb-8 max-w-lg text-justify">
              Welcome to Sangeeta's Yoga Classes. Live Uniquely trained
              dedication for you and those enthusiasts. Nestled in the vibrant
              heart of the city, we offer a sanctuary where mind, body, and soul
              align.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-earth-brown hover:bg-earth-brown-dark text-white group"
              >
                Book A Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white group"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                  <Call className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Enhanced Features Section with Carousel */}
      <section className="features-section relative section-padding py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-earth-brown/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--lotus-beige))_0%,transparent_50%)] opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-brown/10 rounded-full text-earth-brown text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How Can I Help You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you prefer group energy or personal attention, I offer
              flexible yoga solutions that fit your schedule and goals.
            </p>
          </div>

          {/* Desktop:  Card Grid with Stagger Animation */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group relative">
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/5 to-lotus-beige/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 rounded-2xl bg-white border-2 group-hover:border-earth-brown/20 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-earth-brown/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="h-8 w-8 text-earth-brown group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-earth-brown/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-earth-brown transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <button onClick={() => window.location.href = '/contact'} className="text-earth-brown font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Number Badge */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-earth-brown/5 flex items-center justify-center text-earth-brown/30 font-bold text-lg group-hover:bg-earth-brown group-hover:text-white transition-all duration-500">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-out"
              >
                {features.map((feature, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="p-8 rounded-2xl bg-white border-2 border-earth-brown/10 shadow-xl">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center mb-6">
                        <feature.icon className="h-8 w-8 text-earth-brown" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Number Badge */}
                      <div className="mt-6 w-10 h-10 rounded-full bg-earth-brown text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section Below Cards */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Students" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Online Classes" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-earth-brown/5 to-lotus-beige/5 border border-earth-brown/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl lg:text-4xl font-bold text-earth-brown mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="specializations-section relative section-padding py-20 bg-gradient-to-br from-lotus-beige-light to-background">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-0 w-64 h-64 bg-earth-brown/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-lotus-beige/20 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="spec-content">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Yoga That Addresses Your Specific Needs
              </h2>
              <p className="text-muted-foreground mb-8">
                Every body is different. I specialize in creating customized
                yoga programs that address your unique health concerns and
                fitness goals.
              </p>
              <div className="flex flex-wrap gap-3">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="spec-tag px-4 py-2 bg-white/80 backdrop-blur-sm text-foreground rounded-full text-sm font-medium border border-earth-brown/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <Button className="mt-8 group" asChild>
                <Link href="/classes">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="spec-image relative">
              {/* <div className="aspect-square rounded-2xl bg-gradient-to-br from-earth-brown-light/20 to-lotus-beige-light flex items-center justify-center shadow-2xl border border-earth-brown/10">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Class Image Placeholder
                  </p>
                </div>
              </div> */}

              <Image
                src="/specializations-image.jpg" // Replace with your actual image path
                alt="Yoga Specializations"
                width={500}
                height={500}
                className="spec-image rounded-2xl object-cover object-center"
                quality={70}
              />
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-earth-brown/20 rounded-tl-2xl" />
              <div className="absolute -bottom-4 right-14 w-20 h-20 border-b-4 border-r-4 border-earth-brown/20 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section relative section-padding bg-background py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What My Students Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real transformations from real people who trusted their yoga
              journey with me.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-earth-brown/10 to-transparent rounded-bl-full" />

                <div className="flex gap-1 mb-4 text-primary relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="relative z-10">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section relative section-padding py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-background.jpg" // Replace with your actual image path
            alt="Yoga CTA Background"
            fill
            className="object-cover object-center"
            quality={90}
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/80 via-earth-brown-dark/70 to-earth-brown/80" />

          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Decorative Blur Circles */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-lotus-beige/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="cta-content">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Take the first step towards a healthier, more balanced life. Book
              a free consultation call to discuss your goals and find the
              perfect yoga program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-white text-earth-brown hover:bg-lotus-beige shadow-2xl hover:shadow-white/20 transition-all"
              >
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-earth-brown shadow-2xl backdrop-blur-sm bg-white/10"
                asChild
              >
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">
                    5+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">
                    500+ Happy Students
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">
                    Available Worldwide
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
