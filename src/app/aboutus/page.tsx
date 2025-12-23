"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Heart,
  Target,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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
    gradient: "from-earth-brown to-lotus-beige",
  },
  {
    id:  2,
    title: "RYT 200 Certification",
    image: "/certificates/cert2.jpg",
    gradient: "from-earth-brown-light to-lotus-beige-light",
  },
  {
    id: 3,
    title: "Therapeutic Yoga Training",
    image: "/certificates/cert3.jpg",
    gradient: "from-lotus-beige to-earth-brown-light",
  },
  {
    id: 4,
    title: "Cancer Rehabilitation Certificate",
    image: "/certificates/cert4.jpg",
    gradient: "from-earth-brown-dark to-lotus-beige",
  },
  {
    id: 5,
    title: "Prenatal Yoga Specialist",
    image: "/certificates/cert5.jpg",
    gradient: "from-lotus-beige-light to-earth-brown",
  },
  {
    id: 6,
    title:  "Corporate Wellness Certification",
    image: "/certificates/cert6.jpg",
    gradient: "from-earth-brown to-lotus-beige-light",
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
            y:  30,
            duration: 1,
          },
          "-=1"
        )
        .from(
          ".hero-description",
          {
            opacity:  0,
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
          duration:  1,
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
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-section",
            start:  "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Certificate Carousel - Extended for 6 Cards
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards",
          pin: true,
          pinSpacing: true,
          start: "top-=75px top",
          end: "+=3000", // Extended for 6 cards
          scrub: 1,
        },
      });

      // Animation for card 1
      tl.addLabel("card1");
      tl.to(".card1", {
        yPercent: 0,
        opacity: 1,
      });

      // Animation for card 2
      tl.from(".card2", {
        yPercent: 75,
        opacity: 0,
      });
      tl.addLabel("card2");
      tl.to(
        ".card1",
        {
          scale: 0.95,
          yPercent: -0.75,
          opacity: 0.9,
        },
        "-=0.3"
      );
      tl.to(".card2", {
        yPercent: 0,
        opacity: 1,
      });

      // Animation for card 3
      tl.from(".card3", {
        yPercent: 75,
        opacity: 0,
      });
      tl.addLabel("card3");
      tl.to(
        ".card2",
        {
          scale: 0.96,
          yPercent: -0.5,
          opacity: 0.9,
        },
        "-=0.3"
      );
      tl.to(".card3", {
        yPercent:  0,
        opacity: 1,
      });

      // Animation for card 4
      tl.from(".card4", {
        yPercent: 75,
        opacity: 0,
      });
      tl.addLabel("card4");
      tl.to(
        ".card3",
        {
          scale: 0.97,
          yPercent: -0.4,
          opacity: 0.9,
        },
        "-=0.3"
      );
      tl.to(".card4", {
        yPercent: 0,
        opacity:  1,
      });

      // Animation for card 5 (NEW)
      tl.from(".card5", {
        yPercent: 75,
        opacity: 0,
      });
      tl.addLabel("card5");
      tl.to(
        ".card4",
        {
          scale: 0.98,
          yPercent: -0.3,
          opacity: 0.9,
        },
        "-=0.3"
      );
      tl.to(".card5", {
        yPercent: 0,
        opacity: 1,
      });

      // Animation for card 6 (NEW)
      tl.from(".card6", {
        yPercent:  75,
        opacity: 0,
      });
      tl.addLabel("card6");
      tl.to(
        ".card5",
        {
          scale: 0.99,
          yPercent: -0.2,
          opacity: 0.9,
        },
        "-=0.3"
      );
      tl.to(".card6", {
        yPercent: 0,
        opacity: 1,
      });

      // Scale down all previous cards at the end
      tl.to(
        ".card1",
        {
          scale: 0.90,
          yPercent: -2.0,
          opacity: 0.7,
        },
        "-=0.3"
      );

      tl.to(
        ".card2",
        {
          scale: 0.92,
          yPercent: -1.7,
          opacity: 0.75,
        },
        "-=0.3"
      );

      tl.to(
        ".card3",
        {
          scale: 0.94,
          yPercent: -1.4,
          opacity: 0.8,
        },
        "-=0.3"
      );

      tl.to(
        ".card4",
        {
          scale: 0.96,
          yPercent: -1.1,
          opacity: 0.85,
        },
        "-=0.3"
      );

      tl.to(
        ".card5",
        {
          scale: 0.98,
          yPercent: -0.8,
          opacity: 0.9,
        },
        "-=0.3"
      );

      // Certification Items Animation
      gsap.fromTo(
        ".cert-item",
        { opacity:  0, x: 20 },
        {
          opacity: 1,
          x:  0,
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
            start:  "top 70%",
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

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Margin Animation */}
      <section
        ref={heroRef}
        className="hero-section relative py-20 lg:py-52 bg-gradient-to-b from-lotus-beige-light/50 to-background overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-earth-brown/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Meet <span className="text-earth-brown">Sangeeta</span>
            </h1>
            <p className="hero-description text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
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
      <section className="story-section section-padding py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="story-content order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="story-paragraph">
                  After the birth of my second child, I developed a severe slip
                  disc.  I tried every treatment available, but nothing seemed to
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
                <div className="story-paragraph mt-6 p-6 bg-earth-brown/5 rounded-2xl border-l-4 border-earth-brown">
                  <p className="font-medium text-earth-brown italic text-lg">
                    "I started teaching yoga because I realized the more I would
                    teach, the more I would learn. This way, I can help others
                    too with the help of yoga."
                  </p>
                </div>
              </div>
            </div>
            <div className="story-image order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-earth-brown/10">
                <Image
                  src="/sangeeta-profile.jpg"
                  alt="Sangeeta practicing yoga"
                  fill
                  className="object-cover rounded-2xl"
                  quality={90}
                />
              </div>
              {/* Decorative accents */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-earth-brown/30 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-earth-brown/30 rounded-br-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section with Scroll Carousel */}
      <section className="certifications-section section-padding bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Certifications & Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Years of formal training to ensure safe, effective, and
              transformative yoga instruction.
            </p>
            <p className="text-sm text-earth-brown font-medium">
              Scroll down to view all {certificateImages.length} certificates →
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Certificate Carousel - Left Side */}
            <div className="sticky top-35">
              <div
                className="cards relative flex justify-center items-center mb-24"
                style={{ height: "70vh" }}
              >
                {certificateImages.map((cert, index) => (
                  <div
                    key={cert.id}
                    className={`custom-card card${
                      index + 1
                    } absolute rounded-[50px] shadow-2xl`}
                    id={`${index + 1}`}
                    style={{
                      width: "100%",
                      height: "50vh",
                      top: `${index * 20}px`,
                      zIndex: certificateImages.length + index + 2,
                    }}
                  >
                    {/* Certificate Image fills the entire space */}
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.image}
                        alt={cert. title}
                        fill
                        className="object-cover rounded-[50px]"
                        quality={90}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification List - Right Side */}
            <div className="cert-content sticky top-24">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                My Credentials
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                I've invested years in formal training to ensure I can provide
                you with safe, effective, and transformative yoga instruction.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="cert-item flex items-start gap-3 p-1 bg-background rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-x-2"
                  >
                    <CheckCircle className="h-6 w-6 text-earth-brown flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="philosophy-section section-padding py-20 bg-gradient-to-br from-lotus-beige-light to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="philosophy-header text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              My Teaching Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I believe yoga should adapt to you—not the other way around. My
              approach focuses on personalization, proper alignment, and
              holistic healing. 
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="philosophy-card group p-8 rounded-2xl bg-white border-2 border-transparent hover:border-earth-brown/20 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-earth-brown" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
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
            src="/cta-background.jpg"
            alt="Yoga Background"
            fill
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/80 via-earth-brown-dark/70 to-earth-brown/80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="cta-content">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Let's Begin Your Yoga Journey Together
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Whether you're dealing with pain, stress, or simply want to
              improve your overall wellness, I'm here to guide you every step of
              the way. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-white text-earth-brown hover:bg-lotus-beige shadow-2xl"
              >
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-earth-brown shadow-2xl backdrop-blur-sm bg-white/10"
                asChild
              >
                <Link href="/classes">View All Classes</Link>
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