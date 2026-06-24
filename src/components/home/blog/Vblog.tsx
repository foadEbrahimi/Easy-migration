'use client';

import YellowLine from '@/components/ui/YellowLine';
import VblogCard from './VblogCard';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Vblog() {
  const t = useTranslations('HomePage.Vblog');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.3 });
  return (
    <section
      ref={sectionRef}
      className={`bg-[#AEAEAE]/10 my-10 mb-20 scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
    >
      <div className='mx-auto max-w-6xl 2xl:max-w-7xl px-5 py-8 pb-10'>
        {/* Header */}
        <div className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
          <span className='text-body-5 font-medium'>{t('subtitle')}</span>
          <h3 className='mt-2 mb-1 text-headers-h5 lg:text-headers-h3 font-bold'>
            {t('title')}
          </h3>
          <YellowLine />
        </div>

        {/* Cards */}
        <div className='mt-8 flex flex-col items-center gap-5 md:flex-row'>
          <div className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''}`}>
            <VblogCard postId='1' />
          </div>
          <div className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-500' : ''}`}>
            <VblogCard postId='2' />
          </div>
        </div>
      </div>
    </section>
  );
}
