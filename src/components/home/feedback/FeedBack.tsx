'use client';

import YellowLine from '../../ui/YellowLine';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import FeedbackSlider from './FeedbackSlider';
import FeedbackCard from './FeedbackCard';

export default function FeedBack() {
  const t = useTranslations('HomePage.FeedBack');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  return (
    <section
      ref={sectionRef}
      className={`my-12 md:my-20 px-5 py-8 max-w-6xl 2xl:max-w-7xl mx-auto pb-10 scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
    >
      <div className='md:flex md:flex-row gap-20 w-full'>
        <div className={`md:!max-w-[23rem] !flex-1 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
          <span className='text-body-5 text-[#828282] font-medium'>
            {t('subtitle')}
          </span>
          <h3 className='text-headers-h5 md:text-headers-h4 mt-2 mb-1 font-bold'>
            {t('title')}
          </h3>
          <YellowLine />
        </div>
        <div className={`mt-6 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''}`}>
          <FeedbackSlider>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </FeedbackSlider>
        </div>
      </div>
    </section>
  );
}
