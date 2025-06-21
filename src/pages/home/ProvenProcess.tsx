import {
  Target,
  MapPin,
  Users,
  Settings,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ProvenProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Strategic Planning",
      description: "In-depth analysis and strategic planning aligned with your global business goals.",
      icon: Target,
      phase: "PLANNING",
      details: [
        "Analysis of business objectives",
        "Identification of market opportunities",
        "Creation of strategic roadmap",
        "Risk assessment and mitigation planning"
      ]
    },
    {
      id: 2,
      title: "Site Assessment",
      description: "A data-driven approach to identify the most suitable locations across India.",
      icon: MapPin,
      phase: "SELECTION",
      details: [
        "Comprehensive market research",
        "On-site evaluations and visits",
        "Infrastructure and connectivity review",
        "Cost-benefit and feasibility analysis"
      ]
    },
    {
      id: 3,
      title: "Workforce Planning",
      description: "Targeted recruitment strategies to assemble skilled, high-performance teams.",
      icon: Users,
      phase: "STAFFING",
      details: [
        "Talent landscape mapping and sourcing",
        "Leadership and CXO hiring",
        "Team structuring based on skill requirements",
        "Onboarding and cultural integration"
      ]
    },
    {
      id: 4,
      title: "Infrastructure Establishment",
      description: "Comprehensive setup support covering legal, compliance, and infrastructure needs.",
      icon: Settings,
      phase: "IMPLEMENTATION",
      details: [
        "Formation of legal entity",
        "Regulatory and compliance alignment",
        "Deployment of IT and business infrastructure",
        "Standardization of key processes"
      ]
    },
    {
      id: 5,
      title: "Performance Enhancement",
      description: "Continuous improvement and scaling support for long-term GCC success.",
      icon: TrendingUp,
      phase: "OPTIMIZATION",
      details: [
        "Real-time performance tracking",
        "Operational process enhancements",
        "Growth and scalability strategies",
        "Ongoing advisory and support"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <div className="w-2 h-2 bg-logo-teal rounded-full mr-2"></div>
            PROVEN METHODOLOGY
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our Strategic <span className="font-semibold text-logo-teal">Process</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive, data-driven approach to establishing and scaling your Global Capability Center
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gray-300"></div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step) => {
              const IconComponent = step.icon;

              return (
                <div key={step.id} className="relative">

                  {/* Timeline Connector for Desktop */}
                  <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-logo-teal rounded-full z-10"></div>

                  {/* Step Card */}
                  <div className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group">

                    {/* Phase Label */}
                    <div className="text-xs text-gray-500 font-medium tracking-wide mb-4">
                      {step.phase}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-logo-teal group-hover:bg-logo-teal/90 transition-colors duration-300 flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Step Number */}
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gray-100 text-gray-600 flex items-center justify-center text-sm font-semibold mr-3">
                        {step.id}
                      </div>
                      <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-logo-teal mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-light">{detail}</span>
                        </div>
                      ))}
                    </div>

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

        {/* Process Benefits */}
        <div className="mt-20 lg:mt-24 bg-gray-50 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
                Why Our <span className="font-semibold text-logo-teal">Process Works</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-logo-teal/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-logo-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Methodology</h4>
                    <p className="text-gray-600 font-light">50+ successful GCC implementations using our structured approach</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cta-coral/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-cta-coral" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
                    <p className="text-gray-600 font-light">Comprehensive planning reduces setup risks and ensures compliance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Accelerated Timeline</h4>
                    <p className="text-gray-600 font-light">Streamlined process reduces time-to-market by 40% on average</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">90</div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">AVERAGE SETUP DAYS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">COMPLIANCE SUCCESS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">40%</div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">FASTER TIME-TO-MARKET</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">SUCCESSFUL SETUPS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="cursor-pointer group bg-logo-teal hover:bg-logo-teal/90 text-white px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center">
              Start Your GCC Journey
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
            <button className="cursor-pointer border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold transition-all duration-200 hover:bg-logo-teal/5">
              Download Process Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;