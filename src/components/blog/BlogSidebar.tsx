'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import YellowLine from '@/components/ui/YellowLine';
import { getLocalizedPosts } from '@/data/blog';

export default function BlogSidebar({ currentPostId }: { currentPostId: string }) {
  const t = useTranslations('BlogDetail');
  const params = useParams();
  const locale = params.locale as string;

  const relatedPosts = getLocalizedPosts(locale).filter(p => p.id !== currentPostId);

  const tags = [
    t('tags'),
    t('author'),
    t('publishedDate'),
  ];

  return (
    <aside className='space-y-6'>
      {/* Related Posts */}
      <div className='bg-white rounded-3xl border border-zinc-200 p-6'>
        <div className='flex flex-col items-start gap-2 mb-6'>
          <span className='text-headers-h5 font-bold'>{t('relatedPosts')}</span>
          <YellowLine />
        </div>

        <div className='space-y-5'>
          {relatedPosts.length > 0 ? (
            relatedPosts.map(post => (
              <Link
                key={post.id}
                href={`/${locale}/blog/${post.id}`}
                className='flex items-center gap-3 group'
              >
                <div className='relative w-[105px] h-[75px] rounded-xl overflow-hidden shrink-0'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className='object-cover transition-all duration-300 group-hover:scale-110'
                  />
                </div>

                <div>
                  <h4 className='text-sm leading-6 font-medium text-black group-hover:text-primary transition-colors line-clamp-2'>
                    {post.title}
                  </h4>

                  <span className='text-primary text-xs mt-1 block'>
                    {post.date}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className='text-zinc-500 text-sm'>{t('noPosts')}</p>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className='bg-white rounded-3xl border border-zinc-200 p-6'>
        <div className='flex flex-col items-start gap-2 mb-6'>
          <span className='text-headers-h5 font-bold'>{t('tags')}</span>
          <YellowLine />
        </div>

        <div className='flex flex-wrap gap-3'>
          {tags.map(tag => (
            <span
              key={tag}
              className='px-4 py-2 rounded-lg bg-[#F5F5F5] text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
