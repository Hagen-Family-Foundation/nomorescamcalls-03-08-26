import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Shield, AlertTriangle, Phone, Lock, Server, Users } from 'lucide-react';

export const ThreatsSection = () => {
  const brand = useBrand();

  const threats = [
    {
      icon: Phone,
      vector: 'VISHING & SOCIAL ENGINEERING ATTACKS',
      detections: [
        'Voice‑based social engineering that exploits trust and authority',
        'Caller behavior inconsistent with the identity they claim',
        'Behavioral markers of impersonation and pretexting'
      ]
    },
    {
      icon: AlertTriangle,
      vector: 'DEEPFAKE VOICE & SPOOFED AUTHORITY CALLS',
      detections: [
        'Unnatural prosody and vocal pattern anomalies consistent with synthetic audio',
        'Synthetic voiceovers attempting to impersonate executives or finance staff',
        'Spoofed caller ID that appears to come from trusted internal or partner numbers',
        'Reference (for security teams to verify): NIST IR 8228 — Synthetic Media Detection Standards'
      ]
    },
    {
      icon: Server,
      vector: 'TARGETED BUSINESS EMAIL COMPROMISE (BEC) VECTORS',
      detections: [
        'Phone‑based follow‑up to BEC or phishing campaigns',
        'Pretexting calls designed to set up wire fraud or payment redirection',
        '"Executive confirmation" calls attempting to validate fraudulent instructions',
        'Cross‑referencing with patterns commonly seen in BEC campaigns and impersonation attacks'
      ]
    },
    {
      icon: Lock,
      vector: 'CREDENTIAL HARVESTING & TWO‑FACTOR BYPASS',
      detections: [
        'Calls attempting to socially engineer one‑time codes or MFA approvals',
        'Coordinated multi‑vector attacks (phishing email + voice follow‑up)',
        'Urgency‑driven scripts pressuring staff to "verify" login, payroll, or banking details',
        'Reference (for security teams): CISA Alert AA21‑265A — Conti ransomware TTPs'
      ]
    },
    {
      icon: Shield,
      vector: 'RANSOMWARE RECONNAISSANCE & EXTORTION CALLS',
      detections: [
        'Initial reconnaissance calls mapping your organizational structure',
        'Calls probing for who controls payments, access, or critical operations',
        'Extortion and ransom‑style communications directed at leadership',
        'Reference: FBI IC3 Ransomware Reports (2023–2024) describing human‑driven recon and pressure tactics'
      ]
    },
    {
      icon: Users,
      vector: 'INSIDER THREAT MANIPULATION & PRETEXTING',
      detections: [
        'Calls that use insider knowledge to manipulate employee behavior',
        'Authority‑based pressure to bypass normal controls "just this once"',
        'Baiting and social engineering tactics aimed at lower‑visibility staff with high access',
        'Reference: NIST Cybersecurity Framework — Identify & Protect functions (insider and social engineering risks)'
      ]
    }
  ];

  const traditionalBlockers = [
    'Reactive only',
    'Block known bad numbers after they\'ve been reported',
    'Rely on static spam lists and crowd‑sourced reports',
    'Lag between new scam campaign and effective blocking can be days or weeks'
  ];

  const scaminaterFeatures = [
    'Proactive by design',
    'Detects behavioral anomalies in real‑time, even from "new" numbers',
    'Evaluates caller behavior, context, and speech patterns, not just phone numbers',
    'Designed to catch targeted, low‑volume attacks that never appear on public spam lists'
  ];

  return (
    <section id="threats" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" data-testid="threats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            THE THREATS WE DETECT
          </h2>
          <div className="mt-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-2">
              Professional Service for Professionals
            </h3>
            <p className="text-lg text-slate-300">
              We speak the language of threat intelligence, not just consumer scams.
            </p>
          </div>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-slate-200 leading-relaxed">
            We don't just block spam. We detect sophisticated attack patterns targeting executives, 
            high‑visibility staff, and high‑value phone numbers across your organization.
          </p>
        </div>

        {/* Threat Detection Table - Desktop */}
        <div className="hidden md:block mb-16">
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-slate-700/50">
              <div className="px-6 py-4 border-r border-slate-600">
                <h4 className="text-lg font-bold text-cyan-400 uppercase tracking-wide">Threat Vector</h4>
              </div>
              <div className="px-6 py-4">
                <h4 className="text-lg font-bold text-cyan-400 uppercase tracking-wide">What We Detect</h4>
              </div>
            </div>
            
            {/* Table Rows */}
            {threats.map((threat, index) => {
              const Icon = threat.icon;
              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-2 ${index !== threats.length - 1 ? 'border-b border-slate-700' : ''}`}
                >
                  <div className="px-6 py-5 border-r border-slate-700 flex items-start gap-3">
                    <Icon className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="font-semibold text-white">{threat.vector}</span>
                  </div>
                  <div className="px-6 py-5">
                    <ul className="space-y-2">
                      {threat.detections.map((detection, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-2 text-slate-100">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span className={detection.startsWith('Reference') ? 'text-slate-400 italic text-sm' : ''}>
                            {detection}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Threat Detection Cards - Mobile */}
        <div className="md:hidden space-y-4 mb-16">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <div 
                key={index} 
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden"
              >
                <div className="px-5 py-4 bg-slate-700/50 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyan-400" />
                  <h4 className="font-semibold text-white text-sm">{threat.vector}</h4>
                </div>
                <div className="px-5 py-4">
                  <ul className="space-y-2">
                    {threat.detections.map((detection, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2 text-slate-100 text-sm">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span className={detection.startsWith('Reference') ? 'text-slate-400 italic text-xs' : ''}>
                          {detection}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Break Text */}
        <div className="text-center py-12 border-t border-b border-slate-700 mb-16">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            Our AI doesn't just recognize old scams.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-cyan-400 mt-2">
            It detects new attack patterns before they become "known threats."
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Blockers */}
            <div className="bg-slate-800/30 rounded-xl border border-slate-600 p-6">
              <h4 className="text-xl font-bold text-slate-400 mb-4 text-center">
                Traditional Call Blockers
              </h4>
              <ul className="space-y-3">
                {traditionalBlockers.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-400">
                    <span className="text-slate-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scaminater */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-slate-800/50 rounded-xl border border-cyan-600/50 p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-4 text-center">
                Scaminater
              </h4>
              <ul className="space-y-3">
                {scaminaterFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-200">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Positioning */}
        <div className="text-center mb-8">
          <p className="text-xl text-slate-300 mb-2">
            Traditional blockers are reactive — they stop what's already known.
          </p>
          <p className="text-xl text-white font-semibold">
            Scaminater is proactive — we detect behavioral anomalies that signal new threats before they reach your leadership team.
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/80 font-medium">
            Professional Service. Professional Protection.
          </p>
        </div>
      </div>
    </section>
  );
};
