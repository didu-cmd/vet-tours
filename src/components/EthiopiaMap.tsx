import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DESTINATIONS_DATA, Destination } from '../data/destinationsData';
import { TOURS_DATA, formatETB } from '../data/toursData';
import { MapPin, ArrowRight, Compass, Eye, Layers } from 'lucide-react';
import { resolveImage, IMAGES } from '../utils/imageAssets';

interface EthiopiaMapProps {
  onSelectDestination: (destId: string) => void;
  onSelectTour: (tourId: string) => void;
  onOpenBooking: (prefillTourId?: string) => void;
}

export const EthiopiaMap: React.FC<EthiopiaMapProps> = ({
  onSelectDestination,
  onSelectTour,
  onOpenBooking
}) => {
  const [selectedId, setSelectedId] = useState<string>('lalibela');
  const [filterRegion, setFilterRegion] = useState<'all' | 'north' | 'south' | 'east' | 'afar'>('all');
  const [mapStyle, setMapStyle] = useState<'voyager' | 'satellite'>('voyager');

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const selectedDestination = DESTINATIONS_DATA.find(d => d.id === selectedId) || DESTINATIONS_DATA[0];
  const relatedTours = TOURS_DATA.filter(t => selectedDestination.relatedTourIds.includes(t.id));

  const filteredDestinations = DESTINATIONS_DATA.filter(dest => {
    if (filterRegion === 'all') return true;
    if (filterRegion === 'north') return ['lalibela', 'simien-mountains', 'gondar', 'axum', 'lake-tana'].includes(dest.id);
    if (filterRegion === 'south') return ['omo-valley', 'addis-ababa'].includes(dest.id);
    if (filterRegion === 'east') return ['harar'].includes(dest.id);
    if (filterRegion === 'afar') return ['danakil-depression'].includes(dest.id);
    return true;
  });

  // Initialize live Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Center on Ethiopia (approx. Lat 9.5, Lng 39.5)
    const map = L.map(mapContainerRef.current, {
      center: [9.8, 39.5],
      zoom: 6,
      minZoom: 5,
      maxZoom: 12,
      scrollWheelZoom: false, // Prevent accidental scrolling when page scrolls
      attributionControl: true
    });

    const tileUrl = mapStyle === 'satellite'
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    const tileLayer = L.tileLayer(tileUrl, {
      attribution: mapStyle === 'satellite'
        ? '&copy; Esri &mdash; Earthstar Geographics'
        : '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    tileLayerRef.current = tileLayer;
    mapInstanceRef.current = map;

    // Invalidate size after mount
    setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer if user toggles between terrain/satellite
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (tileLayerRef.current) {
      mapInstanceRef.current.removeLayer(tileLayerRef.current);
    }

    const tileUrl = mapStyle === 'satellite'
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    const newLayer = L.tileLayer(tileUrl, {
      attribution: mapStyle === 'satellite'
        ? '&copy; Esri &mdash; Earthstar Geographics'
        : '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(mapInstanceRef.current);

    tileLayerRef.current = newLayer;
  }, [mapStyle]);

  // Update Markers on filtered destinations or selected change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    DESTINATIONS_DATA.forEach(dest => {
      const isVisible = filteredDestinations.some(d => d.id === dest.id);
      if (!isVisible) return;

      const isSelected = dest.id === selectedId;

      // Custom HTML Marker Icon
      const customIcon = L.divIcon({
        className: 'custom-leaflet-pin',
        html: `
          <div class="relative flex flex-col items-center group cursor-pointer" style="transform: translate(-50%, -100%);">
            ${isSelected ? '<div class="absolute -top-1 w-9 h-9 rounded-full bg-[#D9A85B]/40 animate-ping pointer-events-none"></div>' : ''}
            <div class="w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isSelected
                ? 'bg-[#173D32] text-[#D9A85B] ring-4 ring-[#D9A85B] scale-110'
                : 'bg-white text-[#173D32] hover:bg-[#D9A85B] hover:text-[#173D32] border border-[#173D32]/30'
            }">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="mt-1 px-2 py-0.5 rounded text-[11px] whitespace-nowrap shadow-md font-semibold transition-all ${
              isSelected
                ? 'bg-[#173D32] text-[#D9A85B] border border-[#D9A85B]/50'
                : 'bg-white/95 text-[#252923] border border-slate-200'
            }">
              ${dest.name}
            </div>
          </div>
        `,
        iconSize: [32, 42],
        iconAnchor: [16, 42]
      });

      const marker = L.marker([dest.mapCoords.lat, dest.mapCoords.lng], { icon: customIcon })
        .addTo(map)
        .on('click', () => {
          setSelectedId(dest.id);
          map.flyTo([dest.mapCoords.lat, dest.mapCoords.lng], 8, { duration: 1.2 });
        });

      markersRef.current[dest.id] = marker;
    });
  }, [filteredDestinations, selectedId]);

  const handleSelectAndPan = (dest: Destination) => {
    setSelectedId(dest.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([dest.mapCoords.lat, dest.mapCoords.lng], 8, { duration: 1.2 });
    }
  };

  const handleResetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([9.8, 39.5], 6, { duration: 1.0 });
    }
  };

  return (
    <div className="bg-[#173D32] text-white rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden border border-[#D9A85B]/20">
      
      {/* Top Header & Region Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D9A85B] mb-2">
            <Compass className="w-4 h-4 text-[#D9A85B]" />
            <span>Authentic Live Display Map of Ethiopia</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white">
            Interactive Destination Explorer
          </h3>
          <p className="text-white/70 text-sm max-w-xl mt-1">
            Real geographic coordinates, mountain elevations, and historic circuits across Ethiopia. Click any live marker to preview details.
          </p>
        </div>

        {/* Region & Layer controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Map style toggle */}
          <div className="flex items-center p-1 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
            <button
              onClick={() => setMapStyle('voyager')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                mapStyle === 'voyager' ? 'bg-[#D9A85B] text-[#173D32] font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              Terrain Map
            </button>
            <button
              onClick={() => setMapStyle('satellite')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                mapStyle === 'satellite' ? 'bg-[#D9A85B] text-[#173D32] font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              Satellite
            </button>
          </div>

          {/* Region filter buttons */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
            <button
              onClick={() => { setFilterRegion('all'); handleResetView(); }}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filterRegion === 'all'
                  ? 'bg-[#D9A85B] text-[#173D32] font-semibold shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              All Regions
            </button>
            <button
              onClick={() => setFilterRegion('north')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filterRegion === 'north'
                  ? 'bg-[#D9A85B] text-[#173D32] font-semibold shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Historic North
            </button>
            <button
              onClick={() => setFilterRegion('afar')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filterRegion === 'afar'
                  ? 'bg-[#D9A85B] text-[#173D32] font-semibold shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Danakil & Rift
            </button>
            <button
              onClick={() => setFilterRegion('south')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filterRegion === 'south'
                  ? 'bg-[#D9A85B] text-[#173D32] font-semibold shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              South Omo
            </button>
            <button
              onClick={() => setFilterRegion('east')}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                filterRegion === 'east'
                  ? 'bg-[#D9A85B] text-[#173D32] font-semibold shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Eastern Harar
            </button>
          </div>
        </div>
      </div>

      {/* Map & Card Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Live Leaflet Map Container */}
        <div className="lg:col-span-7 bg-[#0E2820] rounded-2xl p-2 border border-white/15 relative flex flex-col justify-between min-h-[440px] sm:min-h-[520px] overflow-hidden shadow-inner">
          
          {/* Leaflet container */}
          <div
            ref={mapContainerRef}
            className="w-full h-[400px] sm:h-[460px] rounded-xl overflow-hidden z-10"
            style={{ minHeight: '380px' }}
          />

          {/* Quick interactive destination bar below live map */}
          <div className="pt-3 px-2 flex items-center gap-2 overflow-x-auto pb-1 text-xs text-white/70">
            <span className="text-[11px] text-[#D9A85B] uppercase font-bold shrink-0">Focus Location:</span>
            {filteredDestinations.map(d => (
              <button
                key={d.id}
                onClick={() => handleSelectAndPan(d)}
                className={`px-2.5 py-1 rounded-lg text-xs transition-colors whitespace-nowrap shrink-0 ${
                  d.id === selectedId
                    ? 'bg-[#D9A85B] text-[#173D32] font-semibold'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Destination Details Card */}
        <div className="lg:col-span-5 bg-white text-[#252923] rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between border border-[#D9A85B]/30">
          <div>
            {/* Top region & amharic badge */}
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold uppercase tracking-wider text-[#173D32]">{selectedDestination.region}</span>
              <span className="font-serif text-[#D9A85B] text-sm">{selectedDestination.amharicName}</span>
            </div>

            <h4 className="text-2xl sm:text-3xl font-serif text-[#173D32] font-normal mb-1">
              {selectedDestination.name}
            </h4>
            <p className="text-xs text-[#D9A85B] font-medium italic mb-3">
              "{selectedDestination.tagline}"
            </p>

            {/* Thumbnail */}
            <div className="relative rounded-xl overflow-hidden aspect-video mb-4 shadow-sm border border-slate-200">
              <img
                src={selectedDestination.heroImage}
                alt={selectedDestination.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-medium">
                <span>Elevation: {selectedDestination.travelTips.altitude}</span>
                <span className="text-[11px] text-[#D9A85B] font-mono">
                  {selectedDestination.mapCoords.lat.toFixed(2)}°N, {selectedDestination.mapCoords.lng.toFixed(2)}°E
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {selectedDestination.shortDesc}
            </p>

            {/* Key highlights list */}
            <div className="mb-4">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                Notable Highlights
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedDestination.attractions.slice(0, 3).map((attr, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#D9A85B] font-bold">·</span>
                    <span className="line-clamp-1">{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            {relatedTours.length > 0 && (
              <div className="text-xs text-slate-600">
                <span className="font-semibold text-[#173D32]">Featured Tour:</span>{' '}
                <button
                  onClick={() => onSelectTour(relatedTours[0].id)}
                  className="text-[#173D32] hover:text-[#D9A85B] font-medium underline transition-colors"
                >
                  {relatedTours[0].title} ({formatETB(relatedTours[0].samplePriceETB)})
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onSelectDestination(selectedDestination.id)}
                className="w-full py-2.5 px-3 bg-[#F7F3EB] hover:bg-[#ebdcc0] text-[#173D32] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Explore Guide</span>
              </button>
              <button
                onClick={() => onOpenBooking(relatedTours[0]?.id)}
                className="w-full py-2.5 px-3 bg-[#173D32] hover:bg-[#0f2a22] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-sm"
              >
                <span>Book This Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
