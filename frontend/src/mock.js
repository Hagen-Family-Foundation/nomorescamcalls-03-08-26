// Mock data for white-label scam call protection app
// This file contains placeholder data used for UI development
// Replace with real backend API calls in production

export const mockData = {
  pricing: [
    {
      id: 'basic',
      name: 'Basic',
      price: 11.99,
      description: 'Essential protection for individuals',
      features: [
        'Screen & block scam calls',
        'Real-time call filtering',
        'Weekly reports',
        'Email support',
        'Single phone line'
      ],
      popular: false
    },
    {
      id: 'mid',
      name: 'Mid',
      price: 15.99,
      description: 'Complete protection for couples',
      features: [
        'Everything in Basic',
        'Up to 2 phone lines',
        'Advanced scam detection',
        'Daily reports',
        'Priority email support',
        'Text message filtering'
      ],
      popular: true
    },
    {
      id: 'family',
      name: 'Family',
      price: 22.99,
      description: 'Full protection for the whole family',
      features: [
        'Everything in Mid',
        'Up to 5 phone lines',
        'AI-powered protection',
        'Real-time alerts',
        '24/7 phone support',
        'Email & SMS filtering',
        'Family dashboard'
      ],
      popular: false
    }
  ],
  faqs: [
    {
      question: 'How does this stop scam calls?',
      answer: 'Our advanced AI system analyzes incoming calls in real-time, checking against a database of millions of known scam numbers and patterns. We screen calls before they reach your phone, blocking suspicious ones automatically.'
    },
    {
      question: 'Will it block important calls by mistake?',
      answer: 'No. Our smart filtering system learns from your call patterns and only blocks verified scam numbers. Legitimate calls from businesses, doctors, or family always get through. You can also whitelist important numbers.'
    },
    {
      question: 'Does it work with my current phone?',
      answer: 'Yes! Our service works with any phone - iPhone, Android, or landline. Setup takes just 2 minutes using simple call forwarding. No app installation required.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 7-day free trial (credit card required). If you cancel before day 7, you will not be charged. After the trial, no prorated refunds will be issued for partial or full months remaining on billing cycles. All sales are final once a billing cycle begins.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. You may cancel your subscription at any time through your account dashboard or by contacting support. If you cancel mid-cycle, you retain access to your subscription benefits until the end of your current billing period. No future charges will occur.'
    },
    {
      question: 'How quickly does protection start?',
      answer: 'Protection begins immediately after you complete the simple setup process. Within minutes, our system starts screening your calls and blocking scammers.'
    },
    {
      question: 'What happens to blocked calls?',
      answer: 'Blocked calls never reach your phone. They\'re automatically disconnected, and you\'ll receive a weekly report showing which scam calls we stopped, so you can see the protection in action.'
    }
  ]
};
