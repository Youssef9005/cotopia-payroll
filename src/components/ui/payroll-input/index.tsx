import React from 'react';

interface PayrollInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    inputId: string;
    showLabel?: boolean;
}

export default function PayrollInput({ label, inputId, showLabel = true, ...props }: PayrollInputProps) {
    return (
        <label htmlFor={inputId} className="flex flex-col gap-y-2 flex-1">
            {showLabel && (
                <span className="ml-1 font-medium text-base text-gray-700 dark:text-gray-300">{label}</span>
            )}
            <input
                type="text"
                id={inputId}
                className="py-2 px-4 rounded-sm bg-gray-300 dark:bg-gray-900/20 border border-gray-400 dark:border-gray-700 outline-none transition-all duration-150 ease-out focus:border-gray-600 placeholder:font-medium placeholder:text-sm font-medium"
                placeholder={`Enter ${label}`}
                {...props}
            />
        </label>
    );
}