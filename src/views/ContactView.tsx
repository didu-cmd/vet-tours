import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck, Compass, ExternalLink } from 'lucide-react';

interface ContactViewProps {
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Custom Private Tour');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name';
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!message.trim() || message.length < 10) {
      newErrors.message = 'Please provide a message or travel details (at least 10 characters)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B]">
          Direct Operations Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#173D32] font-normal leading-tight">
          Contact Vacation to Ethiopia Tours
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Reach our team directly at our headquarters on Gabon Street in Addis Ababa. We are available for private expedition planning, customized itineraries, domestic flight reservations, and general travel questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#173D32] text-white p-8 rounded-3xl border border-[#D9A85B]/30 shadow-xl space-y-6">
            <h3 className="font-serif text-2xl text-white">Addis Ababa Head Office</h3>
            
            <div className="space-y-4 text-xs sm:text-sm text-white/85">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#D9A85B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-0.5">Physical Address</strong>
                  <p>Gabon St, Addis Ababa, Ethiopia</p>
                  <span className="text-[11px] text-white/60">Central commercial district</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
                <Phone className="w-5 h-5 text-[#D9A85B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-0.5">Direct Telephone Lines</strong>
                  <p>
                    <a href="tel:0920183098" className="hover:text-[#D9A85B] font-medium text-white transition-colors">
                      0920183098
                    </a>
                  </p>
                  <p className="mt-1">
                    <a href="tel:0911696076" className="hover:text-[#D9A85B] font-medium text-white transition-colors">
                      0911696076
                    </a>
                  </p>
                  <span className="text-[11px] text-white/60">Direct call support available daily</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
                <Mail className="w-5 h-5 text-[#D9A85B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-0.5">Electronic Mail</strong>
                  <a
                    href="mailto:info@vacationtoethiopiatours.com"
                    className="hover:text-[#D9A85B] text-white font-medium transition-colors"
                  >
                    info@vacationtoethiopiatours.com
                  </a>
                  <span className="text-[11px] text-white/60 block mt-0.5">Inquiries replied within 24 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
                <Clock className="w-5 h-5 text-[#D9A85B] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white mb-0.5">Office Hours (East Africa Time, UTC+3)</strong>
                  <p>Monday – Saturday: 8:30 AM – 6:30 PM</p>
                  <p className="text-[11px] text-white/60">24/7 emergency dispatch for travelers currently on circuit</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-[#D9A85B] hover:bg-[#c99547] text-[#173D32] font-semibold text-xs rounded-xl transition-all shadow-md"
              >
                Launch Booking Request
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
            <span className="font-semibold text-[#173D32] block">Local Travel Assurance</span>
            <p>
              When you travel with Vacation to Ethiopia Tours, your itinerary is managed directly by certified Ethiopian tour directors. We handle flight changes, park scout fees, and hotel bookings directly with local partners.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#173D32]/10 rounded-full flex items-center justify-center mx-auto text-[#173D32]">
                <CheckCircle className="w-10 h-10 text-[#173D32]" />
              </div>
              <h3 className="text-2xl font-serif text-[#173D32]">Message Received</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for getting in touch with Vacation to Ethiopia Tours. A member of our Addis Ababa travel team will review your message and reply via email or phone shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="py-2.5 px-6 bg-[#F7F3EB] hover:bg-[#ebdcc0] text-[#173D32] font-semibold text-xs rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif text-[#173D32] mb-1">Send an Inquiry</h3>
                <p className="text-slate-500 text-xs">
                  Fill in your details below and our team will prepare recommendations tailored to your schedule.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-4 py-3 bg-[#F7F3EB]/50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B]"
                  />
                  {errors.name && <p className="text-rose-600 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 bg-[#F7F3EB]/50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B]"
                  />
                  {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-1.5">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555-0199 or 09..."
                    className="w-full px-4 py-3 bg-[#F7F3EB]/50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-1.5">
                    Inquiry Subject
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F7F3EB]/50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B] cursor-pointer"
                  >
                    <option value="Custom Private Tour">Custom Private Tour Planning</option>
                    <option value="Group Circuit Booking">Group Tour Dates & Booking</option>
                    <option value="Lalibela & North Historic">Northern Historic Route (Lalibela/Gondar)</option>
                    <option value="Simien Mountains Trek">Simien Mountains Trekking</option>
                    <option value="Danakil Expedition">Danakil Depression Expedition</option>
                    <option value="Omo Valley Journey">Omo Valley Cultural Tour</option>
                    <option value="General Question">General Travel Information</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-1.5">
                  Your Message or Travel Preferences *
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your proposed dates, group size, specific destinations of interest, or any questions about traveling in Ethiopia..."
                  className="w-full px-4 py-3 bg-[#F7F3EB]/50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#D9A85B]"
                />
                {errors.message && <p className="text-rose-600 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto py-3.5 px-8 bg-[#173D32] hover:bg-[#0e2720] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#D9A85B]" />
                <span>Send Message to Addis Desk</span>
              </button>

            </form>
          )}
        </div>

      </div>

      {/* Unfiltered Normal Live Google Map Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A85B] block mb-1">
              Office Location & Satellite Navigation
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#173D32]">
              Our Location in Addis Ababa, Ethiopia
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Gabon St, Addis Ababa, Ethiopia · Coordinates: 9.0082° N, 38.7612° E
            </p>
          </div>
          
          <a
            href="https://www.google.com/maps/search/?api=1&query=Gabon+St,+Addis+Ababa,+Ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#F7F3EB] hover:bg-[#ebdcc0] text-[#173D32] text-xs font-semibold rounded-xl transition-colors whitespace-nowrap self-start sm:self-auto border border-slate-200 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D9A85B]" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Normal Unfiltered Google Map iframe */}
        <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-100">
          <iframe
            title="Vacation to Ethiopia Tours - Gabon St, Addis Ababa, Ethiopia"
            src="https://maps.google.com/maps?q=Gabon+St,+Addis+Ababa,+Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-600 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D9A85B] shrink-0" />
            <span>Gabon St (Kirkos / Meskel Flower commercial district)</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#D9A85B] shrink-0" />
            <span>Direct Phone: 0920183098 / 0911696076</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D9A85B] shrink-0" />
            <span>Monday – Saturday: 8:30 AM – 6:30 PM (EAT)</span>
          </div>
        </div>
      </div>

    </div>
  );
};
