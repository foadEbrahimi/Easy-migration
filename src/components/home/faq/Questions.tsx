'use client';
import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function Questions() {
  const t = useTranslations('HomePage.Questions');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const faqData = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className='max-w-2xl mx-auto py-8 space-y-4'>
      {faqData.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className='bg-[#F7F7F7] px-5 py-4 rounded-2xl'>
            {/* سوال */}
            <button
              className='w-full flex justify-between items-center text-button-btn-3 md:text-button-btn text-[#000] hover:text-primary transition-colors duration-300'
              onClick={() => toggle(idx)}
            >
              {item.q}
              <span className='text-2xl font-bold text-[#F6CB32]'>
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {/* جواب */}
            <div
              ref={el => {
                contentRefs.current[idx] = el;
              }}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[idx]?.scrollHeight || 0}px`
                  : '0px',
                transition: 'max-height 0.35s ease',
              }}
              className='overflow-hidden'
            >
              <div className='bg-[#E6E6E6] h-[1px] my-3 w-[90%] mx-auto'></div>
              <p className='mt-2 font-medium text-[#5A5959] lg:text-body-4 text-body-5'>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
