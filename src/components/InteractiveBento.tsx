import React, { useState } from 'react';
import { ShieldCheck, Activity, Award, Sparkles, Sliders, CheckCircle2, Home } from 'lucide-react';

export const InteractiveBento: React.FC = () => {
  const [style, setStyle] = useState<'coastal' | 'classical' | 'minimalist'>('coastal');
  const [palette, setPalette] = useState<'calacatta' | 'travertine' | 'bronze'>('calacatta');
  const [millwork, setMillwork] = useState<'fluted' | 'concealed' | 'lacquer'>('fluted');

  return (
    <section id="atelier-capabilities" className="relative py-28 md:py-36 bg-[#0F1115] text-[#F5F3EF] overflow-hidden border-t border-[#C59B63]/15">
      {/* Ambient Radial Glow (Meta AI Standard) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C59B63]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2A2E38]/60 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#C59B63] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
              ATELIER METHODOLOGY / 03
            </div>
            <h2 className="font-serif text-[40px] md:text-[56px] leading-[0.95] text-[#F5F3EF]">
              Architectural Rigor & Provenance.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#D1C7BD] max-w-md font-sans leading-relaxed">
            Every estate is approached as a singular work of art, merging architectural discipline, spatial acoustic planning, and noble materiality.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Live Interactive Estate & Materiality Simulator (Col Span 2) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[#16191F]/80 border border-[#C59B63]/30 p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-[#C59B63]/20 pb-4 mb-6">
                <span className="text-[11px] font-mono text-[#C59B63] tracking-widest uppercase flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#C59B63]" />
                  ESTATE ARCHITECTURAL CONFIGURATOR
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#C59B63]/20 text-[#C59B63] text-[10px] font-mono font-bold">
                  INTERACTIVE LAB
                </span>
              </div>

              <h3 className="font-serif text-[24px] md:text-[30px] text-[#F5F3EF] mb-2">
                Simulate your Naples residence.
              </h3>
              <p className="text-[13px] text-[#D1C7BD] mb-6">
                Select your architectural direction, material palette, and custom millwork tier in real-time.
              </p>

              {/* Style Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#D1C7BD] block mb-2 uppercase">1. Architectural Aesthetic:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['coastal', 'classical', 'minimalist'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        style === s
                          ? 'bg-[#C59B63] text-[#0F1115] font-bold shadow-md shadow-[#C59B63]/20'
                          : 'bg-[#0F1115]/80 text-[#F5F3EF] border border-[#C59B63]/20 hover:border-[#C59B63]/50'
                      }`}
                    >
                      {s === 'coastal' ? 'Coastal Modern' : s === 'classical' ? 'Mediterranean' : 'Pure Minimalist'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Palette Selection */}
              <div className="mb-4">
                <span className="text-[11px] font-mono text-[#D1C7BD] block mb-2 uppercase">2. Noble Stone & Fabric:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['calacatta', 'travertine', 'bronze'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPalette(p)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        palette === p
                          ? 'bg-[#C59B63] text-[#0F1115] font-bold shadow-md shadow-[#C59B63]/20'
                          : 'bg-[#0F1115]/80 text-[#F5F3EF] border border-[#C59B63]/20 hover:border-[#C59B63]/50'
                      }`}
                    >
                      {p === 'calacatta' ? 'Calacatta & Oak' : p === 'travertine' ? 'Travertine & Linen' : 'Belgian Stone & Bronze'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Millwork Selection */}
              <div>
                <span className="text-[11px] font-mono text-[#D1C7BD] block mb-2 uppercase">3. Bespoke Millwork Tier:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(['fluted', 'concealed', 'lacquer'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMillwork(m)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-mono uppercase transition-all ${
                        millwork === m
                          ? 'bg-[#C59B63] text-[#0F1115] font-bold shadow-md shadow-[#C59B63]/20'
                          : 'bg-[#0F1115]/80 text-[#F5F3EF] border border-[#C59B63]/20 hover:border-[#C59B63]/50'
                      }`}
                    >
                      {m === 'fluted' ? 'Fluted Walnut' : m === 'concealed' ? 'Concealed Acoustic' : 'Piano Lacquer'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#C59B63]/20 flex items-center justify-between">
              <div className="text-[11px] font-mono text-[#C59B63]">
                PROJECT PROFILE: {style.toUpperCase()} • {palette.toUpperCase()}
              </div>
              <a
                href="#commission"
                className="px-4 py-2 rounded-lg bg-[#C59B63] text-[#0F1115] font-mono text-[11px] font-bold uppercase hover:bg-[#d8ae68] transition-colors"
              >
                Inquire With Specifications
              </a>
            </div>
          </div>

          {/* Card 2: 28+ Years in Naples */}
          <div className="rounded-2xl bg-[#16191F]/80 border border-[#C59B63]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Award className="w-4 h-4 text-[#C59B63]" />
                TENURE & CRAFT
              </div>
              <div className="font-serif text-[54px] font-bold text-[#F5F3EF] leading-none mb-2">
                28+
              </div>
              <div className="text-[13px] text-[#C59B63] font-medium mb-3">
                Years of Continuous Naples Practice
              </div>
              <p className="text-[13px] text-[#D1C7BD] font-sans leading-relaxed">
                Founded in 1996 by Diana Hall. Our deep relationships with Naples master builders, artisans, and City boards ensure effortless approvals and execution.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C59B63]/15 flex items-center gap-2 text-[11px] font-mono text-[#D1C7BD]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Naples Atelier Active
            </div>
          </div>

          {/* Card 3: $450M+ Real Estate Value */}
          <div className="rounded-2xl bg-[#16191F]/80 border border-[#C59B63]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Home className="w-4 h-4 text-[#C89D56]" />
                PORTFOLIO VALUATION
              </div>
              <div className="font-serif text-[54px] font-bold text-[#F5F3EF] leading-none mb-2">
                $450M+
              </div>
              <div className="text-[13px] text-[#C59B63] font-medium mb-3">
                Naples Real Estate Curated
              </div>
              <p className="text-[13px] text-[#D1C7BD] font-sans leading-relaxed">
                Our interior architecture consistently maximizes estate equity and resale command across Gordon Drive, Gulf Shore Blvd, and Pelican Bay.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#C59B63]/15 flex items-center gap-2 text-[11px] font-mono text-[#D1C7BD]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified Architectural Value
            </div>
          </div>

          {/* Card 4: 140+ Private Commissions */}
          <div className="md:col-span-2 rounded-2xl bg-[#16191F]/80 border border-[#C59B63]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-[#C59B63]" />
                TRACK RECORD & PROVENANCE
              </div>
              <div className="font-serif text-[36px] md:text-[44px] text-[#F5F3EF] leading-tight mb-2">
                140+ Completed Private Estates.
              </div>
              <p className="text-[14px] text-[#D1C7BD] font-sans leading-relaxed mb-6">
                From 6,000 sq ft coastal cottages to 18,000 sq ft oceanfront compounds. We manage every phase: spatial drafting, lighting design, MEP coordination, fine art placement, and turnkey handover.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#C59B63]/15">
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5F3EF]">100%</div>
                <div className="text-[11px] font-mono text-[#D1C7BD]">Bespoke Millwork</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5F3EF]">24/7</div>
                <div className="text-[11px] font-mono text-[#D1C7BD]">White-Glove Service</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5F3EF]">Global</div>
                <div className="text-[11px] font-mono text-[#D1C7BD]">Direct Quarry Sourcing</div>
              </div>
              <div>
                <div className="text-[20px] font-mono font-bold text-[#F5F3EF]">Zero</div>
                <div className="text-[11px] font-mono text-[#D1C7BD]">Template Replicas</div>
              </div>
            </div>
          </div>

          {/* Card 5: Full Architectural Turnkey Handover */}
          <div className="md:col-span-2 rounded-2xl bg-[#16191F]/80 border border-[#C59B63]/30 p-8 flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-4">
                <Activity className="w-4 h-4 text-[#C59B63]" />
                END-TO-END EXECUTION
              </div>
              <div className="font-serif text-[36px] md:text-[44px] text-[#F5F3EF] leading-tight mb-2">
                From Bare Studs to Scented Handover.
              </div>
              <p className="text-[14px] text-[#D1C7BD] font-sans leading-relaxed mb-4">
                Our clients step off their flight directly into a completely appointed sanctuary: curated library shelves, Italian bed linens washed and pressed, wine cellars stocked, and ambient circadian lighting calibrated.
              </p>
            </div>
            <div className="pt-4 border-t border-[#C59B63]/15 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#C59B63]">diana@dianahalldesign.com</span>
              <span className="text-[11px] font-mono text-[#D1C7BD]">Turnkey Handover Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
