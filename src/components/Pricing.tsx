import { Check, Phone, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const tiers = [
    {
      name: 'Essential Wash & Refresh',
      popular: false,
      tagline: 'Ideal for quick home exterior tune-ups and targeted cleaning.',
      price: 'Starting at $149',
      period: 'per service',
      features: [
        'Single-story house siding wash',
        'Driveway OR patio high-pressure wash',
        'Front porch & walkway rinse',
        'Free estimate & surface check',
      ],
      ctaText: 'Choose Essential',
    },
    {
      name: 'Full Exterior Protection',
      popular: true,
      tagline: 'Our most popular comprehensive cleaning and lawn package.',
      price: 'Starting at $299',
      period: 'bundle price',
      features: [
        'Multi-story house siding soft wash',
        'Full driveway, sidewalk & patio wash',
        'Routine lawn mowing & border edging',
        'Gutter cleaning & downspout flush',
        'Priority scheduling for WNY residents',
      ],
      ctaText: 'Get Full Protection',
    },
    {
      name: 'Year-Round Estate Care',
      popular: false,
      tagline: 'Complete 4-season maintenance for hassle-free home care.',
      price: 'Custom Quote',
      period: 'seasonal plan',
      features: [
        'All Power Washing services included',
        'Weekly lawn maintenance & fertilization',
        'Spring & Fall complete yard cleanup',
        'Winter snow defense & driveway clearing',
        'Dedicated account manager',
      ],
      ctaText: 'Request Custom Quote',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Honest Rates, Superior Quality
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No hidden fees. Free upfront estimates for all homes and commercial properties in Western New York.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-blue-950/80 via-slate-900 to-black border-2 border-blue-500 shadow-2xl shadow-blue-600/20 transform lg:-translate-y-2'
                  : 'bg-black/70 border border-blue-900/30 hover:border-blue-700/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-400 min-h-[36px] mb-6">{tier.tagline}</p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-xs text-slate-400 ml-2">/ {tier.period}</span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="p-0.5 rounded-full bg-blue-900/60 text-blue-400 mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/40 border border-blue-400/30'
                      : 'bg-slate-900 hover:bg-blue-950 text-slate-200 hover:text-white border border-slate-700 hover:border-blue-500/50'
                  }`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-black/50 border border-slate-900 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2 text-blue-400 font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Have specific project requirements or custom acreage?</span>
          </div>
          <span>Call our office directly at <a href="tel:585-813-4445" className="text-white hover:text-blue-400 underline font-bold">585-813-4445</a> for an instant phone estimate!</span>
        </div>

      </div>
    </section>
  );
}
