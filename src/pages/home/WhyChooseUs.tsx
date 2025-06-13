import { 
  Target, 
  Users, 
  Code, 
  Settings, 
  TrendingUp, 
  Shield,
  Scale,
  Calculator,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WhyChooseUs = () => {
  const coreExpertise = [
    {
      icon: Target,
      title: "Strategic GCC Consulting",
      description: "Tailored strategies aligned with your global business objectives to maximize ROI and operational excellence.",
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Specialized leadership & CXO hiring services along with access to Pune's 4+ million skilled professionals across domains and functions.",
      color: "from-cta-coral to-cta-coral/80"
    },
    {
      icon: Code,
      title: "IT Services",
      description: "Comprehensive technology infrastructure setup, custom software solutions, and digital transformation initiatives for your GCC operations.",
      color: "from-logo-beige to-logo-beige/80"
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Streamlined setup with comprehensive compliance and legal support for a hassle-free experience.",
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      icon: TrendingUp,
      title: "Ongoing Management",
      description: "Continuous optimization of your GCC operations for maximum ROI and sustainable growth.",
      color: "from-cta-coral to-cta-coral/80"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to ensure business continuity.",
      color: "from-logo-beige to-logo-beige/80"
    }
  ];

  const allianceExpertise = [
    {
      icon: Scale,
      title: "Legal & Compliance Solutions",
      description: "Expert guidance on company formation, regulatory requirements, and labor-related compliances for smooth GCC operations.",
      features: ["Company Formation", "Regulatory Compliance", "Labor Law Guidance"]
    },
    {
      icon: Calculator,
      title: "Financial Advisory",
      description: "Specialized expertise in finance and accounts setup, financial planning, tax optimization, and reporting systems for your GCC.",
      features: ["Financial Planning", "Tax Optimization", "Reporting Systems"]
    },
    {
      icon: MapPin,
      title: "Real Estate Solutions",
      description: "Prime location selection in Pune's thriving tech corridors with world-class infrastructure and amenities.",
      features: ["Prime Locations", "Tech Corridors", "World-class Infrastructure"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-logo-beige/20 backdrop-blur-sm border border-logo-beige/40 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Your Trusted GCC Partner
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Why Choose <span className="text-logo-teal">Us?</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end GCC solutions tailored to your business needs
          </p>
        </div>

        {/* Core Expertise */}
        <div className="mb-24">
          <h3 className="font-header font-bold text-3xl text-foreground text-center mb-12">
            Our Core <span className="text-cta-coral">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreExpertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-dividers/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="font-header font-semibold text-xl text-card-foreground mb-4">
                      {item.title}
                    </h4>
                    
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Hover arrow */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-logo-teal" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alliance Expertise */}
        <div>
          <h3 className="font-header font-bold text-3xl text-foreground text-center mb-12">
            Alliance <span className="text-logo-teal">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {allianceExpertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-card to-dividers/10 border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-logo-teal to-logo-teal/80 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-header font-semibold text-xl text-card-foreground mb-4">
                    {item.title}
                  </h4>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-cta-coral rounded-full mr-3"></div>
                        <span className="font-body text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
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

export default WhyChooseUs;