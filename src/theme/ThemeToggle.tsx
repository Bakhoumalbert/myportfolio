// src/components/ThemeToggle.
'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === "light" ? 
            <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" /> :
            <Moon className=" h-[1.5rem] w-[1.3rem] dark:block" />
            }
        </Button>
    );
}
