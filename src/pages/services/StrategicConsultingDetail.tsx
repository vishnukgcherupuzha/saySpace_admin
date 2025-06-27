import PopoverForm from '@/components/PopoverForm';
import {
  Target,
  CheckCircle,
  Settings,
  ArrowRight,
  TrendingUp,
  Map
} from 'lucide-react';

const StrategicConsultingDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: TrendingUp,
      title: "GCC Feasibility Study",
      description: "In-depth evaluation of your organization's preparedness for a GCC, covering market research, business case formulation, ROI projections, and risk analysis.",
      features: [
        "Market research",
        "Business case formulation",
        "ROI projections",
        "Risk analysis"
      ]
    },
    {
      id: 2,
      icon: Settings,
      title: "GCC Operating Framework Design",
      description: "Creation of an efficient operating framework that includes function selection, organizational hierarchy planning, governance models, and technology strategies.",
      features: [
        "Function selection",
        "Organizational hierarchy planning",
        "Governance models",
        "Technology strategies"
      ]
    },
    {
      id: 3,
      icon: Map,
      title: "Transition Planning",
      description: "Structured implementation roadmap with phased milestones, knowledge transfer plans, and risk mitigation tactics during transitions.",
      features: [
        "Phased milestones",
        "Knowledge transfer plans",
        "Risk mitigation tactics"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Target className="w-4 h-4 mr-2" />
            SERVICE CATEGORY
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Strategic <span className="font-semibold text-logo-teal">Consulting</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Tailor a GCC strategy designed to align perfectly with your global business goals.
          </p>
        </div>

        {/* Sub-Services */}
        <div className="space-y-8 mb-16 lg:mb-20">
          {subServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Service Header - 3 columns */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Number and Icon */}
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gray-200 flex items-center justify-center">
                        <span className="font-semibold text-sm text-gray-600">
                          {service.id}
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-logo-teal flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description - 5 columns */}
                  <div className="lg:col-span-5">
                    <p className="text-gray-600 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features - 4 columns */}
                  <div className="lg:col-span-4">
                    <h4 className="font-semibold text-lg text-gray-900 mb-4">
                      Key Elements:
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Ready to Craft Your <span className="font-semibold text-logo-teal">GCC Strategy?</span>
          </h3>

          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our strategic consulting services are designed to ensure your GCC achieves measurable impact aligned with your business priorities. Reach out to explore your strategic options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">


            <PopoverForm
              title="Book a Consultation"
              subtitle="Let's discuss your GCC requirements and how we can help."
              submitButtonText="Book a Consultation"
              successMessage="Thank you! We'll contact you to schedule your consultation."
            >
              <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                <Target className="w-5 h-5 mr-3" />
                Book a Consultation
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </PopoverForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicConsultingDetail;