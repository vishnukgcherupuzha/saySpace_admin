import React, { useState } from 'react';
import {
  Building2,
  Cpu,
  CreditCard,
  Factory,
  Heart,
  // Award,
  Users,
  Globe,
  // ArrowRight,
  ExternalLink,
  MapPin,
  Briefcase,
  Lightbulb
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
      description: 'Leading tech giants have established major development centers in Bengaluru, leveraging the city\'s robust talent pool and innovation ecosystem.',
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
          description: 'India-based global software company',
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
      description: 'Major financial institutions have set up operations in Bengaluru to tap into the city\'s strong financial services talent and cost advantages.',
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
      color: 'text-gray-600',
      bgColor: 'bg-gray-600',
      description: 'Bengaluru\'s manufacturing heritage attracts global industrial companies to establish R&D and engineering centers.',
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
      color: 'text-cta-coral',
      bgColor: 'bg-cta-coral',
      description: 'Global healthcare and pharmaceutical companies leverage Bengaluru\'s life sciences ecosystem and skilled workforce.',
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

  // const totalCompanies = industries.reduce((sum, industry) => sum + industry.companies.length, 0);
  // const totalEmployees = industries.reduce((sum, industry) =>
  //   sum + industry.companies.reduce((empSum, company) =>
  //     empSum + parseInt(company.employees?.replace(/[^0-9]/g, '') || '0'), 0), 0);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            SUCCESS STORIES
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Leading <span className="font-semibold text-logo-teal">GCCs in India</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
            India hosts GCCs from Fortune 500 companies across various industries, establishing itself as the premier destination for global operations.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-5 h-5 text-logo-teal mr-2" />
                <span className="text-3xl font-light text-gray-900">880+</span>
              </div>
              <p className="text-sm text-gray-600 font-medium">GCC Centers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-cta-coral mr-2" />
                <span className="text-3xl font-light text-gray-900">1.9M+</span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Tech Professionals</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-5 h-5 text-gray-600 mr-2" />
                <span className="text-3xl font-light text-gray-900">385+</span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Fortune 500 Companies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-3xl font-light text-gray-900">40+</span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Unicorns</p>
            </div>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            const isActive = activeIndustry === industry.id;

            return (
              <div
                key={industry.id}
                className={`group cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                onClick={() => setActiveIndustry(isActive ? null : industry.id)}
              >
                <div className={`bg-white border p-6  hover:shadow-xl transition-all duration-300 ${isActive ? 'border-logo-teal shadow-xl' : 'border-gray-200 hover:border-gray-300'
                  }`}>

                  {/* Industry Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${industry.bgColor} p-3`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-light text-gray-900">
                        {industry.companies.length}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Companies
                      </div>
                    </div>
                  </div>

                  {/* Industry Name */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>

                  {/* Company List Preview */}
                  <div className="space-y-1 mb-4">
                    {industry.companies.slice(0, 3).map((company, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-2 h-2 ${industry.bgColor} mr-2 flex-shrink-0`}></div>
                        <span className="text-gray-600 font-light truncate">
                          {company.name}
                        </span>
                      </div>
                    ))}
                    {industry.companies.length > 3 && (
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gray-400 mr-2 flex-shrink-0"></div>
                        <span className="text-gray-600 font-light">
                          +{industry.companies.length - 3} more
                        </span>
                      </div>
                    )}
                  </div>

                  {/* View More Button */}
                  {/* <button className={`w-full flex items-center justify-center py-2 px-4 border transition-all duration-200 ${
                    isActive 
                      ? `${industry.bgColor} text-white border-transparent` 
                      : `border-gray-300 text-gray-700 hover:border-logo-teal hover:text-logo-teal hover:bg-logo-teal/5`
                  }`}>
                    <span className="text-sm font-medium mr-2">
                      {isActive ? 'Hide Details' : 'View Details'}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                      isActive ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Industry View */}
        {activeIndustry && (
          <div className="mb-12 lg:mb-16 animate-in slide-in-from-top-4 duration-500">
            {industries
              .filter(industry => industry.id === activeIndustry)
              .map((industry) => {
                const IconComponent = industry.icon;

                return (
                  <div key={industry.id} className="bg-white border border-gray-200 p-8 lg:p-10 shadow-xl">

                    {/* Industry Header */}
                    <div className="flex items-center mb-8">
                      <div className={`${industry.bgColor} p-3 mr-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                          {industry.name}
                        </h3>
                        <p className="text-gray-600 font-light mt-1 leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Companies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {industry.companies.map((company, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 p-6 hover:shadow-md transition-all duration-200">

                          {/* Company Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                {company.name}
                              </h4>
                              {company.description && (
                                <p className="text-sm text-gray-600 font-light">
                                  {company.description}
                                </p>
                              )}
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-logo-teal cursor-pointer transition-colors" />
                          </div>

                          {/* Company Stats */}
                          <div className="space-y-3">
                            {company.employees && (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 text-logo-teal mr-2" />
                                  <span className="text-sm text-gray-600">Employees</span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                  {company.employees}
                                </span>
                              </div>
                            )}
                            {company.established && (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Briefcase className="w-4 h-4 text-cta-coral mr-2" />
                                  <span className="text-sm text-gray-600">Established</span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
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
        {/* <div className="text-center bg-white border border-gray-200 p-8 lg:p-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-logo-teal mr-2" />
            <span className="text-xl lg:text-2xl font-semibold text-gray-900">
              Join the Success Story
            </span>
          </div>

          <p className="text-gray-600 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how these leading companies have built successful operations in Bengaluru.
            Learn from their experiences and explore opportunities for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <Award className="w-5 h-5 mr-3" />
              View Success Stories
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <Building2 className="w-5 h-5 mr-3" />
              Explore Opportunities
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SuccessStories;