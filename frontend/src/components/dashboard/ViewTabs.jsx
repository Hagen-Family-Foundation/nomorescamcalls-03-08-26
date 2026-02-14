import React from 'react';
import { Button } from '../ui/button';

/**
 * Reusable view tab selector (button style) - Professional Corporate Style
 */
export const ViewTabsButton = ({
  value,
  onChange,
  tabs,
  activeColor = 'bg-slate-700 hover:bg-slate-800',
  testId = 'view-tabs'
}) => {
  return (
    <div className="flex gap-4 flex-wrap" data-testid={testId}>
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          variant={value === tab.value ? 'default' : 'outline'}
          className={value === tab.value ? `${activeColor} text-white` : 'border-slate-300 text-slate-700 hover:border-slate-500 hover:bg-slate-50'}
          data-testid={`view-tab-${tab.value}`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

/**
 * Reusable view tab selector (underline style) - Professional Corporate Style
 */
export const ViewTabsUnderline = ({
  value,
  onChange,
  tabs,
  activeColor = 'text-slate-800 border-slate-700',
  testId = 'view-tabs-underline'
}) => {
  return (
    <div className="flex gap-4 border-b border-slate-200" data-testid={testId}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-4 py-2 font-semibold transition-colors ${
            value === tab.value
              ? `${activeColor} border-b-2`
              : 'text-slate-500 hover:text-slate-800'
          }`}
          data-testid={`view-tab-${tab.value}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
