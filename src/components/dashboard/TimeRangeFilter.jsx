import React from 'react';
import { Button } from '../ui/button';
import { Filter } from 'lucide-react';

/**
 * Reusable time range filter buttons - Black style
 */
export const TimeRangeFilter = ({
  value,
  onChange,
  ranges = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: 'ytd', label: 'Year to Date' }
  ],
  activeColor = 'bg-black hover:bg-gray-800',
  showIcon = true,
  testId = 'time-range-filter'
}) => {
  return (
    <div className="flex gap-2 flex-wrap" data-testid={testId}>
      {showIcon && <Filter className="h-5 w-5 text-black mt-2" />}
      {ranges.map((range) => (
        <Button
          key={range.value}
          onClick={() => onChange(range.value)}
          variant={value === range.value ? 'default' : 'outline'}
          className={value === range.value ? `${activeColor} text-white` : 'border-black text-black hover:bg-gray-100'}
          data-testid={`time-range-${range.value}`}
        >
          {range.label}
        </Button>
      ))}
    </div>
  );
};

/**
 * Get label for a time range value
 */
export const getTimeRangeLabel = (value, ranges = [
  { value: '24h', label: '24 Hours' },
  { value: '7d', label: '7 Days' },
  { value: '30d', label: '30 Days' },
  { value: 'ytd', label: 'Year to Date' }
]) => {
  return ranges.find(r => r.value === value)?.label || value;
};
