export default function OurServiceHomePage() {
  const services = [
    {
      title: "Operational Efficiency",
      description:
        "We analyze your existing operations to identify inefficiencies & implement systems that improve productivity",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      highlight: false,
    },
    {
      title: "Planning & Growth Consulting",
      description:
        "We help businesses define clear goals, identify growth opportunities, and develop actionable strategies",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      highlight: true,
    },
    {
      title: "Financial & Performance",
      description:
        "From financial forecasting to KPI tracking, help you understand your numbers and use them to guide",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      highlight: false,
    },
  ];

  return (
    <section className="bg-primary py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
          <div className="flex-1">
            {/* Badge */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-2 text-white/80">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.89l7-3.11v8.2z" />
                </svg>
                <span className="text-sm font-medium uppercase tracking-wider">
                  Our Service
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-2xl">
              Smart Strategy Meets the Human Insight That&apos;s Holistic
            </h2>
          </div>

          {/* View More Button */}
          <div className="lg:mt-8">
            <button className="bg-secondary/20 hover:bg-secondary text-white px-8 py-4 rounded-full text-base font-medium transition-all inline-flex items-center space-x-2 group border border-secondary/30 hover:border-secondary">
              <span>View More Service</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all hover:scale-105 ${
                service.highlight
                  ? "bg-secondary/20 border-2 border-secondary/40"
                  : "bg-white/5 border-2 border-white/10 hover:border-white/20"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  service.highlight
                    ? "bg-secondary/30 text-secondary"
                    : "bg-white/10 text-white/80"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Read More Link */}
              <button className="text-white font-medium inline-flex items-center space-x-2 hover:text-secondary transition-colors group">
                <span>Read More</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
