import Image from 'next/image';

import YellowLine from '@/components/ui/YellowLine';

import phone from '../../../public/images/layout/phone.svg';
import pics from '../../../public/images/about/pics.png';
import WhyUs from '@/components/home/WhyUs';

export const metadata = {
  title: 'درباره ما',
};
export default function page() {
  return (
    <div className='mx-auto my-5 max-w-6xl px-5 2xl:max-w-7xl'>
      <div
        id='about-img'
        className='rounded-2xl h-[170px] animate-fadeInUp md:h-[370px] flex-col w-full p-2 flex items-center justify-center'
      >
        <h1 className='md:text-headers-h2 animate-fadeInUp delay-1000 text-headers-h4 font-bold text-white'>
          درباره ما
        </h1>
        <YellowLine />
        <span className='md:text-body-4 animate-fadeInUp delay-1000 text-body-5 mt-4 text-white bg-[#FFFFFF]/40 px-5 py-2 rounded-lg'>
          بیش از 25+ سال تجربه
        </span>
      </div>

      <div className='my-10 lg:my-20 animate-fadeInDown delay-500 duration-1000 flex flex-col md:flex-row items-start gap-5 md:gap-20'>
        <div className='flex-1 md:order-2'>
          <h2 className='text-headers-h5 md:text-headers-h3 font-bold'>
            ما همواره همراه شما هستیم ..
          </h2>
          <p className='text-body-5 mt-2 md:text-body-3 font-medium'>
            برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است.برای تغییر این متن بر روی دکمه ویرایش کلیک کنید.
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است برای تغییر این متن بر روی دکمه ویرایش
            کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            و با استفاده از طراحان گرافیک است برای تغییر این متن بر روی دکمه
            ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک استبرای تغییر این متن بر روی
            دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </p>
          <div className='mt-5 flex items-center gap-2'>
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
        <div className='md:max-w-xs lg:max-w-md md:order-1'>
          <Image src={pics} alt='pics' />
        </div>
      </div>

      <WhyUs about />
    </div>
  );
}
