import React from 'react';
import { Button } from './ui/button';
import { useBrand, activeBrandKey } from '../context/BrandContext';
import { ArrowRight, Calendar, ArrowDown } from 'lucide-react';

// Smooth scroll helper
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const FinalCTA = () => {
  const brand = useBrand();

  // Scaminater-specific content
  const isScaminater = activeBrandKey === 'scaminater';

  const title = isScaminater 
    ? 'Ready to Protect Your Leadership Team?'
    : `Ready to Stop Scam Calls Forever?`;

  const subheading = isScaminater
    ? "Treat your phone lines like the critical infrastructure they've become."
    : "Join the many friends and families across the US who've already taken back control.";

  const bodyCopy = isScaminater
    ? "One targeted call to the right person at the wrong moment can undo years of work. Scaminater gives you a quiet layer of protection between your leadership team and the people trying to exploit them."
    : "Phone calls, texts, emails, and secure website/shopping links – protecting families from theft, stress, and exposure to vulgar and inappropriate images and messages.";

  const reassuranceText = isScaminater
    ? "No hardware to install. No carrier change required.\nJust smarter screening around the lines that matter most."
    : "Cancel anytime. No contracts.";

  return (
    <section 
      id="final-cta" 
      className="py-20"
      style={{ background: `linear-gradient(135deg, ${brand.colors.primary} 0%, #0f2744 50%, ${brand.colors.primary} 100%)` }}
      data-testid="final-cta-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: brand.colors.secondary }}>
          {subheading}
        </p>

        {/* Body Copy */}
        <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          {bodyCopy}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          {/* Primary CTA - Start Free Trial → #bundles */}
          <div className="flex flex-col items-center">
            <a href="#bundles" onClick={(e) => { e.preventDefault(); scrollToSection('bundles'); }}>
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                style={{ 
                  backgroundColor: brand.colors.secondary, 
                  color: brand.colors.primary,
                  border: `3px solid ${brand.colors.secondary}`
                }}
                data-testid="final-cta-primary"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <span className="text-sm text-slate-300 mt-2">7 days free, then $15.99/mo</span>
          </div>

          {/* Secondary CTA - Learn More → #why-nmsc (Benefits/Pillars) */}
          <div className="flex flex-col items-center">
            <a href="#why-nmsc" onClick={(e) => { e.preventDefault(); scrollToSection('why-nmsc'); }}>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: brand.colors.secondary, 
                  borderWidth: '3px',
                  color: brand.colors.secondary 
                }}
                data-testid="final-cta-secondary"
              >
                {isScaminater && <Calendar className="h-5 w-5" />}
                Learn More
                <ArrowDown className="h-5 w-5" />
              </Button>
            </a>
            <span className="text-sm text-slate-300 mt-2">See why families trust us</span>
          </div>
        </div>

        {/* Tertiary Link - See how it works → #how-it-works */}
        <div className="mb-8">
          <a 
            href="#how-it-works" 
            onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}
            className="text-sm font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
            style={{ color: brand.colors.secondary }}
          >
            See how it works →
          </a>
        </div>

        {/* Reassurance Text */}
        <p className="text-slate-300 text-sm whitespace-pre-line max-w-lg mx-auto">
          {reassuranceText}
        </p>
      </div>
    </section>
  );
};
