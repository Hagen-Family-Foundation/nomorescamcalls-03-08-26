import React from 'react';
import { Quote } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const Testimonials = () => {
  const brand = useBrand();

  const testimonials = [
    {
      name: 'Mark T.',
      label: 'Beta user',
      quote: "First week using this and it already flagged scam calls I would've picked up before."
    },
    {
      name: 'Angela R.',
      label: 'Early customer',
      quote: "The pricing doesn't play games. I can see exactly what I'm paying for and why the bundle saves money."
    },
    {
      name: 'Devon S.',
      label: 'Early adopter',
      quote: "I like having phone, text, email, and web protection laid out in one place instead of four different tools."
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brand.colors.primary }}>
            Real Reviews from Real People
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're just getting started. Here's what early users are saying.
          </p>
        </div>

        {/* Testimonials Grid - Single Row */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl p-6 border-2 relative"
              style={{ borderColor: brand.colors.primary, backgroundColor: `${brand.colors.primary}08` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="h-10 w-10" style={{ color: brand.colors.secondary }} />
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <div className="font-bold" style={{ color: brand.colors.primary }}>{testimonial.name}</div>
                <div className="text-sm" style={{ color: brand.colors.secondary }}>{testimonial.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
