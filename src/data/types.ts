export type ListingStatus = 'available' | 'under_offer' | 'sold' | 'let' | 'withdrawn';
export type ListingType = 'sale' | 'rent';
export type PropertyType = 'apartment' | 'house' | 'villa' | 'penthouse' | 'studio' | 'new-development';

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: ListingStatus;
  listingType: ListingType;
  propertyType: PropertyType;
  price: number;
  priceQualifier?: string;
  currency: 'GBP';
  bedrooms: number;
  bathrooms: number;
  sizeSqM?: number;
  sizeSqFt?: number;
  floor?: string;
  area: string;
  development?: string;
  addressApproximate?: string;
  latitude?: number;
  longitude?: number;
  images: string[];
  features: string[];
  agentId?: string;
  agentName?: string;
  agentUrl?: string;
  sourceUrl?: string;
  publishedAt: string;
  updatedAt: string;
  availableFrom?: string;
  furnished?: boolean;
  parking?: boolean;
  seaView?: boolean;
  newBuild?: boolean;
  isSample: boolean;
  featured?: boolean;
}

export interface Agent {
  id: string;
  slug: string;
  name: string;
  contactName: string;
  email: string;
  phone: string;
  website?: string;
  serviceAreas: string[];
  description: string;
  isSample: boolean;
}

export interface Development {
  id: string;
  slug: string;
  name: string;
  developer: string;
  area: string;
  completionStatus: string;
  unitTypes: string[];
  priceFrom: number;
  keyFeatures: string[];
  description: string;
  isSample: boolean;
}
