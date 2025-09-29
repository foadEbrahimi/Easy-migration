'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { id: 1, label: 'خانه', href: '/' },
  { id: 2, label: 'خدمات', href: '/services' },
  { id: 3, label: 'تماس با ما', href: '/contact' },
  { id: 4, label: 'درباره ما', href: '/about' },
  { id: 5, label: 'وبلاگ', href: '/blog' },
];

export default function Links() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <ul className='hidden md:flex items-center gap-11'>
      {links.map(link => (
        <Link
          className={`listItem !text-body-2 font-semibold ${
            pathname === link.href ? 'active' : ''
          }`}
          href={link.href}
          key={link.id}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
