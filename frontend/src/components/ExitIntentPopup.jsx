import React, { useState, useEffect, useCallback } from 'react';
import { X, Shield, Check, Clock, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { useBrand } from '../context/BrandContext';

export const ExitIntentPopup = () => {
  const brand = useBrand();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback((e) => {
    // Only trigger when mouse moves to top of viewport (exit intent)
    if (e.clientY <= 5 && !hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [hasShown]);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Add mouse leave listener after a delay (don't show immediately)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before enabling exit intent

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitPopupShown', 'true');
  };

  const handleClaim = () => {
    handleClose();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      data-testid="exit-intent-popup"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
          aria-label="Close popup"
          data-testid="exit-popup-close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div 
          className="px-6 py-8 text-white text-center"
          style={{ background: `linear-gradient(to right, ${brand.colors.primary}, ${brand.colors.primaryDark || brand.colors.primary})` }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Wait! Don't Leave Unprotected
          </h2>
          <p className="opacity-90">
            We have a special offer just for you
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Offer Box */}
          <div 
            className="border-2 rounded-xl p-4 mb-6 text-center"
            style={{ backgroundColor: `${brand.colors.primary}10`, borderColor: `${brand.colors.primary}40` }}
          >
            <div className="flex items-center justify-center gap-2 font-semibold mb-2" style={{ color: brand.colors.primary }}>
              <Clock className="h-4 w-4" />
              <span>Limited Time Offer</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              7 Days FREE + 20% Off
            </div>
            <p className="text-gray-600 text-sm">
              Your first month when you sign up today
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            {[
              'AI-powered scam detection',
              'Protect your entire family',
              'Cancel anytime, no contracts',
              '30-day money-back guarantee'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-green-600" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full text-white py-6 text-lg font-semibold"
              style={{ backgroundColor: brand.colors.primary }}
              onClick={handleClaim}
              data-testid="exit-popup-cta"
            >
              <Shield className="h-5 w-5 mr-2" />
              Claim My Free Trial
            </Button>
            <button
              onClick={handleClose}
              className="w-full text-gray-500 hover:text-gray-700 text-sm py-2 transition-colors"
            >
              No thanks, I'll risk it
            </button>
          </div>

          {/* Trust Note */}
          <p className="text-center text-xs text-gray-400 mt-4">
            Credit Card Required • Instant activation
          </p>
        </div>
      </div>
    </div>
  );
};
