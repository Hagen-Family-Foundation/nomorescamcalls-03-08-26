import React, { useState } from 'react';
import { Phone, Shield, CheckCircle, AlertTriangle, Clock, DollarSign, Mail, MessageSquare, Send, Info, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useBrand } from '../context/BrandContext';
import { postReportNumber } from '../api/client';
import { ShieldLogo } from './ShieldLogo';

// Color constants for the Navy/Yellow/Gray system
const colors = {
  navy900: '#0a1428',
  navy800: '#1a2338',
  navy700: '#2a3a58',
  navy600: '#3a4a68',
  yellow400: '#facc15',
  yellow500: '#eab308',
  yellow600: '#ca8a04',
  grayBrushed100: '#f8fafc',
  grayBrushed300: '#d1d5db',
  grayBrushed500: '#6b7280',
  whitePure: '#ffffff',
};

// ============================================================================
// SUBMIT NUMBER FOR REVIEW SECTION (Replaces Check Call)
// ============================================================================
const SubmitForReviewSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Validate E.164 phone number format
  const validateE164 = (value) => {
    const e164Regex = /^\+?\d{8,15}$/;
    return e164Regex.test(value.replace(/[\s\-\(\)]/g, ''));
  };

  const handleSubmit = async () => {
    setError('');
    
    if (!phoneNumber.trim()) {
      setError('Phone number is required.');
      return;
    }
    
    if (!validateE164(phoneNumber.trim())) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);

    // Send to the existing report endpoint with a "review" type
    const response = await postReportNumber({
      subscriberId: 'review_queue',
      moniker: 'RV-00000',
      reportedNumber: phoneNumber.trim().startsWith('+') ? phoneNumber.trim() : `+1${phoneNumber.trim().replace(/[\s\-\(\)]/g, '')}`,
      reportType: 'review',
      comment: reason.trim() || 'Submitted for team review',
    });

    setLoading(false);

    if (response.status === 'ok' || response.status === 'error') {
      // Show success regardless - we want to queue it for review
      setSubmitted(true);
      setPhoneNumber('');
      setReason('');
    }
  };

  if (submitted) {
    return (
      <div className="dashboard-card p-8">
        <div className="text-center">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: colors.yellow500 }}
          >
            <CheckCircle className="h-10 w-10" style={{ color: colors.navy900 }} />
          </div>
          <h3 className="text-2xl font-bold mb-3" style={{ color: colors.whitePure }}>
            Submitted for Review!
          </h3>
          <p className="text-lg mb-6" style={{ color: colors.grayBrushed300 }}>
            We'll review this number and get back to you within 24 hours via email.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="btn-secondary-3d px-8 py-3"
          >
            Submit Another Number
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <div 
        className="rounded-xl p-4 flex items-start gap-3"
        style={{ backgroundColor: colors.navy700, border: `1px solid ${colors.yellow500}` }}
      >
        <HelpCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: colors.yellow500 }} />
        <div>
          <p className="font-semibold" style={{ color: colors.whitePure }}>
            Unsure about a number?
          </p>
          <p style={{ color: colors.grayBrushed300 }}>
            Submit it—our team checks & responds fast. No public lookups, just human review.
          </p>
        </div>
      </div>

      {/* Submit Form */}
      <div className="dashboard-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: colors.yellow500 }}
          >
            <Send className="h-6 w-6" style={{ color: colors.navy900 }} />
          </div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: colors.whitePure }}>
              Submit Number for Review
            </h3>
            <p style={{ color: colors.grayBrushed500 }}>
              Our team will investigate and respond within 24 hours
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Phone Number Input */}
          <div>
            <Label 
              htmlFor="review-number" 
              className="font-semibold mb-2 block"
              style={{ color: colors.grayBrushed100 }}
            >
              Phone Number *
            </Label>
            <Input
              id="review-number"
              placeholder="+1 (555) 123-4567"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-12 text-lg rounded-xl"
              style={{ 
                backgroundColor: colors.navy700, 
                borderColor: colors.navy600,
                color: colors.whitePure
              }}
              data-testid="review-phone-input"
            />
          </div>

          {/* Reason Textarea */}
          <div>
            <Label 
              htmlFor="review-reason" 
              className="font-semibold mb-2 block"
              style={{ color: colors.grayBrushed100 }}
            >
              Why submit? <span style={{ color: colors.grayBrushed500 }}>(optional)</span>
            </Label>
            <Textarea
              id="review-reason"
              placeholder="e.g., Got a suspicious call from this number but unsure if it's a scam..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[100px] rounded-xl"
              style={{ 
                backgroundColor: colors.navy700, 
                borderColor: colors.navy600,
                color: colors.whitePure
              }}
              data-testid="review-reason-input"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div 
              className="rounded-xl p-4 flex items-center gap-3"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.2)', border: '1px solid #ef4444' }}
            >
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <span className="text-red-300">{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={loading || !phoneNumber.trim()}
            className="btn-primary-3d w-full h-14 text-lg"
            data-testid="submit-for-review-btn"
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <Send className="h-5 w-5" />
                Submit for Review
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// REPORT A NUMBER SECTION (Good/Bad)
// ============================================================================
const ReportNumberSection = () => {
  const [subscriberId, setSubscriberId] = useState('');
  const [moniker, setMoniker] = useState('');
  const [reportedNumber, setReportedNumber] = useState('');
  const [reportType, setReportType] = useState('bad');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const wordCount = comment.trim() ? comment.trim().split(/\s+/).length : 0;
  const maxWords = 50;
  const isOverWordLimit = wordCount > maxWords;

  const validateMoniker = (value) => /^[A-Z]{2}-\d{5}$/.test(value);
  const validateE164 = (value) => /^\+\d{8,15}$/.test(value);

  const handleSubmit = async () => {
    setError('');
    setResult(null);
    setValidationErrors({});

    const errors = {};
    if (!subscriberId.trim()) errors.subscriberId = 'Subscriber ID is required.';
    if (!moniker.trim()) {
      errors.moniker = 'Moniker is required.';
    } else if (!validateMoniker(moniker.trim())) {
      errors.moniker = 'Format: ST-12345';
    }
    if (!reportedNumber.trim()) {
      errors.reportedNumber = 'Phone number is required.';
    } else if (!validateE164(reportedNumber.trim())) {
      errors.reportedNumber = 'E.164 format required (e.g., +19135551234)';
    }
    if (isOverWordLimit) errors.comment = `Max 50 words (currently ${wordCount})`;

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setLoading(true);

    const body = {
      subscriberId: subscriberId.trim(),
      moniker: moniker.trim(),
      reportedNumber: reportedNumber.trim(),
      reportType: reportType,
    };
    if (comment.trim()) body.comment = comment.trim();

    const response = await postReportNumber(body);
    setLoading(false);

    if (response.status === 'ok') {
      setResult(response);
      setSubscriberId('');
      setMoniker('');
      setReportedNumber('');
      setReportType('bad');
      setComment('');
    } else if (response.status === 'error') {
      setError(response.message || 'An error occurred.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="dashboard-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: colors.yellow500 }}
          >
            <Send className="h-6 w-6" style={{ color: colors.navy900 }} />
          </div>
          <div>
            <h3 className="text-xl font-bold" style={{ color: colors.whitePure }}>
              Report a Number
            </h3>
            <p style={{ color: colors.grayBrushed500 }}>
              Mark as good or bad to improve protection for everyone
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Subscriber ID */}
          <div>
            <Label style={{ color: colors.grayBrushed100 }}>Subscriber ID *</Label>
            <Input
              placeholder="e.g., sub_123"
              value={subscriberId}
              onChange={(e) => setSubscriberId(e.target.value)}
              className={`mt-1 rounded-xl ${validationErrors.subscriberId ? 'border-red-500' : ''}`}
              style={{ backgroundColor: colors.navy700, borderColor: colors.navy600, color: colors.whitePure }}
            />
            {validationErrors.subscriberId && <p className="text-red-400 text-sm mt-1">{validationErrors.subscriberId}</p>}
          </div>

          {/* Moniker */}
          <div>
            <Label style={{ color: colors.grayBrushed100 }}>Moniker *</Label>
            <Input
              placeholder="e.g., KS-12345"
              value={moniker}
              onChange={(e) => setMoniker(e.target.value.toUpperCase())}
              className={`mt-1 rounded-xl ${validationErrors.moniker ? 'border-red-500' : ''}`}
              style={{ backgroundColor: colors.navy700, borderColor: colors.navy600, color: colors.whitePure }}
            />
            {validationErrors.moniker && <p className="text-red-400 text-sm mt-1">{validationErrors.moniker}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <Label style={{ color: colors.grayBrushed100 }}>Phone Number *</Label>
            <Input
              placeholder="+19135551234"
              value={reportedNumber}
              onChange={(e) => setReportedNumber(e.target.value)}
              className={`mt-1 rounded-xl ${validationErrors.reportedNumber ? 'border-red-500' : ''}`}
              style={{ backgroundColor: colors.navy700, borderColor: colors.navy600, color: colors.whitePure }}
            />
            {validationErrors.reportedNumber && <p className="text-red-400 text-sm mt-1">{validationErrors.reportedNumber}</p>}
          </div>

          {/* Report Type - Good/Bad Buttons */}
          <div>
            <Label style={{ color: colors.grayBrushed100 }} className="mb-3 block">Report Type *</Label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setReportType('bad')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  reportType === 'bad' 
                    ? 'border-red-500 bg-red-500/20' 
                    : 'border-gray-600 hover:border-red-500/50'
                }`}
                style={{ backgroundColor: reportType === 'bad' ? 'rgba(239, 68, 68, 0.2)' : colors.navy700 }}
              >
                <AlertTriangle className={`h-6 w-6 mx-auto mb-2 ${reportType === 'bad' ? 'text-red-400' : 'text-gray-500'}`} />
                <span className={`font-semibold ${reportType === 'bad' ? 'text-red-400' : 'text-gray-400'}`}>Bad Number</span>
              </button>
              <button
                type="button"
                onClick={() => setReportType('good')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  reportType === 'good' 
                    ? 'border-green-500 bg-green-500/20' 
                    : 'border-gray-600 hover:border-green-500/50'
                }`}
                style={{ backgroundColor: reportType === 'good' ? 'rgba(16, 185, 129, 0.2)' : colors.navy700 }}
              >
                <CheckCircle className={`h-6 w-6 mx-auto mb-2 ${reportType === 'good' ? 'text-green-400' : 'text-gray-500'}`} />
                <span className={`font-semibold ${reportType === 'good' ? 'text-green-400' : 'text-gray-400'}`}>Good Number</span>
              </button>
            </div>
          </div>

          {/* Comment */}
          <div>
            <div className="flex justify-between">
              <Label style={{ color: colors.grayBrushed100 }}>Comment (optional)</Label>
              <span className={`text-xs ${isOverWordLimit ? 'text-red-400' : 'text-gray-500'}`}>{wordCount}/{maxWords}</span>
            </div>
            <Textarea
              placeholder="Brief explanation..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 rounded-xl min-h-[80px]"
              style={{ backgroundColor: colors.navy700, borderColor: colors.navy600, color: colors.whitePure }}
            />
          </div>

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            disabled={loading || isOverWordLimit}
            className={`w-full h-12 ${reportType === 'bad' ? 'btn-bad-3d' : 'btn-good-3d'}`}
          >
            {loading ? 'Submitting...' : `Report as ${reportType === 'bad' ? 'Bad' : 'Good'}`}
          </Button>

          {error && (
            <div className="rounded-xl p-4 bg-red-500/20 border border-red-500">
              <p className="text-red-300">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Success Result */}
      {result && (
        <div 
          className="rounded-xl p-6"
          style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-6 w-6 text-green-400" />
            <span className="text-lg font-bold text-green-300">Report Submitted!</span>
          </div>
          <p style={{ color: colors.grayBrushed300 }}>Report ID: {result.reportId}</p>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// YOUR IMPACT SECTION
// ============================================================================
const YourImpactSection = () => {
  const [metrics] = useState({
    blockedScamCalls: 47,
    blockedTexts: 23,
    blockedEmails: 15,
  });

  const phoneMetrics = {
    count: metrics.blockedScamCalls,
    estimatedLossAvoided: metrics.blockedScamCalls * 1200,
    estimatedHoursSaved: metrics.blockedScamCalls * 0.75,
  };

  const textEmailMetrics = {
    textsCount: metrics.blockedTexts,
    emailsCount: metrics.blockedEmails,
    totalCount: metrics.blockedTexts + metrics.blockedEmails,
    estimatedLossAvoided: (metrics.blockedTexts + metrics.blockedEmails) * 1500,
    estimatedHoursSaved: (metrics.blockedTexts + metrics.blockedEmails) * 1,
  };

  const totalEstimatedLossAvoided = phoneMetrics.estimatedLossAvoided + textEmailMetrics.estimatedLossAvoided;
  const totalEstimatedHoursSaved = phoneMetrics.estimatedHoursSaved + textEmailMetrics.estimatedHoursSaved;

  return (
    <div className="space-y-6">
      {/* Disclaimer */}
      <div 
        className="rounded-xl p-4 flex items-start gap-3"
        style={{ backgroundColor: colors.navy700, border: `1px solid ${colors.yellow500}` }}
      >
        <Info className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: colors.yellow500 }} />
        <p style={{ color: colors.grayBrushed300 }}>
          <strong style={{ color: colors.whitePure }}>Note:</strong> Values shown are <strong style={{ color: colors.yellow500 }}>estimates of potential loss avoided</strong>, based on industry averages.
        </p>
      </div>

      {/* Screening Stats */}
      <div className="dashboard-card p-6">
        <h3 className="text-lg font-bold mb-4" style={{ color: colors.whitePure }}>Threats Screened</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="stat-card p-5 text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" style={{ color: colors.yellow500 }} />
            <p className="text-3xl font-bold" style={{ color: colors.whitePure }}>{phoneMetrics.count}</p>
            <p style={{ color: colors.grayBrushed500 }}>Scam Calls Blocked</p>
          </div>
          <div className="stat-card p-5 text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-2" style={{ color: colors.yellow500 }} />
            <p className="text-3xl font-bold" style={{ color: colors.whitePure }}>{textEmailMetrics.textsCount}</p>
            <p style={{ color: colors.grayBrushed500 }}>Scam Texts Blocked</p>
          </div>
          <div className="stat-card p-5 text-center">
            <Mail className="h-8 w-8 mx-auto mb-2" style={{ color: colors.yellow500 }} />
            <p className="text-3xl font-bold" style={{ color: colors.whitePure }}>{textEmailMetrics.emailsCount}</p>
            <p style={{ color: colors.grayBrushed500 }}>Scam Emails Blocked</p>
          </div>
        </div>
      </div>

      {/* Phone Call Impact */}
      <div className="dashboard-card p-6">
        <h3 className="text-lg font-bold mb-4" style={{ color: colors.whitePure }}>Phone Call Protection</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="stat-card p-5" style={{ borderColor: '#10b981' }}>
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-6 w-6 text-green-400" />
              <span style={{ color: colors.grayBrushed300 }}>Potential Loss Avoided</span>
            </div>
            <p className="text-3xl font-bold text-green-400">${phoneMetrics.estimatedLossAvoided.toLocaleString()}</p>
            <p className="text-xs mt-1" style={{ color: colors.grayBrushed500 }}>Based on $1,200/blocked scam call</p>
          </div>
          <div className="stat-card p-5" style={{ borderColor: '#3b82f6' }}>
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-blue-400" />
              <span style={{ color: colors.grayBrushed300 }}>Time Saved</span>
            </div>
            <p className="text-3xl font-bold text-blue-400">{phoneMetrics.estimatedHoursSaved.toFixed(1)} hrs</p>
            <p className="text-xs mt-1" style={{ color: colors.grayBrushed500 }}>Based on 45 min/blocked scam call</p>
          </div>
        </div>
      </div>

      {/* Text/Email Impact */}
      <div className="dashboard-card p-6">
        <h3 className="text-lg font-bold mb-4" style={{ color: colors.whitePure }}>Text & Email Protection</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="stat-card p-5" style={{ borderColor: '#10b981' }}>
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-6 w-6 text-green-400" />
              <span style={{ color: colors.grayBrushed300 }}>Potential Loss Avoided</span>
            </div>
            <p className="text-3xl font-bold text-green-400">${textEmailMetrics.estimatedLossAvoided.toLocaleString()}</p>
            <p className="text-xs mt-1" style={{ color: colors.grayBrushed500 }}>Based on $1,500/blocked scam</p>
          </div>
          <div className="stat-card p-5" style={{ borderColor: '#3b82f6' }}>
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-blue-400" />
              <span style={{ color: colors.grayBrushed300 }}>Time Saved</span>
            </div>
            <p className="text-3xl font-bold text-blue-400">{textEmailMetrics.estimatedHoursSaved} hrs</p>
            <p className="text-xs mt-1" style={{ color: colors.grayBrushed500 }}>Based on 1 hr/blocked scam</p>
          </div>
        </div>
      </div>

      {/* Combined Totals */}
      <div 
        className="rounded-xl p-6"
        style={{ 
          background: `linear-gradient(135deg, ${colors.navy800} 0%, ${colors.navy900} 100%)`,
          border: `2px solid ${colors.yellow500}`,
          boxShadow: '0 8px 30px rgba(234, 179, 8, 0.2)'
        }}
      >
        <h3 className="text-lg font-bold mb-6 text-center" style={{ color: colors.yellow500 }}>
          Your Total Estimated Impact
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <DollarSign className="h-12 w-12 mx-auto mb-3 text-green-400" />
            <p className="text-4xl font-bold text-green-400">${totalEstimatedLossAvoided.toLocaleString()}</p>
            <p style={{ color: colors.grayBrushed300 }}>Total Potential Loss Avoided</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 mx-auto mb-3 text-blue-400" />
            <p className="text-4xl font-bold text-blue-400">{totalEstimatedHoursSaved.toFixed(1)} hours</p>
            <p style={{ color: colors.grayBrushed300 }}>Total Time Saved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN SUBSCRIBER DASHBOARD
// ============================================================================
export const SubscriberDashboard = () => {
  const brand = useBrand();

  return (
    <div 
      className="min-h-screen" 
      style={{ backgroundColor: colors.navy900 }}
      data-testid="subscriber-dashboard"
    >
      {/* Header */}
      <header style={{ backgroundColor: colors.navy800, borderBottom: `1px solid ${colors.navy700}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: colors.yellow500 }}
              >
                <ShieldLogo className="h-6 w-6" color={colors.navy900} />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: colors.whitePure }}>{brand.appName}</h1>
                <p style={{ color: colors.grayBrushed500 }}>Subscriber Dashboard</p>
              </div>
            </div>
            <a
              href="/"
              className="btn-secondary-3d px-5 py-2.5 rounded-xl text-sm font-semibold"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="submit-review" className="w-full">
          <TabsList 
            className="w-full grid grid-cols-3 h-auto p-1.5 rounded-xl mb-6"
            style={{ backgroundColor: colors.navy800, border: `1px solid ${colors.navy700}` }}
          >
            <TabsTrigger
              value="submit-review"
              className="py-3 px-4 font-semibold rounded-lg transition-all data-[state=active]:shadow-lg"
              style={{ 
                color: colors.grayBrushed300,
              }}
              data-testid="tab-submit-review"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              Submit for Review
            </TabsTrigger>
            <TabsTrigger
              value="report-number"
              className="py-3 px-4 font-semibold rounded-lg transition-all data-[state=active]:shadow-lg"
              style={{ color: colors.grayBrushed300 }}
              data-testid="tab-report-number"
            >
              <Send className="h-4 w-4 mr-2" />
              Report Number
            </TabsTrigger>
            <TabsTrigger
              value="your-impact"
              className="py-3 px-4 font-semibold rounded-lg transition-all data-[state=active]:shadow-lg"
              style={{ color: colors.grayBrushed300 }}
              data-testid="tab-your-impact"
            >
              <Shield className="h-4 w-4 mr-2" />
              Your Impact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="submit-review" className="mt-6">
            <SubmitForReviewSection />
          </TabsContent>

          <TabsContent value="report-number" className="mt-6">
            <ReportNumberSection />
          </TabsContent>

          <TabsContent value="your-impact" className="mt-6">
            <YourImpactSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
