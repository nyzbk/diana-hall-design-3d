export type AtmosphereMode = 'midday' | 'golden' | 'dusk' | 'night';

export type FloorFinish = 'calacatta' | 'marquina' | 'oak';
export type FabricFinish = 'boucle' | 'cognac' | 'velvet';
export type MetalFinish = 'brass' | 'obsidian' | 'chrome';

export interface Hotspot {
  id: string;
  title: string;
  category: string;
  description: string;
  position: [number, number, number];
  materials: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  squareFeet: string;
  description: string;
  heroImage: string;
  detailImages: string[];
  awards?: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  category: string;
  badge: string;
}

export interface ConsultationForm {
  projectType: string;
  scope: string;
  budget: string;
  timeline: string;
  fullName: string;
  email: string;
  phone: string;
  propertyLocation: string;
  notes: string;
}
