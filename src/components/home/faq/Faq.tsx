import YellowLine from '../../ui/YellowLine';
import Questions from './Questions';

export default function Faq() {
  return (
    <section className='px-5 py-8 max-w-6xl 2xl:max-w-7xl mx-auto pb-10'>
      {/* عنوان و توضیحات */}
      <div className='space-y-5 text-center'>
        <div className='space-y-2 w-fit mx-auto'>
          <h3 className='text-headers-h5 md:text-headers-h3 font-bold'>
            سوالات پر تکرار شما
          </h3>
          <YellowLine />
        </div>
        <p className='text-body-5 md:text-body-4 max-w-sm mx-auto font-medium'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </p>
      </div>

      {/* بخش آکاردئون سوالات */}
      <Questions />
    </section>
  );
}
