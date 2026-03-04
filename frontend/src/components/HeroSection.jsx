import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const HeroSection = () => {
  const brand = useBrand();

  // Get brand-specific hero content
  const heroImage = brand.imagery?.heroImage || 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb';
  const heroImageAlt = brand.imagery?.heroImageAlt || 'Happy family';
  const trustIndicator = brand.messaging?.trustIndicator || 'Trusted protection for your family';

  // 4 Pillars image
  const pillarsImage = 'https://customer-assets.emergentagent.com/job_scam-stopper-app/artifacts/c6wvxyfr_image.png';

  // Determine overlay style
  const overlayStyle = 'bg-gradient-to-r from-white/95 via-white/85 to-white/60';

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16" data-testid="hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayStyle}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline - 2 line stack */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-2xl inline-block mb-8">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: '#0a1428', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
            >
              Protect Today's Decisions,
              <br />
              Preserve Tomorrow's Legacy
            </h1>
          </div>

          {/* 4 Pillars Image - Reduced size, centered */}
          <div className="max-w-md mx-auto mb-6">
            <img 
              src={pillarsImage}
              alt="Four Pillars of Protection"
              className="w-full h-40 object-cover rounded-xl shadow-lg"
              style={{ objectPosition: 'center 75%' }}
            />
          </div>

          {/* 4 Pillars Header - 2 line stack */}
          <div className="mb-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: '#0a1428' }}
            >
              4 Pillars of Protection
            </h2>
            <p 
              className="text-xl md:text-2xl font-semibold"
              style={{ color: '#eab308' }}
            >
              Phone - Text - Email - Web
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              style={{ 
                backgroundColor: brand.colors.secondary, 
                color: brand.colors.primary,
                border: `3px solid ${brand.colors.secondary}`,
                fontWeight: 700
              }}
              className="px-8 py-6 text-lg font-bold shadow-lg hover:opacity-90 hover:shadow-xl hover:scale-105 transition-all"
              data-testid="hero-cta-primary"
            >
              Get Protected Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm bg-white/70 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: `${brand.colors.primary}40` }}></div>
                  ))}
                </div>
                <span className="font-semibold text-gray-800">{trustIndicator}</span>
              </div>
              <div className="h-4 w-px bg-gray-400"></div>
              <span className="font-semibold text-gray-800">✓ No contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
