import { ArrowRight, Building2, Users } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-logo-teal/20 to-logo-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cta-coral/15 to-logo-beige/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-dividers/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center min-h-[90vh]">
          
          {/* Content Side */}
          <div className="space-y-8 flex flex-col justify-center items-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-logo-beige/20 backdrop-blur-sm border border-logo-beige/40 rounded-full">
              <Building2 className="w-4 h-4 text-logo-teal mr-2" />
              <span className="font-body text-sm font-medium text-logo-teal">
                About Say space
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-6 w-full text-center flex flex-col justify-center items-center">
              <h1 className="font-header font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight">
                <span className="bg-gradient-to-r from-logo-teal to-logo-teal bg-clip-text text-transparent">
                  Architecting
                </span>{' '}
                Global<br />
                Capability Centers
              </h1>
              
              {/* Subtitle */}
                <p className="font-body text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                We are Pune's premier GCC Consulting & IT Services Organization, dedicated to helping global companies establish and optimize successful capability centers in India's innovation hub.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 rounded-xl font-header font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cta-coral/25 transform hover:-translate-y-1 flex items-center justify-center">
                <Building2 className="w-5 h-5 mr-3" />
                Start Your GCC Journey
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group border-2 border-logo-teal text-logo-teal hover:bg-logo-teal hover:text-white px-8 py-4 rounded-xl font-header font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                <Users className="w-5 h-5 mr-3" />
                Meet Our Team
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;