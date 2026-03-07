import React, { useEffect, useState } from 'react';
import { AnimatedCounter } from '../AnimatedCounter';

const mockData = [
  {
    protection: '📞 PHONE PROTECTION (BLOCKED)',
    total: 1247,
    potentialLoss: 3741,
    timeSaved: 42
  },
  {
    protection: '📱 TEXT PROTECTION (NOTED)',
    total: 893,
    potentialLoss: 1892,
    timeSaved: 28
  },
  {
    protection: '📧 EMAIL PROTECTION (NOTED)',
    total: 2104,
    potentialLoss: 5621,
    timeSaved: 61
  },
  {
    protection: '🌐 WEB PROTECTION (NOTED)',
    total: 671,
    potentialLoss: 2103,
    timeSaved: 19
  }
];

export const PhoneTextEmailWebGrid = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg p-8 md:p-10 overflow-x-auto" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="min-w-[800px]">
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-6">
          {/* Top-left corner cell (empty) */}
          <div></div>
          
          {/* Column Headers - 20px Navy Bold */}
          <div className="text-center pb-4 border-b border-gray-200">
            <h3 className="text-[20px] font-bold text-[#1e3a8a] leading-tight">
              TOTAL<br/>NOTED/BLOCKED
            </h3>
          </div>
          <div className="text-center pb-4 border-b border-gray-200">
            <h3 className="text-[20px] font-bold text-[#1e3a8a] leading-tight">
              POTENTIAL $$<br/>LOSS AVOIDED
            </h3>
          </div>
          <div className="text-center pb-4 border-b border-gray-200">
            <h3 className="text-[20px] font-bold text-[#1e3a8a] leading-tight">
              TIME SAVED<br/>(hours)
            </h3>
          </div>

          {/* Data Rows */}
          {mockData.map((row, index) => (
            <React.Fragment key={index}>
              {/* Protection Name (Left Column) - 24px Navy */}
              <div className="flex items-center py-6 border-b border-gray-100">
                <h4 className="text-[24px] font-normal text-[#1e3a8a] leading-tight">
                  {row.protection}
                </h4>
              </div>
              
              {/* Total Noted/Blocked Cell */}
              <div className="flex flex-col items-center justify-center py-6 border-b border-gray-100 border-l border-gray-100">
                <p className="text-[18px] font-bold text-yellow-400 mb-1">
                  {animate ? (
                    <AnimatedCounter value={row.total} duration={2000} />
                  ) : (
                    '0'
                  )}
                </p>
              </div>
              
              {/* Potential Loss Cell */}
              <div className="flex flex-col items-center justify-center py-6 border-b border-gray-100 border-l border-gray-100">
                <p className="text-[18px] font-bold text-yellow-400 mb-1">
                  {animate ? (
                    <>
                      $<AnimatedCounter value={row.potentialLoss} duration={2000} />
                    </>
                  ) : (
                    '$0'
                  )}
                </p>
              </div>
              
              {/* Time Saved Cell */}
              <div className="flex flex-col items-center justify-center py-6 border-b border-gray-100 border-l border-gray-100">
                <p className="text-[18px] font-bold text-yellow-400 mb-1">
                  {animate ? (
                    <>
                      <AnimatedCounter value={row.timeSaved} duration={2000} />h
                    </>
                  ) : (
                    '0h'
                  )}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Mobile Notice - 14px gray */}
      <div className="md:hidden mt-6 text-center text-gray-500 text-[14px]">
        <p>Scroll horizontally to view all metrics →</p>
      </div>
    </div>
  );
};
