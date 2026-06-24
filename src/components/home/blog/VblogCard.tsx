import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

import Blog1 from '../../../../public/images/landing/vblog/blog1.png';
import Polygan from '../../../../public/images/landing/vblog/Polygon 3.svg';
import Line from '../../../../public/images/landing/vblog/Line.svg';
import Arrow from '../../../../public/images/landing/vblog/arrow.svg';
import { getBlogPost } from '@/data/blog';

export default function VblogCard({ postId }: { postId?: string }) {
  const t = useTranslations('HomePage.VblogCard');
  const params = useParams();
  const locale = params.locale as string;
  const post = postId ? getBlogPost(postId, locale) : null;
  const blogId = post?.id || '1';

  return (
    <Link href={`/${locale}/blog/${blogId}`} className='block'>
      <div className='group flex flex-1 items-center h-[11rem] md:h-[12rem] rounded-md rounded-tr-[50px] shadow-md transition-all duration-300 hover:shadow-xl'>
        {/* Image Section */}
        <div className='relative max-w-[8rem] md:max-w-[12rem]'>
          <div className='h-[11rem] md:h-[12rem] overflow-hidden'>
            <Image
              src={Blog1}
              alt='blog1'
              className='h-full rounded-tr-[40px] lg:rounded-tr-[50px] transition-all duration-300 group-hover:scale-110 group-hover:rounded-tr-none'
            />
          </div>
          <Image
            src={Polygan}
            alt='polygan'
            className='absolute top-0 right-0 lg:w-6 transition-all duration-300 group-hover:opacity-0'
          />
        </div>

        {/* Content Section */}
        <div className='px-2 py-3 md:px-10'>
          <div className='flex items-center gap-2'>
            <Image src={Line} alt='line' />
            <span className='text-b-6 lg:text-body-5 font-medium'>
              {t('date')}
            </span>
          </div>

          <h4 className='mt-1 md:mt-2 text-body-4 lg:text-headers-h5 font-bold cursor-pointer transition-all duration-300 hover:text-primary'>
            {post?.title || t('title')}
          </h4>

          <p className='mt-0 md:mt-3 md:max-w-[18rem] text-b-6 lg:text-body-5 text-[#A5A5A5] line-clamp-3'>
            {post?.description || t('description')}
          </p>

          <div className='mt-1 md:mt-2 lg:mt-4 flex items-center gap-2 font-medium md:font-semibold'>
            <span className='text-b-6 lg:text-button-btn-3 text-primary'>
              {t('readMore')}
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
  );
}
