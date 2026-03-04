# NoMoreScamCalls - Product Requirements Document

## Original Problem Statement
Build and refine a comprehensive pricing page to showcase "4-Pillar" bundles (Phone, Text, Email, Web protection). Create clear onboarding flows, interactive UI features, and honest early-stage content. The application should help users understand the value of bundled protection vs à la carte options.

## Architecture
- **Frontend**: Vite 6.x + React 18.x + Tailwind CSS + shadcn/ui
- **Backend**: FastAPI with MongoDB
- **Authentication**: Clerk (test/development keys)
- **Payments**: Stripe (static payment links)
- **Deployment**: Emergent Platform

## User Personas
1. **End Users**: People seeking protection from scam calls, texts, emails, and malicious websites
2. **Families**: Groups wanting bundled protection across multiple lines/devices
3. **Account Holders**: Subscribers managing their blacklists and protection settings

## Core Requirements (Static)
- [x] Home page with hero section, trust badges, and features
- [x] Pricing page with 4-pillar hero image and bundle comparison
- [x] Interactive smooth-scrolling to bundle details
- [x] Subscriber Dashboard with submit for review, report number, and impact metrics
- [x] FAQ section with pricing info
- [x] Mobile-responsive design
- [x] Navy/Yellow/Gray color system with 3D buttons

## What's Been Implemented

**Date: March 4, 2026 (Session 2)**
- **Dashboard Feature Change:**
  - REMOVED: Public "Check Number" instant lookup
  - ADDED: "Submit Number for Review" moderated form
    - Phone number input (required)
    - "Why submit?" textarea (optional)
    - Success: "Submitted! We'll review within 24hrs via email"
  - Kept: Counters (Total/Blocked/Dollars/Time), Good/Bad report buttons

- **Color System Overhaul (Navy/Yellow/Grays):**
  - Navy-900 (#0a1428): Full page backgrounds
  - Navy-800 (#1a2338): Cards, sections
  - Navy-700 (#2a3a58): Inputs, surfaces
  - Yellow-500 (#eab308): Primary accent (buttons, icons)
  - Brushed grays for text hierarchy
  - No large whites, no pastels

- **3D Button Styles:**
  - btn-primary-3d: Navy gradient + yellow border + yellow glow
  - btn-secondary-3d: Yellow bg + navy shadow + scale hover
  - btn-good-3d/btn-bad-3d: Green/red variants
  - 12px rounded corners, smooth transitions

- **Site-wide Bright Blue Angels Colors:**
  - Deep Navy Blue (#002B5C) primary
  - Bright Daisy Yellow (#FFD700) secondary/accent
  - Yellow CTAs with navy text
  - Navy buttons with yellow borders

**Date: March 4, 2026 (Session 1)**
- Added "How It Works + Dashboard Preview" onboarding section
  - 3-step visual flow: Sign Up & Connect → We Screen 24/7 → Your Dashboard
  - Dashboard preview mockup with realistic data
  - Mobile-first responsive design
- Removed dead PressSection.jsx component

**Previous Session:**
- Created dedicated pricing page at `/pricing`
- Built PricingChart component with bundle comparison table
- Implemented smooth-scrolling from pricing cards to bundle details
- Added 6-second highlight animation on selected bundles
- Added 4-pillars hero image with cropping
- Updated testimonials to honest early-stage reviews
- Removed "Money Back Guarantee" and "As Featured In" sections

## Key Components
- `OnboardingSection.jsx` - How It Works + Dashboard Preview section
- `PricingChart.jsx` - Bundle comparison table
- `Pricing.jsx` - Pricing cards with scroll-to-bundle behavior
- `SubscriberDashboard.jsx` - User dashboard (submit for review, report, impact)
- `pricingLinks.js` - Stripe payment URLs configuration

## CSS Color Variables (index.css)
```css
--navy-900: #0a1428;
--navy-800: #1a2338;
--navy-700: #2a3a58;
--navy-600: #3a4a68;
--yellow-400: #facc15;
--yellow-500: #eab308;
--yellow-600: #ca8a04;
--gray-brushed-100: #f8fafc;
--gray-brushed-300: #d1d5db;
--gray-brushed-500: #6b7280;
```

## Environment Variables
- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk authentication
- `VITE_BACKEND_URL` - Backend API URL
- `VITE_BRAND_KEY` - Brand configuration selector (default, scaminater)
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name

## Prioritized Backlog
### P0 (Blocking)
- None

### P1 (High Priority)
- User may provide final PNG for 4-pillars hero image
- Address feedback from live user testing

### P2 (Future)
- Connect dashboard to real backend subscriber routes
- Production Clerk keys deployment
- Custom domain DNS configuration

## Next Tasks
1. Await user feedback on the new dashboard design
2. Potential hero image replacement if user provides final PNG
3. Address live tester feedback
