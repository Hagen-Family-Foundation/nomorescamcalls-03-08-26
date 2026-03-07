import React from 'react';
import { useBrand } from '../context/BrandContext';
import { SubmitForm } from './dashboard/SubmitForm';
import { PhoneTextEmailWebGrid } from './dashboard/PhoneTextEmailWebGrid';

export const Dashboard = () => {
  const brand = useBrand();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {brand.appName}
              </h1>
              <p className="text-yellow-400 text-lg md:text-xl mt-1 font-semibold">
                Subscriber Dashboard
              </p>
            </div>
            <a
              href="/"
              className="bg-white text-blue-900 px-6 py-3 rounded-xl text-lg font-bold hover:bg-gray-100 transition-colors"
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
