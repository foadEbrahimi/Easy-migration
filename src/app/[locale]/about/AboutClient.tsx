'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import YellowLine from '@/components/ui/YellowLine';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import phone from '../../../../public/images/layout/phone.svg';
import pics from '../../../../public/images/about/pics.png';
import WhyUs from '@/components/home/WhyUs';

export default function Page() {
  const t = useTranslations('About');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div ref={sectionRef} className='mx-auto my-5 max-w-6xl px-5 2xl:max-w-7xl'>
      <div
        id='about-img'
        className={`rounded-2xl h-[170px] md:h-[370px] flex-col w-full p-2 flex items-center justify-center scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
      >
        <h1 className={`md:text-headers-h2 text-headers-h4 font-bold text-white scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
          {t('title')}
        </h1>
        <YellowLine />
        <span className={`md:text-body-4 text-body-5 mt-4 text-white bg-[#FFFFFF]/40 px-5 py-2 rounded-lg scroll-hidden ${sectionVisible ? 'animate-slideUp delay-300' : ''}`}>
          {t('experienceLabel')}
        </span>
      </div>

      <div className={`my-10 lg:my-20 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''} flex flex-col md:flex-row items-start gap-5 md:gap-20`}>
        <div className={`flex-1 md:order-2 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-500' : ''}`}>
          <h2 className='text-headers-h5 md:text-headers-h3 font-bold'>
            {t('subtitle')}
          </h2>
          <p className='text-body-5 mt-2 md:text-body-3 font-medium'>
            {t('description')}
          </p>
          <div className='mt-5 flex items-center gap-2'>
            <div className='bg-blue-500 rounded-full w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center'>
              <Image src={phone} alt='phone' />
            </div>
            <span className='font-medium text-button-btn-3'>
              {t('contactLabel')}
              <br />
              021123456789
            </span>
          </div>
        </div>
        <div className={`md:max-w-xs lg:max-w-md md:order-1 scroll-hidden ${sectionVisible ? 'animate-slideRight delay-600' : ''}`}>
          <Image src={pics} alt='pics' />
        </div>
      </div>

      <WhyUs about />
    </div>
  );
}
