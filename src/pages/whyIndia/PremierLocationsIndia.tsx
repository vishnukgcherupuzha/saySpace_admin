import { 
  MapPin, 
  Users, 
  DollarSign, 
  Building2, 
  Heart,
  CheckCircle,
  ArrowRight
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            PREMIER LOCATIONS
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            India's Strategic <span className="font-semibold text-logo-teal">GCC Hubs</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Among India's many technology hubs, several locations stand out as preferred choices for forward-thinking organizations
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-50 border border-gray-200 p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">
              Why Choose Strategic Locations in India's GCC Landscape?
            </h3>
            <p className="text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
              India's strategic GCC locations have emerged as premier destinations, offering distinct advantages over traditional metropolitan centers for establishing Global Capability Centers. These locations provide optimal balance of talent, cost, infrastructure, and quality of life.
            </p>
          </div>
        </div>

        {/* Location Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {locationAdvantages.map((advantage) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={advantage.id}
                className="group bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-logo-teal flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-3 flex-grow pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">
                      Key Benefits:
                    </h4>
                    {advantage.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 font-light">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location Insights Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Strategic <span className="font-semibold text-cta-coral">Location Benefits</span>
            </h3>
            <div className="w-16 h-px bg-cta-coral mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              India's premier GCC locations offer compelling advantages that drive business success 
              and operational excellence for global organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Talent Excellence</h4>
              <p className="text-gray-600 font-light text-sm">Access to India's best technical talent with strong retention</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost Efficiency</h4>
              <p className="text-gray-600 font-light text-sm">Optimal cost structures with excellent value proposition</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">World-Class Infrastructure</h4>
              <p className="text-gray-600 font-light text-sm">Modern facilities with enterprise-grade capabilities</p>
            </div>
          </div>

          {/* Location Comparison */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Tier-1 vs Strategic Locations</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">15-30% lower operational costs in strategic locations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Reduced attrition rates and improved talent retention</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Better quality of life and work-life balance</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Infrastructure Advantages</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Grade A IT parks with international standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Redundant connectivity and power infrastructure</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Advanced transportation and connectivity options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gray-50 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Ready to Explore India's <span className="font-semibold text-logo-teal">Premier GCC Locations?</span>
          </h3>
          
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our location advisory experts will help you identify the optimal location that aligns with 
            your business objectives, talent requirements, and operational goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <MapPin className="w-5 h-5 mr-3" />
              Explore Location Options
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <Building2 className="w-5 h-5 mr-3" />
              Schedule Site Visit
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremierLocationsIndia;