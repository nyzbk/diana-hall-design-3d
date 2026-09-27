import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface EstateItem {
  id: string;
  category: string;
  title: string;
  location: string;
  description: string;
  scale: string;
  materials: string[];
}

const ESTATES: EstateItem[] = [
  {
    id: 'port-royal',
    category: 'WATERFRONT COMPOUND',
    title: 'The Gordon Drive Estate',
    location: 'Port Royal • Naples, FL',
    description: 'A 14,000 sq ft private peninsula residence where floor-to-ceiling sliding glass disappears into pocketed stone, harmonizing Gulf breezes with bookmatched Calacatta and wire-brushed oak.',
    scale: '14,200 SQ FT',
    materials: ['Calacatta Gold Marble', 'Honed Portuguese Limestone', 'Bespoke Bronze Portals'],
  },
  {
    id: 'aqualane',
    category: 'MODERN COASTAL VILLA',
    title: 'The Aqualane Deepwater Residence',
    location: 'Aqualane Shores • Naples, FL',
    description: 'Designed around an interior tropical courtyard and 90-foot private yacht slip. Custom fluted walnut cabinetry, architectural acoustic ceiling slats, and curated European art collections.',
    scale: '9,800 SQ FT',
    materials: ['Fluted American Walnut', 'Belgian Natural Linen', 'Patinated Brass Fixtures'],
  },
  {
    id: 'pelican-bay',
    category: 'SKY RESIDENCE',
    title: 'The Mystique Tower Penthouse',
    location: 'Pelican Bay • Naples, FL',
    description: 'Perched 20 stories above the Gulf of Mexico, this full-floor residence features an open gallery layout with Italian terrazzo, minimalist plaster finishes, and low-profile bespoke upholstery.',
    scale: '7,400 SQ FT',
    materials: ['Venetian Polished Plaster', 'Cast Bronze Hardware', 'Custom Cashmere Rugs'],
  },
  {
    id: 'olde-naples',
    category: 'HISTORIC RE-IMAGINATION',
    title: 'The 3rd Street South Cottage',
    location: 'Olde Naples • Naples, FL',
    description: 'Bespoke coastal refinement meets historic cottage charm. Hand-painted ceramic tile accents, lime-washed cypress beams, and expansive French doors opening onto lush private garden loggias.',
    scale: '6,100 SQ FT',
    materials: ['Lime-Washed Cypress', 'Handmade Moroccan Zellige', 'Soapstone Countertops'],
  },
  {
    id: 'material-atelier',
    category: 'CURATED ARCHIVE',
    title: 'The Private Naples Design Atelier',
    location: '3560 Kraft Rd • Naples, FL',
    description: 'Our private studio where clients review physical full-scale stone slabs, hand-knotted silk textile swatches, bespoke lacquer finishes, and 3D spatial daylight simulations before build.',
    scale: 'PRIVATE ATELIER',
    materials: ['Rare Quarry Slabs', 'Custom Millwork Mockups', 'High-CRI Architectural Lighting'],
  },
];

export const HorizontalWorks: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-78%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#0A0C0E] text-[#F5F3EF]">
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[1600px] mx-auto w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#C59B63] uppercase mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
              ESTATE PORTFOLIO / 02
            </div>
            <h2 className="font-serif text-[36px] md:text-[56px] leading-[0.95] text-[#F5F3EF]">
              Naples Private Residences.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#D1C7BD] max-w-md font-sans leading-relaxed">
            Pan across selected custom residential commissions throughout Port Royal, Aqualane Shores, and Pelican Bay.
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="relative w-full overflow-visible">
          <motion.div style={{ x }} className="flex gap-8 items-stretch will-change-transform">
            {ESTATES.map((estate, index) => (
              <div
                key={estate.id}
                className="group relative w-[85vw] sm:w-[540px] md:w-[620px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#16191F] to-[#0E1014] border border-[#C59B63]/25 p-8 md:p-10 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#C59B63]/60 hover:shadow-[#C59B63]/10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#C59B63]/15 pb-4 mb-6">
                    <span className="text-[11px] font-mono tracking-widest text-[#C59B63] uppercase">
                      [{String(index + 1).padStart(2, '0')}] // {estate.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#C59B63]/15 text-[#C59B63] text-[11px] font-mono font-medium">
                      {estate.scale}
                    </span>
                  </div>

                  <h3 className="font-serif text-[28px] md:text-[36px] leading-tight text-[#F5F3EF] mb-2">
                    {estate.title}
                  </h3>

                  <p className="text-[13px] font-mono text-[#C59B63] mb-4">
                    {estate.location}
                  </p>

                  <p className="text-[14px] md:text-[15px] text-[#D1C7BD] leading-relaxed mb-6 font-sans">
                    {estate.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {estate.materials.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0F1115] border border-[#C59B63]/20 text-[11px] font-mono text-[#F5F3EF]/80"
                      >
                        • {mat}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#commission"
                    className="w-full py-3.5 rounded-xl bg-[#C59B63]/15 border border-[#C59B63]/40 text-[#C59B63] hover:bg-[#C59B63] hover:text-[#0F1115] text-[13px] font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-[#C59B63]"
                  >
                    <span>Inquire Regarding Residence</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at Bottom of Sticky Frame */}
        <div className="max-w-[1600px] mx-auto w-full mt-8">
          <div className="w-full h-1 bg-[#1A1D24] rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#C59B63]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#D1C7BD] mt-2">
            <span>RESIDENCE 01: PORT ROYAL</span>
            <span>RESIDENCE 05: MATERIAL ATELIER</span>
          </div>
        </div>
      </div>
    </section>
  );
};
