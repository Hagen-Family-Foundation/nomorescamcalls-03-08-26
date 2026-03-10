import React from 'react';
import { useBrand } from '../context/BrandContext';
import { SubmitForm } from './dashboard/SubmitForm';
import { PhoneTextEmailWebGrid } from './dashboard/PhoneTextEmailWebGrid';
import { ShieldLogo } from './ShieldLogo';

export const Dashboard = () => {
  const brand = useBrand();

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header className="bg-blue-900 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFEB3B] rounded-full flex items-center justify-center">
                <ShieldLogo className="h-6 w-6" color="#1E3A8A" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {brand.appName}
                </h1>
                <p className="text-[#FFEB3B] text-lg md:text-xl mt-1 font-bold">
                  Subscriber Dashboard
                </p>
              </div>
            </div>
            <a
              href="/"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors border border-blue-200"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Submit Form Section */}
        <SubmitForm />

        {/* Metrics Grid Section */}
        <PhoneTextEmailWebGrid />
      </div>
    </div>
  );
};
