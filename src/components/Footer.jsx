import React from 'react';
import { ShieldLogo } from './ShieldLogo';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBrand } from '../context/BrandContext';

export const Footer = () => {
  const brand = useBrand();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: brand.colors.primary }} className="text-gray-200" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShieldLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-white">{brand.appName}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Providing protections from scammers via your phone, text, email, web surfing and shopping links.
            </p>
            <div className="flex gap-4">
              <a 
                href={brand.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity" 
                style={{ color: brand.colors.secondary }}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={brand.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity" 
                style={{ color: brand.colors.secondary }}
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="hover:opacity-80 transition-opacity" 
                style={{ color: brand.colors.secondary }}
                aria-label="Reddit"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
              <a 
                href={brand.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity" 
                style={{ color: brand.colors.secondary }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="hover:opacity-80 transition-opacity" 
                style={{ color: brand.colors.secondary }}
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href={brand.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity" 
                style={{ color: brand.colors.secondary }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')} 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  Benefits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  Press
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a 
                  href={`mailto:${brand.supportEmail}`} 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  {brand.supportEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a 
                  href={`tel:${brand.phone}`} 
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = brand.colors.secondary}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}
                >
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {brand.appName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link 
              to={brand.legal.privacyPolicyUrl} 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
            >
              Privacy Policy
            </Link>
            <Link 
              to={brand.legal.termsUrl} 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
            >
              Terms of Service
            </Link>
            <Link 
              to="/disclaimer" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => e.target.style.color = brand.colors.primary}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
            >
              AI Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
