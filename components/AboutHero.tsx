import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aerial-view-city-night.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay with project colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl lg:text-7xl font-light text-white mb-6">
                Since 2012
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                CTG Advisory is a leading provider of professional services
                split into three core competencies.
              </p>
            </div>

            {/* Description Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-white/80 leading-relaxed">
                CTG Advisory grew from a vision to create a world-class
                outsourcing and professional services firm that could service
                clients across the world at affordable prices. Founded by a team
                of dynamic individuals, the firm has in almost a decade of
                operations, established a branch which is associated with high
                quality professional services and in-depth insight into
                regulatory matters.
              </p>
            </div>

            {/* Learn More Button */}
            <button className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl group">
              <span>Learn More</span>
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

          {/* Right Column - Image */}
          <div className="relative h-[600px]">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
              <Image
                src="/images/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads.jpg"
                alt="City Aerial View"
                fill
                className="object-cover"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
