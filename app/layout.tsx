import '@/styles/globals.css';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Link } from '@nextui-org/link';
import { solidenTrial } from '@/config/fonts';
import clsx from 'clsx';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={clsx('min-h-screen bg-background  font-sans antialiased', solidenTrial.variable)}
      >
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'dark',
            themes: ['light', 'dark', 'customTheme'],
          }}
        >
          <div className='relative  flex flex-col h-screen'>
            <main className='container  mx-auto max-w-7xl pt-16 px-6 flex-grow'>{children}</main>
            <footer className='w-full flex items-center justify-center py-3'>
              <Link
                isExternal
                className='flex items-center gap-1 text-current'
                href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template'
                title='nextui.org homepage'
              ></Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
