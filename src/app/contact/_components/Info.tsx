import Image from 'next/image';

import phone from '../../../../public/images/layout/phone.svg';
export default function Info() {
  return (
    <div className='space-y-4 flex-1'>
      <span className='bg-primary px-2 text-white text-button-btn font-medium md:px-4 py-2 rounded-lg'>
        تماس با ما
      </span>
      <div className='space-y-4 max-w-[500px]'>
        <h1 className='text-headers-h4 md:text-headers-h3 mt-5 font-bold'>
          مشاوره در مورد نحوه انتخاب مهاجرتی و قدم های اساسی برای ادامه مسیر
          زندگی خود
        </h1>
        <p className='text-body-4 text-[#5E5E5E] font-medium'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
      <div className='flex flex-col gap-4 mt-5 md:gap-10 md:flex-row md:items-center'>
        <div className='flex items-center gap-2'>
          <div className='bg-primary rounded-full w-12 h-12 flex items-center justify-center'>
            <Image src={phone} alt='phone' />
          </div>
          <div className='flex flex-col '>
            <b className='text-body-3'>آدرس دفتر</b>
            <span className='text-button-btn-2 font-medium text-[#606060]'>
              تهران اقدسیه میدان شهدا پلاک 14
            </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-primary rounded-full w-12 h-12 flex items-center justify-center'>
            <Image src={phone} alt='phone' />
          </div>
          <div className='flex flex-col '>
            <b className='text-body-3'>شماره تماس پشتیبانی</b>
            <span className='text-button-btn-2 font-medium text-[#606060]'>
              021123456789
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
