import React from 'react';
import { TESTIMONIALS } from '../data/landscapingData';
import { Star, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            <span>Portfolio Demonstration</span><span aria-hidden="true">·</span><span>Illustrative Content</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">A Sample Client Stories Section</h2>
          <p className="text-base text-stone-300 leading-relaxed">The stories, names, ratings, locations, and project outcomes below are fictional placeholder content created to demonstrate this website design. They are not real customer reviews or verified results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <article key={t.id} className="bg-stone-950 border border-stone-800 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-1 mb-4" aria-label="Illustrative sample rating">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                  <span className="text-xs text-stone-400 ml-2 font-mono">Sample rating</span>
                </div>
                <blockquote className="text-sm sm:text-base text-stone-200 leading-relaxed mb-6 italic">“{t.quote}”</blockquote>
              </div>
              <div className="pt-6 border-t border-stone-800/80">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-800/80 text-emerald-300 font-serif font-bold text-sm flex items-center justify-center shrink-0" aria-hidden="true">{t.avatarInitials}</div>
                  <div><div className="text-sm font-semibold text-white">{t.clientName}</div><div className="text-xs text-stone-400">{t.neighborhood}, {t.cityState}</div></div>
                </div>
                <div className="text-xs text-emerald-300 font-medium bg-emerald-950/60 border border-emerald-900/60 rounded px-2.5 py-1.5 mt-2"><span className="text-stone-400">Example outcome: </span>{t.outcomeMetric}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-amber-900/70 bg-amber-950/30 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" aria-hidden="true" />
            <div><h3 className="font-semibold text-white mb-1">Sample credentials and trust badges</h3><p className="text-sm text-stone-300 leading-relaxed">Real websites can display professional memberships, certifications, insurance, and licences here after the business owner verifies them. No membership, certification, licence, insurance policy, or partnership is claimed by this portfolio demo.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};
