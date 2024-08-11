import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ fullWidth, children, className, disabled, ...props }) => {
    if (children === undefined) {
        return null;
    }

    return (
        <button
            className={`bg-accent-500 text-center text-white text-base leading-none font-medium py-3 px-4 rounded outline-none ${fullWidth ? 'w-full' : 'w-fit'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent-500/80 focus:bg-accent-500/90'} transition-colors duration-200 ${className ? className : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

