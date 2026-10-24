import React, { useState } from 'react';
import { GALLERY_PROJECTS, HERO_IMAGE, HARDSCAPING_IMAGE } from '../data/landscapingData';
import { GalleryProject } from '../types';
import { MapPin, Calendar, ArrowRight, Eye, SlidersHorizontal } from 'lucide-react';

interface GallerySectionProps {
  onSelectProject: (project: GalleryProject) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hardscape', label: 'Hardscapes & Terraces' },
    { id: 'design', label: 'Gardens & Plantings' },
    { id: 'poolscape', label: 'Poolscapes & Water' },
    { id: 'lighting', label: 'Illumination & Fire' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, rect);
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>Selected Works</span>
              <span aria-hidden="true">·</span>
              <span>Built Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
              Featured Estate Portfolio
            </h2>
          </div>

          <p className="max-w-md text-sm text-stone-600">
            Every project represents a tailored partnership with homeowners, engineered to withstand regional climate while harmonizing with residential architecture.
          </p>
        </div>

        {/* Interactive Before & After Transformation Slider Showcase */}
        <div className="mb-16 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Interactive Transformation Study
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                The Ridgecrest Hillside: Before & After
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-800" />
              <span>Drag slider or use handle to compare</span>
            </div>
          </div>

          {/* Interactive Comparison Canvas */}
          <div
            className="relative w-full aspect-16/9 sm:aspect-21/9 max-h-[500px] rounded-lg overflow-hidden select-none cursor-ew-resize bg-stone-900"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="region"
            aria-label="Interactive before and after comparison slider"
          >
            {/* "After" Image (Base layer) */}
            <img
              src={HERO_IMAGE}
              alt="Completed Ridgecrest estate with stone terraces, sunken fire pit and architectural lighting"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur-md text-emerald-300 text-xs font-medium px-3 py-1 rounded">
              After: Completed Terrace & Fire Pit
            </div>

            {/* "Before" Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={HARDSCAPING_IMAGE}
                alt="Before condition during initial framing and earthworks"
                className="absolute inset-0 w-full h-full object-cover filter saturate-50 contrast-125"
                style={{
                  width: '100%',
                  minWidth: '100%',
                  objectFit: 'cover'
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-stone-200 text-xs font-medium px-3 py-1 rounded">
                Before: Rough Excavation & Grading
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-stone-300 shadow-lg flex items-center justify-center text-stone-800">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Caption info below slider */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-2">
            <div>
              <strong>Scope:</strong> 120-ton limestone grade stabilization, 1,400 sq.ft. bluestone patio, integrated gas fire lounge.
            </div>
            <div className="text-emerald-800 font-medium">
              Completed in 8 Weeks · 5-Year Structural Warranty
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Portfolio categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                activeCategory === cat.id
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-emerald-800 transition-colors shadow-sm"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle category tag */}
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-800" />
                      {project.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      {project.completionYear}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2 group-hover:text-emerald-900 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {project.scope}
                  </p>

                  {/* Materials list */}
                  <div className="text-xs text-stone-500 space-y-1">
                    <span className="font-semibold text-stone-700">Primary Materials: </span>
                    <span>{project.materials.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-800">
                  {project.duration} build
                </span>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-stone-900 hover:text-emerald-800 flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
