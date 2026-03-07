import React from 'react';

export const MetricBox = ({ children, variant = 'navy', className = '' }) => {
  const baseStyles = 'border border-[#1E3A8A] bg-white p-5 font-bold';
  
  const variantStyles = {
    navy: 'text-[#1E3A8A]',
    yellow: 'text-[#FCD34D]'
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};
