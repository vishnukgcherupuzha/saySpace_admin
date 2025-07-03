import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Users,
  Building2,
  TrendingUp,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Award,
  Calendar,
  Briefcase,
  ArrowRight,
  Search,
  Filter,
  // ExternalLink,
  Star,
  // Zap,
} from 'lucide-react';
import { imageConstants } from '../../../public/images';
import { useNavigate } from 'react-router-dom';

// Type definitions
interface JobOpening {
  id: string;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Contract';
  department: string;
  location: string;
  experience: string;
  postedDate: string;
  skills: string[];
  description?: string;
  requirements?: string[];
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');

  const scrollToTeam = () => {
    const teamSection = document.getElementById('openings');
    if (teamSection) {
      teamSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const navigate = useNavigate();

  const navigateToTeam = () => {
    // Navigate to about page with hash for team section
    navigate('/about#leadership-team');

    // Alternative approach: navigate and then scroll after a short delay
    // This ensures the page has loaded before attempting to scroll
    setTimeout(() => {
      const teamSection = document.getElementById('leadership-team');
      if (teamSection) {
        teamSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const benefits: Benefit[] = [
    {
      icon: Target,
      title: "Meaningful Impact",
      description: "Drive tangible change by supporting global companies in creating strategic capability centers that foster innovation and expansion.",
      color: "text-logo-teal bg-logo-teal"
    },
    {
      icon: TrendingUp,
      title: "Professional Advancement",
      description: "Gain from clear career trajectories, guidance programs, and opportunities to enhance your expertise across varied projects and sectors.",
      color: "text-cta-coral bg-cta-coral"
    },
    {
      icon: Users,
      title: "Team-Oriented Environment",
      description: "Become part of a diverse group of experts collaborating to tackle intricate challenges in a welcoming and inclusive setting.",
      color: "text-logo-beige bg-logo-beige"
    },
    {
      icon: Globe,
      title: "International Opportunities",
      description: "Engage with global clients and acquire valuable cross-border business experience that elevates your career profile.",
      color: "text-logo-teal bg-logo-teal"
    },
    {
      icon: Lightbulb,
      title: "Focus on Innovation",
      description: "Play a role in developing pioneering solutions and strategic efforts within one of India’s rapidly expanding business domains.",
      color: "text-cta-coral bg-cta-coral"
    },
    {
      icon: Heart,
      title: "Balanced Lifestyle",
      description: "Benefit from adaptable work options, attractive perks, and a workplace culture that prioritizes well-being and personal growth.",
      color: "text-logo-beige bg-logo-beige"
    }
  ];

  const jobOpenings: JobOpening[] = [];

  const departments = ['All', ...Array.from(new Set(jobOpenings.map(job => job.department)))];
  const experienceLevels = ['All', ...Array.from(new Set(jobOpenings.map(job => job.experience)))];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesExperience = selectedExperience === 'All' || job.experience === selectedExperience;

    return matchesSearch && matchesDepartment && matchesExperience;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full Time':
        return 'bg-logo-teal text-white';
      case 'Part Time':
        return 'bg-cta-coral text-white';
      case 'Contract':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Professional Design Matching Other Pages */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Minimal geometric patterns */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-logo-teal/3 to-transparent"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh] py-16 lg:py-20">

            {/* Content Side - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide">
                <div className="w-2 h-2 bg-logo-teal rounded-full mr-2"></div>
                JOIN OUR TEAM
              </div>

              {/* Main Headline - Enterprise Typography */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight">
                  Shape Your Future with
                  <br />
                  <span className="font-semibold text-logo-teal">
                    SaySpace
                  </span>
                </h1>

                {/* Professional Subtitle */}
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                  Become part of India’s premier GCC consulting firm and drive the evolution of global capability centers with impactful work and career development.
                </p>
              </div>

              {/* Key Value Props */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Growing Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Global Impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Best Workplace</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">India Operations</span>
                </div>
              </div>

              {/* Professional CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button onClick={scrollToTeam} className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                  <Briefcase className="w-5 h-5 mr-3" />
                  Explore Opportunities
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>

                <button onClick={navigateToTeam} className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
                  <Users className="w-5 h-5 mr-3" />
                  Meet Our Team
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-light text-logo-teal">5+</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      Years of<br />Excellence
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-light text-logo-teal">10+</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      Successful<br />Projects
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-light text-logo-teal">100%</div>
                    <div className="text-sm text-gray-600 leading-tight">
                      Client<br />Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side - 5 columns */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Professional image container */}
                <div className="relative bg-white shadow-2xl shadow-gray-900/10">
                  <img
                    src={imageConstants.CAREER.HERO}
                    alt="SaySpace GCC Consulting Team"
                    className="w-full h-auto"
                  />
                  {/* Subtle overlay for professional look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>

                {/* Professional accent elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-logo-teal"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-cta-coral"></div>
              </div>

              {/* Professional floating cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-logo-teal/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-logo-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Career Growth</div>
                    <div className="text-gray-600 text-xs">Professional Development</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cta-coral/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-cta-coral" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">Best Workplace</div>
                    <div className="text-gray-600">Great Place to Work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section - Professional Design */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
              <Star className="w-4 h-4 mr-2" />
              WHY JOIN SAYSPACE
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Career <span className="font-semibold text-logo-teal">Benefits</span>
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Join a dynamic team that's transforming how global organizations establish and operate capability centers
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const [, bgColor] = benefit.color.split(' ');

              return (
                <div key={index} className="group bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">

                  {/* Icon */}
                  <div className={`${bgColor} w-14 h-14 flex items-center justify-center mb-6`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-light">
                    {benefit.description}
                  </p>

                  {/* Professional hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-px bg-logo-teal"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings Section - Professional Design */}
      <section className="py-20 lg:py-24 bg-white" id='openings'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              CURRENT OPENINGS
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Available <span className="font-semibold text-cta-coral">Positions</span>
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Join our growing team and contribute to exciting projects with global impact
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">

              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search positions, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                />
              </div>

              {/* Department Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent min-w-[160px] cursor-pointer"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent min-w-[160px] cursor-pointer"
                >
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <span className={`text-xs px-3 py-1 font-medium ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{job.postedDate}</span>
                      </div>
                    </div>

                    {job.description && (
                      <p className="text-gray-600 mb-4 font-light">
                        {job.description}
                      </p>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="text-xs px-3 py-1 bg-logo-teal/10 text-logo-teal">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:ml-6">
                    <button className="cursor-pointer w-full lg:w-auto bg-logo-teal text-white hover:bg-logo-teal/90 px-8 py-3 font-semibold transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-center">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-600 font-light">
                Try adjusting your search criteria or check back later for new openings.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Professional Design */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="bg-white border border-gray-200 p-8 lg:p-12">
            <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
              <Zap className="w-4 h-4 mr-2" />
              READY TO MAKE AN IMPACT
            </div>

            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
              Don't See the <span className="font-semibold">Perfect Role?</span>
            </h3>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities that match your skills and interests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cursor-pointer bg-logo-teal text-white hover:bg-logo-teal/90 px-8 py-4 font-semibold transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center">
                <span>Submit Your Resume</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
              <button className="cursor-pointer border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold transition-all duration-200 hover:bg-logo-teal/5 inline-flex items-center">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CareersPage;