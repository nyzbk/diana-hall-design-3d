import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Award, CheckCircle2 } from 'lucide-react';

export const MagneticCTA: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0px, 0px, 0px)';
      inner.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <section id="commission" className="relative py-28 md:py-40 bg-[#0A0C0E] text-[#F5F3EF] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C59B63]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Massive Fluid Headline (Meta AI Standard) */}
        <div className="text-center mb-16">
          <div className="text-[12px] font-mono tracking-[0.3em] uppercase text-[#C59B63] font-semibold mb-4">
            PRIVATE COMMISSIONS / 05
          </div>
          <h2 className="font-serif text-[13vw] md:text-[8.5vw] leading-[0.88] tracking-tight text-[#F5F3EF]">
            ATELIER DIRECT.
          </h2>
          <p className="mt-6 text-[16px] md:text-[20px] text-[#D1C7BD] max-w-2xl mx-auto font-light leading-relaxed font-sans">
            Initiate a discreet dialogue regarding your upcoming Naples waterfront estate or private architectural transformation.
          </p>

          {/* Dual-Layer Magnetic Button */}
          <div className="mt-12 flex justify-center">
            <a
              ref={buttonRef}
              href="mailto:diana@dianahalldesign.com?subject=Private%20Estate%20Commission%20Inquiry"
              className="relative inline-flex items-center justify-center px-12 py-6 rounded-2xl bg-[#C59B63] text-[#0F1115] text-[16px] md:text-[18px] font-bold tracking-wider uppercase shadow-2xl shadow-[#C59B63]/25 transition-transform duration-100 ease-out cursor-pointer hover:bg-[#d8ae68]"
            >
              <span ref={buttonInnerRef} className="flex items-center gap-3 transition-transform duration-100 ease-out">
                <span>Request Private Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

        {/* Deep Contact Intelligence Grid */}
        <div className="mt-20 pt-12 border-t border-[#C59B63]/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Executive & Leadership */}
          <div className="p-6 rounded-xl bg-[#0F1115] border border-[#C59B63]/20">
            <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Award className="w-4 h-4 text-[#C59B63]" />
              FOUNDER & PRINCIPAL
            </div>
            <div className="text-[17px] font-serif font-semibold text-[#F5F3EF]">Diana Hall</div>
            <div className="text-[12px] text-[#D1C7BD] mb-3">Principal & Design Director</div>
            <div className="text-[11px] font-mono text-[#C59B63]">28 Years Naples Provenance</div>
          </div>

          {/* Phone Hotlines */}
          <div className="p-6 rounded-xl bg-[#0F1115] border border-[#C59B63]/20">
            <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Phone className="w-4 h-4 text-[#C59B63]" />
              DIRECT ATELIER LINES
            </div>
            <a href="tel:2393985423" className="block text-[16px] font-semibold text-[#F5F3EF] hover:text-[#C59B63] transition-colors">
              Direct: (239) 398-5423
            </a>
            <a href="tel:2392726262" className="block text-[13px] font-mono text-[#C59B63] mt-2">
              Studio: (239) 272-6262
            </a>
            <div className="text-[11px] text-[#D1C7BD] mt-2">Personal client liaison line</div>
          </div>

          {/* Electronic Mail */}
          <div className="p-6 rounded-xl bg-[#0F1115] border border-[#C59B63]/20">
            <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-3">
              <Mail className="w-4 h-4 text-[#C59B63]" />
              ELECTRONIC CHANNELS
            </div>
            <a href="mailto:diana@dianahalldesign.com" className="block text-[13px] font-mono text-[#F5F3EF] hover:text-[#C59B63] transition-colors">
              diana@dianahalldesign.com
            </a>
            <a href="mailto:info@dianahalldesign.com" className="block text-[13px] font-mono text-[#C59B63] mt-1 hover:underline">
              info@dianahalldesign.com
            </a>
            <div className="text-[11px] text-[#D1C7BD] mt-2">Discreet commission submissions</div>
          </div>

          {/* Physical Atelier Studio */}
          <div className="p-6 rounded-xl bg-[#0F1115] border border-[#C59B63]/20">
            <div className="flex items-center gap-2 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase mb-3">
              <MapPin className="w-4 h-4 text-[#C59B63]" />
              NAPLES DESIGN ATELIER
            </div>
            <div className="text-[14px] text-[#F5F3EF]">3560 Kraft Road, Suite 200</div>
            <div className="text-[13px] text-[#D1C7BD]">Naples, Florida 34105</div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-[#C59B63]">
              <Clock className="w-3.5 h-3.5" />
              <span>By Appointment Only</span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#D1C7BD] border-t border-[#C59B63]/10 pt-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#C59B63]">
              <CheckCircle2 className="w-4 h-4" />
              Florida Licensed Interior Designer (ASID)
            </span>
            <span className="flex items-center gap-1.5 text-[#C59B63]">
              <CheckCircle2 className="w-4 h-4" />
              Port Royal Association Approved
            </span>
          </div>
          <div>© {new Date().getFullYear()} Diana Hall Design, LLC. All Rights Reserved.</div>
        </div>
      </div>
    </section>
  );
};
