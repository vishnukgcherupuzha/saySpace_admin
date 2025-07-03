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
    { name: 'Bengaluru', color: 'bg-blue-600', textColor: 'text-blue-600' },
    { name: 'Hyderabad', color: 'bg-green-600', textColor: 'text-green-600' },
    { name: 'Delhi NCR', color: 'bg-purple-600', textColor: 'text-purple-600' },
    { name: 'Mumbai', color: 'bg-orange-600', textColor: 'text-orange-600' },
    { name: 'Chennai', color: 'bg-red-600', textColor: 'text-red-600' },
    { name: 'Pune', color: 'bg-indigo-600', textColor: 'text-indigo-600' }
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
      city: 'Bengaluru',
      pros: ['Technology innovation hub', 'Large talent pool', 'Established GCC ecosystem', 'Strong startup culture', 'Global connectivity', 'Premier R&D centers'],
      cons: ['Higher operational costs', 'Traffic congestion', 'Infrastructure challenges', 'Water management concerns'],
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
      city: 'Pune',
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

  // Prepare chart data with neutral color palette
  const talentPoolData = cities.map((city, index) => ({
    name: city.name,
    value: parseFloat(comparisonData[0].data[index].replace(/[^0-9.]/g, '')),
    fill: index === 0 ? '#2563EB' : index === 1 ? '#059669' : index === 2 ? '#7C3AED' : index === 3 ? '#EA580C' : index === 4 ? '#DC2626' : '#4F46E5'
  }));

  const gccData = cities.map((city, index) => ({
    name: city.name,
    value: parseFloat(comparisonData[4].data[index].replace(/[^0-9.]/g, '')),
    fill: index === 0 ? '#2563EB' : index === 1 ? '#059669' : index === 2 ? '#7C3AED' : index === 3 ? '#EA580C' : index === 4 ? '#DC2626' : '#4F46E5'
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
        <div className="bg-white p-3 border border-gray-200 rounded-lg">
          <p className="font-medium text-gray-900">{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            LOCATION ANALYSIS
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Choose Your Ideal <span className="font-semibold text-logo-teal">GCC Location</span> in India
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
            Explore and compare India's leading tech cities to find the perfect location for your Global Capability Center
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-white border border-gray-200 p-2 max-w-2xl mx-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 font-medium transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-logo-teal text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
            <div className="bg-white border border-gray-200 overflow-hidden">
              
              {/* Table Header */}
              <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200 p-4">
                <div className="font-semibold text-sm lg:text-base text-gray-900">Parameter</div>
                {cities.map((city, index) => (
                  <div key={index} className="font-semibold text-sm lg:text-base text-center text-gray-900">
                    {city.name}
                  </div>
                ))}
              </div>
              
              {/* Table Rows */}
              {comparisonData.map((row, rowIndex) => {
                const IconComponent = row.icon;
                const bestIndex = getBestValue(row.data, row.better);
                
                return (
                  <div key={rowIndex} className={`grid grid-cols-7 p-4 border-b border-gray-200 last:border-b-0 ${
                    rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-logo-teal flex-shrink-0" />
                      <span className="font-medium text-gray-900 text-sm">
                        {row.parameter}
                      </span>
                    </div>
                    {row.data.map((value, cellIndex) => (
                      <div key={cellIndex} className="text-center">
                        <span className={`text-sm ${
                          cellIndex === bestIndex 
                            ? 'font-bold text-cta-coral bg-cta-coral/10 px-2 py-1' 
                            : 'text-gray-600 font-light'
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
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-logo-teal flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600 font-light">
                    <strong className="text-gray-900">Note:</strong> Data compiled from industry reports, government statistics, and real estate surveys (2024-2025). Lower values for costs, attrition, and congestion are better.
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
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-logo-teal" />
                Overall Performance Radar
              </h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis dataKey="city" className="text-sm fill-gray-600" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs fill-gray-600" />
                    <Radar
                      name="Performance"
                      dataKey="Ecosystem"
                      stroke="#6366F1"
                      fill="#6366F1"
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
                <div key={index} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  
                  {/* City Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-logo-teal" />
                      {city.city}
                    </h3>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">
                        {city.score}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        Score
                      </div>
                    </div>
                  </div>

                  {/* Score Breakdown */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs text-gray-600 mb-2 font-medium">Performance Metrics:</div>
                    {[
                      { label: 'Ecosystem', value: city.ecosystem, color: 'bg-blue-500' },
                      { label: 'Infrastructure', value: city.infrastructure, color: 'bg-green-500' },
                      { label: 'Talent', value: city.talent, color: 'bg-purple-500' },
                      { label: 'Cost', value: city.cost, color: 'bg-orange-500' },
                      { label: 'Quality', value: city.quality, color: 'bg-red-500' }
                    ].map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">{metric.label}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 h-1.5">
                            <div 
                              className={`${metric.color} h-1.5 transition-all duration-1000`}
                              style={{ width: `${metric.value}%` }}
                            />
                          </div>
                          <span className="text-gray-600 w-8">{metric.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pros */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      Advantages
                    </h4>
                    <div className="space-y-2">
                      {city.pros.map((pro, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-600 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 font-light">
                            {pro}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-3 flex items-center">
                      <Info className="w-4 h-4 mr-2 text-orange-600" />
                      Considerations
                    </h4>
                    <div className="space-y-2">
                      {city.cons.map((con, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-600 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 font-light">
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
            <div className="bg-white border border-gray-200 p-8 ">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Tech Talent Pool Comparison (Millions)
              </h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={talentPoolData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="name" className="text-sm fill-gray-600" />
                    <YAxis className="text-sm fill-gray-600" />
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
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-green-600" />
                Active GCCs Comparison
              </h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gccData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="name" className="text-sm fill-gray-600" />
                    <YAxis className="text-sm fill-gray-600" />
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
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Wind className="w-5 h-5 mr-2 text-purple-600" />
                  Air Quality Index
                </h4>
                
                <div className="space-y-3">
                  {cities.map((city, index) => {
                    const aqiValue = comparisonData[2].data[index];
                    const numericValue = parseFloat(aqiValue.split('-')[0]);
                    const maxValue = 200;
                    const percentage = (numericValue / maxValue) * 100;
                    const colorClass = numericValue < 100 ? 'bg-green-500' : numericValue < 150 ? 'bg-yellow-500' : 'bg-red-500';
                    
                    return (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-900 text-sm">
                            {city.name}
                          </span>
                          <span className="text-sm text-gray-600 font-light">
                            {aqiValue}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div 
                            className={`${colorClass} h-2 transition-all duration-1000`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Traffic Congestion */}
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Car className="w-5 h-5 mr-2 text-red-600" />
                  Traffic Congestion
                </h4>
                
                <div className="space-y-3">
                  {cities.map((city, index) => {
                    const trafficValue = comparisonData[5].data[index];
                    const numericValue = parseFloat(trafficValue.replace('%', ''));
                    const percentage = numericValue;
                    const colorClass = numericValue < 50 ? 'bg-green-500' : numericValue < 60 ? 'bg-yellow-500' : 'bg-red-500';
                    
                    return (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-900 text-sm">
                            {city.name}
                          </span>
                          <span className="text-sm text-gray-600 font-light">
                            {trafficValue}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-2">
                          <div 
                            className={`${colorClass} h-2 transition-all duration-1000`}
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