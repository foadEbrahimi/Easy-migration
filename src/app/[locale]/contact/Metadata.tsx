import { Metadata } from 'next';
import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';

const seoData = { en: seoEn, fa: seoFa };

export async function generateContactMetadata(locale: string): Promise<Metadata> {
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  return {
    title: seo.contact.title,
    description: seo.contact.description,
  };
}
