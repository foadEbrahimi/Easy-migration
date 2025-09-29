import Image from 'next/image';

import heroBG from '../../../public/images/landing/hero/heroBg.png';
import shape from '../../../public/images/landing/hero/shape.png';
import polygon from '../../../public/images/landing/hero/polygon.svg';
import Icon from '../../../public/images/landing/hero/Icon.svg';

import YellowLine from '../ui/YellowLine';

export default function Hero() {
  return (
    <section className='relative mx-auto max-w-6xl 2xl:max-w-7xl py-5 lg:mt-10 lg:pr-5 md:rounded-r-4xl bg-primary overflow-hidden'>
      <div className='flex h-full flex-col items-center justify-between md:flex-row'>
        {/* تصویر سمت راست */}
        <div className='relative flex-1 md:order-2 animate-fadeInRight'>
          <Image draggable={false} src={heroBG} alt='پرستارشو Hero' />
          <Image
            draggable={false}
            src={shape}
            alt='shape overlay'
            className='absolute hidden h-full w-full -right-80 top-0 md:block'
          />
        </div>

        {/* متن سمت چپ */}
        <div className='relative z-10 mt-3 flex flex-1 flex-col gap-3 px-7 md:order-1 animate-fadeInUp delay-200'>
          <h1 className='text-headers-h4 lg:text-headers-h2 font-bold text-white'>
            ما کمک می‌کنیم تا <span className='text-[#f6cb32]'>رویای</span> شما
            <br />
            را به واقعیت تبدیل کنید
          </h1>

          <h2
            aria-hidden='true'
            className='absolute hidden -top-6 right-14 text-2xl font-bold leading-[3rem] text-white opacity-10 md:block lg:text-5xl'
          >
            ما کمک می‌کنیم تا <span className='text-[#f6cb32]'>رویای</span> شما
            <br />
            را به واقعیت تبدیل کنید
          </h2>

          <YellowLine />

          <div className='mt-3 flex items-center gap-3'>
            <Image src={Icon} alt='icon' className='flex-shrink-0' />
            <p className='max-w-[21.5rem] text-button-btn4 font-medium leading-6 text-white'>
              ما خدمات کامل مهاجرت و ویزا برای شما به عنوان پرستار برای سفر،
              تحصیل و مهاجرت کاری به آلمان ارائه می‌دهیم.
            </p>
          </div>

          <div className='mt-5 flex gap-4'>
            <button className='group relative cursor-pointer rounded-sm rounded-tr-4xl bg-bg-white px-6 py-3 text-button-btn-3 transition-all duration-500 hover:rounded-tr-sm lg:text-button-btn lg:font-medium'>
              تماس با ما
              <Image
                draggable={false}
                src={polygon}
                alt=''
                className='absolute -right-3.5 -top-0.5 transition-all duration-500 group-hover:right-[-0.25rem] group-hover:top-0 group-hover:opacity-0'
              />
            </button>

            <button className='cursor-pointer px-6 py-3 text-button-btn-3 text-white transition-all duration-500 hover:rounded-sm hover:bg-white/30 lg:text-button-btn lg:font-medium'>
              خدمات ما
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
