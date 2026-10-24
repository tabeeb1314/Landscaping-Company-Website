import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { EstimatorSection } from './components/EstimatorSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { GalleryProject, ServiceItem, ServiceId } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Quote form prefill states
  const [quoteService, setQuoteService] = useState<ServiceId | undefined>(undefined);
  const [quoteBudget, setQuoteBudget] = useState<'under-25k' | '25k-50k' | '50k-100k' | '100k-250k' | '250k-plus' | undefined>(undefined);
  const [quoteNotes, setQuoteNotes] = useState<string>('');

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus on first input if possible
      const input = el.querySelector<HTMLInputElement>('input#fullName');
      setTimeout(() => input?.focus(), 400);
    }
  };

  const handleInquireService = (serviceId: ServiceId) => {
    setQuoteService(serviceId);
    setQuoteNotes(`Interested in consulting on ${serviceId.replace('-', ' ')} specifications.`);
    scrollToQuote();
  };

  const handleApplyEstimate = (data: {
    services: ServiceId[];
    budgetTier: 'under-25k' | '25k-50k' | '50k-100k' | '100k-250k' | '250k-plus';
    notes: string;
  }) => {
    if (data.services.length > 0) {
      setQuoteService(data.services[0]);
    }
    setQuoteBudget(data.budgetTier);
    setQuoteNotes(data.notes);
    scrollToQuote();
  };

  const handleInquireFromModal = (title: string) => {
    setQuoteNotes(`Inspired by portfolio showcase: "${title}". Looking for a tailored site analysis and architectural scope.`);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf8] text-stone-900 selection:bg-emerald-900 selection:text-emerald-100">
      
      {/* Top Bar Navigation complying with the 3-Zone contract */}
      <Navbar onQuoteClick={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onQuoteClick={scrollToQuote} />

        {/* Services & Capabilities */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onInquireService={handleInquireService}
        />

        {/* Project Gallery & Before/After Comparison */}
        <GallerySection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Interactive Homeowner Cost Estimator */}
        <EstimatorSection onApplyEstimate={handleApplyEstimate} />

        {/* About Evergreen & Interactive ZIP Territory Checker */}
        <AboutSection />

        {/* Verified Homeowner Proof & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Interactive Quote Request Form */}
        <QuoteForm
          initialService={quoteService}
          initialBudget={quoteBudget}
          initialNotes={quoteNotes}
        />
      </main>

      {/* Comprehensive Business Footer */}
      <Footer onQuoteClick={scrollToQuote} />

      {/* Interactive Lightbox / Project Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        service={selectedService}
        onClose={() => {
          setSelectedProject(null);
          setSelectedService(null);
        }}
        onInquire={handleInquireFromModal}
      />
    </div>
  );
}
