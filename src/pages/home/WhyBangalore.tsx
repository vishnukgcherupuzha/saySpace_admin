import { 
  Building2, 
  TrendingUp, 
  GraduationCap, 
  DollarSign,
  MapPin,
  ArrowRight,
  Globe,
} from 'lucide-react';

const WhyBangalore = () => {
  const advantages = [
    {
      icon: Building2,
      number: "200+",
      title: "Global Capability Centers",
      description: "Thriving ecosystem of multinational companies",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5"
    },
    {
      icon: TrendingUp,
      number: "57%",
      title: "growth in office space leasing",
      description: "Expanding infrastructure for business needs",
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5"
    },
    {
      icon: GraduationCap,
      number: "80,000+",
      title: "graduates annually",
      description: "Top-tier educational institutions producing skilled talent",
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5"
    },
    {
      icon: DollarSign,
      number: "30-40%",
      title: "cost advantages",
      description: "Compared to other global tech hubs",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              India's Silicon Valley
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl text-foreground mb-6">
            Why <span className="bg-gradient-to-r from-logo-teal to-cta-coral bg-clip-text text-transparent">Bangalore</span> in India?
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bangalore has emerged as India's premier GCC destination, offering unmatched advantages for global companies:
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`bg-gradient-to-br ${advantage.bgColor} border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${advantage.color} rounded-full blur-2xl`}></div>
                  </div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Number */}
                    <div className="mb-4">
                      <span className="font-header font-bold text-3xl lg:text-4xl text-foreground">
                        {advantage.number}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-semibold text-lg text-card-foreground mb-3 leading-tight">
                      {advantage.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-br ${advantage.color} rounded-full flex items-center justify-center`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Enhancement Section */}
        <div className="bg-gradient-to-br from-card to-logo-teal/5 border border-border rounded-3xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Side */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-logo-teal to-cta-coral rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-header font-bold text-2xl text-foreground">
                    Global Innovation Hub
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Where world-class talent meets cutting-edge technology
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cta-coral rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-body text-muted-foreground">
                    Home to India's largest concentration of tech companies and startups
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-logo-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-body text-muted-foreground">
                    World-class infrastructure with modern office spaces and amenities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-logo-beige rounded-full mt-2 flex-shrink-0"></div>
                  <p className="font-body text-muted-foreground">
                    Strategic location with excellent connectivity to global markets
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="bg-gradient-to-br from-logo-teal/10 to-cta-coral/10 rounded-2xl border-2 border-dashed border-logo-teal/30 aspect-[4/3] flex flex-col items-center justify-center space-y-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325319.40169235034!2d77.46613117853798!3d12.953945617307905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e1!3m2!1sen!2suk!4v1749823203534!5m2!1sen!2suk" width="100%" height="100%" style={{border:0}} loading="lazy" ></iframe>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-cta-coral text-white px-4 py-2 rounded-xl shadow-lg transform rotate-12">
                <div className="font-header font-bold text-sm">#1 Tech Hub</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-logo-teal text-white px-4 py-2 rounded-xl shadow-lg transform -rotate-12">
                <div className="font-header font-bold text-sm">Global Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBangalore;