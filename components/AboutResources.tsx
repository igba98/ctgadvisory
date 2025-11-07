import Image from "next/image";

export default function AboutResources() {
  const resources = [
    {
      number: "01",
      title: "Publication Library",
      description:
        "Access our extensive collection of industry insights, research papers, and thought leadership articles.",
      image: "/images/desk-scene-with-laptop.jpg",
    },
    {
      number: "02",
      title: "Regulatory Library",
      description:
        "We keep an easily searchable depository of relevant regulatory notifications and updates helping clients and user to find them all at one place.",
      image: "/images/construction-building-seen-from.jpg",
    },
    {
      number: "03",
      title: "Forms and Templates",
      description:
        "Download essential business forms, templates, and documentation to streamline your operations.",
      image: "/images/flat-lay-people-working-desk.jpg",
    },
  ];

  return (
    <section className="bg-primary py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.number}
              className="group relative overflow-hidden rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>

                {/* Number Badge */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {resource.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {resource.description}
                </p>

                {/* Learn More Link */}
                <button className="text-secondary font-semibold inline-flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                  <span>Explore</span>
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
