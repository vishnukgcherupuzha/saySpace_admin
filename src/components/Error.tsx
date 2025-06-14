
import { Home, ArrowRight } from 'lucide-react';

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-logo-teal/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cta-coral/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        
        {/* 404 Number */}
        <div className="mb-8">
          <span className="font-header font-black text-[120px] sm:text-[150px] lg:text-[180px] leading-none bg-gradient-to-r from-logo-teal to-cta-coral bg-clip-text text-transparent">
            404
          </span>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-12">
          <h1 className="font-header font-bold text-3xl sm:text-4xl text-foreground">
            Page Not Found
          </h1>
          
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Home Button */}
        <a
          href="/"
          className="group inline-flex items-center bg-gradient-to-r from-cta-coral to-cta-coral/90 hover:from-cta-coral/90 hover:to-cta-coral text-white px-8 py-4 rounded-xl font-header font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-cta-coral/25 transform hover:-translate-y-1"
        >
          <Home className="w-5 h-5 mr-3" />
          Go Home
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Error;