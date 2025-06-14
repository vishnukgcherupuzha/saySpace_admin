
import { 
  TrendingUp, 
  CheckCircle, 
  Headphones, 
  ArrowRight,
  BarChart3,
  RefreshCw
} from 'lucide-react';

const OngoingManagementDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: Headphones,
      title: "Managed Services",
      description: "Finance and accounting support, HR administration, IT management and support, and facilities management for hassle-free operations.",
      features: [
        "Finance and accounting support",
        "HR administration",
        "IT management and support",
        "Facilities management"
      ],
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Growth & Optimization",
      description: "Capacity planning and scaling, new capability development, process optimization, and cost efficiency initiatives for continuous improvement.",
      features: [
        "Capacity planning and scaling",
        "New capability development",
        "Process optimization",
        "Cost efficiency initiatives"
      ],
      color: "from-cta-coral to-cta-coral/80"
    },
    {
      id: 3,
      icon: RefreshCw,
      title: "Change Management",
      description: "Organizational change strategies, cultural integration programs, and communications planning and execution for smooth transitions.",
      features: [
        "Organizational change strategies",
        "Cultural integration programs",
        "Communications planning and execution"
      ],
      color: "from-logo-beige to-logo-beige/80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Service Category
            </span>
          </div>
          
          <h2 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Ongoing GCC <span className="text-logo-teal">Management</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Ensure long-term success with comprehensive management solutions.
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
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-logo-teal flex-shrink-0" />
                        <span className="font-body text-sm text-muted-foreground">
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
          <div className="bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="font-header font-bold text-xl text-foreground mb-3">
              Ready for comprehensive GCC management?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Our ongoing management experts will ensure your GCC operates efficiently and continues to deliver value through strategic oversight and optimization.
            </p>
            
            <button className="group bg-gradient-to-r from-logo-teal to-logo-teal/90 hover:from-logo-teal/90 hover:to-logo-teal text-white px-8 py-3 rounded-xl font-header font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto">
              <TrendingUp className="w-5 h-5 mr-3" />
              Manage Your GCC Effectively
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingManagementDetail;