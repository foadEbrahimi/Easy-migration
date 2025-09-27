'use client';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

export default function FeedbackSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: true,
    created(slider) {
      setTotal(slider.track.details.slides.length);
    },
    slideChanged(slider) {
      setCurrent(slider.track.details.rel);
    },
    breakpoints: {
      '(max-width: 500px)': {
        slides: {
          perView: 1.2,
          spacing: 10,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 1.7,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },
  });

  return (
    <div>
      <div
        ref={sliderRef}
        className='keen-slider pb-4 !overflow-y-visible md:max-w-[30rem] lg:max-w-[45rem] xl:max-w-[50rem]'
      >
        {children}
      </div>

      {total > 0 && (
        <div className='dots'>
          {Array.from({ length: total }).map((_, idx) => (
            <button
              key={idx}
              className={idx === current ? 'dot active' : 'dot'}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
