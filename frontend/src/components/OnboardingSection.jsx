import React from 'react';
import { Button } from './ui/button';
import { useBrand } from '../context/BrandContext';
import { 
  UserPlus, 
  Shield, 
  LayoutDashboard, 
  Phone, 
  MessageSquare, 
  Mail, 
  Globe, 
  Plus, 
  ArrowRight,
  Check
} from 'lucide-react';

// Navy & Yellow color scheme for authoritative feel
const colors = {
  navy: '#1e3a5f',
  navyDark: '#0f2744',
  navyLight: '#2d5a8a',
  yellow: '#fbbf24',
  yellowBright: '#fcd34d',
  yellowDark: '#f59e0b',
  white: '#ffffff',
  grayLight: '#f1f5f9',
};

// Step data for the 3-step onboarding flow
const onboardingSteps = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Sign Up & Connect',
    bullets: [
      'Enter phone/text/email accounts (1-click with providers like Telnyx).',
      'No hardware, no apps—just forward to our screening.',
    ],
  },
  {
    step: 2,
    icon: Shield,
    title: 'We Screen 24/7',
    bullets: [
      'Every call/text/email/web link gets checked (Hiya score + our blacklists).',
      'Local blacklist: Your personal "bad numbers" (add anytime).',
      'Global blacklist: Shared scam intel from all users (you contribute safely).',
    ],
  },
  {
    step: 3,
    icon: LayoutDashboard,
    title: 'Your Dashboard',
    bullets: [
      'See Total / Blocked / Dollars Saved / Time Saved for Phone Calls, Texts, Emails, Websites.',
      'Report false positives ("good number? whitelist it") or missed scams ("bad? blacklist it").',
      '2-tier control: Local changes only affect YOU; global helps everyone.',
    ],
  },
];

// Dashboard preview data - realistic numbers
const dashboardData = [
  { type: 'Phone Calls', icon: Phone, total: 47, blocked: 12, saved: 24, time: 2.4 },
  { type: 'Text Messages', icon: MessageSquare, total: 23, blocked: 8, saved: 16, time: 1.1 },
  { type: 'Emails', icon: Mail, total: 31, blocked: 5, saved: 10, time: 0.8 },
  { type: 'Websites', icon: Globe, total: 18, blocked: 3, saved: 6, time: 0.5 },
];

// Individual Step Card Component
const StepCard = ({ step, icon: Icon, title, bullets }) => (
  <div 
    className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-yellow-400 transition-all duration-300"
    style={{ boxShadow: '0 10px 40px rgba(30, 58, 95, 0.15)' }}
  >
    {/* Step Number Badge */}
    <div 
      className="absolute -top-4 -left-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
      style={{ backgroundColor: colors.navy }}
    >
      {step}
    </div>
    
    {/* Icon */}
    <div 
      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mt-2"
      style={{ backgroundColor: colors.yellow }}
    >
      <Icon className="h-8 w-8" style={{ color: colors.navyDark }} />
    </div>
    
    {/* Title */}
    <h3 
      className="text-xl font-bold mb-4"
      style={{ color: colors.navyDark }}
    >
      {title}
    </h3>
    
    {/* Bullets */}
    <ul className="space-y-3">
      {bullets.map((bullet, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Check 
            className="h-5 w-5 flex-shrink-0 mt-0.5" 
            style={{ color: colors.yellowDark }} 
          />
          <span className="text-gray-700 text-sm leading-relaxed">{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Dashboard Preview Row Component
const DashboardRow = ({ type, icon: Icon, total, blocked, saved, time }) => (
  <div className="grid grid-cols-5 gap-2 md:gap-4 py-3 px-2 md:px-4 border-b border-slate-200 last:border-b-0 items-center">
    {/* Type with Icon */}
    <div className="flex items-center gap-2 col-span-1">
      <Icon className="h-4 w-4 md:h-5 md:w-5" style={{ color: colors.navy }} />
      <span className="text-xs md:text-sm font-medium text-slate-700 hidden sm:inline">{type}</span>
      <span className="text-xs font-medium text-slate-700 sm:hidden">{type.split(' ')[0]}</span>
    </div>
    
    {/* Total */}
    <div className="text-center">
      <span className="text-sm md:text-lg font-bold" style={{ color: colors.navyDark }}>{total}</span>
      <p className="text-[10px] md:text-xs text-slate-500">Total</p>
    </div>
    
    {/* Blocked */}
    <div className="text-center">
      <span className="text-sm md:text-lg font-bold text-red-600">{blocked}</span>
      <p className="text-[10px] md:text-xs text-slate-500">Blocked</p>
    </div>
    
    {/* $ Saved */}
    <div className="text-center">
      <span className="text-sm md:text-lg font-bold text-green-600">${saved}</span>
      <p className="text-[10px] md:text-xs text-slate-500">Saved</p>
    </div>
    
    {/* Time Saved */}
    <div className="text-center">
      <span className="text-sm md:text-lg font-bold" style={{ color: colors.navyLight }}>{time} hrs</span>
      <p className="text-[10px] md:text-xs text-slate-500">Time</p>
    </div>
  </div>
);

export const OnboardingSection = () => {
  const brand = useBrand();

  return (
    <section 
      id="how-it-works-detailed" 
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.grayLight }}
      data-testid="onboarding-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: colors.navyDark }}
          >
            How It Works{' '}
            <span 
              className="inline-block px-3 py-1 rounded-lg text-lg md:text-xl font-semibold"
              style={{ backgroundColor: colors.yellow, color: colors.navyDark }}
            >
              3 Minutes to Start Protecting
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Connect your numbers → We screen everything → You stay in control via your dashboard.
          </p>
        </div>

        {/* 3-Step Onboarding Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {onboardingSteps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>

        {/* Dashboard Preview Section */}
        <div className="max-w-4xl mx-auto">
          <h3 
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: colors.navyDark }}
          >
            Dashboard Preview
          </h3>

          {/* Dashboard Mockup Card */}
          <div 
            className="bg-white rounded-2xl overflow-hidden shadow-2xl border-4"
            style={{ borderColor: colors.navy }}
          >
            {/* Dashboard Header */}
            <div 
              className="px-4 md:px-6 py-4 flex items-center justify-between"
              style={{ backgroundColor: colors.navy }}
            >
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-white" />
                <span className="text-white font-bold text-sm md:text-base">Your Protection Dashboard</span>
              </div>
              <div 
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: colors.yellow, color: colors.navyDark }}
              >
                LIVE
              </div>
            </div>

            {/* Dashboard Table Header */}
            <div 
              className="grid grid-cols-5 gap-2 md:gap-4 py-2 px-2 md:px-4 text-xs font-semibold text-slate-500 border-b border-slate-200"
              style={{ backgroundColor: '#f8fafc' }}
            >
              <div>Channel</div>
              <div className="text-center">Total</div>
              <div className="text-center">Blocked</div>
              <div className="text-center">$ Saved</div>
              <div className="text-center">Time</div>
            </div>

            {/* Dashboard Rows */}
            <div className="divide-y divide-slate-100">
              {dashboardData.map((row) => (
                <DashboardRow key={row.type} {...row} />
              ))}
            </div>

            {/* Dashboard Action Buttons */}
            <div 
              className="px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
              style={{ backgroundColor: '#f8fafc' }}
            >
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Button
                  size="sm"
                  className="text-white font-semibold flex items-center gap-1 text-xs md:text-sm"
                  style={{ backgroundColor: colors.navy }}
                  data-testid="dashboard-preview-good-btn"
                >
                  <Plus className="h-3 w-3 md:h-4 md:w-4" />
                  Good Number
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="font-semibold flex items-center gap-1 text-xs md:text-sm"
                  style={{ borderColor: '#ef4444', color: '#ef4444' }}
                  data-testid="dashboard-preview-bad-btn"
                >
                  <Plus className="h-3 w-3 md:h-4 md:w-4" />
                  Bad Number
                </Button>
              </div>
              <a 
                href="/dashboard"
                className="text-sm font-medium flex items-center gap-1 hover:underline"
                style={{ color: colors.navyLight }}
                data-testid="view-full-dashboard-link"
              >
                View Full Dashboard
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Empowering Caption */}
          <p 
            className="text-center mt-6 text-sm md:text-base italic max-w-2xl mx-auto"
            style={{ color: colors.navyLight }}
          >
            "Empowering: Even if a 'bad' number slips through (legit spam?), blacklist it locally in seconds. 
            <span className="font-semibold"> You never lose control.</span>"
          </p>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <a href="/dashboard">
              <Button
                size="lg"
                className="text-white px-8 py-6 text-lg font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition-transform shadow-lg"
                style={{ backgroundColor: colors.yellow, color: colors.navyDark }}
                data-testid="onboarding-cta-btn"
              >
                Start Free Trial → See Your Dashboard
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
