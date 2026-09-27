import React, { useEffect, useRef, useState, useTransition } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

const TOTAL_FRAMES = 240;

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const [, startTransition] = useTransition();

  const [, setIsLoaded] = useState(false);
  const [loadCount, setLoadCount] = useState(0);

  // Jack Roberts spring physics: stiffness: 100, damping: 30
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.0001,
  });

  // Staged narrative typography opacities across 240 frames
  const stage1Opacity = useTransform(smoothProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const stage1Y = useTransform(smoothProgress, [0, 0.22], [0, -35]);

  const stage2Opacity = useTransform(smoothProgress, [0.26, 0.34, 0.46, 0.54], [0, 1, 1, 0]);
  const stage2Y = useTransform(smoothProgress, [0.26, 0.34, 0.46, 0.54], [35, 0, 0, -35]);

  const stage3Opacity = useTransform(smoothProgress, [0.54, 0.62, 0.74, 0.82], [0, 1, 1, 0]);
  const stage3Y = useTransform(smoothProgress, [0.54, 0.62, 0.74, 0.82], [35, 0, 0, -35]);

  const stage4Opacity = useTransform(smoothProgress, [0.82, 0.90, 1], [0, 1, 1]);
  const stage4Y = useTransform(smoothProgress, [0.82, 0.90], [35, 0]);

  // Frame 1 immediate load + progressive background batching
  useEffect(() => {
    const imgs: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=240`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
      setLoadCount(1);
      renderFrame(1);

      let nextIndex = 2;
      const loadBatch = () => {
        const batchSize = 10;
        for (let i = 0; i < batchSize && nextIndex <= TOTAL_FRAMES; i++, nextIndex++) {
          const idx = nextIndex;
          const img = new Image();
          const frameNum = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameNum}.webp?v=240`;
          img.onload = () => {
            imgs[idx - 1] = img;
            setLoadCount((prev) => prev + 1);
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIndex <= TOTAL_FRAMES) {
          setTimeout(loadBatch, 15);
        }
      };
      loadBatch();
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;
  }, []);

  // Canvas COVER rendering algorithm
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = frameIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i].complete && imagesRef.current[i].naturalWidth > 0) {
          img = imagesRef.current[i];
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cw, ch);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW: number;
    let drawH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      drawW = cw;
      drawH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawH) / 2;
    } else {
      drawW = ch * imgRatio;
      drawH = ch;
      offsetX = (cw - drawW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    ctx.restore();
  };

  // Sync canvas with spring physics
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (v) => {
      const targetFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.floor(v * (TOTAL_FRAMES - 1)) + 1)
      );
      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        startTransition(() => {
          renderFrame(targetFrame);
        });
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#0F1115] text-[#F5F3EF]">
      {/* Sticky 100vh Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Neural Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Cinematic Haute Couture Oyster Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/95 via-[#0F1115]/40 to-[#0F1115]/80 pointer-events-none z-10" />

        {/* 12-Column Architectural Hairline Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none z-15 opacity-[0.08] grid grid-cols-6 md:grid-cols-12 max-w-[1600px] mx-auto px-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-[#C59B63] h-full" />
          ))}
        </div>

        {/* Top Telemetry Header */}
        <div className="relative z-20 pt-24 px-6 md:px-12 flex justify-between items-start max-w-[1600px] mx-auto w-full">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B63]/15 border border-[#C59B63]/30 text-[#C59B63] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B63] animate-ping" />
              NAPLES ATELIER NO. 200
            </span>
            <span className="hidden md:inline text-[11px] font-mono text-[#D1C7BD]">
              3560 KRAFT ROAD • NAPLES, FL
            </span>
          </div>

          <div className="text-right font-mono text-[11px] text-[#D1C7BD]">
            <div className="text-[#C59B63] font-semibold">COASTAL ARCHITECTURAL ATELIER</div>
            <div>PORT ROYAL • PELICAN BAY • AQUALANE</div>
          </div>
        </div>

        {/* Center Dynamic Staged Narrative */}
        <div className="relative z-20 px-6 md:px-12 max-w-[1600px] mx-auto w-full my-auto pointer-events-none">
          {/* Stage 1: Haute Couture Architectural Interiors */}
          <motion.div
            style={{ opacity: stage1Opacity, y: stage1Y }}
            className="max-w-4xl"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#C59B63] uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B63]" />
              ESTABLISHED 1996 • NAPLES, FLORIDA
            </div>
            <h1 className="font-serif text-[48px] md:text-[84px] leading-[0.92] tracking-tight text-[#F5F3EF]">
              Interiors of quiet grandeur & coastal poise.
            </h1>
            <p className="mt-6 text-[16px] md:text-[20px] text-[#D1C7BD] max-w-2xl font-light leading-relaxed font-sans">
              Where Florida Gulf light meets honed limestone, bookmatched walnut millwork, and bespoke European furnishings. Architectural interior design for the most discerning estates.
            </p>
          </motion.div>

          {/* Stage 2: Port Royal & Aqualane Shores Residences */}
          <motion.div
            style={{ opacity: stage2Opacity, y: stage2Y }}
            className="max-w-3xl"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#C59B63] uppercase mb-4 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#C59B63]" />
              PRIVATE COASTAL ENCLAVES
            </div>
            <h2 className="font-serif text-[44px] md:text-[76px] leading-[0.92] text-[#F5F3EF]">
              Port Royal, Aqualane & Pelican Bay.
            </h2>
            <p className="mt-6 text-[16px] md:text-[19px] text-[#D1C7BD] font-light leading-relaxed font-sans">
              Over 28 years of master commissions along Naples' most prestigious waterfront corridors. Every residence is an enduring portrait of its collectors.
            </p>
          </motion.div>

          {/* Stage 3: Noble Materials & Bespoke Millwork */}
          <motion.div
            style={{ opacity: stage3Opacity, y: stage3Y }}
            className="max-w-3xl"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#C59B63] uppercase mb-4 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59B63]" />
              SUBTRACTIVE RESTRAINT & NOBLE MATERIALITY
            </div>
            <h2 className="font-serif text-[44px] md:text-[76px] leading-[0.92] text-[#F5F3EF]">
              Every texture touchable. Every joint seamless.
            </h2>
            <p className="mt-6 text-[16px] md:text-[19px] text-[#D1C7BD] font-light leading-relaxed font-sans">
              Hand-selected Italian marbles, wire-brushed French oak floors, Belgian linen drapery, and patinated architectural bronze hardware crafted exclusively for your home.
            </p>
          </motion.div>

          {/* Stage 4: Private Atelier Consultation */}
          <motion.div
            style={{ opacity: stage4Opacity, y: stage4Y }}
            className="max-w-3xl pointer-events-auto"
          >
            <div className="text-[12px] font-mono tracking-[0.25em] text-[#C59B63] uppercase mb-4">
              PRIVATE COMMISSIONS
            </div>
            <h2 className="font-serif text-[44px] md:text-[76px] leading-[0.92] text-[#F5F3EF]">
              Begin your private residence.
            </h2>
            <p className="mt-6 text-[16px] md:text-[19px] text-[#D1C7BD] font-light leading-relaxed font-sans">
              Currently accepting selective new estate commissions and comprehensive architectural renovations for 2026–2027.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#commission"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C59B63] text-[#0F1115] font-semibold text-[14px] uppercase tracking-wider transition-all duration-300 hover:bg-[#d8ae68] shadow-lg shadow-[#C59B63]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request Private Atelier Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="tel:2393985423"
                className="px-6 py-4 rounded-xl border border-[#C59B63]/30 text-[#F5F3EF] font-mono text-[13px] hover:bg-[#C59B63]/10 transition-colors"
              >
                (239) 398-5423
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Ribbon */}
        <div className="relative z-20 pb-8 px-6 md:px-12 max-w-[1600px] mx-auto w-full flex justify-between items-end border-t border-[#C59B63]/15 pt-4 text-[12px] font-mono text-[#D1C7BD]">
          <div className="flex items-center gap-6">
            <span className="text-[#C59B63]">ESTATE ATELIER • NAPLES, FL</span>
            <span className="hidden md:inline">PORT ROYAL • AQUALANE SHORES • PELICAN BAY</span>
          </div>
          <div className="flex items-center gap-2">
            <span>SCROLL TO EXPLORE ATELIER</span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </div>
  );
};
