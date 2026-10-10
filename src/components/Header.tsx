import React, { useState } from 'react';
import { Menu, X, Phone, Compass, CalendarCheck } from 'lucide-react';
import { IMAGES } from '../utils/imageAssets';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F3EB]/95 backdrop-blur-md border-b border-[#252923]/10">
      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav Links) — Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark & Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3.5 text-left group whitespace-nowrap shrink-0 focus:outline-none"
        >
          {/* Company official logo */}
          <div className="h-12 w-12 rounded-xl overflow-hidden bg-white/90 p-0.5 border border-[#D9A85B]/30 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <img
              src={IMAGES.logoUrl}
              alt="Vacation to Ethiopia Tours Logo"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = IMAGES.logoLocal; }}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#173D32] leading-none">
              Vacation to Ethiopia
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#D9A85B] font-semibold mt-0.5">
              Tours & Expeditions
            </span>
          </div>
        </button>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252923]">
          <button
            onClick={() => handleLinkClick('home')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'home'
                ? 'text-[#173D32] font-semibold border-b-2 border-[#D9A85B]'
                : 'text-[#252923]/80 hover:text-[#173D32]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('tours')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'tours'
                ? 'text-[#173D32] font-semibold border-b-2 border-[#D9A85B]'
                : 'text-[#252923]/80 hover:text-[#173D32]'
            }`}
          >
            Tour Packages
          </button>
          <button
            onClick={() => handleLinkClick('destinations')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'destinations'
                ? 'text-[#173D32] font-semibold border-b-2 border-[#D9A85B]'
                : 'text-[#252923]/80 hover:text-[#173D32]'
            }`}
          >
            Destinations
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'about'
                ? 'text-[#173D32] font-semibold border-b-2 border-[#D9A85B]'
                : 'text-[#252923]/80 hover:text-[#173D32]'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleLinkClick('journal')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'journal'
                ? 'text-[#173D32] font-semibold border-b-2 border-[#D9A85B]'
                : 'text-[#252923]/80 hover:text-[#173D32]'
            }`}
          >
            Travel Journal
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              currentView === 'contact'
                ? 'text-[#173D32] font-semibold border-b-2 border-[#D9A85B]'
                : 'text-[#252923]/80 hover:text-[#173D32]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:0920183098"
            className="hidden xl:flex items-center gap-2 text-xs font-medium text-[#173D32] hover:text-[#D9A85B] transition-colors whitespace-nowrap"
            title="Call Vacation to Ethiopia Tours"
          >
            <Phone className="w-3.5 h-3.5 text-[#D9A85B]" />
            <span>0920183098</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="py-2.5 px-5 text-xs sm:text-sm font-semibold text-white bg-[#173D32] hover:bg-[#0e2720] rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-[#D9A85B]" />
            <span>Book Your Trip</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#173D32] hover:bg-black/5 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3EB] border-b border-[#252923]/15 px-6 pt-4 pb-8 shadow-xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left text-base font-serif py-1.5 transition-colors ${
                currentView === 'home' ? 'text-[#173D32] font-bold pl-2 border-l-2 border-[#D9A85B]' : 'text-[#252923]/90'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('tours')}
              className={`text-left text-base font-serif py-1.5 transition-colors ${
                currentView === 'tours' ? 'text-[#173D32] font-bold pl-2 border-l-2 border-[#D9A85B]' : 'text-[#252923]/90'
              }`}
            >
              Tour Packages
            </button>
            <button
              onClick={() => handleLinkClick('destinations')}
              className={`text-left text-base font-serif py-1.5 transition-colors ${
                currentView === 'destinations' ? 'text-[#173D32] font-bold pl-2 border-l-2 border-[#D9A85B]' : 'text-[#252923]/90'
              }`}
            >
              Destinations
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className={`text-left text-base font-serif py-1.5 transition-colors ${
                currentView === 'about' ? 'text-[#173D32] font-bold pl-2 border-l-2 border-[#D9A85B]' : 'text-[#252923]/90'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleLinkClick('journal')}
              className={`text-left text-base font-serif py-1.5 transition-colors ${
                currentView === 'journal' ? 'text-[#173D32] font-bold pl-2 border-l-2 border-[#D9A85B]' : 'text-[#252923]/90'
              }`}
            >
              Travel Journal
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-left text-base font-serif py-1.5 transition-colors ${
                currentView === 'contact' ? 'text-[#173D32] font-bold pl-2 border-l-2 border-[#D9A85B]' : 'text-[#252923]/90'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="mt-6 pt-6 border-t border-[#252923]/10 space-y-3">
            <div className="text-xs text-[#252923]/70">
              <span className="font-semibold block text-[#173D32] mb-1">Addis Ababa Head Office:</span>
              <p>Gabon St, Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex flex-col gap-1 text-xs text-[#173D32]">
              <a href="tel:0920183098" className="flex items-center gap-2 font-medium">
                <Phone className="w-3.5 h-3.5 text-[#D9A85B]" />
                0920183098
              </a>
              <a href="tel:0911696076" className="flex items-center gap-2 font-medium">
                <Phone className="w-3.5 h-3.5 text-[#D9A85B]" />
                0911696076
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-4 py-3 bg-[#173D32] text-white font-medium rounded-xl text-center shadow-md flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4 text-[#D9A85B]" />
              <span>Book Your Trip</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
