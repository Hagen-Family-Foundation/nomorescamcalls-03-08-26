import React, { useEffect, useState } from 'react';
import { AnimatedCounter } from '../AnimatedCounter';
import { MetricBox } from './MetricBox';

const mockData = [
  {
    icon: '📞',
    protection: 'PHONE PROTECTION',
    blocked: 1247,
    blockedLabel: 'BLOCKED',
    potentialLoss: 3741,
    timeSaved: 42,
    totalInteractions: 4892  // ALL phone interactions (legit + blocked)
  },
  {
    icon: '📱',
    protection: 'TEXT PROTECTION',
    blocked: 893,
    blockedLabel: 'TOXIC',
    potentialLoss: 1892,
    timeSaved: 28,
    totalInteractions: 2104  // ALL text interactions (legit + toxic)
  },
  {
    icon: '📧',
    protection: 'EMAIL PROTECTION',
    blocked: 2104,
    blockedLabel: 'TOXIC',
    potentialLoss: 5621,
    timeSaved: 61,
    totalInteractions: 7825  // ALL email interactions (legit + toxic)
  },
  {
    icon: '🌐',
    protection: 'WEB PROTECTION',
    blocked: 671,
    blockedLabel: 'TOXIC',
    potentialLoss: 2103,
    timeSaved: 19,
    totalInteractions: 3774  // ALL web interactions (legit + toxic)
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
        <div className="min-w-[1100px]">
          {/* Column Headers - 22px Navy */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div></div>
            <div className="text-center">
              <h3 className="text-[22px] font-bold text-[#1E3A8A]">
                TOTAL
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-[22px] font-bold text-[#1E3A8A]">
                BLOCKED/<br/>TOXIC/AVOIDED
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-[22px] font-bold text-[#1E3A8A]">
                POTENTIAL $$<br/>LOST
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-[22px] font-bold text-[#1E3A8A]">
                POTENTIAL TIME<br/>LOST (hours)
              </h3>
            </div>
          </div>

          {/* Data Rows with Boxes */}
          {mockData.map((row, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 mb-4">
              {/* Protection Name Box - 28px Navy */}
              <MetricBox variant="navy" className="flex items-center justify-center text-center">
                <div>
                  <div className="text-4xl mb-2">{row.icon}</div>
                  <div className="text-[28px] leading-tight">{row.protection}</div>
                </div>
              </MetricBox>
              
              {/* COLUMN 2: TOTAL INTERACTIONS - ALL calls/texts/emails/websites */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div 
                  className="text-[36px] font-black leading-none mb-1 text-[#FFEB3B]"
                  style={{ 
                    textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A'
                  }}
                >
                  {animate ? (
                    <AnimatedCounter value={row.totalInteractions} duration={2000} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-[16px] text-[#1E3A8A] font-bold">TOTAL</div>
              </MetricBox>
              
              {/* COLUMN 3: BLOCKED/TOXIC - scam attempts only */}
              <MetricBox variant="navy" className="flex flex-col items-center justify-center bg-[#1E3A8A]">
                <div 
                  className="text-[36px] font-black leading-none mb-1 text-[#FFEB3B]"
                  style={{ 
                    textShadow: '1px 1px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000'
                  }}
                >
                  {animate ? (
                    <AnimatedCounter value={row.blocked} duration={2000} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-[14px] text-white font-bold">{row.blockedLabel}</div>
              </MetricBox>
              
              {/* COLUMN 4: $ LOST - financial loss prevented */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div 
                  className="text-[36px] font-black leading-none mb-1 text-[#FFEB3B]"
                  style={{ 
                    textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A'
                  }}
                >
                  {animate ? (
                    <AnimatedCounter value={row.blocked} duration={2000} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-[16px] text-[#1E3A8A] font-bold">{row.blockedLabel}</div>
              </MetricBox>
              
              {/* Potential Loss Box - 36px BRIGHT YELLOW BOLD with outline */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div 
                  className="text-[36px] font-black leading-none mb-1 text-[#FFEB3B]"
                  style={{ 
                    textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A'
                  }}
                >
                  {animate ? (
                    <>
                      $<AnimatedCounter value={row.potentialLoss} duration={2000} />
                    </>
                  ) : (
                    '$0'
                  )}
                </div>
                <div className="text-[16px] text-[#1E3A8A] font-bold">AVOIDED</div>
              </MetricBox>
              
              {/* TOTAL INTERACTIONS Box - ALL interactions (legit + scam) */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div 
                  className="text-[36px] font-black leading-none mb-1 text-[#FFEB3B]"
                  style={{ 
                    textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A'
                  }}
                >
                  {animate ? (
                    <AnimatedCounter value={row.totalInteractions} duration={2000} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-[16px] text-[#1E3A8A] font-bold">TOTAL</div>
              </MetricBox>
              
              {/* COLUMN 5: TIME LOST - hours prevented */}
              <MetricBox variant="yellow" className="flex flex-col items-center justify-center">
                <div 
                  className="text-[36px] font-black leading-none mb-1 text-[#FFEB3B]"
                  style={{ 
                    textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A'
                  }}
                >
                  {animate ? (
                    <>
                      <AnimatedCounter value={row.timeSaved} duration={2000} />h
                    </>
                  ) : (
                    '0h'
                  )}
                </div>
                <div className="text-[16px] text-[#1E3A8A] font-bold">LOST</div>
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
