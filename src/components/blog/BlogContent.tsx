'use client';

import { useTranslations } from 'next-intl';
import type { LocalizedPost } from './BlogHero';

export default function BlogContent({ post }: { post: LocalizedPost }) {
  const t = useTranslations('BlogDetail');

  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-[32px] md:text-[42px] font-bold mt-5 text-black leading-tight'>
          {post.title}
        </h1>

        <div className='flex items-center gap-2 text-zinc-500 mt-3 text-sm'>
          <span>
            {t('author')}: {post.author}
          </span>
          <span>•</span>
          <span>
            {t('publishedDate')}: {post.date}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className='mt-8 text-zinc-700 leading-[2.4] text-body-5'>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className='blog-content'
        />
      </div>
    </div>
  );
}
