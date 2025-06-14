/* eslint-disable @typescript-eslint/no-explicit-any */
import { Clock } from 'lucide-react';


const TimelineSelection = ({ timeline, onTimelineChange, services, onServicesChange }: any) => {
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
        <Clock className="w-5 h-5 text-logo-teal mr-2" />
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

export default TimelineSelection