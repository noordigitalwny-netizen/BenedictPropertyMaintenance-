import { Shield, Home, Calendar, Paintbrush } from 'lucide-react';

export default function AboutMission() {
  const highlights = [
    {
      icon: Paintbrush,
      title: 'Interior Painting & Drywall',
      description:
        'Transform rooms year-round with professional interior painting, drywall patching, sheetrock repair, and dust-free finishing.',
    },
    {
      icon: Shield,
      title: 'Exterior Protection & Washing',
      description:
        'Prevent costly siding degradation and mildew with expert house soft washing, driveway cleaning, and protective sealants.',
    },
    {
      icon: Home,
      title: 'Groundskeeping & Curb Appeal',
      description:
        'Keep your grounds manicured in every season with precision lawn mowing, edging, aeration, mulching, and yard cleanups.',
    },
    {
      icon: Calendar,
      title: '365-Day Year-Round Reliability',
      description:
        'From indoor winter painting and drywall repairs to spring lawn prep, summer washing, and winter snow plowing across WNY.',
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
              Comprehensive Indoor & Outdoor Care Year-Round
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              At <strong className="text-white">Benedict Property Maintenance</strong>, we provide complete interior and exterior property solutions throughout Western New York. Whether updating interior walls with fresh paint and drywall repairs during winter or keeping your exterior spotless in summer, we operate 365 days a year.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Our mission is to give homeowners and property managers a single, reliable team for high-quality interior maintenance, lawn care, pressure washing, and seasonal protection with total peace of mind.
            </p>

            <div className="pt-2 flex items-center gap-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-xs text-slate-400">Quality Guarantee</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-white">Indoor & Outdoor</div>
                <div className="text-xs text-slate-400">Full Service</div>
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
