import React from 'react';
import { 
  Shield, 
  Award, 
  Lightbulb, 
  Users, 
  Globe,
  TrendingUp,
  Heart,
} from 'lucide-react';

const OurPrinciples = () => {
  const principles = [
    {
      id: 1,
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our interactions, maintaining transparency and honesty with our clients, partners, and team members.",
      color: "from-logo-teal to-logo-teal/80",
      bgColor: "from-logo-teal/10 to-logo-teal/5"
    },
    {
      id: 2,
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering exceptional results that exceed expectations, setting high standards of quality and performance in everything we do.",
      color: "from-cta-coral to-cta-coral/80",
      bgColor: "from-cta-coral/10 to-cta-coral/5"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative thinking and innovative approaches to solve complex challenges, continuously evolving our services to stay ahead of industry trends.",
      color: "from-logo-beige to-logo-beige/80",
      bgColor: "from-logo-beige/10 to-logo-beige/5"
    },
    {
      id: 4,
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals and create lasting value.",
      color: "from-logo-teal to-cta-coral",
      bgColor: "from-logo-teal/5 to-cta-coral/5"
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Mindset",
      description: "We embrace diversity and global perspectives, leveraging cross-cultural expertise to build bridges between organizations and markets worldwide.",
      color: "from-cta-coral to-logo-beige",
      bgColor: "from-cta-coral/5 to-logo-beige/5"
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Impact-Driven",
      description: "We measure our success by the tangible business outcomes we create for our clients, focusing on delivering real, measurable value in everything we do.",
      color: "from-logo-beige to-logo-teal",
      bgColor: "from-logo-beige/5 to-logo-teal/5"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-beige/20 backdrop-blur-sm border border-logo-beige/40 rounded-full mb-6">
            <Heart className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Core Values
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our <span className="text-logo-teal">Principles</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Core Values
          </p>
          
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            The fundamental principles that guide everything we do
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={principle.id}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`bg-gradient-to-br ${principle.bgColor} border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${principle.color} rounded-full blur-2xl`}></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-header font-bold text-xl text-card-foreground mb-4">
                      {principle.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-body text-muted-foreground leading-relaxed flex-grow">
                      {principle.description}
                    </p>
                    
                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-8 h-8 bg-gradient-to-br ${principle.color} rounded-full flex items-center justify-center text-white font-header font-bold text-sm`}>
                        {principle.id}
                      </div>
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

export default OurPrinciples;