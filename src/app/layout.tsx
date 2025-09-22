import type { Metadata } from 'next';
import { peyda } from '@/font';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'پرستارشو | مهاجرت و فرصت‌های شغلی پرستاران',
    template: '%s | پرستارشو',
  },
  description:
    'پرستارشو، همراه پرستاران برای مهاجرت کاری به آلمان. معرفی فرصت‌های شغلی، قراردادها و پشتیبانی تخصصی.',
  keywords: [
    'پرستار',
    'مهاجرت پرستار',
    'فرصت شغلی پرستاران',
    'پرستار آلمان',
    'کار پرستاری خارج',
  ],
  authors: [{ name: 'Parastarsho Team' }],
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://parastarsho.com',
    siteName: 'پرستارشو',
    title: 'پرستارشو | مهاجرت پرستاران به آلمان',
    description:
      'با پرستارشو مسیر مهاجرت پرستاری به آلمان را ساده و حرفه‌ای طی کنید.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پرستارشو | مهاجرت پرستاران',
    description: 'فرصت‌های شغلی و خدمات مهاجرت پرستاران به آلمان',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={`antialiased ${peyda.className}`}>{children}</body>
    </html>
  );
}
