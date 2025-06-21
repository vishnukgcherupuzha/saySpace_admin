import { 
  Scale, 
  CheckCircle, 
  FileText,
  Shield,
  AlertTriangle
} from 'lucide-react';

const LegalComplianceDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: FileText,
      title: "Business Incorporation",
      description: "Recommendations for legal entity type, end-to-end registration support, and facilitation of regulatory clearances for a seamless launch.",
      features: [
        "Entity structure consultation",
        "End-to-end business registration",
        "Approvals from regulatory bodies",
        "Hassle-free setup process"
      ]
    },
    {
      id: 2,
      icon: Shield,
      title: "Regulatory Oversight",
      description: "Ensuring adherence to labor laws, safeguarding data and privacy, meeting sectoral compliance standards, and ongoing monitoring routines.",
      features: [
        "Adherence to employment regulations",
        "Data security and compliance",
        "Sector-specific legal standards",
        "Continual compliance checks"
      ]
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: "Compliance Risk Strategy",
      description: "Identification of legal vulnerabilities, setting up contractual safeguards, and implementing IP protection frameworks for your operations.",
      features: [
        "Risk identification and evaluation",
        "Drafting contractual protections",
        "Strategies for IP rights enforcement"
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
            Governance & <span className="font-semibold text-cta-coral">Compliance Solutions</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Expert legal assistance to help your GCC meet India’s regulatory requirements effectively.
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

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">
                      Core Focus:
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
      </div>
    </section>
  );
};

export default LegalComplianceDetail;