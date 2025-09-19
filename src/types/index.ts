export interface CoffeeProduct {
  id: string;
  name: string;
  type: 'arabica' | 'robusta' | 'specialty';
  origin: string;
  processing: string;
  grade: string;
  aroma: string;
  flavor: string[];
  certifications: string[];
  minimumOrder: string;
  harvestSeason: string;
  moistureContent: string;
  defectRate: string;
  image: string;
  description: string;
  featured: boolean;
  premium: boolean;
  organic: boolean;
  price?: {
    currency: string;
    amount: number;
    unit: string;
  };
  specifications?: {
    screenSize?: string;
    density?: string;
    waterActivity?: string;
    cupping?: {
      aroma: number;
      flavor: number;
      aftertaste: number;
      acidity: number;
      body: number;
      balance: number;
      overall: number;
      total: number;
    };
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readingTime: number;
  image: string;
  tags: string[];
  category: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  issuer: string;
  validUntil: string;
  image: string;
  credentialId?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  founded: number;
  headquarters: string;
  employees: string;
  certifications: Certification[];
  contact: {
    address: string;
    phone: string;
    email: string;
    website: string;
    socialMedia: {
      facebook?: string;
      linkedin?: string;
      instagram?: string;
      twitter?: string;
    };
  };
  stats: {
    yearsInBusiness: number;
    countriesExported: number;
    totalCustomers: number;
    dailyProduction: number;
    certifications: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  country: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}

export interface ContactForm {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  interestedProducts: string[];
  quantity: string;
  packaging: string;
  delivery: string;
  deliveryDate: string;
  message: string;
}

export interface QuoteRequest extends ContactForm {
  id: string;
  status: 'pending' | 'processing' | 'quoted' | 'accepted' | 'rejected';
  submittedAt: string;
  quotedAt?: string;
  quote?: {
    products: {
      productId: string;
      quantity: number;
      unitPrice: number;
      totalPrice: number;
    }[];
    subtotal: number;
    shipping: number;
    total: number;
    currency: string;
    validUntil: string;
    terms: string;
  };
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface SustainabilityPractice {
  id: string;
  title: string;
  description: string;
  icon: string;
  impact: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NewsletterSubscription {
  email: string;
  preferences: {
    productUpdates: boolean;
    marketInsights: boolean;
    companyNews: boolean;
  };
}

export interface ProductFilter {
  type?: 'arabica' | 'robusta' | 'specialty' | 'all';
  featured?: boolean;
  premium?: boolean;
  organic?: boolean;
  origin?: string;
  processing?: string;
  certifications?: string[];
}

export interface SearchParams {
  query?: string;
  category?: string;
  sort?: 'name' | 'price' | 'rating' | 'newest';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface LocaleData {
  [key: string]: string | LocaleData;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export type Locale = 'en' | 'vi';

export type Theme = 'light' | 'dark' | 'system';

export type ProductType = 'arabica' | 'robusta' | 'specialty';

export type ProductCategory = 'green' | 'roasted' | 'instant';

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type UserRole = 'customer' | 'admin' | 'manager';

export type PaymentMethod = 'bank_transfer' | 'letter_of_credit' | 'cash_on_delivery';

export type ShippingMethod = 'sea_freight' | 'air_freight' | 'express';

export type CertificationType = 'organic' | 'fair_trade' | 'rainforest_alliance' | 'utz' | 'iso' | 'haccp';
