import localFont from 'next/font/local';

export const myFont = localFont({
  src: [
    {
      path: '../public/fonts/noxagothic-rough.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-mycustom',
});
