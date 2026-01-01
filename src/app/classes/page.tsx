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
  Heart,
  Leaf,
  Flower2,
  Star,
  Zap,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const mainServices = [
  {
    icon: Users,
    title: "Online Group Classes",
    description:
      "Join live group sessions with students from around the world. Perfect for those who thrive in community energy.",
    features: [
      "Live interactive sessions",
      "Small batch sizes for personal attention",
      "All Time guidance and support",
      "Learn from the comfort of home",
    ],
    highlight: "Most Popular",
    color: "from-earth-brown to-earth-brown-dark",
  },
  {
    icon: User,
    title: "Personal Sessions",
    description:
      "One-on-one attention with customized yoga plans tailored to your body and goals, online and offline both.",
    features: [
      "Completely personalized program",
      "Flexible scheduling",
      "Progress tracking & adjustments",
      "Direct WhatsApp support",
    ],
    highlight: "Best Results",
    color: "from-lotus-beige to-earth-brown-light",
  },
];

// const additionalServices = [
//   {
//     icon: Play,
//     title: "Pre-recorded Courses",
//     description:
//       "Learn at your own pace with professionally recorded yoga courses covering various styles and levels.",
//     image: "/services/prerecorded.jpg",
//   },
//   {
//     icon: Calendar,
//     title: "Workshops & Retreats",
//     description:
//       "Deep-dive sessions on specific topics and immersive yoga experiences for complete transformation.",
//     image: "/services/workshops.jpg",
//   },
// ];

const yogaStyles = [
  {
    name: "Hatha Yoga",
    description: "Foundation practice focusing on postures and breathing",
    icon: "🧘‍♀️",
    level: "Beginner Friendly",
  },
  {
    name: "Customized Flow",
    description: "Sequences designed for your specific needs",
    icon: "✨",
    level: "All Levels",
  },
  {
    name: "Therapeutic Yoga",
    description: "Healing-focused practice for specific health conditions",
    icon: "❤️",
    level: "All Levels",
  },
  {
    name: "Pranayama",
    description: "Breath control techniques for mind-body balance",
    icon: "🌬️",
    level: "All Levels",
  },
  {
    name: "Meditation",
    description: "Mindfulness and relaxation techniques for mental clarity",
    icon: "🧘‍♂️",
    level: "All Levels",
  },
];

const specializations = [
  { name: "Weight Loss", icon: "⚡", color: "bg-yellow-100 text-yellow-700" },
  {
    name: "Stress & Anxiety Relief",
    icon: "🧘",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Back Pain Management",
    icon: "💪",
    color: "bg-red-100 text-red-700",
  },
  { name: "PCOD Care", icon: "🌸", color: "bg-pink-100 text-pink-700" },
  {
    name: "Diabetes Management",
    icon: "❤️",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Corporate Wellness",
    icon: "💼",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Cancer Rehabilitation",
    icon: "🌟",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Flexibility Training",
    icon: "🤸",
    color: "bg-teal-100 text-teal-700",
  },
  {
    name: "Breathing & Meditation",
    icon: "🕉️",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Asthama Relief",
    icon: "😮‍💨",
    color: "bg-indigo-100 text-indigo-700",
  },
  // {
  //   name: "Prenatal & Postnatal",
  //   icon: "🤰",
  //   color: "bg-pink-100 text-pink-700",
  // },
  {
    name: "Strength Building",
    icon: "🏋️",
    color: "bg-red-100 text-red-700",
  }
];

const testimonials = [
  {
    quote:
      "The online group classes are fantastic! I love the energy and Sangeeta's attention to detail.",
    author: "Meera K.",
    program: "Online Group Classes",
  },
  {
    quote:
      "Personal sessions helped me overcome my back pain.  Highly recommend!",
    author: "Rajesh M.",
    program: "Personal Sessions",
  },
];

export default function Classes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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

      // Services Section ScrollTrigger
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
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
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
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
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
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Schedule Section ScrollTrigger
      gsap.fromTo(
        ".schedule-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
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
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="hero-section relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center bg-gradient-to-b from-lotus-beige-light/50 to-background overflow-hidden"
      >
        {/* Decorative Background Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-earth-brown/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-earth-brown-light/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          {/* Gradient Overlay - Stronger on mobile for better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />

          {/* Mobile Background Image (Portrait) */}
          <Image
            src="/classes-hero-mobile.jpg"
            alt="Yoga Classes Mobile"
            fill
            className="object-cover object-center opacity-75 block sm:hidden"
            priority
            sizes="100vw"
            quality={75}
          />

          {/* Desktop Background Image (Landscape) */}
          <Image
            src="/classes-hero-desktop.jpg"
            alt="Yoga Classes Desktop"
            fill
            className="object-cover object-center opacity-75 hidden sm:block"
            priority
            sizes="100vw"
            quality={75}
          />
        </div>

        {/* Content - Centered */}
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="text-center max-w-4xl mx-auto">

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 drop-shadow-md">
              Yoga{" "}
              <span className="text-earth-brown drop-shadow-sm">Classes</span> &
              Programs
            </h1>

            <p className="hero-description text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 drop-shadow-sm leading-relaxed">
              Personalized yoga programs designed for your unique needs. From
              group sessions to one-on-one training, find the perfect fit for
              your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="services-section section-padding py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="services-header text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the learning format that works best for you. Both options
              include my signature personalized approach.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="main-service-card relative group rounded-2xl"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative p-8 lg:p-10 bg-white border-2 border-earth-brown/20 group-hover:border-earth-brown rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {service.highlight && (
                    <div className="absolute -top-4 left-8 px-4 py-1.5 bg-earth-brown text-white text-sm font-medium rounded-full shadow-lg flex items-center gap-2">
                      <Star className="h-3 w-3 fill-current" />
                      {service.highlight}
                    </div>
                  )}

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-earth-brown/10 to-earth-brown/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-earth-brown" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-earth-brown flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="group/btn w-full sm:w-auto bg-earth-brown hover:bg-earth-brown-dark"
                  >
                    <Link href="/contact">
                      Enquire Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          {/* <div className="additional-services grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="additional-service-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-earth-brown/5 to-lotus-beige/10 border-2 border-earth-brown/10 hover:border-earth-brown/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-earth-brown/20 to-earth-brown/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-earth-brown" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-4 text-earth-brown hover:text-earth-brown-dark hover:bg-earth-brown/5 group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Yoga Styles */}
      <section className="styles-section section-padding bg-gradient-to-br from-lotus-beige-light to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="styles-header text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Yoga Styles I Teach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With expertise in multiple yoga traditions, I can recommend and
              teach the style that best suits your needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaStyles.map((style, index) => (
              <div
                key={index}
                className="style-card group p-6 rounded-2xl bg-white border-2 border-earth-brown/20 hover:border-earth-brown hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{style.icon}</span>
                  <span className="px-3 py-1 bg-earth-brown/10 text-earth-brown text-xs font-medium rounded-full">
                    {style.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-earth-brown transition-colors">
                  {style.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="specializations-section section-padding py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="spec-content">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Specialized Programs for Your Health Goals
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I offer targeted yoga programs designed to address specific
                health concerns. Each program combines traditional yoga wisdom
                with modern understanding of the body.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className="spec-item group flex items-center gap-3 p-4 rounded-xl bg-white border-2 border-earth-brown/10 hover:border-earth-brown hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {spec.icon}
                    </span>
                    <span className="font-medium text-sm text-foreground group-hover:text-earth-brown transition-colors">
                      {spec.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="spec-image relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-earth-brown/10">
                <Image
                  src="/specializations-image.jpg"
                  alt="Yoga Specializations"
                  fill
                  className="object-cover"
                  quality={75}
                />
              </div>
              {/* Decorative accents */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-earth-brown/30 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-earth-brown/30 rounded-br-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="testimonials-section section-padding bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-muted-foreground">
              Real feedback from real students
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card p-8 rounded-2xl bg-background border border-border hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4 text-earth-brown">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.program}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Schedule Section */}
      <section className="schedule-section relative section-padding py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-background.jpg"
            alt="Yoga Background"
            fill
            className="object-cover object-center"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/80 via-earth-brown-dark/70 to-earth-brown/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="schedule-content">
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5" />
                <span className="font-medium">Flexible Timings</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Video className="h-5 w-5" />
                <span className="font-medium">Live via Zoom</span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Not sure which program is right for you? Book a free consultation
              call and let's discuss your goals together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="group bg-white text-earth-brown hover:bg-lotus-beige shadow-2xl"
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
                  href="https://wa.me/917977319411"
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
