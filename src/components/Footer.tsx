import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 border-t border-blue-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-blue-500/40 bg-blue-950/50 flex-shrink-0">
                <Image
                  src="/Benedict.jpg"
                  alt="Benedict Property Maintenance Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  Benedict
                </span>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-blue-400">
                  Property Maintenance
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400">
              Professional exterior cleaning, lawn care, and seasonal property maintenance services dedicated to protecting homes and businesses throughout Western New York.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/p/JP-Power-Wash-61575606570750/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 bg-slate-900 hover:bg-blue-950 text-slate-400 hover:text-blue-400 rounded-lg border border-slate-800 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/j_p_power_wash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 bg-slate-900 hover:bg-blue-950 text-slate-400 hover:text-blue-400 rounded-lg border border-slate-800 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-400 transition-colors">Free Quote</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li>House Pressure & Soft Wash</li>
              <li>Driveway & Sidewalk Cleaning</li>
              <li>Lawn Mowing & Border Edging</li>
              <li>Aeration & Fertilization</li>
              <li>Gutter & Roof Cleaning</li>
              <li>Seasonal Yard Cleanups</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact Info</h4>
            
            <div className="space-y-3 text-xs">
              <a
                href="tel:585-813-4445"
                className="flex items-center gap-2.5 text-white hover:text-blue-400 font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                <span>585-813-4445</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Western New York (WNY)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-[11px] text-slate-400">
              <span className="text-white font-semibold block mb-0.5">Licensed & Insured</span>
              Serving Monroe, Erie, Genesee, Livingston & surrounding counties.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Benedict Property Maintenance. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed by Noor Digital WNY</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
