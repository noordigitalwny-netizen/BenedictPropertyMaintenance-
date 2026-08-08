import { Droplets, Scissors, Snowflake, Sparkles, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const serviceCategories = [
    {
      id: 'power-washing',
      icon: Droplets,
      badge: 'High Pressure & Soft Wash',
      title: 'Exterior Power Washing',
      description:
        'Restore your property’s original luster with safely calibrated pressure washing and chemical-safe soft washing.',
      features: [
        'House Siding Wash (Vinyl, Brick, Wood)',
        'Driveway & Sidewalk Oil & Grime Removal',
        'Deck, Patio & Fence Restoration',
        'Roof Soft Wash Algae & Moss Treatment',
      ],
    },
    {
      id: 'lawn-care',
      icon: Scissors,
      badge: 'Weekly & Bi-Weekly',
      title: 'Lawn & Grounds Maintenance',
      description:
        'Healthy, manicured lawns tailored for Western New York soil and turf types with precision cut and clean edges.',
      features: [
        'Scheduled Mowing & String Trimming',
        'Sidewalk & Driveway Edging',
        'Fertilization & Weed Control Treatment',
        'Lawn Aeration & Overseeding',
      ],
    },
    {
      id: 'seasonal-care',
      icon: Snowflake,
      badge: 'Spring / Fall / Winter',
      title: 'Seasonal Property Maintenance',
      description:
        'Proactive seasonal protection ensuring your home survives harsh WNY weather cycles without damage.',
      features: [
        'Spring & Fall Yard Debris Cleanup',
        'Gutter & Downspout Cleanout',
        'Shrub & Hedge Pruning',
        'Winterization & Snow Defense Prep',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-black text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-blue-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Professional Solutions For Every Season
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Complete residential and commercial property maintenance services across Western New York.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 rounded-2xl bg-slate-950/80 border border-blue-950 hover:border-blue-500/50 shadow-xl shadow-black transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/60 group-hover:scale-105 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/40">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 pt-4 border-t border-slate-900">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="p-0.5 rounded-full bg-blue-950 text-blue-400 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-950/60 hover:bg-blue-600 text-blue-300 hover:text-white font-semibold text-sm border border-blue-800/40 hover:border-blue-500 transition-all duration-300"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Service Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-950 to-blue-950/60 border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>Need a Custom Maintenance Package?</span>
            </h4>
            <p className="text-sm text-slate-300">
              Combine power washing, lawn care, and seasonal cleanup into one affordable bundle.
            </p>
          </div>
          <a
            href="tel:585-813-4445"
            className="whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-600/30"
          >
            Call 585-813-4445
          </a>
        </div>

      </div>
    </section>
  );
}
