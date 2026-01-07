"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads (1).jpg",
    headline: "Shape the future by investing",
    subline: "in professional",
    highlight: "advisory",
  },
  {
    image: "/images/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads.jpg",
    headline: "Build success through strategic",
    subline: "business",
    highlight: "consulting",
  },
  {
    image: "/images/aerial-view-fishing-boats-tropical-sea-coast-with-sandy-beach-sunset-summer-holiday-indian-ocean-zanzibar-africa-landscape-with-boat-green-trees-transparent-blue-water-top-view.jpg",
    headline: "Navigate complexity with expert",
    subline: "financial",
    highlight: "guidance",
  },
  {
    image: "/images/business-people-discussing (1).jpg",
    headline: "Transform challenges into",
    subline: "growth",
    highlight: "opportunities",
  },
  {
    image: "/images/construction-site.jpg",
    headline: "Partner with leaders in",
    subline: "strategic",
    highlight: "development",
  },
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textPhase, setTextPhase] = useState<"headline" | "subline" | "highlight">("headline");

  const currentSlideData = slides[currentSlide];
  
  // Get the full text based on current phase
  const getFullText = useCallback(() => {
    switch (textPhase) {
      case "headline":
        return currentSlideData.headline;
      case "subline":
        return currentSlideData.headline + "\n" + currentSlideData.subline + " ";
      case "highlight":
        return currentSlideData.headline + "\n" + currentSlideData.subline + " " + currentSlideData.highlight;
    }
  }, [currentSlideData, textPhase]);

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;

    const fullText = getFullText();
    
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      // Move to next phase or finish
      if (textPhase === "headline") {
        setTimeout(() => setTextPhase("subline"), 200);
      } else if (textPhase === "subline") {
        setTimeout(() => setTextPhase("highlight"), 200);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping, textPhase, getFullText]);

  // Slide transition every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setDisplayedText("");
      setTextPhase("headline");
      setIsTyping(true);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Parse displayed text for rendering
  const parseDisplayedText = () => {
    const parts = displayedText.split("\n");
    const headline = parts[0] || "";
    const secondLine = parts[1] || "";
    
    // Check if we've started typing the highlight
    const fullSecondLine = currentSlideData.subline + " " + currentSlideData.highlight;
    const sublineWithSpace = currentSlideData.subline + " ";
    
    let subline = "";
    let highlight = "";
    
    if (secondLine.length > 0) {
      if (secondLine.length <= sublineWithSpace.length) {
        subline = secondLine;
      } else {
        subline = sublineWithSpace;
        highlight = secondLine.slice(sublineWithSpace.length);
      }
    }
    
    return { headline, subline, highlight };
  };

  const { headline, subline, highlight } = parseDisplayedText();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Images with Zoom Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                index === currentSlide ? "animate-zoom" : ""
              }`}
              style={{
                animation: index === currentSlide ? "zoomPan 10s ease-out forwards" : "none",
              }}
            >
              <Image
                src={slide.image}
                alt="Background"
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlay using project colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/60 to-secondary/50"></div>

      {/* Curved Background Shapes for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-tl from-secondary/15 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Hero Section - Centered */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Heading with Typing Effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8 min-h-[200px] sm:min-h-[180px] lg:min-h-[200px]">
            <span className="text-white">
              {headline}
              {textPhase === "headline" && isTyping && (
                <span className="animate-pulse">|</span>
              )}
            </span>
            {subline && (
              <>
                <br />
                <span className="text-white">
                  {subline}
                  {textPhase === "subline" && isTyping && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
                <span className="text-secondary">
                  {highlight}
                  {textPhase === "highlight" && isTyping && (
                    <span className="animate-pulse">|</span>
                  )}
                </span>
              </>
            )}
          </h1>

          {/* Description - Centered */}
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Gain clarity, reduce risk, and make confident decisions with
            expert guidance in finance, law, tax, and strategy. Our team
            helps you turn complexity into opportunity.
          </p>

          {/* CTA Button - Centered */}
          <button className="bg-secondary text-primary px-10 py-4 rounded-full text-base font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
            Talk Strategy
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setDisplayedText("");
                  setTextPhase("headline");
                  setIsTyping(true);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-secondary w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* CSS Animation for Zoom Effect */}
      <style jsx>{`
        @keyframes zoomPan {
          0% {
            transform: scale(1) translateX(0);
          }
          100% {
            transform: scale(1.15) translateX(-2%);
          }
        }
      `}</style>
    </div>
  );
}
