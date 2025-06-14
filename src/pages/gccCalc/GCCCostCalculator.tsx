import React, { useState } from 'react';
import { Calculator, FileText, Phone, Target } from 'lucide-react';

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
    <div className="bg-background border border-dividers rounded-2xl p-6">
      <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-logo-teal mr-2" />
        GCC Scale
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block font-body font-medium text-foreground mb-2">
            Initial Team Size *
          </label>
          <input
            type="number"
            min="1"
            max="1000"
            value={teamSize}
            onChange={(e) => onTeamSizeChange(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
            placeholder="e.g., 50"
          />
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-3">
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
                <div className={`p-4 border rounded-xl text-center transition-all duration-200 ${
                  growthPlan === plan.value
                    ? 'border-logo-teal bg-logo-teal/10 text-logo-teal'
                    : 'border-dividers hover:border-muted-foreground'
                }`}>
                  <span className="font-body text-sm font-medium">{plan.label}</span>
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
    <div className="bg-background border border-dividers rounded-2xl p-6">
      <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-cta-coral mr-2" />
        GCC Functions
      </h3>
      
      <p className="font-body text-muted-foreground mb-4">
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
            <div className={`p-4 border rounded-xl transition-all duration-200 flex items-center ${
              selectedFunctions.includes(func)
                ? 'border-cta-coral bg-cta-coral/10 text-cta-coral'
                : 'border-dividers hover:border-muted-foreground'
            }`}>
              <div className={`w-5 h-5 mr-3 rounded ${
                selectedFunctions.includes(func) ? 'bg-cta-coral' : 'bg-dividers'
              }`} />
              <span className="font-body text-sm font-medium">{func}</span>
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
    <div className="bg-background border border-dividers rounded-2xl p-6">
      <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-logo-beige mr-2" />
        Infrastructure Requirements
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block font-body font-medium text-foreground mb-3">
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
                <div className={`p-4 border rounded-xl text-center transition-all duration-200 ${
                  officeType === type.value
                    ? 'border-logo-beige bg-logo-beige/10 text-logo-beige'
                    : 'border-dividers hover:border-muted-foreground'
                }`}>
                  <span className="font-body text-sm font-medium">{type.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-3">
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
                <div className={`p-4 border rounded-xl text-center transition-all duration-200 ${
                  location === loc.value
                    ? 'border-logo-teal bg-logo-teal/10 text-logo-teal'
                    : 'border-dividers hover:border-muted-foreground'
                }`}>
                  <span className="font-body text-sm font-medium">{loc.label}</span>
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
    <div className="bg-background border border-dividers rounded-2xl p-6">
      <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
        <Calculator className="w-5 h-5 text-logo-teal mr-2" />
        Setup Timeline
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block font-body font-medium text-foreground mb-3">
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
                <div className={`p-4 border rounded-xl text-center transition-all duration-200 ${
                  timeline === time.value
                    ? 'border-logo-teal bg-logo-teal/10 text-logo-teal'
                    : 'border-dividers hover:border-muted-foreground'
                }`}>
                  <span className="font-body text-sm font-medium">{time.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-body font-medium text-foreground mb-3">
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
                <div className={`p-4 border rounded-xl text-center transition-all duration-200 ${
                  services === service.value
                    ? 'border-cta-coral bg-cta-coral/10 text-cta-coral'
                    : 'border-dividers hover:border-muted-foreground'
                }`}>
                  <span className="font-body text-sm font-medium">{service.label}</span>
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
  return (
    <div className="space-y-8">
      
      {/* What's Included */}
      <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
        <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
          <Calculator className="w-5 h-5 text-logo-teal mr-2" />
          What's Included
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-header font-semibold text-foreground mb-3">Setup Costs</h4>
            <ul className="space-y-2">
              {[
                'Entity formation and registration',
                'Office space design and fit-out',
                'IT infrastructure and systems',
                'Initial talent acquisition',
                'Legal and compliance setup'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-logo-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-header font-semibold text-foreground mb-3">Operating Costs</h4>
            <ul className="space-y-2">
              {[
                'Office lease and maintenance',
                'Employee salaries and benefits',
                'IT and communication services',
                'Administrative support',
                'Ongoing compliance management'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-cta-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="font-body text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Did You Know */}
      <div className="bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-2xl p-8">
        <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
          <Calculator className="w-5 h-5 text-cta-coral mr-2" />
          Did You Know?
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-5 h-5 text-logo-teal mt-0.5 mr-3 flex-shrink-0 bg-logo-teal rounded"></div>
            <p className="font-body text-sm text-muted-foreground">
              Companies can achieve <strong className="text-foreground">30-40% cost savings</strong> by establishing their GCC in Bangalore compared to Western locations.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-5 h-5 text-cta-coral mt-0.5 mr-3 flex-shrink-0 bg-cta-coral rounded"></div>
            <p className="font-body text-sm text-muted-foreground">
              Bangalore offers <strong className="text-foreground">15-20% lower operational costs</strong> than other major Indian cities like Mumbai or Delhi.
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-5 h-5 text-logo-beige mt-0.5 mr-3 flex-shrink-0 bg-logo-beige rounded"></div>
            <p className="font-body text-sm text-muted-foreground">
              The average time to achieve full operational capability for a GCC in Bangalore is <strong className="text-foreground">3-6 months</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg text-center">
        <h3 className="font-header font-bold text-xl text-foreground mb-4">
          Need a Detailed Assessment?
        </h3>
        <p className="font-body text-muted-foreground mb-6">
          Our GCC experts can provide a comprehensive cost analysis tailored to your specific requirements.
        </p>
        <button className="w-full flex items-center justify-center px-6 py-3 bg-cta-coral text-white font-header font-medium rounded-xl hover:bg-cta-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl">
          <Phone className="w-4 h-4 mr-2" />
          Contact Our Team
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
    <section className="py-20 bg-dividers/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Your GCC <span className="text-logo-teal">Cost Estimate</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Based on your requirements for a {teamSize}-person GCC in Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Setup Costs */}
          <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="bg-logo-teal rounded-full p-4 w-fit mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-header font-bold text-xl text-foreground mb-2">Setup Costs</h3>
              <div className="font-header font-bold text-3xl text-logo-teal">
                {formatCurrency(estimate.setupCosts.total)}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Entity Formation</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.setupCosts.entity)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Office Setup</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.setupCosts.office)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">IT Infrastructure</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.setupCosts.infrastructure)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Talent Acquisition</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.setupCosts.talent)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Legal & Compliance</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.setupCosts.legal)}</span>
              </div>
            </div>
          </div>

          {/* Operating Costs */}
          <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="bg-cta-coral rounded-full p-4 w-fit mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-header font-bold text-xl text-foreground mb-2">Annual Operating</h3>
              <div className="font-header font-bold text-3xl text-cta-coral">
                {formatCurrency(estimate.operatingCosts.total)}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Salaries & Benefits</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.operatingCosts.salaries)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Office Lease</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.operatingCosts.office)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">IT Services</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.operatingCosts.infrastructure)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Administration</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.operatingCosts.admin)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm text-muted-foreground">Compliance</span>
                <span className="font-body text-sm font-medium text-foreground">{formatCurrency(estimate.operatingCosts.compliance)}</span>
              </div>
            </div>
          </div>

          {/* Total Investment */}
          <div className="bg-gradient-to-br from-logo-teal to-cta-coral text-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="bg-white/20 rounded-full p-4 w-fit mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-header font-bold text-xl mb-2">Total First Year</h3>
              <div className="font-header font-bold text-4xl">
                {formatCurrency(estimate.totalFirstYear)}
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-body text-sm opacity-90 mb-4">
                This includes all setup costs plus first year operations
              </p>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-body text-xs opacity-75 mb-1">Monthly Operating Cost</div>
                <div className="font-header font-bold text-lg">
                  {formatCurrency(estimate.operatingCosts.total / 12)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <Calculator className="w-5 h-5 text-logo-teal mr-2" />
            <span className="font-header font-semibold text-foreground">Important Note</span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            This is an indicative estimate based on typical market rates and your inputs. Actual costs may vary based on specific requirements, market conditions, and negotiated rates.
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Calculator Component
const GCCCostCalculator: React.FC = () => {
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
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-dividers rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="mb-8">
                  <h2 className="font-header font-bold text-3xl text-foreground mb-4">
                    Estimate Your GCC Costs
                  </h2>
                  <p className="font-body text-muted-foreground">
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
                    className={`w-full flex items-center justify-center px-8 py-4 font-header font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl ${
                      isFormValid
                        ? 'bg-logo-teal text-white hover:bg-logo-teal/90'
                        : 'bg-dividers text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate Estimate
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
      <section className="py-20 bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border-t border-dividers">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-dividers rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-cta-coral mr-3" />
              <span className="font-header font-bold text-2xl text-foreground">
                Ready for a Personalized Cost Analysis?
              </span>
            </div>
            
            <h3 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-6">
              Get a Detailed Cost Breakdown
            </h3>
            
            <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our GCC experts can provide a detailed cost breakdown and ROI projection tailored to your specific business requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-logo-teal text-white font-header font-bold rounded-xl hover:bg-logo-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl">
                <FileText className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cta-coral text-cta-coral font-header font-bold rounded-xl hover:bg-cta-coral hover:text-white transition-all duration-200">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GCCCostCalculator;