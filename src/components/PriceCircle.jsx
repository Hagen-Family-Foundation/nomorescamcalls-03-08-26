import React from 'react';

const PriceCircle = ({ amount = "$12.99" }) => {
  return (
    <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full border-3 border-red-500">
      <span className="text-sm font-bold text-red-500">{amount}</span>
      <span className="absolute w-16 h-0.5 bg-red-500 rotate-45"></span>
    </span>
  );
};

export default PriceCircle;
