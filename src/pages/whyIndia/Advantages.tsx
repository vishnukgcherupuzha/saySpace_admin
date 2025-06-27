import {
  Users,
  DollarSign,
  Cpu,
  Building2,
  Clock,
  Shield,
  CheckCircle,
  Globe,
  Award,
} from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      icon: Users,
      title: "Exceptional Talent Reservoir",
      description: "Tap into a globally renowned pool of technical expertise with specialized competencies across various disciplines.",
      bullets: [
        "5.8 million STEM graduates produced yearly",
        "Over 740,000 engineering graduates annually",
        "High proficiency in cutting-edge technologies",
        "Superior English language proficiency"
      ]
    },
    {
      id: 2,
      icon: DollarSign,
      title: "Significant Cost Efficiencies",
      description: "Achieve substantial financial benefits compared to Western markets, optimizing operational expenditures.",
      bullets: [
        "40-60% cost reductions compared to Western regions",
        "Attractive salary frameworks",
        "Reduced infrastructure and operational expenses",
        "Impressive ROI projections (200-300% over 5 years)"
      ]
    },
    {
      id: 3,
      icon: Cpu,
      title: "Advanced Digital Innovation",
      description: "Demonstrated expertise in spearheading transformative initiatives and innovation for multinational enterprises.",
      bullets: [
        "Robust capabilities in next-generation technologies",
        "Proven methodologies for process optimization",
        "Culture of innovation and strategic problem-solving",
        "Extensive experience in global digital transformation"
      ]
    },
    {
      id: 4,
      icon: Building2,
      title: "Established GCC Infrastructure",
      description: "A mature ecosystem supported by specialized service providers and deep industry knowledge.",
      bullets: [
        "Comprehensive regulatory support for global operations",
        "Thriving knowledge-exchange networks",
        "Access to niche service providers and vendors",
        "Decades of accumulated GCC expertise"
      ]
    },
    {
      id: 5,
      icon: Clock,
      title: "Optimal Time Zone Alignment",
      description: "Strategically positioned for continuous global operations through a 'follow-the-sun' model.",
      bullets: [
        "8-12 hour synchronization with Western time zones",
        "Overnight resolution capabilities for Western hubs",
        "Enhanced global service delivery efficiency",
        "Effortless collaboration across international teams"
      ]
    },
    {
      id: 6,
      icon: Shield,
      title: "Robust Risk Mitigation",
      description: "Effective risk management through geographic diversification and comprehensive continuity strategies.",
      bullets: [
        "Multiple operational locations within India",
        "Advanced disaster recovery systems",
        "Sophisticated business continuity protocols",
        "Balanced global operational presence"
      ]
    }
  ];
  const stats = [
    {
      number: "880+",
      label: "GCCs Operating in Bangalore",
      icon: Building2
    },
    {
      number: "1.9M+",
      label: "Tech Professionals in Bangalore",
      icon: Users
    },
    {
      number: "$22.2B",
      label: "Bangalore GCC Market Size",
      icon: DollarSign
    },
    {
      number: "385+",
      label: "Fortune 500 Companies in Bangalore",
      icon: Award
    }
  ];

  return (
    <div className="bg-white py-20 lg:py-24">

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
              <Globe className="w-4 h-4 mr-2" />
              GLOBAL CAPABILITY CENTERS
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight mb-8 tracking-tight">
              Top Reasons to Build Your <br />
              <span className="font-semibold text-logo-teal">GCC in India</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Uncover the Strategic Reasons Global Leaders Establish GCCs in India
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {advantages.map((advantage) => {
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

                    {/* Bullet Points */}
                    <div className="space-y-3 flex-grow pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-sm text-gray-900 mb-3">
                        Key Benefits:
                      </h4>
                      {advantage.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 font-light">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              India's <span className="font-semibold text-cta-coral">GCC Landscape</span>
            </h2>
            <div className="w-16 h-px bg-cta-coral mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              The numbers that demonstrate India's position as the world's leading GCC destination
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 lg:p-8 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                >
                  <div className="w-12 h-12 bg-cta-coral flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                    {stat.number}
                  </div>

                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Insights */}
          <div className="mt-16 lg:mt-20 bg-white border border-gray-200 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                Strategic <span className="font-semibold text-logo-teal">Business Impact</span>
              </h3>
              <div className="w-16 h-px bg-logo-teal mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-logo-teal" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cost Optimization</h4>
                <p className="text-gray-600 font-light text-sm">Achieve 40-60% cost savings while maintaining quality</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-cta-coral" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Talent Access</h4>
                <p className="text-gray-600 font-light text-sm">Tap into the world's largest technical talent pool</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovation Hub</h4>
                <p className="text-gray-600 font-light text-sm">Drive digital transformation and technology innovation</p>
              </div>
            </div>

            {/* Key Success Factors */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Competitive Advantages</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light">Largest pool of English-speaking technical professionals</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light">Proven track record across all industry sectors</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light">Strong intellectual property protection framework</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Business Outcomes</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light">24/7 global service delivery capabilities</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light">Accelerated innovation and time-to-market</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-light">Enhanced business continuity and risk management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantages;