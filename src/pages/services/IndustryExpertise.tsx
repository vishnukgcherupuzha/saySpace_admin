
import { 
  Monitor, 
  Building2, 
  Cog, 
  Heart, 
  ShoppingCart, 
  Shield,
  ArrowRight,
  Briefcase
} from 'lucide-react';

const IndustryExpertise = () => {
  const industries = [
    {
      id: 1,
      icon: Monitor,
      title: "Technology & Software",
      description: "Specialized GCC solutions for technology companies focusing on software development, R&D, and product innovation.",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5",
      expertise: ["Software Development", "R&D Centers", "Product Innovation", "Digital Solutions"]
    },
    {
      id: 2,
      icon: Building2,
      title: "Banking & Financial Services",
      description: "GCC models for financial institutions with focus on risk management, compliance, analytics, and digital transformation.",
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5",
      expertise: ["Risk Management", "Compliance", "Analytics", "Digital Banking"]
    },
    {
      id: 3,
      icon: Cog,
      title: "Manufacturing & Engineering",
      description: "GCC solutions for manufacturing companies with focus on engineering design, R&D, supply chain, and IoT innovation.",
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5",
      expertise: ["Engineering Design", "R&D", "Supply Chain", "IoT Innovation"]
    },
    {
      id: 4,
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "GCC models for healthcare organizations focusing on clinical research, data analytics, regulatory affairs, and digital health.",
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5",
      expertise: ["Clinical Research", "Data Analytics", "Regulatory Affairs", "Digital Health"]
    },
    {
      id: 5,
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "GCC solutions for retailers with focus on digital transformation, analytics, supply chain optimization, and customer experience.",
      color: "from-cta-coral to-logo-beige",
      bgColor: "from-cta-coral/5 to-logo-beige/5",
      expertise: ["Digital Transformation", "Analytics", "Supply Chain", "Customer Experience"]
    },
    {
      id: 6,
      icon: Shield,
      title: "Insurance",
      description: "GCC models for insurance companies with focus on claims processing, underwriting, analytics, and digital transformation.",
      color: "from-logo-beige to-logo-teal",
      bgColor: "from-logo-beige/5 to-logo-teal/5",
      expertise: ["Claims Processing", "Underwriting", "Analytics", "Digital Solutions"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Sector Specialization
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Industry <span className="text-logo-teal">Expertise</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized GCC solutions for various industry sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={industry.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`bg-gradient-to-br ${industry.bgColor} border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${industry.color} rounded-full blur-3xl`}></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-bold text-xl text-card-foreground mb-4">
                      {industry.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {industry.description}
                    </p>
                    
                    {/* Expertise Areas */}
                    <div className="space-y-2 mb-6">
                      <h4 className="font-header font-semibold text-sm text-foreground mb-3">
                        Key Focus Areas:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.expertise.map((area, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${industry.color} rounded-full`}></div>
                            <span className="font-body text-xs text-muted-foreground">
                              {area}
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
      </div>
    </section>
  );
};

export default IndustryExpertise;