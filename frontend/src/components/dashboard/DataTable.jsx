import React from 'react';

/**
 * Reusable data table component
 * @param {Array} columns - Column definitions { key, label, render?, className? }
 * @param {Array} data - Data array
 * @param {function} rowKey - Function to get unique key from row
 * @param {boolean} hoverable - Enable row hover effect
 * @param {string} emptyMessage - Message when no data
 */
export const DataTable = ({
  columns,
  data,
  rowKey = (row, index) => index,
  hoverable = true,
  emptyMessage = 'No data available',
  testId = 'data-table'
}) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500" data-testid={`${testId}-empty`}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto" data-testid={testId}>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th 
                key={col.key} 
                className={`px-4 py-3 text-left text-sm font-semibold text-gray-700 ${col.headerClassName || ''}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr 
              key={rowKey(row, index)} 
              className={hoverable ? 'hover:bg-gray-50 transition-colors' : ''}
            >
              {columns.map((col) => (
                <td 
                  key={col.key} 
                  className={`px-4 py-3 text-sm ${col.className || 'text-gray-900'}`}
                >
                  {col.render ? col.render(row[col.key], row, index) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/**
 * Status badge component for table cells
 */
export const StatusBadge = ({ status, statusConfig }) => {
  const config = statusConfig[status] || { bg: 'bg-gray-100', text: 'text-gray-700', label: status };
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
};
