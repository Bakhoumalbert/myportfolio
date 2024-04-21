import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function LayoutBlog({ children }: PropsWithChildren) {
    return (
        <div
            className={cn(
                'max-w-4xl w-full flex justify-center mt-20'
            )}
        >
            {children}
        </div>
    );
};
