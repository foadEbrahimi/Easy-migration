import { Metadata } from 'next';
import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';
import { getBlogPost } from '@/data/blog';

const seoData = { en: seoEn, fa: seoFa };

export async function generateBlogDetailMetadata(locale: string, blogId: string): Promise<Metadata> {
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  const post = getBlogPost(blogId, locale);

  return {
    title: post?.title || seo.blogDetail.title,
    description: post?.description || seo.blogDetail.description,
  };
}
