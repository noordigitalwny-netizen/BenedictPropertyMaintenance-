import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { SERVICES_DATA } from '@/data/servicesData';
import { 
  Snowflake, 
  Home, 
  Droplets, 
  CloudRain, 
  Paintbrush, 
  Scissors, 
  Wrench, 
  Hammer,
  Check, 
  Phone, 
  ArrowRight, 
  ShieldCheck,
  Sparkles,
  Tag
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services & Pricing | Benedict Property Maintenance Western NY',
  description: 'View baseline prices for Drywall Services, Painting, Snow Plowing, Property Maintenance, Pressure Washing, Gutter Cleaning, Lawn Care, and Custom Services in WNY. Call 585-813-4445!',
};

const categoryIcons: Record<string, typeof Snowflake> = {
  'drywall-services': Hammer,
  'painting-services': Paintbrush,
  'snow-plowing': Snowflake,
  'property-maintenance': Home,
  'pressure-washing': Droplets,
  'gutter-services': CloudRain,
  'lawn-landscaping': Scissors,
  'other-services': Wrench,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Header Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-black via-slate-950 to-black text-white border-b border-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0f_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Official Baseline Rates & Service Catalog</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Services & Transparent Baseline Rates
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Explore baseline rates for all property maintenance, lawn care, pressure washing, snow plowing, gutter, painting, and specialty services in Western New York.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call For Estimates: 585-813-4445</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Baseline Pricing Cards Grid */}
        <section className="py-20 bg-black text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {SERVICES_DATA.map((cat) => {
                const IconComp = categoryIcons[cat.id] || Wrench;
                return (
                  <div
                    key={cat.id}
                    id={cat.id}
                    className="flex flex-col justify-between p-8 rounded-2xl bg-slate-950/90 border border-blue-950 hover:border-blue-500/50 shadow-xl shadow-black transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div>
                      {/* Category Badge & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/60 group-hover:scale-105 transition-transform">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/40">
                          {cat.badge}
                        </span>
                      </div>

                      {/* Category Title & Baseline Price */}
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {cat.title}
                      </h2>

                      <div className="mb-4 pb-4 border-b border-slate-900 flex items-center justify-between">
                        <span className="text-xl font-extrabold text-blue-400">{cat.startingPrice}</span>
                        <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">Baseline Rate</span>
                      </div>

                      <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Items & Specific Starting Prices */}
                      <div className="space-y-3 pt-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-blue-400" />
                          <span>Service Baseline Breakdown</span>
                        </div>
                        
                        <div className="space-y-2.5">
                          {cat.items.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center justify-between p-2.5 rounded-lg bg-black/60 border border-slate-900 hover:border-blue-900/40 transition-colors text-xs"
                            >
                              <div className="flex items-center gap-2 text-slate-200">
                                <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                                <span className="font-medium">{item.name}</span>
                              </div>
                              <span className="font-semibold text-blue-300 ml-2 whitespace-nowrap bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900/50">
                                {item.priceFormatted}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-8">
                      <Link
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all border border-blue-400/30"
                      >
                        <span>Book Service / Request Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Quote Banner */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950 border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-6 h-6 text-blue-400 animate-pulse" />
                  <span>Custom Packages or Multi-Service Bundles?</span>
                </h3>
                <p className="text-sm text-slate-300">
                  Combine Snow Plowing, Lawn Mowing, Pressure Washing, and Painting for discounted multi-service bundles.
                </p>
              </div>
              <a
                href="tel:585-813-4445"
                className="whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-base font-bold rounded-xl shadow-lg shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 border border-blue-400/30"
              >
                Call 585-813-4445
              </a>
            </div>

          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
