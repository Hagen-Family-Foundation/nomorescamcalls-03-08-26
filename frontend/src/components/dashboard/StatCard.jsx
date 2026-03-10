import React from 'react';
import { AnimatedCounter } from '../AnimatedCounter';

/**
 * Reusable StatCard Component - Black shadows
 * Left side heaviest, top and bottom half thickness
 */
export const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  subtitleColor = 'text-black',
  borderColor = 'border-black',
  icon,
  badge,
  prefix = '',
  suffix = '',
  testId
}) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 border border-gray-300"
      style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}
      data-testid={testId}
    >
      <div className="flex items-center justify-between mb-4">
        {icon && <div className="text-black">{icon}</div>}
        {badge && <span className="text-sm text-black font-medium">{badge}</span>}
      </div>
      <div className="text-3xl font-bold text-black">
        {prefix}<AnimatedCounter value={value} />{suffix}
      </div>
      <p className="text-black mt-1 font-medium">{title}</p>
      {subtitle && (
        <p className={`text-sm mt-1 font-medium text-black`}>{subtitle}</p>
      )}
    </div>
  );
};
