import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Globe,
  ArrowRight,
  Calendar,
  // Download,
  ExternalLink
} from 'lucide-react';
import { imageConstants } from '../../public/images';
import { Link } from 'react-router-dom';
import PopoverForm from './PopoverForm';
import { Button } from './ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Why India', path: '/why-india' },
    { name: 'Careers', path: '/careers' }
  ];

  const gccPolicies = [
    { name: 'Maharashtra Policy', path: '/gcc-policies/maharashtra' },
    { name: 'Karnataka Policy', path: '/gcc-policies/karnataka' },
    { name: 'Tamil Nadu Policy', path: '/gcc-policies/tamil-nadu' },
    { name: 'Gujarat Policy', path: '/gcc-policies/gujarat' },
    { name: 'Telangana Policy', path: '/gcc-policies/telangana' }
  ];

  const resources = [
    { name: 'GCC Setup Guide', path: '/resources/setup-guide' },
    { name: 'Market Research', path: '/resources/market-research' },
    { name: 'Legal Documentation', path: '/resources/legal-docs' },
    { name: 'Success Stories', path: '/resources/case-studies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter/CTA Section */}
      <div className="bg-logo-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
                Ready to establish your <span className="font-semibold">GCC in India?</span>
              </h3>
              <p className="text-lg text-white/90 font-light leading-relaxed">
                Our experts are ready to guide you through every step of your Global Capability Center journey.
              </p>
            </div>

            <div className="lg:text-right">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <PopoverForm
                  title="Schedule Consultation"
                  subtitle="Let's discuss your GCC requirements and how we can help."
                  submitButtonText="Schedule Consultation"
                  successMessage="Thank you! We'll contact you to schedule your consultation."
                >
                 <button className="cursor-pointer group bg-white text-logo-teal hover:bg-gray-50 px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </PopoverForm>
                {/* <button className="cursor-pointer border-2 border-white text-white hover:bg-white hover:text-logo-teal px-8 py-4 font-semibold transition-all duration-200 inline-flex items-center justify-center">
                  <Download className="w-5 h-5 mr-3" />
                  Download Guide
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-logo-teal flex items-center justify-center">
                  <img src={imageConstants.LOGO} alt="SaySpace Logo" className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">SaySpace</h2>
                  <p className="text-sm text-gray-400">GCC Solutions & Consulting</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed max-w-md font-light">
                Your trusted partner for establishing and managing Global Capability Centers in India.
                We provide end-to-end solutions for seamless GCC setup and operations.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-800 flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-logo-beige" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:support@sayspace.com" className="text-white hover:text-logo-beige transition-colors duration-200 cursor-pointer">
                      support@sayspace.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-800 flex items-center justify-center mt-1">
                    <Phone className="w-5 h-5 text-logo-beige" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+919845324209" className="text-white hover:text-logo-beige transition-colors duration-200 cursor-pointer">
                      +91 9845324209
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-800 flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-logo-beige" />
                  </div>
                  <div className="max-w-xs">
                    <p className="text-sm text-gray-400 mb-1">Office</p>
                    <p className="text-white text-sm leading-relaxed">
                      2nd Cross, 6th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <Button className=" w-10 h-10 bg-gray-800 hover:bg-logo-teal text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer" disabled>
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button className=" w-10 h-10 bg-gray-800 hover:bg-logo-teal text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer" disabled>
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button className=" w-10 h-10 bg-gray-800 hover:bg-logo-teal text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer" disabled>
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-4 border-b border-gray-800">
                Company
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="group text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light flex items-center cursor-pointer"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GCC Policies */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-4 border-b border-gray-800">
                GCC Policies
              </h3>
              <ul className="space-y-3">
                {gccPolicies.map((policy, index) => (
                  <Button key={index} disabled={true} variant='ghost'>
                    <Link
                      to={policy.path}
                      className="group text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light flex items-center cursor-pointer"
                    >
                      {policy.name}
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </Button>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 pb-4 border-b border-gray-800">
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <Button key={index} variant={'ghost'} disabled>
                    <Link
                      to={resource.path}
                      className="group text-gray-300 hover:text-white transition-colors duration-200 text-sm font-light flex items-center cursor-pointer"
                    >
                      {resource.name}
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </Button>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <p className="text-sm text-gray-400">
                  © 2023 SaySpace. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    Privacy Policy
                  </a>
                  {/* <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a> */}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Made with</span>
                <div className="w-2 h-2 bg-cta-coral rounded-full"></div>
                <span className="text-sm text-gray-400">in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;