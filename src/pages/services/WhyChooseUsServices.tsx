import PopoverForm from '@/components/PopoverForm';
import {
  Target,
  Layers,
  Globe,
  Award,
  ArrowRight,
  Shield,
  CheckCircle
} from 'lucide-react';

const WhyChooseUsServices = () => {
  const advantages = [
    {
      id: 1,
      icon: Target,
      title: "Exclusive GCC Expertise",
      description:
        "We specialize solely in Global Capability Centers, offering unmatched depth and focus that sets us apart from broad-spectrum consultancies.",
      stats: { value: "100%", label: "GCC Focused" }
    },
    {
      id: 2,
      icon: Layers,
      title: "Flexible Lifecycle Support",
      description:
        "From initial strategy to full-scale operations, we deliver both comprehensive end-to-end solutions and targeted standalone services across any stage of your GCC evolution.",
      stats: { value: "360°", label: "Service Coverage" }
    },
    {
      id: 3,
      icon: Globe,
      title: "Global Insight with Local Precision",
      description:
        "Our approach blends in-depth understanding of India's business landscape with global business acumen to craft culturally relevant solutions.",
      stats: { value: "5+", label: "Countries Served" }
    },
    {
      id: 4,
      icon: Award,
      title: "Trusted by Industry Leaders",
      description:
        "With 10+ GCCs launched and a stellar client retention rate, we bring a consistent track record of success across verticals.",
      stats: { value: "95%", label: "Client Retention" }
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
            <Award className="w-4 h-4 mr-2" />
            COMPETITIVE ADVANTAGE
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Why Choose <span className="font-semibold text-cta-coral">Us</span>
          </h2>

          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our distinct methodology and deep domain expertise position us as the perfect partner for your GCC journey in India.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {advantages.map((advantage) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={advantage.id}
                className="group bg-white border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-cta-coral flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Stats Badge */}
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-light text-gray-900 mb-1">
                        {advantage.stats.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {advantage.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Proposition Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 mb-16 lg:mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Our <span className="font-semibold text-logo-teal">Value Proposition</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
              We deliver measurable results through our specialized approach, proven methodology,
              and deep understanding of the GCC landscape in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Specialized Expertise</h4>
              <p className="text-gray-600 font-light text-sm">Exclusive focus on GCC solutions and best practices</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <Layers className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Solutions</h4>
              <p className="text-gray-600 font-light text-sm">End-to-end services across the entire GCC lifecycle</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Global Experience</h4>
              <p className="text-gray-600 font-light text-sm">Local expertise combined with international perspective</p>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Differentiators</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Dedicated GCC focus with specialized methodology</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Proven track record across multiple industries</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Deep understanding of India's business ecosystem</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Client Success Metrics</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">95% client retention rate with long-term partnerships</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">10+ successful GCC implementations completed</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Average 40% cost reduction achieved for clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white border border-gray-200 p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-cta-coral mr-3" />
            <span className="text-xl lg:text-2xl font-semibold text-gray-900">
              Ready to Experience the Difference?
            </span>
          </div>

          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Join the growing number of organizations who have chosen our specialized approach for their GCC success.
            See how our proven methodology can accelerate your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <PopoverForm
              title="Schedule Discovery Call"
              subtitle="Let's discuss your GCC requirements and how we can help."
              submitButtonText="Schedule Discovery Call"
              successMessage="Thank you! We'll contact you to schedule your consultation."
            >
              <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                <Award className="w-5 h-5 mr-3" />
                Schedule Discovery Call
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </PopoverForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsServices;