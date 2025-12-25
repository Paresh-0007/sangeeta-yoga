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
import { peace } from "@lucide/lab";

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
    title: "Pranayama & Meditation",
    description:
      "Learn breathing techniques and meditation practices to enhance mental clarity and emotional balance.",
  },
  {
    icon: HouseHeart,
    title: "Offline Classes",
    description:
      "Experience the benefits of yoga in a serene studio environment with expert guidance.",
  },
  {
    icon: Presentation,
    title: "Corporate Workshops",
    description:
      "Boost employee well-being and productivity with tailored yoga and mindfulness sessions.",
  },
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
  "Asthama Relief",
  "Flexibility & Mobility",
  "Strength Building",
  "Mindfulness & Meditation",
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
      "As someone who was skeptical about online yoga, Sangeeta changed my perspective completely. Her corrections are so precise! ",
    author: "Anjali S.",
    role: "Homemaker",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveFeature((prev) => (prev + 1) % features.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveFeature(index);
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-lotus-beige-light via-background to-lotus-beige">
          {/* Decorative Circles */}
          <div className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-earth-brown/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-lotus-beige/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-earth-brown-light/10 rounded-full blur-2xl" />

          {/* Floating Leaves - Hidden on small mobile */}
          <div className="floating-leaf absolute top-20 left-[10%] opacity-10 hidden sm:block">
            <Leaf className="w-8 h-8 sm:w-12 sm:h-12 text-earth-brown" />
          </div>
          <div className="floating-leaf absolute top-40 right-[15%] opacity-10 hidden sm:block">
            <Flower2 className="w-12 h-12 sm:w-16 sm:h-16 text-earth-brown-light" />
          </div>
          <div className="floating-leaf absolute bottom-32 left-[20%] opacity-10 hidden sm:block">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-earth-brown" />
          </div>
        </div>

        {/* Background Image Overlay - RESPONSIVE IMAGES */}
        <div className="hero-bg absolute inset-0">
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute z-10" />

          {/* Mobile Image (Portrait - Height > Width) */}
          <Image
            src="/hero-mobile.jpg"
            alt="Yoga Hero Mobile"
            fill
            className="object-cover object-center opacity-90 block sm:hidden"
            priority
            sizes="100vw"
            quality={75}
          />

          {/* Desktop/Tablet Image (Landscape - Width > Height) */}
          <Image
            src="/hero-image.jpg"
            alt="Yoga Hero Desktop"
            fill
            className="object-cover object-right md:object-center opacity-90 hidden sm:block"
            priority
            sizes="100vw"
            quality={75}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
          <div className="max-w-2xl">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4 sm:mb-6">
              YOGA FIRST,
              <br />
              FITNESS ALWAYS!
            </h1>
            <p className="hero-description text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg">
              Welcome to Sangeeta's Yoga Classes. Live Uniquely trained
              dedication for you and those enthusiasts. Nestled in the vibrant
              heart of the city, we offer a sanctuary where mind, body, and soul
              align.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-earth-brown hover:bg-earth-brown-dark text-white group w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Book A Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white group w-full sm:w-auto"
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
      <section className="features-section relative section-padding py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-earth-brown/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-48 h-48 sm:w-80 sm:h-80 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--lotus-beige))_0%,transparent_50%)] opacity-20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-brown/10 rounded-full text-earth-brown text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="h-4 w-4" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
              How Can I Help You?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Whether you prefer group energy or personal attention, I offer
              flexible yoga solutions that fit your schedule and goals.
            </p>
          </div>

          {/* Desktop:  Card Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group relative">
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/5 to-lotus-beige/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 lg:p-8 rounded-2xl bg-white border-2 border-earth-brown/20 group-hover:border-earth-brown transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-earth-brown/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="h-7 w-7 lg:h-8 lg:w-8 text-earth-brown group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-earth-brown/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 group-hover:text-earth-brown transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href="/contact"
                    className="text-earth-brown font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {/* Number Badge */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-earth-brown/5 flex items-center justify-center text-earth-brown/30 font-bold text-lg group-hover:bg-earth-brown group-hover:text-white transition-all duration-500">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden relative mb-12">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeFeature * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="min-w-full px-3 sm:px-4">
                    <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-earth-brown/10 shadow-xl">
                      {/* Icon */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center mb-4 sm:mb-6">
                        <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-earth-brown" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                        {feature.description}
                      </p>

                      {/* Number Badge */}
                      <div className="w-10 h-10 rounded-full bg-earth-brown text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-earth-brown/20 flex items-center justify-center hover:bg-earth-brown hover:border-earth-brown hover:text-white transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeFeature
                        ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-earth-brown"
                        : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-earth-brown/30 hover:bg-earth-brown/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-earth-brown/20 flex items-center justify-center hover:bg-earth-brown hover:border-earth-brown hover:text-white transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "500+", label: "Happy Students" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Online Classes" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-earth-brown/5 to-lotus-beige/5 border border-earth-brown/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-earth-brown mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="specializations-section relative section-padding py-16 sm:py-20 bg-gradient-to-br from-lotus-beige-light to-background">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-earth-brown/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-lotus-beige/20 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="spec-content order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Yoga That Addresses Your Specific Needs
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Every body is different. I specialize in creating customized
                yoga programs that address your unique health concerns and
                fitness goals.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="spec-tag px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm text-foreground rounded-full text-xs sm:text-sm font-medium border border-earth-brown/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <Button className="mt-6 sm:mt-8 group w-full sm:w-auto" asChild>
                <Link href="/classes">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="spec-image relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-earth-brown/10">
                <Image
                  src="/specializations-image.jpg"
                  alt="Yoga Specializations"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 border-t-3 border-l-3 sm:border-t-4 sm:border-l-4 border-earth-brown/20 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 border-b-3 border-r-3 sm:border-b-4 sm:border-r-4 border-earth-brown/20 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section relative section-padding bg-background py-16 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              What My Students Say
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Real transformations from real people who trusted their yoga
              journey with me.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-earth-brown/20 hover:border-earth-brown hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-earth-brown/10 to-transparent rounded-bl-full" />

                <div className="flex gap-1 mb-4 text-primary relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6 italic relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="relative z-10">
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
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
            alt="Yoga CTA Background"
            fill
            className="object-cover object-center"
            quality={75}
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/80 via-earth-brown-dark/70 to-earth-brown/80" />

          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* Decorative Blur Circles */}
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-lotus-beige/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="cta-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto drop-shadow-md px-4">
              Take the first step towards a healthier, more balanced life. Book
              a free consultation call to discuss your goals and find the
              perfect yoga program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                asChild
                className="group bg-earth-brown text-white hover:bg-white hover:text-earth-brown shadow-2xl hover:shadow-white/20 transition-all w-full sm:w-auto"
              >
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-earth-brown shadow-2xl backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/917977319411"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-white/80 px-4">
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
