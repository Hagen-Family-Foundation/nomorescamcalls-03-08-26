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
    <section id="why-nmsc" className="py-20 bg-white" data-testid="benefits-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0a1428' }}>
            Why NoMoreScamCalls?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* Text makeover coming soon */}
          </p>
        </div>

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
