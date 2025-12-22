"use client";

import { useEffect, useRef } from "react";
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
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Video,
    title: "Online Live Classes",
    description: 
      "Join group sessions from anywhere in the world with real-time guidance and corrections.",
  },
  {
    icon: Users,
    title:  "Personal Sessions",
    description: 
      "One-on-one attention with customized yoga plans tailored to your body and goals.",
  },
  {
    icon: Heart,
    title: "Therapeutic Yoga",
    description: 
      "Specialized programs for back pain, PCOD, diabetes, stress, and cancer rehabilitation.",
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
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const specializationsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero Timeline Animation
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      heroTimeline
        .fromTo(
          ".hero-badge",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 }
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.4"
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
        )
        .fromTo(
          ".hero-stats",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.4"
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=1"
        )
        .fromTo(
          ".hero-badge-card",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, ease: "back.out(1.7)" },
          "-=0.6"
        );

      // Features Section ScrollTrigger
      gsap.fromTo(
        ".feature-card",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity:  1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Specializations Section ScrollTrigger
      gsap.fromTo(
        ".spec-content",
        {
          opacity:  0,
          x: -50,
        },
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
        {
          opacity:  0,
          scale: 0.8,
        },
        {
          opacity:  1,
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
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specializations-section",
            start:  "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Testimonials Section ScrollTrigger
      gsap.fromTo(
        ".testimonial-card",
        {
          opacity:  0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // CTA Section ScrollTrigger
      gsap.fromTo(
        ".cta-content",
        {
          opacity:  0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease:  "power3.out",
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

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="hero-section relative min-h-[90vh] flex items-center overflow-hidden"
      >
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-lotus-beige-light via-background to-earth-brown-light opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-8 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                5+ Years of Teaching Excellence
              </div>
              <h1 className="hero-title text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Transform Your Life Through{" "}
                <span className="text-primary">Personalized Yoga</span>
              </h1>
              <p className="hero-description text-lg text-muted-foreground max-w-xl">
                Join Sangeeta for yoga that adapts to your lifestyle, age, and
                body.  Experience the healing power of yoga through online group
                classes and personal sessions—available worldwide.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover: translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/classes">Explore Classes</Link>
                </Button>
              </div>
              <div className="hero-stats flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-lotus-beige-light border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    Trusted by 500+ students worldwide
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="hero-image aspect-[1/1] rounded-2xl overflow-hidden bg-gradient-to-br from-lotus-beige-light to-earth-brown flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Your Photo Here
                  </p>
                </div>
              </div>
              <div className="hero-badge-card absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Certified Teacher
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The Yoga Institute
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="features-section section-padding bg-card py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How Can I Help You?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you prefer group energy or personal attention, I offer
              flexible yoga solutions that fit your schedule and goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section
        ref={specializationsRef}
        className="specializations-section section-padding py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                    className="spec-tag px-4 py-2 bg-lotus-beige-light text-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
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

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="testimonials-section section-padding bg-card py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                className="testimonial-card p-8 rounded-2xl bg-background border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4 text-primary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
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
      <section ref={ctaRef} className="cta-section section-padding py-20">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg: px-8">
          <div className="cta-content">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier, more balanced life.  Book
              a free consultation call to discuss your goals and find the
              perfect yoga program for you.
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
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}