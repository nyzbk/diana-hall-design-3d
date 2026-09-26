import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { PortfolioSection } from './components/PortfolioSection';
import { PhilosophySection } from './components/PhilosophySection';
import { AccoladesSection } from './components/AccoladesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#121820] font-['Manrope'] selection:bg-[#9E7D52]/20 selection:text-[#121820]">
      {/* Navigation Header */}
      <Navbar onOpenConsultation={scrollToContact} />

      {/* Main Experience */}
      <main>
        {/* Section #1: Fullscreen 60-Frame Pinned Scrollytelling Hero */}
        <Hero
          totalFrames={60}
          onOpenConsultation={scrollToContact}
        />

        {/* Bespoke Naples Coastal Finish Studio Signature Widget */}
        <SignatureWidget onOpenConsultation={scrollToContact} />

        {/* Curated Portfolio & Transformation Slider */}
        <PortfolioSection />

        {/* Studio Philosophy, 3 Pillars, Leadership, Testimonials */}
        <PhilosophySection />

        {/* Accolades, Sand Dollar Awards & Press Features */}
        <AccoladesSection />

        {/* VIP Project Consultation & Contact Concierge */}
        <ContactSection />
      </main>

      {/* Luxury Footer & Fixed Mobile Navigation Bar */}
      <Footer onOpenConsultation={scrollToContact} />
    </div>
  );
};

export default App;
