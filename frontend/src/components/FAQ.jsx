import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useBrand, activeBrandKey } from '../context/BrandContext';

export const FAQ = () => {
  const brand = useBrand();
  const isScaminater = activeBrandKey === 'scaminater';

  // Scaminater-specific FAQs
  const scaminaterFaqs = [
    {
      question: 'What happens if Scaminater blocks a legitimate call by mistake?',
      answer: 'We design our screening to be conservative around unknown but normal behavior and aggressive around known attack patterns. If a call is flagged, you can review the event in your dashboard and adjust your allow‑list or policies. Our goal is simple: stop weaponized calls while preserving the calls that keep your business moving.'
    },
    {
      question: 'Do I need to install an app or change carriers?',
      answer: 'No. Scaminater uses standard call‑forwarding and works with most major carriers. Your team keeps their existing numbers and devices. Setup for each line typically takes just a few minutes and can be done by a non‑technical assistant with our step‑by‑step guide.'
    },
    {
      question: 'How is this different from carrier spam blocking or basic call‑blocking apps?',
      answer: 'Traditional tools rely on static spam lists and high‑volume patterns. They are effective for consumer robocalls, but they miss low‑volume, highly targeted attacks aimed at executives. Scaminater analyzes caller behavior, context, and patterns consistent with vishing, deepfakes, BEC follow‑ups, and other executive‑level threats — even when the number has never been reported before.'
    },
    {
      question: 'What happens to our call data and recordings?',
      answer: 'You control your data. Call handling is focused on metadata, behavioral patterns, and security outcomes. If recordings are used for analysis, they are handled under strict access controls and retention policies aligned with modern security practices. We can provide a data‑handling summary for your legal or security team upon request.'
    },
    {
      question: 'Can this help satisfy our risk, compliance, or audit requirements?',
      answer: 'Scaminater is designed to support conversations with your risk committee, auditors, and board. By documenting blocked attempts, patterns of targeted attacks, and the controls you have in place, it helps demonstrate that leadership lines and high‑risk staff are not left exposed to basic social engineering.'
    },
    {
      question: 'How long does it take to roll this out to a small leadership team?',
      answer: 'Most organizations can protect their initial set of lines in under an hour. Setup is done via call forwarding and basic configuration in the dashboard. Once connected, your lines are immediately screened by our AI engine.'
    },
    {
      question: 'Who should we protect first?',
      answer: 'We recommend starting with:\n• Your CEO or primary executive sponsor\n• Finance or treasury leadership (CFO, Controller)\n• Operations or IT leadership\n• Any assistant or Chief of Staff who routes calls for leadership\n\nFrom there, you can add high‑risk staff, advisors, or board members as needed.'
    },
    {
      question: 'What if we decide Scaminater is not a fit?',
      answer: 'You can cancel at any time. Call forwarding can be turned off in your carrier settings, and protection stops immediately. We do not lock you into hardware, contracts, or proprietary numbers.'
    }
  ];

  // Default FAQs for other brands
  const defaultFaqs = [
    {
      question: `How does ${brand.appName} detect scam calls?`,
      answer: `${brand.appName} uses advanced AI and machine learning to analyze call patterns, voice characteristics, and known scam indicators in real-time. Our system continuously learns from millions of calls to identify both known and emerging threats.`
    },
    {
      question: 'Will I miss important calls?',
      answer: 'No. Our AI is trained to distinguish between legitimate callers and scammers with 99.8% accuracy. Important calls from family, doctors, banks, and businesses get through while blocking unwanted scam attempts.'
    },
    {
      question: 'What are the pricing plans?',
      answer: 'We offer flexible plans starting at $15.99/month for individual protection, with family plans available for multiple lines. All plans include a 7-day free trial with no commitment required.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Absolutely. We use bank-level encryption to protect your data. We never sell your information to third parties. Only data relating to the scammer side of calls, texts, or emails is retained for investigative purposes – no subscriber data is stored in the screening process.'
    },
    {
      question: 'How quickly can I set it up?',
      answer: 'Setup is quick and easy with our onsite onboarding video that guides you step-by-step through the process. You can start, stop, or replay the video as many times as needed until you feel confident. No technical knowledge required.'
    }
  ];

  // Use Scaminater FAQs if brand is scaminater, otherwise use default
  const faqs = isScaminater ? scaminaterFaqs : defaultFaqs;

  // Section content based on brand
  const sectionTitle = 'Frequently Asked Questions';
  const subheading = isScaminater 
    ? 'Straight answers for busy leaders.'
    : null;
  const intro = isScaminater
    ? 'The questions your board, security team, and operations leaders will actually ask.'
    : `Everything you need to know about ${brand.appName}`;

  return (
    <section id="faq" className="py-20" style={{ background: `linear-gradient(to bottom, ${brand.colors.primary}10, white)` }} data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          {subheading && (
            <p className="text-2xl font-semibold mb-2" style={{ color: brand.colors.primary }}>
              {subheading}
            </p>
          )}
          <p className="text-xl text-gray-600">
            {intro}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger 
                className="text-left font-semibold text-gray-900 py-6 hover:no-underline"
                style={{ '--hover-color': brand.colors.primary }}
              >
                <span className="hover:opacity-80">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href={`mailto:${brand.supportEmail}`}
            className="font-semibold hover:underline transition-all"
            style={{ color: brand.colors.primary }}
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};
