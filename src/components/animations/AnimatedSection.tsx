"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "stagger";
  delay?: number;
  duration?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 0.8,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;
    let animationConfig: gsap.TweenVars = {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration,
      delay,
      ease: "power3.out",
    };

    switch (animation) {
      case "fade":
        animationConfig = { ... animationConfig, opacity: 0 };
        break;
      case "slideUp":
        animationConfig = { ...animationConfig, opacity: 0, y: 60 };
        break;
      case "slideLeft":
        animationConfig = { ...animationConfig, opacity: 0, x: 60 };
        break;
      case "slideRight":
        animationConfig = { ...animationConfig, opacity: 0, x:  -60 };
        break;
      case "scale":
        animationConfig = { ...animationConfig, opacity: 0, scale: 0.8 };
        break;
      case "stagger": 
        const children = element.children;
        gsap.from(children, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y:  40,
          duration,
          stagger: 0.2,
          ease: "power3.out",
        });
        return;
    }

    gsap.from(element, animationConfig);
  }, [animation, delay, duration]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}