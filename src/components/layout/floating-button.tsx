"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button after scrolling 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Sangeeta, I'm interested in learning more about your yoga classes!"
  );
  const whatsappNumber = "917977319411"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={`w-12 h-12 rounded-full bg-earth-brown hover:bg-earth-brown-dark text-white shadow-2xl transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } hover:scale-110 group`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
      </Button>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Animation Ring */}
        <span className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-ping opacity-75" />
        
        {/* Button */}
        <Button
          size="icon"
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 group"
        >
          <FaWhatsapp id="whatsapp-icon" className="group-hover:rotate-12 transition-transform" />
        </Button>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with Sangeeta
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900" />
        </div>
      </a>
    </div>
  );
}