import React from 'react';
import { HERO_IMAGE } from '../data/landscapingData';
import { ArrowRight, Compass, ShieldCheck, Award, Ruler } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 overflow-hidden bg-stone-950 text-stone-100">
      {/* Background Hero Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury residential landscape estate at dusk with stone terrace and sunken fire pit"
          className="w-full h-full object-cover object-center filter brightness-90"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          
          {/* Subtle editorial kicker (Clean text, no pill box or status dot) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-emerald-400 mb-4">
            <span>Fictional Landscaping Website Concept</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2008</span>
          </div>

          {/* Primary Headline with balance wrapping */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white leading-[1.1] mb-6 text-balance">
            Architectural Landscapes Built for Generations.
          </h1>

          {/* Value proposition paragraph */}
          <p className="text-lg sm:text-xl text-stone-300 font-normal leading-relaxed mb-8 max-w-2xl text-pretty">
            We design and construct bespoke stone terraces, curated native botanical gardens, and four-season outdoor living spaces that seamlessly extend your home into nature.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <button
              type="button"
              onClick={onQuoteClick}
              className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-base rounded-md transition-colors shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#portfolio"
              className="px-7 py-3.5 bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white font-medium text-base rounded-md transition-colors border border-stone-700/80 text-center backdrop-blur-sm"
            >
              Explore Built Projects
            </a>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency Strip (Single full-width row, clean hairline borders) */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">
                18+ Years
              </div>
              <div className="text-xs sm:text-sm text-stone-400 mt-0.5">
                Master design practice
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Ruler className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">
                450+
              </div>
              <div className="text-xs sm:text-sm text-stone-400 mt-0.5">
                Estates completed
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">
                5-Year
              </div>
              <div className="text-xs sm:text-sm text-stone-400 mt-0.5">
                Sample structural warranty
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-white tabular-nums">
                100% In-House
              </div>
              <div className="text-xs sm:text-sm text-stone-400 mt-0.5">
                Masons & horticulturists
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
