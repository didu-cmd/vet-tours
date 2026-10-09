import React, { useState, useMemo } from 'react';
import { Search, Filter, Compass, Calendar, ArrowRight, RotateCcw, MapPin, Check } from 'lucide-react';
import { TOURS_DATA, TourPackage, formatETB } from '../data/toursData';

interface ToursViewProps {
  onSelectTour: (tourId: string) => void;
  onOpenBooking: (tourId?: string) => void;
  initialSearch?: {
    destination: string;
    date: string;
    travelers: number;
  };
}

export const ToursView: React.FC<ToursViewProps> = ({
  onSelectTour,
  onOpenBooking,
  initialSearch
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      // Search term filter
      const matchesSearch =
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.summary.toLowerCase().includes(searchTerm.toLowerCase());

      // Travel style filter
      const matchesStyle = selectedStyle === 'all' || tour.travelStyle === selectedStyle;

      // Duration filter
      let matchesDuration = true;
      if (selectedDuration === 'short') matchesDuration = tour.durationDays <= 5;
      else if (selectedDuration === 'medium') matchesDuration = tour.durationDays > 5 && tour.durationDays <= 9;
      else if (selectedDuration === 'long') matchesDuration = tour.durationDays > 9;

      // Difficulty filter
      const matchesDifficulty = selectedDifficulty === 'all' || tour.difficulty === selectedDifficulty;

      return matchesSearch && matchesStyle && matchesDuration && matchesDifficulty;
    });
  }, [searchTerm, selectedStyle, selectedDuration, selectedDifficulty]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedStyle('all');
    setSelectedDuration('all');
    setSelectedDifficulty('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
          Handcrafted Ethiopian Journeys
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#173D32] font-normal leading-tight">
          Tour Packages & Circuits
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From the northern rock-hewn wonders of Lalibela to the extreme hydrothermal calderas of the Danakil Depression and the ancestral riverbanks of the Omo Valley. Every itinerary can be booked as a private bespoke journey or small group departure.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        
        {/* Top row: search input and counts */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by circuit name, region, or attraction..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F7F3EB]/60 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#252923] focus:outline-none focus:border-[#D9A85B]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs text-slate-500">
            <span>Showing <strong className="text-[#173D32]">{filteredTours.length}</strong> of {TOURS_DATA.length} tours</span>
            {(searchTerm || selectedStyle !== 'all' || selectedDuration !== 'all' || selectedDifficulty !== 'all') && (
              <button
                onClick={resetFilters}
                className="text-[#173D32] hover:text-[#D9A85B] font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Second row: Segmented interactive filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
          
          {/* Travel style filter */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Travel Category
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full px-3 py-2 bg-[#F7F3EB]/60 border border-slate-200 rounded-xl text-xs text-[#252923] focus:outline-none focus:border-[#D9A85B] cursor-pointer"
            >
              <option value="all">All Travel Styles</option>
              <option value="Historical & Cultural">Historical & Cultural</option>
              <option value="Adventure & Trekking">Adventure & Trekking</option>
              <option value="Cultural Immersion">Cultural Immersion</option>
              <option value="Multi-Day Journeys">Multi-Day Journeys</option>
            </select>
          </div>

          {/* Duration filter */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Trip Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-3 py-2 bg-[#F7F3EB]/60 border border-slate-200 rounded-xl text-xs text-[#252923] focus:outline-none focus:border-[#D9A85B] cursor-pointer"
            >
              <option value="all">Any Duration</option>
              <option value="short">Short Expeditions (3–5 Days)</option>
              <option value="medium">Classic Circuits (6–9 Days)</option>
              <option value="long">Grand Expeditions (10+ Days)</option>
            </select>
          </div>

          {/* Difficulty filter */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Pacing & Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2 bg-[#F7F3EB]/60 border border-slate-200 rounded-xl text-xs text-[#252923] focus:outline-none focus:border-[#D9A85B] cursor-pointer"
            >
              <option value="all">All Activity Levels</option>
              <option value="Easy">Easy (Gentle Touring & Culture)</option>
              <option value="Moderate">Moderate (Highland walking & flights)</option>
              <option value="Challenging">Challenging (Desert & Camping)</option>
              <option value="Strenuous">Strenuous (Simien Alpine Trek)</option>
            </select>
          </div>

        </div>

      </div>

      {/* Tours Grid or Empty State */}
      {filteredTours.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
          <Compass className="w-12 h-12 text-[#D9A85B] mx-auto opacity-70" />
          <h3 className="font-serif text-2xl text-[#173D32]">No Matching Circuits Found</h3>
          <p className="text-slate-600 text-sm">
            We couldn't find a tour matching your current search criteria. You can reset filters or request a bespoke custom itinerary designed around your schedule.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={resetFilters}
              className="py-2.5 px-5 bg-[#F7F3EB] hover:bg-[#ebdcc0] text-[#173D32] text-xs font-semibold rounded-xl transition-colors"
            >
              Reset Filters
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="py-2.5 px-5 bg-[#173D32] text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Request Custom Tour
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={tour.heroImage}
                    alt={tour.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay metadata */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-medium">{tour.region}</span>
                    <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#D9A85B]">
                      {tour.durationLabel}
                    </span>
                  </div>
                </div>

                {/* Tour Card Body */}
                <div className="p-6">
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                    <span>{tour.travelStyle}</span>
                    <span aria-hidden="true">·</span>
                    <span>{tour.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span>{tour.bestSeason.split('(')[0]}</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#173D32] font-semibold mb-2 group-hover:text-[#D9A85B] transition-colors leading-snug">
                    {tour.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {tour.summary}
                  </p>

                  {/* Highlights list */}
                  <div className="border-t border-slate-100 pt-3 mb-4 space-y-1.5">
                    {tour.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <span className="text-[#D9A85B] font-bold">✓</span>
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Price and Actions */}
              <div className="p-6 pt-0 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4 pt-3">
                  <span className="text-xs text-slate-500 font-medium">Starting Price (ETB)</span>
                  <div className="text-right">
                    <span className="text-xl font-serif font-bold text-[#173D32]">
                      {formatETB(tour.samplePriceETB)}
                    </span>
                    <span className="text-[10px] text-slate-400 block">per traveler (approx. ${tour.samplePriceUSD.toLocaleString()} USD)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectTour(tour.id)}
                    className="py-2.5 px-3 bg-[#F7F3EB] hover:bg-[#ebdcc0] text-[#173D32] text-xs font-semibold rounded-xl transition-colors text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenBooking(tour.id)}
                    className="py-2.5 px-3 bg-[#173D32] hover:bg-[#0e2720] text-white text-xs font-semibold rounded-xl transition-colors text-center shadow-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom Tailor-Made Banner */}
      <div className="bg-[#173D32] text-white rounded-3xl p-8 sm:p-12 border border-[#D9A85B]/30 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
            Private Tailor-Made Journeys
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
            Looking for a Completely Customized Route?
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Whether you want to combine the Simien trek with birdwatching in the Great Rift lakes, arrange private photography access, or adjust dates around the Timkat Epiphany festival, our Addis Ababa office customizes private Land Cruiser expeditions for your schedule.
          </p>
        </div>

        <button
          onClick={() => onOpenBooking()}
          className="py-3.5 px-8 bg-[#D9A85B] hover:bg-[#c99547] text-[#173D32] font-semibold text-sm rounded-xl transition-all shadow-md whitespace-nowrap shrink-0"
        >
          Request Custom Itinerary
        </button>
      </div>

    </div>
  );
};
