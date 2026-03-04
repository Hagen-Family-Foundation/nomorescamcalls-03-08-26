import React from 'react';
import { Users, Heart, Building2, Briefcase } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const WhoItsFor = () => {
  const brand = useBrand();

  // Icon mapping
  const iconMap = {
    Users,
    Heart,
    Building2,
    Briefcase
  };

  // Default audiences for brands without custom audiences config
  const defaultAudiences = [
    {
      icon: 'Users',
      title: 'Families',
      description: 'Protect every member of your household from phone scams. One plan covers everyone.',
    },
    {
      icon: 'Heart',
      title: 'Seniors & Caregivers',
      description: 'Give elderly loved ones extra protection from scammers who target them most.',
    },
    {
      icon: 'Building2',
      title: 'Small Business Owners',
      description: 'Keep your business line professional and free from spam that wastes your time.',
    },
    {
      icon: 'Briefcase',
      title: 'Busy Professionals',
      description: 'Focus on your work without constant interruptions from robocalls and scammers.',
    }
  ];

  // Use brand-specific audiences if available, otherwise use defaults
  const audiences = brand.audiences?.targets || defaultAudiences;

  return (
    <section id="benefits" className="py-20 bg-white" data-testid="who-its-for-section">
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
          {audiences.map((audience, index) => {
            const Icon = iconMap[audience.icon] || Users;
            return (
              <div
                key={index}
                className="group text-center rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all overflow-hidden p-6"
                style={{ '--hover-border-color': `${brand.colors.primary}60` }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${brand.colors.primary}60`}
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
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
