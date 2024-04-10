import clsx from "clsx"

interface Props {
    children: React.ReactNode
    className?: string
}

export const Container = ({ children, className }: Props) => {
    return (
        <div className={clsx(className, "max-w-3xl m-auto px-4")}>
            {children}
        </div>
    )
}
