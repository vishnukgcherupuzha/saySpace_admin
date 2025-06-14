/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingDown, 
  Wind, 
  Building2, 
  Car,
  CheckCircle,
  Info,
  Star,
  MapPin,
  BarChart2,
  BarChart2Icon
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Type definitions
interface City {
  name: string;
  color: string;
  textColor: string;
}

interface ComparisonParameter {
  parameter: string;
  icon: React.ComponentType<{ className?: string }>;
  data: string[];
  better: 'higher' | 'lower';
  unit: string;
}

interface QualitativeCity {
  city: string;
  pros: string[];
  cons: string[];
  score: number;
  ecosystem: number;
  infrastructure: number;
  talent: number;
  cost: number;
  quality: number;
}

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CityComparison = () => {
  const [activeTab, setActiveTab] = useState('quantitative');

  const cities: City[] = [
    { name: 'Bangalore', color: 'bg-logo-teal', textColor: 'text-logo-teal' },
    { name: 'Hyderabad', color: 'bg-cta-coral', textColor: 'text-cta-coral' },
    { name: 'Delhi NCR', color: 'bg-logo-beige', textColor: 'text-logo-beige' },
    { name: 'Mumbai', color: 'bg-logo-teal/80', textColor: 'text-logo-teal' },
    { name: 'Chennai', color: 'bg-cta-coral/80', textColor: 'text-cta-coral' },
    { name: 'Pune', color: 'bg-logo-beige/80', textColor: 'text-logo-beige' }
  ];

  const comparisonData: ComparisonParameter[] = [
    {
      parameter: 'Tech Talent Pool Size',
      icon: Users,
      data: ['5.1M+', '3.8M+', '4.5M+', '4.8M+', '3.5M+', '4.2M+'],
      better: 'higher',
      unit: ''
    },
    {
      parameter: 'Annual Attrition Rate',
      icon: TrendingDown,
      data: ['18-22%', '16-18%', '19-23%', '18-21%', '15-17%', '14-16%'],
      better: 'lower',
      unit: '%'
    },
    {
      parameter: 'Air Quality Index (Avg.)',
      icon: Wind,
      data: ['95-110', '90-105', '150-200+', '120-160', '90-110', '85-95'],
      better: 'lower',
      unit: ''
    },
    {
      parameter: 'IT Parks & SEZs',
      icon: Building2,
      data: ['15+', '10+', '14+', '8+', '9+', '12+'],
      better: 'higher',
      unit: ''
    },
    {
      parameter: 'Active GCCs',
      icon: Building2,
      data: ['400+', '150+', '250+', '180+', '140+', '200+'],
      better: 'higher',
      unit: ''
    },
    {
      parameter: 'Traffic Congestion Index',
      icon: Car,
      data: ['62%', '45%', '58%', '65%', '48%', '42%'],
      better: 'lower',
      unit: '%'
    }
  ];

  const tabs: Tab[] = [
    { id: 'quantitative', label: 'Quantitative Metrics', icon: BarChart3 },
    { id: 'qualitative', label: 'Qualitative Analysis', icon: CheckCircle },
    { id: 'visual', label: 'Visual Comparison', icon: Building2 }
  ];

  const getBestValue = (data: string[], better: 'higher' | 'lower'): number => {
    if (better === 'lower') {
      return data.indexOf(data.reduce((min, current) => {
        const minVal = parseFloat(min.replace(/[^0-9.-]/g, ''));
        const currVal = parseFloat(current.replace(/[^0-9.-]/g, ''));
        return currVal < minVal ? current : min;
      }));
    } else {
      return data.indexOf(data.reduce((max, current) => {
        const maxVal = parseFloat(max.replace(/[^0-9.-]/g, ''));
        const currVal = parseFloat(current.replace(/[^0-9.-]/g, ''));
        return currVal > maxVal ? current : max;
      }));
    }
  };

  const qualitativeAnalysis: QualitativeCity[] = [
    {
      city: 'Bangalore',
      pros: ['Technology innovation hub', 'Largest talent pool', 'Established ecosystem', 'Strong startup culture', 'Global connectivity', 'R&D centers'],
      cons: ['Higher costs', 'Traffic congestion', 'Infrastructure strain', 'Water scarcity issues'],
      score: 85,
      ecosystem: 95,
      infrastructure: 70,
      talent: 95,
      cost: 60,
      quality: 75
    },
    {
      city: 'Hyderabad',
      pros: ['Government support', 'Modern infrastructure', 'Growing ecosystem', 'Better quality of life', 'Lower costs', 'HITEC City'],
      cons: ['Smaller talent pool', 'Limited public transport', 'Emerging ecosystem', 'Fewer MNCs'],
      score: 78,
      ecosystem: 75,
      infrastructure: 85,
      talent: 75,
      cost: 80,
      quality: 85
    },
    {
      city: 'Delhi NCR',
      pros: ['Government proximity', 'Large market', 'Financial hub', 'Good connectivity', 'Corporate headquarters', 'Policy influence'],
      cons: ['Air pollution', 'High costs', 'Complex regulations', 'Extreme weather'],
      score: 72,
      ecosystem: 80,
      infrastructure: 75,
      talent: 85,
      cost: 55,
      quality: 60
    },
    {
      city: 'Mumbai',
      pros: ['Financial capital', 'Strong infrastructure', 'Business environment', 'Global connectivity', 'Entertainment industry', 'Port access'],
      cons: ['Very high costs', 'Space constraints', 'Traffic issues', 'Monsoon disruptions'],
      score: 75,
      ecosystem: 80,
      infrastructure: 80,
      talent: 80,
      cost: 50,
      quality: 70
    },
    {
      city: 'Chennai',
      pros: ['Manufacturing hub', 'Port connectivity', 'Cultural stability', 'Government support', 'Automotive industry', 'Lower attrition'],
      cons: ['Limited tech ecosystem', 'Language barriers', 'Climate challenges', 'Fewer IT companies'],
      score: 70,
      ecosystem: 65,
      infrastructure: 75,
      talent: 70,
      cost: 75,
      quality: 80
    },
    {
      city: 'India',
      pros: ['Cost-effective', 'Quality of life', 'Educational institutions', 'Low attrition', 'Pleasant climate', 'Proximity to Mumbai'],
      cons: ['Smaller ecosystem', 'Limited infrastructure', 'Weather dependency', 'Fewer global companies'],
      score: 82,
      ecosystem: 70,
      infrastructure: 75,
      talent: 80,
      cost: 90,
      quality: 95
    }
  ];

  // Prepare chart data with your color palette
  const talentPoolData = cities.map((city, index) => ({
    name: city.name,
    value: parseFloat(comparisonData[0].data[index].replace(/[^0-9.]/g, '')),
    fill: index === 0 ? '#37474F' : index === 1 ? '#E07A5F' : index === 2 ? '#C9B29F' : index === 3 ? '#37474F' : index === 4 ? '#E07A5F' : '#C9B29F'
  }));

  const gccData = cities.map((city, index) => ({
    name: city.name,
    value: parseFloat(comparisonData[4].data[index].replace(/[^0-9.]/g, '')),
    fill: index === 0 ? '#37474F' : index === 1 ? '#E07A5F' : index === 2 ? '#C9B29F' : index === 3 ? '#37474F' : index === 4 ? '#E07A5F' : '#C9B29F'
  }));

  const radarData = qualitativeAnalysis.map(city => ({
    city: city.city,
    Ecosystem: city.ecosystem,
    Infrastructure: city.infrastructure,
    Talent: city.talent,
    Cost: city.cost,
    Quality: city.quality
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 border border-dividers rounded-lg shadow-lg">
          <p className="font-body font-medium text-foreground">{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-dividers/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-header font-bold text-4xl text-foreground mb-6">
            Bangalore vs. <span className="text-logo-teal">Other Indian Cities</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            A comprehensive comparison of key GCC factors across major Indian tech hubs
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-card border border-dividers rounded-2xl p-2 max-w-2xl mx-auto shadow-sm">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 rounded-xl font-header font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-logo-teal text-white shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quantitative Metrics Tab */}
        {activeTab === 'quantitative' && (
          <div className="space-y-8">
            
            {/* Comparison Table */}
            <div className="bg-card border border-dividers rounded-3xl overflow-hidden shadow-lg">
              
              {/* Table Header */}
              <div className="grid grid-cols-7 bg-gradient-to-r from-logo-teal to-cta-coral text-white p-4">
                <div className="font-header font-semibold text-sm lg:text-base">Parameter</div>
                {cities.map((city, index) => (
                  <div key={index} className="font-header font-semibold text-sm lg:text-base text-center">
                    {city.name}
                  </div>
                ))}
              </div>
              
              {/* Table Rows */}
              {comparisonData.map((row, rowIndex) => {
                const IconComponent = row.icon;
                const bestIndex = getBestValue(row.data, row.better);
                
                return (
                  <div key={rowIndex} className={`grid grid-cols-7 p-4 border-b border-dividers last:border-b-0 ${
                    rowIndex % 2 === 0 ? 'bg-background' : 'bg-dividers/20'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-logo-teal flex-shrink-0" />
                      <span className="font-body font-medium text-foreground text-sm">
                        {row.parameter}
                      </span>
                    </div>
                    {row.data.map((value, cellIndex) => (
                      <div key={cellIndex} className="text-center">
                        <span className={`font-body text-sm ${
                          cellIndex === bestIndex 
                            ? 'font-bold text-cta-coral bg-cta-coral/10 px-2 py-1 rounded-lg' 
                            : 'text-muted-foreground'
                        }`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Note */}
            <div className="bg-gradient-to-r from-logo-teal/5 to-cta-coral/5 border border-logo-teal/20 rounded-2xl p-6">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Data compiled from industry reports, government statistics, and real estate surveys (2024-2025). Lower values for costs, attrition, and congestion are better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Qualitative Analysis Tab */}
        {activeTab === 'qualitative' && (
          <div className="space-y-8">
            
            {/* Overall Radar Chart */}
            <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
              <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-logo-teal" />
                Overall Performance Radar
              </h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="city" className="font-body text-sm fill-muted-foreground" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} className="font-body text-xs fill-muted-foreground" />
                    <Radar
                      name="Performance"
                      dataKey="Ecosystem"
                      stroke="#37474F"
                      fill="#37474F"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* City Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualitativeAnalysis.map((city, index) => (
                <div key={index} className="bg-card border border-dividers rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  
                  {/* City Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-header font-bold text-xl text-foreground flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-logo-teal" />
                      {city.city}
                    </h3>
                    <div className="text-center">
                      <div className="font-header font-bold text-2xl text-cta-coral">
                        {city.score}
                      </div>
                      <div className="font-body text-xs text-muted-foreground">
                        Score
                      </div>
                    </div>
                  </div>

                  {/* Score Breakdown */}
                  <div className="mb-6 space-y-2">
                    <div className="font-body text-xs text-muted-foreground mb-2">Performance Metrics:</div>
                    {[
                      { label: 'Ecosystem', value: city.ecosystem, color: 'bg-logo-teal' },
                      { label: 'Infrastructure', value: city.infrastructure, color: 'bg-logo-beige' },
                      { label: 'Talent', value: city.talent, color: 'bg-cta-coral' },
                      { label: 'Cost', value: city.cost, color: 'bg-logo-teal/70' },
                      { label: 'Quality', value: city.quality, color: 'bg-cta-coral/70' }
                    ].map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between font-body text-xs">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-dividers rounded-full h-1.5">
                            <div 
                              className={`${metric.color} h-1.5 rounded-full transition-all duration-1000`}
                              style={{ width: `${metric.value}%` }}
                            />
                          </div>
                          <span className="text-muted-foreground w-8">{metric.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pros */}
                  <div className="mb-6">
                    <h4 className="font-header font-semibold text-sm text-foreground mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-logo-teal" />
                      Advantages
                    </h4>
                    <div className="space-y-2">
                      {city.pros.map((pro, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-logo-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span className="font-body text-sm text-muted-foreground">
                            {pro}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="font-header font-semibold text-sm text-foreground mb-3 flex items-center">
                      <Info className="w-4 h-4 mr-2 text-cta-coral" />
                      Considerations
                    </h4>
                    <div className="space-y-2">
                      {city.cons.map((con, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-cta-coral rounded-full mt-2 flex-shrink-0"></div>
                          <span className="font-body text-sm text-muted-foreground">
                            {con}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visual Comparison Tab */}
        {activeTab === 'visual' && (
          <div className="space-y-8">
            
            {/* Talent Pool Bar Chart */}
            <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
              <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-logo-teal" />
                Tech Talent Pool Comparison (Millions)
              </h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={talentPoolData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="name" className="font-body text-sm fill-muted-foreground" />
                    <YAxis className="font-body text-sm fill-muted-foreground" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {talentPoolData.map((entry, index) => (
                        <BarChart2 key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* GCC Count Bar Chart */}
            <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
              <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-cta-coral" />
                Active GCCs Comparison
              </h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gccData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="name" className="font-body text-sm fill-muted-foreground" />
                    <YAxis className="font-body text-sm fill-muted-foreground" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {gccData.map((entry, index) => (
                        <BarChart2Icon key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Multi-Parameter Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Air Quality Comparison */}
              <div className="bg-card border border-dividers rounded-2xl p-6 shadow-lg">
                <h4 className="font-header font-bold text-lg text-foreground mb-4 flex items-center">
                  <Wind className="w-5 h-5 mr-2 text-logo-teal" />
                  Air Quality Index
                </h4>
                
                <div className="space-y-3">
                  {cities.map((city, index) => {
                    const aqiValue = comparisonData[2].data[index];
                    const numericValue = parseFloat(aqiValue.split('-')[0]);
                    const maxValue = 200;
                    const percentage = (numericValue / maxValue) * 100;
                    const colorClass = numericValue < 100 ? 'bg-logo-teal' : numericValue < 150 ? 'bg-logo-beige' : 'bg-cta-coral';
                    
                    return (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-body font-medium text-foreground text-sm">
                            {city.name}
                          </span>
                          <span className="font-body text-sm text-muted-foreground">
                            {aqiValue}
                          </span>
                        </div>
                        <div className="w-full bg-dividers rounded-full h-2">
                          <div 
                            className={`${colorClass} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Traffic Congestion */}
              <div className="bg-card border border-dividers rounded-2xl p-6 shadow-lg">
                <h4 className="font-header font-bold text-lg text-foreground mb-4 flex items-center">
                  <Car className="w-5 h-5 mr-2 text-cta-coral" />
                  Traffic Congestion
                </h4>
                
                <div className="space-y-3">
                  {cities.map((city, index) => {
                    const trafficValue = comparisonData[5].data[index];
                    const numericValue = parseFloat(trafficValue.replace('%', ''));
                    const percentage = numericValue;
                    const colorClass = numericValue < 50 ? 'bg-logo-teal' : numericValue < 60 ? 'bg-logo-beige' : 'bg-cta-coral';
                    
                    return (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-body font-medium text-foreground text-sm">
                            {city.name}
                          </span>
                          <span className="font-body text-sm text-muted-foreground">
                            {trafficValue}
                          </span>
                        </div>
                        <div className="w-full bg-dividers rounded-full h-2">
                          <div 
                            className={`${colorClass} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CityComparison;