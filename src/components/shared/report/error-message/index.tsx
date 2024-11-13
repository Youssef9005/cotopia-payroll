import React from "react";

interface ErrorMessageProps {
    error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <p className="text-red-500 mt-2">{error}</p>
    )
}


