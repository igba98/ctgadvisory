"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "ACE Advisory swiftly resolved our entity setup challenges in Bangladesh. We now rely on their top-tier back-office accounting, benefiting from their professionalism, outstanding quality support, and commitment beyond the defined scope.",
    name: "Ivan Tung",
    role: "Financial Controller at Bloomidcannex International Trading Co. Ltd.",
  },
  {
    quote:
      "ACE Advisory set up our back-office in Bangladesh and continues to deliver top-tier finance, accounting, payroll, and tax services. Their expertise enabled a seamless SAP localization in under three months, ensuring compliance and efficiency.",
    name: "Richard Hormann",
    role: "Controller of Accounting/Treasury/Back Office, Excelerate Energy L.P.",
  },
  {
    quote:
      "ACE Advisory has transformed our financial operations with their exceptional accounting and advisory services. Their team's dedication, expertise, and unwavering support have been instrumental in our growth.",
    name: "Rajkiran Mehta",
    role: "Vice President, Global Operations",
  },
  {
    quote:
      "Working with CTG Advisory has been a game-changer for our business. Their strategic insights and hands-on approach helped us navigate complex market challenges and achieve sustainable growth.",
    name: "Sarah Chen",
    role: "CEO, TechVenture Solutions",
  },
  {
    quote:
      "The team at CTG Advisory provided us with the clarity and direction we needed. Their comprehensive analysis and actionable strategies delivered results that exceeded our expectations.",
    name: "Michael Rodriguez",
    role: "Managing Director, Apex Consulting Group",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - itemsPerView ? 0 : prev + 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  // If we don't have enough testimonials at the end, wrap around
  if (visibleTestimonials.length < itemsPerView) {
    const remaining = itemsPerView - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <section className="bg-primary py-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
          <div>
            {/* Badge */}
            <div className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">
              TESTIMONIAL
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Voices of Happy Clients
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group border border-white/20"
              aria-label="Previous testimonials"
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
              className="w-12 h-12 rounded-full bg-white hover:bg-secondary flex items-center justify-center transition-all group"
              aria-label="Next testimonials"
            >
              <svg
                className="w-5 h-5 text-primary group-hover:text-white transition-colors"
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-secondary/60"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-white/80 text-base leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold text-lg mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center space-x-3 mt-8">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20"
            aria-label="Previous testimonials"
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
            className="w-12 h-12 rounded-full bg-white hover:bg-secondary flex items-center justify-center transition-all"
            aria-label="Next testimonials"
          >
            <svg
              className="w-5 h-5 text-primary"
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

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({
            length: Math.ceil(testimonials.length / itemsPerView),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? "w-8 bg-secondary"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
