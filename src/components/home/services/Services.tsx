'use client';

import YellowLine from '../../ui/YellowLine';
import ServiceCard from './ServiceCard';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Services() {
  const t = useTranslations('HomePage.Services');
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  return (
    <section ref={sectionRef} id='services' className='my-10 py-5'>
      <div className='max-w-6xl 2xl:max-w-7xl mx-auto px-5 py-8'>
        <div
          className={`flex flex-col items-center text-center scroll-hidden ${sectionVisible ? 'animate-slideUp' : ''}`}
        >
          <h2 className='text-headers-h5 lg:text-headers-h3 font-bold mb-3'>
            {t('title')}
          </h2>
          <YellowLine />
          <p className='text-body-4 lg:text-body-2 lg:font-semibold font-medium mt-3'>
            {t('subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 lg:mt-6'>
          <div
            className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}
          >
            <ServiceCard cardKey='card1' />
          </div>
          <div
            className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-300' : ''}`}
          >
            <ServiceCard cardKey='card2' />
          </div>
          <div
            className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''}`}
          >
            <ServiceCard cardKey='card3' />
          </div>
          <div
            className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-500' : ''}`}
          >
            <ServiceCard cardKey='card4' />
          </div>
        </div>
      </div>
    </section>
  );
}
