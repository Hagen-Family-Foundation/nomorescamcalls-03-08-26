import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export const Testimonials = () => {
  const brand = useBrand();
  const trustIndicator = brand.messaging?.trustIndicator || "professionals and families";
  const testimonialsSubtitle = brand.messaging?.testimonialsSubtitle || `Join ${trustIndicator} who've taken back control of their phones`;

  const testimonials = [
    {
      name: 'Margaret Thompson',
      age: '58',
      location: 'Phoenix, AZ',
      role: 'Retired Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      rating: 5,
      quote: `After my husband passed, scammers called me constantly trying to steal our savings. ${brand.appName} gave me my peace of mind back.`,
      result: 'Peace of mind restored',
      savings: null
    },
    {
      name: 'David Chen',
      age: '52',
      location: 'San Francisco, CA',
      role: 'Small Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      rating: 5,
      quote: `Running a business means my phone is my lifeline. I was wasting hours every week on spam calls. ${brand.appName} freed up my time to focus on what matters—growing my company.`,
      result: 'Time saved weekly',
      savings: null
    },
    {
      name: 'Sarah Martinez',
      age: '41',
      location: 'Austin, TX',
      role: 'Working Mom of 3',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      quote: 'Between work and kids, the last thing I need is scammers interrupting our day. My elderly parents are on my plan too—knowing they\'re protected from those predators is priceless.',
      result: 'Family protected',
      savings: null
    },
    {
      name: 'James Rodriguez',
      age: '49',
      location: 'Miami, FL',
      role: 'Healthcare Professional',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      quote: `As a doctor, I can't afford to miss important patient calls. ${brand.appName} filters out the junk while letting legitimate calls through. It just works.`,
      result: 'Critical calls protected',
      savings: null
    },
    {
      name: 'Linda Washington',
      age: '53',
      location: 'Atlanta, GA',
      role: 'Grandmother & Caregiver',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      rating: 5,
      quote: 'I fell for a scam once and lost money. Never again. My daughter set this up for me and now I answer my phone with confidence. The scammers don\'t even get through anymore!',
      result: 'Confidence restored',
      savings: null
    },
    {
      name: 'Robert Kim',
      age: '44',
      location: 'Seattle, WA',
      role: 'IT Consultant',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      rating: 5,
      quote: 'I\'m tech-savvy and still got overwhelmed by robocalls. The AI detection is impressive—it catches patterns I didn\'t even notice. Worth every penny.',
      result: 'Effective AI protection',
      savings: null
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Reviews from Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {testimonialsSubtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6" style={{ color: brand.colors.primary, fill: brand.colors.primary }} />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">5-Star Protection</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16" style={{ color: brand.colors.primary }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4" style={{ color: brand.colors.primary, fill: brand.colors.primary }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Results */}
              <div className="rounded-lg p-4 mb-6" style={{ backgroundColor: `${brand.colors.primary}10` }}>
                <div className="text-sm font-semibold mb-1" style={{ color: brand.colors.primaryDark || brand.colors.primary }}>Outcome:</div>
                <div className="font-semibold" style={{ color: `${brand.colors.primary}dd` }}>{testimonial.result}</div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}, {testimonial.age}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
