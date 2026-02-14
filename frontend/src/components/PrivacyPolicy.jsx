import React from 'react';
import { ShieldLogo } from './ShieldLogo';
import { SEO } from './SEO';
import { useBrand } from '../context/BrandContext';

export const PrivacyPolicy = () => {
  const brand = useBrand();

  return (
    <>
      <SEO 
        title={`Privacy Policy - ${brand.appName}`}
        description={`Learn how ${brand.appName} protects your privacy and handles your data. We never sell your information. Call recordings stored for 7 days only.`}
        keywords="privacy policy, data protection, CCPA, privacy rights, data security, call recording storage"
        canonical={`https://${brand.domain}/privacy`}
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldLogo className="h-8 w-8" />
            <span className="text-xl font-bold">{brand.appName}</span>
          </div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <p className="text-gray-700 leading-relaxed mb-8">
            At {brand.domain}™, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our AI-powered call screening service.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">A. Account Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Name and email address</li>
              <li>Phone number(s) you wish to protect</li>
              <li>Billing and payment information (processed securely by Stripe)</li>
              <li>Account preferences and settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">B. Call Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Incoming caller phone numbers</li>
              <li>Call recordings (audio) of scam interactions</li>
              <li>Call transcripts and AI analysis results</li>
              <li>Call duration, date, and time stamps</li>
              <li>Caller ID information when available</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">C. Usage Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Dashboard activity and interactions</li>
              <li>Number classifications (good/bad numbers you save)</li>
              <li>Support messages and correspondence</li>
              <li>Browser type, IP address, and device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and improve our call screening service</li>
              <li>Identify and block scam calls using AI analysis</li>
              <li>Store call recordings for 7 days for your review</li>
              <li>Process billing and subscription management</li>
              <li>Send service updates, security alerts, and notifications</li>
              <li>Respond to support requests and customer service inquiries</li>
              <li>Improve our AI models to better detect scams (anonymized data only)</li>
              <li>Comply with legal obligations and cooperate with law enforcement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing & Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">A. We DO Share</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>With Law Enforcement:</strong> We share call recordings, transcripts, and scammer phone numbers with the FTC, FBI, local police, and other authorities to aid in fraud investigations. Your personal subscriber information (name, email, billing) is NOT included.</li>
              <li><strong>With Payment Processors:</strong> Stripe processes payments securely. We do not store full credit card numbers.</li>
              <li><strong>With Service Providers:</strong> Cloud hosting (secure storage), AI processing vendors, and analytics tools (anonymized data).</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or to protect our rights.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">B. We DO NOT</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sell or rent your personal information</li>
              <li>Share your data with advertisers or third-party marketers</li>
              <li>Use your recordings for commercial purposes beyond our service</li>
              <li>Share your subscriber identity with law enforcement (only scammer data)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention & Storage</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Call Recordings:</strong> Stored for 7 days, then automatically deleted. Download before expiration if you want to keep them.</li>
              <li><strong>Account Data:</strong> Retained while your account is active and for up to 1 year after cancellation for legal/billing purposes.</li>
              <li><strong>Scammer Data Submitted to Authorities:</strong> May be retained indefinitely as part of criminal investigations.</li>
              <li><strong>Security:</strong> All data is encrypted in transit (SSL) and at rest (AES-256).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights & Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Access Your Data:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correct Inaccuracies:</strong> Update your account information via the dashboard.</li>
              <li><strong>Delete Your Account:</strong> Contact support to request full account deletion (some data may be retained for legal compliance).</li>
              <li><strong>Opt-Out of Marketing:</strong> Unsubscribe from promotional messages (service messages remain required).</li>
              <li><strong>Download Recordings:</strong> Access and download your call recordings before they expire.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, contact us at <a href={`mailto:${brand.supportEmail}`} style={{ color: brand.colors.primary }} className="hover:opacity-80">{brand.supportEmail}</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies & Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Keep you logged in to your account</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze site usage (anonymized)</li>
              <li>Prevent fraud and unauthorized access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can disable cookies in your browser settings, but some features may not work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to external sites. We are not responsible for the privacy practices of third-party websites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              {brand.domain}™ is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If we discover such data, we will delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. California Privacy Rights (CCPA)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">California residents have additional rights under the CCPA:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Right to know what personal data is collected</li>
              <li>Right to delete personal data (with exceptions)</li>
              <li>Right to opt-out of data sales (we don't sell data)</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Users</h2>
            <p className="text-gray-700 leading-relaxed">
              Our servers are located in the United States. By using {brand.domain}™, you consent to your data being transferred to and processed in the U.S., which may have different privacy protections than your country.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Significant changes will be communicated with at least 30 days' notice. Continued use of the service after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions or concerns about this Privacy Policy:
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Email:</strong> <a href={`mailto:${brand.supportEmail}`} style={{ color: brand.colors.primary }} className="hover:opacity-80">{brand.supportEmail}</a>
            </p>
          </section>

          {/* Data Protection Summary Box */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Data Protection Summary</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ WE NEVER SELL YOUR PERSONAL INFORMATION</li>
              <li>✓ Call recordings auto-delete after 7 days</li>
              <li>✓ Your identity is NOT shared with law enforcement</li>
              <li>✓ All data encrypted with industry-standard security</li>
              <li>✓ You can delete your account anytime</li>
            </ul>
          </div>

          {/* Footer Box */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mt-8">
            <p className="text-gray-700 mb-4">
              © {new Date().getFullYear()} {brand.domain}™ - All rights reserved. UNLIMITED AI-powered scam protection for the modern age.
            </p>
            <p className="text-gray-600 font-semibold mb-4">
              Partnered with FTC, Federal, State and Local Law Enforcement
            </p>
            <div className="border-t border-orange-200 pt-4 mt-4">
              <h4 className="text-lg font-bold text-gray-900 mb-2">{brand.domain}</h4>
              <p style={{ color: brand.colors.primary }} className="font-semibold mb-2">UNLIMITED scam protection</p>
              <p className="text-gray-600">
                Defending against scams with automatic AI-powered UNLIMITED call screening and protection across your devices.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
    </>
  );
};
