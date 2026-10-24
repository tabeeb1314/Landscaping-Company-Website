import React, { useState, useEffect, useRef } from 'react';
import { QuoteFormData, ServiceId } from '../types';
import { 
  Check, 
  Send, 
  Download, 
  RefreshCw, 
  FileText, 
  AlertCircle, 
  Upload, 
  X, 
  CheckCircle2 
} from 'lucide-react';

interface QuoteFormProps {
  initialService?: ServiceId;
  initialBudget?: 'under-25k' | '25k-50k' | '50k-100k' | '100k-250k' | '250k-plus';
  initialNotes?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialService,
  initialBudget,
  initialNotes,
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    selectedServices: initialService ? [initialService] : ['hardscaping'],
    projectTimeline: '1-3months',
    budgetRange: initialBudget || '50k-100k',
    propertyType: 'single-family',
    projectDetails: initialNotes || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionReference, setSubmissionReference] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);

  // Update if props change from external triggers (e.g., Estimator or Services)
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(initialService)
          ? prev.selectedServices
          : [...prev.selectedServices, initialService],
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budgetRange: initialBudget }));
    }
  }, [initialBudget]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: prev.projectDetails
          ? `${prev.projectDetails}\n\n${initialNotes}`
          : initialNotes,
      }));
    }
  }, [initialNotes]);

  const serviceOptions: { id: ServiceId; label: string }[] = [
    { id: 'hardscaping', label: 'Custom Hardscaping & Terraces' },
    { id: 'landscape-design', label: 'Architectural 3D Master Planning' },
    { id: 'native-planting', label: 'Curated Native Gardens & Flora' },
    { id: 'outdoor-lighting', label: 'Architectural Illumination & Audio' },
    { id: 'water-pool', label: 'Poolscapes & Water Architecture' },
    { id: 'estate-care', label: 'Estate Grounds Stewardship' },
  ];

  const toggleService = (id: ServiceId) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(id);
      if (exists) {
        if (prev.selectedServices.length > 1) {
          return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== id) };
        }
        return prev;
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, id] };
      }
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g., name@example.com).';
    }

    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.zipCode.trim() || !/^\d{5}$/.test(formData.zipCode.trim())) {
      newErrors.zipCode = 'Please enter a 5-digit property ZIP code.';
    }

    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide at least 15 characters describing your project vision or property.';
    }

    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = 'Please select at least one landscaping service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const refNum = `EGL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionReference(refNum);
      setIsSubmitted(true);
      // Smooth scroll into view of confirmation
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
      }));
      setUploadedFiles((prev) => [...prev, ...files].slice(0, 4));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const downloadProjectBrief = () => {
    const content = `EVERGREEN OUTDOOR LIVING - COMPLIMENTARY QUOTE SPECIFICATION
Reference Number: ${submissionReference}
Generated: ${new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}

CLIENT DETAILS:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Property ZIP: ${formData.zipCode}
Property Type: ${formData.propertyType}

PROJECT REQUIREMENTS:
Requested Services:
${formData.selectedServices.map((s) => `• ${serviceOptions.find((o) => o.id === s)?.label || s}`).join('\n')}

Timeline Preference: ${formData.projectTimeline}
Budget Bracket: ${formData.budgetRange}
Attached Documents: ${uploadedFiles.length > 0 ? uploadedFiles.map((f) => f.name).join(', ') : 'None attached'}

PROJECT DESCRIPTION & SITE VISION:
${formData.projectDetails}

---
Evergreen Outdoor Living
4200 Meadowbrook Way, Suite 100
Direct: (800) 582-9418 | inquiries@evergreenliving.com
Registered Landscape Architecture & Construction Lic #748921-A
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Evergreen-Quote-${submissionReference}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmissionReference('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      zipCode: '',
      selectedServices: ['hardscaping'],
      projectTimeline: '1-3months',
      budgetRange: '50k-100k',
      propertyType: 'single-family',
      projectDetails: '',
    });
    setUploadedFiles([]);
    setErrors({});
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={formRef}>
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Direct Consultation</span>
            <span aria-hidden="true">·</span>
            <span>No Obligation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mb-4">
            Request a Complimentary Estate Consultation
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Tell us about your property and goals. A senior landscape architect will review your topography, discuss material palettes, and prepare a tailored design proposal.
          </p>
        </div>

        {/* Confirmation Screen */}
        {isSubmitted ? (
          <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-12 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
              Quote Request Generated
            </h3>

            <div className="inline-block bg-stone-100 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-stone-800 mb-6">
              Reference: {submissionReference}
            </div>

            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Thank you, <strong>{formData.fullName}</strong>. Your project brief has been formatted. Our design studio will follow up at <strong>{formData.email}</strong> within 1 business day to coordinate your complimentary on-site topography walkthrough.
            </p>

            {/* Itemized Snapshot */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 max-w-lg mx-auto text-left text-xs sm:text-sm text-stone-700 space-y-2.5 mb-8">
              <div className="font-semibold text-stone-900 pb-2 border-b border-stone-200">
                Summary of Specifications:
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Property Location:</span>
                <span className="font-medium text-stone-900">ZIP {formData.zipCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Selected Disciplines:</span>
                <span className="font-medium text-stone-900 text-right">
                  {formData.selectedServices.map((s) => serviceOptions.find((o) => o.id === s)?.label).join(', ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Timeline:</span>
                <span className="font-medium text-stone-900 capitalize">
                  {formData.projectTimeline.replace('-', ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Target Budget:</span>
                <span className="font-medium text-stone-900 capitalize">
                  {formData.budgetRange.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={downloadProjectBrief}
                className="w-full sm:w-auto px-6 py-3 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Printable Project Brief</span>
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 border border-stone-300"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-8"
          >
            {/* Contact Details Grid */}
            <div>
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100">
                1. Homeowner & Property Contact
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.fullName
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-400'
                        : 'border-stone-300 focus:ring-emerald-800 focus:border-emerald-800'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@vance-estate.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-400'
                        : 'border-stone-300 focus:ring-emerald-800 focus:border-emerald-800'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                    Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.phone
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-400'
                        : 'border-stone-300 focus:ring-emerald-800 focus:border-emerald-800'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                    Property 5-Digit ZIP <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    maxLength={5}
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, '') })}
                    placeholder="e.g. 78746"
                    aria-invalid={!!errors.zipCode}
                    aria-describedby={errors.zipCode ? 'zipCode-error' : undefined}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                      errors.zipCode
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-400'
                        : 'border-stone-300 focus:ring-emerald-800 focus:border-emerald-800'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.zipCode && (
                    <p id="zipCode-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.zipCode}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Services Multi-Select */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-serif font-bold text-stone-900">
                  2. Desired Landscaping Services <span className="text-rose-600">*</span>
                </label>
                <span className="text-xs text-stone-500">Select all that apply</span>
              </div>

              {errors.selectedServices && (
                <p className="mb-2 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.selectedServices}</span>
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((svc) => {
                  const active = formData.selectedServices.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => toggleService(svc.id)}
                      className={`p-3 rounded-lg border text-left flex items-center justify-between text-xs sm:text-sm transition-colors ${
                        active
                          ? 'border-emerald-800 bg-emerald-50 text-stone-900 font-semibold'
                          : 'border-stone-200 text-stone-700 hover:border-stone-300 bg-white'
                      }`}
                      aria-pressed={active}
                    >
                      <span>{svc.label}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          active ? 'bg-emerald-800 border-emerald-800 text-white' : 'border-stone-300'
                        }`}
                      >
                        {active && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scope, Timeline & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="propertyType" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                  Property Classification
                </label>
                <select
                  id="propertyType"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-800"
                >
                  <option value="single-family">Single Family Home</option>
                  <option value="estate">Private Acreage / Estate</option>
                  <option value="new-construction">New Construction</option>
                  <option value="renovation">Complete Renovation</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectTimeline" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                  Desired Timeline
                </label>
                <select
                  id="projectTimeline"
                  value={formData.projectTimeline}
                  onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value as any })}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-800"
                >
                  <option value="immediate">Immediate (Within 30 Days)</option>
                  <option value="1-3months">1 to 3 Months</option>
                  <option value="3-6months">3 to 6 Months</option>
                  <option value="planning">Early Planning Phase</option>
                </select>
              </div>

              <div>
                <label htmlFor="budgetRange" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                  Estimated Investment
                </label>
                <select
                  id="budgetRange"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value as any })}
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-800"
                >
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 – $50,000</option>
                  <option value="50k-100k">$50,000 – $100,000</option>
                  <option value="100k-250k">$100,000 – $250,000</option>
                  <option value="250k-plus">$250,000+</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                3. Project Vision & Property Details <span className="text-rose-600">*</span>
              </label>
              <textarea
                id="projectDetails"
                rows={4}
                required
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                placeholder="Describe your property (e.g. hillside slope, privacy concerns, existing patio, drainage issues, pool goals, desired materials)..."
                aria-invalid={!!errors.projectDetails}
                aria-describedby={errors.projectDetails ? 'details-error' : undefined}
                className={`w-full px-3.5 py-3 text-sm rounded-lg border ${
                  errors.projectDetails
                    ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400 focus:border-rose-400'
                    : 'border-stone-300 focus:ring-emerald-800 focus:border-emerald-800'
                } focus:outline-none focus:ring-2`}
              />
              {errors.projectDetails && (
                <p id="details-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.projectDetails}</span>
                </p>
              )}
            </div>

            {/* Optional Site Photos Upload Simulation */}
            <div>
              <span className="block text-xs font-semibold uppercase text-stone-700 mb-1.5">
                Optional: Property Photos or Plat Survey (Preview Attachment)
              </span>
              <div className="border border-dashed border-stone-300 rounded-lg p-5 text-center bg-stone-50/60 hover:bg-stone-50 transition-colors">
                <input
                  id="photo-upload"
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="sr-only"
                />
                <label
                  htmlFor="photo-upload"
                  className="cursor-pointer flex flex-col items-center justify-center gap-1.5 text-xs text-stone-600"
                >
                  <Upload className="w-5 h-5 text-stone-400" />
                  <span>
                    <strong className="text-emerald-900 font-semibold underline">Click to upload</strong> or drag property photos / survey PDFs
                  </span>
                  <span className="text-[11px] text-stone-400">JPG, PNG, PDF up to 10MB</span>
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {uploadedFiles.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded bg-stone-100 text-xs text-stone-700"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 text-stone-500 shrink-0" />
                        <span className="truncate">{f.name}</span>
                        <span className="text-stone-400">({f.size})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-stone-400 hover:text-rose-600 p-1"
                        aria-label={`Remove file ${f.name}`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Explicit Notice regarding simulated local processing */}
            <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-500 leading-relaxed">
              <strong>Transparent Notice:</strong> This preview interface validates and stores your project specification locally in your browser session. Upon submission, an instant downloadable and printable brief is created with your reference code. In live production, requests are dispatched directly to our registered landscape architect team.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white font-semibold text-base rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Submit & Generate Free Quote Specification</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
