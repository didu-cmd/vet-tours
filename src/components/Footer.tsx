import React, { useState } from 'react';
import { Compass, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { TOURS_DATA } from '../data/toursData';
import { IMAGES } from '../utils/imageAssets';

interface FooterProps {
  onNavigate: (view: string) => void;
  onSelectDestination: (destId: string) => void;
  onSelectTour: (tourId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectDestination,
  onSelectTour,
  onOpenBooking
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
  };

  const handleNavClick = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#173D32] text-white pt-16 pb-12 border-t border-[#D9A85B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-[#112F26] rounded-2xl p-8 lg:p-10 mb-16 border border-[#D9A85B]/20 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-widest text-[#D9A85B] block mb-2">
              Stay Connected
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mb-2">
              Receive Ethiopian Travel Insights & Season Guides
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Curated notes on festival dates (Timkat & Genna), highland trekking conditions, new itineraries, and bespoke travel stories.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-[#D9A85B]/40 text-sm text-[#D9A85B]">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>Thank you for subscribing! We look forward to sharing Ethiopia with you.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    placeholder="Enter your email address"
                    className="px-4 py-3 bg-white/10 text-white placeholder-white/50 text-sm rounded-xl border border-white/20 focus:outline-none focus:border-[#D9A85B] w-full"
                  />
                  <button
                    type="submit"
                    className="py-3 px-6 bg-[#D9A85B] hover:bg-[#c99547] text-[#173D32] font-semibold text-sm rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-rose-400 text-xs pl-1">{newsletterError}</p>
                )}
                <p className="text-[11px] text-white/50">
                  We respect your privacy. Unsubscribe at any time. (Frontend newsletter preview)
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-12 w-12 rounded-xl overflow-hidden bg-white p-0.5 border border-[#D9A85B]/30 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src={IMAGES.logoUrl}
                  alt="Vacation to Ethiopia Tours Logo"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = IMAGES.logoLocal; }}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Vacation to Ethiopia Tours
              </span>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed pr-6">
              A premier Ethiopian tour operator headquartered in Addis Ababa. We craft personalized, private, and small-group journeys through Ethiopia’s timeless heritage, dramatic highland peaks, otherworldly geological wonders, and rich living cultures.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                <span>Gabon St, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A85B] shrink-0" />
                <div className="flex gap-3">
                  <a href="tel:0920183098" className="hover:text-[#D9A85B] transition-colors">0920183098</a>
                  <span className="text-white/30">|</span>
                  <a href="tel:0911696076" className="hover:text-[#D9A85B] transition-colors">0911696076</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9A85B] shrink-0" />
                <a href="mailto:info@vacationtoethiopiatours.com" className="hover:text-[#D9A85B] transition-colors">
                  info@vacationtoethiopiatours.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#D9A85B] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('tours')} className="hover:text-[#D9A85B] transition-colors">
                  Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('destinations')} className="hover:text-[#D9A85B] transition-colors">
                  Destinations
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-[#D9A85B] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('journal')} className="hover:text-[#D9A85B] transition-colors">
                  Travel Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#D9A85B] transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
              Key Destinations
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {DESTINATIONS_DATA.slice(0, 6).map((dest) => (
                <li key={dest.id}>
                  <button
                    onClick={() => {
                      onSelectDestination(dest.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#D9A85B] transition-colors text-left"
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Featured Tours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
              Signature Circuits
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {TOURS_DATA.slice(0, 4).map((tour) => (
                <li key={tour.id}>
                  <button
                    onClick={() => {
                      onSelectTour(tour.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#D9A85B] transition-colors text-left line-clamp-1"
                  >
                    {tour.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-semibold text-[#D9A85B] hover:underline flex items-center gap-1"
                >
                  <span>Request Custom Private Tour</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Vacation to Ethiopia Tours. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-white/40">Gabon St, Addis Ababa, Ethiopia</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <button onClick={() => handleNavClick('about')} className="hover:text-[#D9A85B] transition-colors">
              Ethical Travel Philosophy
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <button onClick={() => handleNavClick('contact')} className="hover:text-[#D9A85B] transition-colors">
              Direct Inquiries
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
