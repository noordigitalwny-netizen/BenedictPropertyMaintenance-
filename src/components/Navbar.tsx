'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-blue-900/40 shadow-lg shadow-blue-950/20 py-3'
          : 'bg-black/80 backdrop-blur-sm border-b border-blue-900/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-blue-500/40 group-hover:border-blue-400 transition-colors bg-blue-950/50 flex-shrink-0">
              <Image
                src="/Benedict.jpg"
                alt="Benedict Property Maintenance Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Benedict
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-blue-400">
                Property Maintenance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions: Socials & Call CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-3 pr-2 border-r border-slate-800">
              <a
                href="https://www.facebook.com/p/JP-Power-Wash-61575606570750/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-950/40 rounded-full transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/j_p_power_wash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-950/40 rounded-full transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Phone Call CTA Button */}
            <a
              href="tel:585-813-4445"
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 border border-blue-400/30"
            >
              <Phone className="w-4 h-4 animate-pulse text-blue-200" />
              <span>585-813-4445</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:585-813-4445"
              aria-label="Call Now"
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-blue-900/40 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-blue-400 hover:bg-blue-950/30 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/JP-Power-Wash-61575606570750/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 flex items-center gap-2 text-sm"
              >
                <FacebookIcon className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/j_p_power_wash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 flex items-center gap-2 text-sm"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>

            <a
              href="tel:585-813-4445"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>585-813-4445</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
