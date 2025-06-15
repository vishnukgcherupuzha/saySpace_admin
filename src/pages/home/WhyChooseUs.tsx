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
  ArrowRight
} from 'lucide-react';

const WhyChooseUs = () => {
  const coreExpertise = [
    {
      icon: Target,
      title: "Strategic GCC Consulting",
      description: "Tailored strategies aligned with your global business objectives to maximize ROI and operational excellence.",
      number: "01"
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Specialized leadership & CXO hiring services along with access to India's 4+ million skilled professionals across domains and functions.",
      number: "02"
    },
    {
      icon: Code,
      title: "IT Services",
      description: "Comprehensive technology infrastructure setup, custom software solutions, and digital transformation initiatives for your GCC operations.",
      number: "03"
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Streamlined setup with comprehensive compliance and legal support for a hassle-free experience.",
      number: "04"
    },
    {
      icon: TrendingUp,
      title: "Ongoing Management",
      description: "Continuous optimization of your GCC operations for maximum ROI and sustainable growth.",
      number: "05"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to ensure business continuity.",
      number: "06"
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
      description: "Prime location selection in India's thriving tech corridors with world-class infrastructure and amenities.",
      features: ["Prime Locations", "Tech Corridors", "World-class Infrastructure"]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <div className="w-2 h-2 bg-logo-teal rounded-full mr-2"></div>
            YOUR TRUSTED GCC PARTNER
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Why Choose <span className="font-semibold text-logo-teal">Our Expertise</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            End-to-end GCC solutions designed for global enterprises seeking strategic advantage in India's innovation ecosystem
          </p>
        </div>

        {/* Core Expertise */}
        <div className="mb-20 lg:mb-24">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Our Core <span className="font-semibold text-cta-coral">Capabilities</span>
            </h3>
            <div className="w-24 h-px bg-cta-coral mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreExpertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 relative"
                >
                  {/* Number indicator */}
                  <div className="absolute top-6 right-6 text-6xl font-light text-gray-100 group-hover:text-logo-teal/20 transition-colors duration-300">
                    {item.number}
                  </div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-logo-teal text-white flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                    
                    {/* Professional hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-px bg-logo-teal"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alliance Expertise */}
        <div>
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Strategic <span className="font-semibold text-logo-teal">Partnerships</span>
            </h3>
            <div className="w-24 h-px bg-logo-teal mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {allianceExpertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gray-100 group-hover:bg-logo-teal text-gray-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    {item.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-cta-coral mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 font-medium">
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

        {/* Call to Action Bar */}
        <div className="mt-16 lg:mt-20 bg-logo-teal text-white p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl lg:text-3xl font-light mb-4">
                Ready to establish your <span className="font-semibold">GCC in India?</span>
              </h4>
              <p className="text-lg opacity-90 font-light">
                Let's discuss your strategic objectives and create a tailored roadmap for success.
              </p>
            </div>
            <div className="lg:text-right">
              <button className="cursor-pointer group bg-white text-logo-teal hover:bg-gray-50 px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center">
                Schedule Strategic Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;