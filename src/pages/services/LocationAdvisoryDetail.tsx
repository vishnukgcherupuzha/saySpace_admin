
import { 
  MapPin, 
  CheckCircle, 
  Building2, 
  ArrowRight,
  Search,
  Wifi
} from 'lucide-react';

const LocationAdvisoryDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: Search,
      title: "Site Selection",
      description: "Requirements analysis, comprehensive location screening, site visits, and detailed assessment based on your specific needs and preferences.",
      features: [
        "Requirements analysis",
        "Comprehensive location screening", 
        "Site visits",
        "Detailed assessment"
      ],
      color: "from-cta-coral to-cta-coral/80"
    },
    {
      id: 2,
      icon: Building2,
      title: "Real Estate Solutions",
      description: "Office space negotiation and acquisition, lease agreement assistance, and facility design and space planning tailored to your requirements.",
      features: [
        "Office space negotiation",
        "Lease agreement assistance",
        "Facility design and planning"
      ],
      color: "from-logo-beige to-logo-beige/80"
    },
    {
      id: 3,
      icon: Wifi,
      title: "Infrastructure Setup",
      description: "IT and telecommunications setup, security systems implementation, and facilities management to create an optimal work environment.",
      features: [
        "IT and telecommunications setup",
        "Security systems implementation",
        "Facilities management"
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
            <MapPin className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Service Category
            </span>
          </div>
          
          <h2 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Location <span className="text-cta-coral">Advisory</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Identify the optimal location for your GCC within India's thriving tech corridors.
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
              Ready to find your ideal GCC location?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Our location advisory experts will guide you through India's premier tech corridors.
            </p>
            
            <button className="group bg-gradient-to-r from-cta-coral to-cta-coral/90 hover:from-cta-coral/90 hover:to-cta-coral text-white px-8 py-3 rounded-xl font-header font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto">
              <MapPin className="w-5 h-5 mr-3" />
              Explore India Locations
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvisoryDetail;