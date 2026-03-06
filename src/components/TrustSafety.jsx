import React from 'react';
import { Shield, Lock, Database, CheckCircle } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const TrustSafety = () => {
  const brand = useBrand();
  const trustIndicator = brand.messaging?.trustIndicator || 'professionals and families';

  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your data is encrypted and protected with the same security banks use.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'We never sell your data. Your call information stays private and secure.'
    },
    {
      icon: Database,
      title: 'Proven Technology',
      description: `AI has blocked over 10 million scam calls. ${trustIndicator}.`
    },
    {
      icon: CheckCircle,
      title: 'US-Based Support',
      description: 'Real people ready to help, based right here in America.'
    }
  ];

  return (
    <section id="trust" className="py-20" style={{ background: `linear-gradient(to bottom, white, ${brand.colors.primary}10)` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Safety is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NoMoreScamCalls is dedicated to protecting families and individuals<br />
            from phone, text, email and web scams using advanced AI technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4">
                  <Icon className="h-8 w-8" style={{ color: brand.colors.primary }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-6">Trusted and verified by</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-gray-400 font-semibold">SSL Secured</div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-gray-400 font-semibold">GDPR Compliant</div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-gray-400 font-semibold">SOC 2 Certified</div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="text-gray-400 font-semibold">Privacy Shield</div>
          </div>
        </div>
      </div>
    </section>
  );
};
