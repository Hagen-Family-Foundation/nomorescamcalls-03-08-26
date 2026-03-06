import React from 'react';
import { ShieldLogo } from './ShieldLogo';
import { SEO } from './SEO';
import { useBrand } from '../context/BrandContext';

export const TermsAndConditions = () => {
  const brand = useBrand();

  return (
    <>
      <SEO 
        title={`Terms & Conditions - ${brand.appName}`}
        description={`Read the terms and conditions for ${brand.appName} AI-powered scam call protection service. Learn about subscriptions, refunds, cancellations, and service policies.`}
        keywords="terms of service, conditions, refund policy, cancellation policy, scam call protection terms"
        canonical={`https://${brand.domain}/terms`}
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldLogo className="h-8 w-8" />
            <span className="text-xl font-bold">{brand.appName}</span>
          </div>
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          <p className="text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              The use of the site in the 7 day free trial or during any subscription term constitutes acceptance of these Terms & Conditions. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {brand.domain} provides AI-powered call forwarding services that engage with suspected scam callers using automated voice personas. Subscribers will maintain full access for all paid subscriptions upon cancellation until the paid period has passed and any credits toward access to the {brand.domain} website and/or its services are exhausted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription Plans & Pricing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscription plans and pricing are as listed on the site. Changes in pricing will be given with a 30 day notice in advance. Payment of the increased pricing is noted as acceptance of the change.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Billing:</strong> Monthly subscriptions are billed on the same day each month. Your payment method will be charged automatically unless you cancel before the next billing cycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Call Recording & Storage</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All scam calls are recorded for quality, safety, and entertainment purposes.</li>
              <li>Callers are notified that calls are being recorded via automated message.</li>
              <li>Call recordings are stored for 7 days from the date of the call.</li>
              <li>Users must download recordings before the 7-day expiration.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing with Law Enforcement</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our service, you consent to us sharing call recordings, transcripts, and phone numbers with law enforcement agencies (FTC, local police) for investigation and prosecution of scam operations. Your personal subscriber information (name, email, billing details) is NOT included in submissions to authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Users agree not to use {brand.domain} for any unlawful or prohibited purposes. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Harassment or abuse of individuals.</li>
              <li>Impersonation of {brand.domain} staff or services.</li>
              <li>Attempting to disrupt or interfere with the service.</li>
              <li>Any activity that violates local, state, federal, or international laws.</li>
              <li>Abuse of the service privileges (for example, using the service to harass legitimate callers).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Violation of acceptable use may result in immediate termination of services without refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability & Fair Use</h2>
            <p className="text-gray-700 leading-relaxed">
              While all services offer calling protection, we reserve the right to temporarily throttle or limit service in cases of extreme abuse or technical necessity. "Fair use" means using the service as intended for personal scam protection and/or entertainment purposes with regards to phone call recordings. Commercial resale or redistribution of this service is prohibited unless a signed agreement is in place. The agreement will spell out the boundaries and specific restrictions that may be exposed during such a contract, keeping proprietary practices confidential even after the contract has expired.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {brand.domain} is provided "as is" without warranties. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Accuracy of scam detection (false positives or false negatives may occur).</li>
              <li>Any damages resulting from use of our service.</li>
              <li>Missed legitimate calls forwarded to our service.</li>
              <li>Service interruptions or downtime.</li>
              <li>Loss of data due to user failure to download recordings before expiration.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Ongoing efforts are always in motion to provide the highest level of vetting and interrogation available. It is the goal of the {brand.appName} brand to provide the cleanest results regarding the identification of nefarious threats in phone links coming into your domain and lives. With constant ongoing efforts to stay ahead of scam artists worldwide by proactively upgrading our defensive efforts, the sharing of knowledge gained with subscribers and the general public is our contribution. It is and always will be the core mission of {brand.domain} to help stop this kind of behavior for the benefit of our towns and communities everywhere.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cancellation & Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your account dashboard or by contacting support.</li>
              <li><strong>Access After Cancellation:</strong> If you cancel mid-cycle, you retain access to your subscription benefits until the end of your current billing period.</li>
              <li><strong>Refunds:</strong> No prorated refunds will be issued for partial or full months remaining on billing cycles. All sales are final once a billing cycle begins, either on a month-to-month or annual discounted purchase basis.</li>
              <li><strong>Price Lock Guarantee:</strong> First-year subscribers who cancel and later re-subscribe will not be eligible for original launch pricing.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect, store, and process:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>User account information (name, email, phone).</li>
              <li>Call recordings and transcripts (7-day storage).</li>
              <li>Payment information (processed by secure third parties).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Data is encrypted and stored securely. See our full Privacy Policy for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All AI voice personas, scripts, branding, technology, and the phone call service model are proprietary to {brand.domain}. Users may not reproduce, distribute, or create derivative works without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Users will be notified via email of significant changes at least 30 days in advance. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall {brand.domain}, its affiliates, or its partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the service, even if advised of the possibility of such damages. Our total liability shall not exceed the amount you paid for the service in the one month preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions are governed by the laws of the United States and the state of Kansas. Any disputes shall be resolved in the courts of Kansas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms & Conditions:
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Email:</strong> <a href={`mailto:${brand.supportEmail}`} style={{ color: brand.colors.primary }} className="hover:opacity-80">{brand.supportEmail}</a>
            </p>
          </section>

          {/* Protection Summary Box */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Protection Summary</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Phone scam call screening and blocking.</li>
              <li>• 7-day call recording storage (calls only).</li>
              <li>• Multi-device sync across phones, laptops, desktops, tablets.</li>
              <li>• 24/7 automatic protection.</li>
              <li>• Cancel anytime - no contracts - see section 9 for specifics.</li>
            </ul>
          </div>

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
