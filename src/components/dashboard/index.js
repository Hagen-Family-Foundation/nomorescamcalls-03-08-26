// Dashboard Component Library
// Reusable components for building dashboard interfaces

export { StatCard } from './StatCard';
export { ValueMetricCard } from './ValueMetricCard';
export { TimeRangeFilter, getTimeRangeLabel } from './TimeRangeFilter';
export { ExportControls } from './ExportControls';
export { ChartContainer } from './ChartContainer';
export { ViewTabsButton, ViewTabsUnderline } from './ViewTabs';
export { DataTable, StatusBadge } from './DataTable';
export { CallActivityItem, CallActivityList } from './CallActivityItem';
export { NumberListManager } from './NumberListManager';
export { InsightCard, InsightCardsGrid } from './InsightCard';
export { DashboardHeader, DashboardAction } from './DashboardHeader';

// Chart color constants - Professional corporate palette
export const CHART_COLORS = {
  good: '#059669',   // Darker green
  bad: '#dc2626',    // Darker red
  total: '#1e40af',  // Dark blue
  yellow: '#d97706', // Darker amber
  purple: '#7c3aed', // Darker purple
  orange: '#ea580c'  // Darker orange
};

// Common chart tooltip style
export const CHART_TOOLTIP_STYLE = {
  backgroundColor: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
};
