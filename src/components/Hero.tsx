import React, { useEffect, useRef, useState } from 'react';
import { Award, Phone, ChevronRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  totalFrames?: number;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  totalFrames = 60,
  onOpenConsultation
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('Arrival Colonnade & Waterfront Facade');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Preload all 180 frames into browser memory
  useEffect(() => {
    const total = totalFrames;
    const imgs: HTMLImageElement[] = new Array(total);

    // 1. Immediately fetch Frame 1 (<100ms first paint)
    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=fast-v2`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
      renderFrame(1);

      // 2. Progressive non-blocking preload for frames 2..total in small smooth batches
      let nextIdx = 2;
      const loadNextBatch = () => {
        const batchSize = 6;
        for (let b = 0; b < batchSize && nextIdx <= total; b++, nextIdx++) {
          const idx = nextIdx;
          const img = new Image();
          const frameStr = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameStr}.webp?v=fast-v2`;
          img.onload = () => {
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIdx <= total) {
          setTimeout(loadNextBatch, 15);
        }
      };
      loadNextBatch();
    };
    firstImg.onerror = () => {
      setIsLoaded(true);
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;}, [totalFrames]);

  // Draw target frame onto canvas with responsive object-cover & retina DPR (Zero Grain)
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }
    if (img && img.complete) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Fullscreen object-cover geometry calculation (no bars, no distortion)
      const naturalW = img.naturalWidth || 1920;
      const naturalH = img.naturalHeight || 1080;
      const imgRatio = naturalW / naturalH;
      const canvasRatio = w / h;

      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        drawX = 0;
        drawY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgRatio;
        drawX = (w - drawW) / 2;
        drawY = 0;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    }

    // Dynamic chapter narrative based on walkthrough progress
    if (frameIndex <= 60) {
      setActiveChapter('Arrival Colonnade & Waterfront Facade');
    } else if (frameIndex <= 120) {
      setActiveChapter('Grand Foyer & Architectural Gallery');
    } else {
      setActiveChapter('Oceanfront Salon & Sunset Terrace');
    }
  };

  // Apple-style Scrollytelling: Section remains strictly PINNED until all 180 frames finish
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollDistance = rect.height - window.innerHeight;
      if (scrollDistance <= 0) return;

      // Progress normalized [0, 1] within the sticky container
      const progress = Math.max(0, Math.min(1, -rect.top / scrollDistance));
      setScrollProgress(progress);

      const targetFrame = Math.max(1, Math.min(totalFrames, Math.round(progress * (totalFrames - 1)) + 1));

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        setCurrentFrame(targetFrame);
        renderFrame(targetFrame);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    // Initial paint
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [totalFrames]);

  // Compute fading opacity for hero title overlay
  // Opacity 1 at top, fades to 0 as user scrolls past 22% of frames
  const heroTextOpacity = Math.max(0, 1 - scrollProgress * 4.5);
  // Spatial tour chapter header fades in as hero text fades out
  const tourHeaderOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.15) * 4));

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[450vh] bg-[#07090c]"
    >
      {/* Sticky Fullscreen First Screen: Locks into place until spatial tour finishes */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#07090c]">
        {/* Fullscreen Video-Frame Canvas */}
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className={`w-full h-full object-cover block transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Crisp Gradient Overlay for Text Legibility (No Noise, Zero Grain) */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#07090c] via-transparent to-[#07090c]/70 opacity-60" />

        {/* 1. Grand Editorial Hero Content (Visible at top, fades as user walks into residence) */}
        <div
          style={{
            opacity: heroTextOpacity,
            pointerEvents: heroTextOpacity > 0.05 ? 'auto' : 'none',
            transform: `translateY(${-scrollProgress * 60}px)`
          }}
          className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-opacity duration-300"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-luxury-gold/40 bg-black/60 backdrop-blur-md text-luxury-goldLight text-[11px] font-mono tracking-luxury uppercase mb-5 shadow-lg">
            <Award className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Sand Dollar Awards 2021–2025 · Florida Design Honoree</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
            Naples Interior Architecture, <br />
            <span className="italic font-normal gold-gradient-text">Crafted for Coastal Refinement</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-luxury-sand/90 font-light max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-md">
            Crafting bespoke waterfront estates, private model residences, and high-rise penthouses across Port Royal, Aqualane Shores, and Pelican Bay with turnkey white-glove precision.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 rounded-full bg-luxury-gold hover:bg-luxury-goldLight text-luxury-charcoal font-semibold text-xs font-mono uppercase tracking-widest transition-all shadow-xl hover:shadow-luxury-gold/20 flex items-center gap-2"
            >
              <span>Request Private Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="tel:2393985423"
              className="px-6 py-3.5 rounded-full border border-luxury-border/80 hover:border-luxury-gold text-luxury-sand hover:text-white text-xs font-mono uppercase tracking-widest transition-all flex items-center gap-2 glass-panel shadow-xl"
            >
              <Phone className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Direct: (239) 398-5423</span>
            </a>
          </div>

          {/* Scroll prompt */}
          <div className="flex flex-col items-center gap-1.5 animate-pulse">
            <span className="text-[10px] font-mono tracking-widest uppercase text-luxury-sand/80 glass-panel px-3.5 py-1 rounded-full">
              Scroll to Walk Through the Residence
            </span>
            <ChevronDown className="w-4 h-4 text-luxury-gold" />
          </div>
        </div>

        {/* 2. Floating Chapter Narrative Header (Elegantly emerges as user explores the spatial tour) */}
        <div
          style={{
            opacity: tourHeaderOpacity,
            pointerEvents: 'none'
          }}
          className="absolute top-24 sm:top-28 left-6 sm:left-12 max-w-xl z-20 transition-opacity duration-300"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-luxury uppercase text-luxury-gold block mb-1">
            Private Residence Tour · Port Royal
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-light tracking-wide drop-shadow-md">
            {activeChapter}
          </h2>
        </div>

        {/* Top Right: Progress Indicator */}
        <div
          style={{
            opacity: tourHeaderOpacity,
            pointerEvents: 'none'
          }}
          className="absolute top-24 sm:top-28 right-6 sm:right-12 z-20 transition-opacity duration-300"
        >
          <div className="glass-panel px-3.5 py-1.5 rounded-full border border-luxury-gold/30 text-luxury-gold font-mono text-xs">
            {Math.round((currentFrame / totalFrames) * 100)}% Through Residence
          </div>
        </div>

        {/* Bottom Center: Scroll prompt during tour */}
        <div
          style={{
            opacity: tourHeaderOpacity > 0.1 && scrollProgress < 0.95 ? 1 : 0,
            pointerEvents: 'none'
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-center transition-opacity"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-luxury-sand/70 glass-panel px-3.5 py-1 rounded-full">
            Scroll to Continue Walkthrough
          </span>
          <ChevronDown className="w-4 h-4 text-luxury-gold animate-bounce" />
        </div>

        {/* Instant Non-blocking Load */}
      </div>

      {/* Trust Proof Badges Bar (Flows right after the spatial walkthrough finishes) */}
      <div className="relative z-20 bg-[#0a0c10] border-t border-luxury-border/60 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 glass-panel rounded-2xl">
            <span className="font-serif text-2xl sm:text-3xl text-luxury-gold font-medium block">25+</span>
            <span className="font-mono text-[11px] text-luxury-sand/70 uppercase tracking-wider">Years in Naples</span>
          </div>
          <div className="p-4 glass-panel rounded-2xl">
            <span className="font-serif text-2xl sm:text-3xl text-luxury-gold font-medium block">5.0 ★</span>
            <span className="font-mono text-[11px] text-luxury-sand/70 uppercase tracking-wider">28 Google Reviews</span>
          </div>
          <div className="p-4 glass-panel rounded-2xl">
            <span className="font-serif text-2xl sm:text-3xl text-luxury-gold font-medium block">14+</span>
            <span className="font-mono text-[11px] text-luxury-sand/70 uppercase tracking-wider">Sand Dollar Awards</span>
          </div>
          <div className="p-4 glass-panel rounded-2xl">
            <span className="font-serif text-2xl sm:text-3xl text-luxury-gold font-medium block">100%</span>
            <span className="font-mono text-[11px] text-luxury-sand/70 uppercase tracking-wider">On Time & Budget</span>
          </div>
        </div>
      </div>
    </section>
  );
};
