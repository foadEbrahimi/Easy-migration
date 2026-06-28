import localFont from 'next/font/local';

export const peyda = localFont({
  src: [
    {
      path: '/font/Peyda-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '/font/Peyda-extralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '/font/Peyda-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/font/Peyda-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/font/Peyda-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/font/Peyda-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/font/Peyda-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/font/Peyda-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '/font/Peyda-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-peyda',
  display: 'swap',
});
