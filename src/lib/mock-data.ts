import { CoffeeProduct, Post, Certification, CompanyInfo } from '@/types';

// Mock Coffee Products
export const mockCoffeeProducts: CoffeeProduct[] = [
  {
    id: 'robusta-premium-grade-1',
    name: 'Premium Robusta Grade 1',
    slug: 'premium-robusta-grade-1',
    description: 'Premium Vietnamese Robusta coffee beans with exceptional quality and rich, bold flavor profile. Sourced from the Central Highlands of Vietnam, these beans offer excellent crema and are perfect for espresso blends.',
    origin: 'Dak Lak Province, Vietnam',
    processing: 'washed',
    variety: 'Robusta',
    grade: 'Grade 1',
    cupping_score: 82,
    aroma: 'Earthy, nutty with hints of chocolate',
    flavor: 'Bold, full-bodied with low acidity and bitter-sweet notes',
    acidity: 'Low',
    body: 'Full',
    certifications: ['Organic', 'Fair Trade', 'Rainforest Alliance'],
    harvest_season: 'October - February',
    moisture_content: '12.5%',
    defect_rate: '<3%',
    minimum_order: '1 container (19.2 tons)',
    price_per_kg: 3.85,
    images: [
      '/images/products/robusta-premium-1.jpg',
      '/images/products/robusta-premium-2.jpg',
      '/images/products/robusta-premium-3.jpg',
    ],
    specifications: {
      'Screen Size': '18+ (75%), 16+ (20%), Below 16 (5%)',
      'Moisture': '12.5% max',
      'Foreign Matter': '0.1% max',
      'Black/Broken': '2% max',
      'Immature': '2% max',
      'Packaging': '60kg jute bags or 1000kg big bags',
      'Container Load': '19.2 tons (320 bags of 60kg)',
      'Shelf Life': '12 months in proper storage',
    },
    featured: true,
    available: true,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: 'arabica-honey-processed',
    name: 'Arabica Honey Processed',
    slug: 'arabica-honey-processed',
    description: 'Exceptional honey-processed Arabica coffee from the mountainous regions of Vietnam. This unique processing method creates a sweet, complex flavor profile with bright acidity and floral notes.',
    origin: 'Lam Dong Province, Vietnam',
    processing: 'honey',
    variety: 'Arabica',
    grade: 'Specialty',
    cupping_score: 86,
    aroma: 'Floral, fruity with honey sweetness',
    flavor: 'Complex, bright acidity with notes of berries and honey',
    acidity: 'Medium-High',
    body: 'Medium',
    certifications: ['Organic', 'Specialty Coffee Association'],
    harvest_season: 'November - March',
    moisture_content: '11.5%',
    defect_rate: '<2%',
    minimum_order: '5 tons',
    price_per_kg: 8.50,
    images: [
      '/images/products/arabica-honey-1.jpg',
      '/images/products/arabica-honey-2.jpg',
      '/images/products/arabica-honey-3.jpg',
    ],
    specifications: {
      'Screen Size': '16+ (80%), 15+ (15%), Below 15 (5%)',
      'Moisture': '11.5% max',
      'Foreign Matter': '0.05% max',
      'Black/Broken': '1% max',
      'Immature': '1% max',
      'Packaging': '60kg jute bags or GrainPro bags',
      'Container Load': '19.2 tons (320 bags of 60kg)',
      'Shelf Life': '18 months in proper storage',
    },
    featured: true,
    available: true,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: 'robusta-screen-18',
    name: 'Robusta Screen 18',
    slug: 'robusta-screen-18',
    description: 'High-quality Robusta coffee beans with large screen size 18. Perfect for commercial blends and instant coffee production. Consistent quality and competitive pricing.',
    origin: 'Dak Lak Province, Vietnam',
    processing: 'natural',
    variety: 'Robusta',
    grade: 'Commercial',
    cupping_score: 78,
    aroma: 'Earthy, woody with chocolate undertones',
    flavor: 'Strong, bitter with nutty finish',
    acidity: 'Low',
    body: 'Full',
    certifications: ['UTZ Certified'],
    harvest_season: 'October - February',
    moisture_content: '13%',
    defect_rate: '<5%',
    minimum_order: '1 container (19.2 tons)',
    price_per_kg: 3.20,
    images: [
      '/images/products/robusta-screen18-1.jpg',
      '/images/products/robusta-screen18-2.jpg',
    ],
    specifications: {
      'Screen Size': '18+ (90%), 16+ (8%), Below 16 (2%)',
      'Moisture': '13% max',
      'Foreign Matter': '0.2% max',
      'Black/Broken': '4% max',
      'Immature': '3% max',
      'Packaging': '60kg jute bags',
      'Container Load': '19.2 tons (320 bags of 60kg)',
      'Shelf Life': '12 months in proper storage',
    },
    featured: false,
    available: true,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: 'arabica-washed-grade-1',
    name: 'Arabica Washed Grade 1',
    slug: 'arabica-washed-grade-1',
    description: 'Premium washed Arabica coffee beans from the highlands of Vietnam. Clean processing method results in bright, clean cup with excellent clarity of flavors.',
    origin: 'Lam Dong Province, Vietnam',
    processing: 'washed',
    variety: 'Arabica',
    grade: 'Grade 1',
    cupping_score: 84,
    aroma: 'Clean, bright with citrus notes',
    flavor: 'Balanced, medium acidity with chocolate and citrus notes',
    acidity: 'Medium',
    body: 'Medium',
    certifications: ['Organic', 'Fair Trade'],
    harvest_season: 'November - March',
    moisture_content: '12%',
    defect_rate: '<2%',
    minimum_order: '5 tons',
    price_per_kg: 7.20,
    images: [
      '/images/products/arabica-washed-1.jpg',
      '/images/products/arabica-washed-2.jpg',
    ],
    specifications: {
      'Screen Size': '16+ (85%), 15+ (12%), Below 15 (3%)',
      'Moisture': '12% max',
      'Foreign Matter': '0.1% max',
      'Black/Broken': '1.5% max',
      'Immature': '1% max',
      'Packaging': '60kg jute bags or GrainPro bags',
      'Container Load': '19.2 tons (320 bags of 60kg)',
      'Shelf Life': '18 months in proper storage',
    },
    featured: false,
    available: true,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
];

// Mock Blog Posts
export const mockPosts: Post[] = [
  {
    id: 'vietnam-coffee-harvest-2024',
    title: 'Vietnam Coffee Harvest 2024: Record Quality and Sustainable Practices',
    slug: 'vietnam-coffee-harvest-2024',
    excerpt: 'The 2024 coffee harvest in Vietnam shows exceptional quality improvements and increased adoption of sustainable farming practices across major growing regions.',
    content: 'Full article content here...',
    author: 'David Nguyen',
    published_date: '2024-03-15T00:00:00Z',
    reading_time: 5,
    tags: ['harvest', 'sustainability', 'quality'],
    featured_image: '/images/blog/harvest-2024.jpg',
    category: 'Industry News',
    featured: true,
  },
  {
    id: 'robusta-vs-arabica-export',
    title: 'Robusta vs Arabica: Understanding Vietnam\'s Coffee Export Strengths',
    slug: 'robusta-vs-arabica-export',
    excerpt: 'A comprehensive comparison of Vietnam\'s Robusta and Arabica coffee varieties, their unique characteristics, and market positioning in global trade.',
    content: 'Full article content here...',
    author: 'Sarah Chen',
    published_date: '2024-03-10T00:00:00Z',
    reading_time: 7,
    tags: ['robusta', 'arabica', 'export', 'comparison'],
    featured_image: '/images/blog/robusta-arabica.jpg',
    category: 'Coffee Education',
    featured: true,
  },
  {
    id: 'sustainable-coffee-farming',
    title: 'Sustainable Coffee Farming: Our Commitment to Environmental Stewardship',
    slug: 'sustainable-coffee-farming',
    excerpt: 'Learn about our comprehensive approach to sustainable coffee farming, including organic practices, biodiversity conservation, and community support.',
    content: 'Full article content here...',
    author: 'Michael Tran',
    published_date: '2024-03-05T00:00:00Z',
    reading_time: 6,
    tags: ['sustainability', 'organic', 'environment', 'community'],
    featured_image: '/images/blog/sustainable-farming.jpg',
    category: 'Sustainability',
    featured: false,
  },
];

// Mock Certifications
export const mockCertifications: Certification[] = [
  {
    id: 'organic-usda',
    name: 'USDA Organic',
    description: 'Certified organic by the United States Department of Agriculture',
    issuer: 'USDA',
    valid_until: '2025-12-31',
    certificate_url: '/certificates/usda-organic.pdf',
  },
  {
    id: 'fair-trade',
    name: 'Fair Trade Certified',
    description: 'Fair Trade certification ensuring ethical sourcing and fair farmer compensation',
    issuer: 'Fair Trade USA',
    valid_until: '2025-06-30',
    certificate_url: '/certificates/fair-trade.pdf',
  },
  {
    id: 'rainforest-alliance',
    name: 'Rainforest Alliance',
    description: 'Rainforest Alliance certification for sustainable agriculture practices',
    issuer: 'Rainforest Alliance',
    valid_until: '2025-09-15',
    certificate_url: '/certificates/rainforest-alliance.pdf',
  },
];

// Mock Company Information
export const mockCompanyInfo: CompanyInfo = {
  name: 'The Great Beans',
  established: 2018,
  headquarters: 'Ho Chi Minh City, Vietnam',
  employees: 150,
  annual_capacity: '50000 tons',
  export_countries: 25,
  certifications: mockCertifications,
  contact: {
    address: '123 Coffee Street, District 1, Ho Chi Minh City, Vietnam',
    phone: '+84 28 1234 5678',
    email: 'info@thegreatbeans.com',
    website: 'https://thegreatbeans.com',
  },
  social_media: {
    facebook: 'https://facebook.com/thegreatbeans',
    linkedin: 'https://linkedin.com/company/thegreatbeans',
    instagram: 'https://instagram.com/thegreatbeans',
  },
};

// Helper functions
export function getFeaturedProducts(): CoffeeProduct[] {
  return mockCoffeeProducts.filter(product => product.featured);
}

export function getProductBySlug(slug: string): CoffeeProduct | undefined {
  return mockCoffeeProducts.find(product => product.slug === slug);
}

export function getProductsByVariety(variety: string): CoffeeProduct[] {
  return mockCoffeeProducts.filter(product => 
    product.variety.toLowerCase() === variety.toLowerCase()
  );
}

export function getFeaturedPosts(): Post[] {
  return mockPosts.filter(post => post.featured);
}

export function getPostBySlug(slug: string): Post | undefined {
  return mockPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return mockPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}
