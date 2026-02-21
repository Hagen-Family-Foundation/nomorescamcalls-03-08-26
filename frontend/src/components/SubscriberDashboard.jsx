import React, { useState } from 'react';
import { Phone, Shield, CheckCircle, AlertTriangle, Clock, DollarSign, Mail, MessageSquare, Search, Send, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useBrand } from '../context/BrandContext';
import { postCheckCall, postReportNumber } from '../api/client';
import { ShieldLogo } from './ShieldLogo';

// ============================================================================
// CHECK A CALL SECTION
// ============================================================================
const CheckCallSection = () => {
  const [subscriberId, setSubscriberId] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheckCall = async () => {
    setError('');
    setResult(null);
    setLoading(true);

    const response = await postCheckCall({
      subscriberId: subscriberId.trim(),
      number: number.trim(),
    });

    setLoading(false);

    if (response.status === 'ok') {
      setResult(response);
    } else if (response.status === 'error') {
      setError(response.message || 'An error occurred.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-gray-300" style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}>
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-6 w-6 text-black" />
          <div>
            <h3 className="text-lg font-bold text-black">Check a Call</h3>
            <p className="text-sm text-gray-600">Enter a phone number to see if you should block or allow it</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="check-subscriber-id" className="text-black font-medium">Subscriber ID</Label>
            <Input
              id="check-subscriber-id"
              placeholder="e.g., sub_123"
              value={subscriberId}
              onChange={(e) => setSubscriberId(e.target.value)}
              className="mt-1 border-gray-400 focus:border-black text-black"
              data-testid="check-call-subscriber-id"
            />
          </div>

          <div>
            <Label htmlFor="check-number" className="text-black font-medium">Phone Number</Label>
            <Input
              id="check-number"
              placeholder="+19135551234"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="mt-1 border-gray-400 focus:border-black text-black"
              data-testid="check-call-number"
            />
          </div>

          <Button
            onClick={handleCheckCall}
            disabled={loading || !subscriberId.trim() || !number.trim()}
            className="w-full text-white"
            style={{ backgroundColor: '#000000' }}
            data-testid="check-call-btn"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                Checking...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Check Call
              </span>
            )}
          </Button>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-medium">Error</span>
              </div>
              <p className="text-red-600 mt-1">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className="bg-white rounded-lg p-6 border border-gray-300" style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}>
          <h4 className="text-lg font-bold text-black mb-4">Check Result</h4>
          
          {/* Normalized Number */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Normalized Number</p>
            <p className="text-lg font-semibold text-black">{result.normalizedNumber}</p>
          </div>

          {/* Decision - Main Visual */}
          <div className={`p-6 rounded-lg text-center mb-4 ${
            result.decision?.shouldBlock 
              ? 'bg-red-100 border-2 border-red-500' 
              : 'bg-green-100 border-2 border-green-500'
          }`}>
            <p className={`text-3xl font-bold ${
              result.decision?.shouldBlock ? 'text-red-700' : 'text-green-700'
            }`}>
              {result.decision?.shouldBlock ? '🚫 BLOCK THIS CALL' : '✅ ALLOW'}
            </p>
            {result.decision?.reason && (
              <p className={`mt-2 text-sm ${
                result.decision?.shouldBlock ? 'text-red-600' : 'text-green-600'
              }`}>
                {result.decision.reason}
              </p>
            )}
          </div>

          {/* Local Status */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-black mb-2">Local Status</h5>
              <p className={`font-medium ${
                result.local?.blocked ? 'text-red-600' : 'text-gray-600'
              }`}>
                {result.local?.blocked ? '🔒 Locally Blocked' : '🔓 No Local Block'}
              </p>
              {result.local?.reason && (
                <p className="text-sm text-gray-500 mt-1">{result.local.reason}</p>
              )}
            </div>

            {/* Global Status */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold text-black mb-2">Global Status</h5>
              <p className={`font-medium ${
                result.global?.status === 'bad' ? 'text-red-600' : 
                result.global?.status === 'good' ? 'text-green-600' : 'text-gray-600'
              }`}>
                {result.global?.status === 'bad' ? '⚠️ Bad' : 
                 result.global?.status === 'good' ? '✓ Good' : '❓ Unknown'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Bad Reports: {result.global?.badCount || 0} | Good Reports: {result.global?.goodCount || 0}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// REPORT A NUMBER SECTION
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

  // Count words in comment
  const wordCount = comment.trim() ? comment.trim().split(/\s+/).length : 0;
  const maxWords = 50;
  const isOverWordLimit = wordCount > maxWords;

  // Validate moniker format: "ST-12345" (2 uppercase letters, dash, 5 digits)
  const validateMoniker = (value) => {
    const monikerRegex = /^[A-Z]{2}-\d{5}$/;
    return monikerRegex.test(value);
  };

  // Validate E.164 phone number format
  const validateE164 = (value) => {
    const e164Regex = /^\+\d{8,15}$/;
    return e164Regex.test(value);
  };

  const handleSubmit = async () => {
    setError('');
    setResult(null);
    setValidationErrors({});

    // Validation
    const errors = {};
    if (!subscriberId.trim()) {
      errors.subscriberId = 'Subscriber ID is required.';
    }
    if (!moniker.trim()) {
      errors.moniker = 'Moniker is required.';
    } else if (!validateMoniker(moniker.trim())) {
      errors.moniker = 'Moniker must be in format ST-12345 (two uppercase letters, dash, five digits).';
    }
    if (!reportedNumber.trim()) {
      errors.reportedNumber = 'Phone number is required.';
    } else if (!validateE164(reportedNumber.trim())) {
      errors.reportedNumber = 'Phone number must be in E.164 format (e.g., +19135551234).';
    }
    if (isOverWordLimit) {
      errors.comment = `Comment must be 50 words or fewer. Currently: ${wordCount} words.`;
    }

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

    if (comment.trim()) {
      body.comment = comment.trim();
    }

    const response = await postReportNumber(body);

    setLoading(false);

    if (response.status === 'ok') {
      setResult(response);
      // Clear form on success
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
      <div className="bg-white rounded-lg p-6 border border-gray-300" style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}>
        <div className="flex items-center gap-3 mb-6">
          <Send className="h-6 w-6 text-black" />
          <div>
            <h3 className="text-lg font-bold text-black">Report a Number</h3>
            <p className="text-sm text-gray-600">Report a phone number as good or bad to help improve our protection</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="report-subscriber-id" className="text-black font-medium">Subscriber ID *</Label>
            <Input
              id="report-subscriber-id"
              placeholder="e.g., sub_123"
              value={subscriberId}
              onChange={(e) => setSubscriberId(e.target.value)}
              className={`mt-1 border-gray-400 focus:border-black text-black ${validationErrors.subscriberId ? 'border-red-500' : ''}`}
              data-testid="report-subscriber-id"
            />
            {validationErrors.subscriberId && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.subscriberId}</p>
            )}
          </div>

          <div>
            <Label htmlFor="report-moniker" className="text-black font-medium">Moniker *</Label>
            <Input
              id="report-moniker"
              placeholder="e.g., KS-12345"
              value={moniker}
              onChange={(e) => setMoniker(e.target.value.toUpperCase())}
              className={`mt-1 border-gray-400 focus:border-black text-black ${validationErrors.moniker ? 'border-red-500' : ''}`}
              data-testid="report-moniker"
            />
            <p className="text-xs text-gray-500 mt-1">Format: ST-12345 (two-letter state code and five digits)</p>
            {validationErrors.moniker && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.moniker}</p>
            )}
          </div>

          <div>
            <Label htmlFor="report-number" className="text-black font-medium">Phone Number *</Label>
            <Input
              id="report-number"
              placeholder="+19135551234"
              value={reportedNumber}
              onChange={(e) => setReportedNumber(e.target.value)}
              className={`mt-1 border-gray-400 focus:border-black text-black ${validationErrors.reportedNumber ? 'border-red-500' : ''}`}
              data-testid="report-number"
            />
            <p className="text-xs text-gray-500 mt-1">E.164 format (starts with +, then 8-15 digits)</p>
            {validationErrors.reportedNumber && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.reportedNumber}</p>
            )}
          </div>

          <div>
            <Label className="text-black font-medium">Report Type *</Label>
            <RadioGroup
              value={reportType}
              onValueChange={setReportType}
              className="flex gap-6 mt-2"
              data-testid="report-type-group"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bad" id="report-bad" className="border-black text-black" />
                <Label htmlFor="report-bad" className="text-black cursor-pointer">Bad (Block this number)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="report-good" className="border-black text-black" />
                <Label htmlFor="report-good" className="text-black cursor-pointer">Good (Allow this number)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="report-comment" className="text-black font-medium">Comment (optional)</Label>
              <span className={`text-xs ${isOverWordLimit ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                {wordCount}/{maxWords} words
              </span>
            </div>
            <Textarea
              id="report-comment"
              placeholder="Brief explanation (up to 50 words)..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={`mt-1 border-gray-400 focus:border-black text-black min-h-[100px] ${validationErrors.comment || isOverWordLimit ? 'border-red-500' : ''}`}
              data-testid="report-comment"
            />
            {(validationErrors.comment || isOverWordLimit) && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.comment || `Comment exceeds 50 word limit (${wordCount} words).`}</p>
            )}
          </div>

          <Button
            onClick={handleSubmit}
            disabled={loading || isOverWordLimit}
            className="w-full text-white"
            style={{ backgroundColor: '#000000' }}
            data-testid="report-submit-btn"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Submit Report
              </span>
            )}
          </Button>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-medium">Error</span>
              </div>
              <p className="text-red-600 mt-1">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Success Result */}
      {result && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-2 text-green-700 mb-4">
            <CheckCircle className="h-6 w-6" />
            <span className="text-lg font-bold">Report Submitted Successfully!</span>
          </div>
          
          <div className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Report ID</p>
                <p className="font-semibold text-black">{result.reportId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Normalized Number</p>
                <p className="font-semibold text-black">{result.normalizedNumber}</p>
              </div>
            </div>

            {result.aggregate && (
              <div className="pt-3 border-t border-green-200">
                <p className="text-sm text-gray-600 mb-2">Updated Aggregate Summary</p>
                <p className="text-black">
                  Bad reports: <span className="font-semibold text-red-600">{result.aggregate.badCount}</span>, 
                  Good reports: <span className="font-semibold text-green-600">{result.aggregate.goodCount}</span>, 
                  Last reported at: <span className="font-semibold">{new Date(result.aggregate.lastReportAt).toLocaleString()}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// YOUR IMPACT SECTION
// ============================================================================
const YourImpactSection = () => {
  // Mock data - structured to be easily wired to a real backend endpoint later
  // In production, these values would come from an API call like:
  // const { data: metrics } = useMetrics(subscriberId);
  const [metrics] = useState({
    blockedScamCalls: 47,
    blockedTexts: 23,
    blockedEmails: 15,
  });

  // Residential impact calculations as specified:
  // Phone calls: $1,200 potential loss avoided, 45 min (0.75 hrs) per call
  // Texts/emails: $1,500 potential loss avoided, 1 hour per blocked
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

  // Combined totals
  const totalEstimatedLossAvoided = phoneMetrics.estimatedLossAvoided + textEmailMetrics.estimatedLossAvoided;
  const totalEstimatedHoursSaved = phoneMetrics.estimatedHoursSaved + textEmailMetrics.estimatedHoursSaved;

  return (
    <div className="space-y-6">
      {/* Disclaimer */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> The values shown below are <strong>estimates of potential loss avoided</strong>, not guaranteed or actual recovered money. These calculations are based on industry averages for scam-related losses.
        </p>
      </div>

      {/* Screening Stats */}
      <div className="bg-white rounded-lg p-6 border border-gray-300" style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}>
        <h3 className="text-lg font-bold text-black mb-4">Threats Screened</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <Phone className="h-8 w-8 text-black mx-auto mb-2" />
            <p className="text-3xl font-bold text-black">{phoneMetrics.count}</p>
            <p className="text-sm text-gray-600">Scam Calls Blocked</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <MessageSquare className="h-8 w-8 text-black mx-auto mb-2" />
            <p className="text-3xl font-bold text-black">{textEmailMetrics.textsCount}</p>
            <p className="text-sm text-gray-600">Scam Texts Blocked</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <Mail className="h-8 w-8 text-black mx-auto mb-2" />
            <p className="text-3xl font-bold text-black">{textEmailMetrics.emailsCount}</p>
            <p className="text-sm text-gray-600">Scam Emails Blocked</p>
          </div>
        </div>
      </div>

      {/* Phone Call Impact */}
      <div className="bg-white rounded-lg p-6 border border-gray-300" style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}>
        <h3 className="text-lg font-bold text-black mb-4">Phone Call Protection Impact</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              <span className="text-sm text-gray-600">Estimated Potential Loss Avoided</span>
            </div>
            <p className="text-3xl font-bold text-green-700">${phoneMetrics.estimatedLossAvoided.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Based on $1,200 USD estimated potential loss per blocked scam call</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-gray-600">Estimated Time Saved</span>
            </div>
            <p className="text-3xl font-bold text-blue-700">{phoneMetrics.estimatedHoursSaved.toFixed(1)} hours</p>
            <p className="text-xs text-gray-500 mt-1">Based on 45 minutes (0.75 hours) saved per blocked scam call</p>
          </div>
        </div>
      </div>

      {/* Text/Email Impact */}
      <div className="bg-white rounded-lg p-6 border border-gray-300" style={{ boxShadow: '-4px 0 0 0 #000000, 0 -2px 0 0 #000000, 0 2px 0 0 #000000' }}>
        <h3 className="text-lg font-bold text-black mb-4">Text & Email Protection Impact</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="h-6 w-6 text-green-600" />
              <span className="text-sm text-gray-600">Estimated Potential Loss Avoided</span>
            </div>
            <p className="text-3xl font-bold text-green-700">${textEmailMetrics.estimatedLossAvoided.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Based on $1,500 USD estimated potential loss per blocked scam text/email</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-blue-600" />
              <span className="text-sm text-gray-600">Estimated Time Saved</span>
            </div>
            <p className="text-3xl font-bold text-blue-700">{textEmailMetrics.estimatedHoursSaved} hours</p>
            <p className="text-xs text-gray-500 mt-1">Based on 1 hour saved per blocked scam text/email</p>
          </div>
        </div>
      </div>

      {/* Combined Totals */}
      <div className="bg-black rounded-lg p-6 text-white">
        <h3 className="text-lg font-bold mb-4">Your Total Estimated Impact</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <DollarSign className="h-10 w-10 text-green-400 mx-auto mb-2" />
            <p className="text-4xl font-bold text-green-400">${totalEstimatedLossAvoided.toLocaleString()}</p>
            <p className="text-sm text-gray-300 mt-1">Total Estimated Potential Loss Avoided</p>
          </div>
          <div className="text-center">
            <Clock className="h-10 w-10 text-blue-400 mx-auto mb-2" />
            <p className="text-4xl font-bold text-blue-400">{totalEstimatedHoursSaved.toFixed(1)} hours</p>
            <p className="text-sm text-gray-300 mt-1">Total Estimated Time Saved</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">
          These are estimates of potential loss avoided, not actual recovered money.
        </p>
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
    <div className="min-h-screen bg-slate-100" data-testid="subscriber-dashboard">
      {/* Header */}
      <header className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldLogo className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold text-black">{brand.appName}</h1>
                <p className="text-sm text-gray-600">Subscriber Dashboard</p>
              </div>
            </div>
            <a
              href="/"
              className="text-black border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="check-call" className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-white border border-gray-300 h-auto p-1">
            <TabsTrigger
              value="check-call"
              className="data-[state=active]:bg-black data-[state=active]:text-white py-3 px-4 font-medium"
              data-testid="tab-check-call"
            >
              <Search className="h-4 w-4 mr-2" />
              Check a Call
            </TabsTrigger>
            <TabsTrigger
              value="report-number"
              className="data-[state=active]:bg-black data-[state=active]:text-white py-3 px-4 font-medium"
              data-testid="tab-report-number"
            >
              <Send className="h-4 w-4 mr-2" />
              Report a Number
            </TabsTrigger>
            <TabsTrigger
              value="your-impact"
              className="data-[state=active]:bg-black data-[state=active]:text-white py-3 px-4 font-medium"
              data-testid="tab-your-impact"
            >
              <Shield className="h-4 w-4 mr-2" />
              Your Impact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="check-call" className="mt-6">
            <CheckCallSection />
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
