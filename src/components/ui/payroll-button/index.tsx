import React from 'react';
interface PayrollButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    extraClassName?: string;
}

export default function PayrollButton({ title, extraClassName, ...props }: PayrollButtonProps) {
    return (
        <button className={`font-medium bg-black text-white rounded-sm px-1  transition-all duration-200 ease-out hover:bg-white hover:text-black ${extraClassName}`} {...props }>
            { title }
        </button >
    );
};