import { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`bg-dark-500 border border-dark-300 rounded-lg px-5 py-6 ${className || ""}`}>
            {children}
        </div>
    );
};
