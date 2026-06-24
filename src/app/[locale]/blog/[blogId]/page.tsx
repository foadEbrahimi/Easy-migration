import { Metadata } from 'next';
import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';
import { getBlogPost } from '@/data/blog';
import BlogDetailClient from './BlogDetailClient';

const seoData = { en: seoEn, fa: seoFa };

type Props = {
  params: Promise<{ locale: string; blogId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, blogId } = await params;
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  const post = getBlogPost(blogId, locale);
  return {
    title: post?.title || seo.blogDetail.title,
    description: post?.description || seo.blogDetail.description,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, blogId } = await params;
  return <BlogDetailClient />;
}
