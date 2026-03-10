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
        
        {/* 4 Pillars Typography Section - CONVERSION MOCKUP */}
        <div className="max-w-4xl mx-auto py-8 px-6 text-center mb-16">
          
          {/* FEAR HEADLINE - Agitate the Problem */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3 leading-tight" style={{ 
              color: '#FFD700',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000'
            }}>
              Scammers Attack From 4 Directions.
            </h2>
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#DC2626' }}>
              You're Only Protected From 1.
            </p>
          </div>

          {/* THREAT VISUALIZATION - Show the Gaps */}
          <div className="grid grid-cols-4 gap-3 mb-8 max-w-3xl mx-auto">
            {/* Protected - Phone */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg" style={{ color: '#FFFFFF', backgroundColor: '#16A34A', border: '3px solid #15803D' }}>
                  📞 PHONE
                </div>
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓</span>
              </div>
              <span className="text-sm font-bold mt-2" style={{ color: '#16A34A' }}>PROTECTED</span>
            </div>
            {/* Exposed - Text */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg opacity-90" style={{ color: '#0A0F2A', backgroundColor: '#FEE2E2', border: '3px solid #DC2626' }}>
                  💬 TEXT
                </div>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">✗</span>
              </div>
              <span className="text-sm font-bold mt-2" style={{ color: '#DC2626' }}>EXPOSED</span>
            </div>
            {/* Exposed - Email */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg opacity-90" style={{ color: '#0A0F2A', backgroundColor: '#FEE2E2', border: '3px solid #DC2626' }}>
                  📧 EMAIL
                </div>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">✗</span>
              </div>
              <span className="text-sm font-bold mt-2" style={{ color: '#DC2626' }}>EXPOSED</span>
            </div>
            {/* Exposed - Web */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg opacity-90" style={{ color: '#0A0F2A', backgroundColor: '#FEE2E2', border: '3px solid #DC2626' }}>
                  🌐 WEB
                </div>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">✗</span>
              </div>
              <span className="text-sm font-bold mt-2" style={{ color: '#DC2626' }}>EXPOSED</span>
            </div>
          </div>

          {/* SOCIAL PROOF - Statistics */}
          <div className="bg-navy-800 rounded-2xl p-6 mb-8 max-w-3xl mx-auto" style={{ backgroundColor: '#1a2338' }}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-black" style={{ color: '#FFD700' }}>$10B+</p>
                <p className="text-sm text-gray-300">Lost to scams in 2024</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black" style={{ color: '#FFD700' }}>73%</p>
                <p className="text-sm text-gray-300">Attacks via TEXT & EMAIL</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black" style={{ color: '#FFD700' }}>$1,200</p>
                <p className="text-sm text-gray-300">Avg. victim loss</p>
              </div>
            </div>
          </div>

          {/* SOLUTION - The 4 Pillars United */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ color: '#1974D2' }}>
              Close ALL 4 Doors With One Bundle
            </h3>
            <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto mb-6">
              <div className="flex flex-col items-center">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg" style={{ color: '#0A0F2A', backgroundColor: '#FFD700', border: '3px solid #0A0F2A' }}>
                  📞 PHONE
                </div>
                <span className="text-xs font-semibold mt-1" style={{ color: '#0A0F2A' }}>NoMoreScamCalls</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg" style={{ color: '#0A0F2A', backgroundColor: '#FFD700', border: '3px solid #0A0F2A' }}>
                  💬 TEXT
                </div>
                <span className="text-xs font-semibold mt-1" style={{ color: '#0A0F2A' }}>Textinaters.com</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg" style={{ color: '#0A0F2A', backgroundColor: '#FFD700', border: '3px solid #0A0F2A' }}>
                  📧 EMAIL
                </div>
                <span className="text-xs font-semibold mt-1" style={{ color: '#0A0F2A' }}>Emailinaters.com</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-lg font-semibold py-3 px-4 rounded-lg shadow-lg" style={{ color: '#0A0F2A', backgroundColor: '#FFD700', border: '3px solid #0A0F2A' }}>
                  🌐 WEB
                </div>
                <span className="text-xs font-semibold mt-1" style={{ color: '#0A0F2A' }}>Webinaters.com</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-black" style={{ 
              color: '#FFD700',
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
            }}>
              The 4 Pillars of Protection
            </p>
          </div>

          {/* VALUE PROPS */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="text-base font-semibold bg-white rounded-xl p-4 shadow-lg" style={{ color: '#0A0F2A', border: '3px solid #FFD700' }}>
              ✅ <span className="font-black" style={{ color: '#1974D2' }}>Widest Coverage</span> on market
            </div>
            <div className="text-base font-semibold bg-white rounded-xl p-4 shadow-lg" style={{ color: '#0A0F2A', border: '3px solid #FFD700' }}>
              💰 <span className="font-black" style={{ color: '#1974D2' }}>Bundle & Save 40%</span> vs separate
            </div>
          </div>

          {/* PRIMARY CTA */}
          <div className="mb-6">
            <a href="#pricing" className="inline-block text-xl md:text-2xl font-black py-4 px-10 rounded-xl shadow-2xl transform hover:scale-105 transition-all cursor-pointer" style={{ 
              color: '#0A0F2A', 
              backgroundColor: '#FFD700',
              border: '4px solid #0A0F2A',
              boxShadow: '0 6px 0 #0A0F2A'
            }}>
              🛡️ Get Complete Protection Now
            </a>
          </div>

          {/* URGENCY */}
          <p className="text-sm font-semibold" style={{ color: '#DC2626' }}>
            ⏰ Limited Time: Lock in bundle pricing before rates increase
          </p>

          {/* Secondary CTA */}
          <div className="mt-6 text-sm uppercase tracking-widest font-bold inline-block pb-2" style={{ color: '#1A1F4A', borderBottom: '2px solid #FFD700' }}>
            Or compare all options below →
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
