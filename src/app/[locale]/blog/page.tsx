import { Metadata } from 'next';
import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';
import BlogClient from './BlogClient';

const seoData = { en: seoEn, fa: seoFa };

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  return {
    title: seo.blog.title,
    description: seo.blog.description,
  };
}

export default async function BlogPage() {
  return <BlogClient />;
}
