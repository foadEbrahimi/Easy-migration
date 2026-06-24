'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const links = [
  { id: 1, translateSlug: 'home', href: '/' },
  // { id: 2, translateSlug: 'services', href: '/services' },
  { id: 3, translateSlug: 'contact-us', href: '/contact' },
  { id: 4, translateSlug: 'about-us', href: '/about' },
  { id: 5, translateSlug: 'blog', href: '/blog' },
];

export default function Links() {
  const pathname = usePathname();
  const t = useTranslations('HomePage.Navbar.links');
  const lang = useLocale();
  return (
    <ul className='hidden md:flex items-center gap-11'>
      {links.map(link => (
        <Link
          className={`listItem !text-body-2 font-semibold ${
            pathname === `/${lang}${link.href}` ? 'active' : ''
          }`}
          href={`/${lang}${link.href}`}
          key={link.id}
        >
          {t(link.translateSlug)}
        </Link>
      ))}
    </ul>
  );
}
