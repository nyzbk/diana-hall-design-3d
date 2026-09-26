import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

interface Estate {
  id: string;
  title: string;
  enclave: string;
  year: string;
  area: string;
  image: string;
  architecture: string;
  materialNotes: string[];
  description: string;
}

const ESTATES: Estate[] = [
  {
    id: 'port-royal',
    title: 'The Gulf Coastline Pavilion',
    enclave: 'Port Royal &bull; Gordon Drive',
    year: 'Completed 2025',
    area: '12,400 sq.ft.',
    image: '/images/estate-port-royal.webp',
    architecture: 'Oceanfront Pavilion Architecture',
    materialNotes: ['Roman Vein-Cut Travertine', 'Bleached European White Oak', 'Hand-Loomed Belgian Linen'],
    description: 'Conceived as an unbroken progression from land to sea. Continuous travertine slab flooring flows from the double-height grand salon across the open-air reflection pool toward the sunset tide.'
  },
  {
    id: 'pelican-bay',
    title: 'Pelican Bay Sky Villa',
    enclave: 'Pelican Bay &bull; Gulf Tower Residence',
    year: 'Completed 2024',
    area: '6,800 sq.ft.',
    image: '/images/estate-pelican-bay.webp',
    architecture: 'High-Rise Architectural Interior',
    materialNotes: ['Fluted White Oak Wall Paneling', 'Aged Brushed Bronze Fireplace', 'Oyster Limestone'],
    description: 'A serene sanctuary elevated eighteen stories above the coastal mangrove preserve. Custom fluted oak millwork absorbs ambient Gulf light, creating intimate spatial warmth.'
  },
  {
    id: 'aqualane-shores',
    title: 'Aqualane Shores Canal Villa',
    enclave: 'Aqualane Shores &bull; 16th Avenue South',
    year: 'Completed 2023',
    area: '9,200 sq.ft.',
    image: '/images/estate-aqualane-shores.webp',
    architecture: 'Deepwater Courtyard Residence',
    materialNotes: ['Hand-Carved Florida Keystone', 'Teak Pergola Ceilings', 'Antiqued Brass Light Sculptures'],
    description: 'Designed around a central reflection courtyard opening directly onto a private deepwater yacht slip. Pocketing glass partitions eliminate the boundary between indoor dining and the tropical evening breeze.'
  }
];

export const EstatesPortfolio: React.FC = () => {
  const [activeEstate, setActiveEstate] = useState<string>('port-royal');
  const selected = ESTATES.find((e) => e.id === activeEstate) || ESTATES[0];

  return (
    <section id="estates" className="scroll-mt-20 py-28 sm:py-36 bg-dh-linen/30 border-t border-dh-linen relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-dh-amber mb-3 font-body">
              Curated Estates &bull; Selected Works
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-dh-bronze tracking-tight leading-[1.1]">
              Private residential works <br />
              <span className="italic">in Naples and the Gulf Islands.</span>
            </h2>
          </div>

          {/* Enclave Selector Tabs: Single-line Architectural Index */}
          <div className="flex items-center gap-6 sm:gap-8 font-serif text-sm sm:text-base border-b border-dh-linen pb-1 overflow-x-auto no-scrollbar whitespace-nowrap">
            {ESTATES.map((estate, idx) => (
              <button
                key={estate.id}
                onClick={() => setActiveEstate(estate.id)}
                type="button"
                className={`pb-2.5 transition-all duration-300 relative shrink-0 ${
                  activeEstate === estate.id
                    ? 'text-dh-bronze font-semibold'
                    : 'text-dh-stone/75 hover:text-dh-bronze'
                }`}
              >
                <span className="font-mono text-[10px] text-dh-amber mr-1.5">0{idx + 1}</span>
                <span>{estate.title}</span>
                {activeEstate === estate.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-dh-amber" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Estate Monograph Feature */}
        <div className="bg-white border border-dh-linen rounded-3xl overflow-hidden shadow-sm">
          
          {/* High-Resolution Hero Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-dh-linen">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dh-bronze/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay Tagging */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-dh-sand gap-4">
              <div>
                <span
                  className="text-xs uppercase tracking-[0.25em] text-dh-amber font-body block"
                  dangerouslySetInnerHTML={{ __html: selected.enclave }}
                />
                <h3 className="font-serif text-2xl sm:text-4xl text-dh-sand tracking-wide mt-1">
                  {selected.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-dh-sand/90">
                <span>{selected.area}</span>
                <span>&bull;</span>
                <span>{selected.year}</span>
              </div>
            </div>
          </div>

          {/* Architectural Notes & Materiality Specs */}
          <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-body">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-dh-amber font-semibold block">
                Architectural Statement
              </span>
              <p className="text-base text-dh-stone leading-relaxed">
                {selected.description}
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-dh-linen lg:pl-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-dh-amber font-semibold block">
                Selected Material Specification
              </span>
              <div className="space-y-2">
                {selected.materialNotes.map((mat, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-dh-bronze font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-dh-amber" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href="#commission"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-dh-bronze hover:text-dh-amber transition-colors"
                >
                  <span>Inquire about this aesthetic archetype</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
