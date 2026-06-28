import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { peyda } from '@/font';
import './globals.css';

import Footer from '@/components/layout/Footer';
import LoadingOverlay from '@/components/layout/LoadingOverlay';
import Navbar from '@/components/layout/Navbar';
import { LoadingProvider } from '@/contexts/LoadingContext';

import seoEn from '@/lang/seo-en.json';
import seoFa from '@/lang/seo-fa.json';

const seoData = { en: seoEn, fa: seoFa };

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const seo = seoData[locale as keyof typeof seoData] || seoEn;
  const layout = seo.layout;

  return {
    title: layout.title,
    description: layout.description,
    openGraph: {
      type: 'website',
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
      url: 'https://easy-migration.vercel.app',
      siteName: 'ParastarSho',
      title: layout.openGraph.title,
      description: layout.openGraph.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: layout.twitter.title,
      description: layout.twitter.description,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: 'fa' }, { locale: 'en' }];
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body className={`antialiased ${peyda.className}`}>
        <LoadingProvider>
          <NextIntlClientProvider locale={locale}>
            <Navbar />
            {children}
            <Footer />
            <LoadingOverlay />
          </NextIntlClientProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
