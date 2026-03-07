import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { CheckCircle } from 'lucide-react';

export const SubmitForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reportType, setReportType] = useState('bad');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setPhoneNumber('');
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      {/* 4 Pillars Protection Active Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-6 mb-8 text-center shadow-md">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <CheckCircle className="h-7 w-7 text-blue-900" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">4 Pillars Protection Active</h2>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 items-end">
          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone-number" className="block text-blue-900 font-bold text-xl mb-3">
              Phone Number
            </label>
            <Input
              id="phone-number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-16 text-xl border-2 border-blue-200 focus:border-blue-500 rounded-xl px-6"
              disabled={loading || submitted}
            />
          </div>

          {/* Good/Bad Toggle */}
          <div>
            <label className="block text-blue-900 font-bold text-xl mb-3">
              Report Type
            </label>
            <div className="grid grid-cols-2 gap-4 h-16">
              <button
                type="button"
                onClick={() => setReportType('good')}
                disabled={loading || submitted}
                className={`rounded-xl font-bold text-lg transition-all border-2 ${
                  reportType === 'good'
                    ? 'bg-green-100 border-green-500 text-green-700'
                    : 'bg-gray-100 border-gray-300 text-gray-600 hover:border-green-400'
                }`}
              >
                Good
              </button>
              <button
                type="button"
                onClick={() => setReportType('bad')}
                disabled={loading || submitted}
                className={`rounded-xl font-bold text-lg transition-all border-2 ${
                  reportType === 'bad'
                    ? 'bg-red-100 border-red-500 text-red-700'
                    : 'bg-gray-100 border-gray-300 text-gray-600 hover:border-red-400'
                }`}
              >
                Bad
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!phoneNumber.trim() || loading || submitted}
          className={`w-full h-16 text-xl font-bold rounded-xl transition-all ${
            submitted
              ? 'bg-green-500 hover:bg-green-500'
              : 'bg-blue-900 hover:bg-blue-800'
          }`}
        >
          {submitted ? (
            <span className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6" />
              Data processing... ✓
            </span>
          ) : loading ? (
            'Submitting...'
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </div>
  );
};
