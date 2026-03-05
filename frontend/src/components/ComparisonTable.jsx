import React from 'react';
import { Check, X, Shield, ShieldCheck, Smartphone, Clock, DollarSign, Brain, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useBrand } from '../context/BrandContext';

const ComparisonRow = ({ feature, traditional, noMoreScamCalls, highlight = false, brand }) => (
  <tr className={`border-b border-gray-100 ${highlight ? '' : ''}`} style={highlight ? { backgroundColor: `${brand.colors.primary}10` } : {}}>
    <td className="py-4 px-4 md:px-6 text-left">
      <span className={`font-medium ${highlight ? '' : 'text-gray-900'}`} style={highlight ? { color: brand.colors.primaryDark || brand.colors.primary } : {}}>
        {feature}
      </span>
    </td>
    <td className="py-4 px-4 md:px-6 text-center">
      {traditional === true ? (
        <Check className="h-5 w-5 text-gray-400 mx-auto" />
      ) : traditional === false ? (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      ) : (
        <span className="text-gray-500 text-sm">{traditional}</span>
      )}
    </td>
    <td className="py-4 px-4 md:px-6 text-center bg-green-50/50">
      {noMoreScamCalls === true ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : noMoreScamCalls === false ? (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      ) : (
        <span className="text-green-700 font-semibold text-sm">{noMoreScamCalls}</span>
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
    <section id="comparison" className="py-20 bg-white" data-testid="comparison-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: `${brand.colors.primary}20`, color: brand.colors.primary }}
          >
            <Brain className="h-4 w-4" />
            AI vs. Traditional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {brand.appName} vs. Traditional Call Blocking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Traditional call blockers only stop known spam numbers. Our AI detects and blocks 
            <span className="font-semibold" style={{ color: brand.colors.primary }}> new scam attempts in real-time</span> — 
            before they can reach you.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-4 text-center">
              <Icon className="h-6 w-6 mx-auto mb-2" style={{ color: brand.colors.primary }} />
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" data-testid="comparison-table">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-4 md:px-6 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="py-4 px-4 md:px-6 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="flex flex-col items-center">
                      <Smartphone className="h-5 w-5 mb-1 text-gray-400" />
                      Traditional Blockers
                    </div>
                  </th>
                  <th 
                    className="py-4 px-4 md:px-6 text-center text-sm font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: `${brand.colors.primary}10`, color: brand.colors.primary }}
                  >
                    <div className="flex flex-col items-center">
                      <Shield className="h-5 w-5 mb-1" style={{ color: brand.colors.primary }} />
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
            className="p-6 md:p-8"
            style={{ background: `linear-gradient(to right, ${brand.colors.primary}, ${brand.colors.primaryDark || brand.colors.primary})` }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white text-center md:text-left">
                <h3 className="text-xl font-bold mb-1">Ready to stop scam calls?</h3>
                <p className="opacity-90">Join {trustIndicator} who trust {brand.appName}</p>
              </div>
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold shadow-lg whitespace-nowrap hover:opacity-90"
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
        <p className="text-center text-gray-500 text-sm mt-8">
          * Based on internal testing and customer reports. Traditional blockers include carrier-provided spam blocking and third-party apps.
        </p>
      </div>
    </section>
  );
};
