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
    <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
      {/* Complete 4 Pillars Protection Banner - 36px */}
      <div className="bg-[#1E3A8A] text-white rounded-lg p-8 mb-8 text-center border border-[#1E3A8A]">
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-[#FCD34D] rounded-full flex items-center justify-center">
            <CheckCircle className="h-7 w-7 text-[#1E3A8A]" />
          </div>
          <h2 className="text-[36px] font-bold tracking-tight">COMPLETE 4 PILLARS PROTECTION</h2>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 items-end">
          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone-number" className="block text-[#1E3A8A] font-bold text-2xl mb-3">
              Phone Number
            </label>
            <Input
              id="phone-number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-16 text-xl border border-gray-300 focus:border-blue-500 rounded-lg px-6"
              disabled={loading || submitted}
            />
          </div>

          {/* Good/Bad Toggle */}
          <div>
            <label className="block text-[#1E3A8A] font-bold text-2xl mb-3">
              Report Type
            </label>
            <div className="grid grid-cols-2 gap-4 h-16">
              <button
                type="button"
                onClick={() => setReportType('good')}
                disabled={loading || submitted}
                className={`rounded-lg font-bold text-lg transition-all border ${
                  reportType === 'good'
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : 'bg-gray-50 border-gray-300 text-gray-600 hover:border-green-400'
                }`}
              >
                Good
              </button>
              <button
                type="button"
                onClick={() => setReportType('bad')}
                disabled={loading || submitted}
                className={`rounded-lg font-bold text-lg transition-all border ${
                  reportType === 'bad'
                    ? 'bg-red-50 border-red-500 text-red-700'
                    : 'bg-gray-50 border-gray-300 text-gray-600 hover:border-red-400'
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
          className={`w-full h-16 text-xl font-bold rounded-lg transition-all ${
            submitted
              ? 'bg-[#FCD34D] hover:bg-[#FCD34D] text-[#1E3A8A]'
              : 'bg-[#FCD34D] hover:bg-[#FDE68A] text-[#1E3A8A]'
          }`}
        >
          {submitted ? (
            <span className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6" />
              ✓ PROCESSED
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
