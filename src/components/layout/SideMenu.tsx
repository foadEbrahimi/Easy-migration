'use client';

import { useState } from 'react';
import useClickOutSide from '@/hooks/useClickOutSide';

import logo from '../../../public/images/logo.svg';
import list from '../../../public/images/layout/list.svg';
import Image from 'next/image';
import phone from '../../../public/images/layout/phone.svg';
import chevronLeft from '../../../public/images/layout/chevronLeft.svg';

export default function SideMenu() {
  const [showSide, setShowSide] = useState(false);
  const close = () => setShowSide(false);
  const { ref } = useClickOutSide(close);

  return (
    <div className='md:hidden'>
      <button onClick={() => setShowSide(true)} className='cursor-pointer'>
        <Image src={list} className='w-7 md:w-8 ' alt='close' />
      </button>

      {showSide && (
        <div
          className='fixed inset-0 bg-black/50 z-20 transition-opacity'
          onClick={close}
        ></div>
      )}

      <div
        ref={ref}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-md bg-white z-30 transform transition-transform duration-500
        ${showSide ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image src={logo} alt='logo' className='w-12 lg:w-16' />
            <span className='font-diba'>
              <span className='text-blue-500'>مهاجرت</span> آسان
            </span>
          </div>
        </div>

        <div className='px-5 py-3 pt-10 flex flex-col h-[calc(100%-5rem)]'>
          <ul className='space-y-10 text-lg'>
            <li className='flex items-center text-body-2 font-semibold font-semibold w-full sidebaeItem justify-between'>
              صفحه اصلی <Image src={chevronLeft} alt='chevronLeft' />
            </li>
            <li className='flex items-center text-body-2 font-semibold font-semibold w-full sidebaeItem justify-between'>
              درباره ما <Image src={chevronLeft} alt='chevronLeft' />
            </li>
            <li className='flex items-center text-body-2 font-semibold font-semibold w-full sidebaeItem justify-between'>
              خدمات <Image src={chevronLeft} alt='chevronLeft' />
            </li>
            <li className='flex items-center text-body-2 font-semibold font-semibold w-full sidebaeItem justify-between'>
              تماس با ما <Image src={chevronLeft} alt='chevronLeft' />
            </li>
          </ul>

          <div className='flex items-center gap-2 mt-auto'>
            <div className='bg-blue-500 rounded-full w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center'>
              <Image src={phone} alt='phone' />
            </div>
            <span className='font-medium text-button-btn-3'>
              برای مشاوره تماس بگیرید
              <br />
              021123456789
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
