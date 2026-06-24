'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import YellowLine from '../ui/YellowLine';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import ring from '../../../public/images/landing/whyus/ring.svg';
import bg from '../../../public/images/landing/whyus/img.png';

export default function WhyUs({ about = false }: { about: boolean }) {
  const t = useTranslations('HomePage.WhyUs');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  return (
    <section
      ref={sectionRef}
      className={`max-w-6xl my-10 2xl:max-w-7xl mx-auto px-5 py-8 scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
    >
      <div
        className={`flex flex-col gap-12 lg:gap-20 ${
          about ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div className={`md:flex-1 flex flex-col md:justify-center md:gap-10 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
          <div>
            <span className='text-body-5 font-medium'>
              {t('subtitle')}
            </span>
            <h2 className='text-headers-h4 lg:text-headers-h3 mt-3 mb-2 font-bold'>
              {t('title')}
            </h2>
            <YellowLine />
          </div>
          <p className='text-body-5 max-w-[44rem] md:leading-11 lg:text-body font-medium mt-4'>
            {t('description')}
          </p>
          <div className='flex flex-col gap-5 md:flex-row'>
            <div className={`flex items-start mt-4 gap-3 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-300' : ''}`}>
              <Image className='w-10' src={ring} alt='ring' />
              <div className='flex flex-col gap-2'>
                <span className='text-body-2 font-semibold'>{t('feature1.title')}</span>
                <p className='text-body-5 lg:text-body-4 font-medium'>
                  {t('feature1.description')}
                </p>
              </div>
            </div>
            <div className={`flex items-start mt-4 gap-3 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''}`}>
              <Image className='w-10' src={ring} alt='ring' />
              <div className='flex flex-col gap-2'>
                <span className='text-body-2 font-semibold'>
                  {t('feature2.title')}
                </span>
                <p className='text-body-5 lg:text-body-4 font-medium'>
                  {t('feature2.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative md:flex-1 md:max-w-sm w-[80%] mx-auto scroll-hidden ${sectionVisible ? 'animate-slideRight delay-500' : ''}`}>
          <Image src={bg} alt='bg' className='rounded-4xl' />
          <div className='bg-gradient-to-b absolute top-2 -z-10 -right-4 rounded-4xl from-[#0F91F4] to-[#09548E] w-full h-full' />
        </div>
      </div>
    </section>
  );
}
