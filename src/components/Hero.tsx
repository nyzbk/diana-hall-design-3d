import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  totalFrames?: number;
}

export const Hero: React.FC<HeroProps> = ({ totalFrames = 60 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  // Preload frames in non-blocking background queue
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;

    // Load frame 1 first for instant paint
    const firstImg = new Image();
    firstImg.src = '/frames/frame_0001.webp';
    firstImg.onload = () => {
      loadedImages[0] = firstImg;
      loadedCount++;
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
        }
      }

      // Load remaining frames asynchronously
      for (let i = 2; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(4, '0');
        img.src = `/frames/frame_${frameNum}.webp`;
        img.onload = () => {
          loadedImages[i - 1] = img;
          loadedCount++;
          if (loadedCount === totalFrames) {
            setImages(loadedImages);
          }
        };
      }
    };
  }, [totalFrames]);

  // Scrub frames on scroll
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollHeight, 0), 1);

      const frameIndex = Math.min(
        Math.floor(progress * totalFrames),
        totalFrames - 1
      );

      setCurrentFrameIndex(frameIndex);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx && images[frameIndex]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, totalFrames]);

  // Phase calculation
  const progressRatio = currentFrameIndex / (totalFrames - 1);

  return (
    <section id="hero" ref={containerRef} className="relative h-[280vh] bg-dh-sand">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Visual Canvas */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Ambient Subtle Vignette for Typographic Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-dh-sand/90 via-transparent to-dh-bronze/25 pointer-events-none z-10" />

        {/* Top Space for Navigation */}
        <div className="relative z-20 pt-28 px-6 max-w-7xl mx-auto w-full pointer-events-none" />

        {/* Pure Architectural Monograph Typography (Kinfolk / Aman Pacing) */}
        <div className="relative z-20 px-6 max-w-3xl mx-auto w-full text-center pb-8 flex-1 flex flex-col justify-center pointer-events-none">
          {/* Phase 1: Atrium Salon Entrance (0% - 34%) */}
          <div
            className={`transition-all duration-700 transform ${
              progressRatio < 0.35
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-6 pointer-events-none absolute'
            }`}
          >
            <div className="bg-dh-sand/85 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-3xl border border-dh-linen shadow-sm inline-block max-w-xl mx-auto pointer-events-auto">
              <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-dh-amber mb-2 font-body">
                Port Royal &bull; Naples, Florida
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-dh-bronze tracking-tight leading-[1.1]">
                Coastal architecture sculpted <br className="hidden sm:inline" />
                <span className="italic">in stone &amp; evening light.</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-dh-stone max-w-md mx-auto font-normal font-body leading-relaxed">
                Private oceanfront pavilions, fluted bleached oak millwork, and seamless floor-to-ceiling vistas over the Gulf of Mexico.
              </p>
            </div>
          </div>

          {/* Phase 2: Glide to Ocean Terrace (35% - 71%) */}
          <div
            className={`transition-all duration-700 transform ${
              progressRatio >= 0.35 && progressRatio < 0.72
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6 pointer-events-none absolute'
            }`}
          >
            <div className="bg-dh-sand/85 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-3xl border border-dh-linen shadow-sm inline-block max-w-xl mx-auto pointer-events-auto">
              <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-dh-amber mb-2 font-body">
                Private Gulf Pavilion
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-dh-bronze tracking-tight leading-[1.1]">
                Where travertine terraces <br className="hidden sm:inline" />
                <span className="italic">meet the gentle tide.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-dh-stone max-w-md mx-auto font-normal font-body leading-relaxed">
                Unhurried proportions, reflection water features, and timeless French raw linen curated for bespoke Florida living.
              </p>
            </div>
          </div>

          {/* Phase 3: Panoramic Vista (72% - 100%) */}
          <div
            className={`transition-all duration-700 transform ${
              progressRatio >= 0.72
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6 pointer-events-none absolute'
            }`}
          >
            <div className="bg-dh-sand/85 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-3xl border border-dh-linen shadow-sm inline-block max-w-xl mx-auto pointer-events-auto">
              <span className="block text-xs uppercase tracking-[0.3em] font-semibold text-dh-amber mb-2 font-body">
                Naples Atelier &bull; Founded 1999
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-dh-bronze tracking-tight leading-[1.1]">
                Twenty-five years of <br className="hidden sm:inline" />
                <span className="italic">extraordinary residences.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-dh-stone max-w-md mx-auto font-normal font-body leading-relaxed">
                Architecture and interior environments crafted exclusively for Port Royal, Aqualane Shores, and Pelican Bay.
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Grounded Bar (Subtractive Restraint) */}
        <div className="relative z-30 pb-6 px-6 max-w-3xl mx-auto w-full">
          <div className="bg-dh-sand/95 backdrop-blur-md border border-dh-linen rounded-2xl p-4 sm:p-5 shadow-sm flex items-center justify-between gap-4">
            <div className="text-left font-body">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-dh-amber">
                Private Commission
              </p>
              <p className="text-xs sm:text-sm font-medium text-dh-bronze font-serif">
                Currently accepting select estate engagements for 2026–2027
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#commission"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-dh-bronze text-dh-sand text-xs font-semibold uppercase tracking-wider hover:bg-dh-bronze/90 transition-all shadow-sm group"
              >
                <span>Consult Atelier</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-dh-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
