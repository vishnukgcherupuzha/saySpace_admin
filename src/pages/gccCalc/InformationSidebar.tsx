import { CheckCircle, Lightbulb, Phone, Star } from 'lucide-react';


const InformationSidebar = () => {
  return (
    <div className="space-y-8">
      
      {/* What's Included */}
      <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
        <h3 className="font-header font-bold text-xl text-foreground mb-6 flex items-center">
          <CheckCircle className="w-5 h-5 text-logo-teal mr-2" />
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
          <Lightbulb className="w-5 h-5 text-cta-coral mr-2" />
          Did You Know?
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <Star className="w-5 h-5 text-logo-teal mt-0.5 mr-3 flex-shrink-0" />
            <p className="font-body text-sm text-muted-foreground">
              Companies can achieve <strong className="text-foreground">30-40% cost savings</strong> by establishing their GCC in Bangalore compared to Western locations.
            </p>
          </div>
          <div className="flex items-start">
            <Star className="w-5 h-5 text-cta-coral mt-0.5 mr-3 flex-shrink-0" />
            <p className="font-body text-sm text-muted-foreground">
              Bangalore offers <strong className="text-foreground">15-20% lower operational costs</strong> than other major Indian cities like Mumbai or Delhi.
            </p>
          </div>
          <div className="flex items-start">
            <Star className="w-5 h-5 text-logo-beige mt-0.5 mr-3 flex-shrink-0" />
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

export default InformationSidebar