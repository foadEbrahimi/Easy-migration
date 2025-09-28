import YellowLine from '@/components/ui/YellowLine';
import VblogCard from './VblogCard';

export default function Vblog() {
  return (
    <section className='bg-[#AEAEAE]/10'>
      <div className='mx-auto max-w-6xl 2xl:max-w-7xl px-5 py-8 pb-10'>
        {/* Header */}
        <div>
          <span className='text-body-5 font-medium'>آخرین خبرها</span>
          <h3 className='mt-2 mb-1 text-headers-h5 lg:text-headers-h3 font-bold'>
            مقالات آموزشی در این باره
          </h3>
          <YellowLine />
        </div>

        {/* Cards */}
        <div className='mt-8 flex flex-col items-center gap-5 md:flex-row'>
          <VblogCard />
          <VblogCard />
        </div>
      </div>
    </section>
  );
}
