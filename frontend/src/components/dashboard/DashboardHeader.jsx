import React from 'react';
import { ShieldLogo } from '../ShieldLogo';
import { Button } from '../ui/button';

/**
 * Reusable dashboard header component - Black text
 */
export const DashboardHeader = ({
  title,
  subtitle,
  darkMode = false,
  actions,
  testId = 'dashboard-header'
}) => {
  const bgClass = darkMode ? 'bg-black text-white' : 'bg-white border-b border-gray-300';
  const subtitleClass = darkMode ? 'text-gray-300' : 'text-black';
  const titleClass = darkMode ? 'text-white' : 'text-black';

  return (
    <header className={bgClass} data-testid={testId}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldLogo className="h-8 w-8" />
            <div>
              <h1 className={`text-xl font-bold ${titleClass}`}>{title}</h1>
              {subtitle && <p className={`text-sm ${subtitleClass}`}>{subtitle}</p>}
            </div>
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      </div>
    </header>
  );
};

/**
 * Dashboard action button helper - Black style
 */
export const DashboardAction = ({
  label,
  onClick,
  variant = 'outline',
  className = 'text-black border-black hover:bg-gray-100',
  testId
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={onClick}
      data-testid={testId}
    >
      {label}
    </Button>
  );
};
