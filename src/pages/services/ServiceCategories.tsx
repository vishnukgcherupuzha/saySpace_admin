import { 
  Target, 
  MapPin, 
  Users, 
  Scale, 
  Settings, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ServiceCategories = () => {
  const serviceCategories = [
    {
      id: 1,
      icon: Target,
      title: "Strategic Consulting",
      description: "Develop a comprehensive GCC strategy aligned with your business objectives",
      accent: "logo-teal"
    },
    {
      id: 2,
      icon: MapPin,
      title: "Location Advisory",
      description: "Identify the optimal India location and infrastructure for your GCC",
      accent: "cta-coral"
    },
    {
      id: 3,
      icon: Users,
      title: "Talent Acquisition",
      description: "Build high-performing teams with specialized skills for your GCC",
      accent: "logo-teal"
    },
    {
      id: 4,
      icon: Scale,
      title: "Legal & Compliance",
      description: "Navigate regulatory requirements for establishing and operating your GCC",
      accent: "cta-coral"
    },
    {
      id: 5,
      icon: Settings,
      title: "Operational Excellence",
      description: "Establish efficient processes and systems for optimal GCC performance",
      accent: "logo-teal"
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Ongoing Management",
      description: "Ensure long-term success with comprehensive management solutions",
      accent: "cta-coral"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Settings className="w-4 h-4 mr-2" />
            OUR CAPABILITIES
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our Service <span className="font-semibold text-cta-coral">Categories</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            From strategy to execution, we support every aspect of your GCC journey
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-${service.accent} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button className={`group/btn inline-flex items-center text-${service.accent} font-semibold text-sm hover:text-${service.accent}/80 transition-colors duration-200`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 bg-white border border-gray-200 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Ready to Build Your <span className="font-semibold text-logo-teal">Global Capability Center?</span>
          </h3>
          
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our comprehensive approach ensures your GCC delivers strategic value from day one. 
            Let's discuss how we can accelerate your global expansion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <Target className="w-5 h-5 mr-3" />
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <Users className="w-5 h-5 mr-3" />
              Schedule Consultation
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;