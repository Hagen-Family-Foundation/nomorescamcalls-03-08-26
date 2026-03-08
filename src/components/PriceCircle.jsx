import React from 'react';

const PriceCircle = ({ amount = "$12.99" }) => {
  return (
    <div className="w-20 h-20 rounded-full bg-red-600 border-4 border-black flex items-center justify-center text-white font-bold text-lg shadow-2xl mx-4">
      {amount}
    </div>
  );
};

export default PriceCircle;
