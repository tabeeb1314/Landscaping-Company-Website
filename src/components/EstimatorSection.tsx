import React, { useState, useId } from 'react';
import { Calculator, Check, ArrowRight, Info } from 'lucide-react';
import { ServiceId } from '../types';

interface EstimatorProps {
  onApplyEstimate: (data: {
    services: ServiceId[];
    budgetTier: 'under-25k' | '25k-50k' | '50k-100k' | '100k-250k' | '250k-plus';
    notes: string;
  }) => void;
}

interface EstimatorOption {
  id: ServiceId;
  label: string;
  baseCost: number;
}

export const EstimatorSection: React.FC<EstimatorProps> = ({ onApplyEstimate }) => {
  const propertySizeSelectId = useId();
  const materialGradeSelectId = useId();

  const [selectedElements, setSelectedElements] = useState<ServiceId[]>([
    'hardscaping',
    'native-planting',
    'outdoor-lighting',
  ]);

  const [propertySize, setPropertySize] = useState<'small' | 'medium' | 'large' | 'estate'>('medium');
  const [materialTier, setMaterialTier] = useState<'standard' | 'premium' | 'heirloom'>('premium');

  const elementsList: EstimatorOption[] = [
    { id: 'hardscaping', label: 'Stone Terrace & Dining Patio', baseCost: 18000 },
    { id: 'landscape-design', label: 'Master 3D Architectural Plan', baseCost: 4500 },
    { id: 'native-planting', label: 'Curated Native Gardens & Trees', baseCost: 9500 },
    { id: 'outdoor-lighting', label: 'Architectural Brass Illumination', baseCost: 5500 },
    { id: 'water-pool', label: 'Pool Surround & Water Basin', baseCost: 24000 },
    { id: 'estate-care', label: '1-Year Seasonal Stewardship & Turf', baseCost: 7200 },
  ];

  const sizeMultiplier = {
    small: 1.0,      // <0.25 acre
    medium: 1.35,    // 0.25 - 0.5 acre
    large: 1.75,     // 0.5 - 1.0 acre
    estate: 2.3      // 1+ acre
  };

  const tierMultiplier = {
    standard: 1.0,   // Standard Natural Stone & Pre-cast
    premium: 1.25,   // Pennsylvania Bluestone & Selected Specimen Trees
    heirloom: 1.6    // Hand-Chiseled Dimensional Granite & Large Specimen Trees
  };

  const toggleElement = (id: ServiceId) => {
    if (selectedElements.includes(id)) {
      if (selectedElements.length > 1) {
        setSelectedElements(selectedElements.filter((item) => item !== id));
      }
    } else {
      setSelectedElements([...selectedElements, id]);
    }
  };

  // Calculate investment range
  const rawBase = selectedElements.reduce((acc, elId) => {
    const item = elementsList.find((el) => el.id === elId);
    return acc + (item ? item.baseCost : 0);
  }, 0);

  const scaledCost = Math.round(rawBase * sizeMultiplier[propertySize] * tierMultiplier[materialTier]);
  const lowEstimate = Math.round(scaledCost * 0.9 / 1000) * 1000;
  const highEstimate = Math.round(scaledCost * 1.15 / 1000) * 1000;

  // Determine matching budget tier
  const getMatchingBudgetTier = (avg: number): 'under-25k' | '25k-50k' | '50k-100k' | '100k-250k' | '250k-plus' => {
    if (avg < 25000) return 'under-25k';
    if (avg < 50000) return '25k-50k';
    if (avg < 100000) return '50k-100k';
    if (avg < 250000) return '100k-250k';
    return '250k-plus';
  };

  const handleApplyToQuote = () => {
    const avg = (lowEstimate + highEstimate) / 2;
    const tier = getMatchingBudgetTier(avg);
    const sizeName = {
      small: 'Under 0.25 Acre',
      medium: '0.25 - 0.5 Acre',
      large: '0.5 - 1.0 Acre',
      estate: '1+ Acre Estate'
    }[propertySize];

    const tierName = {
      standard: 'Classic Natural Stone',
      premium: 'Pennsylvania Bluestone & Architectural Specimen',
      heirloom: 'Bespoke Hand-Chiseled Heirloom'
    }[materialTier];

    const notes = `Calculator estimate configured: ${sizeName} property with ${tierName} specifications. Estimated preliminary budget bracket: $${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}.`;

    onApplyEstimate({
      services: selectedElements,
      budgetTier: tier,
      notes
    });
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-[#fbfaf8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Planning & Transparency</span>
            <span aria-hidden="true">·</span>
            <span>Investment Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mb-4">
            Interactive Project Cost Estimator
          </h2>
          <p className="text-base text-stone-600">
            This interactive estimator uses illustrative sample prices for demonstration only. It is not a quote, market survey, or guarantee of actual project costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm">
            
            {/* Step 1: Project Elements */}
            <div>
              <label className="block text-sm font-bold text-stone-900 mb-3">
                1. Select Desired Project Elements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Project Elements">
                {elementsList.map((item) => {
                  const isChecked = selectedElements.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleElement(item.id)}
                      className={`text-left p-3.5 rounded-lg border transition-colors flex items-center justify-between text-xs sm:text-sm font-medium ${
                        isChecked
                          ? 'border-emerald-800 bg-emerald-50/50 text-stone-900'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                      }`}
                      aria-pressed={isChecked}
                    >
                      <span>{item.label}</span>
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-emerald-900 border-emerald-900 text-white'
                            : 'border-stone-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Property Scale */}
            <div>
              <label htmlFor={propertySizeSelectId} className="block text-sm font-bold text-stone-900 mb-2">
                2. Property Scale / Lot Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'small', label: '< 0.25 Acre', sub: 'Townhouse/Courtyard' },
                  { id: 'medium', label: '0.25 - 0.5 Acre', sub: 'Standard Suburban' },
                  { id: 'large', label: '0.5 - 1.0 Acre', sub: 'Spacious Lot' },
                  { id: 'estate', label: '1.0+ Acre', sub: 'Grand Estate' },
                ].map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setPropertySize(size.id as any)}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      propertySize === size.id
                        ? 'border-emerald-800 bg-emerald-50/50 text-emerald-950 font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                    }`}
                  >
                    <div className="text-xs sm:text-sm">{size.label}</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">{size.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Grade */}
            <div>
              <label htmlFor={materialGradeSelectId} className="block text-sm font-bold text-stone-900 mb-2">
                3. Material & Specimen Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Select Natural Stone', desc: 'Regional flagstone, fieldstone, 2" saplings' },
                  { id: 'premium', label: 'Architectural Grade', desc: 'Bluestone, dimensional granite, specimen trees' },
                  { id: 'heirloom', label: 'Bespoke Heirloom', desc: 'Hand-chiseled masonry, mature crane-set trees' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setMaterialTier(tier.id as any)}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      materialTier === tier.id
                        ? 'border-emerald-800 bg-emerald-50/50 text-emerald-950 font-semibold'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                    }`}
                  >
                    <div className="text-xs sm:text-sm">{tier.label}</div>
                    <div className="text-[10px] text-stone-500 mt-1">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Estimate Output Box */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 p-6 sm:p-8 rounded-xl border border-stone-800 shadow-md">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <Calculator className="w-4 h-4" />
              <span>Preliminary Estimate Output</span>
            </div>

            <div className="my-4">
              <div className="text-xs text-stone-400">Estimated Project Bracket</div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight tabular-nums mt-1">
                ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}
              </div>
              <div className="text-xs text-stone-400 mt-1">
                Illustrative demo range only — not a real quote
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-stone-800 text-xs text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-800/60">
                <span className="text-stone-400">Selected Disciplines</span>
                <span className="font-semibold text-white">{selectedElements.length} elements</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800/60">
                <span className="text-stone-400">Example Build Duration</span>
                <span className="font-semibold text-white">4 to 8 weeks</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800/60">
                <span className="text-stone-400">Example Warranty</span>
                <span className="font-semibold text-white">5 Years Comprehensive</span>
              </div>
            </div>

            <div className="mt-6 p-3.5 bg-stone-800/70 rounded-lg text-xs text-stone-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                A real business would calculate pricing based on its location, scope, materials, and site conditions.
              </span>
            </div>

            {/* Apply Button */}
            <button
              type="button"
              onClick={handleApplyToQuote}
              className="mt-6 w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Transfer Estimate into Quote Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
