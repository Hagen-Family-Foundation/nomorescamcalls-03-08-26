import React from 'react';
import { Shield, Lock, Award, CheckCircle, Star } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const TrustBadges = () => {
  const brand = useBrand();

  return (
    <section className="py-16 border-y" style={{ backgroundColor: `${brand.colors.primary}08`, borderColor: `${brand.colors.primary}20` }} data-testid="trust-badges-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: brand.colors.primary }}>
            Trusted & Certified Protection
          </h3>
          <p className="text-gray-600">
            Your security is our top priority
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {/* BBB Accredited */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 border-2" style={{ borderColor: brand.colors.primary }}>
              <div className="text-center">
                <Award className="h-10 w-10 mx-auto mb-1" style={{ color: brand.colors.primary }} />
                <div className="text-xs font-bold" style={{ color: brand.colors.primary }}>BBB</div>
                <div className="text-xs" style={{ color: brand.colors.secondary }}>A+</div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">BBB Accredited</p>
            <p className="text-xs text-gray-500">A+ Rating</p>
          </div>

          {/* SSL Secured */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 border-2" style={{ borderColor: brand.colors.primary }}>
              <Lock className="h-12 w-12" style={{ color: brand.colors.primary }} />
            </div>
            <p className="text-xs font-semibold text-gray-700">SSL Secured</p>
            <p className="text-xs text-gray-500">256-bit Encryption</p>
          </div>

          {/* SOC 2 Certified */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 border-2" style={{ borderColor: brand.colors.primary }}>
              <div className="text-center">
                <Shield className="h-10 w-10 mx-auto mb-1" style={{ color: brand.colors.primary }} />
                <div className="text-xs font-bold" style={{ color: brand.colors.primary }}>SOC 2</div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">SOC 2 Certified</p>
            <p className="text-xs text-gray-500">Type II Compliant</p>
          </div>

          {/* GDPR Compliant */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 border-2" style={{ borderColor: brand.colors.primary }}>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 mx-auto mb-1" style={{ color: brand.colors.primary }} />
                <div className="text-xs font-bold" style={{ color: brand.colors.primary }}>GDPR</div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">GDPR Compliant</p>
            <p className="text-xs text-gray-500">Privacy Protected</p>
          </div>

          {/* CCPA Compliant */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 border-2" style={{ borderColor: brand.colors.primary }}>
              <div className="text-center">
                <Shield className="h-10 w-10 mx-auto mb-1" style={{ color: brand.colors.primary }} />
                <div className="text-xs font-bold" style={{ color: brand.colors.primary }}>CCPA</div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">CCPA Compliant</p>
            <p className="text-xs text-gray-500">California Privacy</p>
          </div>

          {/* Trustpilot */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3 border-2" style={{ borderColor: brand.colors.secondary }}>
              <div className="text-center">
                <Star className="h-10 w-10 mx-auto mb-1" style={{ color: brand.colors.secondary, fill: brand.colors.secondary }} />
                <div className="text-xs font-bold" style={{ color: brand.colors.primary }}>4.9/5</div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">Trustpilot</p>
            <p className="text-xs text-gray-500">Excellent Rating</p>
          </div>
        </div>

        {/* Additional Trust Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Partnered with FTC, FBI, and local law enforcement agencies nationwide. 
            We never sell your data and maintain the highest security standards in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};
