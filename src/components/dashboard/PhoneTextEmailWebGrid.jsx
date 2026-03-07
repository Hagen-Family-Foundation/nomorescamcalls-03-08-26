import React, { useEffect, useState } from 'react';
import { AnimatedCounter } from '../AnimatedCounter';

const mockData = [
  {
    protection: 'Phone Protection',
    blocked: 234,
    moneySaved: 208800,
    timeSaved: 175.5
  },
  {
    protection: 'Text Protection',
    blocked: 893,
    moneySaved: 1071600,
    timeSaved: 669.75
  },
  {
    protection: 'Email Protection',
    blocked: 2104,
    moneySaved: 2524800,
    timeSaved: 1578
  },
  {
    protection: 'Web Protection',
    blocked: 671,
    moneySaved: 805200,
    timeSaved: 503.25
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
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-6">
          {/* Top-left corner cell (empty) */}
          <div></div>
          
          {/* Column Headers */}
          <div className="text-center">
            <h3 className="text-blue-900 font-bold text-2xl md:text-3xl">
              Total Blocked
            </h3>
          </div>
          <div className="text-center">
            <h3 className="text-blue-900 font-bold text-2xl md:text-3xl">
              Potential $$ Saved
            </h3>
          </div>
          <div className="text-center">
            <h3 className="text-blue-900 font-bold text-2xl md:text-3xl">
              Potential Time Saved
            </h3>
          </div>

          {/* Data Rows */}
          {mockData.map((row, index) => (
            <React.Fragment key={index}>
              {/* Protection Name (Left Column) */}
              <div className="flex items-center">
                <h4 className="text-blue-900 font-bold text-2xl md:text-3xl">
                  {row.protection}
                </h4>
              </div>
              
              {/* Total Blocked */}
              <div className="flex items-center justify-center bg-blue-50 rounded-xl p-6">
                <p className="text-yellow-400 font-bold text-4xl md:text-5xl">
                  {animate ? (
                    <AnimatedCounter value={row.blocked} duration={2000} />
                  ) : (
                    '0'
                  )}
                </p>
              </div>
              
              {/* Money Saved */}
              <div className="flex items-center justify-center bg-blue-50 rounded-xl p-6">
                <p className="text-yellow-400 font-bold text-4xl md:text-5xl">
                  {animate ? (
                    <>
                      $<AnimatedCounter value={row.moneySaved} duration={2000} />
                    </>
                  ) : (
                    '$0'
                  )}
                </p>
              </div>
              
              {/* Time Saved */}
              <div className="flex items-center justify-center bg-blue-50 rounded-xl p-6">
                <p className="text-yellow-400 font-bold text-4xl md:text-5xl">
                  {animate ? (
                    <>
                      <AnimatedCounter value={row.timeSaved} duration={2000} decimals={row.timeSaved % 1 !== 0 ? 2 : 0} /> hrs
                    </>
                  ) : (
                    '0 hrs'
                  )}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Mobile Notice */}
      <div className="md:hidden mt-6 text-center text-blue-900 text-sm">
        <p>Scroll horizontally to view all metrics →</p>
      </div>
    </div>
  );
};
