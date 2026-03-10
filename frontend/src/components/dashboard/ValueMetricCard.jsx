import React from 'react';
import { AnimatedCounter } from '../AnimatedCounter';

/**
 * Large gradient value metric card for highlighting key metrics
 * @param {string} title - Card title
 * @param {number} value - Main value to display
 * @param {string} subtitle - Subtitle text
 * @param {string} description - Additional description
 * @param {string} gradient - Gradient class (e.g., 'from-green-500 to-green-600')
 * @param {ReactNode} icon - Icon component
 * @param {string} prefix - Value prefix (e.g., '$')
 * @param {string} suffix - Value suffix (e.g., 'hrs')
 */
export const ValueMetricCard = ({
  title,
  value,
  subtitle,
  description,
  gradient = 'from-green-500 to-green-600',
  icon,
  prefix = '',
  suffix = '',
  testId
}) => {
  return (
    <div 
      className={`bg-gradient-to-br ${gradient} rounded-lg shadow-lg p-8 text-white hover:shadow-xl transition-shadow`}
      data-testid={testId}
    >
      {icon && (
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold opacity-90">{title}</h3>
            {subtitle && <p className="text-sm opacity-75">{subtitle}</p>}
          </div>
        </div>
      )}
      {!icon && (
        <>
          <h3 className="text-xl font-semibold mb-2 opacity-90">{title}</h3>
        </>
      )}
      <div className="text-5xl font-bold">
        {prefix}<AnimatedCounter value={value} />{suffix}
      </div>
      {description && <p className="mt-2 opacity-90">{description}</p>}
    </div>
  );
};
