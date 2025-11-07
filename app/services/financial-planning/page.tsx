import Image from "next/image";
import Link from "next/link";

export default function FinancialPlanningPage() {
  const services = [
    {
      title: "Financial Modeling & Forecasting",
      description:
        "Build robust financial models to predict performance, test scenarios, and support strategic decisions with confidence.",
      icon: "📊",
    },
    {
      title: "Budgeting & Planning",
      description:
        "Develop comprehensive budgets and multi-year plans that align resources with strategic priorities.",
      icon: "📈",
    },
    {
      title: "Performance Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics and custom dashboards.",
      icon: "📉",
    },
    {
      title: "Cash Flow Management",
      description:
        "Optimize working capital and cash flow to ensure liquidity while maximizing returns on excess cash.",
      icon: "💰",
    },
    {
      title: "Investment Analysis",
      description:
        "Evaluate capital projects and investments using NPV, IRR, and other sophisticated financial metrics.",
      icon: "💼",
    },
    {
      title: "Financial Due Diligence",
      description:
        "Comprehensive financial analysis for mergers, acquisitions, and strategic partnerships.",
      icon: "🔍",
    },
  ];

  const benefits = [
    "Data-Driven Decision Making",
    "Improved Profitability",
    "Better Resource Allocation",
    "Enhanced Forecasting Accuracy",
    "Risk Mitigation",
    "Strategic Insights",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/business-people-discussing.jpg"
            alt="Financial Planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              FINANCIAL PLANNING & ANALYSIS
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
              Turn Financial Data into{" "}
              <span className="text-secondary">Strategic Advantage</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Leverage data-driven insights to optimize performance, manage
              risk, and drive sustainable growth. Our FP&A services transform
              your financial data into a powerful strategic asset.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
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
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light text-primary mb-6">
                Precision Financial Intelligence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In an era of unprecedented market volatility and competitive
                  pressure, financial planning and analysis (FP&A) has evolved
                  from a back-office function to a critical strategic
                  capability. Our FP&A services provide the insights and
                  frameworks you need to make informed decisions quickly and
                  confidently.
                </p>
                <p>
                  We combine deep financial expertise with advanced analytics
                  and industry best practices to deliver comprehensive FP&A
                  solutions. From detailed financial modeling to sophisticated
                  scenario analysis, we help you understand the financial
                  implications of every strategic decision.
                </p>
                <p>
                  Our team becomes an extension of yours, providing ongoing
                  support to ensure your financial planning processes are
                  robust, efficient, and aligned with your business objectives.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-primary"
                  >
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0"
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
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-6">
                    What Sets Us Apart
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-secondary text-xl">•</span>
                      <span>
                        <strong>AI-Powered Analytics:</strong> Leverage machine
                        learning for predictive insights
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-secondary text-xl">•</span>
                      <span>
                        <strong>Real-Time Dashboards:</strong> Access critical
                        metrics anytime, anywhere
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-secondary text-xl">•</span>
                      <span>
                        <strong>Scenario Planning:</strong> Model multiple
                        futures to prepare for any outcome
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-secondary text-xl">•</span>
                      <span>
                        <strong>Industry Benchmarks:</strong> Compare
                        performance against peers and leaders
                      </span>
                    </li>
                  </ul>
                </div>
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
              <span className="text-secondary">FP&A Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From forecasting to performance management, we provide end-to-end
              financial planning and analysis solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Optimize Your{" "}
            <span className="text-secondary">Financial Performance</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let&apos;s discuss how our FP&A services can drive better decisions
            and stronger results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Schedule Consultation</span>
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
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-base font-semibold transition-all border-2 border-white/20"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
