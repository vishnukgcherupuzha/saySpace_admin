import { 
  Calculator, 
} from 'lucide-react';

// Hero Component
const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-logo-teal to-cta-coral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-8 h-8 mr-3" />
            <span className="font-body text-lg font-medium uppercase tracking-wide">
              GCC Cost Calculator
            </span>
          </div>
          
          <h1 className="font-header font-bold text-5xl lg:text-7xl mb-6">
            Estimate Your
            <span className="block text-logo-beige">GCC Investment</span>
          </h1>
          
          <p className="font-body text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Get a preliminary cost estimate for establishing and operating your Global Capability Center in Bangalore with our interactive calculator.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;