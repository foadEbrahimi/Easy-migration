import YellowLine from '../ui/YellowLine';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id='services' className='my-10 py-5'>
      <div className='max-w-6xl 2xl:max-w-7xl mx-auto px-5 py-8'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-headers-h5 lg:text-headers-h3 font-bold mb-3'>
            خدمات ما
          </h2>
          <YellowLine />
          <p className='text-body-4 lg:text-body-2 lg:font-semibold font-medium mt-3'>
            خدمات مورد نیاز خود را از لیست ما انتخاب کنید
          </p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 lg:mt-6'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
}
