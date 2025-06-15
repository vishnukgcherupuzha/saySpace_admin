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
      focus: "Ethical Excellence"
    },
    {
      id: 2,
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering exceptional results that exceed expectations, setting high standards of quality and performance in everything we do.",
      focus: "Quality Commitment"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creative thinking and innovative approaches to solve complex challenges, continuously evolving our services to stay ahead of industry trends.",
      focus: "Creative Solutions"
    },
    {
      id: 4,
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals and create lasting value.",
      focus: "Partnership Focus"
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Mindset",
      description: "We embrace diversity and global perspectives, leveraging cross-cultural expertise to build bridges between organizations and markets worldwide.",
      focus: "Cultural Intelligence"
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Impact-Driven",
      description: "We measure our success by the tangible business outcomes we create for our clients, focusing on delivering real, measurable value in everything we do.",
      focus: "Results Oriented"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Heart className="w-4 h-4 mr-2" />
            CORE VALUES
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our Guiding <span className="font-semibold text-logo-teal">Principles</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            The fundamental values that define our approach to business, relationships, and delivering exceptional outcomes for our clients
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={principle.id}
                className="group bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Number indicator */}
                <div className="absolute top-6 right-6 text-6xl font-light text-gray-100 group-hover:text-logo-teal/20 transition-colors duration-300">
                  {principle.id.toString().padStart(2, '0')}
                </div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-logo-teal text-white flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  
                  {/* Focus Area */}
                  <div className="text-sm text-gray-500 font-medium tracking-wide mb-3">
                    {principle.focus}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {principle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed font-light">
                    {principle.description}
                  </p>
                  
                  {/* Professional hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-px bg-logo-teal"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values in Action */}
        <div className="mt-16 lg:mt-20 bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Values in <span className="font-semibold text-logo-teal">Action</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              These principles are not just words on a page — they are the foundation of every decision we make, 
              every relationship we build, and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-logo-teal/10 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-logo-teal" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Client Trust</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Building lasting partnerships through ethical practices and transparent communication
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cta-coral/10 mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-cta-coral" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Quality Delivery</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Exceeding expectations through meticulous attention to detail and continuous improvement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Measurable Impact</h4>
              <p className="text-gray-600 font-light leading-relaxed">
                Creating tangible business value through strategic thinking and execution excellence
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Quote */}
        <div className="mt-12 bg-logo-teal text-white p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-6">
                "Our principles are the compass that guides us through every challenge and opportunity. 
                They ensure that as we grow, we never lose sight of what makes us who we are."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">EC</span>
                </div>
                <div>
                  <div className="font-semibold">Era Chaturvedi</div>
                  <div className="text-sm opacity-80">Founder & CEO, Say Space</div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="text-4xl lg:text-5xl font-light mb-2">6</div>
              <div className="text-sm opacity-80 font-medium">Core Principles</div>
              <div className="text-xs opacity-60 mt-1">Guiding Every Decision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrinciples;