import {
  Users,
  Linkedin,
  Mail,
  Award,
  Building2,
  Globe,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import { imageConstants } from '../../../public/images';
import { useNavigate } from 'react-router-dom';

const LeadershipTeam = () => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      id: 1,
      name: "Era Chaturvedi",
      role: "Partner",
      company: "SaySpace",
      expertise: "Organizational Strategy Development",
      experience: "25 Years Experience",
      url: imageConstants.ABOUT.ERA,
      email: 'era@sayspace.co.in'
    },
    {
      id: 2,
      name: "Pankaj Kohli",
      role: "Partner",
      company: "SaySpace",
      expertise: "Corporate Services / Head of Operations",
      experience: "30 Years Experience",
      url: imageConstants.ABOUT.PANKAJ,
      email: 'pankaj@sayspace.co.in'
    },
    {
      id: 3,
      name: "Arunkumar Ramakrishnan",
      role: "Advisor",
      company: "SaySpace",
      expertise: "Technology Leader",
      experience: "15+ Years Experience",
      url: imageConstants.ABOUT.ARUN,
      email: 'arun@sayspace.co.in'
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section id="leadership-team" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Users className="w-4 h-4 mr-2" />
            LEADERSHIP TEAM
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our <span className="font-semibold text-cta-coral">Expert Leaders</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Meet the experienced professionals driving innovation and excellence in Global Capability Center consulting
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Section */}
              <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                {member.url ? (
                  <div className='flex w-full items-center justify-center'>
                    <img src={member.url} alt={member.name} className="w-[270px] h-[270px] object-cover rounded-full border-8 border-white" />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden">
                    <span className="text-gray-600 font-semibold text-lg">{getInitials(member.name)}</span>
                  </div>)}
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-3">
                      <a className="cursor-pointer w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors duration-200">
                        <Linkedin className="w-4 h-4 text-gray-700" />
                      </a>
                      <a  href={`mailto:${member.email}`} className="cursor-pointer w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center transition-colors duration-200">
                        <Mail className="w-4 h-4 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-cta-coral font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500">
                    {member.company}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Award className="w-4 h-4 text-logo-teal flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 font-light">
                      {member.expertise}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <p className="text-xs text-gray-500">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="text-center p-8 bg-gray-50 border border-gray-200">
            <div className="w-14 h-14 bg-logo-teal flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-2">100+</h3>
            <p className="text-gray-600 font-medium">Years Combined Experience</p>
          </div>

          <div className="text-center p-8 bg-gray-50 border border-gray-200">
            <div className="w-14 h-14 bg-cta-coral flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-2">10+</h3>
            <p className="text-gray-600 font-medium">Successful GCC Implementations</p>
          </div>

          <div className="text-center p-8 bg-gray-50 border border-gray-200">
            <div className="w-14 h-14 bg-gray-600 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-light text-gray-900 mb-2">5+</h3>
            <p className="text-gray-600 font-medium">Countries Served</p>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-gray-50 border border-gray-200 p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Leadership <span className="font-semibold text-logo-teal">Philosophy</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Our leadership team believes in collaborative excellence, bringing together diverse expertise
              to deliver exceptional results for our clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative Leadership",
                description: "Working together to leverage collective expertise and drive innovation across all client engagements."
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "Committed to personal and professional development for sustained excellence and industry leadership."
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "Bringing international insights to local execution for comprehensive, world-class solutions."
              }
            ].map((philosophy, index) => (
              <div key={index} className="text-center p-6 bg-white border border-gray-200">
                <div className="w-12 h-12 bg-logo-teal mx-auto mb-4 flex items-center justify-center">
                  <philosophy.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {philosophy.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="bg-logo-teal text-white p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light mb-4">
                Join Our <span className="font-semibold">Expert Team</span>
              </h3>
              <p className="text-lg opacity-90 font-light leading-relaxed">
                We're always seeking talented professionals who share our passion for GCC excellence
                and transformational client outcomes.
              </p>
            </div>
            <div className="lg:text-right">
              <button onClick={() => navigate('/careers')} className="cursor-pointer group bg-white text-logo-teal hover:bg-gray-50 px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center">
                <Users className="w-5 h-5 mr-3" />
                View Career Opportunities
                <ExternalLink className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;