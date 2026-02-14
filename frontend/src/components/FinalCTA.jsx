import React from 'react';
import { Button } from './ui/button';
import { useBrand, activeBrandKey } from '../context/BrandContext';
import { ArrowRight, Calendar } from 'lucide-react';

export const FinalCTA = () => {
  const brand = useBrand();

  // Scaminater-specific content
  const isScaminater = activeBrandKey === 'scaminater';

  const title = isScaminater 
    ? 'Ready to Protect Your Leadership Team?'
    : `Ready to Stop Scam Calls Forever?`;

  const subheading = isScaminater
    ? "Treat your phone lines like the critical infrastructure they've become."
    : "Join thousands who've already taken back control of their phones.";

  const bodyCopy = isScaminater
    ? "One targeted call to the right person at the wrong moment can undo years of work. Scaminater gives you a quiet layer of protection between your leadership team and the people trying to exploit them."
    : `Don't wait until you become a victim. Start your free trial today and experience the peace of mind that comes with ${brand.appName}'s AI-powered protection.`;

  const primaryCTA = isScaminater ? 'Start Your 7‑Day Free Trial' : 'Start Free Trial';
  const primarySubtext = isScaminater ? 'No contracts. Cancel anytime.' : '7 days free, then $6.99/month';

  const secondaryCTA = isScaminater ? 'Schedule a 15‑Minute Demo' : 'Learn More';
  const secondarySubtext = isScaminater ? 'Walk through real attack scenarios with us.' : 'See how it works';

  const reassuranceText = isScaminater
    ? "No hardware to install. No carrier change required.\nJust smarter screening around the lines that matter most."
    : "No credit card required. Cancel anytime.";

  return (
    <section 
      id="final-cta" 
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      data-testid="final-cta-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: brand.colors.primary }}>
          {subheading}
        </p>

        {/* Body Copy */}
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {bodyCopy}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          {/* Primary CTA */}
          <div className="flex flex-col items-center">
            <Button
              size="lg"
              className="text-white px-8 py-6 text-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
              style={{ backgroundColor: brand.colors.primary }}
              data-testid="final-cta-primary"
            >
              {primaryCTA}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <span className="text-sm text-slate-400 mt-2">{primarySubtext}</span>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col items-center">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform bg-transparent"
              style={{ 
                borderColor: brand.colors.primary, 
                color: brand.colors.primary 
              }}
              data-testid="final-cta-secondary"
            >
              {isScaminater && <Calendar className="h-5 w-5" />}
              {secondaryCTA}
            </Button>
            <span className="text-sm text-slate-400 mt-2">{secondarySubtext}</span>
          </div>
        </div>

        {/* Reassurance Text */}
        <p className="text-slate-400 text-sm whitespace-pre-line max-w-lg mx-auto">
          {reassuranceText}
        </p>
      </div>
    </section>
  );
};
