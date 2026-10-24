export type ServiceId = 
  | 'hardscaping'
  | 'landscape-design'
  | 'native-planting'
  | 'outdoor-lighting'
  | 'water-pool'
  | 'estate-care';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyFeatures: string[];
  typicalTimeline: string;
  investmentStartingAt: string;
  materialsUsed: string[];
}

export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  category: 'all' | 'hardscape' | 'design' | 'lighting' | 'poolscape';
  categoryLabel: string;
  image: string;
  scope: string;
  completionYear: string;
  duration: string;
  highlight: string;
  materials: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  neighborhood: string;
  cityState: string;
  projectType: string;
  year: string;
  quote: string;
  outcomeMetric: string;
  avatarInitials: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
  selectedServices: ServiceId[];
  projectTimeline: 'immediate' | '1-3months' | '3-6months' | 'planning';
  budgetRange: 'under-25k' | '25k-50k' | '50k-100k' | '100k-250k' | '250k-plus';
  propertyType: 'single-family' | 'estate' | 'new-construction' | 'renovation';
  projectDetails: string;
}
