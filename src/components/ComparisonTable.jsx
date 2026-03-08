import React from 'react';
import { Check, X, Shield, ShieldCheck, Smartphone, Clock, DollarSign, Brain, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useBrand } from '../context/BrandContext';

const ComparisonRow = ({ feature, traditional, noMoreScamCalls, highlight = false, brand }) => (
  <tr className={`border-b border-gray-100 ${highlight ? '' : ''}`} style={highlight ? { backgroundColor: `${brand.colors.primary}10` } : {}}>
    <td className="py-2 px-3 md:px-4 text-left">
      <span className={`font-medium text-sm ${highlight ? '' : 'text-gray-900'}`} style={highlight ? { color: brand.colors.primaryDark || brand.colors.primary } : {}}>
        {feature}
      </span>
    </td>
    <td className="py-2 px-3 md:px-4 text-center">
      {traditional === true ? (
        <Check className="h-4 w-4 text-gray-400 mx-auto" />
      ) : traditional === false ? (
        <X className="h-4 w-4 text-red-400 mx-auto" />
      ) : (
        <span className="text-gray-500 text-xs">{traditional}</span>
      )}
    </td>
    <td className="py-2 px-3 md:px-4 text-center bg-green-50/50">
      {noMoreScamCalls === true ? (
        <Check className="h-4 w-4 text-green-600 mx-auto" />
      ) : noMoreScamCalls === false ? (
        <X className="h-4 w-4 text-red-400 mx-auto" />
      ) : (
        <span className="text-green-700 font-semibold text-xs">{noMoreScamCalls}</span>
      )}
    </td>
  </tr>
);

export const ComparisonTable = () => {
  const brand = useBrand();
  const trustIndicator = brand.messaging?.trustIndicator || 'professionals and families';

  const features = [
    { feature: 'AI-Powered Scam Detection', traditional: false, noMoreScamCalls: true, highlight: true },
    { feature: 'Real-Time Voice Analysis', traditional: false, noMoreScamCalls: true },
    { feature: 'Blocks Known Spam Numbers', traditional: true, noMoreScamCalls: true },
    { feature: 'Blocks NEW Scam Attempts', traditional: false, noMoreScamCalls: true, highlight: true },
    { feature: 'Learns Your Preferences', traditional: false, noMoreScamCalls: true },
    { feature: 'Family Protection (Multiple Lines)', traditional: 'Limited', noMoreScamCalls: 'Unlimited' },
    { feature: 'Custom Whitelist/Blacklist', traditional: 'Basic', noMoreScamCalls: 'Advanced' },
    { feature: 'Scam Attempt Reports', traditional: false, noMoreScamCalls: true },
    { feature: 'Setup Time', traditional: '30+ mins', noMoreScamCalls: '2 minutes' },
  ];

  const stats = [
    { icon: ShieldCheck, value: '99.8%', label: 'Scam Detection Rate' },
    { icon: Clock, value: '24/7', label: 'Always-On Protection' },
    { icon: DollarSign, value: 'Real-Time', label: 'AI Analysis' },
    { icon: Users, value: 'Multi-Line', label: 'Coverage' },
  ];

  return (
    <section id="comparison" className="py-10 bg-white" data-testid="comparison-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{ backgroundColor: `${brand.colors.primary}20`, color: brand.colors.primary }}
          >
            <Brain className="h-3 w-3" />
            AI vs. Traditional
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {brand.appName} vs. Traditional Call Blocking
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Traditional call blockers only stop known spam numbers. Our AI detects and blocks 
            <span className="font-semibold" style={{ color: brand.colors.primary }}> new scam attempts in real-time</span> — 
            before they can reach you.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-2 text-center">
              <Icon className="h-4 w-4 mx-auto mb-1" style={{ color: brand.colors.primary }} />
              <div className="text-lg font-bold text-gray-900">{value}</div>
              <div className="text-xs text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" data-testid="comparison-table">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-2 px-3 md:px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="py-2 px-3 md:px-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex flex-col items-center">
                      <Smartphone className="h-4 w-4 mb-1 text-gray-400" />
                      Traditional
                    </div>
                  </th>
                  <th 
                    className="py-2 px-3 md:px-4 text-center text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: `${brand.colors.primary}10`, color: brand.colors.primary }}
                  >
                    <div className="flex flex-col items-center">
                      <Shield className="h-4 w-4 mb-1" style={{ color: brand.colors.primary }} />
                      {brand.appName}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <ComparisonRow key={index} {...row} brand={brand} />
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer CTA */}
          <div 
            className="p-4"
            style={{ background: `linear-gradient(to right, ${brand.colors.primary}, ${brand.colors.primaryDark || brand.colors.primary})` }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-white text-center md:text-left">
                <h3 className="text-base font-bold">Ready to stop scam calls?</h3>
                <p className="text-sm opacity-90">Join {trustIndicator} who trust {brand.appName}</p>
              </div>
              <Button
                size="sm"
                className="px-6 py-2 text-sm font-semibold shadow-lg whitespace-nowrap hover:opacity-90"
                style={{ backgroundColor: 'white', color: brand.colors.primary }}
                onClick={() => {
                  const el = document.getElementById('bundles');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                data-testid="comparison-cta-btn"
              >
                Start 7-Day Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          * Based on internal testing and customer reports. Traditional blockers include carrier-provided spam blocking and third-party apps.
        </p>
      </div>
    </section>
  );
};
