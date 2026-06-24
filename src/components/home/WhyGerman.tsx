'use client';

import Image from 'next/image';
import YellowLine from '../ui/YellowLine';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import dollar from '../../../public/images/landing/whyGerman/dollar.svg';
import calendar from '../../../public/images/landing/whyGerman/calendar.svg';
import flower from '../../../public/images/landing/whyGerman/flower.svg';
import building from '../../../public/images/landing/whyGerman/building.svg';
import germanPhoto from '../../../public/images/landing/whyGerman/german.png';

const features = [
  {
    id: 1,
    icon: dollar,
    translateKey: 'economy',
    alt: 'اقتصاد آیکن',
  },
  {
    id: 2,
    icon: calendar,
    translateKey: 'education',
    alt: 'تقویم آیکن',
  },
  {
    id: 3,
    icon: flower,
    translateKey: 'residence',
    alt: 'گل آیکن',
  },
  {
    id: 4,
    icon: building,
    translateKey: 'quality',
    alt: 'ساختمان آیکن',
  },
];

export default function WhyGerman() {
  const t = useTranslations('HomePage.WhyGerman');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 });
  return (
    <section
      ref={sectionRef}
      className={`mx-auto my-20 max-w-6xl px-5 2xl:max-w-7xl scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
    >
      <div className='flex flex-col gap-11 md:flex-row md:items-start md:justify-between md:gap-32'>
        {/* متن سمت چپ */}
        <div className={`flex-1 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
          <h2 className='mb-3 text-headers-h5 font-bold lg:text-headers-h3'>
            {t('title')}
          </h2>
          <YellowLine />

          <ul className='mt-5 grid grid-cols-2 gap-y-6'>
            {features.map((feature, index) => (
              <li
                key={feature.id}
                className={`scroll-hidden flex flex-col gap-3 transition-transform duration-300 hover:scale-105 ${sectionVisible ? `animate-slideUp delay-${300 + index * 100}` : ''}`}
              >
                <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#008DFF] shadow-md shadow-blue-200'>
                  <Image src={feature.icon} alt={feature.alt} />
                </div>
                <span className='text-body-5 font-medium lg:text-body'>
                  {t(`features.${feature.translateKey}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex-1 scroll-hidden ${sectionVisible ? 'animate-slideRight delay-500' : ''}`}>
          <div className='relative w-fit'>
            <div className='relative overflow-hidden rounded-b-4xl'>
              <Image
                src={germanPhoto}
                alt={t('title')}
                className='transition-transform duration-700 hover:scale-105'
              />
            </div>
            <div className='absolute -left-2 top-5 h-full w-full -z-10 rounded-4xl bg-gradient-to-b from-[#008DFF] to-[#005599] md:-left-10 md:top-14'></div>

            <div className={`scroll-hidden absolute -bottom-7 left-2 z-20 flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow shadow-gray-300 lg:-bottom-20 lg:left-0 lg:px-6 ${sectionVisible ? 'animate-slideUp delay-700' : ''}`}>
              <span
                dir='ltr'
                className='text-headers-h4 font-bold text-[#F6CB32] lg:text-headers-h3'
              >
                {t('stat.number')}
              </span>
              <span className='text-body-4 lg:text-body-2 lg:font-semibold'>
                {t('stat.text')}
              </span>
            </div>

            <div className='absolute top-0 left-0 h-full w-full rounded-4xl bg-gradient-to-b from-[#0064b500] from-55% to-[#008DFF] to-95%'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
