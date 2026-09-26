import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SignatureWidget: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [exposure, setExposure] = useState<'open-gulf' | 'inland-canal' | 'mangrove'>('open-gulf');
  

  const materials = {
    'open-gulf': [
      { name: 'French Bone Limestone', finish: 'Brushed & Salt-Treated', tone: '#E6E2D8' },
      { name: 'Belgian Slub Bouclé', finish: 'Marine Grade Natural', tone: '#F4F2EC' },
      { name: 'Brushed Architectural Bronze', finish: 'Antioxidant Living Patina', tone: '#9E7D52' },
      { name: 'Bleached Rift White Oak', finish: 'Matte Invisible Poly', tone: '#D8CCA3' }
    ],
    'inland-canal': [
      { name: 'Navona Travertine Slab', finish: 'Honed Cross-Cut', tone: '#DFD7CC' },
      { name: 'Canal Walnut Paneling', finish: 'Hand-Waxed Grain', tone: '#4A3B32' },
      { name: 'Smoked Quartz Glass', finish: 'Acoustic Laminated', tone: '#6E6B65' },
      { name: 'Castellum Linen Sheers', finish: '100% Organic Flaved', tone: '#EDE8E1' }
    ],
    'mangrove': [
      { name: 'Silver Cypress Timber', finish: 'Sustainably Harvested', tone: '#A4A29B' },
      { name: 'Terrazzo Agate Composite', finish: 'Seamless Hand-Poured', tone: '#CAC4BC' },
      { name: 'Anodized Champagne Steel', finish: 'Salt-Spray Certified', tone: '#C2B6A2' },
      { name: 'Raw Silk Wall Coverings', finish: 'Hand-Dyed Sand', tone: '#F0ECE1' }
    ]
  };

  const activeMaterials = materials[exposure];

  return (
    <section id="material-curator" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F8F6F2] text-[#121820] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-['Manrope'] uppercase tracking-[0.2em] text-[#9E7D52] block mb-3 font-medium">
            Naples Architectural Materials Atelier
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Italiana'] font-normal text-[#121820] tracking-tight">
            Coastal Atmosphere & Materiality Curator
          </h2>
          <p className="mt-4 text-[#7A7873] text-sm sm:text-base max-w-2xl mx-auto font-['Manrope'] font-light leading-relaxed">
            In ultra-luxury Gulf residences, sunlight and salt-air dictate materiality. Select your waterfront topography to view our curated structural tactile palette.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-12 border border-[#9E7D52]/15 shadow-xl">
          {/* Exposure Selectors */}
          <div className="mb-10">
            <span className="text-xs font-['Manrope'] uppercase tracking-wider text-[#9E7D52] block mb-4 font-semibold">
              1. Waterfront Sanctuary Exposure
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'open-gulf', label: 'Port Royal Direct Gulf Front' },
                { id: 'inland-canal', label: 'Aqualane Shores Navigable Canal' },
                { id: 'mangrove', label: 'Pelican Bay Mangrove Sanctuary' }
              ].map(e => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => setExposure(e.id as any)}
                  className={`py-3.5 px-4 rounded-xl text-xs font-['Manrope'] font-medium transition-all text-left flex items-center justify-between ${
                    exposure === e.id
                      ? 'bg-[#121820] text-white shadow-md'
                      : 'bg-[#F8F6F2] text-[#7A7873] hover:bg-[#EAE7DF]'
                  }`}
                >
                  <span>{e.label}</span>
                  {exposure === e.id && <Sparkles className="w-3.5 h-3.5 text-[#9E7D52]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Live Materiality Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-['Manrope'] uppercase tracking-wider text-[#9E7D52] font-semibold">
                2. Bespoke Architectural Finishes (Living Swatches)
              </span>
              <span className="text-[11px] font-['Manrope'] text-[#7A7873]">Curated for Coastal Resilience</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {activeMaterials.map(mat => (
                <div key={mat.name} className="p-4 rounded-xl bg-[#F8F6F2] border border-[#9E7D52]/10 flex flex-col justify-between h-40">
                  <div className="w-full h-12 rounded-lg shadow-inner mb-3 border border-black/5" style={{ backgroundColor: mat.tone }} />
                  <div>
                    <h4 className="text-xs font-semibold font-['Manrope'] text-[#121820] leading-snug">{mat.name}</h4>
                    <p className="text-[10px] text-[#7A7873] font-['Manrope'] mt-1">{mat.finish}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#9E7D52]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#7A7873] font-['Manrope']">
              Studio: 1048 6th Ave S, Naples, FL · 25+ Years of Sand Dollar Honors
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#121820] text-white font-['Manrope'] text-xs font-semibold uppercase tracking-widest hover:bg-[#9E7D52] transition-all btn-spring flex items-center justify-center gap-2"
            >
              <span>Schedule Private Portfolio Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
