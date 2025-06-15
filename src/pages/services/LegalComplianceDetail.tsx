import { 
  Scale, 
  CheckCircle, 
  FileText, 
  ArrowRight,
  Shield,
  AlertTriangle
} from 'lucide-react';

const LegalComplianceDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: FileText,
      title: "Entity Formation",
      description: "Legal structure recommendation, company registration and documentation, and regulatory approvals and licenses for smooth establishment.",
      features: [
        "Legal structure recommendation",
        "Company registration and documentation",
        "Regulatory approvals and licenses",
        "Smooth establishment process"
      ]
    },
    {
      id: 2,
      icon: Shield,
      title: "Compliance Management",
      description: "Labor law compliance, data protection and privacy regulations, industry-specific regulatory requirements, and ongoing compliance monitoring.",
      features: [
        "Labor law compliance",
        "Data protection and privacy regulations",
        "Industry-specific requirements",
        "Ongoing compliance monitoring"
      ]
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Legal risk assessment, contractual framework development, and intellectual property protection strategies for your GCC.",
      features: [
        "Legal risk assessment",
        "Contractual framework development",
        "Intellectual property protection"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Scale className="w-4 h-4 mr-2" />
            SERVICE CATEGORY
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Legal & Compliance <span className="font-semibold text-cta-coral">Support</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Navigate the regulatory landscape with comprehensive compliance assistance.
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
                    <div className="w-14 h-14 bg-cta-coral flex items-center justify-center">
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
                        <CheckCircle className="w-4 h-4 text-logo-teal flex-shrink-0 mt-0.5" />
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
            Ready to Ensure Full <span className="font-semibold text-cta-coral">Regulatory Compliance?</span>
          </h3>
          
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our legal and compliance experts will guide you through India's regulatory landscape 
            to ensure smooth and compliant GCC operations from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <Scale className="w-5 h-5 mr-3" />
              Navigate Compliance Requirements
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-cta-coral text-gray-700 hover:text-cta-coral px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-cta-coral/5">
              <Shield className="w-5 h-5 mr-3" />
              Legal Risk Assessment
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Compliance Framework Section */}
        <div className="mt-16 lg:mt-20 bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              India's <span className="font-semibold text-cta-coral">Regulatory Framework</span>
            </h3>
            <div className="w-16 h-px bg-cta-coral mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Streamlined Registration</h4>
              <p className="text-gray-600 font-light text-sm">Simplified processes for foreign company establishment</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Protection</h4>
              <p className="text-gray-600 font-light text-sm">Robust privacy laws aligned with global standards</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Risk Mitigation</h4>
              <p className="text-gray-600 font-light text-sm">Comprehensive legal safeguards and protections</p>
            </div>
          </div>

          {/* Regulatory Benefits */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Regulatory Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">100% foreign direct investment allowed in many sectors</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Favorable tax policies and incentives</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Strong intellectual property protection</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Compliance Advantages</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Digital-first approach to regulatory processes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Clear guidelines for multinational operations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Ongoing regulatory support and guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalComplianceDetail;