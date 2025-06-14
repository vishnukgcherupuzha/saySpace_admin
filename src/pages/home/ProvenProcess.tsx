import { useState } from 'react';
import { 
  Target,
  MapPin,
  Users,
  Settings,
  TrendingUp,
  Clock,
  Rocket
} from 'lucide-react';

const ProvenProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Strategy Development",
      description: "Aligning your GCC vision with business goals",
      icon: Target,
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5",
      details: [
        "Business objectives analysis",
        "Market opportunity assessment",
        "Strategic roadmap creation",
        "Risk evaluation and mitigation"
      ],
      duration: "2-3 weeks"
    },
    {
      id: 2,
      title: "Location Selection",
      description: "Identifying the optimal India location for your needs",
      icon: MapPin,
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5",
      details: [
        "Market research and analysis",
        "Site visits and evaluations",
        "Infrastructure assessment",
        "Cost-benefit analysis"
      ],
      duration: "1-2 weeks"
    },
    {
      id: 3,
      title: "Talent Acquisition",
      description: "Building your specialized teams",
      icon: Users,
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5",
      details: [
        "Talent mapping and sourcing",
        "Executive and leadership hiring",
        "Skill-based team building",
        "Onboarding and integration"
      ],
      duration: "4-6 weeks"
    },
    {
      id: 4,
      title: "Operational Setup",
      description: "Managing compliance, infrastructure, and systems",
      icon: Settings,
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5",
      details: [
        "Legal entity formation",
        "Regulatory compliance setup",
        "IT infrastructure deployment",
        "Process standardization"
      ],
      duration: "3-4 weeks"
    },
    {
      id: 5,
      title: "Ongoing Optimization",
      description: "Ensuring continuous improvement and growth",
      icon: TrendingUp,
      color: "from-cta-coral to-logo-beige",
      bgColor: "from-cta-coral/5 to-logo-beige/5",
      details: [
        "Performance monitoring",
        "Process optimization",
        "Scaling strategies",
        "Continuous support"
      ],
      duration: "Ongoing"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Proven Methodology
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Proven <span className="text-logo-teal">Process</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined approach to GCC setup and management
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-logo-teal via-cta-coral to-logo-beige rounded-full transform -translate-y-1/2"></div>
              
              {/* Process Steps */}
              <div className="grid grid-cols-5 gap-4 relative z-10">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = activeStep === index;
                  
                  return (
                    <div 
                      key={step.id}
                      className="text-center cursor-pointer group"
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Step Circle */}
                      <div className={`relative mx-auto mb-6 transition-all duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl ${
                          isActive ? 'ring-4 ring-white ring-opacity-50' : ''
                        }`}>
                          <IconComponent className="w-9 h-9 text-white" />
                        </div>
                        
                        {/* Step Number */}
                        <div className="absolute -top-2 left-2 w-8 h-8 bg-white border-2 border-background rounded-full flex items-center justify-center shadow-lg">
                          <span className="font-header font-bold text-sm text-logo-teal">
                            {step.id}
                          </span>
                        </div>
                      </div>
                      
                      {/* Step Content */}
                      <div className="space-y-2">
                        <h3 className={`font-header font-semibold text-lg transition-colors duration-200 ${
                          isActive ? 'text-logo-teal' : 'text-foreground group-hover:text-logo-teal'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        {/* <div className="flex items-center justify-center text-xs text-cta-coral">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div 
                  key={step.id}
                  className="relative"
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-logo-teal to-cta-coral"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Step Circle */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-background rounded-full flex items-center justify-center shadow-lg">
                        <span className="font-header font-bold text-sm text-logo-teal">
                          {step.id}
                        </span>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="font-header font-semibold text-lg text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center text-xs text-cta-coral">
                        <Clock className="w-3 h-3 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;