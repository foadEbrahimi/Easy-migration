'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getBlogPost } from '@/data/blog';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import BlogHero from '@/components/blog/BlogHero';
import BlogContent from '@/components/blog/BlogContent';
import BlogShare from '@/components/blog/BlogShare';
import BlogSidebar from '@/components/blog/BlogSidebar';

export default function BlogDetailPage() {
  const t = useTranslations('BlogDetail');
  const params = useParams();
  const blogId = params.blogId as string;
  const locale = params.locale as string;
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const post = getBlogPost(blogId, locale);

  if (!post) {
    return (
      <section
        ref={sectionRef}
        className='bg-bg-gray min-h-screen py-14 px-4 md:px-8'
      >
        <div
          className={`max-w-[1200px] mx-auto text-center scroll-hidden ${sectionVisible ? 'animate-fadeScale' : ''}`}
        >
          <h2 className='text-3xl font-bold text-zinc-700'>{t('noPosts')}</h2>
          <Link
            href={`/${locale}/blog`}
            className='mt-6 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors'
          >
            <ArrowLeft size={18} />
            {t('backToBlog')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className='min-h-screen border-t-2 border-primary py-14 px-4 md:px-8'
    >
      <div className='max-w-[1200px] mx-auto'>
        {/* Breadcrumb */}
        <div
          className={`mb-6 scroll-hidden ${sectionVisible ? 'animate-slideUp delay-200' : ''}`}
        >
          <BlogBreadcrumb />
        </div>

        {/* Back Link */}
        <Link
          href={`/${locale}/blog`}
          className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 text-sm font-medium scroll-hidden ${sectionVisible ? 'animate-slideUp delay-300' : ''}`}
        >
          <ArrowLeft size={16} />
          {t('backToBlog')}
        </Link>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8'>
          {/* Main Content */}
          <main
            className={`scroll-hidden ${sectionVisible ? 'animate-slideUp delay-400' : ''}`}
          >
            {/* Hero Image */}
            <BlogHero post={post} />

            {/* Article Content */}
            <BlogContent post={post} />

            {/* Share */}
            <BlogShare />
          </main>

          {/* Sidebar */}
          <aside
            className={`scroll-hidden ${sectionVisible ? 'animate-slideRight delay-500' : ''}`}
          >
            <BlogSidebar currentPostId={post.id} />
          </aside>
        </div>
      </div>
    </section>
  );
}
