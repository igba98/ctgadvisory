"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Strategic Business Advisory",
    description:
      "Strategic business advisory is very similar to management consulting and involves using comprehensive analysis to create a clear roadmap for growth. It's characterized by data-driven insights, actionable strategies, and a systematic approach to achieving sustainable competitive advantage.",
    image: "/images/business-people-discussing.jpg",
    link: "/services/strategic-advisory",
  },
  {
    title: "Financial Planning & Tax Strategy",
    description:
      "Expert financial planning combines deep analytical capabilities with strategic foresight to optimize your capital structure and tax position. We provide comprehensive guidance on investment decisions, risk management, and regulatory compliance.",
    image:
      "/images/group-colleagues-analyzing-financial-statistics-charts-planning-research-strategy-create-business-project-office-workers-doing-teamwork-with-digital-tablet-laptop-sofa.jpg",
    link: "/services/financial-planning",
  },
  {
    title: "Market Expansion & Growth",
    description:
      "Navigate new markets with confidence through our proven expansion strategies. We analyze market dynamics, competitive landscapes, and growth opportunities to help you make informed decisions about scaling your business.",
    image: "/images/aerial-view-city-night.jpg",
    link: "/services/market-expansion",
  },
  {
    title: "Operational Excellence",
    description:
      "Transform your operations with streamlined processes and enhanced efficiency. Our advisory services focus on optimizing workflows, reducing costs, and implementing best practices that drive measurable results.",
    image: "/images/people-office-work-day.jpg",
    link: "/services/operational-excellence",
  },
];

export default function AboutSnippet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play carousel every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services[currentIndex];

  return (
    <>
      {/* Stats Section */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-full mx-auto sm:px-20">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-primary leading-tight mb-16 max-w-5xl">
            Crafting Strategic Growth and Excellence: The Expertise of Our
            Advisors in Empowering Businesses for Sustainable Success
          </h2>

          <div className="flex items-center gap-24 max-w-7xl mx-auto">
            {/* Stats Column 1 */}
            <div className="space-y-4">
              <div className="text-6xl lg:text-7xl font-light text-secondary">
                150+
              </div>
              <div className="text-xl text-gray-600">Total Projects</div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-2px bg-secondary h-32"></div>

            {/* Stats Column 2 */}
            <div className="space-y-4">
              <div className="text-6xl lg:text-7xl font-light text-secondary">
                120+
              </div>
              <div className="text-xl text-gray-600">Total Testimonials</div>
            </div>

            {/* Description */}
            <div className="lg:col-span-3 ">
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                Art and science of enhancing business operations to achieve
                healthier and more strategically optimized outcomes for
                companies utilizing our expertise. An advisory consultant is
                someone who plans, researches, coordinates, and manages such
                transformation projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-10 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-ctg-mustard uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-ctg-blue leading-tight mt-4 max-w-4xl mx-auto">
              Smart Strategy Meets the Human Insight That{" "}
              <span className="text-ctg-mustard">Holistic</span>
            </h2>
          </div>

          {/* Carousel Container - Large Image with Overlapping Content Card */}
          <div className="relative flex justify-center">
            {/* Large Image Card - Half width on large screens */}
            <div 
              key={currentIndex}
              className="relative w-full lg:w-[70%] h-[550px] lg:h-[500px] rounded-3xl overflow-hidden animate-fadeIn"
            >
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover animate-slowZoom"
              />
              {/* Subtle overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-ctg-blue/30 to-transparent"></div>
              
              {/* Navigation Arrows - On Image Card */}
              <div className="absolute bottom-8 left-8 flex items-center space-x-3">
                <button
                  onClick={handlePrevious}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group"
                  aria-label="Previous"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-ctg-mustard flex items-center justify-center hover:bg-ctg-mustard/90 transition-all group"
                  aria-label="Next"
                >
                  <svg
                    className="w-5 h-5 text-ctg-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Slide Counter */}
                <span className="text-white text-sm ml-2 font-medium">
                  {currentIndex + 1} / {services.length}
                </span>
              </div>
            </div>

            {/* Content Card - Floating on Right, overlapping the image */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-8 xl:-right-4 w-[90%] sm:w-[420px] lg:w-[500px] xl:w-[520px] bg-ctg-blue text-white p-8 lg:p-12 rounded-2xl shadow-2xl">
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-light leading-tight">
                  {currentService.title}
                </h3>
                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  {currentService.description}
                </p>
                <Link
                  href={currentService.link}
                  className="inline-flex items-center text-white hover:text-ctg-mustard transition-colors duration-300 font-medium group"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-12 bg-secondary"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
