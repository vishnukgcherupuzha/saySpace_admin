;
import { 
  MapPin, 
  Users, 
  DollarSign, 
  Building2, 
  Heart,
  CheckCircle,
} from 'lucide-react';

const PremierLocationsIndia = () => {
  const locationAdvantages = [
    {
      id: 1,
      icon: Users,
      title: "Superior Talent Quality and Stability",
      description: "Access to millions of professionals with competitive attrition rates, supported by thousands of annual graduates from premier educational institutions across India's technology hubs.",
      highlights: [
        "4+ million tech professionals across major hubs",
        "Lower attrition rates in tier-2 cities",
        "80,000+ annual graduates from premier institutions",
        "Diverse skill sets across domains and technologies"
      ],
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5"
    },
    {
      id: 2,
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Significant cost advantages across India's strategic locations with competitive operational costs, office rentals, and compensation structures offering excellent retention metrics.",
      highlights: [
        "15-30% lower operational costs vs tier-1 cities",
        "20-35% lower office rentals in strategic locations",
        "Competitive compensation structures",
        "Excellent cost-to-talent ratio"
      ],
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5"
    },
    {
      id: 3,
      icon: Building2,
      title: "Exceptional Infrastructure",
      description: "Multiple specialized IT parks and SEZs with Grade A facilities, reliable utilities with redundant power and connectivity, and advanced telecommunications infrastructure.",
      highlights: [
        "Grade A IT parks and SEZ facilities",
        "Redundant power and connectivity infrastructure",
        "Advanced telecommunications networks",
        "Modern office spaces with global standards"
      ],
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5"
    },
    {
      id: 4,
      icon: Heart,
      title: "Superior Quality of Life",
      description: "Pleasant climate across various Indian locations, lower pollution and congestion in tier-2 cities, rich cultural heritage with cosmopolitan lifestyle, and excellent expatriate facilities.",
      highlights: [
        "Pleasant climate in strategic locations",
        "Lower pollution in emerging tech hubs",
        "Rich cultural heritage and lifestyle",
        "Excellent international facilities"
      ],
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5"
    }
  ];



  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Premier Locations
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            India's Strategic <span className="text-logo-teal">GCC Hubs</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
            Among India's many technology hubs, several locations stand out as preferred choices for forward-thinking organizations
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-card to-accent/10 border border-border rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-logo-teal/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative text-center">
            <h3 className="font-header font-bold text-2xl lg:text-3xl text-foreground mb-6">
              Why Choose Strategic Locations in India's GCC Landscape?
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              India's strategic GCC locations have emerged as premier destinations, offering distinct advantages over traditional metropolitan centers for establishing Global Capability Centers. These locations provide optimal balance of talent, cost, infrastructure, and quality of life.
            </p>
          </div>
        </div>

        {/* Location Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locationAdvantages.map((advantage) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={advantage.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`bg-gradient-to-br ${advantage.bgColor} border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${advantage.color} rounded-full blur-3xl`}></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-bold text-xl text-card-foreground mb-4">
                      {advantage.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {advantage.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-3 flex-grow">
                      {advantage.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-muted-foreground">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
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

export default PremierLocationsIndia;