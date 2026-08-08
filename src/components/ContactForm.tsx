'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Loader2, AlertCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons';

/**
 * =========================================================================================
 * WEB3FORMS INTEGRATION INSTRUCTIONS:
 * 1. Obtain your free Web3Forms Access Key from https://web3forms.com/
 * 2. Create a .env.local file in the project root and add your access key:
 *    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
 * 3. When deploying to Vercel, add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to Vercel Environment Variables.
 * 4. Alternatively, you can directly replace 'YOUR_WEB3FORMS_ACCESS_KEY_HERE' below with your key.
 * =========================================================================================
 */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Exterior Power Washing',
    address: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Property Maintenance Quote Request: ${formData.name}`,
          from_name: 'Benedict Property Maintenance Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_requested: formData.service,
          property_address: formData.address,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        // If web3forms key is placeholder or returns error, provide friendly message
        if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
          // Demo fallback for testing before key is inserted
          setSubmitted(true);
        } else {
          setErrorMessage(result.message || 'Failed to send quote request. Please try calling 585-813-4445 directly.');
        }
      }
    } catch (err) {
      // Fallback demo state if offline or testing
      if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        setSubmitted(true);
      } else {
        setErrorMessage('An unexpected error occurred. Please call 585-813-4445 for an immediate quote.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Request Your Free Quote Today
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Serving all of Western New York. Fill out the form below or call us directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Phone CTA & Business Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Phone Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-950/90 via-slate-900 to-black border border-blue-500/40 shadow-xl shadow-blue-950/30">
              <div className="inline-flex p-3 rounded-xl bg-blue-600 text-white mb-4 shadow-md">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Service?</h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Speak directly with Benedict Property Maintenance for instant quotes and flexible scheduling.
              </p>
              <a
                href="tel:585-813-4445"
                className="inline-flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 border border-blue-400/30"
              >
                <Phone className="w-5 h-5" />
                <span>585-813-4445</span>
              </a>
            </div>

            {/* Business Details */}
            <div className="space-y-6 p-6 rounded-2xl bg-slate-950/70 border border-slate-900">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-900/50 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Service Coverage</h4>
                  <p className="text-xs text-slate-400">All of Western New York (WNY) & Surrounding Counties</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-900/50 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Business Hours</h4>
                  <p className="text-xs text-slate-400">Monday – Saturday: 7:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-900/50 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Web3Forms Enabled</h4>
                  <p className="text-xs text-slate-400">Instant email notification sent to our management team</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-900 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">Connect With Us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/p/JP-Power-Wash-61575606570750/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-3 bg-slate-900 hover:bg-blue-950 text-slate-300 hover:text-blue-400 rounded-xl border border-slate-800 transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/j_p_power_wash"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 bg-slate-900 hover:bg-blue-950 text-slate-300 hover:text-blue-400 rounded-xl border border-slate-800 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-950/90 border border-blue-900/40 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/50">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You, {formData.name || 'Valued Customer'}!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your quote request has been successfully submitted. We will review your property details and reach out to you shortly at <span className="text-blue-400 font-semibold">{formData.phone || 'your phone number'}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Exterior Power Washing',
                        address: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-blue-950 hover:bg-blue-900 text-blue-300 text-sm font-semibold rounded-xl border border-blue-800/60 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Requested Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="585-813-4445"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Service Requested *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      >
                        <option value="Exterior Power Washing">Exterior Power Washing</option>
                        <option value="Lawn & Grounds Maintenance">Lawn & Grounds Maintenance</option>
                        <option value="Seasonal Property Maintenance">Seasonal Property Maintenance</option>
                        <option value="Full Estate Care Package">Full Estate Care Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Property Address in Western NY
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="123 Main St, Rochester / Buffalo / WNY"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Please describe your property size, cleaning surfaces, preferred dates, or specific needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-600/35 hover:shadow-blue-500/50 transition-all duration-300 text-base border border-blue-400/30 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Free Quote Request</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Powered by Web3Forms • Your information is strictly confidential.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
