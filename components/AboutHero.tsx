import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Top Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-secondary/60 rounded-full animate-pulse delay-150"></span>
              <span className="w-2 h-2 bg-secondary/30 rounded-full animate-pulse delay-300"></span>
            </div>
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">About CTG Advisory</span>
          </div>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="block">Est.</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-secondary via-amber-400 to-secondary bg-clip-text text-transparent">
                2025
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/70 mt-8 leading-relaxed font-light">
            A leading provider of professional services split into three core competencies
          </p>
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-amber-400 bg-clip-text text-transparent mb-3">
                3
              </div>
              <div className="text-white font-semibold mb-1">Core Competencies</div>
              <div className="text-white/50 text-sm">Specialized service areas</div>
            </div>
          </div>
          
          <div className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-amber-400 bg-clip-text text-transparent mb-3">
                Global
              </div>
              <div className="text-white font-semibold mb-1">Reach</div>
              <div className="text-white/50 text-sm">Serving clients worldwide</div>
            </div>
          </div>
          
          <div className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="relative">
              <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-amber-400 bg-clip-text text-transparent mb-3">
                100%
              </div>
              <div className="text-white font-semibold mb-1">Quality Focus</div>
              <div className="text-white/50 text-sm">High-standard services</div>
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/50 via-primary to-secondary/50 rounded-3xl blur-lg opacity-30"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
            <div className="flex items-start gap-6">
              <div className="hidden sm:block flex-shrink-0 w-1 h-full bg-gradient-to-b from-secondary via-secondary/50 to-transparent rounded-full"></div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  CTG Advisory grew from a vision to create a world-class outsourcing and professional 
                  services firm that could service clients across the world at affordable prices. 
                  Founded by a team of dynamic individuals, the firm has established a branch which 
                  is associated with high quality professional services and in-depth insight into 
                  regulatory matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">Explore More</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
