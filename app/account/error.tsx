'use client';
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { LoginButton } from "@/features/auth/LoginButton";
import { useEffect } from "react";

 // Error components must be Client Components


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Card className="m-auto mt-4 max-w-lg">
            <CardHeader>
                <CardTitle>Vous devez vous connecter pour voir cette page!</CardTitle>
            </CardHeader>
            <CardFooter>
                <LoginButton />
            </CardFooter>
        </Card>
    );
}