import React from 'react';
import { useBrand } from '../context/BrandContext';

export const ShieldLogo = ({ className = "h-8 w-8", color }) => {
  const brand = useBrand();
  const logoColor = color || brand.colors.primary;
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 5 L15 20 L15 45 C15 70 50 95 50 95 C50 95 85 70 85 45 L85 20 L50 5 Z"
        stroke={logoColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
