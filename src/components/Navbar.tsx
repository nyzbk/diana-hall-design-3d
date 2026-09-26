import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-panel-gold py-3 shadow-xl backdrop-blur-xl border-b border-luxury-gold/30'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Seal & Monogram */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full border border-luxury-gold/60 flex items-center justify-center bg-luxury-charcoal/80 group-hover:border-luxury-gold transition-colors shadow-inner">
              <span className="font-display font-bold text-sm tracking-widest text-luxury-gold">DH</span>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-white block group-hover:text-luxury-goldLight transition-colors">
                DIANA HALL DESIGN
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-luxury uppercase text-luxury-sand/70 block">
                Naples, Florida · Established 2004
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-luxury-sand/90">
            <a href="#hero" className="hover:text-luxury-gold transition-colors flex items-center gap-1">
              <span>Residence Tour</span>
              <span className="text-[9px] text-luxury-gold font-bold">●</span>
            </a>
            <a href="#portfolio" className="hover:text-luxury-gold transition-colors">
              Portfolio
            </a>
            <a href="#philosophy" className="hover:text-luxury-gold transition-colors">
              Philosophy & Craft
            </a>
            <a href="#accolades" className="hover:text-luxury-gold transition-colors">
              Accolades
            </a>
            <a href="#reviews" className="hover:text-luxury-gold transition-colors">
              Client Praise
            </a>
          </nav>

          {/* Direct Phone & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:2393985423"
              className="text-xs font-mono tracking-wider text-luxury-sand/90 hover:text-white flex items-center gap-2 px-3 py-1.5 rounded-full border border-luxury-border/60 hover:border-luxury-gold/50 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-luxury-gold" />
              <span>(239) 398-5423</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="glass-button text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full text-white font-medium flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Inquire</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:2393985423"
              className="p-2 rounded-full glass-panel text-luxury-gold"
              title="Call Direct"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full glass-panel text-luxury-sand hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0c10]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 sm:hidden animate-fade-in">
          <div className="flex flex-col gap-6 text-center">
            <div className="mb-2">
              <span className="font-display text-2xl text-luxury-gold tracking-widest block font-bold">DH</span>
              <span className="font-serif text-xl text-white">Diana Hall Design</span>
              <span className="text-[10px] font-mono text-luxury-sand/60 tracking-widest block uppercase mt-1">
                Naples, Florida
              </span>
            </div>

            <nav className="flex flex-col gap-5 font-serif text-xl tracking-wider text-luxury-sand">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-luxury-gold transition-colors"
              >
                Residence Walkthrough Tour
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-luxury-gold transition-colors"
              >
                Signature Estates & Villas
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-luxury-gold transition-colors"
              >
                The Studio & Architectural Craft
              </a>
              <a
                href="#accolades"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-luxury-gold transition-colors"
              >
                Sand Dollar & Aurora Awards
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-luxury-gold transition-colors"
              >
                Client Testimonials
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-luxury-border/60">
            <a
              href="tel:2393985423"
              className="w-full py-3 rounded-xl border border-luxury-gold/40 text-center font-mono text-xs text-white uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-luxury-gold" />
              <span>Call Direct · (239) 398-5423</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-luxury-gold text-luxury-charcoal font-semibold text-center font-mono text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Private Consultation</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
