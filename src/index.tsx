import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const CustomButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: variant === 'primary' ? '#ff7bff' : '#6c757d',
        color: 'yellow',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      {children}
    </button>
  );
};

export const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return <h1>Hello, {name}! Welcome from Example A!</h1>;
};