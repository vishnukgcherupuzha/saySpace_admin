import { 
  Target,
  MapPin,
  Users,
  Settings,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ProvenProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Strategy Development",
      description: "Aligning your GCC vision with business goals",
      icon: Target,
      color: "bg-logo-teal",
      details: [
        "Business objectives analysis",
        "Market opportunity assessment",
        "Strategic roadmap creation",
        "Risk evaluation and mitigation"
      ]
    },
    {
      id: 2,
      title: "Location Selection",
      description: "Identifying the optimal India location for your needs",
      icon: MapPin,
      color: "bg-cta-coral",
      details: [
        "Market research and analysis",
        "Site visits and evaluations",
        "Infrastructure assessment",
        "Cost-benefit analysis"
      ]
    },
    {
      id: 3,
      title: "Talent Acquisition",
      description: "Building your specialized teams",
      icon: Users,
      color: "bg-logo-beige",
      details: [
        "Talent mapping and sourcing",
        "Executive and leadership hiring",
        "Skill-based team building",
        "Onboarding and integration"
      ]
    },
    {
      id: 4,
      title: "Operational Setup",
      description: "Managing compliance, infrastructure, and systems",
      icon: Settings,
      color: "bg-logo-teal",
      details: [
        "Legal entity formation",
        "Regulatory compliance setup",
        "IT infrastructure deployment",
        "Process standardization"
      ]
    },
    {
      id: 5,
      title: "Ongoing Optimization",
      description: "Ensuring continuous improvement and growth",
      icon: TrendingUp,
      color: "bg-cta-coral",
      details: [
        "Performance monitoring",
        "Process optimization",
        "Scaling strategies",
        "Continuous support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Proven <span className="text-logo-teal">Process</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined approach to GCC setup and management
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={step.id} className="relative">
                
                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 z-10">
                    <ArrowRight className="w-6 h-6 text-dividers" />
                  </div>
                )}
                
                {/* Step Card */}
                <div className="bg-card border border-dividers rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 h-full">
                  
                  {/* Icon */}
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="w-8 h-8 bg-logo-teal/10 text-logo-teal rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {step.id}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-header font-bold text-lg text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  {/* <ul className="space-y-2 text-left">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-logo-teal rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="font-body text-xs text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-3 bg-logo-teal text-white font-header font-medium rounded-xl hover:bg-logo-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            <span>Start Your GCC Journey</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;