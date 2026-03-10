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
          <div className="text-2xl md:text-3xl font-bold mb-6 leading-tight" style={{ color: '#0A0F2A' }}>
            NoMoreScamCalls covers <span style={{ 
              color: '#FFD700', 
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000'
            }}>PHONE</span> only.
          </div>
          
          {/* The Gap: 3 Missing Pillars */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-xl font-semibold py-3 px-6 rounded-lg shadow-lg" style={{ color: '#0A0F2A', backgroundColor: '#FFD700', border: '4px solid #0A0F2A' }}>
                💬 TEXT
              </div>
              <span className="text-base md:text-lg font-semibold mt-2" style={{ color: '#0A0F2A' }}>Textinaters.com</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-semibold py-3 px-6 rounded-lg shadow-lg" style={{ color: '#0A0F2A', backgroundColor: '#FFD700', border: '4px solid #0A0F2A' }}>
                📧 EMAIL
              </div>
              <span className="text-base md:text-lg font-semibold mt-2" style={{ color: '#0A0F2A' }}>Emailinaters.com</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-semibold py-3 px-6 rounded-lg shadow-lg" style={{ color: '#0A0F2A', backgroundColor: '#FFD700', border: '4px solid #0A0F2A' }}>
                🌐 WEB
              </div>
              <span className="text-base md:text-lg font-semibold mt-2" style={{ color: '#0A0F2A' }}>Webinaters.com</span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl font-semibold mb-6 leading-relaxed max-w-3xl mx-auto" style={{ color: '#1974D2' }}>
            Combining NoMoreScamCalls with Textinaters, Emailinaters and Webinaters forms the highest level of scam protection available in one place on the internet today.
          </p>

          {/* Solution: 4 Pillars */}
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight" style={{ color: '#1974D2' }}>
            The 4 Pillars of Protection
          </h2>

          {/* Value Prop */}
          <div className="text-xl md:text-2xl font-black mb-8 leading-relaxed max-w-3xl mx-auto py-4" style={{ 
            color: '#FFD700',
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000, 1px 0 0 #000'
          }}>
            Complete scam protection from ALL 4 SIDES
          </div>

          {/* Benefits Stack */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-lg font-semibold bg-white rounded-xl p-6 shadow-2xl" style={{ color: '#0A0F2A', border: '4px solid #FFD700' }}>
              ✅ <span className="font-black" style={{ color: '#1974D2' }}>Widest Coverage</span> on market
            </div>
            <div className="text-lg font-semibold bg-white rounded-xl p-6 shadow-2xl" style={{ color: '#0A0F2A', border: '4px solid #FFD700' }}>
              💰 <span className="font-black" style={{ color: '#1974D2' }}>Best Value Bundle</span> pricing
            </div>
          </div>

          {/* CTA */}
          <div className="text-sm uppercase tracking-widest font-bold inline-block pb-2" style={{ color: '#1A1F4A', borderBottom: '2px solid #FFD700' }}>
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
