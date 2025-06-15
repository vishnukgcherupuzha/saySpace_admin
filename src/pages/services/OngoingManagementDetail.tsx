import { 
  TrendingUp, 
  CheckCircle, 
  Headphones, 
  ArrowRight,
  BarChart3,
  RefreshCw
} from 'lucide-react';

const OngoingManagementDetail = () => {
  const subServices = [
    {
      id: 1,
      icon: Headphones,
      title: "Managed Services",
      description: "Finance and accounting support, HR administration, IT management and support, and facilities management for hassle-free operations.",
      features: [
        "Finance and accounting support",
        "HR administration",
        "IT management and support",
        "Facilities management"
      ]
    },
    {
      id: 2,
      icon: BarChart3,
      title: "Growth & Optimization",
      description: "Capacity planning and scaling, new capability development, process optimization, and cost efficiency initiatives for continuous improvement.",
      features: [
        "Capacity planning and scaling",
        "New capability development",
        "Process optimization",
        "Cost efficiency initiatives"
      ]
    },
    {
      id: 3,
      icon: RefreshCw,
      title: "Change Management",
      description: "Organizational change strategies, cultural integration programs, and communications planning and execution for smooth transitions.",
      features: [
        "Organizational change strategies",
        "Cultural integration programs",
        "Communications planning and execution"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            SERVICE CATEGORY
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Ongoing GCC <span className="font-semibold text-logo-teal">Management</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Ensure long-term success with comprehensive management solutions.
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
            Ready for Comprehensive <span className="font-semibold text-logo-teal">GCC Management?</span>
          </h3>
          
          <p className="text-lg text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our ongoing management experts will ensure your GCC operates efficiently and continues 
            to deliver value through strategic oversight and optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
              <TrendingUp className="w-5 h-5 mr-3" />
              Manage Your GCC Effectively
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>

            <button className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5">
              <BarChart3 className="w-5 h-5 mr-3" />
              Growth Strategy Consultation
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Management Excellence Section */}
        <div className="mt-16 lg:mt-20 bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              End-to-End <span className="font-semibold text-logo-teal">Management Excellence</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600 font-light text-sm">Round-the-clock operational support and management</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Monitoring</h4>
              <p className="text-gray-600 font-light text-sm">Continuous tracking and optimization of KPIs</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Adaptive Management</h4>
              <p className="text-gray-600 font-light text-sm">Flexible strategies that evolve with your business</p>
            </div>
          </div>

          {/* Management Benefits */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Operational Excellence</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Streamlined administrative processes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Comprehensive IT and facilities management</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Financial oversight and reporting</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Strategic Growth</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Scalable capacity planning and expansion</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Continuous process optimization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">Change management and cultural integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Long-term Partnership Section */}
        <div className="mt-16 lg:mt-20 bg-logo-teal text-white p-8 lg:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light mb-6">
              Your Long-Term Strategic Partner
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light mb-8">
              We don't just manage your GCC — we become your strategic partner, ensuring continuous 
              evolution and growth aligned with your global business objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">5+</div>
                <div className="text-sm text-gray-400 font-medium">Years Average Partnership</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">98%</div>
                <div className="text-sm text-gray-400 font-medium">Client Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-light text-white mb-2">40%</div>
                <div className="text-sm text-gray-400 font-medium">Average Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingManagementDetail;