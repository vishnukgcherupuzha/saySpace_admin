import PopoverForm from '@/components/PopoverForm';
import {
  CheckCircle,
  ArrowRight,
  Target,
  Repeat,
  Settings,
  Clock,
  Users
} from 'lucide-react';

const EngagementModels = () => {
  const engagementModels = [
    {
      id: 1,
      icon: Target,
      title: "Fixed-Term Projects",
      description: "Defined objectives, clear deliverables, and a set timeline for focused GCC activities such as launch, scaling, or process enhancement.",
      features: [
        "Pre-established scope and budget",
        "Clear milestones and outcomes",
        "Typical timeframe: 3-6 months",
        "Perfect for targeted GCC efforts"
      ],
      buttonText: "Discover More",
      highlight: "Ideal for focused goals"
    },
    {
      id: 2,
      icon: Repeat,
      title: "Ongoing Advisory",
      description: "Continuous strategic guidance and execution support for your GCC operations, backed by a dedicated expert team.",
      features: [
        "Monthly retainer arrangement",
        "Committed advisory group",
        "Flexible engagement scale",
        "Best suited for sustained GCC oversight"
      ],
      buttonText: "Discover More",
      highlight: "Preferred by most clients",
      popular: true
    },
    {
      id: 3,
      icon: Settings,
      title: "Fully Managed GCC",
      description: "Comprehensive management handling every aspect of your GCC setup, day-to-day operations, and performance optimization.",
      features: [
        "End-to-end turnkey service",
        "All-inclusive management",
        "Long-term collaboration (12+ months)",
        "Optimal for swift GCC launch"
      ],
      buttonText: "Discover More",
      highlight: "Total hands-free management"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Users className="w-4 h-4 mr-2" />
            PARTNERSHIP OPTIONS
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Client Collaboration Models
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Tailored engagement solutions aligned with your unique business needs
          </p>
        </div>

        {/* Engagement Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {engagementModels.map((model) => {
            const IconComponent = model.icon;
            return (
              <div
                key={model.id}
                className={`group relative ${model.popular ? 'transform scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-cta-coral text-white px-4 py-2 shadow-lg">
                      <span className="font-semibold text-sm">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div className={`bg-white border ${model.popular ? 'border-cta-coral shadow-xl' : 'border-gray-200'} p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300 h-full`}>

                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 ${model.popular ? 'bg-cta-coral' : 'bg-logo-teal'} flex items-center justify-center`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-600 block mb-1">
                          {model.highlight}
                        </span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-600">
                            Flexible Duration
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                      {model.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 font-light leading-relaxed mb-6 flex-grow">
                      {model.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-sm text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-logo-teal flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    {/* <button className={`group/btn w-full py-3 px-6 font-semibold text-base transition-all duration-300 flex items-center justify-center ${model.popular
                      ? 'bg-cta-coral hover:bg-cta-coral/90 text-white shadow-sm hover:shadow-md'
                      : 'border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal hover:bg-logo-teal/5'
                      }`}>
                      {model.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        {/* <div className="bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Choose the Right <span className="font-semibold text-cta-coral">Model for You</span>
            </h3>
            <div className="w-16 h-px bg-cta-coral mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Compare our engagement models to find the perfect fit for your GCC requirements
            </p>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200 p-4 lg:p-6">
              <div className="font-semibold text-gray-900">Features</div>
              <div className="font-semibold text-gray-900 text-center">Project-Based</div>
              <div className="font-semibold text-gray-900 text-center">Retained Services</div>
              <div className="font-semibold text-gray-900 text-center">Managed GCC</div>
            </div>

            {[
              { feature: "Engagement Duration", project: "3-6 months", retained: "Ongoing", managed: "12+ months" },
              { feature: "Resource Allocation", project: "As needed", retained: "Dedicated team", managed: "Full team" },
              { feature: "Scope Flexibility", project: "Fixed", retained: "Scalable", managed: "Comprehensive" },
              { feature: "Investment Level", project: "Low-Medium", retained: "Medium", managed: "Medium-High" }
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-4 p-4 lg:p-6 border-b border-gray-200 last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}>
                <div className="font-medium text-gray-900">
                  {row.feature}
                </div>
                <div className="text-center text-gray-600 font-light">
                  {row.project}
                </div>
                <div className="text-center text-gray-600 font-light">
                  {row.retained}
                </div>
                <div className="text-center text-gray-600 font-light">
                  {row.managed}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom CTA Section */}
        <div className="mt-16 lg:mt-20 bg-gray-50 p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Not Sure Which Model <span className="font-semibold text-logo-teal">Fits Best?</span>
          </h3>

          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our experts will help you choose the optimal engagement model based on your specific requirements,
            timeline, and business objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">


            <PopoverForm
              title="Schedule Consultation"
              subtitle="Let's discuss your GCC requirements and how we can help."
              submitButtonText="Schedule Consultation"
              successMessage="Thank you! We'll contact you to schedule your consultation."
            >
              <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                <Users className="w-5 h-5 mr-3" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </PopoverForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;