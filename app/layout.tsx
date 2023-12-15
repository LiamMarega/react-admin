import '@/styles/globals.css';
import { Providers } from './providers';
import { Link } from '@nextui-org/link';
import { solidenTrial } from '@/config/fonts';
import clsx from 'clsx';
import { Navbar } from '@/components/navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen font-sans antialiased', solidenTrial.variable)}>
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'light',
            themes: ['light', 'dark', 'customTheme'],
          }}
        >
          <div className='relative light:bg-white flex flex-col h-full'>
            <Navbar />
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
