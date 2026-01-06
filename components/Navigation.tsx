"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Strategic Advisory", href: "/services/strategic-advisory" },
    {
      name: "Financial Planning & Analysis",
      href: "/services/financial-planning",
    },
    { name: "Tax Strategy & Compliance", href: "/services/tax-strategy" },
    { name: "Market Expansion", href: "/services/market-expansion" },
    {
      name: "Operational Excellence",
      href: "/services/operational-excellence",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <img 
            src="/logo/CTG Official Logo-02 (1).png" 
            alt="CTG Advisory Logo" 
            className="h-16 w-auto"
          />
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-8">
          <Link
            href="/about"
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center space-x-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  isServicesOpen ? "block" : "hidden"
                }`}
              >
                <div className="w-72 bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-primary hover:bg-secondary/10 hover:text-secondary transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/team"
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            Team
          </Link>

          <Link
            href="/contact"
            className="bg-secondary text-primary text-sm font-semibold px-6 py-2 rounded-full hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg inline-block"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
}
