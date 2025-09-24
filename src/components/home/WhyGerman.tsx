import Image from 'next/image';
import YellowLine from '../ui/YellowLine';

import dollar from '../../../public/images/whyGerman/dollar.svg';
import calendar from '../../../public/images/whyGerman/calendar.svg';
import flower from '../../../public/images/whyGerman/flower.svg';
import building from '../../../public/images/whyGerman/building.svg';
import germanPhoto from '../../../public/images/whyGerman/german.png';

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
    <section className='max-w-6xl 2xl:max-w-7xl mx-auto my-20 px-5'>
      <div className='flex flex-col md:flex-row gap-11 md:gap-32 md:items-start md:justify-between'>
        {/* متن سمت چپ */}
        <div className='flex-1'>
          <h2 className='text-headers-h5 lg:text-headers-h3 font-bold mb-3'>
            چرا آلمان را برای مهاجرت انتخاب کنیم؟
          </h2>
          <YellowLine />

          <ul className='grid grid-cols-2 gap-y-6 mt-5'>
            {features.map(feature => (
              <li key={feature.id} className='flex flex-col gap-3'>
                <div className='flex items-center justify-center w-14 h-14 rounded-full bg-[#008DFF]'>
                  <Image src={feature.icon} alt={feature.alt} />
                </div>
                <span className='font-medium text-body-5 lg:text-body'>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* تصویر سمت راست */}
        <div className='flex-1'>
          <div className='relative w-fit'>
            {/* تصویر اصلی */}
            <div className='relative'>
              <Image
                src={germanPhoto}
                alt='تصویر شهری از آلمان'
                className='rounded-b-4xl'
              />
              <div className='absolute top-5 md:top-14 -left-2 md:-left-10 -z-10 w-full h-full rounded-4xl bg-gradient-to-b from-[#008DFF] to-[#005599]' />
            </div>

            {/* باکس آمار */}
            <div className='absolute -bottom-7 lg:-bottom-20 left-2 lg:left-0 z-20 flex items-center gap-3 px-3 lg:px-6 py-2 bg-white rounded-2xl shadow shadow-gray-300'>
              <span
                dir='ltr'
                className='font-bold text-headers-h4 lg:text-headers-h3 text-[#F6CB32]'
              >
                +40 K
              </span>
              <span className='text-body-4 lg:text-body-2 lg:font-semibold'>
                مهاجر ایرانی راضی در آلمان
              </span>
            </div>

            {/* لایه گرادینت روی تصویر */}
            <div className='absolute top-0 left-0 w-full h-full rounded-4xl bg-gradient-to-b from-[#0064b500] from-55% to-[#008DFF] to-95%' />
          </div>
        </div>
      </div>
    </section>
  );
}
