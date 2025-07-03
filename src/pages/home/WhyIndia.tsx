import {
  Building2,
  TrendingUp,
  GraduationCap,
  DollarSign,
  MapPin,
  // ArrowRight,
  Globe,
  CheckCircle,
  Users,
  Award
} from 'lucide-react';

const WhyIndia = () => {
  const advantages = [
    {
      icon: Building2,
      number: "880+",
      title: "Established GCC Presence",
      description: "A dynamic hub hosting a large concentration of multinational GCCs.",
      metric: "Active GCCs"
    },
    {
      icon: TrendingUp,
      number: "60%",
      title: "Commercial Expansion Rate",
      description: "Significant year-on-year growth in commercial real estate for tech and business operations.",
      metric: "YoY Growth"
    },
    {
      icon: GraduationCap,
      number: "120,000+",
      title: "Annual Talent Output",
      description: "A steady pipeline of talent from premier educational institutions across the region.",
      metric: "Skilled Professionals"
    },
    {
      icon: DollarSign,
      number: "30–40%",
      title: "Operational Cost Efficiency",
      description: "Substantial cost savings compared to global technology hubs, without compromising quality.",
      metric: "Cost Savings"
    }
  ];

  const keyAdvantages = [
    {
      icon: Users,
      title: "Talent Density",
      description: "India's largest concentration of technology professionals and engineering talent"
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Strategic time zone advantages and excellent international connectivity"
    },
    {
      icon: Award,
      title: "Government Support",
      description: "Progressive policies and dedicated support for international businesses"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            INDIA'S SILICON VALLEY
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Why <span className="font-semibold text-logo-teal">India</span> for Your GCC
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            India has established itself as the world's leading destination for GCCs, providing exceptional strategic benefits to global enterprises across multiple thriving cities. India’s leading destination for GCCs, providing exceptional strategic benefits to global enterprises.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 relative"
              >
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-logo-teal text-white flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-3xl lg:text-4xl font-light text-gray-900">
                      {advantage.number}
                    </span>
                    <div className="text-xs text-gray-500 font-medium tracking-wide mt-1">
                      {advantage.metric}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {advantage.description}
                  </p>
                </div>

                {/* Professional hover indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-px bg-logo-teal"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Advantages Section */}
        <div className="bg-gray-50 p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  Strategic <span className="font-semibold text-logo-teal">Advantages</span>
                </h3>
                <div className="w-16 h-px bg-logo-teal mb-6"></div>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  India offers a unique combination of talent, infrastructure, and business environment
                  across multiple strategic cities that makes it the ideal location for your Global Capability Center.
                </p>
              </div>

              <div className="space-y-6">
                {keyAdvantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-logo-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {advantage.title}
                        </h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Side */}
            <div className="relative">
              <div className="bg-white border border-gray-200 p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325319.40169235034!2d77.46613117853798!3d12.953945617307905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e1!3m2!1sen!2suk!4v1749823203534!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="India Business Hubs Map">
                </iframe>
              </div>

              {/* Professional info cards */}
              <div className="absolute -top-4 -right-4 bg-cta-coral text-white px-4 py-2 text-sm font-semibold">
                #1 Tech Hub
              </div>

              <div className="absolute -bottom-4 -left-4 bg-logo-teal text-white px-4 py-2 text-sm font-semibold">
                Global Ready
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="text-center p-6 lg:p-8">
            <div className="w-16 h-16 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-logo-teal" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Infrastructure</h4>
            <p className="text-gray-600 font-light leading-relaxed">
              World-class office spaces, technology parks, and modern amenities designed for global operations
            </p>
          </div>

          <div className="text-center p-6 lg:p-8">
            <div className="w-16 h-16 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-cta-coral" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Ecosystem</h4>
            <p className="text-gray-600 font-light leading-relaxed">
              Established network of suppliers, partners, and service providers supporting GCC operations
            </p>
          </div>

          <div className="text-center p-6 lg:p-8">
            <div className="w-16 h-16 bg-gray-100 mx-auto mb-4 flex items-center justify-center">
              <Globe className="w-8 h-8 text-gray-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Connectivity</h4>
            <p className="text-gray-600 font-light leading-relaxed">
              Excellent international connectivity with direct flights to major global business centers
            </p>
          </div>
        </div>

        {/* Professional CTA */}
        {/* <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="cursor-pointer group bg-logo-teal hover:bg-logo-teal/90 text-white px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center">
              Explore Bengaluru Locations
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
            <button className="cursor-pointer border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold transition-all duration-200 hover:bg-logo-teal/5">
              Download Location Guide
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyIndia;