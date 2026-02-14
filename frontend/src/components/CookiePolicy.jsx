import React from 'react';
import { ShieldLogo } from './ShieldLogo';
import { SEO } from './SEO';
import { useBrand } from '../context/BrandContext';

export const CookiePolicy = () => {
  const brand = useBrand();

  return (
    <>
      <SEO 
        title={`Cookie Policy - ${brand.appName}`}
        description={`Learn how ${brand.domain} uses cookies and similar technologies to improve your experience on our website.`}
        keywords={`cookie policy, cookies, privacy, tracking, ${brand.appName}`}
        canonical={`https://${brand.domain}/cookies`}
      />
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gray-900 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <ShieldLogo className="h-8 w-8" />
              <span className="text-xl font-bold">{brand.appName}</span>
            </div>
            <h1 className="text-4xl font-bold">Cookie Policy</h1>
            <p className="text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-gray-700 leading-relaxed mb-8">
              This Cookie Policy explains how {brand.domain}™ uses cookies and similar technologies when you visit our website.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering your preferences and improving site performance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core features such as security and fraud prevention.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Performance Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies collect information about how visitors use our site (for example, which pages are visited most often). This helps us improve site speed and user experience.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Functionality Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies remember your preferences and settings to provide a more personalized experience.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may use analytics cookies to understand how visitors interact with our website so we can improve the service.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Please note:</strong> disabling cookies may limit certain features of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that set cookies on your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payment processors (for subscription billing)</li>
                <li>Analytics providers (for example, Google Analytics)</li>
                <li>Social platforms (for sharing features)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about our use of cookies, email us at{' '}
                <a href={`mailto:${brand.supportEmail}`} style={{ color: brand.colors.primary }} className="hover:opacity-80">
                  {brand.supportEmail}
                </a>
              </p>
            </section>

            {/* Policy Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-2">© {new Date().getFullYear()} {brand.domain}™, All rights reserved.</p>
              <p style={{ color: brand.colors.primary }} className="font-semibold mb-2">UNLIMITED AI-powered scam protection for the modern age.</p>
              <p className="text-gray-500 text-sm">Partnered with FTC, Federal, State and Local Law Enforcement</p>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};
