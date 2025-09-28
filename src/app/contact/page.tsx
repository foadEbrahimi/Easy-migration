import Image from 'next/image';

import YellowLine from '@/components/ui/YellowLine';
import Info from './_components/Info';
import Form from './_components/Form';

export default function page() {
  return (
    <div className='mx-auto my-5 max-w-6xl px-5 2xl:max-w-7xl'>
      <div
        id='contact-img'
        className='rounded-2xl h-[170px] md:h-[300px] flex-col w-full p-2 flex items-center justify-center'
      >
        <h1 className='md:text-headers-h2 text-headers-h4 font-bold text-white'>
          تماس با ما
        </h1>
        <YellowLine />
        <span className='md:text-body-4 text-center text-body-5 mt-4 text-white bg-[#FFFFFF]/40 px-5 py-2 rounded-lg'>
          اگر سوالی داشتید خوشحال می شویم که به شما کمک و راهنمایی کنیم
        </span>
      </div>
      <div className='my-20 md:my-40 flex flex-col gap-20 md:flex-row justify-between'>
        <Info />
        <Form />
      </div>
    </div>
  );
}
