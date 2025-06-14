import { 
  Target, 
  Layers, 
  Globe, 
  Award,
  ArrowRight,
  Shield
} from 'lucide-react';

const WhyChooseUsServices = () => {
  const advantages = [
    {
      id: 1,
      icon: Target,
      title: "Specialized GCC Focus",
      description: "Unlike generalist consultancies, we exclusively focus on GCC establishment and optimization, providing unparalleled expertise in this specific domain.",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5",
      stats: { value: "100%", label: "GCC Focused" }
    },
    {
      id: 2,
      icon: Layers,
      title: "End-to-End Capabilities",
      description: "We offer comprehensive services across the entire GCC lifecycle, from strategy and setup to ongoing management and optimization.",
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5",
      stats: { value: "360°", label: "Service Coverage" }
    },
    {
      id: 3,
      icon: Globe,
      title: "Local Expertise, Global Perspective",
      description: "Our team combines deep knowledge of the India ecosystem with extensive international experience, ensuring culturally aligned solutions.",
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5",
      stats: { value: "15+", label: "Countries Served" }
    },
    {
      id: 4,
      icon: Award,
      title: "Proven Track Record",
      description: "With over 50 successful GCC implementations and a 95% client retention rate, our approach has been validated across industries and scales.",
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5",
      stats: { value: "95%", label: "Client Retention" }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <Award className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Competitive Advantage
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Why Choose <span className="text-cta-coral">Us</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
            Our unique approach and specialized expertise make us the ideal partner for your GCC journey in India.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={advantage.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`bg-gradient-to-br ${advantage.bgColor} border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${advantage.color} rounded-full blur-3xl`}></div>
                  </div>
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="text-center">
                        <div className="font-header font-bold text-2xl text-foreground">
                          {advantage.stats.value}
                        </div>
                        <div className="font-body text-xs text-muted-foreground">
                          {advantage.stats.label}
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-bold text-xl lg:text-2xl text-card-foreground mb-4">
                      {advantage.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-cta-coral/5 to-logo-teal/5 border border-cta-coral/20 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-cta-coral mr-3" />
              <span className="font-header font-semibold text-2xl lg:text-3xl text-foreground">
                Ready to experience the difference?
              </span>
            </div>
            
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the growing number of organizations who have chosen our specialized approach for their GCC success. See how our proven methodology can accelerate your journey.
            </p>
            
            <button className="group bg-gradient-to-r from-cta-coral to-cta-coral/90 hover:from-cta-coral/90 hover:to-cta-coral text-white px-10 py-4 rounded-xl font-header font-semibold text-xl transition-all duration-300 hover:shadow-xl hover:shadow-cta-coral/25 transform hover:-translate-y-1 flex items-center mx-auto">
              <Award className="w-6 h-6 mr-3" />
              View Success Stories
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsServices;