'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { isLoading, setLoading } = useLoading();

  const otherLocale = locale === 'fa' ? 'en' : 'fa';

  const switchLanguage = () => {
    setLoading(true);
    const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLanguage}
      disabled={isLoading}
      className='border border-gray-30 rounded-lg px-3 py-1 text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {isLoading ? (
        <span className='flex items-center gap-1'>
          <span className='w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin' />
        </span>
      ) : locale === 'fa' ? (
        'EN'
      ) : (
        'FA'
      )}
    </button>
  );
}
