import Image from 'next/image';

import instagram from '../../../public/images/layout/footer/instagram.svg';
import linkedin from '../../../public/images/layout/footer/linkedin.svg';
import telegram from '../../../public/images/layout/footer/telegram.svg';
import whatsapp from '../../../public/images/layout/footer/whatsapp.svg';
import logo from '../../../public/images/logo.svg';
import gmail from '../../../public/images/layout/footer/gmail.svg';
import phone from '../../../public/images/layout/phone-blue.svg';
import airplan from '../../../public/images/layout/footer/airplan.svg';

const quickLinks = [
  { id: 1, label: 'خدمات', href: '/' },
  { id: 2, label: 'سوالات متداول', href: '/' },
  { id: 3, label: 'وبلاگ', href: '/' },
  { id: 4, label: 'تجربه مشتریان', href: '/' },
];

const socials = [
  { id: 1, icon: telegram, href: 'https://t.me/', label: 'تلگرام' },
  { id: 2, icon: whatsapp, href: 'https://wa.me/', label: 'واتساپ' },
  {
    id: 3,
    icon: instagram,
    href: 'https://instagram.com/',
    label: 'اینستاگرام',
  },
  { id: 4, icon: linkedin, href: 'https://linkedin.com/', label: 'لینکدین' },
];

export default function Footer() {
  return (
    <footer className='bg-[#008DFF] md:rounded-t-[45px] p-5 pb-4 md:mx-4'>
      {/* لوگو */}
      <div className='flex items-center gap-2 justify-center mb-6'>
        <Image src={logo} alt='logo' className='w-12 lg:w-16' />
        <span className='text-2xl font-diba text-white'>
          مهاجرت <span className='text-[#f6cb32]'>آسان</span>
        </span>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto'>
        {/* دسترسی سریع */}
        <div className='md:order-1'>
          <div className='flex flex-col mt-11 md:flex-row md:justify-center items-start gap-5 lg:gap-12 mb-8'>
            <span className='font-bold text-white text-xl'>دسترسی سریع</span>
            <ul className='flex flex-wrap justify-center md:justify-start gap-6 lg:gap-14 text-[#DEDEDE] font-medium'>
              {quickLinks.map(link => (
                <li
                  key={link.id}
                  className="relative cursor-pointer hover:text-white transition-all duration-300
                    after:content-[''] after:absolute after:w-0 after:h-[2px]
                    after:bg-[#f6cb32] after:-bottom-1 after:right-0
                    hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* هواپیما و شبکه‌های اجتماعی (دسکتاپ) */}
          <div className='hidden md:block'>
            <Image
              src={airplan}
              alt='airplan svg'
              className='w-[80%] mx-auto my-4'
            />
            <SocialLinks />
          </div>
        </div>

        {/* تماس در موبایل */}
        <div className='flex md:hidden mt-4 justify-between'>
          <ContactBlock title='شماره تماس' value='09166663737' />
          <ContactBlock title='ایمیل' value='omidinjoker@gmail.com' />
        </div>

        {/* تماس در دسکتاپ */}
        <div className='hidden md:flex md:flex-col md:items-center md:gap-4 md:order-0'>
          <ContactBlock title='شماره تماس' value='09166663737' icon={phone} />
        </div>
        <div className='hidden md:flex md:flex-col md:items-center md:gap-4 md:order-2'>
          <ContactBlock
            title='ایمیل'
            value='omidinjoker@gmail.com'
            icon={gmail}
          />
        </div>
      </div>

      {/* شبکه‌های اجتماعی در موبایل */}
      <div className='md:hidden'>
        <Image src={airplan} alt='airplan' className='w-[80%] mx-auto my-4' />
        <SocialLinks />
      </div>

      {/* کپی‌رایت */}
      <span className='font-medium text-white flex justify-center mt-5 text-sm md:text-base hover:text-[#f6cb32] transition-colors duration-300'>
        طراحی رابط کاربری توسط امید مرمزی ©
      </span>
    </footer>
  );
}

/* --- Components --- */
function SocialLinks() {
  return (
    <div className='flex items-center justify-center gap-6 mb-6'>
      {socials.map(item => (
        <a
          key={item.id}
          href={item.href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={item.label}
          className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md
            hover:scale-110 hover:bg-[#f6cb32] transition-transform duration-300'
        >
          <Image src={item.icon} alt={item.label} className='size-5' />
        </a>
      ))}
    </div>
  );
}

function ContactBlock({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon?: any;
}) {
  return (
    <div className='flex flex-col gap-4 items-center md:items-center'>
      <span className='text-xl font-bold text-white'>{title}</span>
      <span className='font-medium text-white'>{value}</span>
      {icon && (
        <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
          <Image src={icon} alt={title} className='w-5 h-5' />
        </div>
      )}
    </div>
  );
}
