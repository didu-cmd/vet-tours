/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomeView } from './views/HomeView';
import { ToursView } from './views/ToursView';
import { TourDetailView } from './views/TourDetailView';
import { DestinationsView } from './views/DestinationsView';
import { AboutView } from './views/AboutView';
import { JournalView } from './views/JournalView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedTourId, setSelectedTourId] = useState<string>('lalibela-historic-circuit');
  const [selectedDestId, setSelectedDestId] = useState<string>('lalibela');
  const [selectedArticleId, setSelectedArticleId] = useState<string | undefined>(undefined);
  
  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingPrefillTourId, setBookingPrefillTourId] = useState<string | undefined>(undefined);

  // Search parameters from Hero search
  const [heroSearchParams, setHeroSearchParams] = useState<{
    destination: string;
    date: string;
    travelers: number;
  }>({
    destination: 'all',
    date: '',
    travelers: 2,
  });

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTour = (tourId: string) => {
    setSelectedTourId(tourId);
    setCurrentView('tour-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (destId: string) => {
    setSelectedDestId(destId);
    setCurrentView('destinations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentView('journal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (tourId?: string) => {
    setBookingPrefillTourId(tourId || selectedTourId);
    setIsBookingOpen(true);
  };

  const handleSearchTours = (destination: string, date: string, travelers: number) => {
    setHeroSearchParams({ destination, date, travelers });
    setCurrentView('tours');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB] text-[#252923] selection:bg-[#D9A85B]/30 selection:text-[#173D32]">
      {/* Universal Top Bar Contract Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectTour={handleSelectTour}
            onSelectDestination={handleSelectDestination}
            onSelectArticle={handleSelectArticle}
            onOpenBooking={handleOpenBooking}
            onSearchTours={handleSearchTours}
          />
        )}

        {currentView === 'tours' && (
          <ToursView
            onSelectTour={handleSelectTour}
            onOpenBooking={handleOpenBooking}
            initialSearch={heroSearchParams}
          />
        )}

        {currentView === 'tour-detail' && (
          <TourDetailView
            tourId={selectedTourId}
            onBack={() => handleNavigate('tours')}
            onSelectTour={handleSelectTour}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'destinations' && (
          <DestinationsView
            selectedDestId={selectedDestId}
            onSelectDestination={handleSelectDestination}
            onSelectTour={handleSelectTour}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentView === 'journal' && (
          <JournalView
            selectedArticleId={selectedArticleId}
            onSelectArticle={handleSelectArticle}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectDestination={handleSelectDestination}
        onSelectTour={handleSelectTour}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTourId={bookingPrefillTourId}
      />
    </div>
  );
}
