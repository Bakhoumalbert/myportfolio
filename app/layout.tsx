// app/layout.
import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';
import { SiteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/theme/ThemeProvider';
import type { Metadata } from 'next';
import { Anek_Telugu } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import './globals.css';
import { Spacing } from '@/ui/design-system/spacing/Spacing';

const AnekTelugu = Anek_Telugu({ 
  subsets: ['latin'], 
  variable: '--font-caption' 
});


export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  icons: SiteConfig.icon
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" className="h-full" suppressHydrationWarning>
        {/* <head /> */}
        <Head>
          {/* Ajoutez ici vos balises <head> supplémentaires */}
          <link rel="icon" href={SiteConfig.icon} />
          {/* <Image alt='logo' src="/assets/images/profil.jpg" /> */}
        </Head>
        <body
          className={cn(
            AnekTelugu.className,
            GeistSans.variable,
            GeistMono.variable,
            'font-sans h-full bg-background text-foreground',
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full border-b border-border/20">
              <div className="m-auto flex-1 ">
                <Header/>
                <Spacing />
                  {children}
                <Footer/>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
