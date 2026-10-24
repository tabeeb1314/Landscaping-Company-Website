import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-stone-900/95 text-stone-100 backdrop-blur-md border-b border-stone-800 shadow-sm'
          : 'bg-stone-950/80 text-stone-100 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      {/* Top Bar 3-Zone Contract: Brand Wordmark — 4-5 Single-Line Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single element Brand Wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif tracking-tight text-white font-medium hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0"
        >
          Evergreen Outdoor Living
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300"
          aria-label="Main Navigation"
        >
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Portfolio
          </a>
          <a
            href="#estimator"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Cost Estimator
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            About & Process
          </a>
          <a
            href="#testimonials"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action CTA + Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:8005829418"
            className="hidden xl:flex items-center gap-1.5 text-xs text-stone-300 hover:text-emerald-400 transition-colors whitespace-nowrap"
            title="Call our landscape design studio"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>(800) 582-9418</span>
          </a>

          <button
            type="button"
            onClick={onQuoteClick}
            className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-stone-950 bg-stone-100 hover:bg-emerald-400 hover:text-stone-950 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-stone-200 hover:text-emerald-400 transition-colors py-1"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-stone-200 hover:text-emerald-400 transition-colors py-1"
            >
              Project Portfolio
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-stone-200 hover:text-emerald-400 transition-colors py-1"
            >
              Cost Estimator
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-stone-200 hover:text-emerald-400 transition-colors py-1"
            >
              About Evergreen
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-stone-200 hover:text-emerald-400 transition-colors py-1"
            >
              Client Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-stone-200 hover:text-emerald-400 transition-colors py-1"
            >
              Frequently Asked Questions
            </a>
          </nav>
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <a
              href="tel:8005829418"
              className="flex items-center gap-2 text-sm text-stone-300"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Studio: (800) 582-9418</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
