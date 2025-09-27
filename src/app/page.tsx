import Faq from '@/components/home/faq/Faq';
import FeedBack from '@/components/home/feedback/FeedBack';
import Hero from '@/components/home/Hero';
import Road from '@/components/home/Road';
import Services from '@/components/home/services/Services';
import WhyGerman from '@/components/home/WhyGerman';
import WhyUs from '@/components/home/WhyUs';

export default function page() {
  return (
    <div>
      <Hero />
      <WhyGerman />
      <Services />
      <WhyUs />
      <Road />
      <FeedBack />
      <Faq />
    </div>
  );
}
