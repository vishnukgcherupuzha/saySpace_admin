
import { 
  Target, 
  Eye,
  Building2,
  Globe,
  Settings
} from 'lucide-react';

const OurPurpose = () => {
  const missionPoints = [
    {
      icon: Building2,
      text: "Designing and delivering scalable Build-Operate-Transfer (BOT) models tailored to client ambition"
    },
    {
      icon: Globe,
      text: "Managing seamless transitions and transformation journeys across locations and cultures"
    },
    {
      icon: Settings,
      text: "Engineering high-performance ecosystems with robust talent, governance, and capability structures"
    }
  ];

  const visionHighlights = [
    "50+ organizations across geographies by 2030",
    "Sustainable growth and operational excellence",
    "Transformational value creation",
    "Redefining global talent hub development"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <Target className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Guiding Principles
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our <span className="text-cta-coral">Purpose</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Mission & Vision
          </p>
          
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            Guiding principles that drive our commitment to GCC excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Mission Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card to-logo-teal/5 border border-border rounded-3xl p-8 lg:p-10">
              
              {/* Mission Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-logo-teal to-logo-teal/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-header font-bold text-2xl lg:text-3xl text-foreground">
                    Our Mission
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-logo-teal to-cta-coral rounded-full mt-2"></div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="space-y-6">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  At <strong className="text-logo-teal">SAY SPACE</strong>, our mission is to architect and operationalize world-class Global Capability Centers that accelerate innovation, scale, and strategic advantage for enterprises across the globe.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-header font-semibold text-lg text-foreground">
                    We achieve this by:
                  </h4>
                  
                  <div className="space-y-4">
                    {missionPoints.map((point, index) => {
                      const IconComponent = point.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-logo-teal/5 to-transparent rounded-xl border border-logo-teal/10">
                          <div className="w-10 h-10 bg-gradient-to-br from-logo-teal to-logo-teal/80 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Mission Tagline */}
                <div className="bg-gradient-to-r from-logo-teal/10 to-cta-coral/10 border border-logo-teal/20 rounded-xl p-6 mt-6">
                  <p className="font-header font-semibold text-lg text-foreground text-center">
                    We don't just set up GCCs — we engineer them for resilience, relevance, and results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card to-cta-coral/5 border border-border rounded-3xl p-8 lg:p-10">
              
              {/* Vision Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cta-coral to-cta-coral/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-header font-bold text-2xl lg:text-3xl text-foreground">
                    Our Vision
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-cta-coral to-logo-teal rounded-full mt-2"></div>
                </div>
              </div>

              {/* Vision Statement */}
              <div className="space-y-6">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  To be the world's most trusted enabler of Global Capability Centers (GCCs), empowering over 50 organizations across geographies by 2030 — engineered for sustainable growth, operational excellence, and transformational value.
                </p>
                
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Our vision extends beyond just setting up centers - we aim to redefine how the world builds global talent hubs.
                </p>

                {/* Vision Highlights */}
                <div className="space-y-3 mt-6">
                  {visionHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cta-coral rounded-full flex-shrink-0"></div>
                      <span className="font-body text-sm text-muted-foreground">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Founder Quote */}
                <div className="bg-gradient-to-r from-cta-coral/10 to-logo-teal/10 border border-cta-coral/20 rounded-xl p-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cta-coral to-cta-coral/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-header font-bold text-white text-sm">SP</span>
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground italic mb-3">
                        "Our vision extends beyond just setting up centers - we aim to redefine how the world builds global talent hubs."
                      </p>
                      <div className="font-header font-medium text-sm text-foreground">
                        Era Chaturvedi​r
                      </div>
                      <div className="font-body text-xs text-muted-foreground">
                        Founder & CEO, Say Space
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;