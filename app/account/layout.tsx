/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef } from 'react';

export default function (props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            {...props}
            className={cn(
                'max-w-4xl w-full flex gap-4 m-auto',
                props.className
            )}
        />
    );
};

export const LayoutHeader = (props: ComponentPropsWithoutRef<'div'>) => {
    return (
        <div
            {...props}
            className={cn(
                'flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]',
                props.className
            )}
        />
    );
};

