import React from 'react';
import { Sparkles, Compass, ShieldCheck, Home, Award } from 'lucide-react';

export const KineticMarquee: React.FC = () => {
  const items = [
    { text: 'ESTABLISHED 1996 • NAPLES, FL', icon: Award },
    { text: 'PORT ROYAL RESIDENCES', icon: Home },
    { text: 'AQUALANE SHORES COMPOUNDS', icon: Sparkles },
    { text: 'PELICAN BAY PENTHOUSES', icon: Compass },
    { text: 'HONED CALACATTA & WALNUT MILLWORK', icon: ShieldCheck },
    { text: 'PRIVATE ATELIER COMMISSIONS', icon: Sparkles },
    { text: 'NAPLES • PALM BEACH • NEW YORK', icon: Home },
  ];

  return (
    <div className="relative py-8 bg-[#0B0D10] border-y border-[#C59B63]/25 overflow-hidden">
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0B0D10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0B0D10] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-12 pr-12">
            {items.map((item, itemIdx) => {
              const Icon = item.icon;
              return (
                <div key={itemIdx} className="flex items-center gap-4 text-nowrap">
                  <Icon className="w-4 h-4 text-[#C59B63]" />
                  <span className="font-serif text-[20px] md:text-[24px] tracking-wider text-[#F5F3EF]">
                    {item.text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B63]/50 mx-2" />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
