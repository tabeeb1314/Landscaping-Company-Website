import React from 'react';
import { TESTIMONIALS } from '../data/landscapingData';
import { Star, CheckCircle, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Verified Client Proof</span>
            <span aria-hidden="true">·</span>
            <span>Homeowner Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Trusted by Discerning Homeowners
          </h2>
          <p className="text-base text-stone-400 leading-relaxed">
            Real feedback from property owners who commissioned custom stone masonry, master garden plans, and complete estate transformations.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-stone-950 border border-stone-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-stone-400 ml-2 font-mono">5.0</span>
                </div>

                {/* Quote */}
                <blockquote className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal mb-6 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Attribution and outcome */}
              <div className="pt-6 border-t border-stone-800/80">
                <div className="flex items-center gap-3 mb-3">
                  {/* Monogram avatar */}
                  <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-800/80 text-emerald-300 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                      <span>{t.clientName}</span>
                      <span title="Verified Homeowner">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="text-xs text-stone-400">
                      {t.neighborhood}, {t.cityState}
                    </div>
                  </div>
                </div>

                {/* Concrete outcome badge */}
                <div className="text-xs text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-900/60 rounded px-2.5 py-1.5 mt-2">
                  <span className="text-stone-400">Impact: </span>
                  {t.outcomeMetric}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Credentials & Standards Bar */}
        <div className="mt-16 pt-10 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs text-stone-400">
          <div className="flex flex-col items-center gap-1.5">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-white">ASLA Member</span>
            <span className="text-[11px] text-stone-500">American Society of Landscape Architects</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-white">ICPI Certified Masons</span>
            <span className="text-[11px] text-stone-500">Interlocking Concrete Pavement Institute</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-white">EPA WaterSense Partner</span>
            <span className="text-[11px] text-stone-500">Certified Smart Weather Irrigation</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-white">Licensed & Bonded</span>
            <span className="text-[11px] text-stone-500">$2M General Commercial Liability</span>
          </div>
        </div>

      </div>
    </section>
  );
};
