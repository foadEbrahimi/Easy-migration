'use client';

import { useTranslations } from 'next-intl';
import YellowLine from '@/components/ui/YellowLine';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Info from './_components/Info';
import Form from './_components/Form';

export default function Page() {
  const t = useTranslations('Contact');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={sectionRef} className='mx-auto my-5 max-w-6xl px-5 2xl:max-w-7xl'>
      <div
        id='contact-img'
        className={`rounded-2xl h-[170px] md:h-[300px] flex-col w-full p-2 flex items-center justify-center scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
      >
        <h1 className={`md:text-headers-h2 text-headers-h4 font-bold text-white scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
          {t('title')}
        </h1>
        <YellowLine />
        <span className={`md:text-body-4 text-center text-body-5 mt-4 text-white bg-[#FFFFFF]/40 px-5 py-2 rounded-lg scroll-hidden ${sectionVisible ? 'animate-slideUp delay-300' : ''}`}>
          {t('subtitle')}
        </span>
      </div>
      <div className={`my-20 md:my-40 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''} flex flex-col gap-20 md:flex-row justify-between`}>
        <Info />
        <Form />
      </div>
    </div>
  );
}
