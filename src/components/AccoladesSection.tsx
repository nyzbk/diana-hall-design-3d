import React from 'react';
import { AWARDS } from '../data/mockData';
import { Newspaper } from 'lucide-react';

export const AccoladesSection: React.FC = () => {
  const publications = [
    { name: 'Architectural Digest', quote: 'A masterclass in coastal sophistication.' },
    { name: 'Florida Design', quote: 'Pinnacle of Naples residential architecture.' },
    { name: 'Gulfshore Life', quote: 'Where modern tranquility meets classical proportion.' },
    { name: 'Elle Décor', quote: 'Timeless luxury executed with impeccable discipline.' }
  ];

  return (
    <section id="accolades" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-luxury-border/40">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[11px] font-mono tracking-luxury uppercase text-luxury-gold block mb-2">
            Industry Recognition
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
            Accolades & Press Honors
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-luxury-sand/70 max-w-md font-mono">
          Recognized by the Collier Building Industry Association with over 14 Sand Dollar Awards across Naples' most prestigious gated enclaves.
        </p>
      </div>

      {/* Awards Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
        {AWARDS.map((award, i) => (
          <div
            key={i}
            className="glass-panel p-5 rounded-2xl border border-luxury-border/70 hover:border-luxury-gold/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm font-semibold text-luxury-gold">{award.year}</span>
                <span className="text-xl">{award.badge}</span>
              </div>
              <h4 className="font-serif text-base text-white font-medium mb-1">
                {award.title}
              </h4>
              <p className="text-[11px] font-mono text-luxury-sand/70 mb-2">
                {award.organization}
              </p>
            </div>
            <p className="text-[10px] text-luxury-sand/90 font-light border-t border-luxury-border/50 pt-2 mt-2">
              {award.category}
            </p>
          </div>
        ))}
      </div>

      {/* Editorial Press Features */}
      <div className="glass-panel-gold p-8 sm:p-10 rounded-3xl border border-luxury-gold/30">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-luxury-gold mb-6">
          <Newspaper className="w-4 h-4" />
          <span>Featured in Editorial Publications</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub, i) => (
            <div key={i} className="p-4 rounded-xl bg-luxury-surface/50 border border-luxury-border/50">
              <h5 className="font-serif text-lg text-white font-medium mb-1">{pub.name}</h5>
              <p className="text-xs text-luxury-sand/80 italic font-light">"{pub.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
