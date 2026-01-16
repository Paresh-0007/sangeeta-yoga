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
  Icon,
  HouseHeart,
  Presentation,
  ChevronLeft,
  ChevronRight,
  Award,
  Camera,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { peace } from "@lucide/lab";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PeaceIcon = (props: LucideProps) => <Icon {...props} iconNode={peace} />;

const features = [
  {
    icon: Video,
    title: "Online Classes",
    description:
      "Join group sessions from anywhere in the world with real-time guidance.",
  },
  {
    icon: Users,
    title: "Personal Sessions",
    description:
      "One-on-one attention with customized yoga plans tailored to your body and goals, online and offline.",
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
    description: " Experience the benefits of yoga with expert guidance.",
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

// NEW: Gallery Data (Only JPG Images)
const galleryImages = [
  {
    id: 1,
    src: "/gallery/yoga-1.jpg",
    title: "WEE- Certificate of Appreciation",
    size: "large",
  },
  {
    id: 2,
    src: "/gallery/yoga-3.jpg",
    title: "The Yoga Institute - RYS-500/RYT-500 yoga alliance certification",
    size: "tall",
  },
  {
    id: 3,
    src: "/gallery/yoga-5.jpg",
    title: "WEE- Event Participation",
    size: "small",
  },
  {
    id: 4,
    src: "/gallery/yoga-2.jpg",
    title: "WEE- Certificate of Appreciation",
    size: "tall",
    badge: "Award",
  },
  {
    id: 5,
    src: "/gallery/yoga-6.jpg",
    title: "Corporate Wellness Retreat",
    size: "small",
    badge: "Award",
  },
  {
    id: 6,
    src: "/gallery/yoga-4.jpg",
    title: "WEE- Event Participation",
    size: "small",
  },
  {
    id: 7,
    src: "/gallery/yoga-7-1.jpg",
    title: "Corporate Wellness Retreat",
    size: "small",
  },
];

const testimonials = [
  {
    quote:
      "Sangeeta is an excellent and very knowledgeable yoga teacher. One aspect of her teaching that I liked very much was how she explained the reasons and effects of each asana. I joined her class after I was struggling with my breathing post covid. Attending her sessions and practising pranayama helped me improve my breathing. I would recommend Sangeeta for Yoga and Pranayama. I also have recommend her to my friends here in the UK.",
    author: "Debbani Ghosh",
    role: "Working Professional",
    image: "/testimonials/debbani-ghosh.jpg",
  },
  {
    quote:
      "I have been learning Yoga for the last two years and my yoga teacher Sangeeta Mukherjee has been an amazing mentor. Yoga has helped me in any way. It has improved the quality of sleep, helped the quality of sleep, helped to maintain better posture, helped in digestion, and my neck issues due to long working hours in office has been resolved because of yoga. I recommend everyone to contact this amazing lady and mentor who will motivate and guide you in the correct direction and help you to lead a healthy life.",
    author: "Aryaa Bhatta Gangopadhyay",
    role: "Working Professional",
    image: "/testimonials/aarya.jpg",
  },
  {
    quote:
      "Sangeeta has been my yoga teacher for 5 months now. There has been major improvement in my sciatica pain and now my arm weakness has reduced. The regular breathing exercises have allowed me to gain calm in my cluttered brain. The dizziness with breathing has become less. The stretches allows me free movement of my body to some extent. Thank you Sangeeta for being a regular in my hectic schedule. I hope to continue this for a long time.",
    author: "Meghna Saraf",
    role: "School Teacher",
    image: "/testimonials/meghna-saraf.jpg",
  },
  {
    quote: `It's been couple of years I have been practicing yoga with Sangeeta.\n* There has been improvement in my balancing.\n* Body has become more flexible.\n* My sinus has come in control to a large extent.\nPreviously due to a fall I had reduced right leg ankle mobility. With yoga now my ankle movements are back to normal. My thyroid medicine dosage has also reduced.\nThank you Sangeeta for teaching us yoga in a right way.`,
    author: "Dipali Deshmukh",
    role: "Finance professional",
    image: "/testimonials/dipali.jpg",
  },
  {
    quote:
      "I have been practicing pranayama with Sangeeta since six months. She is a very good teacher. She is patient and explains the benefits of each asana and technique of doing it properly in a correct way in corporating yoga in daily life helps everyone. Sangeeta has initiated me to practice some asanas daily in order to stay healthy. I look forward to her classes as it helps me not just staying fit but to think positively.",
    author: "Kajori Sanyal",
    role: "Home Maker",
    image: "/testimonials/kajori.jpg",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialsAutoPlaying, setIsTestimonialsAutoPlaying] =
    useState(true);
  const [visibleTestimonials, setVisibleTestimonials] = useState(1);
  // Optimized Layout Spanning Logic for Bento Grid
  const getGridClasses = (size: string) => {
    switch (size) {
      case "large":
        // 2x2 on Mobile(2-col) and Desktop(4-col)
        return "col-span-2 row-span-2";
      case "tall":
        // 1x2 on all screens
        return "col-span-1 row-span-2";
      case "wide":
        // 2x1 on all screens
        return "col-span-2 row-span-1";
      default:
        // 1x1 on all screens
        return "col-span-1 row-span-1";
    }
  };

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
      // Hero Timeline
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

      // Floating Leaves
      gsap.to(".floating-leaf", {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5,
      });

      // Features Cards
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".features-section", start: "top 80%" },
        }
      );

      // Specializations
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
          },
        }
      );

      // NEW: Bento Gallery Animation
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".gallery-section", start: "top 70%" },
        }
      );

      // Testimonials
      gsap.fromTo(
        ".testimonial-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimonials-section", start: "top 75%" },
        }
      );

      // CTA Content
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cta-section", start: "top 80%" },
        }
      );

      // Parallax
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

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isTestimonialsAutoPlaying) return;
    const maxIndex = Math.max(0, testimonials.length - visibleTestimonials);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isTestimonialsAutoPlaying, visibleTestimonials]);

  const handleTestimonialsPrevious = () => {
    setIsTestimonialsAutoPlaying(false);
    setActiveTestimonial((prev) => Math.max(0, prev - 1));
  };
  const handleTestimonialsNext = () => {
    setIsTestimonialsAutoPlaying(false);
    const maxIndex = Math.max(0, testimonials.length - visibleTestimonials);
    setActiveTestimonial((prev) => Math.min(maxIndex, prev + 1));
  };
  const handleTestimonialsDotClick = (index: number) => {
    setIsTestimonialsAutoPlaying(false);
    setActiveTestimonial(index);
  };
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleTestimonials(3);
      else if (window.innerWidth >= 640) setVisibleTestimonials(2);
      else setVisibleTestimonials(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="hero-section relative min-h-[85vh] sm:min-h-[90vh] flex items-end md:items-start overflow-hidden">
        <div className="hero-bg absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          <Image
            src="/hero-mobile.jpg"
            alt="Yoga Hero Mobile"
            fill
            className="object-cover object-center opacity-90 block sm:hidden"
            priority
            sizes="100vw"
            quality={75}
          />
          <Image
            src="/hero-image.jpg"
            alt="Yoga Hero Desktop"
            fill
            className="object-cover object-right md:object-center opacity-90 hidden sm:block"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-12 md:pb-0 md:pt-32 w-full">
          <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4 sm:mb-6">
              Transform Your Life,
              <br />
              Through Personalized Yoga!
            </h1>
            <p className="hero-description text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Welcome to Sangeeta&apos;s Yoga Classes. Experience the healing
              power of yoga through online group classes and personal sessions.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-earth-brown hover:bg-earth-brown-dark text-white group w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Book A Session{" "}
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
                  Contact Us{" "}
                  <Call className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-earth-brown/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-48 h-48 sm:w-80 sm:h-80 bg-lotus-beige/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-brown/10 rounded-full text-earth-brown text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="h-4 w-4" /> Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
              How Can I Help You?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Whether you prefer group energy or personal attention, I offer
              flexible yoga solutions that fit your schedule and goals.
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/5 to-lotus-beige/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 lg:p-8 rounded-2xl bg-white border-2 border-earth-brown/20 group-hover:border-earth-brown transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 h-full">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-earth-brown/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 lg:h-8 lg:w-8 text-earth-brown" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <Link
                    href={
                      feature.title.includes("Classes") ||
                      feature.title.includes("Sessions")
                        ? "/classes"
                        : "/contact"
                    }
                    className="text-earth-brown font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {feature.title.includes("Classes") ||
                    feature.title.includes("Sessions")
                      ? "View Classes"
                      : "Contact Us"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile Carousel */}
          <div className="md:hidden relative mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeFeature * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="min-w-full px-3">
                    <div className="p-6 rounded-2xl bg-white border-2 border-earth-brown/10 shadow-xl flex flex-col items-start h-full">
                      <div className="w-14 h-14 rounded-2xl bg-earth-brown/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-7 w-7 text-earth-brown" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full border border-earth-brown/20 flex items-center justify-center shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`transition-all rounded-full h-2.5 ${
                      i === activeFeature
                        ? "w-6 bg-earth-brown"
                        : "w-2.5 bg-earth-brown/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-earth-brown/20 flex items-center justify-center shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="specializations-section relative py-16 sm:py-20 bg-gradient-to-br from-lotus-beige-light to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="spec-content order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Yoga That Addresses Your Specific Needs
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                Every body is different. I specialize in creating customized
                yoga programs that address your unique health concerns and
                fitness goals.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="spec-tag px-3 py-1.5 bg-white text-foreground rounded-full text-xs sm:text-sm font-medium border border-earth-brown/20 hover:bg-earth-brown hover:text-white transition-all cursor-pointer shadow-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <Button className="mt-8 group" asChild>
                <Link href="/classes">
                  View All Services{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="spec-image relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-earth-brown/10">
                <Image
                  src="/specializations-image.jpg"
                  alt="Yoga Specializations"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION: Optimized for Mobile & Tablet */}
      <section className="gallery-section relative py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-earth-brown/10 rounded-full text-earth-brown text-sm font-medium mb-4">
              <Camera className="h-4 w-4" /> Moments & Milestones
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Our Journey in Frames
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our daily practice, specialized workshops, and
              certifications.
            </p>
          </div>

          {/* GRID STRATEGY:
              - Mobile: grid-cols-2, auto-rows-[160px] (Smaller rows so 2-rows isn't huge)
              - Tablet: md:grid-cols-3, md:auto-rows-[180px]
              - Desktop: lg:grid-cols-4, lg:auto-rows-[220px]
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={`gallery-item group relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-earth-brown ${getGridClasses(
                  image.size
                )}`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-3 sm:p-6">
                  <h3 className="text-white font-bold text-xs sm:text-sm lg:text-lg line-clamp-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section relative bg-background py-16 sm:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
              What My Students Say
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Real transformations from real people who trusted their yoga
              journey with me.
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${
                    activeTestimonial * (100 / visibleTestimonials)
                  }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2 sm:px-4"
                    style={{ width: `${100 / visibleTestimonials}%` }}
                  >
                    <div className="h-full p-6 sm:p-8 rounded-2xl bg-card border border-earth-brown/20 hover:border-earth-brown hover:shadow-2xl transition-all duration-300 relative">
                      <div className="flex gap-1 mb-4 text-primary">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm italic leading-relaxed mb-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-earth-brown/30 relative flex-shrink-0">
                          {testimonial.image && (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm lg:text-base truncate">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handleTestimonialsPrevious}
                disabled={activeTestimonial === 0}
                className="w-12 h-12 rounded-full border border-earth-brown/20 flex items-center justify-center shadow-lg disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleTestimonialsNext}
                disabled={
                  activeTestimonial >= testimonials.length - visibleTestimonials
                }
                className="w-12 h-12 rounded-full border border-earth-brown/20 flex items-center justify-center shadow-lg disabled:opacity-30"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section relative py-20 sm:py-32 overflow-hidden bg-earth-brown">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-background.jpg"
            alt="Yoga CTA Background"
            fill
            className="object-cover opacity-80"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-earth-brown/90 via-earth-brown-dark/70 to-earth-brown/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center px-4">
          <div className="cta-content">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Take the first step towards a healthier, more balanced life. Book
              a free consultation call to discuss your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-earth-brown hover:bg-earth-brown hover:text-white transition-all shadow-xl"
                asChild
              >
                <Link href="/contact">
                  Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
