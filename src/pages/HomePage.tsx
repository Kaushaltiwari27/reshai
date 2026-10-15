import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StorySection from '../components/StorySection';
import Metrics from '../components/Metrics';
import AboutSpline from '../components/AboutSpline';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Infrastructure from '../components/Infrastructure';
import DeploymentProcess from '../components/DeploymentProcess';
import InteractiveDemos from '../components/InteractiveDemos';
import FounderSection from '../components/FounderSection';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import SearchModal from '../components/SearchModal';
import AIAssistantWidget from '../components/AIAssistantWidget';
import BookingModal from '../components/BookingModal';
import ServiceDetailModal, { type ServiceDetail } from '../components/ServiceDetailModal';

export const HomePage: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('AI Growth');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const handleOpenBooking = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    }
    setIsBookingOpen(true);
  };

  return (
    <>
      {/* Navigation Header */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={() => handleOpenBooking('AI Growth')}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero onOpenBooking={() => handleOpenBooking('AI Growth')} />

        {/* 2. Story Section with GSAP Horizontal ScrollTrigger */}
        <StorySection />

        {/* 3. Performance Metrics with GSAP Animated Counters */}
        <Metrics />

        {/* 4. AI-themed Visual & About Section (Spline 3D Core) */}
        <AboutSpline />

        {/* 5. What We Build (Services) with Architectural Deep-Dives */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 6. Why Businesses Choose RESH AI */}
        <WhyUs />

        {/* 7. Autonomous AI Voice & Sales Infrastructure */}
        <Infrastructure />

        {/* 8. 4-Phase Deployment Process */}
        <DeploymentProcess />

        {/* 9. Interactive AI Demos (ROI Calculator, System Recommender, Copywriter) */}
        <InteractiveDemos onOpenBooking={(topic) => handleOpenBooking(topic || 'AI Growth')} />

        {/* 10. Engineering Philosophy & Pillars */}
        <FounderSection />

        {/* 11. Client Impact & Testimonials (Infinite Marquee) */}
        <Testimonials />

        {/* 12. Outcome-Based Pricing Plans */}
        <Pricing onSelectPlan={(plan) => handleOpenBooking(plan)} />

        {/* 13. Frequently Asked Questions (Accordion) */}
        <FAQ />

        {/* 14. Final Conversion CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking('AI Growth')} />
      </main>

      {/* 15. Complete Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('AI Growth')} />

      {/* Search Modal Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Floating Interactive AI Voice & Chat Assistant */}
      <AIAssistantWidget onOpenBooking={(topic) => handleOpenBooking(topic || 'AI Growth')} />

      {/* Interactive Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedPlan={selectedPlan}
      />

      {/* Interactive Architectural Blueprint Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookCall={(solutionTitle) => {
          setSelectedService(null);
          handleOpenBooking(solutionTitle);
        }}
      />
    </>
  );
};

export default HomePage;
