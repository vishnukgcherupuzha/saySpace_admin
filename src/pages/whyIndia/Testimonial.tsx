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
        return 'text-logo-teal bg-logo-teal';
      case 'financial services':
        return 'text-cta-coral bg-cta-coral';
      case 'manufacturing':
        return 'text-logo-beige bg-logo-beige';
      case 'healthcare':
        return 'text-cta-coral/80 bg-cta-coral/80';
      default:
        return 'text-logo-teal bg-logo-teal';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <div 
            className="bg-card border border-dividers rounded-3xl p-8 lg:p-12 shadow-xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-logo-teal/10 rounded-full p-4">
                <Quote className="w-8 h-8 text-logo-teal" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">
              <blockquote className="font-body text-lg lg:text-xl text-foreground leading-relaxed italic mb-8 max-w-4xl mx-auto">
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
                <h4 className="font-header font-bold text-xl text-foreground mb-1">
                  {currentTestimonial.author}
                </h4>
                <p className="font-body text-muted-foreground mb-2">
                  {currentTestimonial.position}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="font-body text-sm text-muted-foreground">
                    {currentTestimonial.company}
                  </span>
                  <span className="text-dividers">•</span>
                  <span className={`font-body text-xs px-2 py-1 rounded-full text-white ${getIndustryColor(currentTestimonial.industry).split(' ')[1]}`}>
                    {currentTestimonial.industry}
                  </span>
                  <span className="text-dividers">•</span>
                  <span className="font-body text-xs px-2 py-1 bg-dividers/50 text-muted-foreground rounded-full">
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
                          <span className="font-header font-bold text-2xl text-foreground">
                            {metric.value}
                          </span>
                        </div>
                        <p className="font-body text-sm text-muted-foreground">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card border border-dividers rounded-full p-3 hover:bg-logo-teal hover:text-white hover:border-logo-teal transition-all duration-200 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card border border-dividers rounded-full p-3 hover:bg-logo-teal hover:text-white hover:border-logo-teal transition-all duration-200 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center items-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-logo-teal scale-110' 
                  : 'bg-dividers hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`text-left bg-card border rounded-xl p-6 transition-all duration-200 hover:shadow-lg ${
                index === currentIndex 
                  ? 'border-logo-teal ring-2 ring-logo-teal/20' 
                  : 'border-dividers hover:border-muted-foreground'
              }`}
            >
              {/* Mini Quote */}
              <div className="mb-4">
                <Quote className="w-4 h-4 text-logo-teal mb-2" />
                <p className="font-body text-sm text-muted-foreground line-clamp-3">
                  {testimonial.quote.substring(0, 120)}...
                </p>
              </div>

              {/* Mini Author */}
              <div>
                <h5 className="font-header font-semibold text-sm text-foreground">
                  {testimonial.author}
                </h5>
                <p className="font-body text-xs text-muted-foreground">
                  {testimonial.position}
                </p>
                <div className="flex items-center mt-2">
                  <span className={`font-body text-xs px-2 py-1 rounded-full text-white ${getIndustryColor(testimonial.industry).split(' ')[1]}`}>
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-header font-bold text-2xl text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Discover how your organization can achieve similar success in Bangalore. 
              Let's discuss your GCC establishment strategy today.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-logo-teal text-white font-header font-medium rounded-xl hover:bg-logo-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span>Start Your Success Story</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;