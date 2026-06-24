'use client';

import Image from 'next/image';

import heroBG from '../../../public/images/landing/hero/heroBg.png';
import shape from '../../../public/images/landing/hero/shape.png';
import polygon from '../../../public/images/landing/hero/polygon.svg';
import Icon from '../../../public/images/landing/hero/Icon.svg';

import YellowLine from '../ui/YellowLine';
import { useTranslations } from 'next-intl';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const t = useTranslations('HomePage.Hero');
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  return (
    <section
      ref={sectionRef}
      className={`relative mx-auto max-w-6xl 2xl:max-w-7xl py-5 lg:mt-10 lg:pr-5 rtl:md:rounded-r-4xl ltr:md:rounded-l-4xl bg-primary overflow-hidden scroll-hidden ${sectionVisible ? 'animate-zoomIn' : ''}`}
    >
      <div className='flex h-full flex-col items-center justify-between md:flex-row'>
        {/* تصویر سمت راست */}
        <div className={`relative flex-1 md:order-2 scroll-hidden ${sectionVisible ? 'animate-slideRight delay-200' : ''}`}>
          <Image draggable={false} src={heroBG} alt='پرستارشو Hero' />
          <Image
            draggable={false}
            src={shape}
            alt='shape overlay'
            className='absolute hidden h-full w-full -right-80 top-0 md:block'
          />
        </div>

        {/* متن سمت چپ */}
        <div className={`relative z-10 mt-3 flex flex-1 flex-col gap-3 px-7 md:order-1 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-300' : ''}`}>
          <h1
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
            className='text-headers-h4 lg:text-headers-h2 font-bold text-white'
          ></h1>
          <h2
            aria-hidden='true'
            className='absolute hidden select-none -top-6 rtl:right-14 ltr:left-14 text-2xl font-bold leading-[3rem] text-white opacity-10 md:block lg:text-5xl'
            dangerouslySetInnerHTML={{ __html: t.raw('title') }}
          ></h2>

          <YellowLine />

          <div className={`mt-3 flex items-center gap-3 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''}`}>
            <Image src={Icon} alt='icon' className='flex-shrink-0' />
            <p className='max-w-[21.5rem] text-button-btn4 font-medium leading-6 text-white'>
              {t('subTitle')}
            </p>
          </div>

          <div className={`mt-5 flex gap-4 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-500' : ''}`}>
            <button className='group relative cursor-pointer rounded-sm rounded-tr-4xl bg-bg-white px-6 py-3 text-button-btn-3 transition-all duration-500 hover:rounded-tr-sm lg:text-button-btn lg:font-medium'>
              {t('btn1')}
              <Image
                draggable={false}
                src={polygon}
                alt=''
                className='absolute -right-3.5 -top-0.5 transition-all duration-500 group-hover:right-[-0.25rem] group-hover:top-0 group-hover:opacity-0'
              />
            </button>

            <button className='cursor-pointer px-6 py-3 text-button-btn-3 text-white transition-all duration-500 hover:rounded-sm hover:bg-white/30 lg:text-button-btn lg:font-medium'>
              {t('btn2')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
