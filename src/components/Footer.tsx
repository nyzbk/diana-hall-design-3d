import React from 'react';
import { Phone, Mail, ArrowUp, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090c] border-t border-luxury-border/60 text-luxury-sand pt-16 pb-28 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-luxury-gold/60 flex items-center justify-center bg-luxury-charcoal">
                <span className="font-display font-bold text-xs tracking-widest text-luxury-gold">DH</span>
              </div>
              <span className="font-serif text-xl font-medium tracking-wide text-white">
                DIANA HALL DESIGN
              </span>
            </div>
            <p className="text-xs text-luxury-sand/80 font-light leading-relaxed max-w-sm mb-6">
              Award-winning luxury residential interior design and spatial architecture firm based in Naples, Florida. Honoring classic coastal architecture with bespoke, contemporary discipline.
            </p>
            <div className="flex items-center gap-3 text-luxury-sand/80">
              <a
                href="https://www.instagram.com/dianahalldesign"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-luxury-border flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Dianahalldesign"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-luxury-border flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/diana-cotey-hall"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-luxury-border flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-luxury text-luxury-gold mb-4">
              The Firm
            </h5>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider text-luxury-sand/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Residence Walkthrough</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Signature Estates</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">Design Philosophy</a>
              </li>
              <li>
                <a href="#accolades" className="hover:text-white transition-colors">Awards & Honors</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-luxury text-luxury-gold mb-4">
              Naples Communities
            </h5>
            <ul className="space-y-2 text-xs font-light text-luxury-sand/70">
              <li>Port Royal</li>
              <li>Aqualane Shores</li>
              <li>Pelican Bay & Bay Colony</li>
              <li>Old Naples Historic District</li>
              <li>Mediterra & Grey Oaks</li>
              <li>Park Shore</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h5 className="font-mono text-[11px] uppercase tracking-luxury text-luxury-gold mb-4">
              Naples Studio
            </h5>
            <p className="text-xs text-luxury-sand/80 leading-relaxed mb-3">
              400 Fifth Avenue South <br />
              Suite 201 <br />
              Naples, FL 34102
            </p>
            <p className="text-xs font-mono text-luxury-sand mb-1">
              <a href="tel:2393985423" className="hover:text-luxury-gold transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-luxury-gold" /> (239) 398-5423
              </a>
            </p>
            <p className="text-xs font-mono text-luxury-sand">
              <a href="mailto:dhall@dianahalldesign.com" className="hover:text-luxury-gold transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-luxury-gold" /> dhall@dianahalldesign.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-luxury-border/50 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-luxury-sand/60 gap-4">
          <p>
            © {new Date().getFullYear()} Diana Hall Design, LLC. All Rights Reserved. Luxury Interior Architecture.
          </p>
          <div className="flex items-center gap-6">
            <span>License & Insured · Naples, FL</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-luxury-gold transition-colors uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Action Bar for Mobile Screens (390px support) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0a0c10]/95 backdrop-blur-xl border-t border-luxury-gold/30 sm:hidden flex items-center gap-2">
        <a
          href="tel:2393985423"
          className="flex-1 py-3 px-2 rounded-xl glass-panel text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-luxury-gold/30"
        >
          <Phone className="w-3.5 h-3.5 text-luxury-gold" />
          <span>Call Studio</span>
        </a>
        <button
          onClick={onOpenConsultation}
          className="flex-[1.4] py-3 px-3 rounded-xl bg-luxury-gold text-luxury-charcoal font-semibold font-mono text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Consultation</span>
        </button>
      </div>
    </footer>
  );
};
