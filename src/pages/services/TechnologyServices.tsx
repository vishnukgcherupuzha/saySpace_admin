import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Smartphone, 
  Zap,
  ArrowRight,
  Cpu,
  CheckCircle
} from 'lucide-react';

const TechnologyServices = () => {
  const techServices = [
    {
      id: 1,
      icon: Brain,
      title: "Artificial Intelligence & ML",
      description: "Build AI capabilities within your GCC including machine learning solutions, predictive analytics, natural language processing, and computer vision applications.",
      capabilities: ["Machine Learning Solutions", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      trending: true
    },
    {
      id: 2,
      icon: Shield,
      title: "Cybersecurity",
      description: "Implement robust security frameworks with threat detection, vulnerability management, security operations centers, and compliance monitoring for your GCC.",
      capabilities: ["Threat Detection", "Vulnerability Management", "Security Operations", "Compliance Monitoring"]
    },
    {
      id: 3,
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Establish cloud engineering teams focused on migration, optimization, infrastructure as code, and continuous integration/deployment pipelines.",
      capabilities: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Optimization"]
    },
    {
      id: 4,
      icon: BarChart3,
      title: "Data Analytics",
      description: "Create advanced analytics capabilities with data engineering, business intelligence, data visualization, and big data processing expertise.",
      capabilities: ["Data Engineering", "Business Intelligence", "Data Visualization", "Big Data Processing"]
    },
    {
      id: 5,
      icon: Smartphone,
      title: "Digital Experience",
      description: "Build capabilities in mobile development, UX/UI design, progressive web applications, and cross-platform solutions for your digital initiatives.",
      capabilities: ["Mobile Development", "UX/UI Design", "Progressive Web Apps", "Cross-Platform Solutions"]
    },
    {
      id: 6,
      icon: Zap,
      title: "Automation & RPA",
      description: "Implement robotic process automation, workflow optimization, intelligent automation, and process mining to drive operational efficiencies.",
      capabilities: ["Robotic Process Automation", "Workflow Optimization", "Intelligent Automation", "Process Mining"]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Cpu className="w-4 h-4 mr-2" />
            TECHNOLOGY CAPABILITIES
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Technology <span className="font-semibold text-logo-teal">Services</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Cutting-edge technology capabilities for your GCC operations
          </p>
        </div>

        {/* Technology Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
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
                    <div className="bg-cta-coral text-white px-3 py-1 shadow-lg">
                      <span className="font-semibold text-xs">Trending</span>
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300 h-full">
                  
                  <div className="h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-logo-teal flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Capabilities */}
                    <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-sm text-gray-900 mb-3">
                        Core Capabilities:
                      </h4>
                      <div className="space-y-2">
                        {service.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600 font-light">
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Learn More Button */}
                    <button className="cursor-pointer group/btn w-full mt-auto py-3 px-6 border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal font-semibold text-base transition-all duration-300 flex items-center justify-center hover:bg-logo-teal/5">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Innovation Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Technology <span className="font-semibold text-logo-teal">Innovation Hub</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Leverage India's technology talent and innovation ecosystem to build world-class 
              capabilities that drive digital transformation and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI & Machine Learning</h4>
              <p className="text-gray-600 font-light text-sm">Advanced AI capabilities and data science expertise</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security & Compliance</h4>
              <p className="text-gray-600 font-light text-sm">Enterprise-grade security and regulatory compliance</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud Excellence</h4>
              <p className="text-gray-600 font-light text-sm">Modern cloud-native architectures and DevOps practices</p>
            </div>
          </div>

          {/* Technology Benefits */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Innovation Advantages</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Access to cutting-edge technology talent</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Rapid prototyping and innovation cycles</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Cost-effective R&D and development</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Business Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Accelerated digital transformation initiatives</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Enhanced operational efficiency and automation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Improved customer experience and engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gray-50 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Ready to Build Your <span className="font-semibold text-logo-teal">Technology Capabilities?</span>
          </h3>
          
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our technology experts will help you establish cutting-edge capabilities that drive 
            innovation and competitive advantage for your GCC operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <Cpu className="w-5 h-5 mr-3" />
              Discuss Your Technology Needs
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <Brain className="w-5 h-5 mr-3" />
              Explore AI Solutions
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;