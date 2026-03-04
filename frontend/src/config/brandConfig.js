/**
 * ============================================================================
 * MULTI-BRAND CONFIGURATION
 * ============================================================================
 * 
 * This file supports multiple brands in a single codebase.
 * Each brand is defined as a separate config object in the `brands` map.
 * 
 * HOW IT WORKS:
 * 1. All brands are defined in the `brands` object below
 * 2. The active brand is selected via VITE_BRAND_KEY environment variable
 * 3. BrandContext.jsx reads this file and provides the active brand to components
 * 4. Components use useBrand() hook to access brand values - no changes needed
 * 
 * TO ADD A NEW BRAND:
 * 1. Copy an existing brand config (e.g., secondBrand)
 * 2. Give it a unique key (e.g., thirdBrand)
 * 3. Update all values for your new brand
 * 4. Set VITE_BRAND_KEY=thirdBrand in .env.local
 * 
 * VITE VERSION - uses import.meta.env and VITE_* prefix
 */

// Helper function to safely get environment variables
const getEnvVar = (key, defaultValue = '') => {
  const value = import.meta.env[key];
  return value !== undefined ? value : defaultValue;
};

/**
 * ============================================================================
 * BRAND DEFINITIONS
 * ============================================================================
 * 
 * Each brand has a unique key (e.g., 'default', 'secondBrand').
 * The key is used to select the active brand via VITE_BRAND_KEY.
 */
export const brands = {
  
  /**
   * --------------------------------------------------------------------------
   * DEFAULT BRAND: NoMoreScamCalls
   * --------------------------------------------------------------------------
   * This is the original/master brand. Used when VITE_BRAND_KEY is not set
   * or is set to 'default'.
   */
  default: {
    // ========== APP IDENTITY ==========
    appName: getEnvVar('VITE_NAME', 'NoMoreScamCalls'),
    companyName: getEnvVar('VITE_COMPANY_NAME', 'NoMoreScamCalls, Inc.'),
    domain: getEnvVar('VITE_DOMAIN', 'nomorescamcalls.com'),
    frontendUrl: getEnvVar('VITE_FRONTEND_URL', 'http://localhost:3000'),
    apiUrl: getEnvVar('VITE_API_URL', 'http://localhost:5000'),
    tagline: getEnvVar('VITE_TAGLINE', 'Stop scammers before they reach your phone'),

    // ========== CONTACT INFO ==========
    contactEmail: getEnvVar('VITE_CONTACT_EMAIL', 'support@nomorescamcalls.com'),
    supportEmail: getEnvVar('VITE_SUPPORT_EMAIL', 'support@nomorescamcalls.com'),
    salesEmail: getEnvVar('VITE_SALES_EMAIL', 'sales@nomorescamcalls.com'),
    phone: getEnvVar('VITE_PHONE', '1-913-585-8300'),
    address: getEnvVar('VITE_ADDRESS', '8712 Mackey Street, Overland Park, KS 66212'),

    // ========== COLORS ==========
    colors: {
      primary: getEnvVar('VITE_COLOR_PRIMARY', '#EA580C'),
      primaryDark: getEnvVar('VITE_COLOR_PRIMARY_DARK', '#D64A08'),
      secondary: getEnvVar('VITE_COLOR_SECONDARY', '#1F2937'),
      accent: getEnvVar('VITE_COLOR_ACCENT', '#3B82F6'),
      success: getEnvVar('VITE_COLOR_SUCCESS', '#10B981'),
      warning: getEnvVar('VITE_COLOR_WARNING', '#F59E0B'),
      error: getEnvVar('VITE_COLOR_ERROR', '#EF4444'),
      background: getEnvVar('VITE_COLOR_BACKGROUND', '#FFFFFF'),
      text: getEnvVar('VITE_COLOR_TEXT', '#1F2937'),
      textLight: getEnvVar('VITE_COLOR_TEXT_LIGHT', '#6B7280'),
    },

    // ========== SOCIAL MEDIA LINKS ==========
    social: {
      facebook: getEnvVar('VITE_SOCIAL_FACEBOOK', 'https://facebook.com/nomorescamcalls'),
      twitter: getEnvVar('VITE_SOCIAL_TWITTER', 'https://twitter.com/nomorescamcalls'),
      linkedin: getEnvVar('VITE_SOCIAL_LINKEDIN', 'https://linkedin.com/company/nomorescamcalls'),
      instagram: getEnvVar('VITE_SOCIAL_INSTAGRAM', 'https://instagram.com/nomorescamcalls'),
    },

    // ========== PRICING TIERS ==========
    pricing: {
      currency: getEnvVar('VITE_CURRENCY', 'USD'),
      tiers: [
        {
          name: 'Basic',
          monthlyPrice: '15.99',
          annualPrice: '159.99',
          linesIncluded: 1,
          stripeMonthlyId: getEnvVar('VITE_STRIPE_BASIC_MONTHLY', 'price_basic_monthly'),
          stripeAnnualId: getEnvVar('VITE_STRIPE_BASIC_ANNUAL', 'price_basic_annual'),
          features: [
            'Core protection features',
            'Call screening',
            'Basic reporting',
            'Email support',
          ],
        },
        {
          name: 'Mid',
          monthlyPrice: '28.99',
          annualPrice: '289.99',
          linesIncluded: 3,
          stripeMonthlyId: getEnvVar('VITE_STRIPE_MID_MONTHLY', 'price_mid_monthly'),
          stripeAnnualId: getEnvVar('VITE_STRIPE_MID_ANNUAL', 'price_mid_annual'),
          features: [
            'All Basic features',
            'Advanced filtering',
            'Priority support',
            'Analytics dashboard',
            'Custom rules',
          ],
        },
        {
          name: 'Family',
          monthlyPrice: '47.99',
          annualPrice: '479.99',
          linesIncluded: 5,
          stripeMonthlyId: getEnvVar('VITE_STRIPE_FAMILY_MONTHLY', 'price_family_monthly'),
          stripeAnnualId: getEnvVar('VITE_STRIPE_FAMILY_ANNUAL', 'price_family_annual'),
          features: [
            'All Mid features',
            'Multiple family members',
            'Advanced AI detection',
            'Phone support',
            'Custom integration',
            'Dedicated account manager',
          ],
        },
      ],
    },

    // ========== DECORATIVE ELEMENTS ==========
    decorations: {
      spinningGlobeEnabled: getEnvVar('VITE_DECORATION_GLOBE', 'true') === 'true',
      flashingLightEnabled: getEnvVar('VITE_DECORATION_LIGHT', 'true') === 'true',
      particlesEnabled: getEnvVar('VITE_DECORATION_PARTICLES', 'false') === 'true',
      globeGradientStart: getEnvVar('VITE_DECORATION_GLOBE_START', '#FF6B35'),
      globeGradientEnd: getEnvVar('VITE_DECORATION_GLOBE_END', '#FFA500'),
      lightFlashColor: getEnvVar('VITE_DECORATION_LIGHT_COLOR', '#FFD700'),
      globeRotationSpeed: getEnvVar('VITE_DECORATION_GLOBE_SPEED', '30s'),
      lightFlashSpeed: getEnvVar('VITE_DECORATION_LIGHT_SPEED', '1.5s'),
    },

    // ========== SEO & META ==========
    seo: {
      description: getEnvVar(
        'VITE_SEO_DESCRIPTION',
        'Protect yourself from scam calls with advanced AI detection and real-time call screening.'
      ),
      keywords: getEnvVar(
        'VITE_SEO_KEYWORDS',
        'scam calls, call blocking, phone protection, spam detection'
      ),
      ogTitle: getEnvVar('VITE_SEO_OG_TITLE', 'NoMoreScamCalls - AI-Powered Scam Call Protection'),
      ogDescription: getEnvVar(
        'VITE_SEO_OG_DESCRIPTION',
        'Stop scammers before they reach your phone. AI-powered call screening protects you 24/7.'
      ),
      ogImage: getEnvVar('VITE_SEO_OG_IMAGE', 'https://nomorescamcalls.com/og-image.jpg'),
    },

    // ========== LEGAL PAGE URLS ==========
    legal: {
      privacyPolicyUrl: getEnvVar('VITE_PRIVACY_POLICY_URL', '/privacy'),
      termsUrl: getEnvVar('VITE_TERMS_URL', '/terms'),
      cookiesPolicyUrl: getEnvVar('VITE_COOKIES_POLICY_URL', '/cookies'),
      disclaimerUrl: getEnvVar('VITE_DISCLAIMER_URL', '/disclaimer'),
    },
  },

  /**
   * --------------------------------------------------------------------------
   * SECOND BRAND: App #2 (Placeholder)
   * --------------------------------------------------------------------------
   * To use this brand: Set VITE_BRAND_KEY=secondBrand in .env.local
   */
  secondBrand: {
    appName: 'SecondBrand',
    companyName: 'SecondBrand Technologies, Inc.',
    domain: 'secondbrand.com',
    frontendUrl: 'https://secondbrand.com',
    apiUrl: 'https://api.secondbrand.com',
    tagline: 'Your trusted shield against phone fraud',

    contactEmail: 'support@secondbrand.com',
    supportEmail: 'support@secondbrand.com',
    salesEmail: 'sales@secondbrand.com',
    phone: '1-800-555-0123',
    address: '456 Tech Avenue, Suite 200, San Francisco, CA 94102',

    colors: {
      primary: '#2563EB',
      primaryDark: '#1D4ED8',
      secondary: '#0F172A',
      accent: '#8B5CF6',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      background: '#FFFFFF',
      text: '#0F172A',
      textLight: '#64748B',
    },

    social: {
      facebook: 'https://facebook.com/secondbrand',
      twitter: 'https://twitter.com/secondbrand',
      linkedin: 'https://linkedin.com/company/secondbrand',
      instagram: 'https://instagram.com/secondbrand',
    },

    pricing: {
      currency: 'USD',
      tiers: [
        {
          name: 'Starter',
          monthlyPrice: '7.99',
          annualPrice: '79.99',
          stripeMonthlyId: 'price_secondbrand_starter_m',
          stripeAnnualId: 'price_secondbrand_starter_a',
          features: [
            'Basic call protection',
            'Spam detection',
            'Weekly reports',
            'Email support',
          ],
        },
        {
          name: 'Professional',
          monthlyPrice: '19.99',
          annualPrice: '199.99',
          stripeMonthlyId: 'price_secondbrand_pro_m',
          stripeAnnualId: 'price_secondbrand_pro_a',
          features: [
            'All Starter features',
            'Advanced AI screening',
            'Real-time alerts',
            'Priority support',
            'Custom blocklists',
          ],
        },
        {
          name: 'Enterprise',
          monthlyPrice: '49.99',
          annualPrice: '499.99',
          stripeMonthlyId: 'price_secondbrand_ent_m',
          stripeAnnualId: 'price_secondbrand_ent_a',
          features: [
            'All Professional features',
            'Unlimited lines',
            'API access',
            'Dedicated support',
            'Custom integrations',
            'SLA guarantee',
          ],
        },
      ],
    },

    decorations: {
      spinningGlobeEnabled: false,
      flashingLightEnabled: true,
      particlesEnabled: false,
      globeGradientStart: '#2563EB',
      globeGradientEnd: '#8B5CF6',
      lightFlashColor: '#60A5FA',
      globeRotationSpeed: '25s',
      lightFlashSpeed: '2s',
    },

    seo: {
      description: 'SecondBrand provides enterprise-grade call protection powered by advanced AI technology.',
      keywords: 'call protection, fraud prevention, AI security, phone safety',
      ogTitle: 'SecondBrand - Enterprise Call Protection',
      ogDescription: 'Protect your business from phone fraud with AI-powered call screening.',
      ogImage: 'https://secondbrand.com/og-image.jpg',
    },

    legal: {
      privacyPolicyUrl: '/privacy',
      termsUrl: '/terms',
      cookiesPolicyUrl: '/cookies',
      disclaimerUrl: '/disclaimer',
    },
  },

  /**
   * --------------------------------------------------------------------------
   * SCAMINATER: Executive Reputation Protection
   * --------------------------------------------------------------------------
   * High-end corporate executive protection targeting C-suite, VPs, and board
   * members. Focuses on reputation defense and social engineering protection.
   * 
   * To use this brand: Set VITE_BRAND_KEY=scaminater in .env.local
   * 
   * NOTE: Domain updated to scaminaters.com (plural) for the new deployment
   */
  scaminater: {
    // ========== APP IDENTITY ==========
    appName: 'Scaminaters',
    companyName: 'Scaminaters.com',
    domain: 'scaminaters.com',
    frontendUrl: getEnvVar('VITE_FRONTEND_URL', 'http://localhost:3000'),
    apiUrl: getEnvVar('VITE_API_URL', 'http://localhost:5000'),
    tagline: 'Guard your reputation before someone weaponizes your phone',

    // ========== CONTACT INFO ==========
    contactEmail: 'contact@scaminaters.com',
    supportEmail: 'support@scaminaters.com',
    salesEmail: 'sales@scaminaters.com',
    phone: '816-718-6960',
    address: '8712 Mackey Street, Overland Park, KS 66212',

    // ========== COLORS ==========
    colors: {
      primary: '#0EA5E9',
      primaryDark: '#0284C7',
      secondary: '#1E293B',
      accent: '#06B6D4',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      background: '#0F172A',
      text: '#F8FAFC',
      textLight: '#94A3B8',
    },

    // ========== SOCIAL MEDIA LINKS ==========
    social: {
      facebook: 'https://facebook.com/scaminaters',
      twitter: 'https://twitter.com/scaminaters',
      linkedin: 'https://linkedin.com/company/scaminaters',
      instagram: 'https://instagram.com/scaminaters',
    },

    // ========== PRICING TIERS ==========
    pricing: {
      currency: 'USD',
      sectionTitle: 'Choose Protection for Your Leadership Team',
      sectionSubheading: {
        line1: 'Simple tiers. Serious protection.',
        line2: 'Built for executives, leadership teams, and the people who support them.',
      },
      sectionIntro: 'Scaminaters wraps around the lines that matter most — your direct line, your assistant, and the leaders who can\'t afford a single compromised call.',
      sectionNote: 'All plans include: real‑time AI call screening, threat detection reporting, and support for standard call‑forwarding setups. No hardware required.',
      tiers: [
        {
          name: 'Junior',
          monthlyPrice: '69',
          annualPrice: '690',
          stripeMonthlyId: 'price_scaminater_junior_monthly',
          stripeAnnualId: 'price_scaminater_junior_annual',
          linesIncluded: 2,
          positioningLabel: 'For emerging leaders',
          detailedDescription: 'Protect your primary line and one additional line — typically your assistant, Chief of Staff, or personal business line.',
          features: [
            'Shields rising leaders from targeted vishing and social engineering',
            'Ideal for executives building a public profile or taking on higher visibility',
            'One account, two protected lines, unified reporting',
          ],
        },
        {
          name: 'Leadership Team',
          monthlyPrice: '129',
          annualPrice: '1290',
          stripeMonthlyId: 'price_scaminater_leadership_monthly',
          stripeAnnualId: 'price_scaminater_leadership_annual',
          linesIncluded: 4,
          popular: true,
          positioningLabel: 'For core leadership',
          detailedDescription: 'Designed for C‑suite, senior VPs, and the close circle that supports them.',
          features: [
            'Protects up to four critical lines — executives, operations, or finance',
            'Detects deepfake, spoofed authority, and BEC‑style confirmation calls',
            'Board‑ready visibility into attempted scams targeting your team',
          ],
        },
        {
          name: 'Additional Lines',
          monthlyPrice: '29',
          annualPrice: '290',
          stripeMonthlyId: 'price_scaminater_addon_monthly',
          stripeAnnualId: 'price_scaminater_addon_annual',
          isAddon: true,
          priceLabel: '/ month per line',
          positioningLabel: 'Extend your perimeter',
          detailedDescription: 'Add protection for additional executives, high‑risk staff, or key advisors as your needs grow.',
          features: [
            'Scale protection one critical line at a time',
            'Add external advisors, board members, or high‑access staff',
            'Central billing, unified protection policy',
          ],
        },
      ],
    },

    // ========== DECORATIVE ELEMENTS ==========
    decorations: {
      spinningGlobeEnabled: false,
      flashingLightEnabled: true,
      particlesEnabled: true,
      globeGradientStart: '#0EA5E9',
      globeGradientEnd: '#06B6D4',
      lightFlashColor: '#0EA5E9',
      globeRotationSpeed: '40s',
      lightFlashSpeed: '3s',
    },

    // ========== SEO & META ==========
    seo: {
      description: 'Scaminaters protects corporate executives from weaponized calls, deepfake voicemails, and targeted social engineering, preserving personal and professional reputation.',
      keywords: 'executive protection, reputation security, deepfake defense, social engineering protection, C-suite security, corporate call screening, board member protection',
      ogTitle: 'Scaminaters – Executive Reputation Shield for Corporate Leaders',
      ogDescription: 'Guard your reputation before someone weaponizes your phone. Elite protection for C-suite executives, VPs, and board members.',
      ogImage: 'https://scaminaters.com/og-image.jpg',
    },

    // ========== LEGAL PAGE URLS ==========
    legal: {
      privacyPolicyUrl: '/privacy',
      termsUrl: '/terms',
      cookiesPolicyUrl: '/cookies',
      disclaimerUrl: '/disclaimer',
    },

    // ========== BRAND-SPECIFIC IMAGERY ==========
    imagery: {
      heroImage: 'https://images.unsplash.com/photo-1540458398062-9bbc39e99010?w=1600&q=80',
      heroImageAlt: 'Rain drops on office window overlooking city skyline',
      heroBackup1: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80',
      heroBackup2: 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=1600&q=80',
      featureImage1: 'https://images.pexels.com/photos/9623657/pexels-photo-9623657.jpeg',
      featureImage1Alt: 'Stylish executive in modern glass office setting',
      featureImage2: 'https://images.pexels.com/photos/6326065/pexels-photo-6326065.jpeg',
      featureImage2Alt: 'Business professional in corporate environment',
      featureImage3: 'https://images.pexels.com/photos/3727513/pexels-photo-3727513.jpeg',
      featureImage3Alt: 'Professional executive with confident business presence',
      cityImage1: 'https://images.unsplash.com/photo-1540458398062-9bbc39e99010?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxyYWluJTIwYnVzaW5lc3N8ZW58MHx8fGJsdWV8MTc2OTA0MzA2Mnww&ixlib=rb-4.1.0&q=85',
      cityImage1Alt: 'Rainy city atmosphere with professional urban setting',
      cityImage2: 'https://images.pexels.com/photos/2422260/pexels-photo-2422260.jpeg',
      cityImage2Alt: 'Atmospheric rainy street scene - executive protection context',
    },

    // ========== BRAND VOICE & MESSAGING ==========
    messaging: {
      heroHeadline: 'Protect Today\'s Decisions, Preserve Tomorrow\'s Legacy',
      heroSubheadline: 'Elite protection for C-suite executives. One compromised call can unravel a career. We stand between you and the chaos.',
      trustIndicator: 'Corporate Professionals',
      ctaText: 'Take back control of your executive line today.',
      testimonialsSubtitle: 'Join other corporate professionals who\'ve taken back control of their company phones and stopped potential security breaches at the grassroot level.',
      alternateTaglines: [
        'Because one compromised call can unravel a career.',
        'Executive-grade protection for reputation, relationships, and decisions.',
        'Silence the noise before it becomes tomorrow\'s headline.',
        'The world below is chaos. Inside the glass is control.',
      ],
      valueProposition: 'We quietly stand between you and the chaos so your name, reputation, and decisions stay clean, controlled, and protected.',
      executiveFocus: [
        'Shield your direct line and your assistant from targeted impostor calls',
        'Stop deepfake and spoofed callers before they reach the boardroom',
        'Keep your leadership team\'s communications out of tomorrow\'s headlines',
        'Prevent weaponized communications before they become reputational incidents',
      ],
      toneDescriptors: [
        'Calm and confident - private bank energy',
        'Discreet and precise - never gimmicky',
        'Elite and professional - top law firm standard',
        'Focused on reputation, board scrutiny, and headline risk',
      ],
    },

    // ========== DASHBOARD LABELS (Executive-themed) ==========
    dashboardLabels: {
      subscriberDashboard: {
        title: 'Executive Protection Console',
        callsBlocked: 'Threats Neutralized',
        highRiskAttempt: 'High-Risk Attempt',
        vipProtected: 'VIP Contact Protected',
        escalated: 'Escalated to Corporate Security',
        assistantShielded: 'Assistant Line Shielded',
        deepfakeDetected: 'Deepfake Voice Detected',
        reputationScore: 'Reputation Protection Score',
      },
      adminDashboard: {
        title: 'Corporate Security Command Center',
        executivesProtected: 'Executives Protected',
        leadershipTeam: 'Leadership Team Coverage',
        policySettings: 'Enterprise Policy Settings',
        riskTrends: 'Threat & Risk Trends',
        incidentDrilldown: 'Incident Drill-Down',
        auditReports: 'Board-Ready Audit Reports',
        teamProtection: 'Team Protection Status',
      },
      aiChatbot: {
        title: 'Executive Security Concierge',
        greeting: 'How can I help protect your communications today?',
        examplePrompts: [
          'How should I handle a caller claiming to be a board member?',
          'I received a voicemail that sounds like our CFO but feels off',
          'What\'s our protocol for suspicious executive impersonation?',
          'Show me this week\'s threat summary for our leadership team',
        ],
      },
    },

    // ========== WHO IT'S FOR (Target Audiences) ==========
    audiences: {
      sectionTitle: 'Who It\'s For',
      sectionSubtitle: 'Enterprise Grade Protection for leaders and staff professionals',
      targets: [
        {
          icon: 'Users',
          title: 'Management and Staff',
          description: 'Protect every member of your team from phone scams. One plan can cover everyone. We can tailor the number of phones to fit your needs.',
          image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb'
        },
        {
          icon: 'Heart',
          title: 'Senior Leadership',
          description: 'Give busy professionals that extra layer of protection from scammers who target them most.',
          image: 'https://images.unsplash.com/photo-1758691030817-a6271a533c42'
        },
        {
          icon: 'Building2',
          title: 'Business Owners',
          description: 'Keep your business line professional and free from spam that wastes your time.',
          image: 'https://images.unsplash.com/photo-1550523303-e9e27624ed35'
        },
        {
          icon: 'Briefcase',
          title: 'Busy Professionals',
          description: 'Focus on your work without constant interruptions from unwanted spam calls and scammers.',
          image: 'https://images.unsplash.com/photo-1763651959357-7382188b500f'
        }
      ],
    },

    // ========== BENEFITS (Why Choose Us) ==========
    benefits: [
      {
        icon: 'Heart',
        title: 'Peace of Mind',
        description: 'Sleep better knowing your staff is protected from phone scams 24/7.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'
      },
      {
        icon: 'Users',
        title: 'Protect managers and staff members',
        description: 'Safeguard your entire lifes work with one app. Let Scaminaters take that call.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80'
      },
      {
        icon: 'Clock',
        title: 'Save Time',
        description: 'No more interruptions from robocalls and scammers. Focus on what matters.',
        image: 'https://images.unsplash.com/photo-1615847014013-0dfa967ba04f'
      },
      {
        icon: 'Briefcase',
        title: 'Professional Protection',
        description: 'Keep your business line clean and maintain professionalism without spam.',
        image: 'https://images.unsplash.com/photo-1548638529-67ae36df7aa8'
      }
    ],

    // ========== PRESS MENTIONS ==========
    pressMentions: [
      {
        outlet: 'TechCrunch',
        logo: 'TC',
        quote: '"Revolutionary AI approach to fighting phone scams"',
        color: 'bg-green-600'
      },
      {
        outlet: 'Forbes',
        logo: 'FORBES',
        quote: '"A game-changer for senior executives and corporate management"',
        color: 'bg-blue-900'
      },
      {
        outlet: 'WSJ',
        logo: 'WSJ',
        quote: '"Innovative technology meets commercial business protection"',
        color: 'bg-gray-800'
      },
      {
        outlet: 'CNBC',
        logo: 'CNBC',
        quote: '"Scaminaters blocks 99.8% of fraud attempts"',
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
    ],

    // ========== AWARDS/BOTTOM SECTION ==========
    awardsSection: {
      titleLine1: 'How Long Can You Stay Unprotected?',
      titleLine2: 'Sign up for Scaminaters today!',
      type: 'textbox',
      content: 'Leaders today face a silent crisis: one key press on a convincing call, one fake video, or one cloned voice can turn a trusted device into a surveillance tool and a single employee into an unwilling insider. Deepfake executive scams and AI‑cloned voices are already driving high‑value fraud, with some incidents pushing transfers in the tens of millions and average losses per deepfake attack exceeding hundreds of thousands of dollars. Mobile‑borne malware and spyware can quietly turn a phone into a tracking device and keylogger, harvesting credentials, emails, and financial access long before anyone notices. When that foothold is used to deliver ransomware into the network, organizations can be paralyzed for weeks, with downtime and recovery routinely costing into the millions and investigations stretching for months. Awareness training alone cannot keep up with threats that look and sound exactly like your CFO or CEO; without professional‑grade, real‑time scam and malware defense, a single keypress on an incoming call can quietly start the clock on a breach that destroys careers, erodes customer trust, and in some cases ends the company itself.',
    },
  },
};

/**
 * ============================================================================
 * ACTIVE BRAND SELECTION
 * ============================================================================
 * 
 * The active brand is determined by VITE_BRAND_KEY environment variable.
 * - If not set or invalid, defaults to 'default' (NoMoreScamCalls)
 * - Valid values: 'default', 'secondBrand', 'scaminater', or any key in the brands object
 * 
 * Example .env.local:
 *   VITE_BRAND_KEY=scaminater
 */
const brandKey = getEnvVar('VITE_BRAND_KEY', 'default');
const activeBrand = brands[brandKey] || brands.default;

// Log which brand is active (only in development)
if (import.meta.env.DEV) {
  console.log(`[BrandConfig] Active brand: ${brandKey}`, activeBrand.appName);
}

/**
 * Export the active brand as the default export for backward compatibility.
 * Components using `import brandConfig from './brandConfig'` will get the active brand.
 */
export const brandConfig = activeBrand;
export default activeBrand;
