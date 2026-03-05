import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PricingChart } from './PricingChart';
import { ScrollToTop } from './ScrollToTop';
import { SEO } from './SEO';
import { useBrand } from '../context/BrandContext';
import { Shield, Phone, MessageSquare, Mail, Globe } from 'lucide-react';

/**
 * PricingPage Component
 * 
 * Dedicated pricing page with:
 * - Hero section featuring the 4 Pillars of Protection concept
 * - PricingChart comparison table
 */
export const PricingPage = () => {
  const brand = useBrand();

  const pillars = [
    { icon: Phone, name: 'Phone', description: 'Call protection' },
    { icon: MessageSquare, name: 'Text', description: 'SMS protection' },
    { icon: Mail, name: 'Email', description: 'Email protection' },
    { icon: Globe, name: 'Web', description: 'Web protection' },
  ];

  return (
    <>
      <SEO 
        title={`Pricing - ${brand.appName} | 4 Pillars of Protection`}
        description="Get complete protection with our 4-pillar bundles: Phone + Text + Email + Web. Save up to 55% compared to à la carte pricing."
        keywords="scam protection pricing, phone protection plans, bundle pricing, call blocking subscription"
        canonical={`https://${brand.domain}/pricing`}
      />
      <Header />
      
      {/* Hero Section - 4 Pillars of Protection */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
            style={{ 
              background: `radial-gradient(circle, ${brand.colors.primary} 0%, transparent 70%)` 
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: `${brand.colors.primary}30`, color: brand.colors.primary }}
          >
            <Shield className="h-4 w-4" />
            Complete Protection Suite
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            4 Pillars of Protection
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            One subscription. Four layers of defense. Complete peace of mind.
          </p>

          {/* 4 Pillars Visual */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.name}
                className="relative"
              >
                {/* Pillar Column */}
                <div className="bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-lg p-6 border border-gray-500">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${brand.colors.primary}20` }}
                  >
                    <pillar.icon className="h-8 w-8" style={{ color: brand.colors.primary }} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.name}</h3>
                  <p className="text-sm text-gray-400">{pillar.description}</p>
                </div>
                {/* Pillar Base */}
                <div 
                  className="h-3 rounded-b-lg"
                  style={{ backgroundColor: brand.colors.primary }}
                />
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <p className="text-lg text-white">
              <span className="font-bold" style={{ color: brand.colors.primary }}>Save up to 55%</span> when you bundle all 4 pillars 
              compared to purchasing add-ons separately.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Chart Section */}
      <PricingChart />

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PricingPage;
