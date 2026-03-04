import React from 'react';
import { Button } from './ui/button';
import { Check, Star, ArrowRight, MessageSquare, Mail, Globe } from 'lucide-react';
import { useBrand } from '../context/BrandContext';
import { PRICING_LINKS, PRICING_DATA } from '../config/pricingLinks';

/**
 * PricingChart Component
 * 
 * Displays a comparison table showing:
 * - Phone-only pricing vs full 4-pillar bundles
 * - À-la-carte add-on costs vs bundle savings
 * - Clear visual indication of savings (38%, 44%, 55%)
 */
export const PricingChart = () => {
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
    <section id="pricing-chart" className="py-20 bg-gradient-to-b from-gray-50 to-white" data-testid="pricing-chart-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: `${brand.colors.primary}15`, color: brand.colors.primary }}
          >
            <Star className="h-4 w-4" />
            4 Pillars of Protection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bundle & Save Up To 55%
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get complete protection with our 4-pillar bundles: <strong>Phone + Text + Email + Web</strong> — 
            all included at one low price. See how much you save vs. buying add-ons separately.
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-5 px-6 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider bg-gray-50 w-1/4">
                    &nbsp;
                  </th>
                  {plans.map((plan) => (
                    <th 
                      key={plan.id} 
                      className={`py-5 px-6 text-center relative ${
                        plan.popular ? 'bg-orange-50' : 'bg-gray-50'
                      }`}
                    >
                      {plan.popular && (
                        <div 
                          className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                          style={{ backgroundColor: brand.colors.primary }}
                        >
                          <Star className="h-3 w-3" fill="currentColor" />
                          Most Popular
                        </div>
                      )}
                      <span className={`text-lg font-bold ${
                        plan.popular ? 'text-orange-700' : 'text-gray-900'
                      }`}>
                        {plan.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Phone Only Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    📱 Phone only
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-4 px-6 text-center ${
                      plan.popular ? 'bg-orange-50/30' : ''
                    }`}>
                      <span className="text-gray-700">
                        ${plan.phoneOnly.toFixed(2)}/mo
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">
                        ({plan.lines} {plan.lines === 1 ? 'line' : 'lines'})
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Textinaters Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    💬 + Textinaters
                    <span className="block text-xs text-red-600 font-semibold">($12.99/line)</span>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-4 px-6 text-center ${
                      plan.popular ? 'bg-orange-50/30' : ''
                    }`}>
                      <span className="text-red-600 font-semibold">$12.99/line</span>
                      <Check className="h-4 w-4 text-green-500 inline ml-2" />
                    </td>
                  ))}
                </tr>

                {/* Emailinaters Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    📧 + Emailinaters
                    <span className="block text-xs text-red-600 font-semibold">($12.99/line)</span>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-4 px-6 text-center ${
                      plan.popular ? 'bg-orange-50/30' : ''
                    }`}>
                      <span className="text-red-600 font-semibold">$12.99/line</span>
                      <Check className="h-4 w-4 text-green-500 inline ml-2" />
                    </td>
                  ))}
                </tr>

                {/* Webinaters Row */}
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-left font-medium text-gray-900">
                    🌐 + Webinaters
                    <span className="block text-xs text-red-600 font-semibold">($12.99/line)</span>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-4 px-6 text-center ${
                      plan.popular ? 'bg-orange-50/30' : ''
                    }`}>
                      <span className="text-red-600 font-semibold">$12.99/line</span>
                      <Check className="h-4 w-4 text-green-500 inline ml-2" />
                    </td>
                  ))}
                </tr>

                {/* À la carte total Row - Warning/Red tone */}
                <tr className="border-b border-gray-200 bg-red-50">
                  <td className="py-5 px-6 text-left font-bold text-red-800">
                    ❌ À la carte total
                    <span className="block text-xs font-normal text-red-600">(phone + all 3 add-ons)</span>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-5 px-6 text-center ${
                      plan.popular ? 'bg-red-100/50' : ''
                    }`}>
                      <span className="text-2xl font-bold text-red-700 line-through decoration-2">
                        ${plan.aLaCarteTotal.toFixed(2)}/mo
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Bundle total Row - Green/Positive tone */}
                <tr className="border-b border-gray-200 bg-green-50">
                  <td className="py-5 px-6 text-left font-bold text-green-800">
                    ✅ Bundle total
                    <span className="block text-xs font-normal text-green-600">(all 4 protections included)</span>
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-5 px-6 text-center ${
                      plan.popular ? 'bg-green-100/50' : ''
                    }`}>
                      <span className="text-2xl font-bold text-green-700">
                        ${plan.bundlePrice.toFixed(2)}/mo
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Savings Row - Strong Green */}
                <tr className="border-b border-gray-200 bg-emerald-100">
                  <td className="py-5 px-6 text-left font-bold text-emerald-800">
                    💰 You save vs à la carte
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-5 px-6 text-center ${
                      plan.popular ? 'bg-emerald-200/50' : ''
                    }`}>
                      <span className="text-2xl font-bold text-emerald-700">
                        {plan.savings}% savings
                      </span>
                    </td>
                  ))}
                </tr>

                {/* CTA Row */}
                <tr>
                  <td className="py-6 px-6 text-left text-gray-600 font-medium">
                    Get Protected
                  </td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`py-6 px-6 text-center ${
                      plan.popular ? 'bg-orange-50/30' : ''
                    }`}>
                      <Button
                        asChild
                        size="lg"
                        className={`px-8 py-3 font-semibold transition-all ${
                          plan.popular 
                            ? 'text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                            : 'bg-white border-2 hover:bg-gray-50'
                        }`}
                        style={
                          plan.popular 
                            ? { backgroundColor: brand.colors.primary } 
                            : { borderColor: brand.colors.primary, color: brand.colors.primary }
                        }
                      >
                        <a href={plan.link} target="_blank" rel="noopener noreferrer">
                          Get {plan.name.replace(' Bundle', '')}
                          <ArrowRight className="ml-2 h-4 w-4 inline" />
                        </a>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                plan.popular ? 'border-orange-400 ring-2 ring-orange-200' : 'border-gray-200'
              }`}
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
                  <span className="font-medium">${plan.phoneOnly.toFixed(2)}/mo</span>
                </div>

                {/* Add-ons */}
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">💬 + Textinaters</span>
                  <span className="text-red-600 font-semibold">$12.99/line <Check className="h-4 w-4 text-green-500 inline ml-1" /></span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">📧 + Emailinaters</span>
                  <span className="text-red-600 font-semibold">$12.99/line <Check className="h-4 w-4 text-green-500 inline ml-1" /></span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">🌐 + Webinaters</span>
                  <span className="text-red-600 font-semibold">$12.99/line <Check className="h-4 w-4 text-green-500 inline ml-1" /></span>
                </div>

                {/* À la carte Total */}
                <div className="bg-red-50 rounded-lg p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-red-800 font-medium">❌ À la carte total</span>
                    <span className="text-xl font-bold text-red-700 line-through">${plan.aLaCarteTotal.toFixed(2)}/mo</span>
                  </div>
                </div>

                {/* Bundle Total */}
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800 font-medium">✅ Bundle total</span>
                    <span className="text-xl font-bold text-green-700">${plan.bundlePrice.toFixed(2)}/mo</span>
                  </div>
                </div>

                {/* Savings */}
                <div className="bg-emerald-100 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-800 font-medium">💰 You save</span>
                    <span className="text-xl font-bold text-emerald-700">{plan.savings}% savings</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  size="lg"
                  className={`w-full mt-4 py-4 font-semibold ${
                    plan.popular ? 'text-white' : 'bg-white border-2'
                  }`}
                  style={
                    plan.popular 
                      ? { backgroundColor: brand.colors.primary } 
                      : { borderColor: brand.colors.primary, color: brand.colors.primary }
                  }
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    Get {plan.name}
                    <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Prefer à la carte Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Prefer à la carte?</h3>
            <p className="text-gray-600">Purchase individual add-ons if you only need specific protections.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addons.map((addon) => (
              <a
                key={addon.name}
                href={addon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${brand.colors.primary}15` }}
                  >
                    <addon.icon className="h-6 w-6" style={{ color: brand.colors.primary }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{addon.name}</h4>
                    <p className="text-sm text-gray-600">{addon.description}</p>
                    <p className="text-red-600 font-semibold text-sm mt-1">$12.99 per line per month</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          All bundles include complete Phone, Text, Email, and Web protection for all lines on your plan. 
          Prices shown are billed monthly. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingChart;
