import PopoverForm from '@/components/PopoverForm';
import {
  Monitor,
  Building2,
  Cog,
  Heart,
  ShoppingCart,
  Shield,
  ArrowRight,
  Briefcase,
  CheckCircle
} from 'lucide-react';

const IndustryExpertise = () => {
  const industries = [
    {
      id: 1,
      icon: Monitor,
      title: "Software & Technology Sector",
      description: "Tailored GCC frameworks for tech companies focusing on software engineering, R&D, and pioneering product development.",
      expertise: ["Software Engineering", "Research & Development", "Product Innovation", "Digital Technologies"]
    },
    {
      id: 2,
      icon: Building2,
      title: "Financial & Banking Services",
      description: "GCC strategies designed for financial institutions with emphasis on risk control, regulatory adherence, data analytics, and digital banking evolution.",
      expertise: ["Risk Mitigation", "Regulatory Compliance", "Data Analytics", "Digital Banking"]
    },
    {
      id: 3,
      icon: Cog,
      title: "Industrial & Engineering",
      description: "Comprehensive GCC solutions for manufacturers targeting engineering design, R&D, supply chain management, and IoT innovations.",
      expertise: ["Engineering Design", "Research & Development", "Supply Chain Management", "IoT Innovations"]
    },
    {
      id: 4,
      icon: Heart,
      title: "Healthcare & Biomedical",
      description: "GCC models crafted for healthcare providers emphasizing clinical research, data analysis, compliance, and digital health technologies.",
      expertise: ["Clinical Trials", "Data Insights", "Regulatory Compliance", "Health Tech"]
    },
    {
      id: 5,
      icon: ShoppingCart,
      title: "Retail & Online Commerce",
      description: "GCC frameworks focused on retail companies enhancing digital transformation, customer insights, supply chain optimization, and user experience.",
      expertise: ["Digital Transformation", "Customer Analytics", "Supply Chain Efficiency", "Customer Experience"]
    },
    {
      id: 6,
      icon: Shield,
      title: "Insurance & Risk Management",
      description: "Customized GCC solutions for insurers targeting claims handling, underwriting processes, data analytics, and digital innovation.",
      expertise: ["Claims Management", "Underwriting", "Data Analytics", "Digital Modernization"]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            SECTOR SPECIALIZATION
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Specialized Industry <span className="font-semibold text-logo-teal">Insights</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Customized GCC solutions catering to multiple sector needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className="group bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-logo-teal flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>

                  {/* Expertise Areas */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">
                      Key Focus Areas:
                    </h4>
                    <div className="space-y-2">
                      {industry.expertise.map((area, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 font-light">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  {/* <button className="cursor-pointer group/btn w-full mt-auto py-3 px-6 border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal font-semibold text-base transition-all duration-300 flex items-center justify-center hover:bg-logo-teal/5">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Insights Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Cross-Industry <span className="font-semibold text-cta-coral">Capabilities</span>
            </h3>
            <div className="w-16 h-px bg-cta-coral mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Our expertise spans multiple industries, enabling us to deliver tailored GCC solutions
              that address sector-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Technology Innovation</h4>
              <p className="text-gray-600 font-light text-sm">Advanced R&D and product development capabilities</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Regulatory Compliance</h4>
              <p className="text-gray-600 font-light text-sm">Deep understanding of industry-specific regulations</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Domain Expertise</h4>
              <p className="text-gray-600 font-light text-sm">Specialized knowledge across multiple business functions</p>
            </div>
          </div>

          {/* Industry Benefits */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Sector-Specific Advantages</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Industry-specific talent pools and expertise</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Regulatory compliance and risk management</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Best practices from similar implementations</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Business Outcomes</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Accelerated time-to-market for new initiatives</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Cost optimization through specialized knowledge</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Enhanced innovation and competitive advantage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 bg-gray-50 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Don't See Your <span className="font-semibold text-logo-teal">Industry Listed?</span>
          </h3>

          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our adaptable methodology and extensive experience enable us to serve organizations
            across diverse industries. Let's discuss how we can help your sector.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <PopoverForm
              title="Discuss Your Industry"
              subtitle="Let's discuss your GCC requirements and how we can help."
              submitButtonText="Discuss Your Industry"
              successMessage="Thank you! We'll contact you to schedule your consultation."
            >
              <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                <Briefcase className="w-5 h-5 mr-3" />
                Discuss Your Industry
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </PopoverForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;