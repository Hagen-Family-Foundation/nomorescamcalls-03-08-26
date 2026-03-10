import React from 'react';
import { Button } from './ui/button';
import { useBrand, activeBrandKey } from '../context/BrandContext';
import { ArrowRight, ArrowDown } from 'lucide-react';

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
    : `Ready to Stop Scam Calls for Good?`;

  const subheading = isScaminater
    ? "Treat your phone lines like the critical infrastructure they've become."
    : "Join families across the US who've already taken back control of their phones, texts, email, and web.";

  const bodyCopy = isScaminater
    ? "One targeted call to the right person at the wrong moment can undo years of work. Scaminater gives you a quiet layer of protection between your leadership team and the people trying to exploit them."
    : "Phone calls, texts, emails, and website/shopping links — all screened before scammers can reach you or your family.";

  const reassuranceText = isScaminater
    ? "No hardware to install. No carrier change required.\nJust smarter screening around the lines that matter most."
    : "7 days free, then just $15.99/month. Cancel anytime. No contracts.";

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

        {/* Primary CTA - Start 7-Day Free Trial → #bundles */}
        <div className="flex flex-col items-center mb-8">
          <Button
            size="lg"
            onClick={() => scrollToSection('bundles')}
            className="px-12 py-7 text-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
            style={{ 
              backgroundColor: brand.colors.secondary, 
              color: brand.colors.primary,
              border: `3px solid ${brand.colors.secondary}`,
              boxShadow: '0 8px 25px rgba(234, 179, 8, 0.4)'
            }}
            data-testid="final-cta-primary"
          >
            Start 7-Day Free Trial
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Secondary CTA - See How It Works → #how-it-works */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            size="lg"
            onClick={() => scrollToSection('how-it-works')}
            className="px-8 py-4 text-base font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            style={{ 
              backgroundColor: brand.colors.primary,
              color: brand.colors.secondary,
              border: `2px solid ${brand.colors.secondary}`
            }}
            data-testid="final-cta-how-it-works"
          >
            See How It Works
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>

        {/* Reassurance Text */}
        <p className="text-slate-300 text-sm whitespace-pre-line max-w-lg mx-auto">
          {reassuranceText}
        </p>
      </div>
    </section>
  );
};
