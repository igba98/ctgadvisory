"use client";

export default function ProblemSolution() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-20 px-8 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(246,172,28,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-white/60 text-sm font-medium mb-4 uppercase tracking-wider">
            Our Advisory Process <span className="text-secondary">01</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Discovery */}
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-white mb-6">Discovery</h2>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                We begin by deeply understanding your business challenges,
                objectives, and market positioning through comprehensive
                analysis and stakeholder engagement.
              </p>

              <p>
                Our team conducts thorough assessments of your current
                operations, financial structures, regulatory compliance, and
                strategic goals to identify opportunities and potential risks.
              </p>

              <p className="text-white/90 font-medium">
                This foundation phase ensures we develop solutions perfectly
                aligned with your vision, leveraging data-driven insights and
                industry best practices for maximum impact.
              </p>
            </div>
          </div>

          {/* Center Column - Circular Diagram */}
          <div className="flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Perfect Circle SVG */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                {/* Background reference circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />

                {/* Segment 1 - Purple/Lavender (140 degrees) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="12"
                  strokeDasharray="195 502"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />

                {/* Segment 2 - Green (90 degrees) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="12"
                  strokeDasharray="125 502"
                  strokeDashoffset="-200"
                  strokeLinecap="round"
                />

                {/* Segment 3 - Orange (130 degrees) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="12"
                  strokeDasharray="180 502"
                  strokeDashoffset="-330"
                  strokeLinecap="round"
                />
              </svg>

              {/* Dots and Numbers - Positioned outside the rotated SVG */}
              <div className="absolute inset-0">
                {/* Dot 01 - Left side */}
                <div className="absolute" style={{ left: "8%", top: "58%" }}>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">01</span>
                  </div>
                </div>

                {/* Dot 02 - Top */}
                <div className="absolute" style={{ left: "44%", top: "4%" }}>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">02</span>
                  </div>
                </div>

                {/* Dot 03 - Right side */}
                <div className="absolute" style={{ right: "6%", top: "47%" }}>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">03</span>
                  </div>
                </div>
              </div>

              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-5xl font-light tracking-wide">
                  CTG
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Solutions */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">02</span>
                </div>
                <h3 className="text-2xl font-light text-white">
                  Strategy Development
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                We craft tailored strategies that address your unique challenges
                and capitalize on growth opportunities. Our experts develop
                comprehensive roadmaps covering financial planning, operational
                optimization, and market expansion strategies.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">03</span>
                </div>
                <h3 className="text-2xl font-light text-white">
                  Implementation & Support
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                We don&apos;t just advise—we partner with you through execution.
                Our team provides hands-on support, continuous monitoring, and
                adaptive solutions to ensure sustainable success and measurable
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
