import React from 'react';
interface PayrollButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export default function PayrollButton({ title, ...props }: PayrollButtonProps) {
    return (
        <button className='font-medium bg-black rounded-sm px-1 transition-all duration-200 ease-out hover:bg-white hover:text-black' {...props}>
            {title}
        </button>
    );
};