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
        
        {/* 4 Pillars Typography Section */}
        <div className="max-w-4xl mx-auto py-8 px-6 text-center mb-16">
          
          {/* Hook: Problem Statement */}
          <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
            NoMoreScamCalls covers <span className="text-red-600">PHONE</span> only.
          </div>
          
          {/* The Gap: 3 Missing Pillars */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="text-xl font-semibold text-gray-700 py-3 px-6 bg-red-50 border-2 border-red-200 rounded-lg">
              💬 TEXT
            </div>
            <div className="text-xl font-semibold text-gray-700 py-3 px-6 bg-red-50 border-2 border-red-200 rounded-lg">
              📧 EMAIL
            </div>
            <div className="text-xl font-semibold text-gray-700 py-3 px-6 bg-red-50 border-2 border-red-200 rounded-lg">
              🌐 WEB
            </div>
          </div>

          {/* Solution: 4 Pillars */}
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent mb-8 tracking-tight">
            4 PILLARS OF PROTECTION
          </h2>

          {/* Value Prop */}
          <div className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 leading-relaxed max-w-3xl mx-auto">
            Complete scammer protection from <span className="font-bold text-red-600">ALL 4 SIDES</span>
          </div>

          {/* Benefits Stack */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
              ✅ <span className="font-bold">Widest Coverage</span> on market
            </div>
            <div className="text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
              💰 <span className="font-bold">Best Value Bundle</span> pricing
            </div>
          </div>

          {/* CTA */}
          <div className="text-sm uppercase tracking-widest font-bold text-gray-600">
            See comparison chart below →
          </div>
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
