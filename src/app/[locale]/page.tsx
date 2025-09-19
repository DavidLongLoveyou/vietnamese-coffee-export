import { Metadata } from 'next';
import Link from 'next/link';
import SchemaGenerator from '@/components/seo/SchemaGenerator';
import { mockPosts, mockCompanyInfo } from '@/lib/mock-data';
import { Locale } from '@/types';

import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'vi' ? 'The Great Beans - Xuất Khẩu Cà Phê Chất Lượng Cao' : 'The Great Beans - Premium Coffee Export',
    description: locale === 'vi' 
      ? 'Chuyên xuất khẩu cà phê Arabica và Robusta chất lượng cao từ Việt Nam. Cam kết bền vững và chất lượng tuyệt vời.'
      : 'Premium Arabica and Robusta coffee export from Vietnam. Committed to sustainability and exceptional quality.',
    keywords: locale === 'vi'
      ? 'xuất khẩu cà phê, cà phê Việt Nam, Arabica, Robusta, cà phê chất lượng cao'
      : 'coffee export, Vietnam coffee, Arabica, Robusta, premium coffee',
    openGraph: {
      title: locale === 'vi' ? 'The Great Beans - Xuất Khẩu Cà Phê Chất Lượng Cao' : 'The Great Beans - Premium Coffee Export',
      description: locale === 'vi'
        ? 'Chuyên xuất khẩu cà phê Arabica và Robusta chất lượng cao từ Việt Nam'
        : 'Premium Arabica and Robusta coffee export from Vietnam',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'vi': '/vi',
      },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const isVietnamese = locale === 'vi';

  const latestPosts = mockPosts.slice(0, 3);

  return (
    <>
      <SchemaGenerator 
        type="organization" 
        data={mockCompanyInfo} 
        locale={locale}
      />
      
      <HeroSection locale={locale} />
      <FeaturesSection locale={locale} />
      <ProductsSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <CTASection locale={locale} />
      
      {/* Latest Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isVietnamese ? 'Thông Tin Mới Nhất' : 'Latest Insights'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isVietnamese 
                ? 'Cập nhật tin tức ngành và xu hướng thị trường cà phê'
                : 'Stay updated with industry news and coffee market trends'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.reading_time} {isVietnamese ? 'phút đọc' : 'min read'}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href={`/${locale}/insights`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {isVietnamese ? 'Xem Tất Cả Bài Viết' : 'View All Articles'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
