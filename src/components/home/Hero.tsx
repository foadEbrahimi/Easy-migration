import Image from 'next/image';

import heroBG from '../../../public/images/hero/heroBg.png';
import shape from '../../../public/images/hero/shape.png';
import polygon from '../../../public/images/hero/polygon.svg';
import Icon from '../../../public/images/hero/Icon.svg';

export default function Hero() {
  return (
    <section className='relative max-w-6xl 2xl:max-w-7xl mx-auto mb-40 py-5 lg:mt-10 lg:pr-5 md:rounded-r-4xl bg-primary'>
      <div className='flex flex-col md:flex-row items-center justify-between h-full'>
        {/* تصویر سمت راست */}
        <div className='relative flex-1 md:order-2'>
          <Image draggable={false} src={heroBG} alt='پرستارشو Hero' />
          <Image
            draggable={false}
            src={shape}
            alt='shape overlay'
            className='absolute hidden md:block top-0 -right-80 h-full w-full'
          />
        </div>

        {/* متن سمت چپ */}
        <div className='relative z-10 flex-1 flex flex-col gap-3 px-7 mt-3 md:order-1'>
          {/* تیتر اصلی */}
          <h1 className='text-white font-bold text-headers-h4 lg:text-headers-h2'>
            ما کمک می‌کنیم تا <span className='text-[#f6cb32]'>رویای</span> شما
            <br />
            را به واقعیت تبدیل کنید
          </h1>

          {/* تیتر شبحی (فقط دکوری) */}
          <h2
            aria-hidden='true'
            className='absolute hidden md:block opacity-10 -top-6 right-14 leading-[3rem] text-2xl lg:text-5xl font-bold text-white'
          >
            ما کمک می‌کنیم تا <span className='text-[#f6cb32]'>رویای</span> شما
            <br />
            را به واقعیت تبدیل کنید
          </h2>

          {/* خط زرد */}
          <div className='flex items-center gap-2'>
            <span className='bg-[#f6cb32] w-28 h-1 rounded-full' />
            <span className='bg-[#f6cb32] w-1.5 h-1 rounded-full' />
          </div>

          {/* توضیحات */}
          <div className='flex items-center gap-3 mt-3'>
            <Image src={Icon} alt='icon' className='flex-shrink-0' />
            <p className='max-w-[21.5rem] font-medium text-white text-button-btn4 leading-6'>
              ما خدمات کامل مهاجرت و ویزا برای شما به عنوان پرستار برای سفر،
              تحصیل و مهاجرت کاری به آلمان ارائه می‌دهیم.
            </p>
          </div>

          {/* دکمه‌ها */}
          <div className='flex gap-4 mt-5'>
            <button className='relative cursor-pointer group bg-bg-white rounded-sm rounded-tr-4xl px-6 py-3 text-button-btn-3 lg:text-button-btn lg:font-medium transition-all duration-500 hover:rounded-tr-sm'>
              تماس با ما
              <Image
                draggable={false}
                src={polygon}
                alt=''
                className='absolute -right-3.5 -top-0.5 transition-all duration-500 group-hover:opacity-0 group-hover:-right-1 group-hover:top-0'
              />
            </button>

            <button className='px-6 cursor-pointer py-3 text-white text-button-btn-3 lg:text-button-btn lg:font-medium transition-all duration-500 hover:bg-white/30 hover:rounded-sm'>
              خدمات ما
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
