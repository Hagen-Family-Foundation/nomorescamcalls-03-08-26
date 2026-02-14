import React, { useState } from 'react';
import { Phone, Shield, CheckCircle, Plus, Clock } from 'lucide-react';
import { generateSubscriberData } from '../mockDashboardData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useBrand } from '../context/BrandContext';

// Import reusable dashboard components
import {
  StatCard,
  TimeRangeFilter,
  getTimeRangeLabel,
  DashboardHeader,
  DashboardAction,
} from './dashboard';

// Simple number submission component - Black shadows, black text, black buttons with white text
const NumberSubmitForm = ({ type, onSubmit, testId }) => {
  const [phone, setPhone] = useState('');
  const [label, setLabel] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isWhitelist = type === 'whitelist';
  const config = isWhitelist ? {
    title: 'Add Good Number (Whitelist)',
    description: 'Numbers you always want to allow through',
    icon: <CheckCircle className="h-6 w-6 text-black" />,
  } : {
    title: 'Report Bad Number (Blacklist)',
    description: 'Numbers you want to always block',
    icon: <Shield className="h-6 w-6 text-black" />,
  };

  const handleSubmit = () => {
    if (phone) {
      onSubmit({ phone, label: label || 'Unlabeled', type });
      setPhone('');
      setLabel('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg p-6 border border-gray-300" 
      style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}
      data-testid={testId}
    >
      <div className="flex items-center gap-3 mb-4">
        {config.icon}
        <div>
          <h3 className="text-lg font-bold text-black">{config.title}</h3>
          <p className="text-sm text-black">{config.description}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <Input
          placeholder="Phone number (e.g., 913-555-1234)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-gray-400 focus:border-black text-black"
          data-testid={`${testId}-phone-input`}
        />
        <Input
          placeholder="Label (optional, e.g., 'Mom' or 'Spam caller')"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="border-gray-400 focus:border-black text-black"
          data-testid={`${testId}-label-input`}
        />
        <Button
          onClick={handleSubmit}
          className="w-full text-white"
          style={{ backgroundColor: '#000000' }}
          disabled={!phone}
          data-testid={`${testId}-submit-btn`}
        >
          <Plus className="h-4 w-4 mr-2" />
          {isWhitelist ? 'Add to Whitelist' : 'Report & Block'}
        </Button>
        
        {submitted && (
          <p className="text-sm text-black text-center font-medium">
            ✓ Number submitted successfully
          </p>
        )}
      </div>
    </div>
  );
};

export const SubscriberDashboard = () => {
  const brand = useBrand();
  const [timeRange, setTimeRange] = useState('30d');

  const data = generateSubscriberData(timeRange);

  // Handle number submissions
  const handleNumberSubmit = (item) => {
    console.log('Number submitted:', item);
    // In production, this would call an API
  };

  return (
    <div className="min-h-screen bg-slate-100" data-testid="subscriber-dashboard">
      {/* Header */}
      <DashboardHeader
        title={brand.appName}
        subtitle="Subscriber Dashboard"
        actions={
          <DashboardAction 
            label="Account Settings"
            testId="account-settings-btn"
          />
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time Range Filter */}
        <div className="mb-8">
          <TimeRangeFilter
            value={timeRange}
            onChange={setTimeRange}
            testId="subscriber-time-filter"
          />
        </div>

        {/* Call Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Calls"
            value={data.totalCalls}
            icon={<Phone className="h-8 w-8 text-black" />}
            badge={getTimeRangeLabel(timeRange)}
            testId="stat-total-calls"
          />
          <StatCard
            title="Good Calls"
            value={data.goodCalls}
            subtitle={`${((data.goodCalls / data.totalCalls) * 100).toFixed(1)}% of total`}
            icon={<CheckCircle className="h-8 w-8 text-black" />}
            badge="Allowed Through"
            testId="stat-good-calls"
          />
          <StatCard
            title="Scams Blocked"
            value={data.badCalls}
            subtitle={`${((data.badCalls / data.totalCalls) * 100).toFixed(1)}% of total`}
            icon={<Shield className="h-8 w-8 text-black" />}
            badge="Protected"
            testId="stat-bad-calls"
          />
          <StatCard
            title="Time Saved"
            value={data.badCalls * 45}
            suffix=" min"
            subtitle={`${Math.floor((data.badCalls * 45) / 60)} hrs ${(data.badCalls * 45) % 60} min total`}
            icon={<Clock className="h-8 w-8 text-black" />}
            badge="45 min/call"
            testId="stat-time-saved"
          />
        </div>

        {/* Number Submission Forms */}
        <div className="grid md:grid-cols-2 gap-8">
          <NumberSubmitForm
            type="whitelist"
            onSubmit={handleNumberSubmit}
            testId="whitelist-submit"
          />
          <NumberSubmitForm
            type="blacklist"
            onSubmit={handleNumberSubmit}
            testId="blacklist-submit"
          />
        </div>
      </div>
    </div>
  );
};
