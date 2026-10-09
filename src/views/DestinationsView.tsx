import React, { useState } from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Compass, 
  Eye, 
  Calendar, 
  Mountain, 
  Shirt, 
  Plane,
  ChevronRight
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '../data/destinationsData';
import { TOURS_DATA, formatETB } from '../data/toursData';

interface DestinationsViewProps {
  selectedDestId?: string;
  onSelectDestination: (destId: string) => void;
  onSelectTour: (tourId: string) => void;
  onOpenBooking: (prefillTourId?: string) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  selectedDestId,
  onSelectDestination,
  onSelectTour,
  onOpenBooking
}) => {
  const [activeId, setActiveId] = useState<string>(selectedDestId || 'lalibela');

  const currentDest = DESTINATIONS_DATA.find((d) => d.id === activeId) || DESTINATIONS_DATA[0];
  const relatedTours = TOURS_DATA.filter((t) => currentDest.relatedTourIds.includes(t.id));

  return (
    <div className="space-y-16 pb-20">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
            Destination Guidebook
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#173D32] font-normal leading-tight">
            Destinations of Ethiopia
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From 12th-century monolithic sanctuaries to dramatic 4,500m peaks and tectonic volcanic rifts. Select any destination below to view practical guides, cultural history, and matching travel circuits.
          </p>
        </div>

        {/* Destination Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-8 pb-3 no-scrollbar border-b border-slate-200">
          {DESTINATIONS_DATA.map((dest) => (
            <button
              key={dest.id}
              onClick={() => {
                setActiveId(dest.id);
                onSelectDestination(dest.id);
              }}
              className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                dest.id === activeId
                  ? 'bg-[#173D32] text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-[#173D32] hover:bg-white'
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Destination Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[500px] text-white shadow-2xl flex flex-col justify-end p-6 sm:p-12">
          <img
            src={currentDest.heroImage}
            alt={currentDest.name}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/95 via-[#173D32]/40 to-black/25" />

          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="flex items-center gap-3 text-xs text-[#D9A85B] font-semibold uppercase tracking-wider">
              <span>{currentDest.region}</span>
              <span aria-hidden="true">·</span>
              <span className="font-serif text-sm text-white/90">{currentDest.amharicName}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal leading-tight">
              {currentDest.name}
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed italic">
              "{currentDest.tagline}"
            </p>
          </div>
        </div>
      </div>

      {/* Deep-Dive Content & Practical Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#173D32]">About {currentDest.name}</h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {currentDest.overview}
              </p>
            </div>

            {/* Notable Attractions */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#173D32]">Notable Attractions</h3>
              <div className="space-y-3">
                {currentDest.attractions.map((attraction, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <span className="text-xs font-serif font-bold text-[#D9A85B] bg-[#173D32] w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {attraction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural & Historical Highlights */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-[#173D32]">Cultural & Living Heritage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentDest.culturalHighlights.map((hl, i) => (
                  <div key={i} className="p-5 bg-[#F7F3EB] rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                    <span className="text-[#D9A85B] font-bold block">✦ Heritage Highlight</span>
                    <p className="leading-relaxed">{hl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Tours for this Destination */}
            {relatedTours.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-slate-200">
                <div>
                  <h3 className="text-2xl font-serif text-[#173D32]">Featured Tours Including {currentDest.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">Direct private and small-group circuits crafted by our Addis Ababa operations team.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedTours.map((t) => (
                    <div
                      key={t.id}
                      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={t.heroImage}
                          alt={t.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="text-[11px] text-slate-500 font-medium">
                          {t.durationLabel} · {t.travelStyle}
                        </div>
                        <h4 className="font-serif text-lg text-[#173D32] font-semibold line-clamp-1">
                          {t.title}
                        </h4>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                          <div>
                            <span className="text-[10px] text-slate-400 block">Price (ETB)</span>
                            <span className="text-sm font-serif font-bold text-[#173D32]">
                              {formatETB(t.samplePriceETB)}
                            </span>
                          </div>
                          <button
                            onClick={() => onSelectTour(t.id)}
                            className="text-xs font-semibold text-[#173D32] hover:text-[#D9A85B] flex items-center gap-1"
                          >
                            <span>Tour Itinerary</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Practical Travel Info Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-lg space-y-6">
              <h4 className="font-serif text-xl text-[#173D32]">
                Practical Travel Advice
              </h4>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173D32] mb-0.5">Best Time to Visit</strong>
                    <p>{currentDest.travelTips.bestTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mountain className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173D32] mb-0.5">Altitude & Elevation</strong>
                    <p>{currentDest.travelTips.altitude}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Plane className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173D32] mb-0.5">Getting There</strong>
                    <p>{currentDest.travelTips.gettingThere}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shirt className="w-4 h-4 text-[#D9A85B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173D32] mb-0.5">Attire & Etiquette</strong>
                    <p>{currentDest.travelTips.clothing}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenBooking(relatedTours[0]?.id)}
                  className="w-full py-3 bg-[#173D32] hover:bg-[#0e2720] text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Plan Journey to {currentDest.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#D9A85B]" />
                </button>
              </div>

              <div className="text-[11px] text-slate-500 space-y-1">
                <p>Have questions about permits or flight routes?</p>
                <p className="font-semibold text-[#173D32]">Call our Addis Ababa desk: 0920183098</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
