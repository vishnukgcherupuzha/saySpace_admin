import { Home, ArrowRight, AlertCircle } from 'lucide-react';

const Error = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-logo-teal/3 to-transparent"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        
        {/* Professional Badge */}
        <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-8">
          <AlertCircle className="w-4 h-4 mr-2" />
          PAGE NOT FOUND
        </div>

        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[120px] sm:text-[150px] lg:text-[180px] font-light text-gray-900 leading-none">
            404
          </span>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight tracking-tight">
            Page <span className="font-semibold text-logo-teal">Not Found</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed font-light">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
            >
              <Home className="w-5 h-5 mr-3" />
              Go Home
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;