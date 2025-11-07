import Image from "next/image";
import Link from "next/link";

export default function StrategicAdvisoryPage() {
  const benefits = [
    {
      title: "Clear Direction",
      description:
        "Develop a comprehensive roadmap aligned with your vision and market realities.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Identify and leverage unique strengths to differentiate your business.",
    },
    {
      title: "Risk Mitigation",
      description:
        "Anticipate challenges and develop proactive strategies to minimize risks.",
    },
    {
      title: "Sustainable Growth",
      description:
        "Build scalable systems and processes for long-term success.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We conduct comprehensive analysis of your business model, market position, competitive landscape, and internal capabilities to identify opportunities and challenges.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Our experts collaborate with your leadership team to craft tailored strategies that align with your goals, resources, and market dynamics.",
    },
    {
      step: "03",
      title: "Implementation Planning",
      description:
        "We create detailed action plans with clear milestones, resource allocation, and accountability frameworks to ensure effective execution.",
    },
    {
      step: "04",
      title: "Execution Support",
      description:
        "Our team provides hands-on guidance throughout implementation, helping navigate challenges and adapt strategies as needed.",
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description:
        "We establish KPIs and dashboards to track progress, measure results, and continuously optimize your strategic initiatives.",
    },
  ];

  const offerings = [
    "Corporate Strategy Development",
    "Business Model Innovation",
    "Growth Strategy & Market Entry",
    "Competitive Positioning",
    "Strategic Planning & Roadmapping",
    "Organizational Design",
    "Digital Transformation Strategy",
    "Mergers & Acquisitions Advisory",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/business-team-watching-discussing-project-presentation.jpg"
            alt="Strategic Advisory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              STRATEGIC ADVISORY
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
              Transform Vision into{" "}
              <span className="text-secondary">Actionable Strategy</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Navigate complexity with confidence. Our strategic advisory
              services help you make informed decisions, capitalize on
              opportunities, and build sustainable competitive advantages in
              dynamic markets.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
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
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-primary mb-6">
                Strategic Clarity for{" "}
                <span className="text-secondary">Complex Challenges</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In today&apos;s rapidly evolving business landscape, strategic
                  clarity is not a luxury—it&apos;s a necessity. Our Strategic
                  Advisory services provide the insights, frameworks, and
                  expertise needed to navigate uncertainty and drive meaningful
                  results.
                </p>
                <p>
                  We partner with CEOs, executive teams, and boards to develop
                  robust strategies that balance ambition with pragmatism. Our
                  approach combines rigorous analysis, industry expertise, and
                  proven methodologies to deliver actionable recommendations
                  tailored to your unique context.
                </p>
                <p>
                  Whether you&apos;re entering new markets, transforming your
                  business model, or optimizing operations, we provide the
                  strategic guidance to turn your vision into reality.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/10"
                >
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-4">
              Our Strategic Advisory{" "}
              <span className="text-secondary">Process</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A proven methodology that transforms strategic intent into
              measurable business outcomes.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                      <span className="text-primary text-xl font-bold">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-primary mb-4">
              What We <span className="text-secondary">Deliver</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive strategic services tailored to your specific needs
              and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-secondary/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-secondary flex-shrink-0 mt-1"
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
                  <span className="text-primary font-medium group-hover:text-secondary transition-colors">
                    {offering}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-primary mb-6">
            Ready to Define Your{" "}
            <span className="text-secondary">Strategy</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how our strategic advisory services can
            accelerate your growth and competitive positioning.
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
