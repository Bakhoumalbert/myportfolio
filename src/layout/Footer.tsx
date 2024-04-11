"use client"
import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { Typography } from '../ui/design-system/typography/Typography';

export const Footer = () => {
    return (
        <footer className="w-full border-t border-card">
            <div className="m-auto w-full max-w-3xl px-2 py-4">
                <div className="flex flex-row items-center md:items-start justify-between">
                    <div className="flex flex-col items-start gap-2">
                        <Link href='/' className=''>
                            <h3 className='text-muted-foreground '>
                                {SiteConfig.title}
                            </h3>
                        </Link>

                    </div>
                    <div className="flex flex-col justify-start  gap-2 text-sm ">
                        <h3>
                            <Link href="/blog" className='text-muted-foreground'>
                                    Blog
                            </Link>
                        </h3>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <h3 className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Developed by 💗 {SiteConfig.title}
                    </h3>
                </div>
            </div>
        </footer>
    );
};

