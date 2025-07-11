import { 
  Target, 
  Eye,
  Building2,
  Globe,
  Settings,
  CheckCircle
} from 'lucide-react';

const OurPurpose = () => {
  const missionPoints = [
    {
      icon: Building2,
      text: "Developing custom-fit Build-Operate-Transfer (BOT) models that align with each client’s vision and growth goals"
    },
    {
      icon: Globe,
      text: "Enabling smooth transitions across regions, ensuring cultural integration and operational alignment"
    },
    {
      icon: Settings,
      text: "Building resilient ecosystems driven by skilled talent, strong governance, and scalable capabilities"
    }
  ];

  const visionHighlights = [
    "Support 50+ enterprises across borders by 2030",
    "Enable long-term growth with streamlined operations",
    "Deliver transformative outcomes for global businesses",
    "Elevate standards for building global talent hubs"
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Target className="w-4 h-4 mr-2" />
            GUIDING PRINCIPLES
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our <span className="font-semibold text-cta-coral">Purpose</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            The mission and vision that shape our approach to enabling GCC success and delivering lasting value for our partners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Mission Section */}
          <div>
            <div className="bg-white border border-gray-200 p-8 lg:p-10">
              
              {/* Mission Header */}
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                <div className="w-14 h-14 bg-logo-teal flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-2">
                    Our <span className="font-semibold">Mission</span>
                  </h3>
                  <div className="w-12 h-px bg-logo-teal"></div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  At <span className="font-semibold text-logo-teal">SaySpace</span>, our mission is to design and implement 
                  world-class GCCs that drive innovation, operational agility, and long-term strategic advantage for global companies.
                </p>
                
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900">
                    We do this by:
                  </h4>
                  
                  <div className="space-y-4">
                    {missionPoints.map((point, index) => {
                      const IconComponent = point.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 border border-gray-200">
                          <div className="w-10 h-10 bg-logo-teal flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-gray-600 leading-relaxed font-light">
                            {point.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mission Tagline */}
                <div className="bg-logo-teal/5 border border-logo-teal/15 p-6">
                  <p className="text-lg font-semibold text-gray-900 text-center">
                    We don’t just launch GCCs — we build them for impact, agility, and measurable success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div>
            <div className="bg-white border border-gray-200 p-8 lg:p-10">
              
              {/* Vision Header */}
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                <div className="w-14 h-14 bg-cta-coral flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-2">
                    Our <span className="font-semibold">Vision</span>
                  </h3>
                  <div className="w-12 h-px bg-cta-coral"></div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  To become the most trusted GCC growth partner worldwide, enabling 50+ organizations by 2030 
                  through operational precision, innovation, and sustainable business models.
                </p>
                
                <p className="text-gray-600 leading-relaxed font-light">
                  Our ambition is to go beyond setup — we aim to revolutionize the way businesses approach talent hubs 
                  for global expansion in a digital-first world.
                </p>

                {/* Vision Highlights */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Our Strategic Goals</h4>
                  <div className="space-y-3">
                    {visionHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-light leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leadership Quote */}
                <div className="bg-cta-coral/5 border border-cta-coral/15 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cta-coral flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">EC</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-light italic mb-3 leading-relaxed">
                        "Our vision is to reshape the global perception of GCCs — evolving them from operational arms 
                        into strategic engines of innovation and excellence."
                      </p>
                      <div className="text-sm font-semibold text-gray-900">
                        Era Chaturvedi
                      </div>
                      <div className="text-xs text-gray-600">
                        Founder & CEO, SaySpace
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 lg:mt-20 bg-logo-teal text-white p-8 lg:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light mb-6">
              Enabling Global Scale
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              Through strategic vision, execution excellence, and enduring partnerships, we help shape 
              the future of global capability delivery — one center at a time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">50+</div>
                <div className="text-sm text-gray-400 font-medium">Organizations by 2030</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">3+</div>
                <div className="text-sm text-gray-400 font-medium">Years of Proven Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">100%</div>
                <div className="text-sm text-gray-400 font-medium">Client Delivery Success</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurPurpose;