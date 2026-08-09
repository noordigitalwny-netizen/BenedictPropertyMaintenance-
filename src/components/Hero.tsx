'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin, Paintbrush } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 bg-gradient-to-b from-black via-slate-950 to-black text-white">
      {/* Dynamic Background Glows & Accent Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a0f_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-800/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Service Area Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-500/40 shadow-inner shadow-blue-500/10 text-xs sm:text-sm font-medium text-blue-300 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-blue-400 animate-bounce" />
            <span>Serving All of Western New York (WNY) • Year-Round Interior & Exterior</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          </div>

          {/* Eye-catching Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Interior <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-200">Painting & Drywall</span>, Exterior Care & Property Maintenance
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Protecting and enhancing your Western New York home inside and out. From professional interior painting and expert drywall repairs to exterior pressure washing, lawn care, and snow plowing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/40"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-base px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-md"
            >
              <span>View Services & Pricing</span>
            </Link>
          </div>

          {/* Key Value Pill Highlights */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/40">
                <Paintbrush className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">Interior Painting & Drywall</h2>
                <p className="text-xs text-slate-400">Rooms, ceilings, trim & repairs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/40">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">Exterior Soft & Pressure Wash</h2>
                <p className="text-xs text-slate-400">Siding, driveways & decks</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/40">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">4-Season Property Care</h2>
                <p className="text-xs text-slate-400">Lawn care, gutters & snow plowing</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
