'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';
import { useLocale } from 'next-intl';

export default function LoadingOverlay() {
  const { isLoading, setLoading } = useLoading();
  const pathname = usePathname();
  const lang = useLocale();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname, setLoading]);

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity'>
      <div className='flex flex-col items-center gap-3'>
        <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
        <span className='text-sm text-gray-500'>
          {lang === 'fa' ? 'Loading...' : 'درحال بارگزاری...'}
        </span>
      </div>
    </div>
  );
}
