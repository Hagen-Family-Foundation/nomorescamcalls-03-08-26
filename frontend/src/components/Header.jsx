import React, { useState, useEffect } from 'react';
import { ShieldLogo } from './ShieldLogo';
import { Button } from './ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPromoBar, setShowPromoBar] = useState(true);
  const brand = useBrand();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Promo Bar - Shows on scroll */}
      {showPromoBar && isScrolled && (
        <div 
          style={{ backgroundColor: brand.colors.primary }}
          className="fixed top-0 left-0 right-0 z-[60] text-white py-2 px-4 transform transition-transform duration-300"
          data-testid="promo-bar"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
            <Sparkles className="h-4 w-4 hidden sm:block" />
            <span className="font-medium">
              <span className="hidden sm:inline">🎉 Limited Time: </span>
              Start your <strong>{brand.pricing?.promoText || '7-Day FREE Trial'}</strong> today!
            </span>
            <Button
              size="sm"
              style={{ backgroundColor: 'white', color: brand.colors.primary }}
              className="hover:opacity-90 h-7 px-3 text-xs font-semibold"
              onClick={() => scrollToSection('pricing')}
              data-testid="promo-bar-cta"
            >
              Claim Now
            </Button>
            <button
              onClick={() => setShowPromoBar(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Close promo bar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          showPromoBar && isScrolled ? 'top-10' : 'top-0'
        } ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
        }`}
        data-testid="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <ShieldLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">{brand.appName}</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-gray-600 transition-colors"
                style={{ '--hover-color': brand.colors.primary }}
                onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                onMouseLeave={(e) => e.target.style.color = '#4b5563'}
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-gray-600 transition-colors"
                onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                onMouseLeave={(e) => e.target.style.color = '#4b5563'}
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-gray-600 transition-colors"
                onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                onMouseLeave={(e) => e.target.style.color = '#4b5563'}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-600 transition-colors"
                onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                onMouseLeave={(e) => e.target.style.color = '#4b5563'}
              >
                FAQ
              </button>
              <Button 
                style={{ backgroundColor: brand.colors.primary }}
                className="text-white transition-all duration-300 hover:opacity-90"
                onClick={() => scrollToSection('pricing')}
                data-testid="header-cta"
              >
                {isScrolled ? 'Start Free Trial' : 'Get Protected'}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              <nav className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="text-left text-gray-600 transition-colors"
                  onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                  onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="text-left text-gray-600 transition-colors"
                  onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                  onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                >
                  Benefits
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="text-left text-gray-600 transition-colors"
                  onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                  onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                >
                  Pricing
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="text-left text-gray-600 transition-colors"
                  onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
                  onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                >
                  FAQ
                </button>
                <Button 
                  style={{ backgroundColor: brand.colors.primary }}
                  className="text-white w-full hover:opacity-90"
                  onClick={() => scrollToSection('pricing')}
                >
                  Start Free Trial
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
