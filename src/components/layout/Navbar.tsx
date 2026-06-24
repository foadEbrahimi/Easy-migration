import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import phone from '../../../public/images/layout/phone.svg';

import SideMenu from './SideMenu';
import LanguageSwitcher from './LanguageSwitcher';
import Links from '../home/navbar/Links';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Navbar() {
  const t = useTranslations('HomePage.Navbar');
  const lang = useLocale();
  return (
    <nav className='max-w-7xl mx-auto flex items-center justify-between p-5 lg:px-10 xl:px-16 2xl:px-0 relative'>
      {/* لوگو */}
      <Link href={`/${lang}`} className='flex items-center gap-1'>
        <Image src={logo} alt='logo' className='w-12 lg:w-16' />
        <span
          className={`lg:text-2xl font-medium ${lang === 'fa' ? 'font-diba' : 'pt-3'}`}
        >
          <span className='text-primary'>{t('logo.text1')}</span>{' '}
          {t('logo.text2')}
        </span>
      </Link>

      {/* لینک‌ها */}
      <Links />

      {/* تماس */}
      <div className='flex items-center gap-5'>
        <div className='hidden md:flex items-center gap-2'>
          <div className='bg-blue-500 rounded-full w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center'>
            <Image src={phone} alt='phone' />
          </div>
          <span className='font-medium text-button-btn-3'>
            {t('contact.title')}
            <br />
            021123456789
          </span>
        </div>

        {/* تغییر زبان */}
        <div className='hidden md:block'>
          <LanguageSwitcher />
        </div>
      </div>

      {/* سایدبار موبایل */}
      <SideMenu />
    </nav>
  );
}
