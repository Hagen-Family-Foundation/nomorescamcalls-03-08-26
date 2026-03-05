import React from 'react';
import { useBrand } from '../context/BrandContext';

export const PressSection = () => {
  const brand = useBrand();
  
  // Default press mentions for brands without custom config
  const defaultMentions = [
    {
      outlet: 'TechCrunch',
      logo: 'TC',
      quote: '"Revolutionary AI approach to fighting phone scams"',
      color: 'bg-green-600'
    },
    {
      outlet: 'Forbes',
      logo: 'FORBES',
      quote: '"A game-changer for senior citizens and families"',
      color: 'bg-blue-900'
    },
    {
      outlet: 'WSJ',
      logo: 'WSJ',
      quote: '"Innovative technology meets consumer protection"',
      color: 'bg-gray-800'
    },
    {
      outlet: 'CNBC',
      logo: 'CNBC',
      quote: `"${brand.appName} blocks 99.8% of fraud attempts"`,
      color: 'bg-blue-600'
    },
    {
      outlet: 'USA Today',
      logo: 'USA TODAY',
      quote: '"Finally, a real solution to the robocall epidemic"',
      color: 'bg-blue-500'
    },
    {
      outlet: 'Consumer Reports',
      logo: 'CR',
      quote: '"Best-in-class scam call protection service"',
      color: 'bg-red-600'
    }
  ];

  // Use brand-specific press mentions if available, otherwise use defaults
  const mentions = brand.pressMentions || defaultMentions;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            As Featured In
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognized by leading media outlets for our innovative approach to scam protection
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {mentions.map((mention, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all group"
            >
              {/* Style logos to look like actual publications */}
              {mention.outlet === 'TechCrunch' && (
                <div className="font-bold text-2xl text-green-600 group-hover:scale-105 transition-transform" style={{ fontFamily: 'Arial, sans-serif' }}>
                  TechCrunch
                </div>
              )}
              {mention.outlet === 'Forbes' && (
                <div className="font-bold text-2xl tracking-wider" style={{ fontFamily: 'Georgia, serif', color: '#000' }}>
                  FORBES
                </div>
              )}
              {mention.outlet === 'WSJ' && (
                <div className="text-center">
                  <div className="font-serif text-xs tracking-widest text-gray-800">THE</div>
                  <div className="font-serif font-bold text-xl tracking-tight text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                    Wall Street Journal
                  </div>
                </div>
              )}
              {mention.outlet === 'CNBC' && (
                <div className="font-bold text-3xl text-blue-600 group-hover:scale-105 transition-transform" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.05em' }}>
                  CNBC
                </div>
              )}
              {mention.outlet === 'USA Today' && (
                <div className="text-center">
                  <div className="font-bold text-2xl text-blue-600" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                    USA
                  </div>
                  <div className="font-bold text-xl text-blue-600" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                    TODAY
                  </div>
                </div>
              )}
              {mention.outlet === 'Consumer Reports' && (
                <div className="text-center">
                  <div className="font-bold text-base text-red-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Consumer
                  </div>
                  <div className="font-bold text-xl text-red-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Reports
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quotes Carousel */}
        <div className="rounded-2xl p-8 border" style={{ background: `linear-gradient(to bottom right, ${brand.colors.primary}10, white)`, borderColor: `${brand.colors.primary}20` }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentions.map((mention, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${mention.color} text-white font-bold text-sm px-3 py-1 rounded inline-block mb-4`}>
                  {mention.logo}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  {mention.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16 text-center">
          {brand.awardsSection?.titleLine1 ? (
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {brand.awardsSection.titleLine1}
              <br />
              <span className="block mt-2">{brand.awardsSection.titleLine2}</span>
            </h3>
          ) : (
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {brand.awardsSection?.title || 'Awards & Recognition'}
            </h3>
          )}
          <div className="mb-8"></div>
          
          {/* Show textbox or awards based on brand config */}
          {brand.awardsSection?.type === 'textbox' ? (
            // Single wide text box for custom content
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <p className="text-xl text-gray-800 leading-relaxed">
                {brand.awardsSection.content}
              </p>
            </div>
          ) : (
            // Default awards grid
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2">Best Consumer Protection</h4>
                <p className="text-sm text-gray-600">Tech Innovation Awards 2024</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="font-bold text-gray-900 mb-2">Top Rated App</h4>
                <p className="text-sm text-gray-600">Consumer Choice Awards 2024</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="font-bold text-gray-900 mb-2">Security Excellence</h4>
                <p className="text-sm text-gray-600">Cybersecurity Summit 2024</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-bold text-gray-900 mb-2">Innovation Leader</h4>
                <p className="text-sm text-gray-600">AI Excellence Awards 2024</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
