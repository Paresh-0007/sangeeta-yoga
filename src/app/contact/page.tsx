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
  Sparkles,
  CheckCircle,
  Leaf,
  Flower2,
  Calendar,
  Globe,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

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
  "Therapeutic Yoga",
  "Other",
];

const contactMethods = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    description: "Quick responses within minutes",
    action: "Chat Now",
    link: "https://wa.me/919999999999?text=Hi%20Sangeeta,%20I'm%20interested%20in%20yoga%20classes",
    color: "bg-green-500/10 border-green-500/20 hover:bg-green-500/15",
    iconColor: "text-green-600",
  },
  {
    icon: Phone,
    title: "Phone Call",
    description: "Book a free consultation",
    action: "Call Now",
    link: "tel:+919999999999",
    color:  "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/15",
    iconColor:  "text-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Response within 24 hours",
    action: "Send Email",
    link: "mailto: hello@stayfitwithsangeeta.com",
    color: "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/15",
    iconColor: "text-purple-600",
  },
];

const faqs = [
  {
    question: "Do you offer trial classes?",
    answer: "Yes!  Book a free consultation to discuss your goals.",
  },
  {
    question: "What equipment do I need?",
    answer: "Just a yoga mat and comfortable clothes. I'll guide you on everything else.",
  },
  {
    question: "Can beginners join?",
    answer:  "Absolutely! I customize every session to your level and needs.",
  },
    {
    question: "Do you offer trial classes?",
    answer: "Yes!  Book a free consultation to discuss your goals.",
  },
  {
    question: "What equipment do I need?",
    answer: "Just a yoga mat and comfortable clothes. I'll guide you on everything else.",
  },
  {
    question: "Can beginners join?",
    answer:  "Absolutely! I customize every session to your level and needs.",
  },
  
];

export default function Contact() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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
      // Hero Section Animation with Margin
      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .from(".hero-section", {
          marginTop: "20vh",
          duration: 1.2,
          ease: "power2.inOut",
        })
        .from(
          ".hero-badge",
          {
            opacity:  0,
            scale: 0.8,
            duration: 0.6,
          },
          "-=0.8"
        )
        .from(
          ".hero-title",
          {
            opacity:  0,
            y: 30,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".hero-description",
          {
            opacity:  0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        );

      // Contact Methods Animation
      gsap.fromTo(
        ".contact-method-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y:  0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-methods-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Form Animation
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".form-section",
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
        ".contact-info",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration:  1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".form-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".info-card",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger:  {
            trigger: ".contact-info",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // FAQ Animation
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x:  0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-section",
            start:  "top 75%",
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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!  ✨",
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
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="hero-section relative py-20 lg:py-40 bg-gradient-to-b from-lotus-beige-light/50 to-background overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-earth-brown/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          {/* Floating Elements */}
          <div className="absolute top-20 left-[10%] opacity-10">
            <Leaf className="w-12 h-12 text-earth-brown animate-bounce" style={{ animationDuration: "3s" }} />
          </div>
          <div className="absolute top-40 right-[15%] opacity-10">
            <Flower2 className="w-16 h-16 text-earth-brown-light animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-earth-brown/10 rounded-full text-earth-brown text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="hero-title text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Let's <span className="text-earth-brown">Connect</span>
            </h1>
            <p className="hero-description text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about classes or want to discuss your yoga goals? I'd
              love to hear from you. 
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="contact-methods-section section-padding py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-muted-foreground">
              Quick responses guaranteed! 
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`contact-method-card group relative p-8 rounded-2xl border-2 ${method.color} transition-all duration-300 hover: scale-105 hover:shadow-xl`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className={`h-8 w-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {method.description}
                </p>
                <div className="flex items-center gap-2 text-earth-brown font-medium group-hover:gap-3 transition-all">
                  {method.action}
                  <Send className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section section-padding py-20 bg-gradient-to-br from-lotus-beige-light to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="bg-white p-8 lg:p-10 rounded-2xl border-2 border-earth-brown/10 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="form-field space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="border-earth-brown/20 focus:border-earth-brown"
                        required
                      />
                    </div>
                    <div className="form-field space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Phone / WhatsApp
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className="border-earth-brown/20 focus:border-earth-brown"
                      />
                    </div>
                  </div>

                  <div className="form-field space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="border-earth-brown/20 focus:border-earth-brown"
                      required
                    />
                  </div>

                  <div className="form-field space-y-2">
                    <Label htmlFor="interest" className="text-foreground font-medium">
                      What are you interested in?
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, interest: value }))
                      }
                    >
                      <SelectTrigger className="border-earth-brown/20 focus:border-earth-brown">
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
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your yoga goals, any health concerns, or questions you have..."
                      rows={6}
                      className="border-earth-brown/20 focus:border-earth-brown resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group bg-earth-brown hover:bg-earth-brown-dark text-white shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending... 
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to receive communications from Sangeeta's Yoga Classes.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info & Details */}
            <div className="contact-info space-y-6">
              {/* Quick Info Cards */}
              <div className="space-y-4">
                <div className="info-card p-6 rounded-2xl bg-white border-2 border-earth-brown/10 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-earth-brown" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                      <a
                        href="mailto:hello@stayfitwithsangeeta.com"
                        className="font-semibold text-foreground hover:text-earth-brown transition-colors"
                      >
                        hello@stayfitwithsangeeta.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card p-6 rounded-2xl bg-white border-2 border-earth-brown/10 hover: shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-earth-brown" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone Number</p>
                      <a
                        href="tel:+919999999999"
                        className="font-semibold text-foreground hover:text-earth-brown transition-colors"
                      >
                        +91 99999 99999
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card p-6 rounded-2xl bg-white border-2 border-earth-brown/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-earth-brown" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Class Timings</p>
                      <p className="font-semibold text-foreground">
                        Flexible - Morning & Evening Slots
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info-card p-6 rounded-2xl bg-white border-2 border-earth-brown/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-earth-brown" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold text-foreground">
                        Online - Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="info-card p-6 rounded-2xl bg-gradient-to-br from-earth-brown/5 to-lotus-beige/10 border-2 border-earth-brown/10">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Follow for Daily Yoga Tips
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-earth-brown/20 hover:border-earth-brown hover:shadow-md transition-all"
                  >
                    <Instagram className="h-5 w-5 text-earth-brown" />
                    <span className="font-medium text-foreground text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-earth-brown/20 hover:border-earth-brown hover:shadow-md transition-all"
                  >
                    <Youtube className="h-5 w-5 text-earth-brown" />
                    <span className="font-medium text-foreground text-sm">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Free Consultation CTA */}
              <div className="info-card p-8 rounded-2xl bg-gradient-to-br from-earth-brown to-earth-brown-dark text-white">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Book a Free Consultation or Call for Free Demo
                    </h3>
                    <p className="text-white/90 text-sm">
                      Not sure where to start?  Let's have a 15-minute call to discuss
                      your goals and find the perfect program for you.
                    </p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full group bg-white text-earth-brown hover:bg-lotus-beige"
                >
                  <a
                    href="https://wa.me/919999999999?text=Hi%20Sangeeta,%20I'd%20like%20to%20book%20a%20free%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Schedule Free Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item p-6 rounded-xl bg-background border border-border hover:border-earth-brown/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-earth-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-2xl mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}