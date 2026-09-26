import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import type { PortfolioProject } from '../types';
import { ArrowUpRight, Award, Maximize2, X, SlidersHorizontal, MapPin } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'Waterfront Custom Estate', label: 'Waterfront Estates' },
    { id: 'Turnkey Coastal Modern', label: 'Coastal Modern' },
    { id: 'Luxury High-Rise Penthouse', label: 'Sky Penthouses' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-luxury-border/40">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[11px] font-mono tracking-luxury uppercase text-luxury-gold block mb-2">
            Selected Residences · Naples & The Coast
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white">
            Architectural Curations
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                selectedCategory === cat.id
                  ? 'bg-luxury-gold text-luxury-charcoal font-semibold shadow'
                  : 'bg-luxury-surface/80 text-luxury-sand hover:text-white border border-luxury-border/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-luxury-border/60 hover:border-luxury-gold/50 transition-all duration-500 shadow-xl"
          >
            {/* Image Container with Zoom Effect */}
            <div className="relative aspect-[16/10] overflow-hidden bg-luxury-charcoal">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-luxury-sand border border-white/10">
                  {project.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-charcoal transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Project Details */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-luxury-gold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-mono text-[11px] tracking-wider uppercase">{project.location}</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium group-hover:text-luxury-goldLight transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Project Summary Footer */}
            <div className="p-5 flex items-center justify-between text-xs font-mono text-luxury-sand/70 border-t border-luxury-border/40">
              <span>{project.squareFeet}</span>
              <span>Year {project.year}</span>
              <span className="text-luxury-gold flex items-center gap-1">
                View Project Details <Maximize2 className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Spatial Transformation: Interactive Before & After Slider */}
      <div className="mt-16 glass-panel-gold p-6 sm:p-8 rounded-3xl border border-luxury-gold/30">
        <div className="max-w-2xl mb-6">
          <div className="inline-flex items-center gap-2 text-luxury-gold text-xs font-mono uppercase tracking-widest mb-2">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Spatial Transformation</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
            From Raw Architecture to Curated Elegance
          </h3>
          <p className="text-xs sm:text-sm text-luxury-sand/80 mt-2">
            Drag the divider to observe how Diana Hall Design transforms raw shell spaces into warm, bespoke architectural sanctuaries.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div
          className="relative w-full aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-luxury-border"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = ((e.clientX - rect.left) / rect.width) * 100;
            setSliderPos(Math.max(5, Math.min(95, pos)));
          }}
          onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
            setSliderPos(Math.max(5, Math.min(95, pos)));
          }}
        >
          {/* After Image (Full Background) */}
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Completed Curated Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-luxury-gold border border-luxury-gold/40">
            Curated Masterpiece
          </div>

          {/* Before Image (Clipped Left Layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
              alt="Raw Shell Space"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%', minWidth: '100%' }}
            />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-400 border border-white/10">
              Raw Architectural Shell
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-luxury-gold shadow-lg cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-luxury-charcoal border-2 border-luxury-gold flex items-center justify-center text-luxury-gold shadow-2xl">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#12161f] border border-luxury-gold/40 rounded-3xl overflow-hidden shadow-2xl my-8">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:text-luxury-gold flex items-center justify-center border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={activeModalProject.heroImage}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono tracking-widest uppercase text-luxury-gold bg-luxury-gold/10 px-3 py-1 rounded-full border border-luxury-gold/30">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono text-luxury-sand/70">
                  {activeModalProject.location} · {activeModalProject.squareFeet}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-4">
                {activeModalProject.title}
              </h3>

              <p className="text-sm sm:text-base text-luxury-sand/90 leading-relaxed mb-6 font-light">
                {activeModalProject.description}
              </p>

              {/* Awards if any */}
              {activeModalProject.awards && activeModalProject.awards.length > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-luxury-gold/10 border border-luxury-gold/30">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-luxury-gold mb-2">
                    <Award className="w-4 h-4" /> Recognition & Publications
                  </div>
                  <ul className="text-xs text-luxury-sand space-y-1">
                    {activeModalProject.awards.map((aw, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>•</span> {aw}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-luxury-sand mb-3">
                  Architectural Highlights & Custom Craft
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeModalProject.features.map((feat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-luxury-surface border border-luxury-border text-xs text-luxury-sand">
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail Gallery Images */}
              {activeModalProject.detailImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-luxury-border/60">
                  {activeModalProject.detailImages.map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-luxury-charcoal">
                      <img src={img} alt={`Detail ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
