import Image from 'next/image';

import YellowLine from '../ui/YellowLine';

import ring from '../../../public/images/landing/whyus/ring.svg';
import bg from '../../../public/images/landing/whyus/img.png';

export default function WhyUs({ about }: { about: boolean }) {
  return (
    <section className='max-w-6xl my-10 2xl:max-w-7xl mx-auto px-5 py-8'>
      <div
        className={`flex flex-col gap-12 lg:gap-20 ${
          about ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div className='md:flex-1 flex flex-col md:justify-center md:gap-10'>
          <div>
            <span className='text-body-5 font-medium'>
              همراه و همسیر با شما
            </span>
            <h2 className='text-headers-h4 lg:text-headers-h3 mt-3 mb-2 font-bold'>
              چرا ما را باید انتخاب کنید ؟
            </h2>
            <YellowLine />
          </div>
          <p className='text-body-5 max-w-[44rem] md:leading-11 lg:text-body font-medium mt-4'>
            مرکز مشاوره ویزای مهاجرت راه، برای ارائه خدمات برتر با طراحی منحصر
            به فرد
            <br className='md:hidden' /> در دنیای آموزش و مهاجرت ایجاد شده است
            وابستگی به موسسات آموزشی از سراسر جهان سریعترین پردازش فرم ویزا با
            نمایندگان متخصص مهاجرت .
          </p>
          <div className='flex flex-col gap-5 md:flex-row'>
            <div className='flex items-start mt-4 gap-3'>
              <Image className='w-10' src={ring} alt='ring' />
              <div className='flex flex-col gap-2'>
                <span className='text-body-2 font-semibold'>تیم حرفه ای</span>
                <p className='text-body-5 lg:text-body-4 font-medium'>
                  مشاوره مالی، نقش کمک و راهنما را برای مدیران و صاحبان کسب و
                  کار بازی می‌کند.
                </p>
              </div>
            </div>
            <div className='flex items-start mt-4 gap-3'>
              <Image className='w-10' src={ring} alt='ring' />
              <div className='flex flex-col gap-2'>
                <span className='text-body-2 font-semibold'>
                  پشتیبانی ۲۴ ساعته
                </span>
                <p className='text-body-5 lg:text-body-4 font-medium'>
                  کارشناسانی را در اختیار شما در ۲۴ ساعت روز قرار میدهد تا
                  مشکلات شما را حل کند.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative md:flex-1 md:max-w-sm w-[80%] mx-auto'>
          <Image src={bg} alt='bg' className='rounded-4xl' />
          <div className='bg-gradient-to-b absolute top-2 -z-10 -right-4 rounded-4xl from-[#0F91F4] to-[#09548E] w-full h-full' />
        </div>
      </div>
    </section>
  );
}
