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
  CheckCircle2
} from 'lucide-react';

const SuccessStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      company: "Fortune 500 Technology Company",
      role: "CTO",
      name: "Sarah Johnson",
      quote: "Our GCC in India became operational in just 90 days with their expert guidance. The talent quality and cost savings have exceeded our expectations. We've been able to scale our operations faster than anticipated.",
      stats: {
        timeline: "90 days",
        savings: "40%",
        teamSize: "250+"
      },
      industry: "Technology",
      location: "India",
      rating: 5
    },
    {
      id: 2,
      company: "Global Financial Services Leader",
      role: "Head of Operations",
      name: "Michael Chen",
      quote: "The comprehensive support from legal compliance to talent acquisition made our GCC setup seamless. Their deep understanding of local regulations and market dynamics was invaluable.",
      stats: {
        timeline: "120 days",
        savings: "35%",
        teamSize: "180+"
      },
      industry: "Financial Services",
      location: "Bangalore",
      rating: 5
    },
    {
      id: 3,
      company: "European Healthcare Giant",
      role: "VP of Global Operations",
      name: "Emma Rodriguez",
      quote: "From location scouting to regulatory compliance, they handled everything professionally. Our GCC is now a key strategic asset for our global operations with world-class infrastructure.",
      stats: {
        timeline: "105 days",
        savings: "45%",
        teamSize: "320+"
      },
      industry: "Healthcare",
      location: "Hyderabad",
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
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <Award className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Proven Track Record
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Success <span className="text-cta-coral">Stories</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading global organizations
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-card to-dividers/10 border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-logo-teal/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cta-coral/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-cta-coral to-cta-coral/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="font-body text-xl lg:text-2xl text-foreground leading-relaxed">
                    "{current.quote}"
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-logo-teal to-logo-teal/80 rounded-full flex items-center justify-center">
                      <span className="font-header font-bold text-white text-lg">
                        {current.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-header font-semibold text-lg text-foreground">
                        {current.role}
                      </div>
                      <div className="font-body text-muted-foreground">
                        {current.company}
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cta-coral fill-current" />
                    ))}
                    <span className="font-body text-sm text-muted-foreground ml-2">
                      {current.rating}.0 Rating
                    </span>
                  </div>
                </div>
                
                {/* Stats Card */}
                <div className="bg-gradient-to-br from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-2xl p-6">
                  <h4 className="font-header font-semibold text-lg text-foreground mb-6">
                    Project Highlights
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-logo-teal" />
                        <span className="font-body text-sm text-muted-foreground">Setup Time</span>
                      </div>
                      <span className="font-header font-bold text-lg text-cta-coral">
                        {current.stats.timeline}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-logo-teal" />
                        <span className="font-body text-sm text-muted-foreground">Cost Savings</span>
                      </div>
                      <span className="font-header font-bold text-lg text-cta-coral">
                        {current.stats.savings}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-logo-teal" />
                        <span className="font-body text-sm text-muted-foreground">Team Size</span>
                      </div>
                      <span className="font-header font-bold text-lg text-cta-coral">
                        {current.stats.teamSize}
                      </span>
                    </div>
                    
                    <div className="pt-4 border-t border-dividers">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-logo-teal" />
                        <span className="font-body text-sm text-muted-foreground">Industry: {current.industry}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-logo-teal" />
                        <span className="font-body text-sm text-muted-foreground">Location: {current.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-cta-coral scale-125' 
                          : 'bg-dividers hover:bg-logo-teal'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  >
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;