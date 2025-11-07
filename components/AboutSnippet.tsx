"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Strategic Business Advisory",
    description:
      "Strategic business advisory is very similar to management consulting and involves using comprehensive analysis to create a clear roadmap for growth. It's characterized by data-driven insights, actionable strategies, and a systematic approach to achieving sustainable competitive advantage.",
    image: "/images/business-people-discussing.jpg",
  },
  {
    title: "Financial Planning & Tax Strategy",
    description:
      "Expert financial planning combines deep analytical capabilities with strategic foresight to optimize your capital structure and tax position. We provide comprehensive guidance on investment decisions, risk management, and regulatory compliance.",
    image:
      "/images/group-colleagues-analyzing-financial-statistics-charts-planning-research-strategy-create-business-project-office-workers-doing-teamwork-with-digital-tablet-laptop-sofa.jpg",
  },
  {
    title: "Market Expansion & Growth",
    description:
      "Navigate new markets with confidence through our proven expansion strategies. We analyze market dynamics, competitive landscapes, and growth opportunities to help you make informed decisions about scaling your business.",
    image: "/images/aerial-view-city-night.jpg",
  },
  {
    title: "Operational Excellence",
    description:
      "Transform your operations with streamlined processes and enhanced efficiency. Our advisory services focus on optimizing workflows, reducing costs, and implementing best practices that drive measurable results.",
    image: "/images/people-office-work-day.jpg",
  },
];

export default function AboutSnippet() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

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
      <section className="bg-gradient-to-br from-gray-50 to-white  px-8">
        <div className="max-w-7xl mx-auto">
         

          {/* Carousel Container */}
          <div className="grid grid-cols-1 rounded-3xl lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Left Side - Content Card */}
            <div className="bg-primary text-white p-12 lg:p-16 flex flex-col justify-between min-h-[500px]">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-light leading-tight">
                  {currentService.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-4 mt-12">
                <button
                  onClick={handlePrevious}
                  className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-all group"
                  aria-label="Previous"
                >
                  <svg
                    className="w-6 h-6 text-white"
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
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-secondary transition-all group"
                  aria-label="Next"
                >
                  <svg
                    className="w-6 h-6 text-primary group-hover:text-white transition-colors"
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
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[500px] lg:h-auto">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover"
              />
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
