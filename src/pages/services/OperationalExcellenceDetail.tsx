
import { 
  Settings, 
  CheckCircle, 
  Cog, 
  ArrowRight,
  Monitor,
  TrendingUp
} from 'lucide-react';

const OperationalExcellenceDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: Cog,
      title: "Process Design",
      description: "Process mapping and optimization, standard operating procedures development, and quality management frameworks implementation.",
      features: [
        "Process mapping and optimization",
        "Standard operating procedures development",
        "Quality management frameworks",
        "Implementation strategies"
      ],
      color: "from-logo-beige to-logo-beige/80"
    },
    {
      id: 2,
      icon: Monitor,
      title: "Technology Implementation",
      description: "IT systems selection and implementation, digital transformation initiatives, and automation opportunities identification and implementation.",
      features: [
        "IT systems selection and implementation",
        "Digital transformation initiatives",
        "Automation opportunities identification"
      ],
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Performance Management",
      description: "KPI development and tracking, productivity enhancement initiatives, and continuous improvement programs for sustainable growth.",
      features: [
        "KPI development and tracking",
        "Productivity enhancement initiatives",
        "Continuous improvement programs",
        "Sustainable growth strategies"
      ],
      color: "from-cta-coral to-cta-coral/80"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-logo-beige/20 backdrop-blur-sm border border-logo-beige/40 rounded-full mb-4">
            <Settings className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Service Category
            </span>
          </div>
          
          <h2 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Operational <span className="text-logo-beige">Excellence</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Establish efficient processes and systems for optimal GCC performance.
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
                        <CheckCircle className="w-4 h-4 text-logo-beige flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-logo-beige/5 to-logo-teal/5 border border-logo-beige/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="font-header font-bold text-xl text-foreground mb-3">
              Ready to optimize your GCC operations?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Our operational excellence experts will help you establish efficient processes and systems for sustainable high performance.
            </p>
            
            <button className="group bg-gradient-to-r from-logo-beige to-logo-beige/90 hover:from-logo-beige/90 hover:to-logo-beige text-white px-8 py-3 rounded-xl font-header font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto">
              <Settings className="w-5 h-5 mr-3" />
              Optimize Your GCC Operations
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalExcellenceDetail;