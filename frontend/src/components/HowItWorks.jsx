import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { useBrand } from '../context/BrandContext';
import { ShieldLogo } from './ShieldLogo';

export const HowItWorks = () => {
  const brand = useBrand();

  const steps = [
    {
      icon: Phone,
      title: 'Connect Your Phone',
      description: 'Simple 2-minute setup using call forwarding. Works with any phone - no app needed.',
      useShieldLogo: false
    },
    {
      icon: null,
      title: 'We Screen Every Call',
      description: 'Our AI analyzes calls in real-time, blocking scammers before they can reach you.',
      useShieldLogo: true
    },
    {
      icon: CheckCircle,
      title: 'Only Clean Calls Get Through',
      description: 'Receive only legitimate calls from people who matter. Scammers never bother you again.',
      useShieldLogo: false
    }
  ];

  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: brand.colors.primary }} data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: brand.colors.secondary }}>
            Three simple steps to a scam-free phone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden md:block absolute top-16 left-full w-full h-0.5 -translate-x-1/2 z-0"
                    style={{ background: `linear-gradient(to right, ${brand.colors.secondary}60, ${brand.colors.secondary}20)` }}
                  ></div>
                )}

                <div className="relative z-10 text-center">
                  <div 
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-transform hover:scale-110"
                    style={{ backgroundColor: brand.colors.secondary }}
                  >
                    {step.useShieldLogo ? (
                      <ShieldLogo className="h-12 w-12" color={brand.colors.primary} />
                    ) : (
                      <Icon className="h-12 w-12" style={{ color: brand.colors.primary }} />
                    )}
                  </div>
                  <div 
                    className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: brand.colors.primaryDark, color: brand.colors.secondary }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-200 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
