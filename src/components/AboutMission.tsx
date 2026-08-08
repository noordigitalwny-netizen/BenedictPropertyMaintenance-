import { Shield, Home, Calendar, Award } from 'lucide-react';

export default function AboutMission() {
  const highlights = [
    {
      icon: Shield,
      title: 'Property Protection',
      description:
        'Prevent costly surface degradation and moisture buildup with expert exterior pressure washing and soft washing techniques.',
    },
    {
      icon: Home,
      title: 'Curb Appeal Enhancement',
      description:
        'Keep your property looking pristine in every season with sharp lawn edging, detailed cleanup, and spotless siding.',
    },
    {
      icon: Calendar,
      title: 'Year-Round Reliability',
      description:
        'From spring lawn prep and summer power washing to autumn gutter clearing and winter snow defense, we cover your home 365 days a year.',
    },
    {
      icon: Award,
      title: 'Western NY Commitment',
      description:
        'Locally owned and trusted by homeowners across WNY with high standards of craftsmanship and dedicated customer satisfaction.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Mission text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              About Our Company
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Dedicated to Protecting & Enhancing Your Home Year-Round
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              At <strong className="text-white">Benedict Property Maintenance</strong>, we believe every property in Western New York deserves round-the-clock care. Extreme weather, humidity, and seasonal changes take a heavy toll on siding, lawns, and roofs.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Our mission is to provide homeowners and commercial property managers with reliable, high-quality maintenance solutions that boost curb appeal, increase property value, and deliver total peace of mind.
            </p>

            <div className="pt-2 flex items-center gap-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-xs text-slate-400">Quality Guarantee</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-white">4 Seasons</div>
                <div className="text-xs text-slate-400">Complete Coverage</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-blue-400">WNY</div>
                <div className="text-xs text-slate-400">Local Experts</div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-black/60 border border-blue-900/30 hover:border-blue-500/40 transition-all duration-300 group hover:bg-slate-900/60"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/50 mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
