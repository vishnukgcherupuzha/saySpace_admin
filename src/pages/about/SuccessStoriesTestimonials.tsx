import { useState } from 'react';
import { 
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Award,
  Building2,
  CheckCircle,
  Calendar,
  Users,
  TrendingDown
} from 'lucide-react';

const SuccessStoriesTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Say Space's expertise was instrumental in establishing our GCC in India. Their deep local knowledge and strategic approach helped us navigate complex challenges and build a high-performing center that has become a cornerstone of our global operations.",
      name: "Olivia Smith",
      role: "Chief Technology Officer",
      company: "Global Tech Solutions",
      industry: "Technology",
      location: "Bangalore",
      projectDetails: {
        timeline: "6 months",
        teamSize: "200+",
        savings: "45%",
        satisfaction: "Exceptional"
      }
    },
    {
      id: 2,
      quote: "The Say Space team delivered beyond our expectations. Their end-to-end approach to GCC establishment - from strategy to talent acquisition and operational setup - was seamless and highly effective. We now have a thriving innovation center in India.",
      name: "Jonathan Williams",
      role: "VP of Global Operations",
      company: "Financial Services Inc.",
      industry: "Financial Services",
      location: "Hyderabad",
      projectDetails: {
        timeline: "8 months",
        teamSize: "150+",
        savings: "40%",
        satisfaction: "Outstanding"
      }
    },
    {
      id: 3,
      quote: "Working with Say Space was a game-changer for our organization. Their comprehensive understanding of the GCC landscape and meticulous attention to detail ensured our center was operational ahead of schedule and within budget.",
      name: "Sarah Chen",
      role: "Head of Strategic Operations",
      company: "Healthcare Innovations Ltd.",
      industry: "Healthcare",
      location: "Chennai",
      projectDetails: {
        timeline: "7 months",
        teamSize: "180+",
        savings: "38%",
        satisfaction: "Excellent"
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeTestimonial];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Award className="w-4 h-4 mr-2" />
            CLIENT SUCCESS
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Client <span className="font-semibold text-logo-teal">Success Stories</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Hear from enterprise leaders who have successfully established their Global Capability Centers with our guidance
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Testimonial Content - 8 columns */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-logo-teal flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-light italic">
                  "{current.quote}"
                </blockquote>
                
                {/* Attribution */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 bg-logo-teal flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {getInitials(current.name)}
                    </span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {current.name}
                    </div>
                    <div className="text-logo-teal font-medium">
                      {current.role}
                    </div>
                    <div className="text-gray-600 font-light">
                      {current.company}
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cta-coral fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2 font-medium">
                    Excellent Rating
                  </span>
                </div>
              </div>
              
              {/* Project Details Card - 4 columns */}
              <div className="lg:col-span-4">
                <div className="bg-gray-50 border border-gray-200 p-6 lg:p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    Project Results
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-logo-teal/10 flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-logo-teal" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">Delivery Timeline</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {current.projectDetails.timeline}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cta-coral/10 flex items-center justify-center">
                          <Users className="w-4 h-4 text-cta-coral" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">Team Scale</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {current.projectDetails.teamSize}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                          <TrendingDown className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">Cost Reduction</span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {current.projectDetails.savings}
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
                        <CheckCircle className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          <span className="font-medium">Location:</span> {current.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          <span className="font-medium">Outcome:</span> {current.projectDetails.satisfaction}
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
        <div className="flex items-center justify-between mb-16 lg:mb-20">
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 transition-all duration-200 ${
                  index === activeTestimonial 
                    ? 'bg-logo-teal' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
            <span className="ml-4 text-sm text-gray-500 font-medium">
              {activeTestimonial + 1} of {testimonials.length}
            </span>
          </div>
          
          {/* Arrow Navigation */}
          <div className="flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="cusrsor-pointer w-10 h-10 bg-white border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors duration-200"
              disabled={activeTestimonial === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="cusrsor-pointer w-10 h-10 bg-white border border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors duration-200"
              disabled={activeTestimonial === testimonials.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Success Metrics</h3>
            <div className="w-12 h-px bg-logo-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">6.8</div>
              <div className="text-sm text-gray-600 font-medium">Avg. Setup Months</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">41%</div>
              <div className="text-sm text-gray-600 font-medium">Avg. Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Successful GCCs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesTestimonials