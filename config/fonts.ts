import localFont from 'next/font/local';
import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const solidenTrial = localFont({
  src: [
    {
      path: '../public/fonts/SolidenTrial-Light.otf',
      style: 'light',
      weight: '400',
    },
    {
      path: '../public/fonts/SolidenTrial-Regular.otf',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../public/fonts/SolidenTrial-Bold.otf',
      style: 'bold',
      weight: '700',
    },
    {
      path: '../public/fonts/SolidenTrial-Black.otf',
      style: 'black',
      weight: '900',
    },
  ],
  variable: '--font-soliden-trial',
});
