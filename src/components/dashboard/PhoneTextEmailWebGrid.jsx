import React, { useEffect, useState } from 'react';
import { AnimatedCounter } from '../AnimatedCounter';

const mockData = [
  {
    icon: '📞',
    protection: 'PHONE PROTECTION',
    total: 4892,
    blocked: 1247,
    blockedLabel: 'BLOCKED',
    dollarLost: 3741,
    timeLost: 42
  },
  {
    icon: '📱',
    protection: 'TEXT PROTECTION',
    total: 2104,
    blocked: 893,
    blockedLabel: 'TOXIC',
    dollarLost: 1892,
    timeLost: 28
  },
  {
    icon: '📧',
    protection: 'EMAIL PROTECTION',
    total: 7825,
    blocked: 2104,
    blockedLabel: 'TOXIC',
    dollarLost: 5621,
    timeLost: 61
  },
  {
    icon: '🌐',
    protection: 'WEB PROTECTION',
    total: 3774,
    blocked: 671,
    blockedLabel: 'AVOIDED',
    dollarLost: 2103,
    timeLost: 19
  }
];

export const PhoneTextEmailWebGrid = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 md:p-10" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-[22px] font-bold text-[#1E3A8A] p-4 border border-[#1E3A8A] bg-white"></th>
              <th className="text-[22px] font-bold text-[#1E3A8A] p-4 border border-[#1E3A8A] bg-white">TOTAL</th>
              <th className="text-[22px] font-bold text-[#1E3A8A] p-4 border border-[#1E3A8A] bg-white">BLOCKED/TOXIC/AVOIDED</th>
              <th className="text-[22px] font-bold text-[#1E3A8A] p-4 border border-[#1E3A8A] bg-white">POTENTIAL $$ LOST</th>
              <th className="text-[22px] font-bold text-[#1E3A8A] p-4 border border-[#1E3A8A] bg-white">POTENTIAL TIME LOST</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index}>
                {/* Protection Name */}
                <td className="p-4 border border-[#1E3A8A] bg-white text-center">
                  <div className="text-4xl mb-2">{row.icon}</div>
                  <div className="text-[28px] font-bold text-[#1E3A8A]">{row.protection}</div>
                </td>
                
                {/* COLUMN 1: TOTAL */}
                <td className="p-4 border border-[#1E3A8A] bg-white text-center">
                  <div 
                    className="text-[36px] font-black text-[#FFEB3B]"
                    style={{ textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A' }}
                  >
                    {animate ? <AnimatedCounter value={row.total} duration={2000} /> : '0'}
                  </div>
                </td>
                
                {/* COLUMN 2: BLOCKED/TOXIC/AVOIDED */}
                <td className="p-4 border border-[#1E3A8A] bg-[#1E3A8A] text-center">
                  <div 
                    className="text-[36px] font-black text-[#FFEB3B]"
                    style={{ textShadow: '1px 1px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000' }}
                  >
                    {animate ? <AnimatedCounter value={row.blocked} duration={2000} /> : '0'}
                  </div>
                  <div className="text-[14px] font-bold text-white mt-1">{row.blockedLabel}</div>
                </td>
                
                {/* COLUMN 3: $ LOST */}
                <td className="p-4 border border-[#1E3A8A] bg-white text-center">
                  <div 
                    className="text-[36px] font-black text-[#FFEB3B]"
                    style={{ textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A' }}
                  >
                    {animate ? <><AnimatedCounter value={row.dollarLost} duration={2000} /></> : '0'}
                  </div>
                </td>
                
                {/* COLUMN 4: TIME LOST */}
                <td className="p-4 border border-[#1E3A8A] bg-white text-center">
                  <div 
                    className="text-[36px] font-black text-[#FFEB3B]"
                    style={{ textShadow: '1px 1px 0 #1E3A8A, -1px -1px 0 #1E3A8A, 1px -1px 0 #1E3A8A, -1px 1px 0 #1E3A8A' }}
                  >
                    {animate ? <><AnimatedCounter value={row.timeLost} duration={2000} />h</> : '0h'}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Notice */}
      <div className="md:hidden mt-6 text-center text-gray-500 text-[14px]">
        <p>Scroll horizontally to view all metrics →</p>
      </div>
    </div>
  );
};
