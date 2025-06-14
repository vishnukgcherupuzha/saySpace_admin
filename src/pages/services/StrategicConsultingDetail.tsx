
import { 
  Target, 
  CheckCircle, 
  Settings, 
  ArrowRight,
  TrendingUp,
  Map
} from 'lucide-react';

const StrategicConsultingDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: TrendingUp,
      title: "GCC Feasibility Assessment",
      description: "Comprehensive analysis of your organization's readiness for a GCC, including market analysis, business case development, ROI modeling, and risk assessment.",
      features: [
        "Market analysis",
        "Business case development", 
        "ROI modeling",
        "Risk assessment"
      ],
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      id: 2,
      icon: Settings,
      title: "GCC Operating Model Design",
      description: "Development of an optimal operating model including function selection, organizational structure planning, governance framework, and technology roadmap.",
      features: [
        "Function selection",
        "Organizational structure planning",
        "Governance framework", 
        "Technology roadmap"
      ],
      color: "from-cta-coral to-cta-coral/80"
    },
    {
      id: 3,
      icon: Map,
      title: "Transition Roadmap",
      description: "Detailed implementation planning with phased approach, knowledge transfer methodology, and transition risk management strategies.",
      features: [
        "Phased approach",
        "Knowledge transfer methodology",
        "Transition risk management strategies"
      ],
      color: "from-logo-beige to-logo-beige/80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-6">
            <Target className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Service Category
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl text-foreground mb-6">
            Strategic <span className="text-logo-teal">Consulting</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
            Develop a customized GCC strategy aligned with your global business objectives.
          </p>
        </div>

        {/* Sub-Services */}
        <div className="space-y-8">
          {subServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-full blur-3xl`}></div>
                  </div>
                  
                  <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                      
                      {/* Service Header */}
                      <div className="lg:col-span-1 space-y-6">
                        {/* Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-header font-bold text-2xl text-card-foreground">
                          {service.title}
                        </h3>
                        
                        {/* Number Badge */}
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-dividers to-dividers/80 rounded-full">
                          <span className="font-header font-bold text-sm text-muted-foreground">
                            {service.id}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="lg:col-span-1">
                        <p className="font-body text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div className="lg:col-span-1">
                        <h4 className="font-header font-semibold text-lg text-foreground mb-4">
                          Key Components:
                        </h4>
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                              <span className="font-body text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
          <button className="group bg-gradient-to-r from-logo-teal to-logo-teal/90 hover:from-logo-teal/90 hover:to-logo-teal text-white px-10 py-4 rounded-xl font-header font-semibold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-logo-teal/25 transform hover:-translate-y-1 flex items-center mx-auto">
              <Target className="w-6 h-6 mr-3" />
              Discuss Your GCC Strategy
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default StrategicConsultingDetail;