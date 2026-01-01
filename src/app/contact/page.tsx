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
  Facebook,
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
    link: "https://wa.me/917977319411?text=Hi%20Sangeeta,%20I'm%20interested%20in%20yoga%20classes",
    color: "bg-green-500/10 border-green-500/20 hover:bg-green-500/15",
    iconColor: "text-green-600",
  },
  {
    icon: Phone,
    title: "Phone Call",
    description: "Book a free consultation",
    action: "Call Now",
    link: "tel:+917977319411",
    color: "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/15",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Response within 24 hours",
    action: "Send Email",
    link: "mailto:stayfitwithsangeeta25@gmail.com",
    color: "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/15",
    iconColor: "text-purple-600",
  },
];

const faqs = [
  {
    question: "Do you offer trial classes?",
    answer: "Yes! Book a free consultation to discuss your goals.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "Just a yoga mat and comfortable clothes. I'll guide you on everything else.",
  },
  {
    question: "Can beginners join?",
    answer: "Absolutely! I customize every session to your level and needs.",
  },
  {
    question: "Are classes available worldwide?",
    answer: "Yes!  Online classes are accessible from anywhere in the world.",
  },
  {
    question: "What are the class timings?",
    answer:
      "Flexible morning and evening slots available to suit your schedule.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Simply contact us via WhatsApp, phone, or email to schedule your class.",
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

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

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
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
          },
          "-=0.8"
        )
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
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
          y: 0,
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
          y: 0,
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
        ".info-card",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
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
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-section",
            start: "top 75%",
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
    await new Promise((resolve) => setTimeout(resolve, 3000));

    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for reaching out. Sangeeta will get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
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
        className="hero-section relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[75vh] flex items-center bg-gradient-to-b from-lotus-beige-light/50 to-background overflow-hidden"
      >
        {/* Decorative Background Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-earth-brown/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 left-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 sm:from-background sm:via-background/50 sm:to-transparent z-10" />

          {/* Mobile Background Image */}
          <Image
            src="/contact-hero-mobile.jpg"
            alt="Contact Us Mobile"
            fill
            className="object-cover object-center opacity-70 block sm:hidden"
            priority
            sizes="100vw"
            quality={85}
            unoptimized={true}
          />

          {/* Desktop Background Image */}
          <Image
            src="/contact-hero-desktop.jpg"
            alt="Contact Us Desktop"
            fill
            className="object-cover object-center opacity-70 hidden sm:block"
            priority
            sizes="100vw"
            quality={90}
            unoptimized={true}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6 drop-shadow-md">
              Get In{" "}
              <span className="text-earth-brown drop-shadow-sm">Touch</span>
            </h1>

            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 drop-shadow-sm leading-relaxed">
              Have questions or ready to start your yoga journey? We're here to
              help. Reach out and let's connect.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="contact-methods-section section-padding py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Quick responses guaranteed!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`contact-method-card group relative p-6 sm:p-8 rounded-2xl border-2 ${method.color} transition-all duration-300 hover: scale-105 hover:shadow-xl`}
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <method.icon
                    className={`h-6 w-6 sm:h-8 sm:w-8 ${method.iconColor}`}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                  {method.description}
                </p>
                <div className="flex items-center gap-2 text-earth-brown font-medium text-sm sm:text-base group-hover:gap-3 transition-all">
                  {method.action}
                  <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section section-padding py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-lotus-beige-light to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-earth-brown/10 shadow-2xl">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                    Send a Message
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Fill out the form and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="form-field space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium text-sm sm:text-base"
                      >
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="border-earth-brown/20 focus:border-earth-brown text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div className="form-field space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-foreground font-medium text-sm sm:text-base"
                      >
                        Phone / WhatsApp
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91XXXXXXXXXX"
                        className="border-earth-brown/20 focus:border-earth-brown text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="form-field space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-foreground font-medium text-sm sm:text-base"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="border-earth-brown/20 focus:border-earth-brown text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="form-field space-y-2">
                    <Label
                      htmlFor="interest"
                      className="text-foreground font-medium text-sm sm:text-base"
                    >
                      What are you interested in?
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, interest: value }))
                      }
                    >
                      <SelectTrigger className="border-earth-brown/20 focus:border-earth-brown text-sm sm:text-base">
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
                    <Label
                      htmlFor="message"
                      className="text-foreground font-medium text-sm sm:text-base"
                    >
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your yoga goals, any health concerns, or questions you have..."
                      rows={5}
                      className="border-earth-brown/20 focus:border-earth-brown resize-none text-sm sm:text-base"
                      required
                    />
                  </div>
                  {/* Keep button disabled until form is valid */}
                  <Button
                    type="submit"
                    size="lg"
                    className={`w-full group text-white shadow-lg text-sm sm:text-base ${isFormValid ? "bg-earth-brown hover:bg-earth-brown-dark" : "bg-earth-brown/50 cursor-not-allowed"}`}
                    disabled={isSubmitting || !isFormValid}
                    onClick={() => {
                      if (!isFormValid) return;
                      window.open(
                        `https://wa.me/917977319411?text=Hi%20Sangeeta,%20I%20would%20like%20to%20inquire%20about%20your%20yoga%20classes.%20Here%20is%20my%20message:%0AName:%20${encodeURIComponent(
                          formData.name
                        )}%0AEmail:%20${encodeURIComponent(
                          formData.email
                        )}%0APhone:%20${encodeURIComponent(
                          formData.phone
                        )}%0AInterest:%20${encodeURIComponent(
                          formData.interest
                        )}%0AMessage:%20${encodeURIComponent(
                          formData.message
                        )}`,
                        "_blank"
                      );
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
                    By submitting, you agree to receive communications from
                    Sangeeta's Yoga Classes.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info & Details */}
            <div className="contact-info space-y-4 sm:space-y-6">
              {/* Quick Info Cards */}
              <div className="space-y-3 sm:space-y-4">
                <div className="info-card p-4 sm:p-6 rounded-2xl bg-white border-2 border-earth-brown/10 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-earth-brown" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                        Email Address
                      </p>
                      <a
                        href="mailto:stayfitwithsangeeta25@gmail.com"
                        className="font-semibold text-sm sm:text-base text-foreground hover:text-earth-brown transition-colors break-all"
                      >
                        stayfitwithsangeeta25@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card p-4 sm:p-6 rounded-2xl bg-white border-2 border-earth-brown/10 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-earth-brown" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                        Phone Number
                      </p>
                      <a
                        href="tel:+917977319411"
                        className="font-semibold text-sm sm:text-base text-foreground hover:text-earth-brown transition-colors"
                      >
                        +91 797 731 9411
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-card p-4 sm:p-6 rounded-2xl bg-white border-2 border-earth-brown/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-earth-brown" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                        Class Timings
                      </p>
                      <p className="font-semibold text-sm sm:text-base text-foreground">
                        Flexible - Morning & Evening Slots
                      </p>
                    </div>
                  </div>
                </div>

                <div className="info-card p-4 sm:p-6 rounded-2xl bg-white border-2 border-earth-brown/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-earth-brown" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                        Location
                      </p>
                      <p className="font-semibold text-sm sm:text-base text-foreground">
                        Online - Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="info-card p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-earth-brown/5 to-lotus-beige/10 border-2 border-earth-brown/10">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
                  Follow for Daily Yoga Tips
                </h3>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://www.instagram.com/stayfitwithsangeeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-earth-brown/20 hover:border-earth-brown hover:shadow-md transition-all"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-earth-brown" />
                    <span className="font-medium text-foreground text-xs sm:text-sm">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="https://facebook.com/share/1GCNxpcp2K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-earth-brown/20 hover:border-earth-brown hover: shadow-md transition-all"
                  >
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-earth-brown" />
                    <span className="font-medium text-foreground text-xs sm:text-sm">
                      Facebook
                    </span>
                  </a>
                </div>
              </div>

              {/* Free Consultation CTA */}
              <div className="info-card p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-earth-brown to-earth-brown-dark text-white">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Book a Free Consultation
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm">
                      Not sure where to start? Let's have a 15-minute call to
                      discuss your goals and find the perfect program for you.
                    </p>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full group bg-white text-earth-brown hover:bg-lotus-beige text-sm sm:text-base"
                >
                  <a
                    href="https://wa.me/917977319411? text=Hi%20Sangeeta,%20I'd%20like%20to%20book%20a%20free%20consultation"
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
      <section className="faq-section section-padding bg-card py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item p-4 sm:p-6 rounded-xl bg-background border border-border hover:border-earth-brown/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-earth-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
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
