'use client';

import YellowLine from '../../ui/YellowLine';
import Questions from './Questions';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Faq() {
  const t = useTranslations('HomePage.Faq');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  return (
    <section
      ref={sectionRef}
      className={`px-5 py-8 max-w-6xl 2xl:max-w-7xl mx-auto pb-10 scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
    >
      {/* عنوان و توضیحات */}
      <div className={`space-y-5 text-center scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
        <div className='space-y-2 w-fit mx-auto'>
          <h3 className='text-headers-h5 md:text-headers-h3 font-bold'>
            {t('title')}
          </h3>
          <YellowLine />
        </div>
        <p className='text-body-5 md:text-body-4 max-w-sm mx-auto font-medium'>
          {t('description')}
        </p>
      </div>

      {/* بخش آکاردئون سوالات */}
      <div className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''}`}>
        <Questions />
      </div>
    </section>
  );
}
