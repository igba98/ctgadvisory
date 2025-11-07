import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const leadership = [
    {
      name: "Michael Anderson",
      role: "Chief Executive Officer & Founder",
      bio: "With over 20 years of experience in strategic consulting and business transformation, Michael founded CTG Advisory to provide world-class advisory services to businesses worldwide. His expertise spans corporate strategy, M&A, and operational excellence across multiple industries.",
      expertise: [
        "Strategic Planning",
        "M&A Advisory",
        "Business Transformation",
      ],
      education: "MBA, Harvard Business School | BS Economics, MIT",
      image: "/images/business-people-discussing.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Chief Financial Officer",
      bio: "Sarah brings 15+ years of financial leadership experience from Fortune 500 companies and Big 4 consulting firms. She specializes in financial planning, performance management, and building scalable finance operations that drive growth.",
      expertise: ["Financial Strategy", "FP&A", "Performance Management"],
      education: "CPA, CFA | MS Finance, London Business School",
      image:
        "/images/advisory-board-members-team-leaders-gathering-review-project-outcomes.jpg",
    },
    {
      name: "David Martinez",
      role: "Chief Operating Officer",
      bio: "David is a seasoned operations leader with extensive experience in process optimization, supply chain management, and digital transformation. He has led operational excellence initiatives for global organizations across manufacturing, logistics, and technology sectors.",
      expertise: [
        "Operations Strategy",
        "Process Excellence",
        "Digital Transformation",
      ],
      education:
        "MS Industrial Engineering, Stanford | Six Sigma Master Black Belt",
      image:
        "/images/business-team-watching-discussing-project-presentation.jpg",
    },
  ];

  const team = [
    {
      name: "Jennifer Williams",
      role: "Senior Partner, Strategy",
      specialty: "Corporate Strategy & Growth",
      image: "/images/aerial-view-city-night.jpg",
    },
    {
      name: "Robert Taylor",
      role: "Senior Partner, Finance",
      specialty: "Financial Planning & Analysis",
      image: "/images/construction-site.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Partner, Tax Advisory",
      specialty: "International Tax & Compliance",
      image: "/images/business-people-discussing.jpg",
    },
    {
      name: "James Brown",
      role: "Partner, Market Expansion",
      specialty: "Global Market Entry Strategy",
      image:
        "/images/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads.jpg",
    },
    {
      name: "Lisa Wang",
      role: "Director, Operations",
      specialty: "Operational Excellence & Lean",
      image:
        "/images/advisory-board-members-team-leaders-gathering-review-project-outcomes.jpg",
    },
    {
      name: "Thomas Anderson",
      role: "Director, Analytics",
      specialty: "Data Science & AI Solutions",
      image:
        "/images/business-team-watching-discussing-project-presentation.jpg",
    },
  ];

  const values = [
    {
      value: "150+",
      label: "Advisory Professionals",
      description: "Experienced consultants worldwide",
    },
    {
      value: "25+",
      label: "Years Combined Experience",
      description: "Deep industry expertise",
    },
    {
      value: "50+",
      label: "Countries Served",
      description: "Global reach and perspective",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description: "Proven track record of excellence",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(246,172,28,0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OUR TEAM
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6">
              Meet the Experts Behind Your{" "}
              <span className="text-secondary">Success</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Our diverse team of seasoned professionals brings decades of
              combined experience in strategy, finance, operations, and
              technology. We&apos;re united by a passion for driving meaningful
              results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-gray-100"
              >
                <div className="text-5xl font-light text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-lg font-semibold text-secondary mb-2">
                  {item.label}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-primary mb-4">
              Leadership <span className="text-secondary">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visionary leaders with proven track records in building and
              scaling world-class advisory practices.
            </p>
          </div>

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} relative`}
                >
                  <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

                    {/* Name overlay on image */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-semibold text-white mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-secondary text-lg font-medium">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {leader.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      Education & Credentials
                    </h4>
                    <p className="text-gray-600 text-sm">{leader.education}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-primary mb-4">
              Our Expert <span className="text-secondary">Advisors</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A diverse team of specialists bringing deep expertise across
              industries, functions, and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-secondary/30 hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-secondary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
              Our <span className="text-secondary">Culture</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We foster an environment of collaboration, continuous learning,
              and innovation where everyone can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Collaborative
              </h3>
              <p className="text-white/70 leading-relaxed">
                We believe the best solutions emerge from diverse perspectives
                and open collaboration across disciplines and experiences.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Innovative
              </h3>
              <p className="text-white/70 leading-relaxed">
                We embrace new ideas, technologies, and approaches to deliver
                cutting-edge solutions that drive competitive advantage.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Client-Focused
              </h3>
              <p className="text-white/70 leading-relaxed">
                Our clients&apos; success is our success. We measure ourselves
                by the tangible value and lasting impact we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-primary mb-6">
            Join Our <span className="text-secondary">Team</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re always looking for talented individuals who are
            passionate about making a difference. Explore career opportunities
            at CTG Advisory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <span>View Open Positions</span>
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
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
