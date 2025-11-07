import Image from "next/image";
import Link from "next/link";

export default function OperationalExcellencePage() {
  const capabilities = [
    {
      title: "Process Optimization",
      description:
        "Streamline operations and eliminate inefficiencies through lean methodologies and continuous improvement.",
      metrics: "30-50% efficiency gains",
    },
    {
      title: "Supply Chain Management",
      description:
        "Optimize your supply chain for cost, speed, and resilience with data-driven insights.",
      metrics: "20-40% cost reduction",
    },
    {
      title: "Quality Management",
      description:
        "Implement robust quality systems that reduce defects and enhance customer satisfaction.",
      metrics: "60-80% defect reduction",
    },
    {
      title: "Performance Management",
      description:
        "Establish KPIs, dashboards, and management systems that drive accountability and results.",
      metrics: "Real-time visibility",
    },
    {
      title: "Change Management",
      description:
        "Guide organizational transformation with proven change management frameworks.",
      metrics: "85% adoption rate",
    },
    {
      title: "Technology Integration",
      description:
        "Leverage automation, AI, and digital tools to enhance operational capabilities.",
      metrics: "3-5x productivity boost",
    },
  ];

  const benefits = [
    "Reduced operational costs",
    "Improved efficiency & productivity",
    "Enhanced quality & consistency",
    "Better resource utilization",
    "Increased customer satisfaction",
    "Faster time to market",
    "Stronger competitive position",
    "Sustainable performance improvements",
  ];

  const industries = [
    { name: "Manufacturing", icon: "🏭" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Financial Services", icon: "🏦" },
    { name: "Technology", icon: "💻" },
    { name: "Retail", icon: "🛒" },
    { name: "Logistics", icon: "🚚" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/construction-site.jpg"
            alt="Operational Excellence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OPERATIONAL EXCELLENCE
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
              Transform Operations into{" "}
              <span className="text-secondary">Competitive Advantage</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Maximize efficiency, quality, and profitability through systematic
              operational improvements. Our operational excellence services help
              you build world-class operations that drive sustainable results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Optimize Your Operations</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-4xl font-light text-primary mb-6">
                Build World-Class{" "}
                <span className="text-secondary">Operations</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Operational excellence isn&apos;t just about cutting costs—
                  it&apos;s about creating sustainable competitive advantages
                  through superior processes, systems, and capabilities. In
                  today&apos;s fast-paced markets, operational efficiency and
                  agility are critical differentiators.
                </p>
                <p>
                  Our Operational Excellence services combine proven
                  methodologies like Lean, Six Sigma, and Theory of Constraints
                  with cutting-edge technologies to deliver measurable, lasting
                  improvements. We work across all aspects of your
                  operations—from supply chain to production to customer
                  service—identifying opportunities and implementing solutions
                  that drive results.
                </p>
                <p>
                  Whether you&apos;re looking to reduce costs, improve quality,
                  accelerate delivery, or enhance customer experience, our
                  experts provide the frameworks, tools, and hands-on support to
                  transform your operations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <svg
                        className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
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
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Assess</h4>
                      <p className="text-white/80 text-sm">
                        Comprehensive operational assessment to identify gaps
                        and opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Design</h4>
                      <p className="text-white/80 text-sm">
                        Develop optimized processes and systems tailored to your
                        needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Implement</h4>
                      <p className="text-white/80 text-sm">
                        Execute improvements with change management and training
                        support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sustain</h4>
                      <p className="text-white/80 text-sm">
                        Embed continuous improvement culture and monitor
                        performance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-primary mb-4">
              Comprehensive <span className="text-secondary">Capabilities</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end operational improvement services across all aspects of
              your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                  {capability.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-primary py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Industry <span className="text-secondary">Expertise</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We bring deep operational expertise across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all text-center"
              >
                <div className="text-5xl mb-3">{industry.icon}</div>
                <p className="text-white font-medium">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-primary mb-6">
            Ready to Achieve{" "}
            <span className="text-secondary">Operational Excellence</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s transform your operations and unlock sustainable
            competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>Start Your Transformation</span>
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
