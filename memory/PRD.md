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
- [x] Subscriber Dashboard with check call, report number, and impact metrics
- [x] FAQ section with pricing info
- [x] Mobile-responsive design

## What's Been Implemented

**Date: March 4, 2026**
- Added "How It Works + Dashboard Preview" onboarding section
  - 3-step visual flow: Sign Up & Connect → We Screen 24/7 → Your Dashboard
  - Navy blue & yellow authoritative color scheme
  - Dashboard preview mockup showing Phone Calls, Texts, Emails, Websites data
  - "+ Good Number" and "+ Bad Number" action buttons
  - "View Full Dashboard" link to real dashboard
  - Empowering caption about local blacklist control
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
- Added "across all devices" messaging throughout

## Key Components
- `OnboardingSection.jsx` - How It Works + Dashboard Preview section
- `PricingChart.jsx` - Bundle comparison table
- `Pricing.jsx` - Pricing cards with scroll-to-bundle behavior
- `SubscriberDashboard.jsx` - User dashboard for call checks and reports
- `pricingLinks.js` - Stripe payment URLs configuration

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
1. Await user feedback on the new onboarding section
2. Potential hero image replacement if user provides final PNG
3. Address live tester feedback
