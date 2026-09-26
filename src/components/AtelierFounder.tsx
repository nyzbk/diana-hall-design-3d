import React from 'react';
import { Compass, Sparkles, Award } from 'lucide-react';

export const AtelierFounder: React.FC = () => {
  return (
    <section id="atelier" className="scroll-mt-20 py-28 sm:py-36 bg-dh-sand border-t border-dh-linen relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-dh-amber mb-3 font-body">
            The Atelier &bull; Founded in Naples, 1999
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-dh-bronze tracking-tight leading-[1.1]">
            Architecture conceived as a <br />
            <span className="italic">dialogue between limestone and light.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-dh-stone font-normal leading-relaxed font-body max-w-2xl">
            For over a quarter century, Diana Hall Design has shaped the architectural and interior landscape of Southwest Florida's most storied coastal enclaves.
          </p>
        </div>

        {/* 2-Column Monograph Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Editorial Portrait */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-dh-linen shadow-lg border border-dh-linen aspect-[4/5] max-w-md mx-auto lg:max-w-none group">
              <img
                src="/images/founder-diana-hall.webp"
                alt="Diana Hall, Principal Architect and Founder"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dh-bronze/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-dh-sand">
                <span className="font-serif text-2xl tracking-wide block">Diana Hall</span>
                <span className="text-xs uppercase tracking-[0.25em] text-dh-amber font-body">Principal &amp; Founder</span>
              </div>
            </div>
          </div>

          {/* Right: Architectural Narrative & Credentials */}
          <div className="lg:col-span-6 space-y-8 font-body">
            <div className="border-l-2 border-dh-amber pl-6 py-2">
              <blockquote className="font-serif text-xl sm:text-2xl italic text-dh-bronze leading-snug">
                “A true coastal estate should never clamor for attention. It should breathe with the rhythm of the tides, rooted in honest materials that patina with grace under Florida’s amber sun.”
              </blockquote>
              <span className="block text-xs uppercase tracking-widest text-dh-stone mt-3 font-body">
                — Diana Hall, Principal
              </span>
            </div>

            <p className="text-sm sm:text-base text-dh-stone leading-relaxed">
              Based in Naples on 5th Avenue South, Diana Hall orchestrates a multidisciplinary team of licensed architects, interior specialists, and custom cabinetmakers. Each residential commission is limited to a single private client at a time, ensuring unbroken focus from initial zoning and structural schematics to bespoke furnishings and fine art acquisition.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-dh-linen">
              <div>
                <span className="font-serif text-3xl text-dh-bronze block">25+</span>
                <span className="text-xs uppercase tracking-wider text-dh-stone font-medium mt-1 block">
                  Years in Port Royal &amp; Naples
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-dh-bronze block">100%</span>
                <span className="text-xs uppercase tracking-wider text-dh-stone font-medium mt-1 block">
                  Custom Bespoke Millwork
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-dh-bronze block">ASID</span>
                <span className="text-xs uppercase tracking-wider text-dh-stone font-medium mt-1 block">
                  Professional Design Excellence
                </span>
              </div>
            </div>

            {/* Studio Note */}
            <div className="p-6 rounded-2xl bg-dh-linen/60 border border-dh-linen flex items-start gap-4">
              <Compass className="w-5 h-5 text-dh-amber shrink-0 mt-0.5" />
              <div className="text-xs text-dh-stone leading-relaxed">
                <strong className="text-dh-bronze font-semibold block mb-0.5 font-serif text-sm">
                  Exclusive Naples Territory Focus
                </strong>
                Port Royal oceanfront, Aqualane Shores deepwater canals, Pelican Bay high-rise penthouses, and Old Naples historic estates.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
