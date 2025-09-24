import Image from 'next/image';

import cart from '../../../public/images/services/cart.png';
import polygon1 from '../../../public/images/services/polygon1.svg';
import polygon2 from '../../../public/images/services/polygon2.svg';

export default function ServiceCard() {
  return (
    <div className='relative'>
      <Image
        src={cart}
        alt='خدمت ویزای تحصیلی'
        className='rounded-xl rounded-tr-[50px] lg:rounded-tr-[70px]'
      />

      <Image
        src={polygon1}
        alt='Polygon decoration'
        className='hidden md:block absolute -top-1 lg:-top-1 -right-3 lg:-right-0 w-10 -rotate-5'
      />
      <Image
        src={polygon2}
        alt='Polygon decoration mobile'
        className='md:hidden absolute top-0 -right-1'
      />

      <div className='absolute inset-0 flex flex-col p-2 lg:p-4'>
        <span className='self-end bg-primary text-white font-medium flex items-center justify-center w-11 h-5 lg:w-[54px] lg:h-7 text-body-5 lg:text-body-4 rounded-full z-10'>
          01
        </span>
        <span className='mt-auto text-white font-medium lg:font-bold text-body-3 lg:text-headers-h4 z-10'>
          ویزای تحصیلی
        </span>

        <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-[#ffffff26] to-[#0E0E0E] rounded-b-xl rounded-tr-[50px]' />
      </div>
    </div>
  );
}
