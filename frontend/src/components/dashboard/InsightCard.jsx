import React from 'react';

/**
 * Insight/highlight card for dashboards - Professional Corporate Style
 */
export const InsightCard = ({
  title,
  description,
  bgColor = 'bg-slate-700',
  titleColor = 'text-white',
  textColor = 'text-slate-200',
  testId
}) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 shadow-md`} data-testid={testId}>
      <h4 className={`font-semibold ${titleColor} mb-2`}>{title}</h4>
      <p className={textColor}>{description}</p>
    </div>
  );
};

/**
 * Insight cards grid - Professional Corporate Style
 */
export const InsightCardsGrid = ({ insights, testId = 'insight-grid' }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6" data-testid={testId}>
      {insights.map((insight, index) => (
        <InsightCard
          key={index}
          {...insight}
          testId={`insight-${index}`}
        />
      ))}
    </div>
  );
};
