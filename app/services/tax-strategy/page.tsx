import Image from "next/image";
import Link from "next/link";

export default function TaxStrategyPage() {
  const services = [
    {
      title: "Tax Planning & Strategy",
      description:
        "Develop comprehensive tax strategies that minimize liability while ensuring full compliance with regulations.",
    },
    {
      title: "International Tax Advisory",
      description:
        "Navigate cross-border tax complexities with expert guidance on transfer pricing, treaty planning, and global compliance.",
    },
    {
      title: "Tax Due Diligence",
      description:
        "Comprehensive tax reviews for M&A transactions to identify risks and opportunities.",
    },
    {
      title: "Compliance Management",
      description:
        "Ensure timely and accurate tax filings across all jurisdictions with our compliance support services.",
    },
    {
      title: "Tax Dispute Resolution",
      description:
        "Expert representation and advisory services for tax audits, disputes, and negotiations with authorities.",
    },
    {
      title: "R&D Tax Credits",
      description:
        "Identify and maximize research and development tax incentives to reduce your effective tax rate.",
    },
  ];

  const advantages = [
    "Reduced Tax Liability",
    "Enhanced Compliance",
    "Risk Mitigation",
    "Strategic Tax Planning",
    "Expert Representation",
    "Global Coverage",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aerial-view-city-night.jpg"
            alt="Tax Strategy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              TAX STRATEGY & COMPLIANCE
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
              Strategic Tax Solutions for{" "}
              <span className="text-secondary">Global Businesses</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Navigate the complex world of taxation with confidence. Our tax
              experts help you optimize your tax position while maintaining full
              compliance across all jurisdictions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Request Consultation</span>
              <svg
                className="w-5 h-5"
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
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-light text-primary mb-6">
                Proactive Tax Strategy &{" "}
                <span className="text-secondary">Compliance Excellence</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In an increasingly complex regulatory environment, effective
                  tax strategy requires more than compliance—it demands
                  proactive planning, deep expertise, and global perspective.
                  Our Tax Strategy & Compliance services help you minimize tax
                  burden while managing risk and maintaining excellent
                  relationships with tax authorities.
                </p>
                <p>
                  We work with businesses of all sizes, from emerging startups
                  to multinational corporations, providing tailored tax
                  solutions that align with your business objectives. Our team
                  stays ahead of regulatory changes, ensuring your tax strategy
                  remains optimized and compliant in every jurisdiction where
                  you operate.
                </p>
                <p>
                  Whether you&apos;re expanding internationally, restructuring
                  your operations, or navigating a tax audit, our experts
                  provide the guidance and support you need to achieve the best
                  possible outcomes.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-6 h-6 text-secondary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-primary mb-4">
              Comprehensive <span className="text-secondary">Tax Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end tax advisory services designed to optimize your tax
              position and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-primary py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Our <span className="text-secondary">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Analysis
              </h3>
              <p className="text-white/70">
                Comprehensive review of your current tax position and
                obligations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Strategy
              </h3>
              <p className="text-white/70">
                Development of optimized tax strategies aligned with your goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Implementation
              </h3>
              <p className="text-white/70">
                Execution of tax strategies with ongoing compliance management
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Optimization
              </h3>
              <p className="text-white/70">
                Continuous monitoring and refinement to maximize benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-primary mb-6">
            Ready to Optimize Your{" "}
            <span className="text-secondary">Tax Strategy</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our tax experts help you navigate complexity and minimize your
            tax burden while staying compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Get Started</span>
              <svg
                className="w-5 h-5"
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
            <Link
              href="/services"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all border-2 border-primary/20"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
