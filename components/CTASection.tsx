"use client";

import { useState } from "react";


export default function CTASection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, company });
  };

  return (
    <section className="relative py-20 px-8 overflow-hidden">
      {/* Background Image */}
      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary leading-tight">
              Growth without limits
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Find the right strategy for your business, get expert guidance in
              minutes.
            </p>
          </div>

          {/* Right Column - Form Card */}
          <div className="bg-primary/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Header */}
              <div className="flex items-center space-x-2 mb-6">
                <svg
                    className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-primary text-lg font-semibold">
                  Get Started Today
                </h3>
              </div>

              {/* Company Input */}
                <div className="bg-primary/10 rounded-2xl p-4">
                <label className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="flex-1 outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                  />
                </label>
              </div>

              {/* Email Input */}
              <div className="bg-primary/10 rounded-2xl p-4">
                <label className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                  />
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-primary py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center space-x-2 group shadow-xl"
              >
                <span>Schedule Consultation</span>
               
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
    </section>
  );
}
