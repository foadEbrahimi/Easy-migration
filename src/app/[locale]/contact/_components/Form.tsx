'use client';
import { useTranslations } from 'next-intl';

export default function Form() {
  const t = useTranslations('ContactForm');
  return (
    <div className='shadow-lg flex-1 px-4 py-7 border border-black/5'>
      <span className='text-body-4 font-medium'>
        {t('subtitle')}
      </span>
      <form className='mt-7 flex flex-col gap-6'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex flex-1 flex-col gap-2'>
            <label htmlFor='phoneNumber' className='text-body-3 font-medium'>
              {t('phoneLabel')}
            </label>
            <input
              id='phoneNumber'
              placeholder={t('phonePlaceholder')}
              className='border outline-none focus:ring-primary focus:ring-2 border-[#DCDCDC] rounded-lg w-full placeholder:text-body-5 placeholder:text-[#959090] p-4 placeholder:font-medium'
              type='number'
              inputMode='numeric'
            />
          </div>
          <div className='flex flex-col flex-1 gap-2'>
            <label htmlFor='fullName' className='text-body-3 font-medium'>
              {t('nameLabel')}
            </label>
            <input
              id='fullName'
              placeholder={t('namePlaceholder')}
              className='border outline-none focus:ring-primary focus:ring-2 border-[#DCDCDC] rounded-lg w-full placeholder:text-body-5 placeholder:text-[#959090] p-4 placeholder:font-medium'
              type='text'
            />
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-2'>
          <label htmlFor='comment' className='text-body-3 font-medium'>
            {t('commentLabel')}
          </label>
          <textarea
            id='comment'
            placeholder={t('commentPlaceholder')}
            className='border outline-none focus:ring-primary focus:ring-2 border-[#DCDCDC] rounded-lg w-full placeholder:text-body-5 placeholder:text-[#959090] p-4 placeholder:font-medium'
          />
        </div>
        <button className='w-full text-white hover:bg-secondary transition-all duration-300 cursor-pointer bg-primary rounded-lg text-button-btn font-medium p-3'>
          {t('submitBtn')}
        </button>
      </form>
    </div>
  );
}
