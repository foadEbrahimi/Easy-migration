import Image from 'next/image';
import YellowLine from '../ui/YellowLine';

import dollar from '../../../public/images/landing/whyGerman/dollar.svg';
import calendar from '../../../public/images/landing/whyGerman/calendar.svg';
import flower from '../../../public/images/landing/whyGerman/flower.svg';
import building from '../../../public/images/landing/whyGerman/building.svg';
import germanPhoto from '../../../public/images/landing/whyGerman/german.png';

const features = [
  {
    id: 1,
    icon: dollar,
    text: 'اقتصاد قوی و بازار کار پویا',
    alt: 'آیکن اقتصاد',
  },
  {
    id: 2,
    icon: calendar,
    text: 'تحصیل رایگان و نظام آموزشی عالی',
    alt: 'آیکن تقویم',
  },
  {
    id: 3,
    icon: flower,
    text: 'امکان اقامت بلندمدت و شهروندی',
    alt: 'آیکن گل',
  },
  {
    id: 4,
    icon: building,
    text: 'کیفیت زندگی و خدمات رفاهی',
    alt: 'آیکن ساختمان',
  },
];

export default function WhyGerman() {
  return (
    <section className='mx-auto my-20 max-w-6xl px-5 2xl:max-w-7xl'>
      <div className='flex flex-col gap-11 md:flex-row md:items-start md:justify-between md:gap-32'>
        {/* متن سمت چپ */}
        <div className='flex-1 animate-fadeInUp'>
          <h2 className='mb-3 text-headers-h5 font-bold lg:text-headers-h3'>
            چرا آلمان را برای مهاجرت انتخاب کنیم؟
          </h2>
          <YellowLine />

          <ul className='mt-5 grid grid-cols-2 gap-y-6'>
            {features.map(feature => (
              <li
                key={feature.id}
                className='flex flex-col gap-3 transition-transform duration-300 hover:scale-105'
              >
                <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#008DFF] shadow-md shadow-blue-200'>
                  <Image src={feature.icon} alt={feature.alt} />
                </div>
                <span className='text-body-5 font-medium lg:text-body'>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex-1 animate-fadeInRight delay-200'>
          <div className='relative w-fit'>
            <div className='relative overflow-hidden rounded-b-4xl'>
              <Image
                src={germanPhoto}
                alt='تصویر شهری از آلمان'
                className='transition-transform duration-700 hover:scale-105'
              />
            </div>
            <div className='absolute -left-2 top-5 h-full w-full -z-10 rounded-4xl bg-gradient-to-b from-[#008DFF] to-[#005599] md:-left-10 md:top-14'></div>

            <div className='absolute -bottom-7 left-2 z-20 flex items-center gap-3 rounded-2xl bg-white px-3 py-2 shadow shadow-gray-300 lg:-bottom-20 lg:left-0 lg:px-6'>
              <span
                dir='ltr'
                className='text-headers-h4 font-bold text-[#F6CB32] lg:text-headers-h3'
              >
                +40 K
              </span>
              <span className='text-body-4 lg:text-body-2 lg:font-semibold'>
                مهاجر ایرانی راضی در آلمان
              </span>
            </div>

            <div className='absolute top-0 left-0 h-full w-full rounded-4xl bg-gradient-to-b from-[#0064b500] from-55% to-[#008DFF] to-95%'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
