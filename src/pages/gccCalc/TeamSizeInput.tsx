/* eslint-disable @typescript-eslint/no-explicit-any */

import { Users } from "lucide-react";

export const TeamSizeInput = ({ teamSize, onTeamSizeChange, growthPlan, onGrowthPlanChange } : any) => {
  const growthPlans = [
    { value: 'conservative', label: 'Conservative (10% annual)' },
    { value: 'moderate', label: 'Moderate (25% annual)' },
    { value: 'aggressive', label: 'Aggressive (50%+ annual)' }
  ];

  return (
    <div className="bg-background border border-dividers rounded-2xl p-6">
      <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
        <Users className="w-5 h-5 text-logo-teal mr-2" />
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
