import React, { useState } from 'react';
import { Layers, ShieldCheck, Check } from 'lucide-react';

interface Material {
  id: string;
  name: string;
  provenance: string;
  finish: string;
  application: string;
  tactileFeel: string;
  description: string;
}

const MATERIALS: Material[] = [
  {
    id: 'travertine',
    name: 'Roman Navona Travertine',
    provenance: 'Tivoli Quarries &bull; Lazio, Italy',
    finish: 'Vein-Cut &bull; Matte Honed &bull; Micro-Beveled',
    application: 'Continuous Interior Flooring & Open-Air Terraces',
    tactileFeel: 'Silky, cool underfoot, non-reflective under coastal glare',
    description: 'Extracted from ancient Italian thermal deposits. We select only dense, ivory-toned blocks characterized by linear strata, providing an unbroken architectural plinth from the salon to the sea.'
  },
  {
    id: 'white-oak',
    name: 'Bleached Coastal White Oak',
    provenance: 'Old-Growth European Forests &bull; Spessart Region',
    finish: 'Custom Wire-Brushed &bull; Fluted &bull; Raw Matte Poly',
    application: 'Architectural Millwork, Hidden Pivot Doors & Wall Paneling',
    tactileFeel: 'Fine organic grain, warm satin tactile feedback',
    description: 'Slow-grown European oak fumed with gentle lime washes to neutralize yellow undertones. Fluted at 18mm intervals to create subtle shadow lines that track the movement of the sun.'
  },
  {
    id: 'bronze',
    name: 'Antiqued Burnished Bronze',
    provenance: 'Artisanal Foundry &bull; Brescia, Italy',
    finish: 'Hand-Rubbed Oil &bull; Living Patina',
    application: 'Custom Hearth Surrounds, Sliders & Luminaire Casings',
    tactileFeel: 'Heavy, smooth metallic cool, gracefully patinating with sea breeze',
    description: 'An honest living alloy that deepens in character over decades of exposure to Florida’s coastal air, anchoring light-filled spaces with grounding architectural weight.'
  },
  {
    id: 'linen',
    name: 'Raw Belgian Master Linen',
    provenance: 'Flanders Flax Mills &bull; Courtrai, Belgium',
    finish: 'Natural Loom State &bull; Washed Enzyme Weave',
    application: 'Bespoke Upholstery, Drapery & Acoustic Ceilings',
    tactileFeel: 'Substantial, breathable, diffusing intense subtropical light',
    description: 'Woven from unbleached European flax fibers. It softens spatial acoustics in soaring double-height volumes while filtering sunlight into a warm, luminous glow.'
  }
];

export const MaterialitySwatches: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>('travertine');
  const current = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];

  return (
    <section id="materials" className="scroll-mt-20 py-28 sm:py-36 bg-dh-sand border-t border-dh-linen relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-dh-amber mb-3 font-body">
            Tactile Materiality &bull; The Atelier Library
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-dh-bronze tracking-tight leading-[1.1]">
            Honest materials that age <br />
            <span className="italic">with quiet permanence.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-dh-stone font-body leading-relaxed max-w-xl">
            We reject synthetic surfaces. Every estate designed by Diana Hall is constructed exclusively with natural stone, old-growth timber, living alloys, and heirloom textiles.
          </p>
        </div>

        {/* 4 Swatch Selector Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mb-12">
          {MATERIALS.map((mat) => {
            const isSelected = selectedMaterial === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id)}
                type="button"
                className={`p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-dh-bronze text-dh-sand border-dh-bronze shadow-md -translate-y-0.5'
                    : 'bg-white text-dh-bronze border-dh-linen hover:border-dh-bronze/30 hover:bg-dh-linen/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] uppercase font-mono tracking-widest ${
                      isSelected ? 'text-dh-amber' : 'text-dh-stone'
                    }`}>
                      Spec {mat.id.toUpperCase()}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-dh-amber" />}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl leading-tight">
                    {mat.name}
                  </h3>
                </div>
                <span className={`text-xs mt-3 font-body block ${
                  isSelected ? 'text-dh-sand/75' : 'text-dh-stone'
                }`}>
                  {mat.application.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Material Dossier */}
        <div className="max-w-4xl bg-white border border-dh-linen rounded-3xl p-8 sm:p-12 shadow-sm relative font-body">
          <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4 pb-8 border-b border-dh-linen">
            <div>
              <span className="text-xs uppercase tracking-widest text-dh-amber font-semibold">
                Material Provenance &bull; Certified Authentic
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-dh-bronze mt-1">
                {current.name}
              </h3>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs text-dh-stone block">Source Quarry / Mill:</span>
              <span
                className="text-xs sm:text-sm font-medium text-dh-bronze block mt-0.5"
                dangerouslySetInnerHTML={{ __html: current.provenance }}
              />
            </div>
          </div>

          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-dh-amber font-semibold block">
                Architectural Integration
              </span>
              <p className="text-sm text-dh-stone leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="space-y-3 bg-dh-sand p-6 rounded-2xl border border-dh-linen/60">
              <div>
                <span className="text-xs text-dh-stone uppercase tracking-wider block">Finish Specification</span>
                <span className="text-xs sm:text-sm font-semibold text-dh-bronze" dangerouslySetInnerHTML={{ __html: current.finish }} />
              </div>
              <div className="pt-2 border-t border-dh-linen">
                <span className="text-xs text-dh-stone uppercase tracking-wider block">Tactile Profile</span>
                <span className="text-xs sm:text-sm text-dh-bronze italic">{current.tactileFeel}</span>
              </div>
              <div className="pt-2 border-t border-dh-linen">
                <span className="text-xs text-dh-stone uppercase tracking-wider block">Primary Use</span>
                <span className="text-xs sm:text-sm font-medium text-dh-bronze">{current.application}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-dh-linen flex items-center gap-2 text-xs text-dh-stone">
            <Check className="w-4 h-4 text-dh-amber" />
            <span>All stone and timber selections are inspected in-person by Diana Hall prior to shipping to the jobsite.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
