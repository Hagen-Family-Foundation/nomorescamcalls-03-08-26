import React, { useState, useCallback } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustBadges } from './components/TrustBadges';
import { HowItWorks } from './components/HowItWorks';
import { ServicesSection } from './components/ServicesSection';
import { Benefits } from './components/Benefits';
import { WhoItsFor } from './components/WhoItsFor';
import { TrustSafety } from './components/TrustSafety';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AIChat } from './components/AIChat';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AIDisclaimer } from './components/AIDisclaimer';
import { CookiePolicy } from './components/CookiePolicy';
import { SEO } from './components/SEO';
import { SubscriberDashboard } from './components/SubscriberDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { Dashboard } from './components/Dashboard';
import { ComparisonTable } from './components/ComparisonTable';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { ThreatsSection } from './components/ThreatsSection';
import { FinalCTA } from './components/FinalCTA';
import { AboutSection } from './components/AboutSection';
import { PricingChart } from './components/PricingChart';
import { PricingPage } from './components/PricingPage';
import { VideoSection } from './components/VideoSection';
import { useBrand } from './context/BrandContext';

const HomePage = () => {
  const brand = useBrand();
  const [highlightedBundle, setHighlightedBundle] = useState(null);

  const handleScrollToBundle = useCallback((bundleType) => {
    // Scroll to bundles section
    const bundlesSection = document.getElementById('bundles-section');
    if (bundlesSection) {
      bundlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Set highlighted bundle
    setHighlightedBundle(bundleType);
    
    // Clear highlight after 6 seconds
    setTimeout(() => {
      setHighlightedBundle(null);
    }, 6000);
  }, []);
  
  return (
  <>
    <SEO 
      title={`${brand.appName} - AI-Powered Scam Call Protection | Block Robocalls & Fraud`}
      description={brand.seo.description}
      keywords={brand.seo.keywords}
      canonical={`https://${brand.domain}`}
    />
    <Header />
    <HeroSection />
    <VideoSection />
    <TrustBadges />
    <HowItWorks />
    <ServicesSection />
    <Benefits />
    <ComparisonTable />
    <WhoItsFor />
    <Pricing onScrollToBundle={handleScrollToBundle} />
    <PricingChart highlightedBundle={highlightedBundle} />
    <FAQ />
    <FinalCTA />
    <Testimonials />
    <TrustSafety />
    <AboutSection />
    <Footer />
    <ScrollToTop />
    <AIChat />
    <ExitIntentPopup />
  </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<AIDisclaimer />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/subscriber" element={<SubscriberDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
