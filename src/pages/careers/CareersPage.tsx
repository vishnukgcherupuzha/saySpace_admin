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
  ExternalLink,
  Star,
  Zap,
} from 'lucide-react';

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

  const benefits: Benefit[] = [
    {
      icon: Target,
      title: 'Impactful Work',
      description: 'Make a real difference by helping global organizations establish strategic capability centers that drive innovation and growth.',
      color: 'text-logo-teal bg-logo-teal'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Benefit from structured career paths, mentorship programs, and opportunities to develop your skills across diverse projects and industries.',
      color: 'text-cta-coral bg-cta-coral'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a diverse team of professionals who work together to solve complex challenges in a supportive and inclusive environment.',
      color: 'text-logo-beige bg-logo-beige'
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'Work with multinational clients and gain valuable international business experience that enhances your professional profile.',
      color: 'text-logo-teal bg-logo-teal'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Contribute to cutting-edge solutions and strategic initiatives in one of India\'s fastest-growing business sectors.',
      color: 'text-cta-coral bg-cta-coral'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Enjoy flexible work arrangements, competitive benefits, and a company culture that values wellbeing and personal development.',
      color: 'text-logo-beige bg-logo-beige'
    }
  ];

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Senior GCC Strategy Consultant',
      type: 'Full Time',
      department: 'Consulting',
      location: 'Bangalore (Hybrid)',
      experience: '7+ Years',
      postedDate: 'June 13, 2025',
      skills: ['GCC Strategy', 'Business Transformation', '7+ Years'],
      description: 'Lead strategic consulting engagements for Fortune 500 companies establishing GCCs in India.',
      requirements: [
        '7+ years in management consulting or strategy roles',
        'Experience with GCC establishment and operations',
        'Strong analytical and communication skills',
        'MBA from tier-1 institution preferred'
      ]
    },
    {
      id: '2',
      title: 'GCC Technology Architect',
      type: 'Full Time',
      department: 'Technology',
      location: 'Bangalore (Hybrid)',
      experience: '8+ Years',
      postedDate: 'June 08, 2025',
      skills: ['Solutions Architecture', 'Cloud', '8+ Years'],
      description: 'Design and implement technology solutions for GCC infrastructure and operations.',
      requirements: [
        '8+ years in solutions architecture',
        'Expertise in cloud platforms (AWS, Azure, GCP)',
        'Experience with enterprise technology integration',
        'Strong leadership and team management skills'
      ]
    },
    {
      id: '3',
      title: 'GCC Operations Manager',
      type: 'Full Time',
      department: 'Operations',
      location: 'Bangalore (Hybrid)',
      experience: '5+ Years',
      postedDate: 'June 05, 2025',
      skills: ['Operations Management', 'Process Optimization', '5+ Years'],
      description: 'Manage day-to-day operations and drive efficiency improvements across GCC functions.',
      requirements: [
        '5+ years in operations management',
        'Experience with process optimization',
        'Strong project management skills',
        'Knowledge of GCC operations preferred'
      ]
    },
    {
      id: '4',
      title: 'Senior Business Analyst',
      type: 'Full Time',
      department: 'Consulting',
      location: 'Bangalore (Hybrid)',
      experience: '4+ Years',
      postedDate: 'June 01, 2025',
      skills: ['Business Analysis', 'Data Analytics', '4+ Years'],
      description: 'Analyze business requirements and provide insights for GCC transformation projects.',
      requirements: [
        '4+ years in business analysis',
        'Strong analytical and problem-solving skills',
        'Experience with data visualization tools',
        'Knowledge of business process improvement'
      ]
    }
  ];

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
        return 'bg-logo-beige text-white';
      default:
        return 'bg-dividers text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-logo-teal via-logo-teal/90 to-cta-coral overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 mr-3" />
              <span className="font-body text-lg font-medium uppercase tracking-wide">
                Join Our Team
              </span>
            </div>
            
            <h1 className="font-header font-bold text-5xl lg:text-7xl mb-6">
              Build Your Career with
              <span className="block text-logo-beige">GCC Bangalore</span>
            </h1>
            
            <p className="font-body text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Join India's leading GCC consulting firm and shape the future of global capability centers
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-body">Bangalore, India</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-body">500+ Team Members</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-body">Best Workplace 2024</span>
              </div>
            </div>

            <button className="inline-flex items-center px-8 py-4 bg-white text-logo-teal font-header font-bold text-lg rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:shadow-2xl">
              <span>Explore Opportunities</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-dividers/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-logo-teal mr-2" />
              <span className="font-body text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Why Join GCC Bangalore?
              </span>
            </div>
            
            <h2 className="font-header font-bold text-4xl text-foreground mb-6">
              Discover the <span className="text-logo-teal">Benefits</span> of Building Your Career with Us
            </h2>
            
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
              Join a dynamic team that's transforming how global organizations establish and operate capability centers
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const [ bgColor] = benefit.color.split(' ');
              
              return (
                <div key={index} className="group bg-card border border-dividers rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  
                  {/* Icon */}
                  <div className={`${bgColor} rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-header font-bold text-xl text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-cta-coral mr-2" />
              <span className="font-body text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Current Openings
              </span>
            </div>
            
            <h2 className="font-header font-bold text-4xl text-foreground mb-6">
              Explore Our <span className="text-cta-coral">Available Positions</span>
            </h2>
            
            <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
              Join our growing team and contribute to exciting projects with global impact
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card border border-dividers rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4">
              
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search positions, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-dividers rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                />
              </div>

              {/* Department Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-dividers rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent min-w-[160px]"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-dividers rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent min-w-[160px]"
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
              <div key={job.id} className="bg-card border border-dividers rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="font-header font-bold text-xl text-foreground">
                        {job.title}
                      </h3>
                      <span className={`font-body text-xs px-3 py-1 rounded-full ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-body">{job.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-body">{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-body">{job.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-body">{job.postedDate}</span>
                      </div>
                    </div>

                    {job.description && (
                      <p className="font-body text-muted-foreground mb-4">
                        {job.description}
                      </p>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="font-body text-xs px-3 py-1 bg-logo-teal/10 text-logo-teal rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:ml-6">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-3 bg-logo-teal text-white font-header font-medium rounded-xl hover:bg-logo-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-105">
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
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-header font-bold text-xl text-foreground mb-2">
                No positions found
              </h3>
              <p className="font-body text-muted-foreground">
                Try adjusting your search criteria or check back later for new openings.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border-t border-dividers">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-card border border-dividers rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-cta-coral mr-3" />
              <span className="font-header font-bold text-2xl text-foreground">
                Ready to Make an Impact?
              </span>
            </div>
            
            <h3 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Don't See the Perfect Role?
            </h3>
            
            <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities that match your skills and interests.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-logo-teal text-white font-header font-bold rounded-xl hover:bg-logo-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span>Submit Your Resume</span>
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-logo-teal text-logo-teal font-header font-bold rounded-xl hover:bg-logo-teal hover:text-white transition-all duration-200">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;