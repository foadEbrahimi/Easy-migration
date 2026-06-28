import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import localFont from 'next/font/local';

export const peyda = localFont({
  src: [
    {
      path: '../../../public/font/Peyda-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/font/peyda-extralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/font/peyda-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/font/Peyda-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/font/Peyda-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/font/Peyda-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/font/Peyda-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/font/Peyda-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/font/Peyda-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-peyda',
  display: 'swap',
});
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
