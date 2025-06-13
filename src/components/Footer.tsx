import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Globe,
  ArrowRight,
  Building2,
  Users,
  FileText,
  Calendar,
  Download
} from 'lucide-react';
import { imageConstants } from '../../public/images';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about', icon: Building2 },
    { name: 'Our Services', path: '/services', icon: Users },
    { name: 'Why India', path: '/why-india', icon: Globe },
    { name: 'Careers', path: '/careers', icon: FileText }
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
    <footer className="bg-gradient-to-br from-logo-teal to-logo-teal/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cta-coral rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-logo-beige rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-header font-bold text-2xl lg:text-3xl mb-3">
                  Ready to Establish Your GCC in India?
                </h3>
                <p className="font-body text-lg text-white/80">
                  Our experts are ready to guide you through every step of your GCC journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-cta-coral hover:bg-cta-coral/90 text-white px-6 py-3 rounded-xl font-header font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download GCC Handbook
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-white to-logo-beige rounded-xl flex items-center justify-center shadow-lg">
                  <img src={imageConstants.LOGO}/>
                </div>
                <div>
                  <h2 className="font-header font-bold text-xl">Say Space</h2>
                  <p className="text-sm text-white/80 font-body">GCC Solutions & Consulting</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="font-body text-white/80 leading-relaxed max-w-md">
                Your trusted partner for establishing and managing Global Capability Centers in India. 
                We provide end-to-end solutions for seamless GCC setup and operations.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cta-coral" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/60">Email</p>
                    <p className="font-body text-white"><a href='mail:support@sayspace.com'>support@sayspace.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cta-coral" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-white/60">Phone</p>
                    <p className="font-body text-white"><a href='tel:+9198765432'>+91 98765432</a></p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cta-coral" />
                  </div>
                  <div className='max-w-[400px]'>
                    <p className="font-body text-sm text-white/60">Office</p>
                    <p className="font-body text-white">2nd Cross Road, 6th Main Road, Motappana, AppareddyPalya Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cta-coral rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cta-coral rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-cta-coral rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-header font-semibold text-lg mb-6 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-cta-coral" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={link.path} 
                        className="group flex items-center text-white/80 hover:text-white transition-colors duration-200 font-body"
                      >
                        <IconComponent className="w-4 h-4 mr-3 text-white/60 group-hover:text-cta-coral transition-colors duration-200" />
                        {link.name}
                        <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* GCC Policies */}
            <div>
              <h3 className="font-header font-semibold text-lg mb-6 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-cta-coral" />
                GCC Policies
              </h3>
              <ul className="space-y-3">
                {gccPolicies.map((policy, index) => (
                  <li key={index}>
                    <Link 
                      to={policy.path} 
                      className="group text-white/80 hover:text-white transition-colors duration-200 font-body text-sm flex items-center"
                    >
                      <div className="w-2 h-2 bg-cta-coral rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      {policy.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-header font-semibold text-lg mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-cta-coral" />
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      to={resource.path} 
                      className="group text-white/80 hover:text-white transition-colors duration-200 font-body text-sm flex items-center"
                    >
                      <div className="w-2 h-2 bg-logo-beige rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="font-body text-sm text-white/60">
                  © 2024 Your Company. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="/privacy" className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="/cookies" className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="font-body text-sm text-white/60">Made with</span>
                <div className="w-4 h-4 bg-cta-coral rounded-full animate-pulse"></div>
                <span className="font-body text-sm text-white/60">in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;