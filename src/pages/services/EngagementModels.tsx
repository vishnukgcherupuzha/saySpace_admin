
import { 
  CheckCircle, 
  ArrowRight,
  Target,
  Repeat,
  Settings,
  Clock,
  Users
} from 'lucide-react';

const EngagementModels = () => {
  const engagementModels = [
    {
      id: 1,
      icon: Target,
      title: "Project-Based",
      description: "Clearly defined scope, deliverables, and timeline for specific GCC initiatives like setup, expansion, or optimization.",
      features: [
        "Fixed scope and budget",
        "Defined deliverables and milestones",
        "Typical duration: 3-6 months",
        "Ideal for specific GCC initiatives"
      ],
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5",
      buttonText: "Learn More",
      highlight: "Best for targeted initiatives"
    },
    {
      id: 2,
      icon: Repeat,
      title: "Retained Services",
      description: "Ongoing advisory and implementation support for GCC strategy, operations, and optimization with dedicated resources.",
      features: [
        "Monthly retainer model",
        "Dedicated advisory team",
        "Scalable engagement scope",
        "Ideal for ongoing GCC management"
      ],
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5",
      buttonText: "Learn More",
      highlight: "Most popular choice",
      popular: true
    },
    {
      id: 3,
      icon: Settings,
      title: "Managed GCC",
      description: "End-to-end management of your GCC where we handle all aspects of setup, operations, and optimization on your behalf.",
      features: [
        "Turnkey solution",
        "Comprehensive service offering",
        "Long-term partnership (12+ months)",
        "Ideal for rapid GCC deployment"
      ],
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5",
      buttonText: "Learn More",
      highlight: "Complete hands-off solution"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <Users className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Partnership Options
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Engagement <span className="text-cta-coral">Models</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible partnership options to suit your specific requirements
          </p>
        </div>

        {/* Engagement Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {engagementModels.map((model) => {
            const IconComponent = model.icon;
            return (
              <div 
                key={model.id}
                className={`group relative ${model.popular ? 'transform scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-cta-coral to-cta-coral/90 text-white px-4 py-2 rounded-full shadow-lg">
                      <span className="font-header font-semibold text-sm">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className={`bg-gradient-to-br ${model.bgColor} border ${model.popular ? 'border-cta-coral/30 shadow-xl' : 'border-border'} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${model.color} rounded-full blur-3xl`}></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="font-body text-xs text-muted-foreground block mb-1">
                          {model.highlight}
                        </span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-muted-foreground mr-1" />
                          <span className="font-body text-xs text-muted-foreground">
                            Flexible Duration
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-bold text-2xl text-card-foreground mb-4">
                      {model.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {model.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <button className={`group/btn w-full py-3 px-6 rounded-xl font-header font-semibold transition-all duration-300 flex items-center justify-center ${
                      model.popular 
                        ? 'bg-gradient-to-r from-cta-coral to-cta-coral/90 text-white hover:shadow-lg' 
                        : 'border-2 border-border text-foreground hover:border-cta-coral hover:text-cta-coral'
                    }`}>
                      {model.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-header font-bold text-2xl lg:text-3xl text-foreground mb-4">
              Choose the Right Model for You
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Compare our engagement models to find the perfect fit for your GCC requirements
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-4 bg-gradient-to-r from-logo-teal to-cta-coral text-white p-6">
              <div className="font-header font-semibold">Features</div>
              <div className="font-header font-semibold text-center">Project-Based</div>
              <div className="font-header font-semibold text-center">Retained Services</div>
              <div className="font-header font-semibold text-center">Managed GCC</div>
            </div>
            
            {[
              { feature: "Engagement Duration", project: "3-6 months", retained: "Ongoing", managed: "12+ months" },
              { feature: "Resource Allocation", project: "As needed", retained: "Dedicated team", managed: "Full team" },
              { feature: "Scope Flexibility", project: "Fixed", retained: "Scalable", managed: "Comprehensive" },
              { feature: "Investment Level", project: "Low-Medium", retained: "Medium", managed: "Medium-High" }
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-4 p-6 border-b border-dividers last:border-b-0 ${
                index % 2 === 0 ? 'bg-background' : 'bg-dividers/10'
              }`}>
                <div className="font-body font-medium text-foreground">
                  {row.feature}
                </div>
                <div className="text-center font-body text-sm text-muted-foreground">
                  {row.project}
                </div>
                <div className="text-center font-body text-sm text-muted-foreground">
                  {row.retained}
                </div>
                <div className="text-center font-body text-sm text-muted-foreground">
                  {row.managed}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;