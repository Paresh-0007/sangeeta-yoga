"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Heart,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const certifications = [
  "Certified Yoga Teacher - The Yoga Institute, Santacruz",
  "RYT 200/500 Yoga Alliance Certified",
  "Specialized Training in Therapeutic Yoga",
  "Cancer Rehabilitation Yoga Certification",
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
  const storyRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
          scale:  1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger:  ".story-section",
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
          y:  0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger:  {
            trigger: ".story-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Certifications Section ScrollTrigger
      gsap.fromTo(
        ".cert-image",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".certifications-section",
            start:  "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".cert-content",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration:  1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".certifications-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

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
          y:  0,
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
          y:  0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section",
            start:  "top 70%",
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
          y:  0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger:  ".cta-section",
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet <span className="text-primary">Sangeeta</span>
            </h1>
            <p className="hero-description text-lg text-muted-foreground">
              A certified yoga teacher with 5+ years of experience, dedicated to
              helping you discover the transformative power of yoga. 
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="story-section section-padding py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="story-content order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="story-paragraph">
                  After the birth of my second child, I developed a severe slip disc. 
                  I tried every treatment available, but nothing seemed to work.  Then,
                  a friend suggested I try yoga. 
                </p>
                <p className="story-paragraph">
                  That suggestion changed my life. Within two years of consistent
                  practice, I experienced remarkable physical and emotional healing.
                  My back pain vanished, and I discovered a peace I had never known.
                </p>
                <p className="story-paragraph">
                  My thirst for knowledge grew, leading me to The Yoga Institute in
                  Santacruz—one of India's oldest and most respected yoga centers.  I
                  completed my teacher training courses and discovered my calling. 
                </p>
                <p className="story-paragraph font-medium text-foreground">
                  "I started teaching yoga because I realized the more I would teach,
                  the more I would learn.  This way, I can help others too with the
                  help of yoga."
                </p>
              </div>
            </div>
            <div className="story-image order-1 lg:order-2">
              <div className="aspect-[5/5] rounded-2xl overflow-hidden bg-gradient-to-br from-lotus-beige-light to-earth-brown-light flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Sangeeta's Photo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        ref={certificationsRef}
        className="certifications-section section-padding bg-card py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm: px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="cert-image">
              <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-earth-brown to-lotus-beige-light flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Certificate Image
                  </p>
                </div>
              </div>
            </div>
            <div className="cert-content">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Certifications & Training
              </h2>
              <p className="text-muted-foreground mb-8">
                I've invested years in formal training to ensure I can provide you
                with safe, effective, and transformative yoga instruction.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="cert-item flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section
        ref={philosophyRef}
        className="philosophy-section section-padding py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="philosophy-header text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              My Teaching Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I believe yoga should adapt to you—not the other way around. My
              approach focuses on personalization, proper alignment, and holistic
              healing. 
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="philosophy-card p-8 rounded-2xl bg-card border border-border text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="cta-section section-padding bg-lotus-beige-light py-20">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="cta-content">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Let's Begin Your Yoga Journey Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're dealing with pain, stress, or simply want to improve your
              overall wellness, I'm here to guide you every step of the way.
            </p>
            <Button size="lg" asChild className="group">
              <Link href="/contact">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}