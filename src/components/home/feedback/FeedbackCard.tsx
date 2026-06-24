'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import dotSvg from '../../../../public/images/landing/feedback/dot.svg';

export default function FeedbackCard() {
  const t = useTranslations('HomePage.FeedbackCard');
  return (
    <div className='shadow-lg border keen-slider__slide border-black/5 max-w-[380px] rounded-xl bg-[rgba(249, 249, 249, 0.5)] py-4 px-5'>
      <p className='text-b-6 md:text-body-5 font-medium'>
        {t('comment')}
      </p>
      <div className='flex h-fit items-center mt-6 justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-primary'></div>
          <div className='flex flex-col'>
            <span className='text-body-3 md:text-button-btn-2 font-bold'>
              {t('author')}
            </span>
            <span className='text-b-6'>{t('profession')}</span>
          </div>
        </div>
        <Image src={dotSvg} alt='dotsvg' />
      </div>
    </div>
  );
}
