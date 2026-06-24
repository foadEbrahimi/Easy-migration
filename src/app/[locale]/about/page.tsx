import { Metadata } from 'next';
import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';
import AboutClient from './AboutClient';

const seoData = { en: seoEn, fa: seoFa };

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  return {
    title: seo.about.title,
    description: seo.about.description,
  };
}

export default async function AboutPage({ params }: Props) {
  return <AboutClient />;
}
