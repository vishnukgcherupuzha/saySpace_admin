import { 
  Network, 
  Building2, 
  Scale, 
  GraduationCap, 
  Cpu,
  CheckCircle,
  ArrowRight,
  Users,
  Globe
} from 'lucide-react';

const OurNetwork = () => {
  const networkCategories = [
    {
      id: 1,
      icon: Building2,
      title: "Real Estate Partners",
      description: "Premium office spaces and infrastructure solutions in India's leading technology corridors and business districts",
      partners: [
        "Premium IT Parks & SEZ Zones",
        "Grade A+ Office Spaces",
        "Ready-to-deploy Infrastructure",
        "Flexible Leasing Solutions"
      ],
      stats: { number: "25+", label: "Real Estate Partners" }
    },
    {
      id: 2,
      icon: Scale,
      title: "Legal Advisory Network",
      description: "Expert legal guidance for GCC establishment, regulatory compliance, and ongoing operational requirements",
      partners: [
        "Corporate Law Specialists",
        "Regulatory Compliance Experts",
        "Employment Law Advisors",
        "IP & Contract Management"
      ],
      stats: { number: "15+", label: "Legal Partners" }
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Strategic partnerships with leading universities and training institutes for comprehensive talent sourcing and development",
      partners: [
        "Top Engineering Colleges",
        "Premier Management Institutes",
        "Skill Development Centers",
        "Professional Certification Programs"
      ],
      stats: { number: "30+", label: "Educational Partners" }
    },
    {
      id: 4,
      icon: Cpu,
      title: "Technology Ecosystem",
      description: "Access to cutting-edge technology solutions, service providers, and digital infrastructure for modern GCC operations",
      partners: [
        "Cloud Infrastructure Providers",
        "Enterprise Software Solutions",
        "Cybersecurity Specialists",
        "Digital Transformation Tools"
      ],
      stats: { number: "40+", label: "Technology Partners" }
    }
  ];

  const networkValue = [
    {
      icon: Users,
      title: "Vetted Partners",
      description: "All partners are carefully selected and continuously evaluated for quality and reliability"
    },
    {
      icon: Globe,
      title: "Pan-India Coverage",
      description: "Comprehensive network spanning major business centers across India"
    },
    {
      icon: Network,
      title: "Integrated Solutions",
      description: "Seamless coordination between partners for end-to-end service delivery"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Network className="w-4 h-4 mr-2" />
            STRATEGIC PARTNERSHIPS
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our Partner <span className="font-semibold text-cta-coral">Network</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            A comprehensive ecosystem of trusted partners providing integrated solutions for successful GCC establishment and operations
          </p>
        </div>

        {/* Network Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {networkCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id}
                className="group bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-14 h-14 bg-logo-teal flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                          {category.title}
                        </h3>
                        <div className="w-12 h-px bg-logo-teal"></div>
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="text-center ml-4">
                      <div className="text-2xl font-light text-gray-900">
                        {category.stats.number}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {category.stats.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light mb-6">
                    {category.description}
                  </p>
                  
                  {/* Partner Types */}
                  <div className="space-y-3 mb-6">
                    {category.partners.map((partner, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-logo-teal flex-shrink-0" />
                        <span className="text-gray-600 font-light">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Professional hover indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-px bg-logo-teal"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Network Value Proposition */}
        <div className="bg-gray-50 border border-gray-200 p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Network <span className="font-semibold text-logo-teal">Value</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Our carefully curated partner network provides you with immediate access to best-in-class 
              service providers, eliminating the time and risk of vendor selection and vetting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {networkValue.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white border border-gray-200">
                  <div className="w-12 h-12 bg-logo-teal mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Network Statistics */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Scale</h3>
            <div className="w-12 h-px bg-logo-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">110+</div>
              <div className="text-sm text-gray-600 font-medium">Total Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">7</div>
              <div className="text-sm text-gray-600 font-medium">Major Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Vetted Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Support Access</div>
            </div>
          </div>
        </div>

        {/* Partner CTA */}
        <div className="bg-logo-teal text-white p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light mb-4">
                Access our <span className="font-semibold">Partner Network</span>
              </h3>
              <p className="text-lg opacity-90 font-light leading-relaxed">
                Leverage our established relationships to accelerate your GCC setup with 
                pre-vetted, high-quality service providers across all domains.
              </p>
            </div>
            
            <div className="lg:text-right">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer bg-white text-logo-teal hover:bg-gray-50 px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center justify-center">
                  View Partner Directory
                  <ArrowRight className="w-4 h-4 ml-3" />
                </button>
                <button className="cursor-pointer border-2 border-white text-white hover:bg-white hover:text-cta-coral px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center justify-center">
                  Partner With Us
                  <Network className="w-4 h-4 ml-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;