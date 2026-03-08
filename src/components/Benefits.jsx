import React from 'react';
import { Heart, Users, Briefcase, Clock } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const Benefits = () => {
  const brand = useBrand();

  // Icon mapping
  const iconMap = {
    Heart,
    Users,
    Briefcase,
    Clock
  };

  // Default benefits for brands without custom benefits config
  const defaultBenefits = [
    {
      icon: 'Heart',
      title: 'Peace of Mind',
      description: 'Sleep better knowing your family is protected from phone scams 24/7.',
    },
    {
      icon: 'Users',
      title: 'Protect Loved Ones',
      description: 'Especially safeguard seniors and vulnerable family members from sophisticated scams.',
    },
    {
      icon: 'Clock',
      title: 'Save Time',
      description: 'No more interruptions from robocalls and scammers. Focus on what matters.',
    },
    {
      icon: 'Briefcase',
      title: 'Professional Protection',
      description: 'Keep your business line clean and maintain professionalism without spam.',
    }
  ];

  // Use brand-specific benefits if available, otherwise use defaults
  const benefits = brand.benefits || defaultBenefits;

  return (
    <section id="benefits" className="py-20 bg-white" data-testid="benefits-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Pillars Typography Section - VERY COMPACT */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-1">NoMoreScamCalls covers <span className="font-bold" style={{ color: '#FFD700', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>PHONE</span> only. What about 💬TEXT 📧EMAIL 🌐WEB?</p>
          <h2 className="text-2xl font-black mb-1" style={{ color: '#1974D2' }}>4 PILLARS OF PROTECTION</h2>
          <p className="text-sm text-gray-600">Complete scammer protection from <span className="font-bold" style={{ color: '#FFD700', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>ALL 4 SIDES</span> • <span style={{ color: '#1974D2' }}>Widest Coverage</span> • <span style={{ color: '#1974D2' }}>Best Value Bundle</span></p>
        </div>

        {/* 4 BENEFIT COLUMNS - FULL SIZE RESTORED */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || Heart;
            return (
              <div
                key={index}
                className="group text-center rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all p-6"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#eab30860'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#eab308' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: '#0a1428' }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0a1428' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
