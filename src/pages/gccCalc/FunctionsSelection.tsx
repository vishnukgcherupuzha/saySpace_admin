/* eslint-disable @typescript-eslint/no-explicit-any */
import { Building2, CheckCircle2 } from 'lucide-react';

const FunctionsSelection = ({ selectedFunctions, onFunctionToggle }: any) => {
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
        <Building2 className="w-5 h-5 text-cta-coral mr-2" />
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
              <CheckCircle2 className={`w-5 h-5 mr-3 ${
                selectedFunctions.includes(func) ? 'text-cta-coral' : 'text-dividers'
              }`} />
              <span className="font-body text-sm font-medium">{func}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FunctionsSelection