import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, MapPin, Phone, Mail, ArrowRight, Award } from 'lucide-react';
import { IMAGES } from '../utils/imageAssets';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Hero Header */}
      <div className="relative min-h-[460px] max-w-7xl mx-auto rounded-3xl overflow-hidden mx-4 sm:mx-6 lg:mx-8 text-white shadow-2xl flex flex-col justify-end p-8 sm:p-14">
        <img
          src={IMAGES.harar}
          alt="Historic Harar in Ethiopia"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = '/images/destination_harar_jugol_1791564363559.jpg'; }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/95 via-[#173D32]/50 to-black/30" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
            About Vacation to Ethiopia Tours
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-tight">
            Rooted in Addis Ababa. Dedicated to Meaningful Travel.
          </h1>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            We are an Ethiopian tour company driven by deep respect for our country's ancient heritage, monumental landscapes, and vibrant cultures.
          </p>
        </div>
      </div>

      {/* Main Philosophy & Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B] block">
              Our Travel Philosophy
            </span>
            <h2 className="text-3xl font-serif text-[#173D32] leading-snug">
              Travel That Listens Before It Speaks
            </h2>
            <p>
              Ethiopia is not a destination to be consumed at high speed. It is a land whose stories have unfolded over three millennia—where subterranean churches continue to echo with ancient Ge’ez chants, and where mountain escarpments touch the clouds.
            </p>
            <p>
              Founded and operated in the heart of Addis Ababa on Gabon Street, <strong>Vacation to Ethiopia Tours</strong> was established with a singular conviction: to offer international travelers authentic, personalized, and culturally reverent journeys across Ethiopia without the generic template packaging of mass tourism.
            </p>
            <p>
              We believe the finest travel happens when you have the time to sit quietly during an unhurried three-round coffee ceremony, when your 4WD driver knows which mountain bend yields the perfect dawn light, and when your local guide was raised in the very highland village you are walking through.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                <strong className="block text-[#173D32] text-sm font-serif">Direct Local Partnership</strong>
                <p>We work directly with native village guides, mule handlers, and site custodians, ensuring fair local compensation.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                <strong className="block text-[#173D32] text-sm font-serif">Tailored Logistics</strong>
                <p>Private 4WD Toyota Land Cruisers, flexible timing, and round-the-clock coordination from our Addis Ababa desk.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Head Office Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#D9A85B]/30 shadow-lg space-y-6">
            <h3 className="font-serif text-2xl text-[#173D32]">Our Head Office</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our central operations office coordinates vehicle fleets, flight reservations, mountain ranger escorts, and route permits across all regions of Ethiopia.
            </p>

            <div className="space-y-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Office Location</strong>
                  <span>Gabon St, Addis Ababa, Ethiopia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Telephone Lines</strong>
                  <div className="flex gap-2">
                    <a href="tel:0920183098" className="hover:text-[#D9A85B] font-medium text-[#173D32]">0920183098</a>
                    <span>/</span>
                    <a href="tel:0911696076" className="hover:text-[#D9A85B] font-medium text-[#173D32]">0911696076</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Email Address</strong>
                  <a href="mailto:info@vacationtoethiopiatours.com" className="hover:text-[#D9A85B] text-[#173D32] font-medium">
                    info@vacationtoethiopiatours.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-[#173D32] hover:bg-[#0e2720] text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Plan Your Journey With Us</span>
                <ArrowRight className="w-4 h-4 text-[#D9A85B]" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Leadership & Field Specialists Placeholders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
            Our Team & Specialists
          </span>
          <h2 className="text-3xl font-serif text-[#173D32] mt-1">
            The People Behind Your Experience
          </h2>
          <p className="text-slate-500 text-xs mt-2 italic">
            (Sample team placeholder profiles—customizable as company staff details are provided)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-[#173D32] text-[#D9A85B] font-serif text-2xl flex items-center justify-center mx-auto shadow-md">
              EM
            </div>
            <h4 className="font-serif text-lg text-[#173D32] font-semibold">Ephraim M.</h4>
            <span className="text-xs font-medium text-[#D9A85B] block">Senior Tour Director & Historian</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Specialized in the northern historic route with over 15 years guiding travelers through Lalibela, Gondar, and Axum.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-[#173D32] text-[#D9A85B] font-serif text-2xl flex items-center justify-center mx-auto shadow-md">
              YB
            </div>
            <h4 className="font-serif text-lg text-[#173D32] font-semibold">Yared B.</h4>
            <span className="text-xs font-medium text-[#D9A85B] block">Highland Expedition & Trek Leader</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Native of the Simien highlands with certified high-altitude wilderness first aid and wildlife tracking expertise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-[#173D32] text-[#D9A85B] font-serif text-2xl flex items-center justify-center mx-auto shadow-md">
              SG
            </div>
            <h4 className="font-serif text-lg text-[#173D32] font-semibold">Selamawit G.</h4>
            <span className="text-xs font-medium text-[#D9A85B] block">Operations & Client Relations Manager</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Coordinates all domestic flight bookings, customized vehicle dispatches, and hotel logistics from our Addis Ababa desk.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
