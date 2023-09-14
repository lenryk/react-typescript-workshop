import React from 'react';

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  // we set the click handler to MouseEventHandler from React
  onClick: React.MouseEventHandler
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
