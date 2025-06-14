
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Smartphone, 
  Zap,
  ArrowRight,
  Cpu
} from 'lucide-react';

const TechnologyServices = () => {
  const techServices = [
    {
      id: 1,
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description: "Build AI capabilities within your GCC including machine learning solutions, predictive analytics, natural language processing, and computer vision applications.",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5",
      capabilities: ["Machine Learning Solutions", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      trending: true
    },
    {
      id: 2,
      icon: Shield,
      title: "Cybersecurity",
      description: "Implement robust security frameworks with threat detection, vulnerability management, security operations centers, and compliance monitoring for your GCC.",
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5",
      capabilities: ["Threat Detection", "Vulnerability Management", "Security Operations", "Compliance Monitoring"]
    },
    {
      id: 3,
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Establish cloud engineering teams focused on migration, optimization, infrastructure as code, and continuous integration/deployment pipelines.",
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5",
      capabilities: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Optimization"]
    },
    {
      id: 4,
      icon: BarChart3,
      title: "Data Analytics",
      description: "Create advanced analytics capabilities with data engineering, business intelligence, data visualization, and big data processing expertise.",
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5",
      capabilities: ["Data Engineering", "Business Intelligence", "Data Visualization", "Big Data Processing"]
    },
    {
      id: 5,
      icon: Smartphone,
      title: "Digital Experience",
      description: "Build capabilities in mobile development, UX/UI design, progressive web applications, and cross-platform solutions for your digital initiatives.",
      color: "from-cta-coral to-logo-beige",
      bgColor: "from-cta-coral/5 to-logo-beige/5",
      capabilities: ["Mobile Development", "UX/UI Design", "Progressive Web Apps", "Cross-Platform Solutions"]
    },
    {
      id: 6,
      icon: Zap,
      title: "Automation & RPA",
      description: "Implement robotic process automation, workflow optimization, intelligent automation, and process mining to drive operational efficiencies.",
      color: "from-logo-beige to-logo-teal",
      bgColor: "from-logo-beige/5 to-logo-teal/5",
      capabilities: ["Robotic Process Automation", "Workflow Optimization", "Intelligent Automation", "Process Mining"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Technology Capabilities
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Technology <span className="text-logo-teal">Services</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology capabilities for your GCC operations
          </p>
        </div>

        {/* Technology Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative"
              >
                {/* Trending Badge */}
                {service.trending && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-cta-coral to-cta-coral/90 text-white px-3 py-1 rounded-full shadow-lg">
                      <span className="font-header font-semibold text-xs">Trending</span>
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className={`bg-gradient-to-br ${service.bgColor} border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-full blur-3xl`}></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-bold text-xl text-card-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Capabilities */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-header font-semibold text-sm text-foreground mb-3">
                        Core Capabilities:
                      </h4>
                      <div className="space-y-2">
                        {service.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                            <span className="font-body text-xs text-muted-foreground">
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Learn More Button */}
                    <button className="group/btn w-full mt-auto py-3 px-6 border border-border text-foreground hover:border-logo-teal hover:text-logo-teal rounded-xl font-header font-medium transition-all duration-300 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="font-header font-bold text-2xl lg:text-3xl text-foreground mb-4">
              Ready to build your technology capabilities?
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our technology experts will help you establish cutting-edge capabilities that drive innovation and competitive advantage for your GCC operations.
            </p>
            
            <button className="group bg-gradient-to-r from-logo-teal to-cta-coral hover:from-logo-teal/90 hover:to-cta-coral/90 text-white px-10 py-4 rounded-xl font-header font-semibold text-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto">
              <Cpu className="w-6 h-6 mr-3" />
              Discuss Your Technology Needs
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;