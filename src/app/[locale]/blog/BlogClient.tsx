'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import search from '../../../../public/images/blog/search.svg';
import Line from '../../../../public/images/landing/vblog/Line.svg';
import Arrow from '../../../../public/images/landing/vblog/arrow.svg';
import Polygan from '../../../../public/images/landing/vblog/Polygon 3.svg';
import { useParams } from 'next/navigation';
import { getLocalizedPosts } from '@/data/blog';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Page() {
  const t = useTranslations('Blog');
  const params = useParams();
  const locale = params.locale as string;
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const localizedPosts = getLocalizedPosts(locale);
  return (
    <div ref={sectionRef} className='mx-auto my-5 max-w-6xl px-5 2xl:max-w-7xl'>
      <div className={`md:flex md:flex-row md:gap-6 md:items-center scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}>
        <div className='lg:w-[15rem]'>
          <div className='bg-primary w-full flex items-center gap-1 cursor-pointer text-white text-body-5 rounded-full px-5 py-3 text-center lg:text-body-3'>
            {t('home')}
            <span className='text-[#F6CB32]'>/</span>
            {t('blog')}
          </div>
        </div>
        <div className='flex items-center rounded-full gap-2 mt-3 md:mt-0 border border-primary px-5 py-2'>
          <Image src={search} alt='' className='w-5' />
          <input
            type='text'
            className='outline-none lg:w-[15rem] w-full !text-[#000000] placeholder:text-body-4 font-medium text-body-4'
            placeholder={t('searchPlaceholder')}
          />
        </div>
      </div>
      <div className='grid md:grid-cols-2 mt-7 items-center justify-center w-full gap-5'>
        {localizedPosts.map((post, index) => (
          <Link key={post.id} href={`/${locale}/blog/${post.id}`} className={`block scroll-hidden ${sectionVisible ? `animate-slideUp delay-${300 + index * 100}` : ''}`}>
            <div className='group flex flex-1 items-center h-[11rem] md:h-[12rem] rounded-md rounded-tr-[50px] shadow-md transition-all duration-300 hover:shadow-xl'>
              <div className='relative max-w-[8rem] md:max-w-[12rem]'>
                <div className='h-[11rem] md:h-[12rem] overflow-hidden'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    className='h-full rounded-tr-[40px] lg:rounded-tr-[50px] transition-all duration-300 group-hover:scale-110 group-hover:rounded-tr-none'
                  />
                </div>
                <Image
                  src={Polygan}
                  alt='polygan'
                  className='absolute top-0 right-0 lg:w-6 transition-all duration-300 group-hover:opacity-0'
                />
              </div>
              <div className='px-2 py-3 md:px-10'>
                <div className='flex items-center gap-2'>
                  <Image src={Line} alt='line' />
                  <span className='text-b-6 lg:text-body-5 font-medium'>
                    {post.date}
                  </span>
                </div>
                <h4 className='mt-1 md:mt-2 text-body-4 lg:text-headers-h5 font-bold transition-all duration-300 group-hover:text-primary'>
                  {post.title}
                </h4>
                <p className='mt-0 md:mt-3 md:max-w-[18rem] text-b-6 lg:text-body-5 text-[#A5A5A5] line-clamp-3'>
                  {post.description}
                </p>
                <div className='mt-1 md:mt-2 lg:mt-4 flex items-center gap-2 font-medium md:font-semibold'>
                  <span className='text-b-6 lg:text-button-btn-3 text-primary'>
                    {t('showMore')}
                  </span>
                  <Image
                    src={Arrow}
                    alt='Arrow'
                    className='transition-all duration-300 group-hover:-translate-x-2'
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
