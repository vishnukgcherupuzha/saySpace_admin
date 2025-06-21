import {
  Users,
  CheckCircle,
  Target,
  ArrowRight,
  UserPlus,
  GraduationCap
} from 'lucide-react';

const TalentAcquisitionDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: Target,
      title: "Talent Planning & Positioning",
      description: "Talent mapping and market analysis, employer branding and value proposition development, and recruitment process design tailored to your GCC.",
      features: [
        "Talent mapping and market analysis",
        "Employer branding development",
        "Value proposition creation",
        "Recruitment process design"
      ]
    },
    {
      id: 2,
      icon: UserPlus,
      title: "Strategic Hiring Solutions",
      description: "Executive and leadership hiring, technical and functional recruitment, and campus recruitment programs with premier educational institutions.",
      features: [
        "Executive and leadership hiring",
        "Technical and functional recruitment",
        "Campus recruitment programs"
      ]
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Capability Development",
      description: "Customized training programs, knowledge transfer frameworks, performance management systems, and career progression planning.",
      features: [
        "Customized training programs",
        "Knowledge transfer frameworks",
        "Performance management systems",
        "Career progression planning"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Users className="w-4 h-4 mr-2" />
            SERVICE CATEGORY
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Workforce Strategy & <span className="font-semibold text-logo-teal">Growth</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Build high-performing teams with specialized skills tailored to your requirements.
          </p>
        </div>

        {/* Sub-Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {subServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-logo-teal flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                      <span className="font-semibold text-sm text-gray-600">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">
                      Key Components:
                    </h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Ready to Build Your High-Performing <span className="font-semibold text-logo-teal">GCC Team?</span>
          </h3>

          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our talent acquisition experts will help you attract, hire, and develop the specialized skills
            your GCC needs to succeed in today's competitive landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <Users className="w-5 h-5 mr-3" />
              Build Your GCC Team
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <GraduationCap className="w-5 h-5 mr-3" />
              Discuss Talent Strategy
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Talent Insights Section */}
        <div className="mt-16 lg:mt-20 bg-gray-50 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              India's <span className="font-semibold text-logo-teal">Talent Advantage</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">World-Class Education</h4>
              <p className="text-gray-600 font-light text-sm">Access to graduates from premier engineering and business schools</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Diverse Skill Sets</h4>
              <p className="text-gray-600 font-light text-sm">Multi-lingual professionals with global experience</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost Efficiency</h4>
              <p className="text-gray-600 font-light text-sm">Competitive compensation with high-quality outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentAcquisitionDetail;