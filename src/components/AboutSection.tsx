import React, { useState } from 'react';
import { PLANTING_IMAGE, SERVICE_AREAS } from '../data/landscapingData';
import { CheckCircle2, Shield, Trees, MapPin, Search } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{
    status: 'idle' | 'serviced' | 'consultation' | 'invalid';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!/^\d{5}$/.test(cleanZip)) {
      setZipResult({
        status: 'invalid',
        message: 'Please enter a valid 5-digit US ZIP code.',
      });
      return;
    }

    // Realistic service territory logic:
    // We service major residential metro zones and surrounding 45-mile corridors
    const firstDigit = cleanZip[0];
    if (['7', '9', '0', '6', '8', '2', '3'].includes(firstDigit)) {
      setZipResult({
        status: 'serviced',
        message: `ZIP ${cleanZip} is within our primary full-service design-build territory. On-site property walk-throughs available within 48-72 hours.`,
      });
    } else {
      setZipResult({
        status: 'consultation',
        message: `ZIP ${cleanZip} is in our extended regional zone. We take on master estate planning & phased architectural contracts here.`,
      });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fbfaf8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-4/5 rounded-xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100">
              <img
                src={PLANTING_IMAGE}
                alt="Evergreen Outdoor Living botanical garden design"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Accreditation badge overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-stone-900 text-stone-100 p-5 rounded-lg border border-stone-800 shadow-xl max-w-xs">
              <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                Design-Build Excellence
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Illustrative credentials line — fictional portfolio content, not a real membership or certification claim.
              </p>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>About Evergreen</span>
              <span aria-hidden="true">·</span>
              <span>Our Philosophy</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mb-6">
              Landscapes Conceived as Living Architecture.
            </h2>

            <div className="space-y-4 text-base text-stone-600 leading-relaxed">
              <p>
                Evergreen Outdoor Living is a fictional landscaping brand created for this portfolio demonstration. The concept is built around a simple design idea: outdoor spaces can be as refined, enduring, and comfortable as the finest interiors.
              </p>
              <p>
                We do not pass your vision to disconnected third-party sub-crews. From initial 3D topographic modeling through laser-graded stone placement and crane-set mature trees, our dedicated in-house craftsmen shepherd your grounds with pride of ownership.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-stone-200">
              <div>
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 mb-1">
                  <Shield className="w-4 h-4 text-emerald-800" />
                  <span>Sample Warranty</span>
                </div>
                <p className="text-xs text-stone-600">
                  Engineered crushed aggregate bases prevent stone shifting, settling, or pooling.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 mb-1">
                  <Trees className="w-4 h-4 text-emerald-800" />
                  <span>Native Ecology</span>
                </div>
                <p className="text-xs text-stone-600">
                  Deep-rooting flora that conserve water while building rich, microbial living soil.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                  <span>Single Source</span>
                </div>
                <p className="text-xs text-stone-600">
                  One master designer and project superintendent on your property every single day.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Service Area & ZIP Verification Bar */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Service Territory Verification</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                Check Availability for Your Property
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                We accept a limited number of master estate commissions per season to maintain white-glove supervision.
              </p>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <label htmlFor="service-zip-check" className="sr-only">
                    Enter 5-Digit ZIP Code
                  </label>
                  <input
                    id="service-zip-check"
                    type="text"
                    maxLength={5}
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter your 5-digit ZIP code (e.g. 78746, 06830)"
                    className="w-full px-4 py-3 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-emerald-800 bg-stone-50"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>Verify ZIP</span>
                </button>
              </form>

              {/* ZIP result display */}
              {zipResult.status !== 'idle' && (
                <div
                  className={`mt-3 text-xs p-3 rounded-lg border flex items-start gap-2 ${
                    zipResult.status === 'serviced'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : zipResult.status === 'consultation'
                      ? 'bg-stone-50 border-stone-200 text-stone-800'
                      : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}
                  role="status"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{zipResult.message}</span>
                </div>
              )}

              {/* Service Areas quick text */}
              <div className="mt-3 text-[11px] text-stone-500">
                <span className="font-semibold text-stone-700">Primary hubs: </span>
                {SERVICE_AREAS.join(' · ')}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
