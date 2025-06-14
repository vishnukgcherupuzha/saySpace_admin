
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
      ],
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5"
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
      ],
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5"
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
      ],
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5"
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
      ],
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5"
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
      ],
      color: "from-cta-coral to-logo-beige",
      bgColor: "from-cta-coral/5 to-logo-beige/5"
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
      ],
      color: "from-logo-beige to-logo-teal",
      bgColor: "from-logo-beige/5 to-logo-teal/5"
    }
  ];

  const stats = [
    {
      number: "1,500+",
      label: "GCCs Operating in India",
      icon: Building2,
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      number: "1.3M+",
      label: "Professionals Employed",
      icon: Users,
      color: "from-cta-coral to-cta-coral/80"
    },
    {
      number: "$33B+",
      label: "Annual GCC Revenue",
      icon: DollarSign,
      color: "from-logo-beige to-logo-beige/80"
    },
    {
      number: "200+",
      label: "Fortune 500 Companies",
      icon: Award,
      color: "from-logo-teal to-cta-coral"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 py-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-logo-teal/20 to-logo-teal/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cta-coral/15 to-logo-beige/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-8">
            <Globe className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Global Capability Centers
            </span>
          </div>
          
          <h1 className="font-header font-bold text-4xl text-foreground leading-tight mb-8">
            Key Advantages of <br />
            <span className="bg-gradient-to-r from-logo-teal to-cta-coral bg-clip-text text-transparent">
              India for GCCs
            </span>
          </h1>
          
          <p className="font-body text-xl  text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover why leading global organizations choose India for their capability centers
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon;
              return (
                <div 
                  key={advantage.id}
                  className="group relative"
                >
                  {/* Main Card */}
                  <div className={`bg-gradient-to-br ${advantage.bgColor} border border-border rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full`}>
                    
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
                      
                      {/* Bullet Points */}
                      <div className="space-y-3 flex-grow">
                        {advantage.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                            <span className="font-body text-sm text-muted-foreground">
                              {bullet}
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

      {/* Statistics Section */}
      <section className="bg-gradient-to-br from-card to-dividers/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="font-header font-black text-4xl text-foreground mb-4">
                    {stat.number}
                  </div>
                  
                  <div className="font-body text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantages;