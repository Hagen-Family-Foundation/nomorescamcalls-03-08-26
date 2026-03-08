import React from 'react';
import { Button } from './ui/button';
import { Check, Shield, Star, ArrowRight, MessageSquare, Mail, Globe } from 'lucide-react';
import { useBrand } from '../context/BrandContext';
import { PRICING_LINKS, PRICING_DATA } from '../config/pricingLinks';
import PriceCircle from './PriceCircle';

/**
 * PricingChart Component
 * 
 * Displays a comparison table showing:
 * - Phone-only pricing vs full 4-pillar bundles
 * - À-la-carte add-on costs vs bundle savings
 * - Clear visual indication of savings (38%, 44%, 55%)
 * 
 * @param {string} highlightedBundle - Which bundle column to highlight ('basic' | 'mid' | 'family' | null)
 */
export const PricingChart = ({ highlightedBundle }) => {
  const brand = useBrand();

  const plans = [
    {
      id: 'basic',
      name: 'Basic Bundle',
      lines: 1,
      phoneOnly: PRICING_DATA.phoneOnly.basic.price,
      bundlePrice: PRICING_DATA.bundles.basic.price,
      aLaCarteTotal: PRICING_DATA.aLaCarteTotals.basic,
      savings: PRICING_DATA.savings.basic,
      link: PRICING_LINKS.BUNDLE_BASIC_4_PILLARS,
      popular: false,
    },
    {
      id: 'mid',
      name: 'Mid Bundle',
      lines: 3,
      phoneOnly: PRICING_DATA.phoneOnly.mid.price,
      bundlePrice: PRICING_DATA.bundles.mid.price,
      aLaCarteTotal: PRICING_DATA.aLaCarteTotals.mid,
      savings: PRICING_DATA.savings.mid,
      link: PRICING_LINKS.BUNDLE_MID_4_PILLARS,
      popular: true,
    },
    {
      id: 'family',
      name: 'Family Bundle',
      lines: 5,
      phoneOnly: PRICING_DATA.phoneOnly.family.price,
      bundlePrice: PRICING_DATA.bundles.family.price,
      aLaCarteTotal: PRICING_DATA.aLaCarteTotals.family,
      savings: PRICING_DATA.savings.family,
      link: PRICING_LINKS.BUNDLE_FAMILY_4_PILLARS,
      popular: false,
    },
  ];

  const addons = [
    {
      name: 'Textinaters',
      description: 'Text message protection',
      icon: MessageSquare,
      link: PRICING_LINKS.TEXTINATORS,
    },
    {
      name: 'Emailinaters',
      description: 'Email protection',
      icon: Mail,
      link: PRICING_LINKS.EMAILINATORS,
    },
    {
      name: 'Webinaters',
      description: 'Web browsing protection',
      icon: Globe,
      link: PRICING_LINKS.WEBINATORS,
    },
  ];

  return (
    <section id="bundles" className="py-20 bg-gradient-to-b from-gray-50 to-white" data-testid="pricing-chart-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-2xl font-bold mb-6"
            style={{ backgroundColor: `${brand.colors.primary}15`, color: brand.colors.primary }}
          >
            <Shield className="h-8 w-8" />
            4 Pillars of Protection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bundle & Save Up To 55%
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Get complete protection with our 4 Pillars bundle: <strong>Phone + Text + Email + Web</strong>
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-gray-200 mb-12 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-5 px-6 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider bg-gray-50 w-1/4">
                    &nbsp;
                  </th>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <th 
                        key={plan.id} 
                        className={`py-5 px-6 text-center relative transition-all duration-300 ${
                          plan.popular ? 'bg-orange-50' : 'bg-gray-50'
                        } ${isHighlighted ? 'bundle-highlight-column' : ''}`}
                      >
                        <span className={`text-lg font-bold ${
                          plan.popular ? 'text-orange-700' : 'text-gray-900'
                        }`}>
                          {plan.name}
                        </span>
                        {plan.popular && (
                          <span className="block text-sm font-semibold mt-1" style={{ color: brand.colors.primary }}>
                            Most Popular
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {/* Phone Only Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    📱 Phone only
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-4 px-6 text-center transition-all duration-300 ${
                        plan.popular ? 'bg-orange-50/30' : ''
                      } ${isHighlighted ? 'bundle-highlight-column' : ''}`}>
                        <span className="text-gray-700">
                          ${plan.phoneOnly.toFixed(2)}/mo
                        </span>
                        <span className="block text-base mt-1">
                          — <span className="font-bold text-lg" style={{ color: brand.colors.primary }}>📱 {plan.lines} {plan.lines === 1 ? 'Line' : 'Lines'}</span>
                        </span>
                      </td>
                    );
                  })}
                </tr>

                {/* Textinaters Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    <div className="flex items-center gap-4">
                      <span>💬 + Textinaters</span>
                      <PriceCircle amount="$12.99" />
                    </div>
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-4 px-6 text-center transition-all duration-300 ${
                        plan.popular ? 'bg-orange-50/30' : ''
                      } ${isHighlighted ? 'bundle-highlight-column' : ''}`}>
                        <div className="flex items-center justify-center">
                          <span className="text-green-600 font-semibold">Bundled For Savings</span>
                          <Check className="h-4 w-4 text-green-500 ml-2" />
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Emailinaters Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    <div className="flex items-center gap-4">
                      <span>📧 + Emailinaters</span>
                      <PriceCircle amount="$12.99" />
                    </div>
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-4 px-6 text-center transition-all duration-300 ${
                        plan.popular ? 'bg-orange-50/30' : ''
                      } ${isHighlighted ? 'bundle-highlight-column' : ''}`}>
                        <div className="flex items-center justify-center">
                          <span className="text-green-600 font-semibold">Bundled For Savings</span>
                          <Check className="h-4 w-4 text-green-500 ml-2" />
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Webinaters Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    <div className="flex items-center gap-4">
                      <span>🌐 + Webinaters</span>
                      <PriceCircle amount="$12.99" />
                    </div>
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-4 px-6 text-center transition-all duration-300 ${
                        plan.popular ? 'bg-orange-50/30' : ''
                      } ${isHighlighted ? 'bundle-highlight-column' : ''}`}>
                        <div className="flex items-center justify-center">
                          <span className="text-green-600 font-semibold">Bundled For Savings</span>
                          <Check className="h-4 w-4 text-green-500 ml-2" />
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* À la carte total Row - White with navy text */}
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-5 px-6 text-left font-bold" style={{ color: '#0a1428' }}>
                    ❌ À la carte total
                    <span className="block text-xs font-normal text-gray-500">(phone + all 3 add-ons)</span>
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-5 px-6 text-center transition-all duration-300 bg-white ${
                        isHighlighted ? 'bundle-highlight-column' : ''
                      }`}>
                        <span className="text-2xl font-bold line-through decoration-2" style={{ color: '#6b7280' }}>
                          ${plan.aLaCarteTotal.toFixed(2)}/mo
                        </span>
                      </td>
                    );
                  })}
                </tr>

                {/* Bundle Total Row - Navy with white text */}
                <tr className="border-b border-gray-200" style={{ backgroundColor: '#0a1428' }}>
                  <td className="py-5 px-6 text-left font-bold text-white">
                    ✅ Bundle Total
                    <span className="block text-xs font-normal text-gray-300">(all 4 protections included)</span>
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-5 px-6 text-center transition-all duration-300 ${
                        isHighlighted ? 'bundle-highlight-column' : ''
                      }`} style={{ backgroundColor: '#0a1428' }}>
                        <span className="text-2xl font-bold" style={{ color: '#eab308' }}>
                          ${plan.bundlePrice.toFixed(2)}/mo
                        </span>
                        <span className="block text-xs font-normal text-gray-300 mt-1">(all 4 protections included)</span>
                      </td>
                    );
                  })}
                </tr>

                {/* Per Line / Per Protection Row */}
                <tr className="border-b border-gray-200" style={{ backgroundColor: '#eab308' }}>
                  <td className="py-4 px-6 text-left">
                    <span className="font-bold text-sm" style={{ color: '#0a1428' }}>Per Line / Per Protection</span>
                    <span className="block text-xs mt-1" style={{ color: '#0a1428' }}>* Approx: bundle Total ÷ # lines ÷ 4 protections</span>
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    const perLinePrice = plan.id === 'basic' ? '$9' : plan.id === 'mid' ? '$7' : '$6';
                    return (
                      <td key={plan.id} className={`py-4 px-6 text-center transition-all duration-300 ${
                        isHighlighted ? 'bundle-highlight-column' : ''
                      }`} style={{ backgroundColor: '#eab308' }}>
                        <span className="text-xl font-bold" style={{ color: '#0a1428' }}>
                          {perLinePrice}/mo
                        </span>
                      </td>
                    );
                  })}
                </tr>

                {/* Savings Row - Yellow with navy text */}
                <tr className="border-b border-gray-200" style={{ backgroundColor: '#eab308' }}>
                  <td className="py-5 px-6 text-left font-bold" style={{ color: '#0a1428' }}>
                    💰 You save vs à la carte
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-5 px-6 text-center transition-all duration-300 ${
                        isHighlighted ? 'bundle-highlight-column' : ''
                      }`} style={{ backgroundColor: '#eab308' }}>
                        <span className="text-2xl font-bold" style={{ color: '#0a1428' }}>
                          {plan.savings}% savings
                        </span>
                      </td>
                    );
                  })}
                </tr>

                {/* CTA Row */}
                <tr>
                  <td className="py-6 px-6 text-left text-gray-600 font-medium">
                    Get Protected
                  </td>
                  {plans.map((plan) => {
                    const isHighlighted = highlightedBundle === plan.id;
                    return (
                      <td key={plan.id} className={`py-6 px-6 text-center transition-all duration-300 ${
                        plan.popular ? 'bg-orange-50/30' : ''
                      } ${isHighlighted ? 'bundle-highlight-column' : ''}`}>
                        <Button
                          asChild
                          size="lg"
                          className={`px-8 py-3 font-bold transition-all ${
                            plan.popular 
                              ? 'shadow-lg hover:shadow-xl transform hover:scale-105' 
                              : 'bg-white hover:bg-gray-50'
                          } ${isHighlighted ? 'bundle-highlight' : ''}`}
                          style={
                            plan.popular 
                              ? { 
                                  backgroundColor: brand.colors.secondary, 
                                  color: brand.colors.primary,
                                  border: `3px solid ${brand.colors.secondary}`
                                } 
                              : { 
                                  borderColor: brand.colors.primary, 
                                  borderWidth: '3px',
                                  color: brand.colors.primary 
                                }
                          }
                        >
                          <a href={plan.link} target="_blank" rel="noopener noreferrer">
                            Get {plan.name}
                            <ArrowRight className="ml-2 h-4 w-4 inline" />
                          </a>
                        </Button>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {plans.map((plan) => {
            const isHighlighted = highlightedBundle === plan.id;
            return (
              <div 
                key={plan.id}
                className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 ${
                  plan.popular ? 'border-orange-400 ring-2 ring-orange-200' : 'border-gray-200'
                } ${isHighlighted ? 'bundle-highlight' : ''}`}
              >
                {/* Card Header */}
                <div className={`p-6 ${plan.popular ? 'bg-orange-50' : 'bg-gray-50'}`}>
                  {plan.popular && (
                    <div 
                      className="inline-flex items-center gap-1 text-white px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{ backgroundColor: brand.colors.primary }}
                    >
                      <Star className="h-3 w-3" fill="currentColor" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.lines} {plan.lines === 1 ? 'line' : 'lines'} included</p>
                </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Phone Only */}
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">📱 Phone only</span>
                  <div className="text-right">
                    <span className="font-medium">${plan.phoneOnly.toFixed(2)}/mo</span>
                    <span className="block text-base font-bold" style={{ color: brand.colors.primary }}>— {plan.lines} {plan.lines === 1 ? 'Line' : 'Lines'}</span>
                  </div>
                </div>

                {/* Add-ons */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">💬 + Textinaters</span>
                    <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500">
                      <span className="text-[10px] font-bold text-red-500">$12.99</span>
                      <span className="absolute w-12 h-0.5 bg-red-500 rotate-45"></span>
                    </span>
                  </div>
                  <span className="text-green-600 font-semibold text-sm">Bundled <Check className="h-4 w-4 text-green-500 inline ml-1" /></span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">📧 + Emailinaters</span>
                    <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500">
                      <span className="text-[10px] font-bold text-red-500">$12.99</span>
                      <span className="absolute w-12 h-0.5 bg-red-500 rotate-45"></span>
                    </span>
                  </div>
                  <span className="text-green-600 font-semibold text-sm">Bundled <Check className="h-4 w-4 text-green-500 inline ml-1" /></span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">🌐 + Webinaters</span>
                    <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-500">
                      <span className="text-[10px] font-bold text-red-500">$12.99</span>
                      <span className="absolute w-12 h-0.5 bg-red-500 rotate-45"></span>
                    </span>
                  </div>
                  <span className="text-green-600 font-semibold text-sm">Bundled <Check className="h-4 w-4 text-green-500 inline ml-1" /></span>
                </div>

                {/* À la carte Total - White */}
                <div className="rounded-lg p-4 mt-4 bg-white border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium" style={{ color: '#0a1428' }}>❌ À la carte total</span>
                    <span className="text-xl font-bold line-through" style={{ color: '#6b7280' }}>${plan.aLaCarteTotal.toFixed(2)}/mo</span>
                  </div>
                </div>

                {/* Bundle Total - Navy */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#0a1428' }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">✅ Bundle Total</span>
                    <div className="text-right">
                      <span className="text-xl font-bold" style={{ color: '#eab308' }}>${plan.bundlePrice.toFixed(2)}/mo</span>
                      <span className="block text-xs text-gray-300">(all 4 protections included)</span>
                    </div>
                  </div>
                </div>

                {/* Per Line / Per Protection Row */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#eab308' }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-sm" style={{ color: '#0a1428' }}>Per Line / Per Protection</span>
                      <span className="block text-xs mt-1" style={{ color: '#0a1428' }}>* Approx: bundle Total ÷ # lines ÷ 4</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: '#0a1428' }}>
                      {plan.id === 'basic' ? '$9' : plan.id === 'mid' ? '$7' : '$6'}/mo
                    </span>
                  </div>
                </div>

                {/* Savings - Yellow */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#eab308' }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium" style={{ color: '#0a1428' }}>💰 You save</span>
                    <span className="text-xl font-bold" style={{ color: '#0a1428' }}>{plan.savings}% savings</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full mt-4 py-4 font-bold ${
                    plan.popular ? '' : 'bg-white'
                  }`}
                  style={
                    plan.popular 
                      ? { 
                          backgroundColor: brand.colors.secondary,
                          color: brand.colors.primary,
                          border: `3px solid ${brand.colors.secondary}`
                        } 
                      : { 
                          borderColor: brand.colors.primary, 
                          borderWidth: '3px',
                          color: brand.colors.primary 
                        }
                  }
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    Get {plan.name}
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </a>
                </Button>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          All bundles include complete Phone, Text, Email, and Web protection for all lines and all devices on your plan. 
          Prices are billed monthly. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingChart;
