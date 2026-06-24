import Image from 'next/image';
import { useTranslations } from 'next-intl';

import phone from '../../../../../public/images/layout/phone.svg';

export default function Info() {
  const t = useTranslations('Contact');
  return (
    <div className='space-y-4 flex-1'>
      <span className='bg-primary px-2 text-white text-button-btn font-medium md:px-4 py-2 rounded-lg'>
        {t('infoTitle')}
      </span>
      <div className='space-y-4 max-w-[500px]'>
        <h1 className='text-headers-h4 md:text-headers-h3 mt-5 font-bold'>
          {t('infoHeading')}
        </h1>
        <p className='text-body-4 text-[#5E5E5E] font-medium'>
          {t('infoDescription')}
        </p>
      </div>
      <div className='flex flex-col gap-4 mt-5 md:gap-10 md:flex-row md:items-center'>
        <div className='flex items-center gap-2'>
          <div className='bg-primary rounded-full w-12 h-12 flex items-center justify-center'>
            <Image src={phone} alt='phone' />
          </div>
          <div className='flex flex-col '>
            <b className='text-body-3'>{t('officeAddress')}</b>
            <span className='text-button-btn-2 font-medium text-[#606060]'>
              {t('addressValue')}
            </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-primary rounded-full w-12 h-12 flex items-center justify-center'>
            <Image src={phone} alt='phone' />
          </div>
          <div className='flex flex-col '>
            <b className='text-body-3'>{t('supportPhone')}</b>
            <span className='text-button-btn-2 font-medium text-[#606060]'>
              021123456789
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
