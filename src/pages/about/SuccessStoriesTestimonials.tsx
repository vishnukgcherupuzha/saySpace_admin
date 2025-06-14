import { useState } from 'react';
import { 
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Award,
  Building2,
  CheckCircle,
} from 'lucide-react';

const SuccessStoriesTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Say Space's expertise was instrumental in establishing our GCC in India. Their deep local knowledge and strategic approach helped us navigate complex challenges and build a high-performing center that has become a cornerstone of our global operations.",
      name: "Olivia Smith",
      role: "CTO",
      company: "Global Tech Solutions",
      industry: "Technology",
      projectDetails: {
        timeline: "6 months",
        teamSize: "200+",
        savings: "45%",
        satisfaction: "Excellent"
      },
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5"
    },
    {
      id: 2,
      quote: "The Say Space team delivered beyond our expectations. Their end-to-end approach to GCC establishment - from strategy to talent acquisition and operational setup - was seamless and highly effective. We now have a thriving innovation center in India.",
      name: "Jonathan Williams",
      role: "VP of Global Operations",
      company: "Financial Services Inc.",
      industry: "Financial Services",
      projectDetails: {
        timeline: "8 months",
        teamSize: "150+",
        savings: "40%",
        satisfaction: "Outstanding"
      },
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5"
    },
    {
      id: 3,
      quote: "Working with Say Space was a game-changer for our organization. Their comprehensive understanding of the GCC landscape and meticulous attention to detail ensured our center was operational ahead of schedule and within budget.",
      name: "Sarah Chen",
      role: "Head of Strategic Operations",
      company: "Healthcare Innovations Ltd.",
      industry: "Healthcare",
      projectDetails: {
        timeline: "7 months",
        teamSize: "180+",
        savings: "38%",
        satisfaction: "Exceptional"
      },
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5"
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
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-beige/20 backdrop-blur-sm border border-logo-beige/40 rounded-full mb-6">
            <Award className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Client Success
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Success <span className="text-logo-teal">Stories</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Client Testimonials
          </p>
          
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto">
            What our clients say about our GCC consulting services
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className={`bg-gradient-to-br ${current.bgColor} border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden`}>
            
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-logo-teal/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cta-coral/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Quote Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${current.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="font-body text-xl lg:text-2xl text-foreground leading-relaxed">
                    "{current.quote}"
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${current.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <span className="font-header font-bold text-white text-lg">
                        {getInitials(current.name)}
                      </span>
                    </div>
                    <div>
                      <div className="font-header font-bold text-xl text-foreground">
                        {current.name}
                      </div>
                      <div className="font-body text-lg text-cta-coral font-medium">
                        {current.role}
                      </div>
                      <div className="font-body text-muted-foreground">
                        {current.company}
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-cta-coral fill-current" />
                    ))}
                    <span className="font-body text-sm text-muted-foreground ml-2">
                      5.0 Client Rating
                    </span>
                  </div>
                </div>
                
                {/* Project Details Card */}
                <div className="bg-gradient-to-br from-card to-white/50 border border-border rounded-2xl p-6">
                  <h4 className="font-header font-semibold text-lg text-foreground mb-6 flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-logo-teal" />
                    Project Highlights
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-logo-teal rounded-full"></div>
                        <span className="font-body text-sm text-muted-foreground">Timeline</span>
                      </div>
                      <span className="font-header font-semibold text-foreground">
                        {current.projectDetails.timeline}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cta-coral rounded-full"></div>
                        <span className="font-body text-sm text-muted-foreground">Team Size</span>
                      </div>
                      <span className="font-header font-semibold text-foreground">
                        {current.projectDetails.teamSize}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-logo-beige rounded-full"></div>
                        <span className="font-body text-sm text-muted-foreground">Cost Savings</span>
                      </div>
                      <span className="font-header font-semibold text-foreground">
                        {current.projectDetails.savings}
                      </span>
                    </div>
                    
                    <div className="pt-4 border-t border-dividers">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-logo-teal" />
                        <span className="font-body text-sm text-muted-foreground">
                          Industry: {current.industry}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-logo-teal" />
                        <span className="font-body text-sm text-muted-foreground">
                          Satisfaction: {current.projectDetails.satisfaction}
                        </span>
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
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
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

export default SuccessStoriesTestimonials;