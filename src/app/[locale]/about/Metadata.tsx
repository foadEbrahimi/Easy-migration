import { Metadata } from 'next';
import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';

const seoData = { en: seoEn, fa: seoFa };

export async function generateAboutMetadata(locale: string): Promise<Metadata> {
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  return {
    title: seo.about.title,
    description: seo.about.description,
  };
}
