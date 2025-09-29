import Image from 'next/image';

import cart from '../../../../public/images/landing/services/cart.png';

export default function ServiceCard() {
  return (
    <div className='relative group cursor-pointer overflow-hidden rounded-xl rounded-tr-[50px] lg:rounded-tr-[70px]'>
      {/* تصویر اصلی */}
      <Image
        src={cart}
        alt='خدمت ویزای تحصیلی'
        className='transition-transform duration-500 group-hover:scale-105'
      />

      {/* متن و لایه گرادینت */}
      <div className='absolute inset-0 flex flex-col p-2 lg:p-4'>
        <span className='self-end bg-primary text-white font-medium flex items-center justify-center w-11 h-5 lg:w-[54px] lg:h-7 text-body-5 lg:text-body-4 rounded-full z-10'>
          01
        </span>
        <span className='mt-auto text-white font-medium lg:font-bold text-body-3 lg:text-headers-h4 z-10 transition-colors duration-300 group-hover:text-primary'>
          ویزای تحصیلی
        </span>

        {/* گرادینت */}
        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-[#ffffff26] to-[#0E0E0E] rounded-b-xl rounded-tr-[50px] transition-opacity duration-500 group-hover:opacity-80' />
      </div>
    </div>
  );
}
