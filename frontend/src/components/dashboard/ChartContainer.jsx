import React, { useRef, useState, useEffect } from 'react';

/**
 * Stable chart container that prevents ResizeObserver issues
 * Uses a debounced resize handler and fixed aspect ratio
 * 
 * @param {ReactNode} children - Chart component (ResponsiveContainer)
 * @param {number} height - Fixed height in pixels
 * @param {string} title - Optional chart title
 * @param {ReactNode} titleIcon - Optional icon next to title
 * @param {ReactNode} controls - Optional controls (dropdowns, filters)
 * @param {string} className - Additional CSS classes
 */
export const ChartContainer = ({
  children,
  height = 300,
  title,
  titleIcon,
  controls,
  className = '',
  testId
}) => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Debounced resize handler to prevent ResizeObserver loops
    let timeoutId;
    let animationFrameId;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        // Only update and render if we have valid dimensions
        if (width > 0) {
          setContainerWidth(width);
          setIsReady(true);
        }
      }
    };

    const handleResize = () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
      timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(updateDimensions);
      }, 100);
    };

    // Initial measurement with slight delay to ensure DOM is ready
    const initialTimeout = setTimeout(updateDimensions, 50);

    // Use ResizeObserver with error handling
    const resizeObserver = new ResizeObserver((entries) => {
      // Use requestAnimationFrame to batch updates and avoid loops
      if (!Array.isArray(entries) || !entries.length) return;
      handleResize();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialTimeout);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div 
      className={`bg-white rounded-lg p-6 border border-gray-300 ${className}`}
      style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' }}
      data-testid={testId}
    >
      {(title || controls) && (
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h3 className="text-xl font-bold text-black flex items-center gap-2">
              {titleIcon}
              {title}
            </h3>
          )}
          {controls}
        </div>
      )}
      <div 
        ref={containerRef}
        className="w-full overflow-hidden"
        style={{ 
          height: `${height}px`,
          minHeight: `${height}px`,
          minWidth: '100px',
          position: 'relative'
        }}
      >
        {isReady && containerWidth > 0 && children}
      </div>
    </div>
  );
};
