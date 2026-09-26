import React from 'react';
import { TEAM_MEMBERS, TESTIMONIALS } from '../data/mockData';
import { Compass, Sparkles, CheckCircle2, Star, Quote } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-luxury-border/40">
      {/* Studio Philosophy Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-[11px] font-mono tracking-luxury uppercase text-luxury-gold block mb-2">
          The Studio Philosophy
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-white mb-6">
          Architectural Harmony, Curated for a Lifetime
        </h2>
        <p className="text-sm sm:text-base text-luxury-sand/90 font-light leading-relaxed">
          For over two decades in Naples, Diana Hall Design has approached each residence not as a mere collection of furniture, but as a holistic architectural continuum. From custom millwork down to the texture of hand-loomed linens, we engineer atmospheres that feel serene, effortless, and timeless.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-luxury-border hover:border-luxury-gold/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6">
            <Compass className="w-6 h-6" />
          </div>
          <span className="font-mono text-[10px] text-luxury-gold uppercase tracking-widest block mb-2">Pillar 01</span>
          <h3 className="font-serif text-2xl text-white font-medium mb-3">
            Architectural Spatial Precision
          </h3>
          <p className="text-xs sm:text-sm text-luxury-sand/80 leading-relaxed font-light">
            Every millimeter of volume, ceiling articulation, sightlines, and natural daylight orientation is meticulously planned before a single material is specified. Zero surprises, complete design certainty.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-luxury-border hover:border-luxury-gold/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="font-mono text-[10px] text-luxury-gold uppercase tracking-widest block mb-2">Pillar 02</span>
          <h3 className="font-serif text-2xl text-white font-medium mb-3">
            Artisanal Sourcing & Millwork
          </h3>
          <p className="text-xs sm:text-sm text-luxury-sand/80 leading-relaxed font-light">
            Direct quarry relationships in Carrara, bespoke European oak mills, and handcrafted joinery. We collaborate exclusively with master craftsmen whose standards mirror our own.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-luxury-border hover:border-luxury-gold/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <span className="font-mono text-[10px] text-luxury-gold uppercase tracking-widest block mb-2">Pillar 03</span>
          <h3 className="font-serif text-2xl text-white font-medium mb-3">
            Guaranteed White-Glove Turnkey
          </h3>
          <p className="text-xs sm:text-sm text-luxury-sand/80 leading-relaxed font-light">
            Our firm is legendary among Naples builders for delivering multi-million dollar estates strictly on time and on budget. From initial permit review to final floral placement.
          </p>
        </div>
      </div>

      {/* Meet The Principals */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-mono tracking-luxury uppercase text-luxury-gold block mb-2">
            Leadership & Architectural Talent
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
            The Studio Principals
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="glass-panel rounded-2xl overflow-hidden border border-luxury-border group hover:border-luxury-gold/40 transition-all">
              <div className="aspect-[4/5] overflow-hidden bg-luxury-charcoal">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-luxury-gold uppercase tracking-widest block mb-1">
                  {member.experience}
                </span>
                <h4 className="font-serif text-2xl text-white font-medium mb-1">
                  {member.name}
                </h4>
                <p className="text-xs font-mono text-luxury-sand/70 mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-luxury-sand/90 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials Section */}
      <div id="reviews" className="pt-8 border-t border-luxury-border/50">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-luxury-gold mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
            ))}
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
            Verified Client Praise
          </h3>
          <p className="text-xs font-mono tracking-widest uppercase text-luxury-sand/70 mt-1">
            28 Reviews · 5.0 Star Rating · Google & Houzz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="glass-panel p-6 sm:p-7 rounded-2xl border border-luxury-border flex flex-col justify-between">
              <div>
                <Quote className="w-7 h-7 text-luxury-gold/40 mb-4" />
                <p className="text-xs font-mono text-luxury-gold tracking-wider uppercase mb-3">
                  {t.highlight}
                </p>
                <p className="text-sm text-luxury-sand/95 font-light italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-luxury-border/60">
                <span className="font-serif text-lg text-white font-medium block">
                  {t.author}
                </span>
                <span className="text-[11px] font-mono text-luxury-sand/60 block">
                  {t.role} · {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
