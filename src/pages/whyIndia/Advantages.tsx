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
      title: "Unparalleled Talent Pool",
      description: "Access to the world's largest technical talent pipeline with specialized skills across domains.",
      bullets: [
        "5.8 million STEM graduates annually",
        "740,000+ engineering graduates each year",
        "Strong proficiency in emerging technologies",
        "Excellent English communication skills"
      ]
    },
    {
      id: 2,
      icon: DollarSign,
      title: "Compelling Cost Advantages",
      description: "Significant cost benefits compared to Western markets, enabling substantial operational savings.",
      bullets: [
        "40-60% cost savings vs Western locations",
        "Competitive compensation structures",
        "Lower infrastructure and operational costs",
        "Excellent ROI metrics (200-300% over 5 years)"
      ]
    },
    {
      id: 3,
      icon: Cpu,
      title: "Digital Transformation Expertise",
      description: "Proven experience in driving innovation and transformation initiatives for global organizations.",
      bullets: [
        "Strong capabilities in emerging technologies",
        "Established process excellence methodologies",
        "Innovation culture and creative problem-solving",
        "Experience with global digital initiatives"
      ]
    },
    {
      id: 4,
      icon: Building2,
      title: "Mature GCC Ecosystem",
      description: "Well-developed support infrastructure with specialized service providers and industry expertise.",
      bullets: [
        "Robust regulatory framework for global operations",
        "Established knowledge-sharing communities",
        "Specialized service providers and vendors",
        "Decades of institutional GCC knowledge"
      ]
    },
    {
      id: 5,
      icon: Clock,
      title: "Strategic Time Zone Advantage",
      description: "Ideal positioning for \"follow-the-sun\" operational models enabling 24/7 business continuity.",
      bullets: [
        "8-12 hour overlap with Western time zones",
        "Address issues overnight for Western headquarters",
        "Enhanced global service delivery capabilities",
        "Seamless collaboration across global teams"
      ]
    },
    {
      id: 6,
      icon: Shield,
      title: "Enhanced Risk Diversification",
      description: "Strategic risk management through geographic diversification and business continuity planning.",
      bullets: [
        "Multiple location options within India",
        "Strong disaster recovery capabilities",
        "Sophisticated business continuity frameworks",
        "Balanced global operational footprint"
      ]
    }
  ];

  const stats = [
    {
      number: "1,500+",
      label: "GCCs Operating in India",
      icon: Building2
    },
    {
      number: "1.3M+",
      label: "Professionals Employed",
      icon: Users
    },
    {
      number: "$33B+",
      label: "Annual GCC Revenue",
      icon: DollarSign
    },
    {
      number: "200+",
      label: "Fortune 500 Companies",
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
              Key Advantages of <br />
              <span className="font-semibold text-logo-teal">India for GCCs</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover why leading global organizations choose India for their capability centers
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