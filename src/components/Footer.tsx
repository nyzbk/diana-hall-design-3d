import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dh-bronze text-dh-sand pt-20 pb-12 border-t border-dh-linen/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-dh-sand/10">
          
          {/* Brand Colophon (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <span className="font-serif text-2xl tracking-[0.15em] text-dh-sand uppercase block">
              Diana Hall Design
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-dh-amber font-body">
              Architecture &bull; Interiors &bull; Naples, Florida
            </p>
            <p className="text-sm text-dh-sand/70 font-body leading-relaxed max-w-sm">
              Creating bespoke residential estates of quiet permanence across Port Royal, Aqualane Shores, and Pelican Bay. Conceived through pure materiality, timeless proportion, and sea-light dialogue.
            </p>
          </div>

          {/* Navigational Links (3 cols) */}
          <div className="md:col-span-3 space-y-4 font-body">
            <span className="text-xs uppercase tracking-widest text-dh-amber font-semibold block">
              Monograph Index
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-dh-sand/80">
              <li>
                <a href="#hero" className="hover:text-dh-amber transition-colors">
                  The Residence Tour
                </a>
              </li>
              <li>
                <a href="#atelier" className="hover:text-dh-amber transition-colors">
                  The Atelier &bull; Diana Hall
                </a>
              </li>
              <li>
                <a href="#estates" className="hover:text-dh-amber transition-colors">
                  Curated Estates
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-dh-amber transition-colors">
                  Materiality Library
                </a>
              </li>
              <li>
                <a href="#commission" className="hover:text-dh-amber transition-colors">
                  Private Commission
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Office (4 cols) */}
          <div className="md:col-span-4 space-y-4 font-body">
            <span className="text-xs uppercase tracking-widest text-dh-amber font-semibold block">
              Naples Atelier Headquarters
            </span>
            <div className="text-sm text-dh-sand/80 space-y-2 leading-relaxed">
              <p>5th Avenue South<br />Naples, FL 34102</p>
              <p>
                <a href="tel:2395925500" className="text-dh-sand hover:text-dh-amber transition-colors font-serif text-base block mt-2">
                  (239) 592-5500
                </a>
              </p>
              <p className="text-xs font-mono text-dh-amber/90 pt-1">
                26.1420° N, 81.7948° W &bull; Gulf Coast
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dh-sand/50 font-body">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Diana Hall Design, LLC. All rights reserved.</span>
            <span>Port Royal &bull; Pelican Bay &bull; Naples, FL</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dh-sand/5 hover:bg-dh-sand/10 text-dh-sand text-xs transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Return to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-dh-amber" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
