"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const backgroundImages = [
  "/images/business-people-discussing.jpg",
  "/images/advisory-board-members-team-leaders-gathering-review-project-outcomes.jpg",
  "/images/construction-site.jpg",
  "/images/business-team-watching-discussing-project-presentation.jpg",
  "/images/aerial-view-city-night.jpg",
];

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt="Background"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay using project colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/60 to-secondary/50"></div>

      {/* Curved Background Shapes for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-tl from-secondary/15 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Hero Section */}
      <main className="relative z-10 px-8">
        <div className="max-w-7xl mx-auto pt-20 sm:pt-32 md:pt-32 lg:pt-48 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              {/* Hero Heading */}
              <h1 className="text-6xl lg:text-7xl font-light leading-tight">
                <span className="text-white">
                  Shape the future by investing
                </span>
                <br />
                <span className="text-white">in professional </span>
                <span className="text-secondary">advisory</span>
              </h1>

              {/* CTA Button */}
              <button className="bg-secondary text-primary px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl">
                Talk Strategy
              </button>

              {/* Reviews Section */}
              <div className="flex items-center space-x-4 pt-8">
                {/* Profile Images */}
                <div className="flex -space-x-3">
                  <div className="w-11 h-11 rounded-full border-2 border-primary bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white text-sm font-semibold">
                    A
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-primary bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                    B
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-primary bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                    C
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-primary bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white text-sm font-semibold">
                    D
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-secondary fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-white text-sm font-medium">
                    4.92{" "}
                    <span className="text-white/60">(from 200+ reviews)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center justify-end">
              <p className="text-white/80 text-base leading-relaxed max-w-md">
                Gain clarity, reduce risk, and make confident decisions with
                expert guidance in finance, law, tax, and strategy. Our team
                helps you turn complexity into opportunity.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
