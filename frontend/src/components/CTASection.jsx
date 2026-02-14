import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const CTASection = () => {
  const brand = useBrand();
  const ctaText = brand.messaging?.ctaText || "Take back control of your phone today.";

  return (
    <section 
      className="py-20 text-white relative overflow-hidden"
      style={{ background: `linear-gradient(to bottom right, ${brand.colors.primary}, ${brand.colors.primaryDark || brand.colors.primary})` }}
      data-testid="cta-section"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to Stop Scam Calls Forever?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
          {ctaText}
          {' '}Protection starts in just 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:opacity-90"
            style={{ backgroundColor: 'white', color: brand.colors.primary }}
            data-testid="cta-primary-btn"
          >
            Get Protected Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <span className="text-white/90">7-day free trial • Credit Card Required</span>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Always-On Protection</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Real-Time</div>
            <div className="text-white/80">AI Detection</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Zero</div>
            <div className="text-white/80">False Positives</div>
          </div>
        </div>
      </div>
    </section>
  );
};
