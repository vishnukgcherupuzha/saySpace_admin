
import { 
  Target, 
  MapPin, 
  Users, 
  Scale, 
  Settings, 
  TrendingUp
} from 'lucide-react';

const ServiceCategories = () => {
  const serviceCategories = [
    {
      id: 1,
      icon: Target,
      title: "Strategic Consulting",
      description: "Develop a comprehensive GCC strategy aligned with your business objectives",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5"
    },
    {
      id: 2,
      icon: MapPin,
      title: "Location Advisory",
      description: "Identify the optimal Pune location and infrastructure for your GCC",
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5"
    },
    {
      id: 3,
      icon: Users,
      title: "Talent Acquisition",
      description: "Build high-performing teams with specialized skills for your GCC",
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5"
    },
    {
      id: 4,
      icon: Scale,
      title: "Legal & Compliance",
      description: "Navigate regulatory requirements for establishing and operating your GCC",
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5"
    },
    {
      id: 5,
      icon: Settings,
      title: "Operational Excellence",
      description: "Establish efficient processes and systems for optimal GCC performance",
      color: "from-cta-coral to-logo-beige",
      bgColor: "from-cta-coral/5 to-logo-beige/5"
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Ongoing Management",
      description: "Ensure long-term success with comprehensive management solutions",
      color: "from-logo-beige to-logo-teal",
      bgColor: "from-logo-beige/5 to-logo-teal/5"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our Service <span className="text-cta-coral">Categories</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we support every aspect of your GCC journey
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`bg-gradient-to-br ${service.bgColor} border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-full blur-2xl`}></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-bold text-xl text-card-foreground mb-4">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>
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

export default ServiceCategories;