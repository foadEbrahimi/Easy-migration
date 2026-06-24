import { StaticImageData } from 'next/image';
import Blog1 from '../../public/images/landing/vblog/blog1.png';

export interface BlogPost {
  id: string;
  image: StaticImageData;
  en: {
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
  };
  fa: {
    title: string;
    description: string;
    content: string;
    author: string;
    date: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    image: Blog1,
    en: {
      title: 'The easiest immigration method established',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      `,
      author: 'ParastarSho Team',
      date: 'Nov 28, 2025',
    },
    fa: {
      title: 'آسان‌ترین روش مهاجرت ایجاد شد',
      description:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
      content: `
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
      `,
      author: 'تیم پرستارشو',
      date: '۲۸ آبان ۱۴۰۴',
    },
  },
  {
    id: '2',
    image: Blog1,
    en: {
      title: 'Work visa opportunities for nurses',
      description:
        'Discover the best work visa opportunities available for nurses looking to work in Germany.',
      content: `
        <p>Germany is facing a significant shortage of healthcare professionals, creating excellent opportunities for nurses from around the world. The German government has implemented several initiatives to attract qualified nursing staff.</p>
        <p>The work visa process for nurses has been streamlined in recent years. With the right qualifications and language skills, you can secure a work visa and start your career in Germany.</p>
        <p>Requirements typically include recognized nursing qualifications, German language proficiency at B1 level or higher, and a job offer from a German employer. Many hospitals and care facilities actively recruit international nurses.</p>
        <p>Once employed, nurses in Germany enjoy competitive salaries, comprehensive benefits, and opportunities for professional development. The path to permanent residency is also available after several years of work.</p>
      `,
      author: 'ParastarSho Team',
      date: 'Dec 15, 2025',
    },
    fa: {
      title: 'فرصت‌های ویزای کاری برای پرستاران',
      description:
        'بهترین فرصت‌های ویزای کاری موجود برای پرستارانی که به دنبال کار در آلمان هستند را کشف کنید.',
      content: `
        <p>آلمان با کمبود قابل توجهی از متخصصان مراقبت های بهداشتی روبرو است که فرصت های عالی را برای پرستاران از سراسر جهان ایجاد می کند. دولت آلمان ابتکارات متعددی را برای جذب کارکنان پرستاری واجد شرایط اجرا کرده است.</p>
        <p>فرآیند ویزای کاری برای پرستاران در سال های اخیر ساده‌تر شده است. با داشتن مدارک مناسب و مهارت های زبانی، می توانید ویزای کار را دریافت کرده و حرفه خود را در آلمان آغاز کنید.</p>
        <p>شرایط معمول شامل مدارک پرستاری معتبر، مهارت زبان آلمانی در سطح B1 یا بالاتر و پیشنهاد شغلی از یک کارفرمای آلمانی است. بسیاری از بیمارستان‌ها و مراکز درمانی به طور فعال پرستاران بین‌المللی را جذب می‌کنند.</p>
        <p>پس از استخدام، پرستاران در آلمان از حقوق رقابتی، مزایای جامع و فرصت‌هایی برای توسعه حرفه‌ای برخوردار می‌شوند. مسیر اقامت دائم نیز پس از چند سال کار در دسترس است.</p>
      `,
      author: 'تیم پرستارشو',
      date: '۲۵ آذر ۱۴۰۴',
    },
  },
  {
    id: '3',
    image: Blog1,
    en: {
      title: 'Student visa: Study nursing in Germany',
      description:
        'Learn about the requirements and benefits of studying nursing in Germany as an international student.',
      content: `
        <p>Germany offers world-class education in nursing and healthcare fields. International students can benefit from low tuition fees and excellent training facilities.</p>
        <p>To apply for a student visa, you will need proof of admission to a recognized German institution, sufficient financial resources, and health insurance coverage.</p>
        <p>German nursing programs combine theoretical knowledge with practical training in hospitals and care facilities. This hands-on approach ensures graduates are well-prepared for their careers.</p>
        <p>After graduation, international students have the opportunity to stay in Germany and work as nurses, with a clear pathway to permanent residency.</p>
      `,
      author: 'ParastarSho Team',
      date: 'Jan 10, 2026',
    },
    fa: {
      title: 'ویزای تحصیلی: تحصیل پرستاری در آلمان',
      description:
        'با الزامات و مزایای تحصیل پرستاری در آلمان به عنوان یک دانشجوی بین‌المللی آشنا شوید.',
      content: `
        <p>آلمان آموزش در سطح جهانی در زمینه پرستاری و مراقبت های بهداشتی ارائه می دهد. دانشجویان بین‌المللی می توانند از شهریه کم و امکانات آموزشی عالی بهره‌مند شوند.</p>
        <p>برای درخواست ویزای تحصیلی، به مدرک پذیرش از یک موسسه معتبر آلمانی، منابع مالی کافی و پوشش بیمه درمانی نیاز دارید.</p>
        <p>برنامه‌های پرستاری آلمان دانش نظری را با آموزش عملی در بیمارستان‌ها و مراکز درمانی ترکیب می‌کند. این رویکرد عملی تضمین می‌کند که فارغ‌التحصیلان به خوبی برای حرفه خود آماده هستند.</p>
        <p>پس از فارغ‌التحصیلی، دانشجویان بین‌المللی این فرصت را دارند که در آلمان بمانند و به عنوان پرستار کار کنند، با مسیر روشنی برای اقامت دائم.</p>
      `,
      author: 'تیم پرستارشو',
      date: '۲۰ دی ۱۴۰۴',
    },
  },
];

export function getBlogPost(id: string, locale: string) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return null;
  const lang = locale === 'fa' ? post.fa : post.en;
  return {
    id: post.id,
    image: post.image,
    ...lang,
  };
}

export function getLocalizedPosts(locale: string) {
  return blogPosts.map(post => {
    const lang = locale === 'fa' ? post.fa : post.en;
    return {
      id: post.id,
      image: post.image,
      ...lang,
    };
  });
}
