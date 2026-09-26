import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dh-sand shadow-sm border-b border-dh-linen py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.12em] text-dh-bronze uppercase">
            Diana Hall Design
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-dh-stone font-body -mt-0.5 whitespace-nowrap">
            Architecture &bull; Interiors &bull; Naples
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-body text-xs uppercase tracking-[0.2em] text-dh-stone">
          <a href="#hero" className="hover:text-dh-bronze transition-colors">
            Residence View
          </a>
          <a href="#atelier" className="hover:text-dh-bronze transition-colors">
            The Atelier
          </a>
          <a href="#estates" className="hover:text-dh-bronze transition-colors">
            Curated Estates
          </a>
          <a href="#materials" className="hover:text-dh-bronze transition-colors">
            Materiality
          </a>
          <a href="#commission" className="hover:text-dh-bronze transition-colors">
            Private Inquiry
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-6">
          <a
            href="tel:2395925500"
            className="text-xs font-mono text-dh-stone hover:text-dh-amber transition-colors"
          >
            (239) 592-5500
          </a>
          <a
            href="#commission"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-dh-bronze/30 text-dh-bronze hover:bg-dh-bronze hover:text-dh-sand text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm"
          >
            <span>Commission</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-dh-bronze hover:text-dh-amber transition-colors"
          aria-label="Toggle navigation menu"
          type="button"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dh-sand border-b border-dh-linen px-8 py-8 space-y-6 shadow-xl font-body">
          <div className="text-[11px] uppercase tracking-widest text-dh-stone pb-3 border-b border-dh-linen">
            Port Royal &bull; Aqualane Shores &bull; Pelican Bay
          </div>
          <nav className="flex flex-col gap-4 text-base font-serif tracking-wider text-dh-bronze">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-dh-amber"
            >
              The Grand Pavilion Tour
            </a>
            <a
              href="#atelier"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-dh-amber"
            >
              Diana Hall &bull; Founder Profile
            </a>
            <a
              href="#estates"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-dh-amber"
            >
              Curated Coastal Estates
            </a>
            <a
              href="#materials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-dh-amber"
            >
              Materiality &amp; Tactile Swatches
            </a>
            <a
              href="#commission"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-dh-amber"
            >
              Naples Atelier Concierge
            </a>
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:2395925500"
              className="w-full py-3 rounded-xl border border-dh-bronze/20 text-dh-bronze text-center font-semibold text-xs uppercase tracking-wider bg-dh-linen/40"
            >
              Call Studio (239) 592-5500
            </a>
            <a
              href="#commission"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-dh-bronze text-dh-sand text-center font-semibold text-xs uppercase tracking-wider shadow"
            >
              Request Private Commission
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
