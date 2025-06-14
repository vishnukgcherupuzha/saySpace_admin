
import { 
  Network, 
  Building2, 
  Scale, 
  GraduationCap, 
  Cpu,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const OurNetwork = () => {
  const networkCategories = [
    {
      id: 1,
      icon: Building2,
      title: "Real Estate Partners",
      description: "Premium office spaces and infrastructure solutions in India's top IT hubs",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5",
      partners: [
        "Premium IT Parks & SEZ Zones",
        "Grade A Office Spaces",
        "Ready-to-move Infrastructure",
        "Flexible Leasing Options"
      ],
      stats: { number: "25+", label: "Real Estate Partners" }
    },
    {
      id: 2,
      icon: Scale,
      title: "Legal Advisors",
      description: "Expert legal guidance for GCC establishment, compliance, and operations",
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5",
      partners: [
        "Corporate Law Specialists",
        "Regulatory Compliance Experts",
        "Labor Law Advisors",
        "IP & Contract Management"
      ],
      stats: { number: "15+", label: "Legal Firms" }
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Partnerships with leading universities and training institutes for talent sourcing",
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5",
      partners: [
        "Top Engineering Colleges",
        "Management Institutes",
        "Skill Development Centers",
        "Certification Programs"
      ],
      stats: { number: "30+", label: "Educational Partners" }
    },
    {
      id: 4,
      icon: Cpu,
      title: "Technology Providers",
      description: "Access to cutting-edge technology solutions and service providers",
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5",
      partners: [
        "Cloud Infrastructure Providers",
        "Enterprise Software Solutions",
        "Cybersecurity Specialists",
        "Digital Transformation Tools"
      ],
      stats: { number: "40+", label: "Tech Partners" }
    }
  ];


  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <Network className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Strategic Partnerships
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl text-foreground mb-6">
            Our <span className="text-cta-coral">Network</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Industry Connections
          </p>
          
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto">
            Building a robust ecosystem to support your GCC journey
          </p>
        </div>

        {/* Network Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {networkCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`bg-gradient-to-br ${category.bgColor} border border-border rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${category.color} rounded-full blur-3xl`}></div>
                  </div>
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-header font-bold text-xl lg:text-2xl text-card-foreground mb-2">
                            {category.title}
                          </h3>
                          <div className={`w-12 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                        </div>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="text-center">
                        <div className="font-header font-bold text-2xl text-foreground">
                          {category.stats.number}
                        </div>
                        <div className="font-body text-xs text-muted-foreground">
                          {category.stats.label}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                    
                    {/* Partner Types */}
                    <div className="space-y-3">
                      {category.partners.map((partner, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">
                            {partner}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* View Partners Button */}
                    <button className="group/btn mt-6 flex items-center text-sm font-medium text-logo-teal hover:text-logo-teal/80 transition-colors duration-200">
                      View Partners
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
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

export default OurNetwork;