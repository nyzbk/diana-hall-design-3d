import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { AtelierFounder } from './components/AtelierFounder';
import { MaterialitySwatches } from './components/MaterialitySwatches';
import { MagneticCTA } from './components/MagneticCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F5F3EF] selection:bg-[#C59B63]/30 selection:text-[#F5F3EF] overflow-x-clip font-sans">
      <Navbar />
      
      <main>
        {/* Section 1: Jack Roberts SOTA 240-Frame Canvas Hero */}
        <Hero />
        
        {/* Section 2: Meta AI Pinned Horizontal Scroll Gallery (300vh) */}
        <HorizontalWorks />

        {/* Section 3: Interactive Bento Grid with Live Telemetry */}
        <InteractiveBento />

        {/* Section 4: Kinetic Marquee Ribbon */}
        <KineticMarquee />

        {/* Preserved Bespoke Architectural Sections */}
        <AtelierFounder />
        <MaterialitySwatches />

        {/* Section 5: Premium Magnetic CTA with Multi-Contact Intelligence */}
        <MagneticCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
