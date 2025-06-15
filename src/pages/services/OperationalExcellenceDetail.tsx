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
      title: "Process Design",
      description: "Process mapping and optimization, standard operating procedures development, and quality management frameworks implementation.",
      features: [
        "Process mapping and optimization",
        "Standard operating procedures development",
        "Quality management frameworks",
        "Implementation strategies"
      ]
    },
    {
      id: 2,
      icon: Monitor,
      title: "Technology Implementation",
      description: "IT systems selection and implementation, digital transformation initiatives, and automation opportunities identification and implementation.",
      features: [
        "IT systems selection and implementation",
        "Digital transformation initiatives",
        "Automation opportunities identification"
      ]
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Performance Management",
      description: "KPI development and tracking, productivity enhancement initiatives, and continuous improvement programs for sustainable growth.",
      features: [
        "KPI development and tracking",
        "Productivity enhancement initiatives",
        "Continuous improvement programs",
        "Sustainable growth strategies"
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
            Operational <span className="font-semibold text-logo-teal">Excellence</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Establish efficient processes and systems for optimal GCC performance.
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
            Ready to Optimize Your <span className="font-semibold text-logo-teal">GCC Operations?</span>
          </h3>
          
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our operational excellence experts will help you establish efficient processes and systems 
            for sustainable high performance and continuous improvement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <Settings className="w-5 h-5 mr-3" />
              Optimize Your GCC Operations
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <TrendingUp className="w-5 h-5 mr-3" />
              Performance Assessment
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Operational Framework Section */}
        <div className="mt-16 lg:mt-20 bg-gray-50 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Proven <span className="font-semibold text-logo-teal">Operational Framework</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Cog className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Process Excellence</h4>
              <p className="text-gray-600 font-light text-sm">Standardized workflows optimized for efficiency and quality</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Digital Transformation</h4>
              <p className="text-gray-600 font-light text-sm">Advanced technology solutions for operational efficiency</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Improvement</h4>
              <p className="text-gray-600 font-light text-sm">Data-driven insights for ongoing performance enhancement</p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Performance Areas</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Quality assurance and control systems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Productivity optimization and measurement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Cost efficiency and resource optimization</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Technology Integration</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Automation and workflow optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Real-time monitoring and analytics</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Digital infrastructure and systems integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 lg:mt-20 bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Measurable <span className="font-semibold text-cta-coral">Success Metrics</span>
            </h3>
            <div className="w-16 h-px bg-cta-coral mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">30%</div>
              <div className="text-sm text-gray-600 font-medium">Average Productivity Increase</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">50%</div>
              <div className="text-sm text-gray-600 font-medium">Process Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">95%</div>
              <div className="text-sm text-gray-600 font-medium">Quality Standards Achievement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalExcellenceDetail;