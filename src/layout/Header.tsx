// src/components/layout/Header.

import { SiteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Container } from "@/ui/components/container/Container";
import { ThemeToggle } from "@/theme/ThemeToggle";

export function Header() {
    return (
        <header className="py-4">
            <Container className="flex items-baseline border-b-2 border-collapse">
                <Link href="/">
                    <h1 className="text-base font-bold text-muted-foreground hover:text-primary">
                            {SiteConfig.title}
                    </h1>
                </Link>
                <div className="flex-1">
                <ul className="flex flex-1 items-center justify-end space-x-4">
                    <Link href={"/blog"} className="text-muted-foreground hover:text-primary">
                        Blog
                    </Link>
                    <ThemeToggle />
                </ul>
                </div>
            </Container>
        </header>
    );
}
