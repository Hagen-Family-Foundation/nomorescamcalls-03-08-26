import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { format } from 'date-fns';

/**
 * Single call activity list item - Professional Corporate Style
 */
export const CallActivityItem = ({
  call,
  showValue = true,
  valuePerBlock = 1400,
  testId
}) => {
  const isGood = call.type === 'good';
  
  return (
    <div 
      className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
      data-testid={testId}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isGood ? 'bg-emerald-700' : 'bg-red-700'
        }`}>
          {isGood ? (
            <CheckCircle className="h-5 w-5 text-white" />
          ) : (
            <Shield className="h-5 w-5 text-white" />
          )}
        </div>
        <div>
          <p className="font-semibold text-slate-800">{call.phone}</p>
          <p className="text-sm text-slate-500">
            {format(call.timestamp, 'MMM dd, yyyy - h:mm a')}
          </p>
        </div>
      </div>
      <div className="text-right">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
          isGood ? 'bg-emerald-700 text-white' : 'bg-red-700 text-white'
        }`}>
          {isGood ? 'Allowed' : 'Blocked'}
        </span>
        {!isGood && showValue && (
          <p className="text-xs text-slate-500 mt-1">
            Saved ${valuePerBlock.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

/**
 * Call activity list wrapper - Professional Corporate Style
 */
export const CallActivityList = ({
  calls,
  limit = 10,
  showValue = true,
  valuePerBlock = 1400,
  title = 'Recent Call Activity',
  testId = 'call-activity-list'
}) => {
  const displayCalls = limit ? calls.slice(0, limit) : calls;
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6" data-testid={testId}>
      {title && <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>}
      <div className="space-y-3">
        {displayCalls.map((call) => (
          <CallActivityItem 
            key={call.id} 
            call={call}
            showValue={showValue}
            valuePerBlock={valuePerBlock}
            testId={`call-item-${call.id}`}
          />
        ))}
      </div>
    </div>
  );
};
