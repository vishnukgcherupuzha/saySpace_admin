/* eslint-disable @typescript-eslint/no-explicit-any */

import { Building2, DollarSign, Info, TrendingUp } from "lucide-react";

const ResultsDisplay = ({ estimate, teamSize } : any ) => {
  const formatCurrency = (amount: any) => {
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
                <Building2 className="w-8 h-8 text-white" />
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
                <TrendingUp className="w-8 h-8 text-white" />
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
                <DollarSign className="w-8 h-8 text-white" />
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
            <Info className="w-5 h-5 text-logo-teal mr-2" />
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


export default ResultsDisplay