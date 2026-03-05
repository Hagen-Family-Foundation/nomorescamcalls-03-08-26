import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const HeroSection = () => {
  const brand = useBrand();

  // Get brand-specific hero content
  const heroHeadline = brand.messaging?.heroHeadline || `Enjoy your day, Let Skeeter Take That Call!`;
  const heroSubheadline = brand.messaging?.heroSubheadline || brand.tagline || 'Stop scammers before they reach your phone. Protect yourself and your loved ones with advanced call screening that works 24/7.';
  const heroImage = brand.imagery?.heroImage || 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb';
  const heroImageAlt = brand.imagery?.heroImageAlt || 'Happy family';
  const trustIndicator = brand.messaging?.trustIndicator || 'Trusted protection for your family';

  // Determine overlay style based on brand (darker for executive brands)
  const overlayStyle = brand.colors?.background === '#0F172A' 
    ? 'bg-gradient-to-r from-slate-900/98 via-slate-900/95 to-slate-900/90'
    : 'bg-gradient-to-r from-white/95 via-white/85 to-white/60';

  // Use black/dark text for both headline and subheadline
  const textColor = brand.colors?.background === '#0F172A' ? 'text-gray-900' : 'text-gray-900';
  const subtextColor = brand.colors?.background === '#0F172A' ? 'text-gray-900' : 'text-gray-700';

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
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-2xl inline-block">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${textColor} leading-tight text-center`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Protect Today's Decisions,
              <br />
              Preserve Tomorrow's Legacy
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              style={{ backgroundColor: brand.colors.primary }}
              className="text-white px-8 py-6 text-lg font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
              data-testid="hero-cta-primary"
            >
              Get Protected Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex justify-center w-full">
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
              <span className="font-semibold text-gray-800">⭐ 4.9/5 rating</span>
              <div className="h-4 w-px bg-gray-400"></div>
              <span className="font-semibold text-gray-800">✓ No contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
