import React, { ReactNode } from 'react';

interface DialogProps {
    isOpen: boolean;
    closeOnOverlayClick?: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, closeOnOverlayClick, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 flex flex-col items-strech justify-center bg-black backdrop-blur-sm bg-opacity-50 ${className}`} onClick={closeOnOverlayClick ? onClose : undefined}>
            <div className='flex justify-center'>
                <div className='relative sm:min-w-[464px]' onClick={e => e.stopPropagation()}>
                    {children}
                    <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center ">
                        x
                    </button>
                </div>

            </div>
        </div>
    );
};

