import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  BookOpen, 
  Search,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { TOURS_DATA, TourPackage, formatETB } from '../data/toursData';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { EthiopiaMap } from '../components/EthiopiaMap';
import { IMAGES, resolveImage } from '../utils/imageAssets';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onSelectTour: (tourId: string) => void;
  onSelectDestination: (destId: string) => void;
  onSelectArticle: (articleId: string) => void;
  onOpenBooking: (prefillTourId?: string) => void;
  onSearchTours: (destination: string, date: string, travelers: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectTour,
  onSelectDestination,
  onSelectArticle,
  onOpenBooking,
  onSearchTours
}) => {
  // Search state
  const [searchDestination, setSearchDestination] = useState<string>('all');
  const [searchDate, setSearchDate] = useState<string>('');
  const [searchTravelers, setSearchTravelers] = useState<number>(2);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchTours(searchDestination, searchDate, searchTravelers);
    onNavigate('tours');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const travelStyles = [
    {
      title: 'Historical & Cultural Heritage',
      description: 'Explore monolithic 12th-century rock churches in Lalibela, 17th-century imperial Gondar castles, and ancient Axumite stelae.',
      image: IMAGES.lalibela
    },
    {
      title: 'Alpine Trekking & Endemic Wildlife',
      description: 'Traverse the dramatic escarpments of the Simien Mountains to stand beside docile Gelada baboons and rare Walia ibex.',
      image: IMAGES.simien
    },
    {
      title: 'Otherworldly Geological Expeditions',
      description: 'Venture below sea level into the Danakil Depression to witness neon sulphur terraces at Dallol and the glowing Erta Ale lava lake.',
      image: IMAGES.danakil
    },
    {
      title: 'Living Traditions & Cultural Immersion',
      description: 'Ethical, elder-welcomed encounters with the indigenous pastoral communities of the South Omo Valley and the historic walled alleys of Harar.',
      image: IMAGES.omo
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">
        {/* Hero Background Image with measured scrim */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.lalibela}
            alt="Church of Saint George in Lalibela, Ethiopia at sunrise"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = '/images/hero_ethiopia_lalibela_1791564320721.jpg'; }}
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/95 via-[#173D32]/50 to-black/35" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white font-normal tracking-tight max-w-4xl leading-[1.1] mb-6 [text-wrap:balance]">
            Discover Ethiopia. Beyond the Ordinary.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-10 [text-wrap:balance]">
            Journey through ancient civilizations, breathtaking landscapes, and extraordinary cultures with experiences that bring Ethiopia closer to you.
          </p>

          {/* Primary & Secondary Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <button
              onClick={() => onNavigate('tours')}
              className="w-full sm:w-auto py-3.5 px-8 bg-[#D9A85B] hover:bg-[#c69342] text-[#173D32] font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Explore Tours</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto py-3.5 px-8 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm rounded-xl backdrop-blur-md border border-white/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Plan Your Journey</span>
            </button>
          </div>

          {/* Refined Tour Search Interface */}
          <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md text-[#252923] p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/40">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              
              {/* Destination selector */}
              <div className="p-2 sm:p-3 bg-[#F7F3EB] rounded-xl border border-slate-200/80">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Destination / Region
                </label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D9A85B] shrink-0" />
                  <select
                    value={searchDestination}
                    onChange={(e) => setSearchDestination(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-[#173D32] focus:outline-none cursor-pointer"
                  >
                    <option value="all">All Destinations</option>
                    {DESTINATIONS_DATA.map(d => (
                      <option key={d.id} value={d.id}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date input */}
              <div className="p-2 sm:p-3 bg-[#F7F3EB] rounded-xl border border-slate-200/80">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Departure Date
                </label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D9A85B] shrink-0" />
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-transparent text-xs font-semibold text-[#173D32] focus:outline-none"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="p-2 sm:p-3 bg-[#F7F3EB] rounded-xl border border-slate-200/80">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Travelers
                </label>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D9A85B] shrink-0" />
                  <select
                    value={searchTravelers}
                    onChange={(e) => setSearchTravelers(Number(e.target.value))}
                    className="w-full bg-transparent text-xs font-semibold text-[#173D32] focus:outline-none cursor-pointer"
                  >
                    <option value={1}>1 Traveler (Solo)</option>
                    <option value={2}>2 Travelers (Couple)</option>
                    <option value={4}>4 Travelers (Small Group)</option>
                    <option value={6}>6+ Travelers (Family/Private)</option>
                  </select>
                </div>
              </div>

              {/* Search button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#173D32] hover:bg-[#0e2720] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-[#D9A85B]" />
                  <span>Search Tours</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
              The Land of Origins
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#173D32] font-normal leading-tight [text-wrap:balance]">
              A Civilization That Chiseled Faith Into the Mountain Bedrock
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 text-slate-700 text-base leading-relaxed">
            <p>
              Ethiopia stands unique in the African continent: an unbroken, three-thousand-year heritage of sovereign history, ancient Ge’ez script, and monumental rock architecture that defies modern imagination. From the high misty plateau of Lalibela where subterranean cathedrals continue living liturgical traditions to the volcanic salt flats of the Afar rift, it is a territory of astonishing geological and human contrast.
            </p>
            <p className="text-slate-600 text-sm">
              Headquartered locally in Addis Ababa on Gabon Street, <strong>Vacation to Ethiopia Tours</strong> designs travel that moves with intentionality and reverence. We bridge deep local knowledge with thoughtful private planning, pairing you with licensed native historians, private 4WD expeditions, and handpicked highland lodges.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-[#173D32] font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D9A85B]" />
                100% In-Country Team
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D9A85B]" />
                Bespoke Private Journeys
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D9A85B]" />
                Fair-Trade Local Partnerships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED TOUR PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
              Curated Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#173D32] font-normal mt-1">
              Featured Tour Packages
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Thoughtfully paced journeys across Ethiopia’s northern highlands, volcanic deserts, and southern cultural basins.
            </p>
          </div>

          <button
            onClick={() => onNavigate('tours')}
            className="text-xs font-semibold text-[#173D32] hover:text-[#D9A85B] flex items-center gap-1 group whitespace-nowrap self-start sm:self-auto"
          >
            <span>Browse All Packages ({TOURS_DATA.length})</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Tour Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS_DATA.slice(0, 3).map((tour) => (
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
                  
                  {/* Overlay unboxed metadata */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-medium">{tour.region}</span>
                    <span className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#D9A85B]">
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
                    <span>{tour.difficulty} Difficulty</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#173D32] font-semibold mb-2 group-hover:text-[#D9A85B] transition-colors leading-snug">
                    {tour.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {tour.summary}
                  </p>

                  {/* Highlights snippet */}
                  <div className="border-t border-slate-100 pt-3 mb-4 space-y-1.5">
                    {tour.highlights.slice(0, 2).map((hl, i) => (
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
                    <span className="text-lg font-serif font-bold text-[#173D32]">
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
                    View Tour
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
      </section>

      {/* 4. EXPLORE ETHIOPIA DESTINATION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
            Destinations Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#173D32] font-normal mt-1">
            Nine Remarkable Worlds
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            From the high afro-alpine summits of Ras Dashen to the sunken rock trenches of Lalibela and the vibrant walled city of Harar.
          </p>
        </div>

        {/* Grid of destination vignettes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS_DATA.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.id)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={dest.heroImage}
                alt={dest.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-semibold text-[#D9A85B] uppercase tracking-wider mb-1">
                  {dest.region}
                </span>
                <h3 className="text-2xl font-serif font-normal text-white group-hover:text-[#D9A85B] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mt-1 font-light">
                  {dest.shortDesc}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D9A85B] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Destination Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EthiopiaMap
          onSelectDestination={onSelectDestination}
          onSelectTour={onSelectTour}
          onOpenBooking={onOpenBooking}
        />
      </section>

      {/* 6. TRAVEL EXPERIENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
            Travel Styles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#173D32] font-normal mt-1">
            Immersive Ways to Experience Ethiopia
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every traveler carries their own curiosity. We tailor our routes across diverse travel categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {travelStyles.map((style, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full sm:w-44 h-40 rounded-xl overflow-hidden shrink-0 relative">
                <img
                  src={style.image}
                  alt={style.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-serif text-[#173D32] font-semibold">
                  {style.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {style.description}
                </p>
                <button
                  onClick={() => onNavigate('tours')}
                  className="text-xs font-semibold text-[#173D32] hover:text-[#D9A85B] flex items-center gap-1 pt-1"
                >
                  <span>View Matching Circuits</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY TRAVEL WITH US */}
      <section className="bg-[#173D32] text-white py-20 rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 border border-[#D9A85B]/20 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
              The Local Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal [text-wrap:balance]">
              Why Journey with Vacation to Ethiopia Tours?
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              We are not an overseas booking intermediary. Headquartered directly on Gabon Street in Addis Ababa, our roots are planted in the highlands and valleys we guide you through.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="py-3 px-6 bg-[#D9A85B] hover:bg-[#c99547] text-[#173D32] font-semibold text-xs rounded-xl transition-colors shadow-sm"
              >
                Our Story & Philosophy
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-2">
              <Compass className="w-6 h-6 text-[#D9A85B]" />
              <h3 className="font-serif text-lg text-white font-medium">True Local Expertise</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Direct on-the-ground knowledge of mountain roads, church festival calendars, and seasonal climate shifts across the country.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-2">
              <HeartHandshake className="w-6 h-6 text-[#D9A85B]" />
              <h3 className="font-serif text-lg text-white font-medium">Tailored Private Travel</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Your schedule, your rhythm. We customize departure dates, pacing, photography pauses, and hotel tiers to your exact desires.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#D9A85B]" />
              <h3 className="font-serif text-lg text-white font-medium">24/7 In-Country Support</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Round-the-clock telephone and on-site coordination from our Addis Ababa operations desk from your Bole Airport arrival to departure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-2">
              <Sparkles className="w-6 h-6 text-[#D9A85B]" />
              <h3 className="font-serif text-lg text-white font-medium">Ethical & Respectful Tourism</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Direct fair compensation to local community guides, monastery custodians, muleteers, and heritage conservation trusts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SAMPLE TRAVELER PERSPECTIVES (CLEARLY MARKED PLACEHOLDERS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
            Sample Traveler Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#173D32] font-normal mt-1">
            Voices from the Highland Trails
          </h2>
          <p className="text-slate-500 text-xs mt-2 italic">
            (Clearly identified sample placeholder perspectives reflecting our standard traveler experience)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
              "Witnessing the sunrise liturgy at Bet Giyorgis in Lalibela was one of the most spiritually moving moments of my life. The logistics, domestic flights, and private guide were handled seamlessly by the team in Addis."
            </p>
            <div className="border-t border-slate-100 pt-4 text-xs">
              <strong className="block text-[#173D32]">Dr. Marcus & Eleanor Vance</strong>
              <span className="text-slate-500">Sample Traveler · Historic Northern Circuit</span>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
              "Trekking Imet Gogo in the Simien Mountains exceeded every expectation. Sitting on the grass just three meters away from hundreds of calm Gelada baboons while our camp chef made warm soup was pure magic."
            </p>
            <div className="border-t border-slate-100 pt-4 text-xs">
              <strong className="block text-[#173D32]">Astrid Lindholm</strong>
              <span className="text-slate-500">Sample Traveler · Simien Mountains Trek</span>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
              "The Danakil Depression expedition was otherworldly. Having experienced 4WD drivers, security coordination, and cold water out in the volcanic salt pans made all the difference in feeling safe and inspired."
            </p>
            <div className="border-t border-slate-100 pt-4 text-xs">
              <strong className="block text-[#173D32]">Julian & Sofia K.</strong>
              <span className="text-slate-500">Sample Traveler · Danakil Expedition</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRAVEL JOURNAL HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
              Field Notes & Articles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#173D32] font-normal mt-1">
              From Our Travel Journal
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Practical guides, cultural reflections, and regional dispatch from our Addis Ababa team.
            </p>
          </div>

          <button
            onClick={() => onNavigate('journal')}
            className="text-xs font-semibold text-[#173D32] hover:text-[#D9A85B] flex items-center gap-1 group whitespace-nowrap self-start sm:self-auto"
          >
            <span>Read All Articles</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article.id)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-medium">
                    <span className="text-[#173D32] font-semibold">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif text-[#173D32] font-semibold mb-2 group-hover:text-[#D9A85B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>By {article.author.name}</span>
                <span className="text-[#173D32] font-semibold group-hover:text-[#D9A85B] flex items-center gap-1">
                  Read Article
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="relative rounded-3xl overflow-hidden max-w-7xl mx-auto text-white mx-4 sm:mx-6 lg:mx-8">
        <div className="relative min-h-[480px] flex items-center justify-center p-8 sm:p-14 text-center">
          <img
            src={IMAGES.lakeTana}
            alt="Lake Tana sunset in Ethiopia"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = '/images/destination_lake_tana_1791564373066.jpg'; }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#173D32]/85 backdrop-blur-[1px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B] block">
              Start Your Exploration
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal leading-tight [text-wrap:balance]">
              Your Ethiopia. Your Journey.
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed [text-wrap:balance]">
              Discover remarkable places, experience extraordinary cultures, and create a journey that is uniquely yours. Contact our Addis Ababa travel desk today.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto py-3.5 px-8 bg-[#D9A85B] hover:bg-[#c69342] text-[#173D32] font-semibold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto py-3.5 px-8 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Contact Addis Office</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
