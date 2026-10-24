import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-2xl font-serif text-white font-medium tracking-tight block">
              Evergreen Outdoor Living
            </span>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              A fictional landscaping business concept built as a web-development portfolio project. All business details and claims shown here are illustrative.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div>Portfolio demo — no real licences, registrations, or insurance claims.</div>
            </div>
          </div>

          {/* Navigation Mirrors */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Hardscaping & Terraces</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">3D Landscape Design</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Native Botanical Gardens</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Architectural Illumination</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Poolscapes & Water</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Estate Stewardship</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Estate Portfolio</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Before & After Studies</a></li>
              <li><a href="#estimator" className="hover:text-emerald-400 transition-colors">Cost Estimator Guide</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Our Design Philosophy</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Sample Client Stories</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Studio Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Sample Contact Details
            </div>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Sample address for portfolio demonstration only</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:8005829418" className="hover:text-white transition-colors">
                  Sample phone number (not a real contact)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>demo@example.com (illustrative only)</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div>Business hours: illustrative sample only</div>
                  <div>No real business operations are represented</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onQuoteClick}
                className="px-4 py-2 text-xs font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors"
              >
                Explore Demo Form
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              &copy; {new Date().getFullYear()} Evergreen Outdoor Living LLC. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-400">Equal Opportunity Contractor</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
