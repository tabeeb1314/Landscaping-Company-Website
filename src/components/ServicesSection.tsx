import React from 'react';
import { SERVICES } from '../data/landscapingData';
import { ServiceItem, ServiceId } from '../types';
import { Check, ArrowUpRight, Clock, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onInquireService: (serviceId: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onInquireService,
}) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fbfaf8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Our Disciplines</span>
            <span aria-hidden="true">·</span>
            <span>Master Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mb-4">
            End-to-End Outdoor Living Architecture
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            From initial topographic grading and 3D virtual walkthroughs to precision stonework and four-season botanical curation, we execute every phase under one accountable team.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white border border-stone-200/90 rounded-lg overflow-hidden hover:border-emerald-800/40 transition-colors duration-200 shadow-sm"
              >
                {/* Service Image */}
                <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback for resilient visual presentation
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded text-white text-xs font-mono tabular-nums">
                    {formattedIndex}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 mb-1 group-hover:text-emerald-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-800 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Metadata strip: timeline & starting price */}
                    <div className="flex items-center gap-4 py-3 border-y border-stone-100 text-xs text-stone-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        <span>{service.typicalTimeline}</span>
                      </div>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-stone-400" />
                        <span>From <strong className="font-semibold text-stone-800">{service.investmentStartingAt}</strong></span>
                      </div>
                    </div>

                    {/* Feature highlights */}
                    <ul className="space-y-2 mb-6" aria-label={`Key features of ${service.title}`}>
                      {service.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-stone-100">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold text-stone-700 hover:text-stone-900 flex items-center gap-1 py-1 transition-colors"
                      aria-label={`View detailed specifications for ${service.title}`}
                    >
                      <span>Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onInquireService(service.id)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded transition-colors whitespace-nowrap"
                    >
                      Inquire Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
