import React, { useState } from 'react';
import { FAQS } from '../data/landscapingData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#fbfaf8] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Homeowner Clarifications</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Practices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Everything you need to know about our landscape architecture timelines, stone sourcing, permitting, and comprehensive warranty coverage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-stone-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-emerald-800">
                      0{idx + 1}.
                    </span>
                    <span className="font-serif font-bold text-base sm:text-lg text-stone-900">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-stone-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
