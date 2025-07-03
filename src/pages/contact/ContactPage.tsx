/* eslint-disable @typescript-eslint/no-explicit-any */
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
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { imageConstants } from '../../../public/images';
import { sendContactFormEmail } from '../../lib/emailService';
import { Button } from '@/components/ui/button';

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
  // Scroll functions for navigation
  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToOfficeLocation = () => {
    const officeSection = document.getElementById('office-location');
    if (officeSection) {
      officeSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
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
      question: 'What is the usual duration for establishing a GCC in India?',
      answer: 'Setting up a GCC in India typically takes 6-12 months, depending on the operation’s scope and complexity. This includes forming the legal entity (2-3 months), arranging facilities (3-4 months), recruiting talent (2-6 months), and preparing for operations (1-2 months). Our end-to-end project management approach accelerates this timeline.',
      isExpanded: false
    },
    {
      id: '2',
      question: 'Why is India a preferred choice for GCC operations compared to other global locations?',
      answer: 'India stands out with key benefits: India’s largest tech workforce (over 5 million professionals), a mature ecosystem hosting 1,600+ GCCs, top-tier infrastructure, supportive government policies, a globalized culture, excellent connectivity, and competitive cost structures across multiple cities. It also balances cost efficiency with high operational standards.',
      isExpanded: false
    },
    {
      id: '3',
      question: 'Which types of businesses are setting up GCCs in India?',
      answer: 'A wide range of companies establish GCCs in India, including leading tech firms (Microsoft, IBM, Cisco), major financial institutions (Goldman Sachs, JPMorgan), industrial leaders (GE, Siemens), healthcare companies (Johnson & Johnson, Novartis), and consultancies (McKinsey, Accenture). Both large corporations and mid-sized enterprises benefit from Bengaluru’s capabilities.',
      isExpanded: false
    },
    {
      id: '4',
      question: 'How do you assist with hiring for our GCC?',
      answer: 'We provide comprehensive recruitment support, including talent market analysis and mapping, executive searches for senior roles, mass hiring for operational positions, employer branding strategies, interview process design and oversight, offer negotiation assistance, onboarding program creation, and long-term retention planning. Our extensive network and proven strategies ensure success.',
      isExpanded: false
    },
    {
      id: '5',
      question: 'What legal and regulatory assistance do you offer?',
      answer: 'We deliver full-spectrum legal and compliance services for GCC setup and operations in India, including entity setup and structuring advice, company registration and paperwork, securing regulatory approvals and licenses, ensuring compliance with labor laws, data privacy regulations, industry-specific rules, and intellectual property safeguards, plus continuous compliance oversight. We collaborate with expert legal partners specializing in GCC operations to keep your center fully compliant with Indian regulations.',
      isExpanded: true
    }
  ]);

  const primaryInterests = [
    'Setting up a new GCC in India',
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using the reusable email service
      await sendContactFormEmail(formData);

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
      console.error('Email sending error:', error);
      setSubmitStatus('error');
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

  const isFormValid = formData.fullName && formData.email && formData.message;

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Matching Other Pages */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          {/* Minimal geometric patterns */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-logo-teal/3 to-transparent"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.015)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh] py-16 lg:py-20">

            {/* Content Side - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-logo-teal/5 border border-logo-teal/15 text-logo-teal text-sm font-medium tracking-wide">
                <div className="w-2 h-2 bg-logo-teal rounded-full mr-2"></div>
                CONTACT US
              </div>

              {/* Main Headline - Enterprise Typography */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight">
                  Let's Build Your
                  <br />
                  <span className="font-semibold text-logo-teal">
                    GCC Success Story
                  </span>
                </h1>

                {/* Professional Subtitle */}
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                  Ready to establish or expand your Global Capability Center in India?
                  Our experts are here to guide you every step of the way.
                </p>
              </div>

              {/* Key Contact Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">24hr Response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Expert Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Free Assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Bengaluru Office</span>
                </div>
              </div>

              {/* Professional CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button 
                  onClick={scrollToContactForm}
                  className="cursor-pointer group bg-cta-coral hover:bg-cta-coral/90 text-white px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  Start Conversation
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>

                <button 
                  onClick={scrollToOfficeLocation}
                  className="cursor-pointer group border-2 border-gray-300 hover:border-logo-teal text-gray-700 hover:text-logo-teal px-8 py-4 font-semibold text-base transition-all duration-200 flex items-center justify-center hover:bg-logo-teal/5"
                >
                  <MapPin className="w-5 h-5 mr-3" />
                  Visit Our Office
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold text-logo-teal">24hr</div>
                    <div className="text-sm text-gray-700 leading-tight font-medium">
                      Response<br />Time
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold text-logo-teal">3+</div>
                    <div className="text-sm text-gray-700 leading-tight font-medium">
                      Years<br />Experience
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-3xl font-bold text-logo-teal">100%</div>
                    <div className="text-sm text-gray-700 leading-tight font-medium">
                      Client<br />Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side - 5 columns */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Professional image container */}
                <div className="relative bg-white shadow-2xl shadow-gray-900/10">
                  <img
                    src={imageConstants.CONTACT.HERO}
                    alt="SaySpace GCC Consulting Team"
                    className="w-full h-auto"
                  />
                  {/* Subtle overlay for professional look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>

                {/* Professional accent elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-logo-teal"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-cta-coral"></div>
              </div>

              {/* Professional floating cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-logo-teal/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-logo-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Expert Support</div>
                    <div className="text-gray-600 text-xs">24/7 Available</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cta-coral/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-cta-coral" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">Trusted Partner</div>
                    <div className="text-gray-600">Enterprise Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section id="contact-form" className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                    Get in <span className="font-semibold text-logo-teal">Touch</span>
                  </h2>
                  <p className="text-gray-600 font-light">
                    Fill out the form below and our team will get back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                        placeholder="Company name (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-900 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  {/* Primary Interest */}
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Primary Interest
                    </label>
                    <select
                      name="primaryInterest"
                      value={formData.primaryInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent cursor-pointer"
                    >
                      <option value="">Select your primary interest (optional)</option>
                      {primaryInterests.map((interest, index) => (
                        <option key={index} value={interest}>{interest}</option>
                      ))}
                    </select>
                  </div>

                  {/* Expected Timeframe */}
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Expected Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent cursor-pointer"
                    >
                      <option value="">Select expected timeframe (optional)</option>
                      {timeframes.map((timeframe, index) => (
                        <option key={index} value={timeframe}>{timeframe}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-logo-teal focus:border-transparent resize-vertical"
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
                      className="mt-1 w-4 h-4 text-logo-teal focus:ring-logo-teal border-gray-300 cursor-pointer"
                    />
                    <label className="text-sm text-gray-600 font-light">
                      I consent to having this website store my submitted information so they can respond to my inquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full flex items-center justify-center px-8 py-4 font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md ${isFormValid && !isSubmitting
                      ? 'bg-logo-teal text-white hover:bg-logo-teal/90 cursor-pointer'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
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
                    <div className="flex items-center p-4 bg-green-50 border border-green-200">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-light">
                        Thank you! Your inquiry has been submitted successfully. We'll get back to you.
                      </span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center p-4 bg-red-50 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-red-800 font-light">
                        Sorry, there was an error submitting your inquiry. Please try again.
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">

              {/* Contact Details */}
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-logo-teal p-2">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <a href="mailto:support@sayspace.com" className="text-gray-600 hover:text-logo-teal transition-colors font-light cursor-pointer">
                        support@sayspace.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cta-coral p-2">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+919845324209" className="text-gray-600 hover:text-cta-coral transition-colors font-light cursor-pointer">
                        +91 9845324209
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-600 p-2">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Office</h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-light">
                        2nd Cross Road, 6th Main Road,<br />
                        HAL 2nd Stage, Indiranagar,<br />
                        Bengaluru, Karnataka 560038
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Office Hours
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Connect With Us
                </h3>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button variant='ghost' disabled>
                        <a
                        key={index}
                        href={social.url}
                        className={`p-3 bg-gray-100 text-gray-600 transition-all duration-200 hover:scale-110 cursor-pointer ${social.color}`}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section id="office-location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
              Visit Our <span className="font-semibold text-logo-teal">Bengaluru Office</span>
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Located in the heart of Indiranagar, one of India's premier business districts
            </p>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20329.90640623002!2d77.63678621576184!3d12.985223947300904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16bad3ebc73f%3A0x434013268fd6b142!2sBengaluru%2C%20Karnataka%20560038%2C%20India!5e1!3m2!1sen!2suk!4v1749897464873!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SaySpace Bengaluru Office Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-1.5 bg-cta-coral/5 border border-cta-coral/15 text-cta-coral text-sm font-medium tracking-wide mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Common <span className="font-semibold text-cta-coral">Questions</span>
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 font-light leading-relaxed">
              Get quick answers about setting up a GCC in India
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {faq.isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-logo-teal flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {faq.isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="text-gray-600 leading-relaxed font-light">
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