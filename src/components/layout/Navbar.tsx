import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import phone from '../../../public/images/layout/phone.svg';
import SideMenu from './SideMenu';

const links = [
  { id: 1, label: 'خانه', href: '/' },
  { id: 2, label: 'خدمات', href: '/' },
  { id: 3, label: 'تماس با ما', href: '/' },
  { id: 4, label: 'درباره ما', href: '/' },
  { id: 5, label: 'وبلاگ', href: '/' },
];

export default function Navbar() {
  return (
    <nav className='max-w-7xl mx-auto flex items-center justify-between p-5 lg:px-10 xl:px-16 2xl:px-0 relative'>
      {/* لوگو */}
      <div className='flex items-center gap-1'>
        <Image src={logo} alt='logo' className='w-12 lg:w-16' />
        <span className='lg:text-2xl font-medium font-diba'>
          <span className='text-primary'>مهاجرت</span> آسان
        </span>
      </div>

      {/* لینک‌ها */}
      <ul className='hidden md:flex items-center gap-11'>
        {links.map(link => (
          <li key={link.id} className='listItem !text-body-2 font-semibold'>
            {link.label}
          </li>
        ))}
      </ul>

      {/* تماس */}
      <div className='hidden md:flex items-center gap-2'>
        <div className='bg-blue-500 rounded-full w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center'>
          <Image src={phone} alt='phone' />
        </div>
        <span className='font-medium text-button-btn-3'>
          برای مشاوره تماس بگیرید
          <br />
          021123456789
        </span>
      </div>

      {/* سایدبار موبایل */}
      <SideMenu />
    </nav>
  );
}
