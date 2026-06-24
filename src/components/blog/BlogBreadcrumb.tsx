'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function BlogBreadcrumb() {
  const t = useTranslations('BlogDetail');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className='flex items-center gap-2 text-body-5 font-medium'>
      <Link
        href={`/${locale}`}
        className='text-zinc-500 hover:text-primary transition-colors'
      >
        {t('home')}
      </Link>
      <span className='text-[#F6CB32]'>/</span>
      <Link
        href={`/${locale}/blog`}
        className='text-zinc-500 hover:text-primary transition-colors'
      >
        {t('blog')}
      </Link>
    </div>
  );
}
