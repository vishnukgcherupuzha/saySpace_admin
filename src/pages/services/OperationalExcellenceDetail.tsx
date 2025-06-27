import PopoverForm from '@/components/PopoverForm';
import {
  Settings,
  CheckCircle,
  Cog,
  ArrowRight,
  Monitor,
  TrendingUp
} from 'lucide-react';

const OperationalExcellenceDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: Cog,
      title: "Workflow Optimization",
      description: "Designing and refining processes, developing standard operating protocols, and implementing quality assurance frameworks for maximum efficiency.",
      features: [
        "Process design and optimization",
        "SOP creation and rollout",
        "Quality assurance systems",
        "Execution frameworks"
      ]
    },
    {
      id: 2,
      icon: Monitor,
      title: "Digital Enablement",
      description: "Identifying and deploying IT systems, leading digital adoption strategies, and integrating automation to enhance operational capabilities.",
      features: [
        "Selection and integration of IT platforms",
        "Digital adoption programs",
        "Automation planning and execution"
      ]
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Operational Performance",
      description: "Setting key performance indicators, initiating productivity growth efforts, and embedding continuous improvement models for long-term success.",
      features: [
        "KPI framework and monitoring",
        "Efficiency improvement programs",
        "Ongoing improvement initiatives",
        "Growth sustainability planning"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Settings className="w-4 h-4 mr-2" />
            SERVICE CATEGORY
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Process & <span className="font-semibold text-logo-teal">Performance Optimization</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Build scalable systems and optimize processes for peak GCC performance.
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
                    <div className="w-14 h-14 bg-logo-teal flex items-center justify-center">
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
                        <CheckCircle className="w-4 h-4 text-cta-coral flex-shrink-0 mt-0.5" />
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
            Ready to Unlock Full <span className="font-semibold text-logo-teal">Operational Potential?</span>
          </h3>

          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Let our team help you establish effective systems and continuously evolve your GCC performance for long-term excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <PopoverForm
              title="Optimize Your GCC Operations"
              subtitle="Let's discuss your GCC requirements and how we can help."
              submitButtonText="Optimize Your GCC Operations"
              successMessage="Thank you! We'll contact you to schedule your consultation."
            >
              <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                <Settings className="w-5 h-5 mr-3" />
                Optimize Your GCC Operations
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </PopoverForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalExcellenceDetail;