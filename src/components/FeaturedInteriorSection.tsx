import Link from 'next/link';
import { Paintbrush, Hammer, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedInteriorSection() {
  const highlights = [
    {
      title: 'Interior Painting',
      description: 'Flawless wall, ceiling, trim, and door painting using premium low-VOC weather-lock paints.',
    },
    {
      title: 'Drywall Repair & Patching',
      description: 'Expert repair of holes, water damage cracks, seam taping, texture matching, and smooth sanding.',
    },
    {
      title: 'New Drywall Installation',
      description: 'Complete sheetrock hanging, taping, joint compound finishing, and paint-ready priming.',
    },
  ];

  return (
    <section className="py-16 bg-slate-950 text-white border-y border-blue-900/30 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/80 via-slate-900/90 to-black border border-blue-500/30 shadow-2xl shadow-blue-950/50 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Column: Heading & Info */}
          <div className="space-y-6 lg:max-w-2xl text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Featured Indoor Maintenance</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Interior Painting & Drywall Services
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We provide year-round interior home improvements! Whether you need custom room painting, hole patching, or full drywall panel installation, our skilled craftsmen deliver smooth, dust-free finishes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/60 border border-blue-900/40 text-left space-y-1">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">{item.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: CTA Box */}
          <div className="flex flex-col items-center justify-center space-y-4 w-full lg:w-auto p-6 rounded-2xl bg-black/80 border border-blue-800/40 text-center flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-700/50">
                <Paintbrush className="w-6 h-6" />
              </div>
              <div className="p-3 rounded-xl bg-blue-950 text-blue-400 border border-blue-700/50">
                <Hammer className="w-6 h-6" />
              </div>
            </div>

            <div>
              <span className="text-lg font-bold text-white block">Ready to Transform Your Home?</span>
              <span className="text-xs text-slate-400 block mt-0.5">Year-round indoor scheduling available</span>
            </div>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-blue-600/35 transition-all transform hover:-translate-y-0.5 border border-blue-400/30 whitespace-nowrap"
            >
              <span>View Pricing & Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
