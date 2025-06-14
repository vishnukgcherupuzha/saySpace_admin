import { MapPin } from 'lucide-react';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfrastructureSelection = ({ officeType, onOfficeTypeChange, location, onLocationChange }: any) => {
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
        <MapPin className="w-5 h-5 text-logo-beige mr-2" />
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

export default InfrastructureSelection