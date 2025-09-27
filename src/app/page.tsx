import Hero from '@/components/home/Hero';
import WhyGerman from '@/components/home/WhyGerman';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import Road from '@/components/home/Road';
import FeedBack from '@/components/home/FeedBack';

export default function page() {
  return (
    <div>
      <Hero />
      <WhyGerman />
      <Services />
      <WhyUs />
      <Road />
      <FeedBack />
    </div>
  );
}
