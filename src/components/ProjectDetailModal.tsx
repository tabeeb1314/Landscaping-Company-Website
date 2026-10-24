import React, { useEffect } from 'react';
import { GalleryProject, ServiceItem } from '../types';
import { X, MapPin, Calendar, Clock, Layers, ArrowRight, Check } from 'lucide-react';

interface ProjectDetailModalProps {
  project: GalleryProject | null;
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (scope: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  service,
  onClose,
  onInquire,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project || service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, service, onClose]);

  if (!project && !service) return null;

  const title = project?.title || service?.title || '';
  const image = project?.image || service?.image || '';
  const description = project?.description || service?.fullDesc || '';
  const materials = project?.materials || service?.materialsUsed || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl border border-stone-200 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-auto text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/70 text-white hover:bg-stone-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Banner */}
        <div className="relative aspect-16/9 w-full bg-stone-900">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            {project && (
              <div className="flex items-center gap-3 text-xs text-emerald-300 mb-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Completed {project.completionYear}
                </span>
              </div>
            )}
            {service && (
              <div className="text-xs uppercase tracking-wider text-emerald-300 mb-1 font-semibold">
                {service.subtitle}
              </div>
            )}
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key metrics / specs bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs">
            <div>
              <span className="text-stone-500 block">Scope / Category:</span>
              <span className="font-semibold text-stone-800">
                {project ? project.categoryLabel : 'Landscape Architecture'}
              </span>
            </div>
            <div>
              <span className="text-stone-500 block">Construction Timeline:</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                {project ? project.duration : service?.typicalTimeline}
              </span>
            </div>
            <div>
              <span className="text-stone-500 block">Investment Guide:</span>
              <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                <Layers className="w-3.5 h-3.5 text-stone-400" />
                {service ? service.investmentStartingAt : 'Custom Commission'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-serif font-bold text-stone-900 mb-2">
              Design Philosophy & Execution
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Project highlight callout */}
          {project?.highlight && (
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
              <strong className="font-semibold text-emerald-900">Engineering Highlight: </strong>
              {project.highlight}
            </div>
          )}

          {/* Service features if service */}
          {service && (
            <div>
              <h3 className="text-sm font-serif font-bold text-stone-900 mb-2">
                Delivered Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Materials Used */}
          {materials.length > 0 && (
            <div>
              <h3 className="text-sm font-serif font-bold text-stone-900 mb-2">
                Architectural Materials & Plant Palette
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {materials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-stone-100 rounded text-stone-700 border border-stone-200"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer inside modal */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              Close Window
            </button>

            <button
              type="button"
              onClick={() => {
                onInquire(title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Inquire About a Project Like This</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
