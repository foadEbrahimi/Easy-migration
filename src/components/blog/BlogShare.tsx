'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Send, MessageCircle, Facebook } from 'lucide-react';

export default function BlogShare() {
  const t = useTranslations('BlogDetail');

  return (
    <div className='border-t border-zinc-200 mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
      <div className='flex items-center gap-3 flex-wrap'>
        <span className='font-bold text-zinc-700'>{t('share')}:</span>
      </div>

      <div className='flex items-center gap-3'>
        <a className='w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer'>
          <Instagram size={20} />
        </a>
        <a className='w-11 h-11 rounded-full bg-[#F4C430] text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer'>
          <Facebook size={20} />
        </a>
        <a className='w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer'>
          <Send size={20} />
        </a>
        <a className='w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer'>
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
}
