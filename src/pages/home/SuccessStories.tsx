import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Building2,
  MapPin
} from 'lucide-react';

const SuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "Fortune 500 Company",
      role: "Co-Founder",
      name: "Ravi Mehra",
      quote: "Setting up our GCC with their team was smooth and highly efficient. We were operational within three months and have since expanded faster than projected.",
      stats: {
        timeline: "88 days",
        savings: "42%",
        teamSize: "270+"
      },
      industry: "Industry – Travel",
      location: "Bangalore",
      rating: 5
    },
    {
      id: 2,
      company: "Top Fintech company",
      role: "CEO",
      name: "Lena Thompson",
      quote: "Their end-to-end support — from compliance to workforce strategy — made our India expansion a strategic win. Their responsiveness and expertise stood out.",
      stats: {
        timeline: "115 days",
        savings: "38%",
        teamSize: "200+"
      },
      industry: "Investment Banking",
      location: "Gurugram",
      rating: 5
    },
    {
      id: 3,
      company: "Medivia Group",
      role: "Head of Global Infrastructure",
      name: "Dr. Tomasz Kowalski",
      quote: "They streamlined our setup process across legal, real estate, and hiring. Today, our India center plays a critical role in global R&D operations.",
      stats: {
        timeline: "98 days",
        savings: "40%",
        teamSize: "310+"
      },
      industry: "Pharmaceuticals",
      location: "Ahmedabad",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Award className="w-4 h-4 mr-2" />
            PROVEN TRACK RECORD
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Client <span className="font-semibold text-cta-coral">Success Stories</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Trusted by leading global organizations to establish and scale their operations in India
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* Testimonial Content - 8 columns */}
              <div className="lg:col-span-8 space-y-8">

                {/* Quote Icon */}
                <div className="w-12 h-12 bg-cta-coral flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-light italic">
                  "{current.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 bg-logo-teal flex items-center justify-center">
                    <span className="font-semibold text-white text-sm">
                      {current.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {current.role}
                    </div>
                    <div className="text-gray-600 font-light">
                      {current.company}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cta-coral fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2 font-medium">
                    Excellent Rating
                  </span>
                </div>
              </div>

              {/* Stats Card - 4 columns */}
              <div className="lg:col-span-4">
                <div className="bg-gray-50 border border-gray-200 p-6 lg:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    Project Outcomes
                  </h4>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-logo-teal/10 flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-logo-teal" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">Setup Timeline</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {current.stats.timeline}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cta-coral/10 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-cta-coral" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">Cost Reduction</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {current.stats.savings}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                          <Users className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">Team Scale</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {current.stats.teamSize}
                      </span>
                    </div>

                    <div className="pt-6 border-t border-gray-200 space-y-3">
                      <div className="flex items-center space-x-3">
                        <Building2 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          <span className="font-medium">Industry:</span> {current.industry}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span> {current.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 transition-all duration-200 ${index === currentTestimonial
                    ? 'bg-cta-coral'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
            <span className="ml-4 text-sm text-gray-500 font-medium">
              {currentTestimonial + 1} of {testimonials.length}
            </span>
          </div>

          {/* Arrow Navigation */}
          <div className="flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="cursor-pointer w-10 h-10 bg-white border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors duration-200"
              disabled={currentTestimonial === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="cursor-pointer w-10 h-10 bg-white border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors duration-200"
              disabled={currentTestimonial === testimonials.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">10+</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">SUCCESSFUL GCC SETUPS</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">98%</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">CLIENT SATISFACTION RATE</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium tracking-wide">YEARS OF EXPERTISE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;