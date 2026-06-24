'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';

export interface LocalizedPost {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
}

export default function BlogHero({ post }: { post: LocalizedPost }) {
  return (
    <div className='relative h-[400px] md:h-[500px] rounded-[20px] overflow-hidden border-b-[6px] border-primary'>
      <Image
        src={post.image}
        alt={post.title}
        fill
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
      <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10'>
        <span className='inline-flex bg-primary text-white px-4 py-2 rounded-lg text-sm mb-3'>
          {post.author}
        </span>
        <h1 className='text-2xl md:text-[42px] font-bold text-white leading-tight'>
          {post.title}
        </h1>
        <p className='text-white/80 mt-2 text-sm md:text-base'>{post.date}</p>
      </div>
    </div>
  );
}
