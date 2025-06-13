import React from 'react';
import { 
  Users, 
  Linkedin, 
  Mail, 
  Award,
  Building2,
  Globe,
  TrendingUp
} from 'lucide-react';

const LeadershipTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sangram Pawar",
      role: "Founder & CEO",
      expertise: "GCC Strategy & Operations",
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Consulting",
      expertise: "Business Transformation",
      color: "from-cta-coral to-cta-coral/80"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "VP of Technology",
      expertise: "IT Infrastructure & Digital Solutions",
      color: "from-logo-beige to-logo-beige/80"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Director of Talent Acquisition",
      expertise: "Leadership Hiring & Team Building",
      color: "from-logo-teal to-cta-coral"
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Head of Operations",
      expertise: "Process Optimization & Compliance",
      color: "from-cta-coral to-logo-beige"
    },
    {
      id: 6,
      name: "Anita Desai",
      role: "VP of Client Relations",
      expertise: "Stakeholder Management & Growth",
      color: "from-logo-beige to-logo-teal"
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cta-coral/20 backdrop-blur-sm border border-cta-coral/40 rounded-full mb-6">
            <Users className="w-4 h-4 text-cta-coral mr-2" />
            <span className="font-body text-sm font-medium text-cta-coral">
              Leadership Team
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our <span className="text-cta-coral">Experts</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Leadership Team
          </p>
          
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto">
            Meet the experienced professionals driving our GCC consultancy
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className={`bg-gradient-to-br ${member.color} aspect-[4/3] flex items-center justify-center relative overflow-hidden`}>
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-header font-bold text-white text-2xl">
                    {getInitials(member.name)}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-3">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Linkedin className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                        <Mail className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-header font-bold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-cta-coral font-medium">
                    {member.role}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-logo-teal flex-shrink-0" />
                  <p className="font-body text-sm text-muted-foreground">
                    {member.expertise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-card to-logo-teal/5 border border-border rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-logo-teal to-logo-teal/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-header font-bold text-2xl text-foreground mb-2">50+</h3>
            <p className="font-body text-muted-foreground">Years Combined Experience</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-card to-cta-coral/5 border border-border rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-cta-coral to-cta-coral/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-header font-bold text-2xl text-foreground mb-2">100+</h3>
            <p className="font-body text-muted-foreground">GCCs Established</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-card to-logo-beige/5 border border-border rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-logo-beige to-logo-beige/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-header font-bold text-2xl text-foreground mb-2">15+</h3>
            <p className="font-body text-muted-foreground">Countries Served</p>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gradient-to-br from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-header font-bold text-2xl lg:text-3xl text-foreground mb-4">
              Leadership Philosophy
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership team believes in collaborative excellence, bringing together diverse expertise to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Collaborative Leadership",
                description: "Working together to leverage collective expertise and drive innovation."
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "Committed to personal and professional development for sustained excellence."
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "Bringing international insights to local execution for comprehensive solutions."
              }
            ].map((philosophy, index) => {
              const IconComponent = philosophy.icon;
              return (
                <div key={index} className="text-center p-6 bg-white/50 rounded-xl border border-dividers">
                  <div className="w-12 h-12 bg-gradient-to-br from-logo-teal to-cta-coral rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-header font-semibold text-lg text-foreground mb-3">
                    {philosophy.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {philosophy.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-header font-bold text-2xl text-foreground mb-4">
              Want to join our expert team?
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-8">
              We're always looking for talented professionals who share our passion for GCC excellence.
            </p>
            <button className="group bg-gradient-to-r from-cta-coral to-cta-coral/90 hover:from-cta-coral/90 hover:to-cta-coral text-white px-8 py-4 rounded-xl font-header font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto">
              <Users className="w-5 h-5 mr-3" />
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;