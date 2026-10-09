import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Mail, Phone, User, CheckCircle, Shield, Compass, ArrowRight, MessageSquare } from 'lucide-react';
import { TOURS_DATA, TourPackage, formatETB } from '../data/toursData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTourId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTourId
}) => {
  const [selectedTourId, setSelectedTourId] = useState<string>(preselectedTourId || TOURS_DATA[0].id);
  const [departureDate, setDepartureDate] = useState<string>('');
  const [travelers, setTravelers] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [accommodationPreference, setAccommodationPreference] = useState<string>('Boutique Lodges & Heritage Hotels');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [inquiryReference, setInquiryReference] = useState<string>('');

  useEffect(() => {
    if (preselectedTourId) {
      setSelectedTourId(preselectedTourId);
    }
  }, [preselectedTourId]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentTour = TOURS_DATA.find(t => t.id === selectedTourId);
  const estimatedTotalETB = currentTour ? currentTour.samplePriceETB * travelers : 0;
  const estimatedTotalUSD = currentTour ? currentTour.samplePriceUSD * travelers : 0;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!phoneNumber.trim() || phoneNumber.length < 7) {
      newErrors.phoneNumber = 'Please provide a valid contact telephone number';
    }
    if (!departureDate) {
      newErrors.departureDate = 'Please select an approximate departure date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate authentic inquiry reference
    const refCode = `VET-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setInquiryReference(refCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      onClick={(e) => {
        // Close if clicked directly on the dark backdrop
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative bg-[#F7F3EB] text-[#252923] rounded-3xl max-w-3xl w-full shadow-2xl border border-[#D9A85B]/30 overflow-hidden my-6">
        
        {/* Header Bar with Prominent "X" Close Button */}
        <div className="bg-[#173D32] text-white px-6 py-5 flex items-center justify-between border-b border-[#D9A85B]/20 relative">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D9A85B] flex items-center justify-center text-[#173D32] shadow-sm shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight">
                {submitted ? 'Inquiry Received' : 'Begin Your Ethiopian Journey'}
              </h3>
              <p className="text-white/70 text-xs">
                Vacation to Ethiopia Tours · Direct Addis Ababa Booking Desk
              </p>
            </div>
          </div>

          {/* Dedicated high-visibility "X" button */}
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all border border-white/25 hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D9A85B]"
            aria-label="Close booking modal"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Success State */
          <div className="p-8 sm:p-10 space-y-6">
            <div className="w-16 h-16 bg-[#173D32]/10 rounded-full flex items-center justify-center mx-auto text-[#173D32]">
              <CheckCircle className="w-10 h-10 text-[#173D32]" />
            </div>

            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D9A85B]">
                Inquiry Reference: {inquiryReference}
              </span>
              <h4 className="text-2xl font-serif text-[#173D32]">
                Thank you, {fullName}!
              </h4>
              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                We have received your travel inquiry for <strong className="text-[#173D32]">{currentTour?.title || 'Custom Tour'}</strong>. Our senior travel designers in Addis Ababa will review route logistics and contact you at <strong className="text-[#173D32]">{email}</strong> within 24 hours with custom arrangements and exact pricing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 text-xs text-slate-700 space-y-2.5 max-w-lg mx-auto">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Selected Journey:</span>
                <span className="font-semibold text-[#173D32]">{currentTour?.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Target Departure:</span>
                <span className="font-semibold text-slate-800">{departureDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Party Size:</span>
                <span className="font-semibold text-slate-800">{travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Sample Starting Estimate:</span>
                <span className="font-semibold text-[#173D32]">{formatETB(estimatedTotalETB)}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Preferred Lodging:</span>
                <span className="font-semibold text-slate-800">{accommodationPreference}</span>
              </div>
            </div>

            <div className="bg-[#173D32]/5 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-3">
              <Shield className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
              <p>
                <strong>No immediate payment required.</strong> All tours are tailored to your schedule and flight connections. You can also reach our Addis Ababa team directly at <a href="tel:0920183098" className="font-semibold text-[#173D32] underline">0920183098</a> or <a href="tel:0911696076" className="font-semibold text-[#173D32] underline">0911696076</a>.
              </p>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={handleReset}
                className="py-3 px-8 bg-[#173D32] hover:bg-[#0e2720] text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Tour Selection and Duration */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                1. Select Desired Tour Package
              </label>
              <select
                value={selectedTourId}
                onChange={(e) => setSelectedTourId(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#252923] focus:outline-none focus:border-[#D9A85B] shadow-sm font-medium"
              >
                {TOURS_DATA.map(tour => (
                  <option key={tour.id} value={tour.id}>
                    {tour.title} ({tour.durationLabel} · From {formatETB(tour.samplePriceETB)})
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Dates & Party Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                  2. Approximate Departure Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-[#252923] focus:outline-none focus:border-[#D9A85B] shadow-sm"
                  />
                </div>
                {errors.departureDate && <p className="text-rose-600 text-xs mt-1">{errors.departureDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                  3. Number of Travelers
                </label>
                <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-xl px-4 py-2.5 shadow-sm">
                  <Users className="w-4 h-4 text-[#D9A85B]" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full bg-transparent text-sm text-[#252923] focus:outline-none font-medium"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Solo Traveler' : `Travelers (${num} persons)`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-slate-200 pt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-3">
                4. Primary Contact Information
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B]"
                    />
                  </div>
                  {errors.fullName && <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B]"
                    />
                  </div>
                  {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp *"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B]"
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-rose-600 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>
            </div>

            {/* Accommodation Style and Special Requests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Accommodation Preference
                </label>
                <select
                  value={accommodationPreference}
                  onChange={(e) => setAccommodationPreference(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#D9A85B]"
                >
                  <option value="Boutique Lodges & Heritage Hotels">Handpicked Boutique Lodges & Heritage Hotels</option>
                  <option value="Eco-Lodges & Nature Retreats">Eco-Lodges & Nature Retreats</option>
                  <option value="Highland Wilderness Camping + Lodges">Wilderness Trekking Camping + Lodges</option>
                  <option value="Luxury / Best Available">Best Available Premium Standard</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Specific Requests or Route Modifications
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dietary needs, private 4WD only, extra Lalibela day"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#D9A85B]"
                />
              </div>
            </div>

            {/* Price Preview Card with ETB */}
            {currentTour && (
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Estimated Quote (ETB)</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif text-[#173D32] font-bold">
                      {formatETB(estimatedTotalETB)}
                    </span>
                    <span className="text-xs text-slate-500">
                      ({formatETB(currentTour.samplePriceETB)} × {travelers} {travelers === 1 ? 'person' : 'persons'})
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    *Accurate Ethiopian market rate including domestic flights, 4WD Land Cruiser, accommodation, permits, and licensed guides. (approx. ${estimatedTotalUSD.toLocaleString()} USD)
                  </span>
                </div>

                <div className="text-right text-xs text-slate-500 hidden sm:block">
                  <span className="block font-medium text-[#173D32]">Addis Ababa Office</span>
                  <span>Gabon St · 0920183098 / 0911696076</span>
                </div>
              </div>
            )}

            {/* Actions row: Cancel Button + Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 text-center sm:text-left">
                No upfront payment charged today. Our Addis Ababa team will confirm dates and prepare a finalized itinerary.
              </p>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors whitespace-nowrap"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-3.5 px-7 bg-[#173D32] hover:bg-[#0e2720] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Submit Booking Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-[#D9A85B]" />
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
