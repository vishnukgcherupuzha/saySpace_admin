import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, FileText, Phone, Target, ArrowRight } from 'lucide-react';
import PopoverForm from '../../components/PopoverForm';

// Type definitions
interface CalculatorData {
  teamSize: number;
  growthPlan: string;
  functions: string[];
  officeType: string;
  location: string;
  timeline: string;
  services: string;
}

interface CostEstimate {
  setupCosts: {
    entity: number;
    office: number;
    infrastructure: number;
    talent: number;
    legal: number;
    total: number;
  };
  operatingCosts: {
    salaries: number;
    office: number;
    infrastructure: number;
    admin: number;
    compliance: number;
    total: number;
  };
  totalFirstYear: number;
}

interface TeamSizeInputProps {
  teamSize: number;
  onTeamSizeChange: (size: number) => void;
  growthPlan: string;
  onGrowthPlanChange: (plan: string) => void;
}

interface FunctionsSelectionProps {
  selectedFunctions: string[];
  onFunctionToggle: (func: string) => void;
}

interface InfrastructureSelectionProps {
  officeType: string;
  onOfficeTypeChange: (type: string) => void;
  location: string;
  onLocationChange: (location: string) => void;
}

interface TimelineSelectionProps {
  timeline: string;
  onTimelineChange: (timeline: string) => void;
  services: string;
  onServicesChange: (services: string) => void;
}

interface ResultsDisplayProps {
  estimate: CostEstimate | null;
  teamSize: number;
}

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-logo-teal/3 to-transparent"></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-24 text-center">
          
          {/* Professional Badge */}
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            GCC COST CALCULATOR
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight mb-6">
            Estimate Your
            <br />
            <span className="font-semibold text-logo-teal">GCC Investment</span>
          </h1>
          
          {/* Professional Subtitle */}
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light mb-8">
            Get a preliminary cost estimate for establishing and operating your Global Capability Center in India's premier business destination.
          </p>

          {/* Key Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-logo-teal/10 mx-auto mb-3 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-logo-teal" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Instant Estimates</h3>
              <p className="text-gray-600 text-xs font-light">Real-time cost calculations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cta-coral/10 mx-auto mb-3 flex items-center justify-center">
                <Target className="w-6 h-6 text-cta-coral" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Accurate Projections</h3>
              <p className="text-gray-600 text-xs font-light">Market-based pricing data</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 mx-auto mb-3 flex items-center justify-center">
                <FileText className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Detailed Breakdown</h3>
              <p className="text-gray-600 text-xs font-light">Comprehensive cost analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Size Input Component
const TeamSizeInput: React.FC<TeamSizeInputProps> = ({ 
  teamSize, 
  onTeamSizeChange, 
  growthPlan, 
  onGrowthPlanChange 
}) => {
  const growthPlans = [
    { value: 'conservative', label: 'Conservative (10% annual)' },
    { value: 'moderate', label: 'Moderate (25% annual)' },
    { value: 'aggressive', label: 'Aggressive (50%+ annual)' }
  ];

  return (
    <div className="bg-white border border-gray-200 p-6 lg:p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-logo-teal mr-2" />
        GCC Scale
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block font-medium text-gray-900 mb-2">
            Initial Team Size *
          </label>
          <input
            type="number"
            min="1"
            max="1000"
            value={teamSize}
            onChange={(e) => onTeamSizeChange(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
            placeholder="e.g., 50"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-900 mb-3">
            Growth Plan
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {growthPlans.map((plan) => (
              <label key={plan.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="growthPlan"
                  value={plan.value}
                  checked={growthPlan === plan.value}
                  onChange={(e) => onGrowthPlanChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 border text-center transition-all duration-200 ${
                  growthPlan === plan.value
                    ? 'border-logo-teal bg-logo-teal/5 text-logo-teal'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}>
                  <span className="text-sm font-medium">{plan.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Functions Selection Component
const FunctionsSelection: React.FC<FunctionsSelectionProps> = ({ 
  selectedFunctions, 
  onFunctionToggle 
}) => {
  const functions = [
    'IT & Software Development',
    'Engineering & R&D',
    'Finance & Accounting',
    'HR & Recruitment',
    'Customer Support',
    'Data & Analytics'
  ];

  return (
    <div className="bg-white border border-gray-200 p-6 lg:p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-cta-coral mr-2" />
        GCC Functions
      </h3>
      
      <p className="text-gray-600 font-light mb-4">
        Select all functions that will be part of your GCC
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {functions.map((func) => (
          <label key={func} className="cursor-pointer">
            <input
              type="checkbox"
              checked={selectedFunctions.includes(func)}
              onChange={() => onFunctionToggle(func)}
              className="sr-only"
            />
            <div className={`p-4 border transition-all duration-200 flex items-center ${
              selectedFunctions.includes(func)
                ? 'border-cta-coral bg-cta-coral/5 text-cta-coral'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
            }`}>
              <div className={`w-5 h-5 mr-3 ${
                selectedFunctions.includes(func) ? 'bg-cta-coral' : 'bg-gray-200'
              }`} />
              <span className="text-sm font-medium">{func}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

// Infrastructure Selection Component
const InfrastructureSelection: React.FC<InfrastructureSelectionProps> = ({ 
  officeType, 
  onOfficeTypeChange, 
  location, 
  onLocationChange 
}) => {
  const officeTypes = [
    { value: 'standard', label: 'Standard Office Space' },
    { value: 'premium', label: 'Premium IT Park' },
    { value: 'luxury', label: 'Luxury Grade A+ Office' }
  ];

  const locations = [
    { value: 'electronic-city', label: 'Electronic City' },
    { value: 'whitefield', label: 'Whitefield IT Hub' },
    { value: 'koramangala', label: 'Koramangala' },
    { value: 'central-bangalore', label: 'Central Bangalore' }
  ];

  return (
    <div className="bg-white border border-gray-200 p-6 lg:p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-gray-600 mr-2" />
        Infrastructure Requirements
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block font-medium text-gray-900 mb-3">
            Office Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {officeTypes.map((type) => (
              <label key={type.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="officeType"
                  value={type.value}
                  checked={officeType === type.value}
                  onChange={(e) => onOfficeTypeChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 border text-center transition-all duration-200 ${
                  officeType === type.value
                    ? 'border-logo-teal bg-logo-teal/5 text-logo-teal'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}>
                  <span className="text-sm font-medium">{type.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-900 mb-3">
            Location Preference
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {locations.map((loc) => (
              <label key={loc.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="location"
                  value={loc.value}
                  checked={location === loc.value}
                  onChange={(e) => onLocationChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 border text-center transition-all duration-200 ${
                  location === loc.value
                    ? 'border-logo-teal bg-logo-teal/5 text-logo-teal'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}>
                  <span className="text-sm font-medium">{loc.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Timeline Selection Component
const TimelineSelection: React.FC<TimelineSelectionProps> = ({ 
  timeline, 
  onTimelineChange, 
  services, 
  onServicesChange 
}) => {
  const timelines = [
    { value: 'standard', label: 'Standard (3-6 months)' },
    { value: 'expedited', label: 'Expedited (2-3 months)' },
    { value: 'urgent', label: 'Urgent (1-2 months)' }
  ];

  const serviceTypes = [
    { value: 'basic', label: 'Basic (Setup Only)' },
    { value: 'standard', label: 'Standard (Setup + Initial Operations)' },
    { value: 'comprehensive', label: 'Comprehensive (Full Managed Services)' }
  ];

  return (
    <div className="bg-white border border-gray-200 p-6 lg:p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-logo-teal mr-2" />
        Setup Timeline
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block font-medium text-gray-900 mb-3">
            Desired Timeframe
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {timelines.map((time) => (
              <label key={time.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="timeline"
                  value={time.value}
                  checked={timeline === time.value}
                  onChange={(e) => onTimelineChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 border text-center transition-all duration-200 ${
                  timeline === time.value
                    ? 'border-logo-teal bg-logo-teal/5 text-logo-teal'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}>
                  <span className="text-sm font-medium">{time.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-900 mb-3">
            Services Required
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {serviceTypes.map((service) => (
              <label key={service.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="services"
                  value={service.value}
                  checked={services === service.value}
                  onChange={(e) => onServicesChange(e.target.value)}
                  className="sr-only"
                />
                <div className={`p-4 border text-center transition-all duration-200 ${
                  services === service.value
                    ? 'border-cta-coral bg-cta-coral/5 text-cta-coral'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}>
                  <span className="text-sm font-medium">{service.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Information Sidebar Component
const InformationSidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">
      
      {/* What's Included */}
      <div className="bg-white border border-gray-200 p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Calculator className="w-5 h-5 text-logo-teal mr-2" />
          What's Included
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Setup Costs</h4>
            <ul className="space-y-2">
              {[
                'Entity formation and registration',
                'Office space design and fit-out',
                'IT infrastructure and systems',
                'Initial talent acquisition',
                'Legal and compliance setup'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-logo-teal mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Operating Costs</h4>
            <ul className="space-y-2">
              {[
                'Office lease and maintenance',
                'Employee salaries and benefits',
                'IT and communication services',
                'Administrative support',
                'Ongoing compliance management'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-cta-coral mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-white border border-gray-200 p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Calculator className="w-5 h-5 text-cta-coral mr-2" />
          Key Benefits
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-5 h-5 bg-logo-teal mt-0.5 mr-3 flex-shrink-0"></div>
            <p className="text-sm text-gray-600 font-light">
              Companies can achieve <strong className="text-gray-900">30-40% cost savings</strong> by establishing their GCC in Bangalore compared to Western locations.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-5 h-5 bg-cta-coral mt-0.5 mr-3 flex-shrink-0"></div>
            <p className="text-sm text-gray-600 font-light">
              Bangalore offers <strong className="text-gray-900">15-20% lower operational costs</strong> than other major Indian cities like Mumbai or Delhi.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-5 h-5 bg-gray-400 mt-0.5 mr-3 flex-shrink-0"></div>
            <p className="text-sm text-gray-600 font-light">
              The average time to achieve full operational capability for a GCC in Bangalore is <strong className="text-gray-900">3-6 months</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-white border border-gray-200 p-8 shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Need a Detailed Assessment?
        </h3>
        <p className="text-gray-600 font-light mb-6">
          Our GCC experts can provide a comprehensive cost analysis tailored to your specific requirements.
        </p>
        <button 
          onClick={() => navigate('/contact#contact-form')}
          className="cursor-pointer group w-full bg-cta-coral hover:bg-cta-coral/90 text-white px-6 py-3 font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
        >
          <Phone className="w-4 h-4 mr-2" />
          Contact Our Team
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

// Results Display Component
const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ estimate, teamSize }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (!estimate) return null;

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Your GCC <span className="font-semibold text-logo-teal">Cost Estimate</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 font-light">
            Based on your requirements for a {teamSize}-person GCC in Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Setup Costs */}
          <div className="bg-white border border-gray-200 p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="bg-logo-teal p-4 w-fit mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Setup Costs</h3>
              <div className="text-3xl font-light text-logo-teal">
                {formatCurrency(estimate.setupCosts.total)}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Entity Formation</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.setupCosts.entity)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Office Setup</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.setupCosts.office)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">IT Infrastructure</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.setupCosts.infrastructure)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Talent Acquisition</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.setupCosts.talent)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Legal & Compliance</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.setupCosts.legal)}</span>
              </div>
            </div>
          </div>

          {/* Operating Costs */}
          <div className="bg-white border border-gray-200 p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="bg-cta-coral p-4 w-fit mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Operating</h3>
              <div className="text-3xl font-light text-cta-coral">
                {formatCurrency(estimate.operatingCosts.total)}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Salaries & Benefits</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.operatingCosts.salaries)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Office Lease</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.operatingCosts.office)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">IT Services</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.operatingCosts.infrastructure)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Administration</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.operatingCosts.admin)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Compliance</span>
                <span className="text-sm font-medium text-gray-900">{formatCurrency(estimate.operatingCosts.compliance)}</span>
              </div>
            </div>
          </div>

          {/* Total Investment */}
          <div className="bg-logo-teal text-white p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="bg-white/20 p-4 w-fit mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Total First Year</h3>
              <div className="text-4xl font-light">
                {formatCurrency(estimate.totalFirstYear)}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm opacity-90 mb-4">
                This includes all setup costs plus first year operations
              </p>
              <div className="bg-white/10 p-3">
                <div className="text-xs opacity-75 mb-1">Monthly Operating Cost</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(estimate.operatingCosts.total / 12)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white border border-gray-200 p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <Calculator className="w-5 h-5 text-logo-teal mr-2" />
            <span className="font-semibold text-gray-900">Important Note</span>
          </div>
          <p className="text-sm text-gray-600 font-light">
            This is an indicative estimate based on typical market rates and your inputs. Actual costs may vary based on specific requirements, market conditions, and negotiated rates.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Calculator Component
const GCCCostCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    teamSize: 50,
    growthPlan: '',
    functions: [],
    officeType: '',
    location: '',
    timeline: '',
    services: ''
  });

  const [estimate, setEstimate] = useState<CostEstimate | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleFunctionToggle = (func: string): void => {
    setCalculatorData(prev => ({
      ...prev,
      functions: prev.functions.includes(func)
        ? prev.functions.filter(f => f !== func)
        : [...prev.functions, func]
    }));
  };

  const calculateEstimate = (): void => {
    const { teamSize, functions, officeType, location, timeline, services } = calculatorData;
    
    // Base costs (in USD)
    const baseCosts = {
      entitySetup: 15000,
      officePerSeat: 500,
      infrastructurePerSeat: 800,
      talentAcquisition: teamSize * 300,
      legalSetup: 25000,
      salaryPerEmployee: 25000,
      officeLeasePerSeat: 2400,
      infrastructurePerSeatAnnual: 1200,
      adminPerEmployee: 1500,
      complianceBase: 15000
    };

    // Multipliers with proper typing
    const officeMultipliers: Record<string, number> = { 
      standard: 1.0, 
      premium: 1.3, 
      luxury: 1.6 
    };
    const locationMultipliers: Record<string, number> = { 
      'electronic-city': 0.9, 
      'whitefield': 1.0, 
      'koramangala': 1.2, 
      'central-bangalore': 1.4 
    };
    const timelineMultipliers: Record<string, number> = { 
      standard: 1.0, 
      expedited: 1.2, 
      urgent: 1.5 
    };
    const serviceMultipliers: Record<string, number> = { 
      basic: 1.0, 
      standard: 1.3, 
      comprehensive: 1.6 
    };

    const officeMultiplier = officeMultipliers[officeType] || 1.0;
    const locationMultiplier = locationMultipliers[location] || 1.0;
    const timelineMultiplier = timelineMultipliers[timeline] || 1.0;
    const serviceMultiplier = serviceMultipliers[services] || 1.0;
    const functionMultiplier = 1 + (functions.length * 0.1);

    // Calculate setup costs
    const setupCosts = {
      entity: Math.round(baseCosts.entitySetup * timelineMultiplier),
      office: Math.round(baseCosts.officePerSeat * teamSize * officeMultiplier * locationMultiplier),
      infrastructure: Math.round(baseCosts.infrastructurePerSeat * teamSize * functionMultiplier),
      talent: Math.round(baseCosts.talentAcquisition * timelineMultiplier),
      legal: Math.round(baseCosts.legalSetup * timelineMultiplier),
      total: 0
    };
    setupCosts.total = setupCosts.entity + setupCosts.office + setupCosts.infrastructure + setupCosts.talent + setupCosts.legal;

    // Calculate operating costs (annual)
    const operatingCosts = {
      salaries: Math.round(baseCosts.salaryPerEmployee * teamSize * functionMultiplier * locationMultiplier),
      office: Math.round(baseCosts.officeLeasePerSeat * teamSize * officeMultiplier * locationMultiplier),
      infrastructure: Math.round(baseCosts.infrastructurePerSeatAnnual * teamSize * functionMultiplier),
      admin: Math.round(baseCosts.adminPerEmployee * teamSize * serviceMultiplier),
      compliance: Math.round(baseCosts.complianceBase * functionMultiplier),
      total: 0
    };
    operatingCosts.total = operatingCosts.salaries + operatingCosts.office + operatingCosts.infrastructure + operatingCosts.admin + operatingCosts.compliance;

    const totalFirstYear = setupCosts.total + operatingCosts.total;

    setEstimate({
      setupCosts,
      operatingCosts,
      totalFirstYear
    });
    setShowResults(true);
  };

  const isFormValid: boolean = calculatorData.teamSize > 0 && 
                              calculatorData.functions.length > 0 && 
                              calculatorData.officeType !== '' && 
                              calculatorData.location !== '';

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-8 lg:p-12 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
                    Calculate the Costs of Setting Up Your <span className="font-semibold text-logo-teal">Global Capability Center</span>
                  </h2>
                  <p className="text-gray-600 font-light">
                    Fill in the details below to get a preliminary cost estimate for setting up and operating your GCC in Bangalore.
                  </p>
                </div>

                <div className="space-y-8">
                  <TeamSizeInput 
                    teamSize={calculatorData.teamSize}
                    onTeamSizeChange={(size: number) => setCalculatorData(prev => ({ ...prev, teamSize: size }))}
                    growthPlan={calculatorData.growthPlan}
                    onGrowthPlanChange={(plan: string) => setCalculatorData(prev => ({ ...prev, growthPlan: plan }))}
                  />
                  
                  <FunctionsSelection 
                    selectedFunctions={calculatorData.functions}
                    onFunctionToggle={handleFunctionToggle}
                  />
                  
                  <InfrastructureSelection 
                    officeType={calculatorData.officeType}
                    onOfficeTypeChange={(type: string) => setCalculatorData(prev => ({ ...prev, officeType: type }))}
                    location={calculatorData.location}
                    onLocationChange={(loc: string) => setCalculatorData(prev => ({ ...prev, location: loc }))}
                  />
                  
                  <TimelineSelection 
                    timeline={calculatorData.timeline}
                    onTimelineChange={(time: string) => setCalculatorData(prev => ({ ...prev, timeline: time }))}
                    services={calculatorData.services}
                    onServicesChange={(service: string) => setCalculatorData(prev => ({ ...prev, services: service }))}
                  />

                  {/* Calculate Button */}
                  <button
                    onClick={calculateEstimate}
                    disabled={!isFormValid}
                    className={`w-full flex items-center justify-center px-8 py-4 font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                      isFormValid
                        ? 'bg-cta-coral hover:bg-cta-coral/90 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Estimate
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <InformationSidebar />
          </div>
        </div>
      </section>

      {showResults && (
        <ResultsDisplay 
          estimate={estimate} 
          teamSize={calculatorData.teamSize} 
        />
      )}

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 p-8 lg:p-12 shadow-xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-cta-coral mr-3" />
              <span className="text-2xl font-semibold text-gray-900">
                Ready for a Personalized Cost Analysis?
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Get a Detailed <span className="font-semibold text-logo-teal">Cost Breakdown</span>
            </h3>
            
            <p className="text-lg lg:text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
              Our GCC experts can provide a detailed cost breakdown and ROI projection tailored to your specific business requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PopoverForm
                title="Schedule a Consultation"
                subtitle="Share your GCC requirements and let's discuss how we can help you achieve your goals."
                submitButtonText="Schedule Consultation"
                successMessage="Thank you! We'll contact you soon to schedule your consultation."
              >
                <button className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md">
                  <FileText className="w-5 h-5 mr-3" />
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </PopoverForm>
              <button 
                onClick={() => navigate('/contact#contact-form')}
                className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5"
              >
                <Phone className="w-5 h-5 mr-3" />
                Contact Us
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GCCCostCalculator;