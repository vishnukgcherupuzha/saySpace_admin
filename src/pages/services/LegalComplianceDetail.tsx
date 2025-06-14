
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
      ],
      color: "from-cta-coral to-cta-coral/80"
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
      ],
      color: "from-logo-beige to-logo-beige/80"
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
      ],
      color: "from-logo-teal to-logo-teal/80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-4">
            <Scale className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Service Category
            </span>
          </div>
          
          <h2 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Legal & Compliance <span className="text-cta-coral">Support</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Navigate the regulatory landscape with comprehensive compliance assistance.
          </p>
        </div>

        {/* Horizontal Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {subServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl`}></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-header font-bold text-2xl text-dividers">
                      0{service.id}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-header font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0" />
                        <span className="font-body text-xs text-muted-foreground">
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

        {/* Compact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cta-coral/5 to-logo-teal/5 border border-cta-coral/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="font-header font-bold text-xl text-foreground mb-3">
              Ready to ensure full regulatory compliance?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Our legal and compliance experts will guide you through India's regulatory landscape to ensure smooth and compliant GCC operations.
            </p>
            
            <button className="group bg-gradient-to-r from-cta-coral to-cta-coral/90 hover:from-cta-coral/90 hover:to-cta-coral text-white px-8 py-3 rounded-xl font-header font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto">
              <Scale className="w-5 h-5 mr-3" />
              Navigate Compliance Requirements
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalComplianceDetail;