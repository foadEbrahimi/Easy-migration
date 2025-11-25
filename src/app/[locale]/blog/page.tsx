import Image from 'next/image';
import search from '../../../public/images/blog/search.svg';
import VblogCard from '@/components/home/blog/VblogCard';

export const metadata = {
  title: 'وبلاگ',
};
export default function page() {
  return (
    <div className='mx-auto my-5 max-w-6xl px-5 2xl:max-w-7xl'>
      <div className='md:flex md:flex-row md:gap-6 md:items-center'>
        <div className='lg:w-[15rem]'>
          <div className='bg-primary w-full flex items-center gap-1 cursor-pointer text-white text-body-5 rounded-full px-5 py-3 text-center lg:text-body-3'>
            خانه
            <span className='text-[#F6CB32]'>/</span>
            وبلاگ
          </div>
        </div>
        <div className='flex items-center rounded-full gap-2 mt-3 md:mt-0 border border-primary px-5 py-2'>
          <Image src={search} alt='' className='w-5' />
          <input
            type='text'
            className='outline-none lg:w-[15rem] w-full !text-[#000000] placeholder:text-body-4 font-medium text-body-4'
            placeholder='جستجو'
          />
        </div>
      </div>

      <div className='grid md:grid-cols-2 mt-7 items-center justify-center w-full gap-5'>
        <VblogCard />
        <VblogCard />
        <VblogCard />
        <VblogCard />
      </div>
    </div>
  );
}
