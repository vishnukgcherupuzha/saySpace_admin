import React, { useState } from 'react';
import { 
  Building2, 
  Cpu, 
  CreditCard, 
  Factory, 
  Heart,
  Award,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  MapPin,
  Briefcase
} from 'lucide-react';

// Type definitions
interface Company {
  name: string;
  description?: string;
  employees?: string;
  established?: string;
}

interface Industry {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  companies: Company[];
  description: string;
}

const SuccessStories = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const industries: Industry[] = [
    {
      id: 'technology',
      name: 'Technology',
      icon: Cpu,
      color: 'text-logo-teal',
      bgColor: 'bg-logo-teal',
      description: 'Leading tech giants have established major development centers in Bangalore, leveraging the city\'s robust talent pool and innovation ecosystem.',
      companies: [
        {
          name: 'Microsoft',
          description: 'One of the largest development centers outside Redmond',
          employees: '7,000+',
          established: '1998'
        },
        {
          name: 'Cisco',
          description: 'Major R&D hub for networking and collaboration solutions',
          employees: '3,500+',
          established: '2001'
        },
        {
          name: 'IBM',
          description: 'Global delivery center and innovation lab',
          employees: '5,000+',
          established: '1996'
        },
        {
          name: 'Infosys',
          description: 'Large software development and consulting hub',
          employees: '15,000+',
          established: '1993'
        },
        {
          name: 'Persistent Systems',
          description: 'Bangalore-headquartered global software company',
          employees: '8,000+',
          established: '1990'
        }
      ]
    },
    {
      id: 'financial',
      name: 'Financial Services',
      icon: CreditCard,
      color: 'text-cta-coral',
      bgColor: 'bg-cta-coral',
      description: 'Major financial institutions have set up operations in Bangalore to tap into the city\'s strong financial services talent and cost advantages.',
      companies: [
        {
          name: 'Barclays',
          description: 'Technology and operations center',
          employees: '2,500+',
          established: '2006'
        },
        {
          name: 'Credit Suisse',
          description: 'Global technology center',
          employees: '1,800+',
          established: '2007'
        },
        {
          name: 'Deutsche Bank',
          description: 'Technology and business services hub',
          employees: '3,000+',
          established: '2004'
        },
        {
          name: 'HSBC',
          description: 'Global technology and services center',
          employees: '2,200+',
          established: '2002'
        },
        {
          name: 'Mastercard',
          description: 'Technology development and innovation center',
          employees: '1,500+',
          established: '2008'
        }
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: Factory,
      color: 'text-logo-beige',
      bgColor: 'bg-logo-beige',
      description: 'Bangalore\'s manufacturing heritage attracts global industrial companies to establish R&D and engineering centers.',
      companies: [
        {
          name: 'Cummins',
          description: 'Engine and power systems R&D center',
          employees: '2,000+',
          established: '1962'
        },
        {
          name: 'John Deere',
          description: 'Technology and innovation center',
          employees: '1,200+',
          established: '1998'
        },
        {
          name: 'Mercedes-Benz',
          description: 'Research and development facility',
          employees: '800+',
          established: '2008'
        },
        {
          name: 'Siemens',
          description: 'Engineering and R&D hub',
          employees: '1,500+',
          established: '1957'
        },
        {
          name: 'Whirlpool',
          description: 'Technology center and manufacturing',
          employees: '1,000+',
          established: '1994'
        }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: Heart,
      color: 'text-cta-coral/80',
      bgColor: 'bg-cta-coral/80',
      description: 'Global healthcare and pharmaceutical companies leverage Bangalore\'s life sciences ecosystem and skilled workforce.',
      companies: [
        {
          name: 'Bayer',
          description: 'Global business services and R&D',
          employees: '1,200+',
          established: '2008'
        },
        {
          name: 'Novo Nordisk',
          description: 'Global business services center',
          employees: '800+',
          established: '2006'
        },
        {
          name: 'Johnson & Johnson',
          description: 'Innovation and technology center',
          employees: '1,500+',
          established: '2005'
        },
        {
          name: 'GSK',
          description: 'Global technology and business services',
          employees: '1,000+',
          established: '2003'
        },
        {
          name: 'Ecolab',
          description: 'Technology and business services hub',
          employees: '600+',
          established: '2010'
        }
      ]
    }
  ];

  const totalCompanies = industries.reduce((sum, industry) => sum + industry.companies.length, 0);
  const totalEmployees = industries.reduce((sum, industry) => 
    sum + industry.companies.reduce((empSum, company) => 
      empSum + parseInt(company.employees?.replace(/[^0-9]/g, '') || '0'), 0), 0);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-dividers/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Success Stories
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Leading <span className="text-logo-teal">GCCs in Bangalore</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Bangalore hosts GCCs from Fortune 500 companies across various industries, establishing itself as a premier destination for global operations.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-5 h-5 text-logo-teal mr-2" />
                <span className="font-header font-bold text-3xl text-foreground">{totalCompanies}+</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">Global Companies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-cta-coral mr-2" />
                <span className="font-header font-bold text-3xl text-foreground">{Math.round(totalEmployees/1000)}K+</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">Employees</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-5 h-5 text-logo-beige mr-2" />
                <span className="font-header font-bold text-3xl text-foreground">4</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">Key Industries</p>
            </div>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            const isActive = activeIndustry === industry.id;
            
            return (
              <div
                key={industry.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveIndustry(isActive ? null : industry.id)}
              >
                <div className={`bg-card border border-dividers rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isActive ? 'ring-2 ring-logo-teal ring-opacity-50' : ''
                }`}>
                  
                  {/* Industry Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${industry.bgColor} rounded-xl p-3`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="font-header font-bold text-lg text-foreground">
                        {industry.companies.length}
                      </div>
                      <div className="font-body text-xs text-muted-foreground">
                        Companies
                      </div>
                    </div>
                  </div>

                  {/* Industry Name */}
                  <h3 className="font-header font-bold text-lg text-foreground mb-2">
                    {industry.name}
                  </h3>

                  {/* Company List Preview */}
                  <div className="space-y-1 mb-4">
                    {industry.companies.slice(0, 3).map((company, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 ${industry.bgColor} rounded-full mr-2 flex-shrink-0`}></div>
                        <span className="font-body text-muted-foreground truncate">
                          {company.name}
                        </span>
                      </div>
                    ))}
                    {industry.companies.length > 3 && (
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-dividers rounded-full mr-2 flex-shrink-0"></div>
                        <span className="font-body text-muted-foreground">
                          +{industry.companies.length - 3} more
                        </span>
                      </div>
                    )}
                  </div>

                  {/* View More Button */}
                  <button className={`w-full flex items-center justify-center py-2 px-4 rounded-lg border transition-all duration-200 ${
                    isActive 
                      ? `${industry.bgColor} text-white border-transparent` 
                      : `border-dividers text-muted-foreground hover:${industry.color} hover:border-current`
                  }`}>
                    <span className="font-body text-sm font-medium mr-2">
                      {isActive ? 'Hide Details' : 'View Details'}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Industry View */}
        {activeIndustry && (
          <div className="mb-12 animate-in slide-in-from-top-4 duration-500">
            {industries
              .filter(industry => industry.id === activeIndustry)
              .map((industry) => {
                const IconComponent = industry.icon;
                
                return (
                  <div key={industry.id} className="bg-card border border-dividers rounded-3xl p-8 shadow-xl">
                    
                    {/* Industry Header */}
                    <div className="flex items-center mb-6">
                      <div className={`${industry.bgColor} rounded-xl p-3 mr-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-header font-bold text-2xl text-foreground">
                          {industry.name}
                        </h3>
                        <p className="font-body text-muted-foreground mt-1">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Companies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {industry.companies.map((company, idx) => (
                        <div key={idx} className="bg-background border border-dividers rounded-xl p-6 hover:shadow-md transition-all duration-200">
                          
                          {/* Company Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-header font-bold text-lg text-foreground mb-1">
                                {company.name}
                              </h4>
                              {company.description && (
                                <p className="font-body text-sm text-muted-foreground">
                                  {company.description}
                                </p>
                              )}
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-logo-teal cursor-pointer transition-colors" />
                          </div>

                          {/* Company Stats */}
                          <div className="space-y-3">
                            {company.employees && (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 text-logo-teal mr-2" />
                                  <span className="font-body text-sm text-muted-foreground">Employees</span>
                                </div>
                                <span className="font-body text-sm font-medium text-foreground">
                                  {company.employees}
                                </span>
                              </div>
                            )}
                            {company.established && (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Briefcase className="w-4 h-4 text-cta-coral mr-2" />
                                  <span className="font-body text-sm text-muted-foreground">Established</span>
                                </div>
                                <span className="font-body text-sm font-medium text-foreground">
                                  {company.established}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-3xl p-8">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-logo-teal mr-2" />
            <span className="font-header font-bold text-lg text-foreground">
              Join the Success Story
            </span>
          </div>
          
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover how these leading companies have built successful operations in Bangalore. 
            Learn from their experiences and explore opportunities for your organization.
          </p>
          
          <button className="inline-flex items-center px-8 py-3 bg-logo-teal text-white font-header font-medium rounded-xl hover:bg-logo-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            <span>View Success Stories</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;