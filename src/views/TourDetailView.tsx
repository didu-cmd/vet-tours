import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Check, 
  X, 
  ShieldCheck, 
  Car, 
  Bed, 
  Compass, 
  ArrowRight,
  SunMedium,
  Users
} from 'lucide-react';
import { TourPackage, TOURS_DATA, formatETB } from '../data/toursData';

interface TourDetailViewProps {
  tourId: string;
  onBack: () => void;
  onSelectTour: (tourId: string) => void;
  onOpenBooking: (tourId?: string) => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({
  tourId,
  onBack,
  onSelectTour,
  onOpenBooking
}) => {
  const tour = TOURS_DATA.find((t) => t.id === tourId) || TOURS_DATA[0];
  const [activeDay, setActiveDay] = useState<number>(1);

  const relatedTours = TOURS_DATA.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Top Navigation & Back Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#173D32] hover:text-[#D9A85B] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Tour Packages</span>
        </button>
      </div>

      {/* Hero Banner Section */}
      <div className="relative min-h-[520px] lg:min-h-[580px] max-w-7xl mx-auto rounded-3xl overflow-hidden mx-4 sm:mx-6 lg:mx-8 text-white shadow-2xl">
        <img
          src={tour.heroImage}
          alt={tour.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/95 via-[#173D32]/45 to-black/30" />

        <div className="relative z-10 p-6 sm:p-12 lg:p-16 h-full flex flex-col justify-end max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#D9A85B] font-semibold uppercase tracking-wider">
            <span>{tour.region}</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>{tour.travelStyle}</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>{tour.difficulty} Difficulty</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.1] [text-wrap:balance]">
            {tour.title}
          </h1>

          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            {tour.summary}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenBooking(tour.id)}
              className="py-3 px-8 bg-[#D9A85B] hover:bg-[#c99547] text-[#173D32] font-semibold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              <span>Inquire About This Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-white/80">
              <span className="block text-slate-300">Starting Price (ETB):</span>
              <strong className="text-lg text-white font-serif">{formatETB(tour.samplePriceETB)}</strong>
              <span className="text-[11px] text-white/60"> / traveler (approx. ${tour.samplePriceUSD.toLocaleString()} USD)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sticky Inquiry Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Itinerary, Details, Inclusions */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider block">Duration</span>
                <strong className="text-[#173D32] text-sm block font-serif">{tour.durationLabel}</strong>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider block">Activity Level</span>
                <strong className="text-[#173D32] text-sm block">{tour.difficulty}</strong>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider block">Best Season</span>
                <strong className="text-[#173D32] text-sm block">{tour.bestSeason.split('(')[0]}</strong>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider block">Group Size</span>
                <strong className="text-[#173D32] text-sm block">{tour.groupSize}</strong>
              </div>
            </div>

            {/* Tour Highlights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif text-[#173D32]">Tour Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((hl, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                    <span className="text-[#D9A85B] font-bold text-base shrink-0 mt-0.5">✦</span>
                    <span className="leading-snug">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-serif text-[#173D32]">Day-by-Day Itinerary</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Paced for authentic exploration and private photography.</p>
                </div>
              </div>

              <div className="space-y-4">
                {tour.itinerary.map((dayItem) => {
                  const isExpanded = activeDay === dayItem.day;
                  return (
                    <div
                      key={dayItem.day}
                      className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setActiveDay(isExpanded ? 0 : dayItem.day)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F3EB]/40 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 rounded-full bg-[#173D32] text-[#D9A85B] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                            {dayItem.day}
                          </span>
                          <span className="font-serif text-base sm:text-lg text-[#173D32] font-medium">
                            {dayItem.title}
                          </span>
                        </div>
                        <span className="text-xs text-[#D9A85B] font-semibold shrink-0">
                          {isExpanded ? 'Collapse' : 'Details'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6 pt-2 space-y-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <p>{dayItem.description}</p>
                          
                          {(dayItem.accommodation || dayItem.meals) && (
                            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
                              {dayItem.accommodation && (
                                <div className="flex items-center gap-1.5">
                                  <Bed className="w-3.5 h-3.5 text-[#D9A85B]" />
                                  <span>{dayItem.accommodation}</span>
                                </div>
                              )}
                              {dayItem.meals && (
                                <div className="flex items-center gap-1.5">
                                  <Clock className="w-3.5 h-3.5 text-[#D9A85B]" />
                                  <span>{dayItem.meals}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#173D32] uppercase tracking-wider">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Included in This Journey</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {tour.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 sm:border-l sm:border-slate-100 sm:pl-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  <X className="w-4 h-4 text-rose-500" />
                  <span>Not Included</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {tour.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transport & Accommodations Info */}
            <div className="bg-[#F7F3EB] p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-serif text-[#173D32]">Transport & Accommodation Notes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                  <Car className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173D32] mb-0.5">Fleet & Transport</strong>
                    <p>{tour.transportation}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                  <Bed className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173D32] mb-0.5">Lodging Standard</strong>
                    <p>{tour.accommodationType}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#173D32]">Journey Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {tour.gallery.map((imgSrc, i) => (
                  <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src={imgSrc}
                      alt={`${tour.title} scene ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Card & Direct Contact */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-[#D9A85B]/30 shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Official Price (ETB)</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-serif text-[#173D32] font-bold">
                    {formatETB(tour.samplePriceETB)}
                  </span>
                  <span className="text-xs text-slate-500">per traveler</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Includes internal flights, 4WD vehicles, licensed guides, accommodation & entries. (approx. ${tour.samplePriceUSD.toLocaleString()} USD)
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600 border-t border-b border-slate-100 py-4">
                <div className="flex justify-between">
                  <span>Standard Duration:</span>
                  <strong className="text-slate-800">{tour.durationLabel}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Region:</span>
                  <strong className="text-slate-800">{tour.region}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Activity Level:</span>
                  <strong className="text-slate-800">{tour.difficulty}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Departure:</span>
                  <strong className="text-[#173D32]">Private / Flexible Dates</strong>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(tour.id)}
                className="w-full py-3.5 bg-[#173D32] hover:bg-[#0e2720] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Book This Tour</span>
                <ArrowRight className="w-4 h-4 text-[#D9A85B]" />
              </button>

              <div className="bg-[#F7F3EB] p-4 rounded-xl text-xs space-y-2 border border-slate-200">
                <span className="font-semibold text-[#173D32] block">Speak with our Addis Ababa Office:</span>
                <div className="space-y-1 text-slate-700">
                  <p>Gabon St, Addis Ababa, Ethiopia</p>
                  <p className="font-medium text-[#173D32]">0920183098 · 0911696076</p>
                  <p className="text-slate-500">info@vacationtoethiopiatours.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Related Tours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200">
        <h2 className="text-2xl font-serif text-[#173D32] mb-6">Related Ethiopian Circuits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTours.map((rTour) => (
            <div
              key={rTour.id}
              onClick={() => {
                onSelectTour(rTour.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={rTour.heroImage}
                  alt={rTour.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="text-[11px] text-slate-500 font-medium">
                  {rTour.durationLabel} · {rTour.travelStyle}
                </div>
                <h4 className="font-serif text-base text-[#173D32] font-semibold group-hover:text-[#D9A85B] transition-colors line-clamp-1">
                  {rTour.title}
                </h4>
                <div className="text-xs font-serif font-bold text-[#173D32]">
                  From {formatETB(rTour.samplePriceETB)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
