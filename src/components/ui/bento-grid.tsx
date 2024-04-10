import { cn } from "@/lib/utils";
import { Code } from "@/ui/modules/hero-top/component/Top-hero";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-2 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    link
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    link: string;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black bg-secondary-950/15  justify-between flex flex-col space-y-2 rounded",
                className
            )}
        >
            {header}
            <div className=" flex-[2] group-hover/bento:translate-x-2 transition duration-200">
                <div className="font-caption font-bold mb-1 mt-1">
                    {title}
                </div>
                <div className="font-caption font-normal text-sm">
                    {description}
                </div>
                <div className="mt-2">
                <Link href={link}>
                    <Code className="inline-flex items-center">
                        Consulter
                        <ArrowUpRight size={16} />
                    </Code>
                </Link>
                </div>
                </div>
        </div>
    );
};
