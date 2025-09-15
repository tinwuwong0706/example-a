import React from 'react';
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}
export declare const CustomButton: React.FC<ButtonProps>;
export declare const Greeting: React.FC<{
    name: string;
}>;
