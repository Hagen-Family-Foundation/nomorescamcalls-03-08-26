import React, { useEffect, useState } from 'react';
import { AnimatedCounter } from '../AnimatedCounter';
import { MetricBox } from './MetricBox';

const mockData = [
  {
    icon: '📞',
    protection: 'PHONE PROTECTION',
    total: 1247,
    totalLabel: 'BLOCKED',
    potentialLoss: 3741,
    timeSaved: 42
  },
  {
    icon: '📱',
    protection: 'TEXT PROTECTION',
    total: 893,
    totalLabel: 'NOTED',
    potentialLoss: 1892,
    timeSaved: 28
  },
  {
    icon: '📧',
    protection: 'EMAIL PROTECTION',
    total: 2104,
    totalLabel: 'NOTED',
    potentialLoss: 5621,
    timeSaved: 61
  },
  {
    icon: '🌐',
    protection: 'WEB PROTECTION',
    total: 671,
    totalLabel: 'NOTED',
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
    <div className="bg-white p-6 md:p-10" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Column Headers - 24px Navy */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div></div>
            <div className="text-center">
              <h3 className="text-[24px] font-bold text-[#1E3A8A]">
                TOTAL<br/>NOTED/BLOCKED
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-[24px] font-bold text-[#1E3A8A]">
                POTENTIAL $$<br/>LOSS AVOIDED
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-[24px] font-bold text-[#1E3A8A]">
                TIME SAVED<br/>(hours)
              </h3>
            </div>
          </div>

          {/* Data Rows with Boxes */}
          {mockData.map((row, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 mb-4">
              {/* Protection Name Box - 32px Navy */}
              <MetricBox variant="navy" className="flex items-center justify-center text-center">
                <div>
                  <div className="text-4xl mb-2">{row.icon}</div>
                  <div className="text-[32px] leading-tight">{row.protection}</div>
                </div>
              </MetricBox>
              
              {/* Total Box - 28px Yellow */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div className="text-[28px] leading-none mb-1">
                  {animate ? (
                    <AnimatedCounter value={row.total} duration={2000} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-[14px] text-[#1E3A8A] font-normal">{row.totalLabel}</div>
              </MetricBox>
              
              {/* Potential Loss Box - 28px Yellow */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div className="text-[28px] leading-none mb-1">
                  {animate ? (
                    <>
                      $<AnimatedCounter value={row.potentialLoss} duration={2000} />
                    </>
                  ) : (
                    '$0'
                  )}
                </div>
                <div className="text-[14px] text-[#1E3A8A] font-normal">AVOIDED</div>
              </MetricBox>
              
              {/* Time Saved Box - 28px Yellow */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div className="text-[28px] leading-none mb-1">
                  {animate ? (
                    <>
                      <AnimatedCounter value={row.timeSaved} duration={2000} />
                    </>
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-[14px] text-[#1E3A8A] font-normal">HOURS</div>
              </MetricBox>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Notice */}
      <div className="md:hidden mt-6 text-center text-gray-500 text-[14px]">
        <p>Scroll horizontally to view all metrics →</p>
      </div>
    </div>
  );
};
