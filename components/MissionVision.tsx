import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR PURPOSE
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-primary">
            Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <div className="group">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/business-team-watching-discussing-project-presentation.jpg"
                alt="Our Mission"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60"></div>

              {/* Icon */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-light text-white">Our Mission</h3>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To empower businesses worldwide with strategic advisory services
                that drive sustainable growth, operational excellence, and
                long-term success. We are committed to delivering world-class
                expertise at accessible prices, making professional advisory
                services available to organizations of all sizes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We strive to be trusted partners in our clients&apos; journey,
                providing insights that transform challenges into opportunities
                and ambitions into achievements.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src="/images/advisory-board-members-team-leaders-gathering-review-project-outcomes.jpg"
                alt="Our Vision"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-secondary/60"></div>

              {/* Icon */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-light text-primary">Our Vision</h3>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in professional advisory services,
                recognized for innovation, integrity, and exceptional results.
                We envision a future where businesses across continents can
                access expert guidance that combines local market knowledge with
                international best practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through cutting-edge technology, continuous learning, and
                unwavering dedication to client success, we aim to set new
                standards in the advisory industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
