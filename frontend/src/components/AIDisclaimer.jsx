import React from 'react';
import { ShieldLogo } from './ShieldLogo';
import { SEO } from './SEO';
import { useBrand } from '../context/BrandContext';

export const AIDisclaimer = () => {
  const brand = useBrand();

  return (
    <>
      <SEO 
        title={`AI Persona Disclaimer - ${brand.appName}`}
        description={`Learn about ${brand.appName} AI-generated voice personas. All personas are fictional and created for satirical and educational purposes to combat phone scams.`}
        keywords="AI disclaimer, voice personas, AI generated voices, satire, parody, scam prevention"
        canonical={`https://${brand.domain}/disclaimer`}
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldLogo className="h-8 w-8" />
            <span className="text-xl font-bold">{brand.appName}</span>
          </div>
          <h1 className="text-4xl font-bold">AI Persona & Likeness Disclaimer</h1>
          <p className="text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-gray-800 font-semibold">
              Important: Please read this disclaimer carefully before using {brand.domain}™ services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. AI-Generated Voice Personas</h2>
            <p className="text-gray-700 leading-relaxed">
              All voice personas used in {brand.domain}™ services are entirely AI-generated and fictional. The voices, personalities, names, and characteristics do NOT represent any real individuals, living or deceased. Any resemblance to actual persons is purely coincidental and unintentional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. No Real Person Depiction</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No real people's voices have been cloned or replicated</li>
              <li>No voice actors were impersonated without consent</li>
              <li>All personas are creative works of fiction</li>
              <li>Voice synthesis is 100% computer-generated using AI technology</li>
              <li>No likeness rights have been violated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Satirical & Entertainment Purpose</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Our AI personas are designed for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Satirical purposes:</strong> to humorously waste scammers' time</li>
              <li><strong>Entertainment:</strong> providing comedic relief through fictional characters</li>
              <li><strong>Educational value:</strong> demonstrating scam tactics to raise awareness</li>
              <li><strong>Crime prevention:</strong> deterring scammers by consuming their resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Stereotypes & Character Portrayals</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some personas utilize exaggerated stereotypes (for example, "confused elderly person," "conspiracy theorist") for comedic effect only. These portrayals:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Are not intended to mock or demean any real group of people</li>
              <li>Exist solely to confuse and frustrate scammers</li>
              <li>Should not be taken as accurate representations of any demographic</li>
              <li>Are protected as parody and satire under fair use</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Acknowledgment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using {brand.domain}™, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You understand all personas are fictional AI creations</li>
              <li>You will not claim any persona represents a real person</li>
              <li>You will not use recordings to defame or harass real individuals</li>
              <li>You understand the service is for anti-scam purposes only</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Voice Technology Disclosure</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Custom-trained voice models NOT based on real individuals</li>
              <li>Text-to-speech AI with personality programming</li>
              <li>No unauthorized voice cloning or sampling</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Image & Likeness Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any images associated with personas are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Stock photos from licensed sources (Unsplash, etc.)</li>
              <li>AI-generated images with no real person basis</li>
              <li>Illustrative only and not intended as actual depictions</li>
              <li>Properly attributed when required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Legal Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {brand.domain}™ operates under:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>First Amendment protections (satire, parody, free speech)</li>
              <li>Anti-fraud statutes (authorized recording of scam attempts)</li>
              <li>Consumer protection laws (helping users avoid fraud)</li>
              <li>Fair use doctrine for comedic and educational content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              If you believe any AI persona infringes on your rights or resembles you without consent, please contact us immediately at <a href={`mailto:${brand.supportEmail}`} style={{ color: brand.colors.primary }} className="hover:opacity-80">{brand.supportEmail}</a>. We will investigate and take appropriate action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Personas</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, add, or remove AI personas at any time without notice. All changes will maintain compliance with this disclaimer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Questions or concerns about our AI personas?
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Email:</strong> <a href={`mailto:${brand.supportEmail}`} style={{ color: brand.colors.primary }} className="hover:opacity-80">{brand.supportEmail}</a>
            </p>
          </section>

          {/* Footer Box */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mt-12">
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
