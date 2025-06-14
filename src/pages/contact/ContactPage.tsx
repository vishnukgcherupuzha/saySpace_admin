import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

// Type definitions
interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  primaryInterest: string;
  timeframe: string;
  message: string;
  consent: boolean;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  isExpanded: boolean;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    primaryInterest: '',
    timeframe: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: '1',
      question: 'How long does it typically take to set up a GCC in Bangalore?',
      answer: 'The typical timeline for setting up a GCC in Bangalore ranges from 6-12 months, depending on the complexity and scale of operations. This includes entity formation (2-3 months), facility setup (3-4 months), talent acquisition (2-6 months), and operational readiness (1-2 months). We help streamline this process through our comprehensive project management approach.',
      isExpanded: false
    },
    {
      id: '2',
      question: 'What are the key advantages of Bangalore over other Indian cities for GCC operations?',
      answer: 'Bangalore offers several unique advantages: largest tech talent pool in India (5M+ professionals), established ecosystem with 400+ existing GCCs, world-class infrastructure, favorable government policies, cosmopolitan culture, excellent connectivity, and lower attrition rates compared to other metros. The city also provides cost advantages while maintaining high quality standards.',
      isExpanded: false
    },
    {
      id: '3',
      question: 'What type of companies are establishing GCCs in Bangalore?',
      answer: 'Companies across all industries are establishing GCCs in Bangalore, including Fortune 500 technology companies (Microsoft, IBM, Cisco), global financial services firms (Goldman Sachs, JPMorgan), manufacturing giants (GE, Siemens), healthcare organizations (Johnson & Johnson, Novartis), and consulting firms (McKinsey, Accenture). Both large enterprises and mid-market companies find value in Bangalore operations.',
      isExpanded: false
    },
    {
      id: '4',
      question: 'How do you help with talent acquisition for our GCC?',
      answer: 'Our talent acquisition support includes: comprehensive talent mapping and market analysis, executive search for leadership positions, bulk hiring for operational roles, employer branding and market positioning, interview process design and management, offer negotiation and closure support, onboarding program development, and ongoing retention strategies. We leverage our extensive network and proven methodologies.',
      isExpanded: false
    },
    {
      id: '5',
      question: 'What legal and compliance support do you provide?',
      answer: 'Our legal and compliance support services cover all aspects of establishing and operating a GCC in India: Entity formation and structuring recommendations, Company registration and documentation, Regulatory approvals and licenses, Labor law compliance, Data protection and privacy regulations, Industry-specific regulatory requirements, Intellectual property protection, Ongoing compliance monitoring and management. We work with experienced legal partners who specialize in GCC operations to ensure your center is fully compliant with all Indian laws and regulations.',
      isExpanded: true
    }
  ]);

  const primaryInterests = [
    'Setting up a new GCC in Bangalore',
    'Expanding existing GCC operations',
    'GCC talent acquisition',
    'GCC real estate solutions',
    'Legal and compliance support',
    'Job opportunity / Career inquiry',
    'Other (please specify)'
  ];

  const timeframes = [
    'Immediate (0-3 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (12+ months)',
    'Just exploring options'
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-600' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Console log the form data
    console.log('Form Submission:', {
      ...formData,
      submittedAt: new Date().toISOString()
    });

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          company: '',
          phone: '',
          primaryInterest: '',
          timeframe: '',
          message: '',
          consent: false
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      console.log(error)
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (id: string) => {
    setFaqs(prev => prev.map(faq => 
      faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : faq
    ));
  };

  const isFormValid = formData.fullName && formData.email && formData.company && 
                     formData.primaryInterest && formData.message && formData.consent;

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-logo-teal to-cta-coral text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 mr-3" />
              <span className="font-body text-lg font-medium uppercase tracking-wide">
                Contact Us
              </span>
            </div>
            
            <h1 className="font-header font-bold text-5xl lg:text-7xl mb-6">
              Let's Build Your
              <span className="block text-logo-beige">GCC Success Story</span>
            </h1>
            
            <p className="font-body text-xl lg:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Ready to establish or expand your Global Capability Center in Bangalore? 
              Our experts are here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-dividers rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="mb-8">
                  <h2 className="font-header font-bold text-3xl text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="font-body text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body font-medium text-foreground mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  {/* Primary Interest */}
                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">
                      Primary Interest *
                    </label>
                    <select
                      name="primaryInterest"
                      value={formData.primaryInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                    >
                      <option value="">Select your primary interest</option>
                      {primaryInterests.map((interest, index) => (
                        <option key={index} value={interest}>{interest}</option>
                      ))}
                    </select>
                  </div>

                  {/* Expected Timeframe */}
                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">
                      Expected Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                    >
                      <option value="">Select expected timeframe</option>
                      {timeframes.map((timeframe, index) => (
                        <option key={index} value={timeframe}>{timeframe}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-dividers rounded-xl font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent resize-vertical"
                      placeholder="Tell us about your GCC requirements, questions, or how we can help..."
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-logo-teal focus:ring-logo-teal border-dividers rounded"
                    />
                    <label className="font-body text-sm text-muted-foreground">
                      I consent to having this website store my submitted information so they can respond to my inquiry. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 font-header font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl ${
                      isFormValid && !isSubmitting
                        ? 'bg-logo-teal text-white hover:bg-logo-teal/90'
                        : 'bg-dividers text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-body text-green-800">
                        Thank you! Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
                      </span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <span className="font-body text-red-800">
                        Sorry, there was an error submitting your inquiry. Please try again.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
                <h3 className="font-header font-bold text-xl text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-logo-teal rounded-lg p-2">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-body font-medium text-foreground mb-1">Email</h4>
                      <a href="mailto:support@sayspace.com" className="font-body text-muted-foreground hover:text-logo-teal transition-colors">
                        support@sayspace.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cta-coral rounded-lg p-2">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-body font-medium text-foreground mb-1">Phone</h4>
                      <a href="tel:+919876543210" className="font-body text-muted-foreground hover:text-cta-coral transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-logo-beige rounded-lg p-2">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-body font-medium text-foreground mb-1">Office</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        2nd Cross Road, 6th Main Road,<br />
                        Motappana, AppareddyPalya Rd,<br />
                        HAL 2nd Stage, Indiranagar,<br />
                        Bengaluru, Karnataka 560038
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
                <h3 className="font-header font-bold text-xl text-foreground mb-6">
                  Office Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Monday - Friday</span>
                    <span className="font-body font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Saturday</span>
                    <span className="font-body font-medium text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Sunday</span>
                    <span className="font-body font-medium text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-dividers rounded-2xl p-8 shadow-lg">
                <h3 className="font-header font-bold text-xl text-foreground mb-6">
                  Connect With Us
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`p-3 bg-dividers/30 rounded-lg text-muted-foreground transition-all duration-200 hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-dividers/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-header font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Visit Our <span className="text-logo-teal">Bangalore Office</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Located in the heart of Indiranagar, one of Bangalore's premier business districts
            </p>
          </div>

          <div className="bg-card border border-dividers rounded-3xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20329.90640623002!2d77.63678621576184!3d12.985223947300904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16bad3ebc73f%3A0x434013268fd6b142!2sBengaluru%2C%20Karnataka%20560038%2C%20India!5e1!3m2!1sen!2suk!4v1749897464873!5m2!1sen!2suk" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GCC Bangalore Office Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-cta-coral mr-2" />
              <span className="font-body text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Frequently Asked Questions
              </span>
            </div>
            
            <h2 className="font-header font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Find Answers to <span className="text-cta-coral">Common Questions</span>
            </h2>
            
            <p className="font-body text-xl text-muted-foreground">
              Get quick answers about setting up a GCC in Bangalore
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-card border border-dividers rounded-2xl overflow-hidden shadow-lg">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-dividers/10 transition-colors duration-200"
                >
                  <h3 className="font-header font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {faq.isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {faq.isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="font-body text-muted-foreground leading-relaxed">
                      {faq.id === '5' ? (
                        <div>
                          <p className="mb-4">{faq.answer.split(':')[0]}:</p>
                          <ul className="space-y-2 ml-4">
                            {[
                              'Entity formation and structuring recommendations',
                              'Company registration and documentation',
                              'Regulatory approvals and licenses',
                              'Labor law compliance',
                              'Data protection and privacy regulations',
                              'Industry-specific regulatory requirements',
                              'Intellectual property protection',
                              'Ongoing compliance monitoring and management'
                            ].map((item, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-logo-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-4">
                            We work with experienced legal partners who specialize in GCC operations to ensure your center is fully compliant with all Indian laws and regulations.
                          </p>
                        </div>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;