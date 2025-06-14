import { 
  BookOpen, 
  Award, 
  Globe, 
  CheckCircle, 
  Users,
} from 'lucide-react';
import { imageConstants } from '../../../public/images';

const OurStory = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across the Globe",
      color: "from-logo-teal to-logo-teal/80"
    },
    {
      icon: Award,
      title: "Client Success",
      description: "100% client satisfaction rate",
      color: "from-cta-coral to-cta-coral/80"
    }
  ];

  const keyPoints = [
    "Initial strategy and business case development",
    "Implementation and ongoing management",
    "Deep local insights with global best practices",
    "India's exceptional talent ecosystem leverage"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-logo-teal/20 backdrop-blur-sm border border-logo-teal/40 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-logo-teal mr-2" />
            <span className="font-body text-sm font-medium text-logo-teal">
              Our Journey
            </span>
          </div>
          
          <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Our <span className="text-logo-teal">Story</span>
          </h2>
          
          <p className="font-body text-xl text-cta-coral max-w-3xl mx-auto font-semibold">
            Your Trusted Partner for GCC Success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Content Side */}
          <div className="space-y-8">
            
            {/* Main Story */}
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Say Space</strong> is a specialized consulting Organization led by industry veterans dedicated to helping global organizations establish and optimize their Global Capability Centers in India, India.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Founded by <strong className="text-logo-teal">Era Chaturvedi</strong>, an industry professional with extensive expertise in global capability centers, we bring specialized knowledge across the entire GCC lifecycle - from initial strategy and business case development to implementation and ongoing management.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Our team combines deep local insights with global best practices, positioning us to help multinational companies leverage India's exceptional talent ecosystem to drive innovation, operational excellence, and business transformation.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h3 className="font-header font-semibold text-xl text-foreground">
                Our Expertise Spans:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cta-coral flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-logo-teal/5 border border-border rounded-3xl p-8 relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-logo-teal/10 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-logo-beige/10 to-logo-teal/10 rounded-2xl border-2 border-dashed border-logo-teal/30 flex flex-col items-center justify-center space-y-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-logo-teal to-logo-teal/80 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                    {/* <Users className="w-10 h-10 text-white" /> */}
                    <img src={imageConstants.ABOUT.ERA} className='className="w-10'/>
                  </div>
                  <div className="text-center">
                    <div className="font-header font-semibold text-lg text-logo-teal mb-2">
                      {/* Founder Photo */}
                    </div>
                    <div className="font-body text-sm text-muted-foreground max-w-xs">
                      Era Chaturvedi, Founder & CEO, Say Space
                    </div>
                  </div>
                </div>

                {/* Founder Quote */}
                <div className="bg-gradient-to-br from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-logo-teal to-logo-teal/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-header font-bold text-white text-lg">SP</span>
                    </div>
                    <div>
                      <blockquote className="font-body text-sm text-muted-foreground italic mb-2">
                        "Leveraging India's talent ecosystem to create world-class capability centers that drive global business transformation."
                      </blockquote>
                      <div className="font-header font-medium text-sm text-foreground">
                        Era Chaturvedi
                      </div>
                      <div className="font-body text-xs text-muted-foreground">
                        Founder & CEO, Say Space
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-card to-dividers/10 border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-header font-bold text-2xl text-foreground mb-3">
                  {highlight.title}
                </h3>
                
                <p className="font-body text-lg text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurStory;