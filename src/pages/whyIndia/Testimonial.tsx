import React, { useState, useEffect } from 'react';
import { 
  Quote, 
  Star, 
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Type definitions
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  companyType: string;
  industry: string;
  rating: number;
  metrics?: {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  avatar?: string;
}

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: "Our decision to establish our GCC in Bangalore has been transformative for our business. The quality of talent, cost advantages, and supportive ecosystem have exceeded our expectations. Within just one year, our Bangalore center has become a crucial innovation hub driving our global digital initiatives.",
      author: "Michel George",
      position: "CTO",
      company: "Fortune 500 Technology Company",
      companyType: "Fortune 500",
      industry: "Technology",
      rating: 5,
      metrics: [
        { label: "Cost Reduction", value: "40%", icon: TrendingUp },
        { label: "Team Size", value: "500+", icon: Users },
        { label: "Time to Market", value: "60% Faster", icon: Award }
      ]
    },
    {
      id: '2',
      quote: "Bangalore's talent pool is exceptional. We've been able to scale our operations rapidly while maintaining the highest quality standards. The city's infrastructure and business-friendly environment have made our expansion seamless and highly successful.",
      author: "Sarah Chen",
      position: "Global Head of Operations",
      company: "Leading Financial Services Firm",
      companyType: "Global MNC",
      industry: "Financial Services",
      rating: 5,
      metrics: [
        { label: "Quality Score", value: "98%", icon: Star },
        { label: "Employee Growth", value: "300%", icon: Users },
        { label: "Client Satisfaction", value: "95%", icon: Award }
      ]
    },
    {
      id: '3',
      quote: "The engineering talent in Bangalore is world-class. Our R&D center here has become instrumental in developing next-generation products. The collaborative ecosystem and proximity to educational institutions have been game-changers for our innovation strategy.",
      author: "Dr. Rajesh Kumar",
      position: "VP of Engineering",
      company: "Global Manufacturing Giant",
      companyType: "Fortune 100",
      industry: "Manufacturing",
      rating: 5,
      metrics: [
        { label: "Patents Filed", value: "150+", icon: Award },
        { label: "R&D Investment", value: "$50M+", icon: TrendingUp },
        { label: "Product Launches", value: "25", icon: Building2 }
      ]
    },
    {
      id: '4',
      quote: "Establishing our healthcare innovation center in Bangalore was one of our best strategic decisions. The combination of skilled professionals, competitive costs, and regulatory expertise has accelerated our global product development timeline significantly.",
      author: "Dr. Amanda Foster",
      position: "Chief Innovation Officer",
      company: "Pharmaceutical Leader",
      companyType: "Global Healthcare",
      industry: "Healthcare",
      rating: 5,
      metrics: [
        { label: "Development Speed", value: "45% Faster", icon: TrendingUp },
        { label: "Regulatory Success", value: "100%", icon: Award },
        { label: "Research Projects", value: "75+", icon: Building2 }
      ]
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  const getIndustryColor = (industry: string) => {
    switch (industry.toLowerCase()) {
      case 'technology':
        return 'text-white bg-logo-teal';
      case 'financial services':
        return 'text-white bg-cta-coral';
      case 'manufacturing':
        return 'text-white bg-gray-600';
      case 'healthcare':
        return 'text-white bg-cta-coral';
      default:
        return 'text-white bg-logo-teal';
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Quote className="w-4 h-4 mr-2" />
            CLIENT TESTIMONIALS
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Success Stories from <span className="font-semibold text-logo-teal">Global Leaders</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Hear from industry executives who have successfully established GCCs in Bangalore
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12 lg:mb-16">
          <div 
            className="bg-white border border-gray-200 p-8 lg:p-12"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-logo-teal/10 p-4">
                <Quote className="w-8 h-8 text-logo-teal" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-8 max-w-4xl mx-auto font-light">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center items-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cta-coral fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="mb-8">
                <h4 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                  {currentTestimonial.author}
                </h4>
                <p className="text-gray-600 font-light mb-3">
                  {currentTestimonial.position}
                </p>
                <div className="flex items-center justify-center space-x-2 flex-wrap">
                  <span className="text-sm text-gray-600 font-light">
                    {currentTestimonial.company}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className={`text-xs px-2 py-1 ${getIndustryColor(currentTestimonial.industry)}`}>
                    {currentTestimonial.industry}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-xs px-2 py-1 bg-gray-200 text-gray-600">
                    {currentTestimonial.companyType}
                  </span>
                </div>
              </div>

              {/* Success Metrics */}
              {currentTestimonial.metrics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {currentTestimonial.metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <IconComponent className="w-5 h-5 text-logo-teal mr-2" />
                          <span className="text-2xl font-light text-gray-900">
                            {metric.value}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 p-3 hover:bg-logo-teal hover:text-white hover:border-logo-teal transition-all duration-200 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 p-3 hover:bg-logo-teal hover:text-white hover:border-logo-teal transition-all duration-200 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center items-center space-x-3 mb-12 lg:mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-logo-teal scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`text-left bg-white border p-6 transition-all duration-200 hover:shadow-lg ${
                index === currentIndex 
                  ? 'border-logo-teal shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Mini Quote */}
              <div className="mb-4">
                <Quote className="w-4 h-4 text-logo-teal mb-2" />
                <p className="text-sm text-gray-600 font-light line-clamp-3">
                  {testimonial.quote.substring(0, 120)}...
                </p>
              </div>

              {/* Mini Author */}
              <div>
                <h5 className="text-sm font-semibold text-gray-900">
                  {testimonial.author}
                </h5>
                <p className="text-xs text-gray-600 font-light">
                  {testimonial.position}
                </p>
                <div className="flex items-center mt-2">
                  <span className={`text-xs px-2 py-1 ${getIndustryColor(testimonial.industry)}`}>
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Ready to Join Our <span className="font-semibold text-logo-teal">Success Stories?</span>
          </h3>
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Discover how your organization can achieve similar success in Bangalore. 
            Let's discuss your GCC establishment strategy today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <Quote className="w-5 h-5 mr-3" />
              Start Your Success Story
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <Building2 className="w-5 h-5 mr-3" />
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;