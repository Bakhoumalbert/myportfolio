// src/components/layout/Header.

import { Button } from "@/components/ui/button";
import { ClientOnly } from "@/hook/isClient";
import { SiteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/theme/ThemeToggle";
import { Container } from "@/ui/components/container/Container";
import { Sun } from "lucide-react";
import Link from "next/link";

export async function Header() {

    // const session = await getAuthSession();

    // console.log("Session : ", session);
    
    // const isUserBakhoum = session?.user?.email === 'bakhoum.albert@uam.edu.sn';

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
                    <nav className="flex space-x-1">
                        {/* {isUserBakhoum ?? 
                        } */}
                        {/* <AuthButton /> */}
                            <ClientOnly fallback={<Button
                                variant="ghost"
                                size="icon"
                            >
                                    <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
                            </Button> }>
                            <ThemeToggle />
                        </ClientOnly>
                    </nav>
                </ul>
                </div>
            </Container>
        </header>
    );
}
