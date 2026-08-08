import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { 
  Snowflake, 
  Home, 
  Droplets, 
  CloudRain, 
  Paintbrush, 
  Scissors, 
  Wrench, 
  Check, 
  Phone, 
  ArrowRight, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services & Pricing | Benedict Property Maintenance Western NY',
  description: 'Explore comprehensive services & pricing for Snow Plowing, Property Maintenance, Pressure Washing, Gutter Cleaning, Painting, Lawn Care, and Custom Services in WNY. Call 585-813-4445!',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'snow-plowing',
      icon: Snowflake,
      badge: 'Winter Protection',
      title: 'Snow Plowing & De-Icing',
      price: 'Starting at $45',
      priceDetail: 'per plow / seasonal contracts available',
      description:
        'Reliable snow clearing for residential driveways and commercial parking lots across Western New York during harsh winter storms.',
      services: [
        'Residential Driveway Plowing & Clearing',
        'Sidewalk, Porch & Walkway Snow Removal',
        'Salting & Calcium Chloride Ice Control',
        'Commercial Lot Snow Removal & Stacking',
        '24/7 Storm Response & Priority Contracts',
      ],
    },
    {
      id: 'property-maintenance',
      icon: Home,
      badge: 'Year-Round Care',
      title: 'Property Maintenance',
      price: 'Starting at $149',
      priceDetail: 'per maintenance visit',
      description:
        'Proactive exterior upkeep ensuring your home stays protected against weathering, structural wear, and moisture accumulation.',
      services: [
        'Complete Exterior Surface Inspection',
        'Seasonal Yard Debris & Leaf Cleanup',
        'Siding Protective Washing & Sealants',
        'Spring & Fall Home Winterization Prep',
        'Property Value Enhancement Bundles',
      ],
    },
    {
      id: 'pressure-washing',
      icon: Droplets,
      badge: 'Deep Surface Cleaning',
      title: 'Pressure Washing & Soft Wash',
      price: 'Starting at $179',
      priceDetail: 'based on surface area',
      description:
        'High-pressure washing and eco-friendly soft washing to remove oil, mold, mildew, and grime from siding, driveways, and decks.',
      services: [
        'Vinyl, Brick, & Wood House Soft Wash',
        'Concrete Driveway & Sidewalk Oil Stain Removal',
        'Deck, Patio, & Fence Restoration',
        'Roof Soft Wash Algae & Lichen Treatment',
        'Pool Deck & Retaining Wall Cleaning',
      ],
    },
    {
      id: 'gutter-services',
      icon: CloudRain,
      badge: 'Water Management',
      title: 'Gutter & Drainage Services',
      price: 'Starting at $119',
      priceDetail: 'single-story homes',
      description:
        'Prevent roof leaks and foundation damage with thorough hand gutter cleanouts, downspout flushing, and guard installations.',
      services: [
        'Hand Removal of Gutter Leaves & Debris',
        'High-Flow Downspout Flushing & Testing',
        'Gutter Guard & Mesh Screen Installation',
        'Seamless Gutter Repair & Bracket Realignment',
        'Facia Board & Soffit Inspection',
      ],
    },
    {
      id: 'painting-services',
      icon: Paintbrush,
      badge: 'Exterior Beautification',
      title: 'Exterior Painting & Staining',
      price: 'Free Custom Estimate',
      priceDetail: 'tailored to home specs',
      description:
        'Professional exterior touch-ups, trim painting, and wood deck/fence staining to protect wood against moisture and UV damage.',
      services: [
        'Exterior Trim, Shutters, & Door Painting',
        'Wood Deck Sanding, Staining, & Sealing',
        'Fence Staining & Weatherproofing',
        'Surface Prep, Scraping, & Priming',
        'Color Matching & Premium Weather-Lock Paint',
      ],
    },
    {
      id: 'lawn-landscaping',
      icon: Scissors,
      badge: 'Turf & Grounds',
      title: 'Lawn Care & Landscaping',
      price: 'Starting at $39',
      priceDetail: 'per cut / scheduled packages',
      description:
        'Precision lawn mowing, deep turf aeration, and landscaping maintenance tailored for Western New York soil and grass types.',
      services: [
        'Scheduled Mowing & String Trimming',
        'Sidewalk, Driveway, & Bed Border Edging',
        'Core Lawn Aeration & Overseeding',
        'Mulching, Weeding, & Flowerbed Care',
        'Shrub, Bush, & Small Tree Trimming',
      ],
    },
    {
      id: 'other-services',
      icon: Wrench,
      badge: 'Custom Solutions',
      title: 'Other & Specialized Services',
      price: 'Custom Phone Quote',
      priceDetail: 'call 585-813-4445',
      description:
        'Customized property care solutions for unique residential requests and commercial groundskeeping contracts across WNY.',
      services: [
        'Emergency Storm Cleanup & Branch Clearing',
        'Commercial Groundskeeping Contracts',
        'Trash Bin High-Pressure Sanitization',
        'Outdoor Structure & Shed Power Washing',
        'Custom Seasonal Service Bundles',
      ],
    },
  ];

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
              <span>Complete Service Directory & Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Comprehensive Services & Transparent Pricing
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From snow plowing and pressure washing to lawn care and exterior painting — Benedict Property Maintenance covers all your property needs across Western New York.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Free Phone Estimates: 585-813-4445</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Pricing Grid */}
        <section className="py-20 bg-black text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((cat) => {
                const IconComp = cat.icon;
                return (
                  <div
                    key={cat.id}
                    id={cat.id}
                    className="flex flex-col justify-between p-8 rounded-2xl bg-slate-950/90 border border-blue-950 hover:border-blue-500/50 shadow-xl shadow-black transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div>
                      {/* Badge & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/60 group-hover:scale-105 transition-transform">
                          <IconComp className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/40">
                          {cat.badge}
                        </span>
                      </div>

                      {/* Title & Price Header */}
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {cat.title}
                      </h2>

                      <div className="mb-4 pb-4 border-b border-slate-900">
                        <span className="text-2xl font-extrabold text-blue-400">{cat.price}</span>
                        <span className="text-xs text-slate-400 block mt-0.5">{cat.priceDetail}</span>
                      </div>

                      <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Included Services Checklist */}
                      <ul className="space-y-3 pt-2">
                        {cat.services.map((serviceItem, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <div className="p-0.5 rounded-full bg-blue-950 text-blue-400 mt-0.5 flex-shrink-0 border border-blue-900/60">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{serviceItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="pt-8">
                      <Link
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all border border-blue-400/30"
                      >
                        <span>Book Service / Get Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Phone Call Banner */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-950 to-blue-950 border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-6 h-6 text-blue-400 animate-pulse" />
                  <span>Looking for Bundle Discounts or Acreage Quotes?</span>
                </h3>
                <p className="text-sm text-slate-300">
                  Combine Snow Plowing, Lawn Care, and Pressure Washing into one discounted seasonal plan.
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

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
