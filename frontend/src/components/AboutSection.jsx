import React from 'react';
import { useBrand, activeBrandKey } from '../context/BrandContext';
import { Shield } from 'lucide-react';

export const AboutSection = () => {
  const brand = useBrand();
  const isScaminater = activeBrandKey === 'scaminater';

  if (!isScaminater) {
    // Return default about section for other brands
    return (
      <section id="about" className="py-16 bg-gray-50" data-testid="about-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About {brand.appName}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {brand.appName} is dedicated to protecting families and individuals from phone scams using advanced AI technology.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-slate-50" data-testid="about-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About
          </h2>
          <p className="text-xl md:text-2xl font-semibold" style={{ color: brand.colors.primary }}>
            Built for people who take risk seriously.
          </p>
        </div>

        {/* Body Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Scaminater was created by a team obsessed with one problem: how easily a single phone call can be weaponized against the people who run a business.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We come from a background of building tools that protect seniors, families, and everyday consumers from scams. Scaminater takes that experience and focuses it on executives, business owners, and leadership teams — the people whose decisions move real money and shape real outcomes.
          </p>

          {/* Philosophy */}
          <div className="my-10">
            <p className="text-lg font-semibold text-gray-900 mb-4">Our philosophy is simple:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span style={{ color: brand.colors.primary }} className="mt-1.5">•</span>
                <span className="text-gray-700">Treat every leadership line as critical infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: brand.colors.primary }} className="mt-1.5">•</span>
                <span className="text-gray-700">Assume attackers will mix phone, email, and social channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: brand.colors.primary }} className="mt-1.5">•</span>
                <span className="text-gray-700">Make protection simple enough that busy people will actually use it</span>
              </li>
            </ul>
          </div>

          {/* Defensible Answer */}
          <div className="my-10 p-6 rounded-xl border-l-4" style={{ backgroundColor: `${brand.colors.primary}08`, borderColor: brand.colors.primary }}>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Scaminater exists to give you a defensible answer when someone asks,<br />
              <span className="font-semibold text-gray-900">"What are we doing to keep our people from being socially engineered over the phone?"</span>
            </p>
          </div>

          {/* Mission Line */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 flex-shrink-0 mt-1" style={{ color: brand.colors.primary }} />
              <p className="text-gray-600 leading-relaxed">
                When we do our job well, fewer people lose what they've spent a lifetime building — and more resources stay available for the families, teams, and communities that depend on them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
