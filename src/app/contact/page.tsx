"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  Instagram,
  Youtube,
  Clock,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const classInterests = [
  "Online Group Classes",
  "Personal Sessions",
  "Pre-recorded Courses",
  "Workshops",
  "Corporate Wellness",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

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
          { opacity: 1, y: 0, duration:  1 }
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "-=0.5"
        );

      // Contact Form Animation
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".form-field",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y:  0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Contact Info Animation
      gsap.fromTo(
        ".contact-info-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start:  "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".whatsapp-cta",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale:  1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 70%",
            toggleActions:  "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".contact-detail-card",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x:  0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-details",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".social-links",
        { opacity:  0, y: 20 },
        {
          opacity:  1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".social-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".consultation-card",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale:  1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".consultation-section",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: 
        "Thank you for reaching out.  Sangeeta will get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone:  "", interest: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-lotus-beige-light/50 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg: px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="hero-title text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="hero-description text-lg text-muted-foreground">
              Have questions about classes or want to discuss your yoga goals?  I'd
              love to hear from you. 
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={formRef} className="contact-section section-padding py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="contact-form order-2 lg:order-1">
              <div className="bg-card p-8 lg:p-10 rounded-2xl border border-border shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="form-field space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-field space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                      />
                    </div>
                  </div>
                  <div className="form-field space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="form-field space-y-2">
                    <Label htmlFor="interest">Interested In</Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, interest: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {classInterests.map((interest) => (
                          <SelectItem key={interest} value={interest}>
                            {interest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="form-field space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your yoga goals, any health concerns, or questions you have..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div ref={contactInfoRef} className="contact-info order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="contact-info-header text-2xl font-semibold text-foreground mb-4">
                  Quick Contact
                </h2>
                <p className="contact-info-header text-muted-foreground mb-8">
                  Prefer a quick chat?  Reach out directly via WhatsApp or email.  I
                  typically respond within a few hours.
                </p>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919999999999? text=Hi%20Sangeeta,%20I'm%20interested%20in%20yoga%20classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta flex items-center gap-4 p-6 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/15 hover:scale-105 transition-all duration-300 mb-6"
                >
                  <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Chat on WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Get a quick response
                    </p>
                  </div>
                </a>

                {/* Contact Details */}
                <div className="contact-details space-y-4">
                  <a
                    href="mailto:hello@stayfitwithsangeeta.com"
                    className="contact-detail-card flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">
                        hello@stayfitwithsangeeta.com
                      </p>
                    </div>
                  </a>

                  <div className="contact-detail-card flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Class Timings</p>
                      <p className="font-medium text-foreground">
                        Flexible - Morning & Evening Slots
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-card flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">
                        Online - Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3 className="social-links text-lg font-semibold text-foreground mb-4">
                  Follow for Daily Yoga Tips
                </h3>
                <div className="social-links flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Instagram</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <Youtube className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Free Consultation */}
              <div className="consultation-section">
                <div className="consultation-card p-6 rounded-2xl bg-lotus-beige-light border border-primary/20 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Not Sure Where to Start?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Book a free 15-minute consultation call. Let's discuss your goals
                    and find the perfect program for you.
                  </p>
                  <Button variant="outline" size="sm" asChild className="group">
                    <a
                      href="https://wa.me/919999999999?text=Hi%20Sangeeta,%20I'd%20like%20to%20book%20a%20free%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      Book Free Call
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}