import { 
  BookOpen, 
  Award, 
  Globe, 
  CheckCircle,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';
import { imageConstants } from '../../../public/images';

const OurStory = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving multinational enterprises across industries worldwide",
      metric: "Fortune 500 Clients"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Consistent delivery of successful GCC implementations",
      metric: "100% Success Rate"
    },
    {
      icon: TrendingUp,
      title: "Market Leadership",
      description: "Leading GCC consulting practice in India's innovation hubs",
      metric: "15+ Years Experience"
    }
  ];

  const keyPoints = [
    "Strategic planning and business case development",
    "End-to-end implementation and project management", 
    "Regulatory compliance and legal framework guidance",
    "Talent acquisition and operational excellence"
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            OUR JOURNEY
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Our <span className="font-semibold text-logo-teal">Story</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-cta-coral max-w-3xl mx-auto font-semibold">
            Your Trusted Partner for GCC Success in India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">
          
          {/* Content Side - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Story */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                <span className="font-semibold text-gray-900">Say Space</span> is a specialized consulting organization 
                led by industry veterans dedicated to helping global enterprises establish and optimize their 
                Global Capability Centers in India's thriving innovation ecosystem.
              </p>
              
              <p className="text-gray-600 leading-relaxed font-light">
                Founded by <span className="font-semibold text-logo-teal">Era Chaturvedi</span>, an industry 
                professional with extensive expertise in global capability centers, we bring specialized knowledge 
                across the entire GCC lifecycle - from initial strategy and business case development to 
                implementation and ongoing management.
              </p>
              
              <p className="text-gray-600 leading-relaxed font-light">
                Our team combines deep local insights with global best practices, positioning us to help 
                multinational companies leverage India's exceptional talent ecosystem to drive innovation, 
                operational excellence, and sustainable business transformation.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Core Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 leading-relaxed font-light">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-logo-teal/5 border border-logo-teal/15 p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed font-light italic">
                "To empower global enterprises with strategic GCC solutions that unlock India's 
                innovation potential, driving sustainable growth and competitive advantage in the digital economy."
              </p>
            </div>
          </div>

          {/* Visual Side - 5 columns */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-200 p-8 lg:p-10">
              
              {/* Founder Profile */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 border border-gray-200 overflow-hidden">
                  <img 
                    src={imageConstants.ABOUT.ERA} 
                    alt="Era Chaturvedi, Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Era Chaturvedi</h4>
                <p className="text-sm text-gray-600 mb-4">Founder & CEO, Say Space</p>
                <div className="w-16 h-px bg-logo-teal mx-auto"></div>
              </div>

              {/* Founder Quote */}
              <div className="bg-gray-50 border border-gray-200 p-6">
                <blockquote className="text-gray-700 leading-relaxed font-light italic mb-4">
                  "Our commitment is to transform India's talent ecosystem into a strategic advantage 
                  for global enterprises, creating world-class capability centers that drive meaningful 
                  business outcomes."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-logo-teal flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">EC</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Era Chaturvedi</div>
                    <div className="text-xs text-gray-600">Founder & CEO</div>
                  </div>
                </div>
              </div>

              {/* Company Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-light text-gray-900 mb-1">15+</div>
                    <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-gray-900 mb-1">50+</div>
                    <div className="text-xs text-gray-600 font-medium">GCCs Established</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-logo-teal group-hover:bg-logo-teal/90 transition-colors duration-300 flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  {highlight.description}
                </p>

                <div className="text-sm font-medium text-logo-teal">
                  {highlight.metric}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mt-16 lg:mt-20 bg-white border border-gray-200 p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Our <span className="font-semibold text-logo-teal">Values</span>
            </h3>
            <div className="w-16 h-px bg-logo-teal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-6 h-6 text-logo-teal" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 font-light text-sm">Delivering exceptional results through meticulous attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-cta-coral" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
              <p className="text-gray-600 font-light text-sm">Building long-term relationships based on trust and mutual success</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 font-light text-sm">Embracing cutting-edge solutions to drive transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;