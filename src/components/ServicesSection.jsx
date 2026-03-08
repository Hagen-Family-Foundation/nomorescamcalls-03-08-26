import React from 'react';
import { MessageSquare, Mail, Globe, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

// Color constants
const colors = {
  navy900: '#0a1428',
  navy800: '#1a2338',
  navy700: '#2a3a58',
  yellow500: '#eab308',
  white: '#ffffff',
  grayLight: '#f8fafc',
};

const services = [
  {
    icon: MessageSquare,
    emoji: '💬',
    name: 'Textinaters',
    subtitle: 'SMS Protection',
    description: 'Blocks scam texts before they harm you.',
    features: [
      'Forwards/polls SMS for instant AI screening on Android & Apple.',
      'Red warning dot on fraud – 99%+ coverage across all devices.',
    ],
    price: '$12.99/line/mo',
  },
  {
    icon: Mail,
    emoji: '📧',
    name: 'Emailinaters',
    subtitle: 'Email Protection',
    description: 'Stops phishing emails in their tracks.',
    features: [
      'Forwards/polls emails for instant AI screening on Android & Apple.',
      'Red warning dot on fraud – 99%+ coverage across all devices.',
    ],
    price: '$12.99/line/mo',
  },
  {
    icon: Globe,
    emoji: '🌐',
    name: 'Webinaters',
    subtitle: 'Web/URL Protection',
    description: 'Alerts on fake or hacked sites instantly.',
    features: [
      'Audio + visual warnings for spoofed URLs, phishing, or compromised pages.',
      'On screen indicator on fraud – 99%+ coverage across all devices.',
    ],
    price: '$12.99/line/mo',
  },
];

// Smooth scroll function
const scrollToBundles = (e) => {
  e.preventDefault();
  const bundleSection = document.getElementById('bundles');
  if (bundleSection) {
    bundleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const ServiceCard = ({ emoji, name, subtitle, description, features, price }) => (
  <div 
    className="rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1"
    style={{ 
      backgroundColor: colors.navy800,
      border: `2px solid ${colors.navy700}`,
    }}
  >
    {/* Header */}
    <div className="text-center mb-4">
      <span className="text-4xl mb-2 block">{emoji}</span>
      <h3 className="text-2xl font-bold" style={{ color: colors.yellow500 }}>
        {name}
      </h3>
      <p className="text-sm font-semibold" style={{ color: colors.grayLight }}>
        {subtitle}
      </p>
    </div>

    {/* Description */}
    <p className="text-center mb-4 font-medium" style={{ color: colors.white }}>
      {description}
    </p>

    {/* Features */}
    <ul className="space-y-3 mb-6">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span style={{ color: colors.yellow500 }}>•</span>
          <span className="text-sm" style={{ color: colors.grayLight }}>
            {feature}
          </span>
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <a href="#bundles" onClick={scrollToBundles}>
      <Button
        className="w-full btn-secondary-3d py-3 text-base font-bold text-center justify-center hover:scale-105 transition-transform flex items-center gap-2"
        data-testid={`service-cta-${name.toLowerCase()}`}
      >
        See Bundle Savings
        <ArrowDown className="h-4 w-4" />
      </Button>
    </a>
  </div>
);

export const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="py-16"
      style={{ backgroundColor: colors.navy900 }}
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: colors.white }}>
            Complete Protection Suite
          </h2>
          <p style={{ color: colors.grayLight }}>
            Choose the protection you need – or bundle for maximum savings
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
