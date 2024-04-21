"use client"
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

export const useIsClient = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [isClient]);

    return isClient;
}

export const ClientOnly = ({ children, fallback }: PropsWithChildren<{ fallback: ReactNode }>) => {

    const isClient = useIsClient();

    if (!isClient) {
        return <>{fallback}</>;
    }

    return <>{children}</>
}