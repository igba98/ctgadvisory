import Image from "next/image";
import Link from "next/link";

export default function MarketExpansionPage() {
  const services = [
    {
      title: "Market Entry Strategy",
      description:
        "Develop comprehensive go-to-market strategies for new geographic or vertical markets.",
      icon: "🌍",
    },
    {
      title: "Market Research & Analysis",
      description:
        "Deep-dive market intelligence to identify opportunities, assess competition, and validate demand.",
      icon: "📊",
    },
    {
      title: "Partnership Development",
      description:
        "Identify and establish strategic partnerships to accelerate market penetration and growth.",
      icon: "🤝",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Navigate local regulations and compliance requirements for successful market entry.",
      icon: "⚖️",
    },
    {
      title: "Localization Strategy",
      description:
        "Adapt products, services, and messaging to resonate with local markets and cultures.",
      icon: "🗺️",
    },
    {
      title: "Growth Scaling",
      description:
        "Build scalable operations and infrastructure to support rapid expansion and sustained growth.",
      icon: "📈",
    },
  ];

  const process = [
    {
      phase: "Discovery",
      description:
        "Assess current capabilities, define expansion objectives, and identify target markets based on strategic fit and opportunity size.",
    },
    {
      phase: "Analysis",
      description:
        "Conduct comprehensive market research, competitive analysis, and feasibility studies to validate market potential.",
    },
    {
      phase: "Strategy",
      description:
        "Develop detailed entry strategy including positioning, pricing, channels, partnerships, and resource requirements.",
    },
    {
      phase: "Execution",
      description:
        "Support implementation with operational setup, partner onboarding, and go-to-market campaign execution.",
    },
    {
      phase: "Optimization",
      description:
        "Monitor performance, gather market feedback, and continuously refine strategy to maximize ROI and market share.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads.jpg"
            alt="Market Expansion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              MARKET EXPANSION
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
              Accelerate Growth Through{" "}
              <span className="text-secondary">Strategic Expansion</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Enter new markets with confidence. Our market expansion services
              combine deep market insights, proven methodologies, and hands-on
              execution support to drive successful growth initiatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Explore Opportunities</span>
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

      {/* Overview */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-light text-primary mb-6">
                Strategic Market Entry for{" "}
                <span className="text-secondary">Sustainable Growth</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Market expansion represents one of the most significant growth
                  opportunities—and challenges—for any business. Whether
                  you&apos;re entering new geographic territories, targeting
                  different customer segments, or launching into adjacent
                  industries, success requires more than ambition. It demands
                  rigorous analysis, strategic planning, and flawless execution.
                </p>
                <p>
                  Our Market Expansion services provide end-to-end support for
                  your growth initiatives. We combine market intelligence, local
                  expertise, and proven frameworks to help you make informed
                  entry decisions, minimize risks, and accelerate time to
                  market.
                </p>
                <p>
                  From initial market assessment to operational setup and
                  go-to-market execution, we partner with you at every stage to
                  ensure your expansion efforts deliver strong returns and
                  sustainable competitive advantages.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl">
                <div className="text-4xl font-light text-secondary mb-2">
                  85%
                </div>
                <p className="text-sm text-gray-600">
                  Success rate in market entry projects
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-2xl">
                <div className="text-4xl font-light text-primary mb-2">50+</div>
                <p className="text-sm text-gray-600">
                  Markets covered globally
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-2xl">
                <div className="text-4xl font-light text-primary mb-2">3x</div>
                <p className="text-sm text-gray-600">Average ROI improvement</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl">
                <div className="text-4xl font-light text-secondary mb-2">
                  6mo
                </div>
                <p className="text-sm text-gray-600">
                  Average time to market entry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-primary mb-4">
              Comprehensive{" "}
              <span className="text-secondary">Expansion Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From market research to operational execution, we provide the full
              spectrum of market expansion support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Our Proven{" "}
              <span className="text-secondary">5-Phase Approach</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A structured methodology that minimizes risk and maximizes success
              in new market entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.phase}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-primary mb-6">
            Ready to Expand Your{" "}
            <span className="text-secondary">Market Reach</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s identify the right markets and develop a winning strategy
            for your expansion goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Start Your Expansion</span>
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
