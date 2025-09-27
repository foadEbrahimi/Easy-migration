import YellowLine from '../../ui/YellowLine';

import FeedbackSlider from './FeedbackSlider';
import FeedbackCard from './FeedbackCard';

export default function FeedBack() {
  return (
    <section className='my-12 md:my-20 px-5 py-8 max-w-6xl 2xl:max-w-7xl mx-auto pb-10'>
      <div className='md:flex md:flex-row gap-20 w-full'>
        <div className='md:!max-w-[23rem] !flex-1'>
          <span className='text-body-5 text-[#828282] font-medium'>
            مشتریان درباره ما چی میگن ؟
          </span>
          <h3 className='text-headers-h5 md:text-headers-h4 mt-2 mb-1 font-bold'>
            تجربه همکاری با ما از زبان مشتریان موفق ما
          </h3>
          <YellowLine />
        </div>
        <div className='mt-6 '>
          <FeedbackSlider>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </FeedbackSlider>
        </div>
      </div>
    </section>
  );
}
