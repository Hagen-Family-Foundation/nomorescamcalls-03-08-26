import React from 'react';
import { Button } from './ui/button';
import { Check, Star, ArrowDown } from 'lucide-react';
import { mockData } from '../mock';
import { useBrand } from '../context/BrandContext';

export const Pricing = ({ onScrollToBundle }) => {
  const brand = useBrand();

  // Use brand pricing if available, fallback to mock data
  const pricingTiers = brand.pricing?.tiers || mockData.pricing;
  
  // Get brand-specific section content
  const sectionTitle = brand.pricing?.sectionTitle || 'Simple, Transparent Pricing';
  const sectionSubheading = brand.pricing?.sectionSubheading || null;
  const sectionIntro = brand.pricing?.sectionIntro || 'Start with a 7-day free trial. No hidden fees. Cancel anytime.';
  const sectionNote = brand.pricing?.sectionNote || 'All plans include a 7-day free trial. Cancellations take effect at end of billing cycle.';

  return (
    <section id="pricing" className="py-20 bg-white" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          {sectionSubheading && (
            <div className="mb-4">
              <p className="text-2xl font-semibold" style={{ color: brand.colors.primary }}>
                {sectionSubheading.line1}
              </p>
              <p className="text-lg text-gray-600">
                {sectionSubheading.line2}
              </p>
            </div>
          )}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionIntro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((plan, index) => {
            // Handle both mock data structure and brand config structure
            const planName = plan.name;
            const planPrice = plan.monthlyPrice || plan.price;
            const planDescription = plan.description || (plan.linesIncluded ? `${plan.linesIncluded} lines included` : '');
            const planFeatures = plan.features || [];
            const isPopular = plan.popular || false;
            const isAddon = plan.isAddon || false;
            const positioningLabel = plan.positioningLabel || null;
            const detailedDescription = plan.detailedDescription || null;
            const priceLabel = plan.priceLabel || '/month';

            // Map plan names to bundle types for scroll behavior
            const bundleTypeMap = {
              'Basic': 'basic',
              'Mid': 'mid',
              'Family': 'family'
            };
            const bundleType = bundleTypeMap[planName];
            const shouldShowBundleButton = bundleType && onScrollToBundle && !isAddon;

            return (
              <div
                key={plan.id || index}
                className={`relative rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                  isPopular
                    ? 'shadow-lg scale-105'
                    : 'border-gray-200'
                }`}
                style={isPopular ? { borderColor: brand.colors.primary } : {}}
                data-testid={`pricing-card-${plan.id || index}`}
              >
                {isPopular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                    style={{ backgroundColor: brand.colors.primary }}
                  >
                    <Star className="h-4 w-4" fill="currentColor" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  {/* Positioning Label */}
                  {positioningLabel && (
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
                      {positioningLabel}
                    </p>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {planName}
                  </h3>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      ${String(planPrice || '0').replace('.00', '')}
                    </span>
                    <span className="text-gray-600">{priceLabel}</span>
                  </div>
                  
                  {/* Line count emphasis - shown for Basic/Mid/Family plans */}
                  {bundleType && plan.linesIncluded && (
                    <p className="text-xl mt-2 text-gray-700">
                      <span className="mx-1">—</span>
                      <span className="text-xl font-bold" style={{ color: brand.colors.primary }}>
                        📱 {plan.linesIncluded} {plan.linesIncluded === 1 ? 'Line' : 'Lines'}
                      </span>
                    </p>
                  )}
                  
                  {isAddon && !plan.linesIncluded && (
                    <p className="text-sm text-gray-500 mt-2">per line</p>
                  )}
                </div>

                {/* Detailed Description */}
                {detailedDescription && (
                  <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                    {detailedDescription}
                  </p>
                )}

                <Button
                  className={`w-full mb-6 ${
                    isPopular
                      ? 'text-white'
                      : 'bg-white border-2'
                  }`}
                  style={
                    isPopular 
                      ? { backgroundColor: brand.colors.primary } 
                      : { borderColor: brand.colors.primary, color: brand.colors.primary }
                  }
                  onClick={shouldShowBundleButton ? () => onScrollToBundle(bundleType) : undefined}
                  data-testid={`pricing-cta-${plan.id || index}`}
                >
                  {shouldShowBundleButton ? (
                    <>
                      See Bundle Options
                      <ArrowDown className="ml-2 h-4 w-4 inline" />
                    </>
                  ) : (
                    'Get Started'
                  )}
                </Button>

                <ul className="space-y-3">
                  {planFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: brand.colors.primary }} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8 max-w-3xl mx-auto">
          {sectionNote}
        </p>
      </div>
    </section>
  );
};
