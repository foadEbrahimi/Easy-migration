import { Metadata } from 'next';
import Vblog from '@/components/home/blog/Vblog';
import Faq from '@/components/home/faq/Faq';
import FeedBack from '@/components/home/feedback/FeedBack';
import Hero from '@/components/home/Hero';
import Road from '@/components/home/Road';
import Services from '@/components/home/services/Services';
import WhyGerman from '@/components/home/WhyGerman';
import WhyUs from '@/components/home/WhyUs';

import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';

const seoData = { en: seoEn, fa: seoFa };

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  return {
    title: seo.home.title,
    description: seo.home.description,
  };
}

export default function page() {
  return (
    <div>
      <Hero />
      <WhyGerman />
      <Services />
      <WhyUs about={false} />
      <Road />
      <FeedBack />
      <Faq />
      <Vblog />
    </div>
  );
}
