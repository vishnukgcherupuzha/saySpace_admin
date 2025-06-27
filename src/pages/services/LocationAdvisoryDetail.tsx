import PopoverForm from '@/components/PopoverForm';
import {
  MapPin,
  CheckCircle,
  Building2,
  ArrowRight,
  Search,
  Wifi
} from 'lucide-react';

const LocationAdvisoryDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: Search,
      title: "Site Evaluation",
      description: "Thorough requirements gathering, exhaustive location screening, on-site inspections, and detailed evaluations tailored to your unique needs.",
      features: [
        "Requirements gathering",
        "Exhaustive location screening",
        "On-site inspections",
        "Detailed evaluations"
      ]
    },
    {
      id: 2,
      icon: Building2,
      title: "Real Estate Advisory",
      description: "Assistance with office space negotiation, lease structuring, and customized facility design and space optimization.",
      features: [
        "Office space negotiation",
        "Lease structuring support",
        "Facility design and optimization"
      ]
    },
    {
      id: 3,
      icon: Wifi,
      title: "Infrastructure Deployment",
      description: "Setup of IT and telecommunication systems, security installations, and ongoing facility management to ensure an efficient workplace.",
      features: [
        "IT & telecom system setup",
        "Security installations",
        "Facility management"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            SERVICE CATEGORY
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Location <span className="font-semibold text-cta-coral">Advisory</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Discover the best location for your GCC in India’s leading technology hubs.
          </p>
        </div>

        {/* Sub-Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {subServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-cta-coral flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                      <span className="font-semibold text-sm text-gray-600">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">
                      Key Components:
                    </h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-logo-teal flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 font-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Ready to Choose Your Ideal <span className="font-semibold text-cta-coral">GCC Location?</span>
          </h3>

          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our location advisory specialists will guide you to India's prime tech corridors, helping you select the perfect site for your Global Capability Center.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <PopoverForm
              title="Book a Site Visit"
              subtitle="Let's discuss your GCC requirements and how we can help."
              submitButtonText="Book a Site Visit"
              successMessage="Thank you! We'll contact you to schedule your consultation."
            >
              <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                <MapPin className="w-5 h-5 mr-3" />
                Book a Site Visit
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </PopoverForm>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
              <Search className="w-6 h-6 text-logo-teal" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Evaluations</h4>
            <p className="text-gray-600 font-light text-sm">In-depth assessments of potential locations</p>
          </div>

          <div className="bg-white border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-cta-coral" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Prime Tech Hubs</h4>
            <p className="text-gray-600 font-light text-sm">Access to India's foremost technology corridors</p>
          </div>

          <div className="bg-white border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <Wifi className="w-6 h-6 text-gray-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Ready Infrastructure</h4>
            <p className="text-gray-600 font-light text-sm">Complete IT setup and facilities management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvisoryDetail;