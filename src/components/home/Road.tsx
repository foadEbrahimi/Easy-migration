import Image from 'next/image';
import YellowLine from '../ui/YellowLine';

import shades from '../../../public/images/landing/road/shades.svg';
import vector1 from '../../../public/images/landing/road/Vector1.svg';
import vector2 from '../../../public/images/landing/road/Vector2.svg';
import vector3 from '../../../public/images/landing/road/Vector3.svg';
import vector4 from '../../../public/images/landing/road/Vector4.svg';

import line1 from '../../../public/images/landing/road/line1.svg';
import line2 from '../../../public/images/landing/road/line2.svg';
import airplan from '../../../public/images/landing/road/airplan.svg';

function RoadStep({
  icon,
  title,
  description,
  decoration,
  decorationClass = '',
  extra,
}: {
  icon: any;
  title: string;
  description: string;
  decoration?: any;
  decorationClass?: string;
  extra?: any;
}) {
  return (
    <div
      className='relative flex flex-col items-center justify-center bg-white border border-[#afafaf3b] rounded-full
    w-44 h-44 md:w-[200px] md:h-[200px] lg:w-[232px] lg:h-[232px] text-center p-4'
    >
      {/* خط تزئینی */}
      {decoration && (
        <Image
          src={decoration}
          alt='decoration'
          className={`absolute hidden md:block ${decorationClass}`}
        />
      )}

      {/* تزئین اضافی (مثل هواپیما) */}
      {extra && (
        <Image
          src={extra}
          alt='extra decoration'
          className='absolute hidden md:block -top-12 right-5'
        />
      )}

      <Image src={icon} alt={title} className='w-10 h-10 lg:w-16 lg:h-16' />
      <span className='text-button-btn-3 md:text-body-3 font-semibold mt-2'>
        {title}
      </span>
      <p className='text-b-6 md:text-body-4 font-medium mt-1'>{description}</p>
    </div>
  );
}

export default function Road() {
  return (
    <section
      id='road'
      className='relative bg-[#0065b5] md:rounded-2xl my-10 md:my-32 px-5 py-8 max-w-6xl 2xl:max-w-7xl mx-auto pb-10 -z-20'
    >
      {/* تصویر بک‌گراند با opacity */}
      <div
        id='road-img'
        className='absolute inset-0 w-full h-full opacity-10 -z-10'
      />

      {/* عنوان */}
      <div className='flex flex-col items-center gap-1'>
        <h2 className='text-headers-h4 text-white font-bold'>
          مسیر مهاجرت شما با ما
        </h2>
        <YellowLine />
      </div>

      {/* Steps */}
      <div className='flex flex-col items-center mt-6 -z-20'>
        <Image src={shades} alt='road shades' className='md:hidden' />
        <div className='md:h-[220px] w-full'>
          <div className='md:absolute w-full md:right-0 md:-bottom-20'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-7 gap-y-3 md:gap-0 place-items-center md:px-12 w-full relative'>
              <RoadStep
                icon={vector1}
                title='پرواز و استقرار کامل'
                description='کمک به اسکان کامل و انجام امور قانونی در کشور مقصد.'
                decoration={line1}
                decorationClass='-top-28 2xl:-top-24 2xl:-left-8 -left-5'
                extra={airplan}
              />
              <RoadStep
                icon={vector2}
                title='جمع‌آوری و تکمیل مدارک'
                description='راهنمایی برای جمع‌آوری مدارک، ترجمه، مصاحبه‌ها'
                decoration={line2}
                decorationClass='-top-10 lg:min-w-[115%] 2xl:min-w-[130%]'
              />
              <RoadStep
                icon={vector3}
                title='شروع پروسه'
                description='اختصاص یک نیروی پرونده در کنار تحقیق و توسعه'
                decoration={line2}
                decorationClass='-top-10 lg:min-w-[115%] 2xl:min-w-[130%]'
              />
              <RoadStep
                icon={vector4}
                title='مشاوره اولیه'
                description='از طریق تماس، چت آنلاین سایت یا شبکه‌های اجتماعی'
                decoration={line2}
                decorationClass='-top-10 lg:min-w-[115%] 2xl:min-w-[130%]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
