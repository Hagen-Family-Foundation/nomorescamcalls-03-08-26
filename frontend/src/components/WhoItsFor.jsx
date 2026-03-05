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
      image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb'
    },
    {
      icon: 'Heart',
      title: 'Seniors & Caregivers',
      description: 'Give elderly loved ones extra protection from scammers who target them most.',
      image: 'https://images.unsplash.com/photo-1758691030817-a6271a533c42'
    },
    {
      icon: 'Building2',
      title: 'Small Business Owners',
      description: 'Keep your business line professional and free from spam that wastes your time.',
      image: 'https://images.unsplash.com/photo-1550523303-e9e27624ed35'
    },
    {
      icon: 'Briefcase',
      title: 'Busy Professionals',
      description: 'Focus on your work without constant interruptions from robocalls and scammers.',
      image: 'https://images.unsplash.com/photo-1763651959357-7382188b500f'
    }
  ];

  // Use brand-specific audiences if available, otherwise use defaults
  const audiences = brand.audiences?.targets || defaultAudiences;
  const sectionTitle = brand.audiences?.sectionTitle || 'Who It\'s For';
  const sectionSubtitle = brand.audiences?.sectionSubtitle || 'Protection for everyone, from families to professionals';

  return (
    <section id="who-its-for" className="py-20 bg-white" data-testid="who-its-for-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = iconMap[audience.icon] || Users;
            return (
              <div
                key={index}
                className="group text-center rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all overflow-hidden"
                style={{ '--hover-border-color': `${brand.colors.primary}60` }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${brand.colors.primary}60`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f3f4f6'}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={audience.image} 
                    alt={audience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div 
                  className="p-6 bg-white transition-colors"
                  style={{ '--hover-bg': `${brand.colors.primary}10` }}
                >
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${brand.colors.primary}20` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: brand.colors.primary }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {audience.description}
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
